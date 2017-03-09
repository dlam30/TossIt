
/**
 * APIHandler.js
 *
 * This is an API class for RESTful API purpose
 *
 * @version 0.1
 * @author  Diem Lam
 * @updated 2017-03-06
 *
 */

import React, { Component } from 'react'
import {View} from 'react-native'
import * as firebase from 'firebase'

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAtyvVb1sMkEa8I7USUk7Ee3Do1lnaMQ9A",
  authDomain: "goingmerry-53c7c.firebaseapp.com",
  databaseURL: "https://goingmerry-53c7c.firebaseio.com",
  storageBucket: "goingmerry-53c7c.appspot.com",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
db = firebaseApp.database();
const URL = 'https://goingmerry-53c7c.firebaseio.com';

export default class ApiHandler extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <View></View>
        )
    }

    // Debug purpose
    printMe() {
        alert('debug');
    }

    /**
     * A function to create a new user
     */
    createNewUser = (username, password, name) => {
        var data = {password: password}

        var _url = URL + '/users.json';
        fetch(_url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
                body: JSON.stringify(data)
            }).then((response) => response.text()
            .then((responseText) => {
                console.log(JSON.parse(responseText));
            }))
    }

    /**;
     * A function to retrieve user's list of posting items
     */
    getItem = (username, callback) => {
        var _url = 'users/' + username + '/post_list/';
        db.ref(_url).once('value', (snapshot) => {
            if (snapshot.val()) {
                callback(snapshot.val());
            }
        });
    }

    /**
     * A function to post a new item
     */
    postItem = (username, item, data) => {
        var _url = 'users/' + username + '/post_list/' + item;
        db.ref(_url).set(data);
    }
}

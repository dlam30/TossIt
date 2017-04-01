
/**
 * APIHandler.js
 *
 * This is an API class for RESTful API purpose
 *
 * @version 2.0
 * @author  Diem Lam
 * @updated 2017-03-06
 *
 */

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

export default class ApiHandler {
    // Debug purpose
    printMe() {
        alert('debug');
    }

    /**
     * A function to create a new user
     */
    createNewUser = (username, info, password, callback) => {
        var _url = 'users/' + username;
        db.ref(_url).once('value', (snapshot) => {
            if (snapshot.val()) {
                callback(false);
            } else {
                db.ref(_url).set({
                    name: info.name,
                    password: password,
                    email: info.email,
                    phone_number: info.phone,
                    post_list: ''
                });
                callback(true);
            }
        });
    }

    /**
     * A function to validate when users login
     */
    validation = (info, callback) => {
        var username = info.username;
        var password = info.password;
        var _url = 'users/' + username;
        db.ref(_url).once('value', (snapshot) => {
            if (snapshot.val()) {
                if (password != snapshot.val().password) {
                    callback('Password mismatch!', false);
                } else {
                    callback('', true);
                }
            } else {
                callback('This user does not exist, please sign up!', false);
            }
        });
    }

    /**
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
     * A function to retrieve list of pickup items
     */
    getPickUpList = (username, callback) => {
        var _url = 'users/' + username + '/pickup_list/';
        db.ref(_url).once('value', (snapshot) => {
            if (snapshot.val()) {
                callback(snapshot.val());
            }
        })
    }

    /**
     * A function to post a new item
     */
    postItem = (username, item, data) => {
        var _url = 'users/' + username + '/post_list/' + item;
        db.ref(_url).set(data);
    }
}


/**
 * APIHandler.js
 *
 * This is an API class for RESTful API purpose
 *
 * @version 3.0
 * @author  Diem Lam
 * @updated 2017-04-02
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
// const API_KEY = 'AIzaSyA1JOiFJQN7Z-fHLRkepmR1xBv3ubFiLHI';
const API_KEY = 'AIzaSyD_3jscrs2TyDcDXVe0ulQQrgyMJMOHSg0';
const PATH = 'https://maps.googleapis.com/maps/api/geocode/json?address='

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
                    phone_number: info.phone
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
    postItem = (username, data) => {
        var _url = 'users/' + username + '/post_list/';
        db.ref(_url).push(data);
    }

    /**
     * A function to get geo location from an address
     */
    getLocation = (address, callback) => {
        var converted = this.convertSpace(address);
        var _url = PATH + converted + '&key=' + API_KEY;
        fetch(_url)
            .then((data) => {
                return data.json();
            })
            .then((response) => {
                var result = response.results[0].geometry.location;
                callback(result.lat + ',' + result.lng);
            })
            .catch((error) => {
                callback(false);
            })
    }

    /**
     * A function to convert space to equal sign
     */
    convertSpace = (str) => {
        var result = '';
        for (var i = 0; i < str.length; i++) {
            result += (str.charAt(i) == ' ') ? '+' : str.charAt(i);
        }
        return result;
    }

    /**
     * A function that get list of items
     */
    retrievePins = (city, state, callback) => {
        var result = [];
        var _url = 'users/';
        db.ref(_url).once('value', (snapshot) => {
            snapshot.forEach((user) => {
                var data = user.val();
                // user has posted items
                if (data.post_list !== undefined) {
                    for (var item in data.post_list) {
                        if (data.post_list.hasOwnProperty(item)) {
                            // if (data.post_list[item].city == city) {
                            result.push({
                                item: data.post_list[item],
                                user: user.key,
                                key: item
                            });
                            // }
                        }
                    }
                }
            })
            callback(result);
        })
    }
}

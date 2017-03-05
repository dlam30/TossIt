// import React, { Component } from 'react'

// import {
//    StyleSheet,
//    Text,
//    Navigator,
//    TouchableOpacity
// } from 'react-native'

// import MyListings from './MyListings'
// import NewListing from './NewListing'


// export default class TestRoute extends Component {
//     render() {
//         return (
//             <Navigator
//                 initialRoute = {{ title: 'MyListings', name: 'MyListings' }}
//                 renderScene = { this.renderScene }
//             />
//         );
//     }

//     renderScene(route, navigator) {
//         if (route.name == 'MyListings') {
//             return (
//                 <MyListings
//                     navigator = { navigator }
//                     // {...route.passProps}
//                 />
//             )
//         }
//         if (route.name == 'NewListing') {
//             // console.log("in Router " + route.username);
//             return (
//                 <NewListing
//                     navigator = { navigator }
//                     // username = { route.username }
//                 />
//             )
//         }
//     }
// }

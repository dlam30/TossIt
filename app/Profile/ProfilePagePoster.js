import React, { Component } from 'react'
import {
   View,
   Text,
   Button,
   TextInput,
   TouchableHighlight,
   StyleSheet,
   ScrollView,
   AppRegistry,
   Dimensions,
   StatusBar,
   Image
} from 'react-native'
import ItemList from '../Poster/ItemList'
import ApiHandler from '../API/ApiHandler'

var app = new ApiHandler();
var {height, width} = Dimensions.get('window');

export default class MyPickups extends Component {
    constructor(props) {
        super(props);
        this.state = {  name: '',
                        mode: ''}
    }
    render() {

        return (
            <View style={{flex: 1}}>

                <View style={{flex: 0.92}}>
                    <Text style={{fontWeight: 'bold', fontSize: 40, color: 'gray'}}>
                        {"\t"}Profile Page
                    </Text>
                    <ScrollView contentContainerStyle = { styles.container }>
                        <TouchableHighlight style={ styles.profileName }>
                            <View style= {{flex: 1, flexDirection: "row"}}>
                                <Text style={{fontSize: 30, justifyContent: 'center'}}>{"\n"}Username{"\n\n"}</Text>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight onPress={this._onPressHauler} style={ styles.profileTouchable }>
                            <View style= {{flex: 1, flexDirection: "row"}}>
                                <View style={ styles.touchableText }>
                                    <Text style={{fontSize: 20}}>Switch to Hauler Mode</Text>
                                </View>
                                <View style={ styles.touchableImage }>
                                    <Image
                                        style={{width: 30, height: 30}}
                                        source= {require('../Images/Icons/Pickup.png')}
                                    />
                                </View>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight onPress={this._onPressLogout} style={ styles.profileTouchable }>
                            <View style= {{flex: 1, flexDirection: "row"}}>
                                <View style={ styles.touchableText }>
                                    <Text style={{fontSize: 20}}>Sign-Out</Text>
                                </View>
                                <View style={ styles.touchableImage }>
                                    <Image
                                        style={{width: 30, height: 30}}
                                        source= {require('../Images/Icons/Profile.png')}
                                    />
                                </View>
                            </View>
                        </TouchableHighlight>
                    </ScrollView>
                </View>

                <View style={{flex: 0.08, flexDirection: 'row', borderColor:'gray', borderWidth:1}}>
                    <TouchableHighlight onPress={this._onPressDockNewListing}
                        style = {{flex: 0.25, flexDirection: 'row'}}>
                        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Image
                                source = {require('../Images/Icons/New Listing.png')}
                                style={{width: 25, height: 25}}>
                            </Image>
                            <Text style={styles.dockText}>NEW</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={this._onPressDockListings}
                        style = {{flex: 0.25, flexDirection: 'row'}}>
                        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Image
                                source = {require('../Images/Icons/Listings.png')}
                                style={{width: 25, height: 25}}>
                            </Image>
                            <Text style={styles.dockText}>LISTINGS</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={this._onPressDockInbox} underlayColor = 'gray'
                        style = {{flex: 0.25, flexDirection: 'row'}}>
                        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Image
                                source = {require('../Images/Icons/Inbox.png')}
                                style={{width: 25, height: 25}}>
                            </Image>
                            <Text style={styles.dockText}>INBOX</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight underlayColor = {'gray'} activeOpacity = {50}
                        style = {{flex: 0.25, flexDirection: 'row'}}>
                        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Image
                                source = {require('../Images/Icons/Profile.png')}
                                style={{width: 25, height: 25}}>
                            </Image>
                            <Text style={styles.dockText}>PROFILE</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }

    _onPressDockNewListing = () => { //FIXME: this is push right now because newlisting currently does not have a nav bar, only a back button that pops. This should probably be changed to make it more consistent
        this.props.navigator.push({
            title: 'New Listing',
            name: 'NewListing',
            passProps: {
                username: this.props.username
            }
        })
    }

    _onPressDockListings = () => {
        this.props.navigator.replace({
            title: 'My Listings',
            name: 'MyListings',
            passProps: {
                username: this.props.username
            }
        })
    }

    _onPressDockInbox = () => {
        this.props.navigator.replace({
            title: 'Inbox',
            name: 'DemoInbox',
            passProps: {
                username: this.props.username
            }
        })
    }

    _onPressBack = () => {
        this.props.navigator.pop()
    }

    _onPressHauler = () => {
        alert('Switched to Hauler Mode!');

        isLoaded = false;
        this.props.navigator.replace({
            title: 'Profile Page Hauler',
            name: 'ProfilePageHauler',
            passProps: {
                username: this.props.username
            }
        })
    }

    _onPressLogout = () => {
        alert('You have been signed out of your account.');
        this.props.navigator.popToTop()
    }

}

const styles = StyleSheet.create({

container: {
        alignItems: 'center',
        width: width
    },

  dockText: {
    fontSize: 11,
    fontWeight: 'bold'
  },

  profileName: {
    width: width/1.1,
    flex: 0.4,
    justifyContent: 'center'
  },

  profileTouchable: {
    borderColor: 'gray',
    borderBottomWidth: 1,
    width: width/1.1,
    height: height/9,
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center'
  },

  touchableText: {
    flex: 0.8,
    justifyContent: 'center'
  },

  touchableImage: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

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
                    <Text style={{fontWeight: 'bold', fontSize: 40, color: 'gray', width: width/1.1}}>
                        {"\t"}Profile Page
                    </Text>
                    <ScrollView contentContainerStyle = { styles.container }>
                        <TouchableHighlight style={ styles.profileName }>
                            <View style= {{flex: 1, flexDirection: "row"}}>
                                <Text style={{fontSize: 30, justifyContent: 'center'}}>Username {"\n\n"}</Text>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight onPress={this._onPressPoster} style={ styles.profileTouchable }>
                            <View style= {{flex: 1, flexDirection: "row"}}>
                                <View style={ styles.touchableText }>
                                    <Text style={{fontSize: 20}}>Switch to Poster Mode</Text>
                                </View>
                                <View style={ styles.touchableImage }>
                                    <Image
                                        style={{width: 30, height: 30}}
                                        source= {require('../Images/Icons/Listings.png')}
                                    />
                                </View>
                            </View>
                        </TouchableHighlight>
                    </ScrollView>
                </View>

                <View style={{flex: 0.08, flexDirection: 'row', borderColor:'gray', borderWidth:1}}>
                    <TouchableHighlight onPress={this._onPressDockExplore}
                        style = {{flex: 0.25, flexDirection: 'row'}}>
                        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Image
                                source = {require('../Images/Icons/Search.png')}
                                style={{width: 25, height: 25}}>
                            </Image>
                            <Text style={styles.dockText}>EXLPORE</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={this._onPressDockMyPickups}
                        style = {{flex: 0.25, flexDirection: 'row'}}>
                        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Image
                                source = {require('../Images/Icons/Pickup.png')}
                                style={{width: 25, height: 25}}>
                            </Image>
                            <Text style={styles.dockText}>PICKUPS</Text>
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

    _onPressDockExplore = () => {
        this.props.navigator.replace({
            title: 'Exlpore',
            name: 'Map',
            passProps: {
                username: this.props.username
            }
        })
    }

    _onPressDockMyPickups = () => {
        this.props.navigator.replace({
            title: 'My Pickups',
            name: 'MyPickups',
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

    _onPressPoster = () => { //FIXME: Replace with profile page
        alert('Switched to Hauler Mode!');

        this.props.navigator.replace({
            title: 'Profile Page Poster',
            name: 'ProfilePagePoster',
            passProps: {
                username: this.props.username
            }
        })
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
    flex: 0.25,
    justifyContent: 'center'
  },

  touchableText: {
    flex: 0.8
  },

  touchableImage: {
    flex: 0.2,  
    alignItems: 'center'
  }
});

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
import ItemList from './ItemList'
import ApiHandler from '../API/ApiHandler'
var app = new ApiHandler();

var {height, width} = Dimensions.get('window');

export default class MyListings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            array: []
        }
    }

    render() {
        this.updateItemList((response) => {
            this.setState({ array: response });
        });

        var result = [];
        var array = this.state.array;

        if (array.length > 0) {
            var count = 0;
            array.forEach((item) => {
                result.push(<ItemList key={count} info={item} />);
                count++;
            });
        } else {
            result.push(<Text key={'text'} style={{fontSize:20}}>You currently do not have any items listed.</Text>);
        }

        return (
            <View style={{flex: 1}}>
            <View style={{flex: 0.92}}>
                <Text style={{fontWeight: 'bold', fontSize: 40, color: 'gray'}}>
                    Listings
                </Text>
                <ScrollView>
                        <View>{ result }</View>
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

                <TouchableHighlight style = {{flex: 0.25, flexDirection: 'row'}}>
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

                <TouchableHighlight onPress={this._onPressHauler} underlayColor = {'gray'} activeOpacity = {50}
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
        );
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

    _onPressHauler = () => { // FIXME: Replace with Profile
        this.props.navigator.replace({
            title: 'Map',
            name: 'Map',
            passProps: {
                username: this.props.username
            }
        })
    }

    updateItemList = (callback) => {
        var array = [];
        var count = 0;
        app.getItem(this.props.username, (response) => {
            for (var key in response) {
                if (response.hasOwnProperty(key)) {
                    var obj = response[key];
                    array[count] = obj;
                    count++;
                }
            }
            callback(array);
        })
    }

    _onRegionChangeComplete(region)
    {

    }
}

const styles = StyleSheet.create({
  dockText: {
    fontSize: 11,
    fontWeight: 'bold'
  }
  /*container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    //textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  map: {
      width: width,
      height: height - 50 // * 2/3
  },
  button: {
      borderWidth: 1,
      padding: 25,
      borderColor: 'black'
  },
  toolbar: {
      backgroundColor: '#333333',
      flexDirection: 'row',
  },
  toolbarButton: {
      width: 50,
      color:'#fff',
      //textAlign: 'center'
  },
  toolbarTH: {
      width: 50,
      //textAlign: 'center'
  },*/
});

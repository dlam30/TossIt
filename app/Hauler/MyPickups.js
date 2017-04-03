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

export default class MyPickups extends Component {
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
            array.forEach((item) => {
                result.push(<ItemList key={item.item} info={item} />);
            });
        } else {
            result.push(<Text key={'text'} style={{fontSize:20}}>You currently do not have any items listed.</Text>);
        }
        return (
            <View style={{flex: 1}}>

            <View style={{flex: 0.92}}>
                <Text style={{fontWeight: 'bold', fontSize: 40, color: 'gray'}}>
                    Pickups
                </Text>
                <ScrollView>
                    <View>{ result }</View>
                </ScrollView>
                <Button
                    onPress = {this._onPressDemo}
                    style = {{height: 50, borderWidth: 0.5, borderColor: 'black' }}
                    title = 'Demo Pickup Item'
                    color = '#dcdcdc'>
                </Button>
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

                <TouchableHighlight style = {{flex: 0.25, flexDirection: 'row'}}>
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

                <TouchableHighlight onPress={this._onPressPoster} underlayColor = {'gray'} activeOpacity = {50}
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
        this.props.navigator.replace({
            title: 'My Listings',
            name: 'MyListings',
            passProps: {
                username: this.props.username
            }
        })
    }

    _onPressDemo = () => {
        this.props.navigator.push({
            title: 'Demo Item',
            name: 'DemoItem',
        })
    }

    _viewItemDetail = (name) => {
        this.props.navigator.push({
            title: 'Item page',
            name: 'ItemPage'
            // passProps: {
            //     name: name
            // }
        })
    }

    updateItemList = (callback) => {
        var array = [];
        var count = 0;
        app.getPickUpList(this.props.username, (response) => {
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
      flex: 0.92,
      width: width,
      height: height - 50 // * 2/3
  },
  button: {
      borderWidth: 1,
      padding: 25,
      borderColor: 'black'
  },
  toolbar: {
      backgroundColor: 'transparent',
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

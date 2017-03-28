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

var {height, width} = Dimensions.get('window');

export default class MyListings extends Component {
    constructor(props) {
        super(props);
    }

    //<ItemList info={ this.props.array[0] }/>
    render() {
        var array = this.props.array;
        var result = [];

        if (array != null) {
            array.forEach((item) => {
                console.log(item);
                result.push(<ItemList key={item.item} info={item} />);
            });
        } else {
            result.push(<Text key={'text'} style={{fontSize:20}}>You currently do not have any items listed.</Text>);
        }
        /*array.forEach((item) => {
            console.log(item);
            result.push(<ItemList info={item} key={item.item}/>);
        });*/
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

                <TouchableHighlight onPress={this._onPressBack} underlayColor = 'gray'
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

    _onPressDockNewListing = () => {
        this.props.navigator.push({
            title: 'New Listing',
            name: 'NewListing',
            passProps: {
                username: this.props.username
            }
        })
    }

    _onPressBack = () => {
        this.props.navigator.pop()
    }

    _onPressHauler = () => {
        this.props.navigator.push({
            title: 'Map',
            name: 'Map',
            passProps: {
                username: this.props.username
            }
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

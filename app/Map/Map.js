/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Dimensions,
  TouchableHighlight,
  StatusBar,
  TextInput,
  View,
  Button,
  Image,
} from 'react-native';
import MapView from 'react-native-maps';

var {height, width} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LAT = 33.78756;
const LON = -84.3963;

const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = .0421;

var colors = ['#ddd', '#efefef', 'red', '#666', 'rgba(0,0,0,.1)', '#ededed'];
var backgroundcolors = ['green', 'black', 'orange', 'blue', 'purple', 'pink'];

export default class TossIt extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: LAT,
                longitude: LON,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            }    
        };
        this.onRegionChange = this.onRegionChange.bind(this);
    }
    
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    region: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                    }
                });
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
    }
    onRegionChange(region) {
        this.setState({region});
    }
     _changeStyle() {
        var color = colors[Math.floor(Math.random()*colors.length)];
        var backgroundColor = backgroundcolors[Math.floor(Math.random()*backgroundcolors.length)];
        this.setState({
            color: color,
          backgroundColor: backgroundColor
        })
    }
    render() {
    return (
        <View style={styles.container}>
        <MapView 
            style={styles.map}
            mapType="standard"
            showsUserLocation={true}
            followsUseLocation={true}
            showsCompass={true}
            showsPointofInterest={true}
            region={this.state.region}
            onRegionChange={this.onRegionChange}
        >
        <MapView.Marker
            coordinate={{latitude: 33.78756, longitude: -84.3963}}
            title="Georgia Institute of Technology"
            description="A very good STEM school."
        />
        </MapView>
        <View style={styles.toolbar}>
            <TouchableHighlight onPress={this._onPressBack}>
                <Image
                    
                    source = {require('../Images/icon.png')}
                    >
                    
                </Image>
            </TouchableHighlight>
            <TouchableHighlight onPress={this._onPressBack}
                style = {{paddingTop:7}}>
                <Image
  
                    source = {require('../Images/icoNavDiscover2Active@2x.png')}
                    >
                    
                </Image>
            </TouchableHighlight>
            <TouchableHighlight onPress={this._onPressBack} underlayColor = 'gray'
                style = {{paddingTop:7}}>
                <Image
                    source = {require('../Images/icoNavMessageNormal@2x.png')}
                    activeOpacity = '50'
                    underlayColor = 'gray'>
                  
                </Image>
            </TouchableHighlight>
            <Button
                onPress={this._onPressPoster}
                style = {styles.toolbarButton}
                title = "Poster">
            </Button>
            <Button
                onPress={this._onPressHauler}
                style = {styles.toolbarButton}
                title = "Hauler">
            </Button>
            <TouchableHighlight onPress={this._onPressBack} underlayColor = {'gray'} activeOpacity = {50}
                style = {{paddingTop:7}}>
                <Image
                    source = {require('../Images/iconNavHomeNormal@2x.png')}
                    >
                </Image>
            </TouchableHighlight>
            
        </View>
      </View>
    );
    }
     _onPressBack = () => {
        this.props.navigator.pop()
        //this.props.navigator.push({
        //    title: 'My Pickups',
        //    name: 'MyPickups',
        //    username: this.state.username
    }
    _onPressPoster = () => {
        //this.props.navigator.pop()
        this.props.navigator.push({
            title: 'My Pickups',
            name: 'MyPickups',
            username: this.state.username
        })
    }
    _onPressHauler = () => {
        //this.props.navigator.pop()
        this.props.navigator.push({
            title: 'My Listings',
            name: 'MyListings',
            username: this.state.username
        })
    }
    
}

const styles = StyleSheet.create({
  container: {
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
  },
});

AppRegistry.registerComponent('TossIt', () => TossIt);

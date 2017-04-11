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
import ApiHandler from '../API/ApiHandler'
var app = new ApiHandler();

var {height, width} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LAT = 33.78756;
const LON = -84.3963;

const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = .0421;
let id = 0;

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
var colors = ['#ddd', '#efefef', 'red', '#666', 'rgba(0,0,0,.1)', '#ededed'];
var backgroundcolors = ['green', 'black', 'orange', 'blue', 'purple', 'pink'];
var isLoaded = true;

export default class TossIt extends Component {

    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: LAT,
                longitude: LON,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            },
            markers: [],
        };
        this.onRegionChange = this.onRegionChange.bind(this);
    }

    componentDidMount() {
        alert('im called');
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

    onRegionChangeComplete(region) {
        this.setState({region});
    }

    onMapPress(e) {
        // this.setState({
        //     markers: [
        //     ...this.state.markers,
        //     {
        //             coordinate: e.nativeEvent.coordinate,
        //             key: id++,
        //             color: randomColor(),
        //     },
        //     ],
        // });
    }
        //})
    //}
    /*
     _changeStyle() {
        var color = colors[Math.floor(Math.random()*colors.length)];
        var backgroundColor = backgroundcolors[Math.floor(Math.random()*backgroundcolors.length)];
        this.setState({
            color: color,
          backgroundColor: backgroundColor
        })
    }
    */

    componentWillMount = () => {
        isLoaded = true;
        this._updateMap();
    }

    componentWillUpdate = () => {
        this._updateMap();
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
                    onPress={(e) => this.onMapPress(e)}
                >
                {this.state.markers.map(marker => (
                    <MapView.Marker
                        key={marker.key}
                        coordinate={marker.coordinate}
                        title={(marker.title).toString()}
                        description={(marker.description)}
                        onCalloutPress={this._pressMarker}
                    />
                ))}
                </MapView>

                <View style={{flex: 0.08, flexDirection: 'row', borderColor:'gray', borderWidth:1}}>
                    <TouchableHighlight style = {{flex: 0.25, flexDirection: 'row'}}>
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

                    <TouchableHighlight onPress={this._onPressProfile} underlayColor = {'gray'} activeOpacity = {50}
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

    _updateMap = () => {
        this._getMarkerList((response) => {
            var result = [];
            response.forEach((item) => {
                coord = this._getCoord(item.item.coord);
                result.push({
                    key: item.key,
                    coordinate: {
                        latitude: coord[0],
                        longitude: coord[1]
                    },
                    title: item.item.name,
                    description: item.item.description
                });
            })
            if (isLoaded) {
                this.setState({ markers: result });
            }
        });
    }

    _pressMarker = () => {
        alert('clicked');
    }

    _getMarkerList = (callback) => {
        app.retrievePins('', '', (response) => {
            callback(response);
        });
    }

    _onPressDockMyPickups = () => {
        isLoaded = false;
        this.props.navigator.replace({
            title: 'My Pickups',
            name: 'MyPickups',
            passProps: {
                username: this.props.username
            }
        })
    }

    _onPressDockInbox = () => {
        isLoaded = false;
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

    _onPressProfile = () => {
        isLoaded = false;
        this.props.navigator.replace({
            title: 'Profile Page Hauler',
            name: 'ProfilePageHauler',
            passProps: {
                username: this.props.username
            }
        })
    }

    _getCoord = (coord) => {
        splitCoord = coord.split(',');
        result = [];
        result.push(parseFloat(splitCoord[0]));
        result.push(parseFloat(splitCoord[1]));
        return result;
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
  },
  dockText: {
    fontSize: 11,
    fontWeight: 'bold'
  }
});

AppRegistry.registerComponent('TossIt', () => TossIt);

/* THI's ORIGINAL TOOLBAR ---------
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

</View>*/

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
import ItemListHauler from '../Hauler/ItemListHauler'
import ApiHandler from '../API/ApiHandler'
var app = new ApiHandler();
var isLoaded = true;

export default class MyPickups extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: []
        }
    }

    componentWillMount() {
        isLoaded = true;
        this.updateItemList();
    }

    componentWillUpdate() {
        this.updateItemList();
    }

    render() {
        /*this.updateItemList((response) => {
            this.setState({ array: response });
        });*/

        var result = [];
        var array = this.state.array;

        if (array.length > 0) {
            var count = 0;
            array.forEach((item) => {
                result.push(<ItemListHauler key={count} info={item} navigator = { this.props.navigator }/>);
                count++;
            });
        } else {
            result.push(<Text key={'text'} style={{fontSize:20}}>You currently do not have any items listed.</Text>);
        }
        return (
            <View style={{flex: 1}}>

            <View style={{flex: 0.92}}>
                <View style={{flex: 0.1, justifyContent: 'center', backgroundColor: '#50cb66'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 30, color: 'white'}}>
                        {'\t'}Pickups
                    </Text>
                </View>
                <View style={{flex: 0.9, justifyContent: 'center'}}>
                    <ScrollView>
                        <View>{ result }</View>
                    </ScrollView>
                </View>
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
        )
    }

    _onPressDockExplore = () => {
        isLoaded = false;
        this.props.navigator.replace({
            title: 'Exlpore',
            name: 'Map',
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

    _onPressProfile = () => { //FIXME: Replace with profile page
        isLoaded = false;
        this.props.navigator.replace({
            title: 'Profile Page Hauler',
            name: 'ProfilePageHauler',
            passProps: {
                username: this.props.username
            }
        })
    }

    _onPressDemo = () => {
        isLoaded = false;
        this.props.navigator.replace({
            title: 'Demo Item',
            name: 'DemoItem',
        })
    }

    _viewItemDetail = (name) => {
        isLoaded = false;
        this.props.navigator.replace({
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
            if (array !== undefined || this.state.array != array) {
                if (isLoaded) {
                    this.setState({ array: array });
                }
            }
        })
    }
}

const styles = StyleSheet.create({
  dockText: {
    fontSize: 11,
    fontWeight: 'bold'
  }
});

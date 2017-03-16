import React, { Component } from 'react'
import {
   View, Text, Button, TextInput, ScrollView
} from 'react-native'
import ItemList from './ItemList'

export default class MyListings extends Component {
    constructor(props) {
        super(props);
    }

    //<ItemList info={ this.props.array[0] }/>
    render() {
        var array = this.props.array;
        var result = [];

        if (array != null) 
        {
            array.forEach((item) => {
            console.log(item);
            result.push(<ItemList info={item} key={item.item}/>);
        });
        }
        else 
        {
            result.push(<Text>No Items Listed</Text>);
        }
        /*array.forEach((item) => {
            console.log(item);
            result.push(<ItemList info={item} key={item.item}/>);
        });*/
        return (
            <View style={{flex: 1}}>
                <Text>Hi {this.props.username} !!!</Text>
                <ScrollView>
                        <Text>List of postings goes here{'\n'}</Text>
                        <View>{ result }</View>
                </ScrollView>
                <View>
                    <Button
                        onPress = {this._isPress}
                        style = {{height: 50, borderWidth: 1, borderColor: 'black' }}
                        title = 'New'
                        color = 'black'>
                    </Button>

                </View>
            </View>

        )
    }

    _isPress = () => {
        this.props.navigator.push({
            title: 'NewListing',
            name: 'NewListing',
            passProps: {
                username: this.props.username
            }
            // username: this.state.username
        })
    }
    
    _onRegionChangeComplete(region)
    {

    }   
}

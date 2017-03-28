import React, { Component } from 'react'
import {
   View, Text, Button, TextInput, Image, ScrollView
} from 'react-native'

export default class DemoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {title: '',
                        item: '',
                        description: '',
                        size: '',
                        weight: ''}
    }
    render() {
        return (
            <View style={{flex: 1}}>
            <View style={{flex: 1}}>
            <View style={{flex: 0.4}}>
                <Image
                    style={{flex: 1, position: 'relative'}}
                    source={{uri: 'https://cnet1.cbsistatic.com/img/B3u_kAp-a5RdLn28Am12VaRsqY8=/300x620/2015/05/16/0b0dfa43-041a-4fd0-9fde-025efbe9b721/ge-french-door-refrigerator-pfe28rshss-product-photos-21.jpg'}}
                />
            </View>
            <ScrollView style={{flex: 0.6, flexDirection: 'column'}}>

                <View style={{flex: 0.25, borderWidth: 0.5, borderColor: 'gray'}}> 
                    <Text style={{fontSize: 30, fontWeight: 'bold'}}>{"\t\t"}Heavy Fridge!{"\n"}</Text>
                    <Text style={{fontSize: 15, fontWeight: 'bold'}}>{"\t\t\t"}Refrigerator $25{"\n"}</Text>
                    <Text style={{fontSize: 12, fontWeight: 'bold'}}>{"\t\t\t"}by TestUser</Text>
                </View>
                <View style={{flex: 0.75}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>{"\n\t\t"}Description</Text>
                    <Text style={{fontSize: 20}}>{"\t\t"}Looking to get rid of my refrigerator. It's very {"\n\t\t"}heavy so make sure you can handle the load{"\n\n"}</Text>

                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>{"\t\t"}Item Specifics</Text>
                    <Text style={{fontSize: 20}}>{"\t\t"}Size:{"\t\t\t\t\t"}35 3/4in x 69 3/4in x 36 1/4 in</Text>
                    <Text style={{fontSize: 20}}>{"\t\t"}Weight:{"\t\t"}250Lb approx.{"\n\n"}</Text>

                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>{"\t\t"}Pickup Details</Text>
                    <Text style={{fontSize: 20}}>{"\t\t"}Location: {"\t\t\t"}Duluth, GA</Text>
                    <Text style={{fontSize: 20}}>{"\t\t"}Date: {"\t\t\t\t\t\t\t\t"}0/29/17</Text>
                    <Text style={{fontSize: 20}}>{"\t\t"}Time: {"\t\t\t\t\t\t\t"}6:00PM</Text>
                </View>
            </ScrollView>
            </View>
            <View>
            <Button
                onPress = {this._onPressBack}
                style = {{height: 30, borderWidth: 1, borderColor: 'limegreen' }}
                title = 'Go Back'
                color = 'limegreen'>
            </Button>
            </View>
            </View>
        )
    }

    _onPressBack = () => {
        this.props.navigator.pop()
    }
    _onPressPost = () => { 
        this.props.navigator.push({
            title: 'New Listing cont..',
            name: 'NewListingContinued',
            // username: this.state.username
        })
    }
}

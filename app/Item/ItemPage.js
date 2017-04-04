import React, { Component } from 'react'
import {
   View, Text, Button, TextInput, Image, ScrollView, StyleSheet
} from 'react-native'

export default class ItemPage extends Component {
    constructor(props) {
        super(props);
        this.state = {username: '',
                        name: '',
                        payment: '',
                        description: '',
                        size: '',
                        weight: '',
                        address: '',
                        city: '',
                        state: '',
                        zipcode: ''}
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
                        <Text>  </Text> 
                        <Text style={{fontSize: 30, fontWeight: 'bold'}}>{"\t"}{ this.props.name }{"\n"}</Text>
                        <Text style={{fontSize: 15, fontWeight: 'bold'}}>{"\t"}by UserName{this.props.username}{"\t\t\t\t\t\t\t\t\t\t"}{ this.props.payment }{"\n"}</Text>
                    </View>
                    <View style={{flex: 0.75, flexDirection: 'row'}}>
                        <View style={{flex: 0.025}}>
                            <Text>  </Text>
                        </View>

                        <View style={{flex: 0.975}}>
                            <Text style={{fontSize: 15, fontWeight: 'bold'}}>{"\n"}Description</Text>
                            <Text style={{fontSize: 15}}>{ this.props.description }{"\n"}</Text>

                            <Text style={{fontSize: 15, fontWeight: 'bold'}}>Item Specifics</Text>
                            <Text style={{fontSize: 15}}>Size: { this.props.size }{"\n"}</Text>
                            <Text style={{fontSize: 15}}>Weight: { this.props.weight }{"\n"}</Text>

                            <Text style={{fontSize: 15, fontWeight: 'bold'}}>Pickup Details</Text>
                            <Text style={{fontSize: 15}}>Location: { this.props.address }, { this.props.city }, { this.props.state } { this.props.zipcode }</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View>
                <Button
                    onPress = {this._onPressBack}
                    style = { styles.button }
                    title = 'Go Back'>
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
        })
    }
}


const styles = StyleSheet.create({
    button: {
        height: 30, 
        borderWidth: 1, 
        borderColor: '#50cb66', 
        backgroundColor: '#50cb66' 
    },
})

import React, { Component } from 'react'
import {
   View, Text, Button, TextInput, Image, ScrollView, StyleSheet, Dimensions
} from 'react-native'

var {height, width} = Dimensions.get('window');

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
                <View style={{flex:0.2, flexDirection: 'row', alignItems: 'center', backgroundColor: '#50cb66'}}>
                    <View style={{flex: 0.72}}>
                            <Text>  </Text>
                    </View>
                    <Button
                        onPress = {this._onPressBack}
                        style = { styles.button }
                        title = 'Back'
                        color = '#50cb66'>
                    </Button>
                    <View style={{flex: 0.03}}>
                            <Text>  </Text>
                    </View>
                </View>
                <View style={{flex: 1}}>
                    <View style={{flex: 0.25}}>
                        <Image
                            style={{flex: 1, position: 'relative'}}
                        source={{uri: 'https://cnet1.cbsistatic.com/img/B3u_kAp-a5RdLn28Am12VaRsqY8=/300x620/2015/05/16/0b0dfa43-041a-4fd0-9fde-025efbe9b721/ge-french-door-refrigerator-pfe28rshss-product-photos-21.jpg'}}
                    />
                    </View>
                </View>
                <ScrollView style={{flex: 0.65, flexDirection: 'column'}}>

                    <View style={{flex: 0.25, borderWidth: 0.5, borderColor: 'gray'}}>
                        <Text>  </Text> 
                        <Text style={{fontSize: 30, fontWeight: 'bold'}}>{"\t"}{ this.props.name }{"\t\t\t\t\t"}{ this.props.payment }{"\n"}</Text>
                        <Text style={{fontSize: 15, fontWeight: 'bold'}}>{"\t"}by UserName{this.props.username}{"\n"}</Text>
                    </View>
                    <View style={{flex: 0.75, flexDirection: 'row', justifyContent: 'center'}}>
                        <View style={{flex: 0.05}}>
                            <Text>  </Text>
                        </View>

                        <View style={{flex: 0.9}}>
                            <View style={styles.details}>
                                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Description</Text>
                                <Text style={{fontSize: 20}}>{ this.props.description }{"\n"}</Text>
                            </View>
                            <View style={styles.details}>
                                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Item Specifics</Text>
                                <Text style={{fontSize: 20}}>Size: { this.props.size }{"\n"}</Text>
                                <Text style={{fontSize: 20}}>Weight: { this.props.weight }{"\n"}</Text>
                            </View>
                            <View style={styles.details}>
                                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Pickup Details</Text>
                                <Text style={{fontSize: 20}}>Location: { this.props.address }, { this.props.city }, { this.props.state } { this.props.zipcode }</Text>
                            </View>
                        </View>

                        <View style={{flex: 0.05}}>
                            <Text>  </Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }

    _onPressBack = () => {
        this.props.navigator.pop()
    }
}


const styles = StyleSheet.create({
    button: {
        flex: 0.25,
        height: 30, 
        borderWidth: 1, 
        borderColor: '#50cb66', 
        backgroundColor: '#50cb66',
    },

    details: {
        flex: 0.33,
        borderBottomWidth: 1, 
        borderColor: 'grey', 
        backgroundColor: 'white',
        justifyContent: 'center'
    },
})

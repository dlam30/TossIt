import React, { Component } from 'react'
import {
   View, Text, Button, TextInput, Image
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
            <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={{flex: 0.4}}>
                    <Image
                        style={{flex: 1}}
                        source={{uri: 'http://sherralifelesson.com/wp-content/uploads/fridge-4.jpg'}}
                    />
                </View>
                <View style={{flex: 0.6}}> 
                    <Text style={{fontWeight: 'bold'}}>Heavy Fridge!{"\n"}</Text>
                    <Text>Refrigerator $25</Text>
                    <Text>by TestUser{"\n"}</Text>


                    <Text style={{fontWeight: 'bold'}}>Description</Text>
                    <Text>Looking to get rid of my refrigerator. It's very heavy so make sure you can handle the load{"\n"}</Text>

                    <Text style={{fontWeight: 'bold'}}>Item Specifics</Text>
                    <Text>Size: 35 3/4in x 69 3/4in x 36 1/4 in</Text>
                    <Text>Weight: 250Lb approx.{"\n"}</Text>

                    <Text style={{fontWeight: 'bold'}}>Pickup Details</Text>
                    <Text>Location: Duluth, GA</Text>
                    <Text>Date: 0/29/17</Text>
                    <Text>Time: 6:00PM</Text>
                </View>
            </View>

        )
    }

    _isPress = () => { 
        this.props.navigator.push({
            title: 'New Listing cont..',
            name: 'NewListingContinued',
            // username: this.state.username
        })
    }
}

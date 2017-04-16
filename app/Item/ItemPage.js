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
        //alert(this.props.imageURL);
    }
    render() {
          return (
              <View style={{flex: 1}}>
                  <View style={{flex: 1}}>
                      <View style={{flex: 0.6}}>
                          <Image
                              style={ styles.image }
                              source={{uri: this.props.imageURL}}
                          />
                  </View>
                  <ScrollView style={{flex: 0.4, flexDirection: 'column'}}>

                      <View style={{flex: 0.25, borderWidth: 0.5, borderColor: 'gray'}}>
                          <Text>  </Text>
                          <Text style={{fontSize: 30, fontWeight: 'bold'}}>{"\t"}{ this.props.name }{"\n"}</Text>
                          <Text style={{fontSize: 15, fontWeight: 'bold'}}>{"\t"}Payment: ${ this.props.payment }{"\n"}</Text>
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
        /*
        this.props.navigator.replace({
            title: 'ItemList',
            name: 'ItemList',
            passProps: {
                username: this.props.username
            }
        })
        */
    }
}


const styles = StyleSheet.create({
    button: {
        height: 30,
        borderWidth: 1,
        borderColor: '#50cb66',
        backgroundColor: '#50cb66'
    },
    image: {
      height: 200,
      resizeMode: 'contain',
      borderWidth: 5,
      borderColor: "black"
    },
})

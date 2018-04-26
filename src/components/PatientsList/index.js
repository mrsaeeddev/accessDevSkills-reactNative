import React, { Component } from 'react'
import { AsyncStorage, View } from 'react-native'
// import { Card, CardSection, Button, LibraryList, LibraryItem } from '../.././common'
import { Container, Content, List, Card, CardItem, ListItem, Body, Text, Button, Input, InputGroup } from 'native-base'
import firebase from 'firebase'

export class PatientsList extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            arrdata: ''
        }
    }

    componentWillMount() {
        let database = firebase.database().ref('entry1')
        database.on('value', snap => {
            this.state.arrdata = snap.val();
            this.setState({
                arrdata:this.state.arrdata
                // backupData: arrayToPushedData
            })
        })
    }

  
    render() {
        const { navigate } = this.props.navigation;
        console.log(this.state.arrdata)
        return (
            <Container style={{ backgroundColor:'#ff3232'}}>
                <Content>
                    <Text>
                    {this.state.arrdata}
                    </Text>
                                </Content>
            </Container>
                )
    }
}

PatientsList.navigationOptions = {
    title: "About Us"
}

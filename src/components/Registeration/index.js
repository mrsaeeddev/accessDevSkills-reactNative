import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { Container, Content, Input, Label, Item, Text, Button, Form } from 'native-base'
import firebase from 'firebase'

export class RegisterComponent extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            arrdata: ''
        }
    }

    componentWillMount() {
        let database = firebase.database().ref('entry2')
        database.on('value', snap => {
            this.state.arrdata = snap.val();
            this.setState({
                arrdata: this.state.arrdata
                // backupData: arrayToPushedData
            })
        })
    }


    render() {
        const { navigate } = this.props.navigation;
        console.log(this.state.arrdata)
        return (
            <Container style={{ backgroundColor: '#ff3232' }}>
                <Content>
                    <Text>
                        {this.state.arrdata}
                    </Text>
                </Content>
            </Container>
        )
    }
}
RegisterComponent.navigationOptions = {
    title: 'Home',
};
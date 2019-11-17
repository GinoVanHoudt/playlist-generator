import React from 'react';
import {Text, View} from 'react-native';

export class ProfileScreenComponent extends React.Component {
    static navigationOptions = {
        title: 'Profile',
    };
    render() {
        return (
            <Text>profile screen</Text>
        );
    }
}
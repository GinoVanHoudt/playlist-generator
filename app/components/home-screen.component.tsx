import React from 'react';
import {Button} from 'react-native';

interface Props {
    navigation: any;
}

export class HomeScreenComponent extends React.Component<Props> {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <Button
                title="Go to Jane's profile"
                onPress={() => navigate('Profile', {name: 'Jane'})}
            />
        );
    }
}
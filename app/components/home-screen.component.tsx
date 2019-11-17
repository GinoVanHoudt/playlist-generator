import React from 'react';
import {Button, View} from 'react-native';

interface Props {
    navigation: any;
}

export class HomeScreenComponent extends React.Component<Props> {

    private _generatePlaylist(): void {

    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Button
                    title="Go to profile"
                    onPress={() => navigate('Profile', {name: 'Jane'})}
                />
                <Button
                    title="Generate new playlist"
                    onPress={this._generatePlaylist}
                />
            </View>
        );
    }
}
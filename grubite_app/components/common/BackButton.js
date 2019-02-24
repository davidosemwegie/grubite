import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'
import Colours from '../../constants/Colours';

const BackButton = ({navigation}) => {

    const { backButton } = styles

    return (
        <TouchableOpacity style={backButton} onPress={() => navigation.goBack()}>
            <Icon
                name="md-arrow-round-back"
                size={35}
                color={Colours.tintColour}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    backButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        //backgroundColor: 'pink'
    },
})

export default withNavigation(BackButton);


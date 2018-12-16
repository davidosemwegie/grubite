import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    const { buttonStyle, textStyle } = styles;
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
        shadowColor: 'grey',
        shadowOffset: {
            width: 0,
            height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
    },
    textStyle: {
        alignSelf: 'center',
        fontWeight: '600',
        color: '#007aff',
        fontSize: 16,
        padding: 10,
    }
};

export  { Button };

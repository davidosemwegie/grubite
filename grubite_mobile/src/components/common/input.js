import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ value, label, onChangeText, placeholder, secureTextEntry, name }) => {
    const { containerStyle, labelStyle, inputStyle } = styles;

    return (
      <View style={containerStyle}>
          <Text style={labelStyle}>{label}</Text>
          <TextInput
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          autoCorrect={false} //disable auto correct
          values={value}
          onChangeText={onChangeText} 
          style={inputStyle}
          name={name}
          /> 
      </View>  
    );
};

const styles = {
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1,

    },
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23, //amount of space that is between each line
        flex: 2,
        height: 20,
        // borderColor: 'grey',
        // borderWidth: 1,
        // borderRadius: 5,
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row', //make sure that the items that are inside the box are side by side
        alignItems: 'center',
    }
};

export { Input };

import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign'
//import { Icon } from 'react-native-elements'
import Colours from '../constants/Colours';

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <Icon
        allowFontScaling={false}
        theme = {this.props.theme}
        name={this.props.name}
        size={30}
        style={{ 
          marginBottom: -3,
          fontWeight: 'bold'
         }}
        color={this.props.focused ? Colours.tabIconSelected : Colours.tabIconDefault}
      />
    );
  }
}
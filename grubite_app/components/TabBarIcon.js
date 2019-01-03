import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign'
import Colours from '../constants/Colours';

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <Icon
        allowFontScaling={false}
        name={this.props.name}
        size={26}
        style={{ marginBottom: -3 }}
        color={this.props.focused ? Colours.tabIconSelected : Colours.tabIconDefault}
      />
    );
  }
}
import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Platform,
    StatusBar
} from "react-native";

const PageTitle = (props) => {

    componentDidMount = () => {
      this.headerHeight = 100

      if (Platform.OS == 'android') {
          this.headerHeight = 100 + StatusBar.currentHeight
      }
    };
    
    const {container, title} = styles
    return(
        <View>
            <Text style={title} allowFontScaling={false}>{props.children}</Text>
        </View>
        
    )
}
export default PageTitle;

const styles = StyleSheet.create({
    title:{
        marginTop: 85,
        marginLeft: 15,
        fontSize: 40,
        fontWeight: 'bold',
        color: 'rgb(0,0,0)'
    }
});
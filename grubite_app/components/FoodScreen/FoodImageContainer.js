import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";
// import { ImagePreview, Lightbox, Image } from '@shoutem/ui'

const FoodImageContainer = (props) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: `${props.image}` }}
            />
            {/* <View style={{
                backgroundColor: 'salmon',
                flex: 1
            }}>
            </View> */}
            {/* <ImagePreview
                source={{ uri: `${props.image}` }}
                width={375}
                height={375}
            // style={styles.image}
            /> */}
            {/* <Lightbox style={{
                justifyContent: "center",
                alignSelf: 'center',
                }}>
                <Image
                    style={{ 
                        marginTop: ,
                        height: 300
                     }}
                    source={{ uri: `${props.image}` }}
                />
            </Lightbox> */}

        </View>
    )
}
export default FoodImageContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1.5,
    },
    image: {
        flex: 1
    }
});
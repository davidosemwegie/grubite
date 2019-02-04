import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import Colours from '../constants/Colours'
import Icon from 'react-native-vector-icons/Ionicons'

const LineItem = (props) => {

    const { linespace } = styles

    return (
        <View style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            padding: 2
        }}>
            <View style={linespace}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start'
                }}>
                    <Text style={{
                        fontWeight: '900'
                    }}>{props.text} </Text>
                    <Text>{props.subText}</Text>
                    <Text>{props.value}</Text>
                </View>
                {/* <Text style={{
                    fontWeight: '900'
                }}>{props.text}</Text> */}
                <Text>{props.percentage}</Text>
            </View>
        </View>
    )
}

const Label = (props) => {
    const { container, border, header, linespace, thickLine } = styles
    return (
        <View style={border}>
            <Text style={header}>Nutrition Facts</Text>
            <View style={linespace}>
                <Text>Serving Size</Text>
                <Text>100 g</Text>
            </View>
            <View style={thickLine}></View>
            <Text>Amount Per Serving</Text>
            <View style={linespace}>
                <Text>Calories</Text>
                <Text>230</Text>
            </View>
            <LineItem text={`Total Fat`} value={`${8}g`} percentage={`${12}%`} />
            <LineItem subText={`    Saturated Fat `} value={`${5}g`} percentage={`${5}%`} />
            <LineItem subText={`    Trans Fat `} value={`${0}g`} />
            <LineItem text={`Cholestorl`} value={`${0}mg`} percentage={`${0}%`} />
            <LineItem text={`Sodium`} value={`${160}mg`} percentage={`${7}%`} />
            <LineItem text={`Total Carbohydrate`} value={`${37}g`} percentage={`${12}%`} />
            <LineItem subText={`    Dietary Fiber Fat `} value={`${4}g`} percentage={`${16}%`} />
            <LineItem subText={`    Sugar `} value={`${1}g`} />
            <LineItem text={`Protein`} value={`${3}g`} />
            <LineItem text={`Vitamin A`} value={`${2}mg`} percentage={`${10}%`} />
            <LineItem text={`Vitamin C`} value={`${260}mg`} percentage={`${8}%`} />
            <LineItem text={`Calcium`} value={`${135}mg`} percentage={`${20}%`} />
            <LineItem text={`Iron`} value={`${235}mg`} percentage={`${45}%`} />
            <View style={thickLine}></View>
        </View>
    )
}

class NutritionScreen extends Component {

    static navigationOptions = ({ navigation }) => {

        let title = navigation.getParam('foodName', 'Name of Food')

        return {
            title,
            headerLeft: (
                //<BackButton />
                <View>
                    <TouchableOpacity
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 50,
                            height: 50,
                        }}
                        onPress={() => navigation.goBack()}>
                        <Icon
                            name="md-arrow-round-back"
                            size={35}
                            color= {Colours.tintColor}
                        />
                    </TouchableOpacity>
                </View>
            )
        };
    };

    render() {
        const { container, border, header } = styles
        return (
            <View style={container}>
                <Label />
            </View>
        );
    }
}
export default NutritionScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colours.bgColor
    },
    border: {
        //width: 375,
        // height: 600,
        borderWidth: 2,
        borderColor: 'black',
        padding: 7.5,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 5,
    },
    header: {
        fontSize: 35,
        fontWeight: '900',
        //textDecorationLine: 'underline'
    },
    linespace: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    thickLine: {
        height: 10,
        backgroundColor: 'black',
        marginVertical: 5
    }
});
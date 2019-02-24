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
                    {/* <Text>{props.value}</Text> */}
                </View>
                {/* <Text style={{
                    fontWeight: '900'
                }}>{props.text}</Text> */}
                {/* <Text>{props.percentage}</Text> */}
                <Text>{props.value}</Text>
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
                <Text>{props.servingSize} g</Text>
            </View>
            <View style={thickLine}></View>
            <Text>Amount Per Serving</Text>
            <View style={linespace}>
                <Text>Calories</Text>
                <Text>{props.calories}</Text>
            </View>
            <LineItem text={`Total Fat`} value={`${props.totalFat}g`} percentage={`${12}%`} />
            <LineItem subText={`    Saturated Fat `} value={`${props.saturatedFat}g`} percentage={`${5}%`} />
            <LineItem subText={`    Trans Fat `} value={`${props.transFat}g`} />
            <LineItem text={`Cholesterol`} value={`${props.cholesterol}mg`} percentage={`${0}%`} />
            <LineItem text={`Sodium`} value={`${props.sodium}mg`} percentage={`${7}%`} />
            <LineItem text={`Total Carbohydrate`} value={`${props.totalCarbohydrates}g`} percentage={`${12}%`} />
            <LineItem subText={`    Dietary Fiber Fat `} value={`${props.fibre}g`} percentage={`${16}%`} />
            <LineItem subText={`    Sugar `} value={`${props.sugar}g`} />
            <LineItem text={`Protein`} value={`${props.protein}g`} />
            <LineItem text={`Vitamin A`} value={`${props.vitaminA}mg`} percentage={`${10}%`} />
            <LineItem text={`Vitamin C`} value={`${props.vitaminC}mg`} percentage={`${8}%`} />
            <LineItem text={`Calcium`} value={`${props.calcium}mg`} percentage={`${20}%`} />
            <LineItem text={`Iron`} value={`${props.iron}mg`} percentage={`${45}%`} />
            <View style={thickLine}></View>
        </View>
    )
}

class NutritionScreen extends Component {

    constructor() {
        super()

        this.state = {
            calories: 0,
            servingSize: 0,
            totalFat: 0,
            saturatedFat: 0,
            transFat: 0,
            cholesterol: 0,
            sodium: 0,
            totalCarbohydrates: 0,
            fibre: 0,
            sugar: 0,
            protein: 0,
            vitaminA: 0,
            vitaminC: 0,
            calcium: 0,
            iron: 0
        }
    }

    componentDidMount() {
        this.setState({
            calories: this.props.navigation.getParam('calories', 'N/A'),
            servingSize: this.props.navigation.getParam('servingSize', 'N/A'),
            saturatedFat: this.props.navigation.getParam('saturatedFat', 'N/A'),
            totalFat: this.props.navigation.getParam('totalFat', 'N/A'),
            transFat: this.props.navigation.getParam('transFat', 'N/A'),
            cholesterol: this.props.navigation.getParam('cholesterol', 'N/A'),
            sodium: this.props.navigation.getParam('sodium', 'N/A'),
            totalCarbohydrates: this.props.navigation.getParam('totalCarbohydrates', 'N/A'),
            fibre: this.props.navigation.getParam('fibre', 'N/A'),
            sugar: this.props.navigation.getParam('sugar', 'N/A'),
            protein: this.props.navigation.getParam('protein', 'N/A'),
            vitaminA: this.props.navigation.getParam('vitaminA', 'N/A'),
            vitaminC: this.props.navigation.getParam('vitaminC', 'N/A'),
            calcium: this.props.navigation.getParam('calcium', 'N/A'),
            iron: this.props.navigation.getParam('iron', 'N/A')
        })
    }

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
                            color={Colours.tintColor}
                        />
                    </TouchableOpacity>
                </View>
            )
        };
    };

    render() {
        const { container, border, header } = styles

        const {
            calories,
            servingSize,
            totalFat,
            saturatedFat,
            transFat,
            cholesterol,
            sodium,
            totalCarbohydrates,
            fibre,
            sugar,
            protein,
            vitaminA,
            vitaminC,
            calcium,
            iron
        } = this.state

        return (
            <View style={container}>
                <Label
                    calories={calories}
                    servingSize={servingSize}
                    totalFat={totalFat}
                    saturatedFat={saturatedFat}
                    transFat={transFat}
                    cholesterol={cholesterol}
                    sodium={sodium}
                    totalCarbohydrates={totalCarbohydrates}
                    fibre={fibre}
                    sugar={sugar}
                    protein={protein}
                    vitaminA={vitaminA}
                    vitaminC={vitaminC}
                    calcium={calcium}
                    iron={iron}
                />
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
        flex: 0.7,
        justifyContent: 'space-between',
        flexDirection: 'column',
        borderWidth: 2,
        borderColor: 'black',
        padding: 10,
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
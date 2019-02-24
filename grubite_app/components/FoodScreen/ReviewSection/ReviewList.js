import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList
} from "react-native";
import ReviewCard from './ReviewCard'

class ReviewList extends Component {
    render() {

        const reviews = [
            {
                revId: 1,
                username: 'osazi',
                rating: 3.4,
                reviewText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`
            },
            {
                revId: 2,
                username: 'sheeshka',
                rating: 2,
                reviewText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`
            },
            {
                revId: 3,
                username: 'roboski',
                rating: 4.8,
                reviewText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
            },
            {
                revId: 4,
                username: 'rainbow',
                rating: 2.4,
                reviewText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`
            },
            {
                revId: 5,
                username: 'foxtrotter',
                rating: 5,
                reviewText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`
            },
            {
                revId: 6,
                username: 'lammaaaalooo',
                rating: 0.4,
                reviewText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`
            }
        ]

        return (
            <View style={styles.container}>
                <FlatList
                    data={reviews}
                    style={{
                        flex: 0.7
                    }}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) =>
                        <ReviewCard
                            username={item.username}
                            rating={item.rating}
                            reviewText={item.reviewText}
                        />
                    }
                    keyExtractor={(item) => item.revId.toString()}
                />

            </View>
        );
    }
}
export default ReviewList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: 'red',
        marginHorizontal: 10,
        // alignItems: 'center',
        // justifyContent: 'center'
    }
});
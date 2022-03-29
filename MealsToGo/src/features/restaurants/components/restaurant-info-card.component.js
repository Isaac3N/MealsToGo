import React from "react";
import styled from "styled-components/native";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const Title = styled.Text`
  padding: 16px
  color: ${(props) => props.theme.colors.ui.primary}
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px
  background-color: white
  `;

const RestaurantCard = styled(Card)`
  background-color: white;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 Unknown Street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant; //restuarant is an object that contains properties we would want to take

  return (
    <RestaurantCard elevation={5} style={styles.card}>
      <RestaurantCardCover
        key={name}
        style={styles.cover}
        source={{ uri: photos[0] }}
      />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 20, backgroundColor: "white" },
});

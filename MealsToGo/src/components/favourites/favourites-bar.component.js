import React from "react";
import styled from "styled-components";
import { ScrollView } from "react-native-gesture-handler";
import { Spacer } from "../spacer/spacer.component";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

export const FavouritesBar = ({ favourites }) => (
  <FavouritesWrapper>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {favourites.map((restaurant) => {
        const key = restaurant.name;
        return (
          <Spacer key={key} position="left" size="medium">
            <CompactRestaurantInfo restaurant={restaurant} />
          </Spacer>
        );
      })}
    </ScrollView>
  </FavouritesWrapper>
);

import React, { useContext } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = () => {
  const locationContext = useContext(locationContext);
  return (
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
  );
};

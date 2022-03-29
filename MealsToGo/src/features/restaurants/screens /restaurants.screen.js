import React from "react";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info.component";
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Platform,
} from "react-native";

export const RestaurantsScreen = ()=> {
    return(
        <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar/>
        </View>
        <View style={styles.list}>
          <RestaurantInfo/>
        </View>
    </SafeAreaView>
    )
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight,
    },
    search: {
      padding: 16, 
    }, 
    list: {
      flex: 1, 
      padding: 16,
      backgroundColor: "blue",
    }
  });
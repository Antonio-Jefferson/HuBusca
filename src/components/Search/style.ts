import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    conteiner: {
      marginTop: 150,
      height: 42,
      width: 350,
      backgroundColor: '#D9D9D9',
      flexDirection: 'row',
      position: "relative",
      borderRadius: 5
    },
    searchInput: {
      height: 42,
      width: 300,
      padding: 8
    },
    iconSearch: {
     position:"absolute",
     right: 8,
     top: 7
    }
})

export default styles
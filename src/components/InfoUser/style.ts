import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    conteiner: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: 304,
      height: 275,
      padding: 12,
      backgroundColor: '#1E1E1E',
      borderRadius: 8,
    },
    imageUser: {
      width: 150,
      height: 150,
      borderRadius: 100,
      backgroundColor: '#D9D9D9'
    },
    profile: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 5
    },
    textName: {
      fontSize: 20,
      fontWeight:"800",
      color: '#716B6B'
    },
    conteinerInfo:{
      flexDirection: 'row',
      alignItems: 'center',
      gap: 50
    },
    infos: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5
    },
   textInfo: {
     color: '#716B6B',
     fontSize: 17,
     fontWeight: '400'
   }
})

export default styles
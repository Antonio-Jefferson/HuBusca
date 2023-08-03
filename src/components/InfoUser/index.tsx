import { Image, Text, View } from "react-native";
import styles from "./style";
import { Ionicons, MaterialCommunityIcons  } from '@expo/vector-icons';

export default function InfoUser(){
    return (
        <View style={styles.conteiner}>
            <View style={styles.profile}>
                <Image 
                    style={styles.imageUser}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                />
                <Text style={styles.textName}>Name</Text>
            </View>
            <View style={styles.conteinerInfo}>
                <View style={styles.infos}>
                    <Ionicons name="ios-location-sharp" size={24} color="#716B6B" />
                    <Text style={styles.textInfo}>São Luís</Text>
                </View>
                <View style={styles.infos}>
                    <MaterialCommunityIcons name="face-man-outline" size={24} color="#716B6B" />
                    <Text style={styles.textInfo}>Username</Text>
                </View>
            </View>
        </View>
    )
}
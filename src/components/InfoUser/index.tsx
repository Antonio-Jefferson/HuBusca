import { Image, Text, View } from "react-native";
import styles from "./style";
import { Ionicons, MaterialCommunityIcons  } from '@expo/vector-icons';
import GitHubUser from "../../interfaces/GitHubUser";

interface UserDataProps {
    dataUser: GitHubUser;
}

export default function InfoUser({dataUser}: UserDataProps){
    return (
        <View style={styles.conteiner}>
            <View style={styles.profile}>
                <Image 
                    style={styles.imageUser}
                    source={{
                        uri: `${dataUser?.avatar_url}`,
                    }}
                />
                <Text style={styles.textName}>{dataUser.name}</Text>
            </View>
            <View style={styles.conteinerInfo}>
                <View style={styles.infos}>
                    <Ionicons name="ios-location-sharp" size={24} color="#716B6B" />
                    <Text style={styles.textInfo}>{dataUser.location}</Text>
                </View>
                <View style={styles.infos}>
                    <MaterialCommunityIcons name="face-man-outline" size={24} color="#716B6B" />
                    <Text style={styles.textInfo}>{dataUser.login}</Text>
                </View>
            </View>
        </View>
    )
}
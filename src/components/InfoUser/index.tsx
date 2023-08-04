import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import { Ionicons, MaterialCommunityIcons  } from '@expo/vector-icons';
import GitHubUser from "../../interfaces/GitHubUser";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";

interface UserDataProps {
    dataUser: GitHubUser;
}

export default function InfoUser({dataUser}: UserDataProps){
    const { navigate } = useNavigation<NavigationProp<ParamListBase>>();
    function navigateToProfile () {
        navigate('Perfil', {username: dataUser.login})
    }
    return (
        <TouchableOpacity style={styles.conteiner}  onPress={navigateToProfile} >
            <View style={styles.profile}>
                <Image
                    alt="Imagem de perfil"
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
        </TouchableOpacity>
    )
}
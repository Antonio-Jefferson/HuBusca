import { Image, Text, TouchableOpacity, View } from "react-native";
import * as S from "./style";
import { Ionicons, MaterialCommunityIcons  } from '@expo/vector-icons';
import GitHubUser from "../../Interfaces/GitHubUser";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";

interface UserDataProps {
    dataUser: GitHubUser;
}

export default function InfoUser({dataUser}: UserDataProps){
    const { navigate } = useNavigation<NavigationProp<ParamListBase>>();
    function navigateToProfile () {
        navigate('Perfil')
    }
    return (
        <S.Container>
            <TouchableOpacity onPress={navigateToProfile} >
                <S.Profile>
                    <Image
                        alt="Imagem de perfil"
                        width={150}
                        height={150}
                        borderRadius={100}
                        source={{
                            uri: `${dataUser?.avatar_url}`,
                        }}
                    />
                    <S.TextName>{dataUser.name}</S.TextName>
                </S.Profile>
                <S.ContainerInfo>
                    <S.Infos>
                        <Ionicons name="ios-location-sharp" size={24} color="#d9d9d9" />
                        <S.TextInfo>{dataUser.location}</S.TextInfo>
                    </S.Infos>
                    <S.Infos>
                        <MaterialCommunityIcons name="face-man-outline" size={24} color="#d9d9d9" />
                        <S.TextInfo>{dataUser.login}</S.TextInfo>
                    </S.Infos>
                </S.ContainerInfo>
            </TouchableOpacity>
        </S.Container>
        
    )
}
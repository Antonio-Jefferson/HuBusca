import { Image, TouchableOpacity } from "react-native";
import { Ionicons, MaterialCommunityIcons  } from '@expo/vector-icons';
import * as S from "./style"
import GitHubUser from "../../Interfaces/GitHubUser";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setUserAction } from "../../Store/Reducers/userReducer";

interface UserStore {
    username?: string;
}

export default function CardRecentSearches(user: GitHubUser){
    const { navigate } = useNavigation<NavigationProp<ParamListBase>>();
    const dispatch = useDispatch();

    function navigateToProfile () {
        navigate('Perfil')
        const userStoreData: UserStore = {
            username: user?.login,
          };
          dispatch(setUserAction(userStoreData));
    }
    return (
        <TouchableOpacity  onPress={navigateToProfile}>
            <S.ConteinerCard>
                <S.ImageUser>
                    <Image 
                        alt="Imagem do pefil"
                        height={60}
                        width={60}
                        borderRadius={100}
                        source={{
                            uri: `${user.avatar_url}`,
                        }}
                    />
                </S.ImageUser>
                <S.ConteinerInfo>
                    <S.TextName>{user?.name}</S.TextName>
                    <S.UserData>
                        <S.Data>
                            <Ionicons name="ios-location-sharp" size={18} color="#716B6B" />
                            <S.TextData>{user?.location}</S.TextData>
                        </S.Data>
                        <S.Data>
                            <MaterialCommunityIcons name="face-man-outline" size={18} color="#716B6B" />
                            <S.TextData>{user?.login}</S.TextData>
                        </S.Data>
                    </S.UserData>
                </S.ConteinerInfo>
            </S.ConteinerCard>
        </TouchableOpacity>
        
    )
}
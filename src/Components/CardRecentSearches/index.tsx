import { Image } from "react-native";
import { Ionicons, MaterialCommunityIcons  } from '@expo/vector-icons';
import * as S from "./style"

export default function CardRecentSearches(){
    return (
        <S.ConteinerCard>
            <S.ImageUser>
                <Image 
                    alt="Imagem do pefil"
                    height={60}
                    width={60}
                    borderRadius={100}
                    source={{
                        uri: ``,
                    }}
                />
            </S.ImageUser>
            <S.ConteinerInfo>
                <S.TextName>Antônio Jeffersson</S.TextName>
                <S.UserData>
                    <S.Data>
                        <Ionicons name="ios-location-sharp" size={18} color="#716B6B" />
                        <S.TextData>São Luís - MA</S.TextData>
                    </S.Data>
                    <S.Data>
                        <MaterialCommunityIcons name="face-man-outline" size={18} color="#716B6B" />
                        <S.TextData>Antonio-Jefferson</S.TextData>
                    </S.Data>
                </S.UserData>
            </S.ConteinerInfo>
        </S.ConteinerCard>
    )
}
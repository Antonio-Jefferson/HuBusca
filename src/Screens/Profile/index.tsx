import { FlatList, Image, ScrollView, Text, View } from "react-native";
import * as S from './style';
import { MaterialCommunityIcons, Octicons, Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import CardRepor from "../../Components/CardRepo";
import { useEffect, useState } from "react";
import getInfoProfile from "../../Server/getInfoProfile";
import getRepositories from "../../Server/getRepositories";
import IInfoUserProfile from "../../Interfaces/InfoUserProfile";
import IInfoRepos from "../../Interfaces/InfoRepos";
import { useSelector } from "react-redux";
import { RootState } from "../../Store";

export default function Profile() {
 const [infoUserData, setInfoUserData] = useState<IInfoUserProfile>()
 const [infoReposData, setInfoReposData] = useState<IInfoRepos[]>()
 const  username = useSelector((state: RootState) => state.userReducer.username)
  
  useEffect(() => {
   const getInfos = async () => {
      const dataUser = await getInfoProfile(username)
      setInfoUserData(dataUser)

      const dataRepos = await getRepositories(username)
      setInfoReposData(dataRepos)
   }

   getInfos()
  },[])
    return (
        <S.Conteiner>
            <S.ProfileView>
                <View>
                    <S.ListInfoUser>
                        <S.Info>
                            <MaterialCommunityIcons name="face-man-outline" size={24} color="black" />
                            <S.Text>{infoUserData?.login}</S.Text>
                        </S.Info>
                        <S.Info>
                            <Octicons name="location" size={24} color="black" />
                            <S.Text>{infoUserData?.location}</S.Text>
                        </S.Info>
                        <S.Info>
                            <Ionicons name="finger-print" size={24} color="black" />
                            <S.Text>{infoUserData?.id}</S.Text>
                        </S.Info>
                        <S.Info>
                            <Feather name="users" size={24} color="black" />
                            <S.Text>{infoUserData?.followers} Seguidores</S.Text>
                        </S.Info>
                        <S.Info>
                            <MaterialIcons name="my-library-books" size={24} color="black" />
                            <S.Text>{infoUserData?.quanty_repos} Repositórios</S.Text>
                        </S.Info>
                    </S.ListInfoUser>
                </View>
                <S.ConteinerImage>
                    <Image 
                        height={180}
                        width={180}
                        borderRadius={100}
                        alt="Imagem de perfil"
                        source={{
                            uri: `${infoUserData?.avatar_url}`,
                        }}
                    />
                     <S.TextNameUser>{infoUserData?.name}</S.TextNameUser>
                </S.ConteinerImage>
            </S.ProfileView>
            <View>
                <View>
                    <S.TextView>
                        <S.line></S.line>
                        <S.TextH2>REPOSITÓRIOS</S.TextH2>
                    </S.TextView>
                </View>
                <S.Scroll>
                  <SafeAreaView>
                   <ScrollView>
                     <FlatList
                       data={infoReposData}
                       renderItem={({ item }) => (
                         <CardRepor
                           title={item.title}
                           init={item.init}
                           last_push={item.last_push}
                           description={item.description}
                           stack={item.stack}
                           username={username}
                         />
                       )}
                       keyExtractor={item => item.id}
                     />
                   </ScrollView>
                 </SafeAreaView> 
                </S.Scroll> 
            </View>
        </S.Conteiner>
    )
}
import { TouchableOpacity, View, Linking } from "react-native";
import * as S from "./style";

type ItemProps = {
    title: string;
    init: string;
    last_push: string;
    description: string;
    stack: string;
    username: string | undefined;
};

export default function Cardrepor(item: ItemProps ) {
    const openGitHubRepo = () => {
        const githubRepoLink = `https://github.com/${item.username}/${item.title}`;
        Linking.openURL(githubRepoLink)
      }

    return (
        <TouchableOpacity onPress={openGitHubRepo}>
            <S.CardView>
                <S.Header>
                    <S.Title>{item?.title}</S.Title>
                    <S.ViewDate>
                        <S.TextBold>Iniciado: <S.TextDate>{item?.init}</S.TextDate></S.TextBold>
                        <S.TextBold>Último push: <S.TextDate>{item?.last_push}</S.TextDate></S.TextBold>
                    </S.ViewDate>
                </S.Header>
                <View>
                    <S.TextDescription>{item?.description}</S.TextDescription>
                </View>
                <S.ViewStack>
                    <S.Cicle></S.Cicle>
                    <S.Stack>{item?.stack}</S.Stack>
                </S.ViewStack>
            </S.CardView>
        </TouchableOpacity>     
    )
}
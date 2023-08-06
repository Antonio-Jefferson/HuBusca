import React from 'react';
import { Image } from 'react-native';
import ViewImageHome from './style';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store';

export default function ImageHome() {

    return (
        <ViewImageHome>
                <Image
                    accessibilityLabel="Imagem de busca"
                    source={require('../../../assets/images/search.png')}
                />
        </ViewImageHome>
    );
}

import styled from "styled-components/native";

export const ConteinerCard = styled.View`
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 80px;
    padding: 8px;
    gap: 8;
    margin-bottom: 4px;

    border-radius: 8px;
    background-color: #FFF; 
`
export const ImageUser = styled.View`
    width: 60px;
    height: 60px;
    border-radius: 100px;
    background-color: #d9d9d9;
`
export const ConteinerInfo = styled.View`
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
`
export const TextName = styled.Text`
    color: #474747;
    font-size: 16px;
    font-weight: 800;
`
export const UserData = styled.View`
    width: 200px;
    flex-direction: column;
    justify-content: space-between;
`
export const Data = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 4px;
`
export const TextData = styled.Text`
    color: #474747;
    font-size: 14px;
    font-weight: 400;
`
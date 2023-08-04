import styled from "styled-components/native";

export const Conteiner = styled.View`
   height: 100%;
   padding: 0px 24px;
   background-color: #fff;
`
export const ProfileView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 20px 0px 40px 0px;
`

export const TextNameUser = styled.Text`
  color: #1E1E1E;
  font-size: 20px;
  font-weight: 800;
` 

export const ListInfoUser = styled.View`
  flex-direction: column;
  gap: 8px;
`

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
`
export const Text = styled.Text`
  color: #1E1E1E;
  font-size: 14px;
  font-weight: 600;
`

export const ConteinerImage = styled.View`
  flex-direction: column;
  align-items: center;
  width: 165px;
  height: 165px;
  border-radius: 100px;
  background-color: #000;
`


export const TextView = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 6;
`
export const TextH2 = styled.Text`
 color: #1E1E1E;
 font-size: 20px;
 font-weight: 800;
`
export const line = styled.View`
 width: 3px;
 height: 22px;
 border-radius: 2px;
 background: #989898;
`
export const Scroll = styled.View`
  height: 500px;
`
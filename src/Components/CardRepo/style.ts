import styled from "styled-components/native";

export const CardView = styled.View`
   position: relative;
   width: 100%;
   height: 217px;
   padding: 8px;
   border-radius: 5px;
   background: #d9d9d9;
   margin-bottom: 8px;
`
export const Header = styled.View` 
  flex-direction: column;
  gap: 6PX;
  margin-bottom: 8px;
`
export const Title = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: 800;
`
export const TextBold = styled.Text`
  color: #000;
  font-size: 12px;
  font-weight: 500;
`
export const ViewDate = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const TextDate = styled.Text`
  color: #000;
  font-size: 11px;
  font-weight: 400;
`
export const TextDescription = styled.Text`
  color: #000;
  font-size: 13px;
  font-weight: 400;
`
export const Stack = styled.Text`
  color: #000;
  font-size: 13px;
  font-weight: 500;
`
export const ViewStack = styled.View`
  position: absolute;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  bottom: 16px;
  left: 16px;
`
export const Cicle = styled.View`
  width: 10px;
  height: 10px;
  background-color: green;
  border-radius: 100px;
`
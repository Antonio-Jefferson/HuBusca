import styled from 'styled-components/native';

export const Container = styled.View`
  width: 350px;
  height: 275px;
  padding: 12px;
  background-color: #1E1E1E;
  border-radius: 8px;
`;

export const Profile = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;

export const TextName = styled.Text`
  font-size: 20px;
  font-weight: 800;
  color: #d9d9d9;
  margin-bottom: 45px;
`;

export const ContainerInfo = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 14px;
`;

export const Infos = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const TextInfo = styled.Text`
  color: #d9d9d9;
  font-size: 17px;
  font-weight: 400;
`;
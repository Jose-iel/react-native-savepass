import styled from 'styled-components/native';
import Feather from '@expo/vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(LinearGradient).attrs({
  end: { x: 1, y: 0 }
})`
  border: 1px #e3e4e5;
  flex-direction: row;
  align-items: center;
  min-height: ${RFValue(80)}px;
  width: 100%;
  border-radius: 4px;
  padding: 22px 20px;
  margin-bottom: 8px;
`;

export const ShowPasswordButton = styled.TouchableOpacity``;

export const Icon = styled(Feather).attrs({
  size: 24,
})`
  margin-right: 20px;
  opacity: 0.6;
`;

export const PassData = styled.View`
  max-width: 243px;
`;

export const Title = styled.Text`
  margin-bottom: ${RFValue(4)}px;
  font-family: 'Rubik_400Regular';
  font-size: ${RFValue(13)}px;
  color: #888D97;
`;

export const Password = styled.Text`
  font-family: 'Rubik_500Medium';
  font-size: ${RFValue(15)}px;
  color: #1967FB;
`;

export const LoginData = styled.View`
  max-width: 243px;
`;

export const BoldTitle = styled.Text`
  margin-bottom: ${RFValue(4)}px;
  font-family: 'Rubik_500Medium';
  font-size: ${RFValue(15)}px;
  color: #3D434D;
`;

export const Email = styled.Text`
  font-family: 'Rubik_400Regular';
  font-size: ${RFValue(13)}px;
  color: #888D97;
`;

export const ButtonRemoveLogin = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
  width: 40px;
`;

export const TrashIcon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: #888D97;
`;

export const ModalContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  /* background-color: rgba(181, 166, 162, 0.6); */
`;

export const BoxModal = styled.View`
  width: 280px;
  height: 220px;
  border-radius: 20px;
  background-color: #1967FB;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const TextTitleModal = styled.Text`
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(26)}px;
  font-family: 'Rubik_300Light';
  color: #ffffff;
  margin-bottom: 30px;
`;

export const ButtonYesModal = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #FFCC00;
  padding: 5px;
  border-radius: 5px;
  margin-bottom: 15px;
`;

export const TextButtonYes = styled.Text`
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(26)}px;
  font-family: 'Rubik_500Medium';
  color: #000000;
`;

export const ButtonNoModal = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #E83F5B;
  padding: 5px;
  border-radius: 5px;
`;

export const TextButtonNo = styled.Text`
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(26)}px;
  font-family: 'Rubik_500Medium';
  color: #ffff;
`;
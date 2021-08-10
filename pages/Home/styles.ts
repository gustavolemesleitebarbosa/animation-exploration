import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const LogoImage = styled(Animated.Image)`
  width: 188px;
  height: 290px;
  margin-bottom: 40px;
`;

export const Title = styled(Animated.Text)`
  font-weight: bold;
  color: #000;
  font-size: 32px;
`;

export const GetIn = styled(Animated.View)`
  font-weight: bold;
  color: #000;
  font-size: 32px;
`;

export const ButtonContainer = styled(Animated.View)`
  margin-top: 30px;
  height: 50px;
  width: 150px;
  border-radius: 4px;
  background-color: blueviolet;
  display: flex;
`;

export const GetInButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const GetInButtonText = styled.Text`
  font-weight: bold;
  color: #000;
  font-size: 22px;
`;

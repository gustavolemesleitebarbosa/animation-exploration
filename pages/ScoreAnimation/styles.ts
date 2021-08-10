import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
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

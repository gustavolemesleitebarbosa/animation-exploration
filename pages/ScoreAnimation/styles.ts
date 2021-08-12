import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
interface InnerCircleProps {
  baseColor: string;
  radius: number;
  width: number;
}
interface OuterCircleProps {
  color: string;
  borderRadius: number;
}

interface HalfCircleProps {
  color: string;
  radius: number;
}

export const Container = styled.View`
  flex: 1;
  background-color: '#fff';
  justify-content: center;
  align-items: center;
`;

export const OuterCircle = styled.View<OuterCircleProps>`
  position: relative;
  justify-content: center;
  align-items: center;
  height: ${props => 2 * props.borderRadius}px;
  width: ${props => 2 * props.borderRadius}px;
  border-radius: ${props => props.borderRadius}px;
  background-color: ${props => props.color};
  overflow: hidden;
`;

export const InnerCircle = styled.View<InnerCircleProps>`
  background-color: ${props => props.baseColor};
  width: ${props => 2 * props.radius - props.width}px;
  height: ${props => 2 * props.radius - props.width}px;
  border-radius: ${props => props.radius}px;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HalfCircle = styled(Animated.View)<HalfCircleProps>`
  position: absolute;
  left: 0;
  top: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-radius: ${props => props.radius}px;
  width: ${props => props.radius}px;
  height: ${props => 2 * props.radius}px;
  background-color: ${props => props.color};
  border-color: ${props => props.color};
`;

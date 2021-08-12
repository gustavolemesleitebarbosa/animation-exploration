import React, {useEffect} from 'react';
import {Container} from '../Home/styles';
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
  interpolate,
  Easing as ReanimatedEasing,
} from 'react-native-reanimated';
import {InnerCircle, OuterCircle, HalfCircle} from './styles';

interface CircularProgressBarProps {
  activeColor: string;
  passiveColor: string;
  baseColor: string;
  radius: number;
  percent: number;
  width: number;
  duration: number;
  children: string;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = props => {
  const {
    activeColor = '#800080',
    passiveColor = '#a9a9a9',
    baseColor = '#000',
    radius = 100,
    percent = 100,
    width = 30,
    duration = 1900,
    children,
  } = props;

  const initialValueHalfCircle = percent >= 50 ? 0 : 180;
  const initialValueInnerCircle = 0;
  const firstCircleAnimated = useSharedValue(initialValueHalfCircle);
  const secondCircleAnimated = useSharedValue(initialValueHalfCircle);
  const thirdCircleAnimated = useSharedValue(initialValueInnerCircle);
  const timePerDegree = duration / 360;
  const firstCircleColor = activeColor;
  const secondCircleColor = percent >= 50 ? activeColor : passiveColor;

  const firstCircleStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: radius / 2},
        {rotate: `${firstCircleAnimated.value}deg`},
        {translateX: -radius / 2},
      ],
    };
  });

  const secondCircleStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: radius / 2},
        {rotate: `${secondCircleAnimated.value}deg`},
        {translateX: -radius / 2},
      ],
    };
  });

  const thirdCircleStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: radius / 2},
        {rotate: `${thirdCircleAnimated.value}deg`},
        {translateX: -radius / 2},
      ],
      elevation: interpolate(thirdCircleAnimated.value, [0, 1], [0, -1]),
      zIndex: interpolate(thirdCircleAnimated.value, [0, 1], [0, -1]),
    };
  });

  useEffect(() => {
    let timer1: NodeJS.Timeout | null = null;
    if (percent < 50) {
      secondCircleAnimated.value = withTiming(180 + percent * 3.6, {
        duration: percent * 3.6 * timePerDegree,
        easing: ReanimatedEasing.linear,
      });
    } else {
      timer1 = setTimeout(() => {
        firstCircleAnimated.value = initialValueHalfCircle;
        secondCircleAnimated.value = initialValueHalfCircle;
        thirdCircleAnimated.value = initialValueInnerCircle;
        firstCircleAnimated.value = withTiming(180, {
          duration: 180 * timePerDegree,
          easing: ReanimatedEasing.linear,
        });
        secondCircleAnimated.value = withTiming(180 + (percent - 50) * 3.6, {
          duration: (180 + (percent - 50) * 3.6) * timePerDegree,
          easing: ReanimatedEasing.linear,
        });
        thirdCircleAnimated.value = withDelay(
          180 * timePerDegree,
          withTiming((percent - 50) * 3.6, {
            duration: timePerDegree * ((percent - 50) * 3.6),
            easing: ReanimatedEasing.linear,
          }),
        );
      }, 500);
    }
    return () => {
      if (timer1) {
        clearTimeout(timer1);
      }
    };
  });

  return (
    <Container>
      <OuterCircle color={passiveColor} borderRadius={radius}>
        <HalfCircle
          style={firstCircleStyle}
          color={firstCircleColor}
          radius={radius}
        />
        <HalfCircle
          style={secondCircleStyle}
          color={secondCircleColor}
          radius={radius}
        />
        <HalfCircle
          style={thirdCircleStyle}
          color={passiveColor}
          radius={radius}
        />
        <InnerCircle baseColor={baseColor} radius={radius} width={width}>
          {children}
        </InnerCircle>
      </OuterCircle>
    </Container>
  );
};

export default CircularProgressBar;

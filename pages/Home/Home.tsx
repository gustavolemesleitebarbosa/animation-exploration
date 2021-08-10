import React, {useEffect, useState} from 'react';
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import {StatusBar} from 'react-native';
import {
  ButtonContainer,
  Container,
  GetInButton,
  GetInButtonText,
  LogoImage,
  Title,
} from './styles';
import {useNavigation} from '@react-navigation/native';
import gatoradeLogo from '../../assets/gatoradeLogo.png';

const Home: React.FC = () => {
  // Store animation value and initializion of animation value
  const titlePosition = useSharedValue(130);
  const imagePosition = useSharedValue(-30);
  const buttonOpacity = useSharedValue(0);

  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const {navigate} = useNavigation();

  useEffect(() => {
    // how animation should be done animation is triggerd by state variations
    imagePosition.value = withTiming(
      0,
      {
        duration: 1000,
      },
      () => {
        // only executes this animation after the first one
        titlePosition.value = withTiming(
          0,
          {
            duration: 800,
            easing: Easing.bounce,
          },
          () => {
            buttonOpacity.value = withTiming(1, {duration: 500});
          },
        );
      },
    );
  }, [titlePosition, imagePosition, setIsButtonEnabled, buttonOpacity]);

  //Create style from animation value, defines which kind of animation
  const titleStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: titlePosition.value}],
      // Opacity is function of position
      opacity: interpolate(
        titlePosition.value,
        [130, 0],
        [0, 1],
        Extrapolate.CLAMP,
      ),
    };
  });

  const logoStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: imagePosition.value}],
    };
  });

  const buttonStyle = useAnimatedStyle(() => {
    return {
      opacity: buttonOpacity.value,
    };
  });

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="13131A" />
      <LogoImage style={{...logoStyle}} source={gatoradeLogo} />
      <Title style={{...titleStyle}}>Gatorade</Title>
      <ButtonContainer style={{...buttonStyle}}>
        <GetInButton
          disabled={isButtonEnabled}
          onPress={() => {
            navigate('ScoreAnimation');
          }}>
          <GetInButtonText>Get in</GetInButtonText>
        </GetInButton>
      </ButtonContainer>
    </Container>
  );
};

export default Home;

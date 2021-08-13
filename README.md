# animation-exploration

## About

Simple project created to test the integration of the reanimated library and styled-components. The application is composed of two screens
the first one just renders three simple chained animations and has a button that navigates to the second screen. The second screen renders 
a more complex animation of a circle view that is filled after a timeout delay, the percentage of that circle view that is filled as well as 
the filling color and other parameters are customizable.


## Instalation

* Install the latest versions of node and Xcode ( or/and Android studio);

* Clone the project;

* Run the command `yarn start` on terminal;

* Run `react-native run ios` on terminal.

The second animation was heavily inspired by [this post](https://levelup.gitconnected.com/learn-react-native-animation-by-building-circular-progress-bar-b22258f9db03) on medium, some changes were made to the logic and the code was created using the proposed libraries, instead of only using react-native native functionality.

import React, { useRef } from "react";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";
import { Button } from "../../components";

const BasicAnimation = () => {
  const animationVariable = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(0);

  const onAnimate = () => {
    scaleValue.current = scaleValue.current === 0 ? 1 : 0;

    Animated.timing(animationVariable, {
      toValue: scaleValue.current,
      easing: Easing.back(),
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };
  return (
    <>
      <Animated.View
        style={{
          height: 200,
          width: 200,
          backgroundColor: "red",
          transform: [
            {
              scale: animationVariable.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 2],
              }),
            },
          ],
        }}
      />
      <Button label="animate" onPress={() => onAnimate()} />
    </>
  );
};

const SequenceAnimation = () => {
  const animationVariable1 = useRef(new Animated.Value(0)).current;
  const animationVariable2 = useRef(new Animated.Value(0)).current;

  const onAnimate = () => {
    Animated.sequence([
      Animated.timing(animationVariable1, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.delay(1000),
      Animated.timing(animationVariable2, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start(({ finished }) => {
      if (finished) {
        animationVariable1.setValue(0);
        animationVariable2.setValue(0);
      }
    });
  };

  return (
    <>
      <Animated.View
        style={{
          height: 100,
          width: 100,
          marginVertical: 20,
          backgroundColor: "red",
          transform: [
            {
              translateX: animationVariable1.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 200],
              }),
            },
          ],
        }}
      />
      <Animated.View
        style={{
          height: 100,
          width: 100,
          marginVertical: 20,
          backgroundColor: "blue",
          transform: [
            {
              translateX: animationVariable2.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 200],
              }),
            },
          ],
        }}
      />
      <Button label="animate" onPress={() => onAnimate()} />
    </>
  );
};

const ParallelAnimation = () => {
  const animationVariable1 = useRef(new Animated.Value(0)).current;
  const animationVariable2 = useRef(new Animated.Value(0)).current;

  const onAnimate = () => {
    Animated.parallel([
      Animated.timing(animationVariable1, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(animationVariable2, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start(({ finished }) => {
      if (finished) {
        animationVariable1.setValue(0);
        animationVariable2.setValue(0);
      }
    });
  };

  return (
    <>
      <Animated.View
        style={{
          height: 100,
          width: 100,
          marginVertical: 20,
          backgroundColor: "red",
          transform: [
            {
              translateX: animationVariable1.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 200],
              }),
            },
          ],
        }}
      />
      <Animated.View
        style={{
          height: 100,
          width: 100,
          marginVertical: 20,
          backgroundColor: "blue",
          transform: [
            {
              translateX: animationVariable2.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 200],
              }),
            },
          ],
        }}
      />
      <Button label="animate" onPress={() => onAnimate()} />
    </>
  );
};

const StaggerAnimation = () => {
  const animationVariable1 = useRef(new Animated.Value(0)).current;
  const animationVariable2 = useRef(new Animated.Value(0)).current;

  const onAnimate = () => {
    Animated.stagger(200, [
      Animated.timing(animationVariable1, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(animationVariable2, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start(({ finished }) => {
      if (finished) {
        animationVariable1.setValue(0);
        animationVariable2.setValue(0);
      }
    });
  };

  return (
    <>
      <Animated.View
        style={{
          height: 100,
          width: 100,
          marginVertical: 20,
          backgroundColor: "red",
          transform: [
            {
              translateX: animationVariable1.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 200],
              }),
            },
          ],
        }}
      />
      <Animated.View
        style={{
          height: 100,
          width: 100,
          marginVertical: 20,
          backgroundColor: "blue",
          transform: [
            {
              translateX: animationVariable2.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 200],
              }),
            },
          ],
        }}
      />
      <Button label="animate" onPress={() => onAnimate()} />
    </>
  );
};

const ButtonsFade = () => {
  const button1AnimationValue = React.useRef(new Animated.Value(0)).current;
  const button2AnimationValue = React.useRef(new Animated.Value(0)).current;
  const button3AnimationValue = React.useRef(new Animated.Value(0)).current;

  const onAnimate = () => {
    button1AnimationValue.setValue(0);
    button2AnimationValue.setValue(0);
    button3AnimationValue.setValue(0);

    Animated.stagger(100, [
      Animated.timing(button1AnimationValue, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: false,
      }),
      Animated.timing(button2AnimationValue, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: false,
      }),
      Animated.timing(button3AnimationValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(({ finished }) => {});
  };

  return (
    <>
      <Animated.View
        style={{
          marginVertical: 5,
          backgroundColor: button2AnimationValue.interpolate({
            inputRange: [0, 1],
            outputRange: ["rgb(255,0,0)", "rgb(0,0,255)"],
          }),
          //   opacity: button1AnimationValue.interpolate({

          //     inputRange: [0, 1],
          //     outputRange: [0, 1],
          //   }),
        }}
      >
        <Button label="Button 1" onPress={() => {}} />
      </Animated.View>
      <Animated.View
        style={{
          marginVertical: 5,
          opacity: button2AnimationValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
        }}
      >
        <Button label="Button 2" onPress={() => {}} />
      </Animated.View>
      <Animated.View
        style={{
          marginVertical: 5,
          opacity: button3AnimationValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
        }}
      >
        <Button label="Button 3" onPress={() => {}} />
      </Animated.View>
      <Button label="animate" onPress={() => onAnimate()} />
    </>
  );
};

const BasicScreen = () => {
  return (
    <View style={styles.container}>
      {/* <BasicAnimation />
      <SequenceAnimation />
      <ParallelAnimation /> 
      <StaggerAnimation />
      */}
      <ButtonsFade />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default BasicScreen;

import React from "react";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";

type ProgressProps = {
  steps: number;
  step: number;
  height?: number;
};

const Progress = ({ step, steps, height }: ProgressProps) => {
  const [width, setWidth] = React.useState(0);
  const animatedValue = React.useRef(new Animated.Value(-1000)).current;
  const reactive = React.useRef(new Animated.Value(-1000)).current;

  React.useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      easing: Easing.elastic(),
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  React.useEffect(() => {
    // -width + width * step / steps
    reactive.setValue(-width + (width * step) / steps);
  }, [step, width]);
  return (
    <>
      <Text
        style={{
          fontFamily: "Menlo",
          fontSize: 12,
          fontWeight: "900",
          marginBottom: 8,
        }}
      >
        {step}/{steps}
      </Text>
      <View
        onLayout={(e) => {
          const newWidth = e.nativeEvent.layout.width;
          setWidth(newWidth);
        }}
        style={{
          height,
          backgroundColor: "rgba(0,0,0,0.1)",
          borderRadius: height,
          overflow: "hidden",
        }}
      >
        <Animated.View
          style={{
            height,
            width: "100%",
            borderRadius: height,
            backgroundColor: "#1fad98",
            position: "absolute",
            left: 0,
            top: 0,
            transform: [{ translateX: animatedValue }],
          }}
        />
      </View>
    </>
  );
};

const ProgressBarsScreen = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % (10 + 1));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [index]);
  return (
    <View style={styles.container}>
      <Progress step={index} steps={10} height={20} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    justifyContent: "center",
    padding: 20,
  },
});

export default ProgressBarsScreen;

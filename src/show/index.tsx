import { Text, View, Dimensions } from "react-native";
import {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { TextContext } from "../context/Text.context";
import CloseButton from "./close.button";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
  useAnimatedReaction,
} from "react-native-reanimated";

const height = Dimensions.get("screen").height;

const Show = () => {
  const {
    currentText,
    colorText,
    backgroundColorText,
    textIsBlinking,
    blinkColorText,
    backgroundColorIsBlinking,
    blinkBackgroundColorText,
    textSpeed,
  } = useContext(TextContext);
  const backgroundColorOpacity = useSharedValue(1);
  const textOpacity = useSharedValue(1);

  const duration = textSpeed < 100 ? -20 * textSpeed + 2000 : 100;

  const runBackgroundBlink = () => {
    backgroundColorOpacity.value = withRepeat(
      withSequence(
        withTiming(backgroundColorOpacity.value - 1, {
          duration: duration,
        }),
        withTiming(backgroundColorOpacity.value + 1, {
          duration: duration,
        })
      ),
      -1,
      true
    );
  };

  const runTextBlink = () => {
    textOpacity.value = withRepeat(
      withSequence(
        withTiming(textOpacity.value - 1, {
          duration: duration,
        }),
        withTiming(textOpacity.value + 1, {
          duration: duration,
        })
      ),
      -1,
      true
    );
  };

  useEffect(() => {
    if (backgroundColorIsBlinking) runBackgroundBlink();
    else backgroundColorOpacity.value = 1;
  }, [backgroundColorIsBlinking]);

  useEffect(() => {
    if (textIsBlinking) runTextBlink();
    else textOpacity.value = 1;
  }, [textIsBlinking]);


  const textPositionY = useSharedValue(height + 350);
  const animatedLinear = useAnimatedStyle(() => ({
    transform: [{ translateY: textPositionY.value }, { rotateZ: "90deg" }],
  }));

  useAnimatedReaction(
    () => {
      return textPositionY.value;
    },
    (currentValue) => {
      textPositionY.value = textPositionY.value - 5;

      if (currentValue < -1 * currentText.length * 100 + 100) {
        textPositionY.value = height + 350;
      }
    }
  );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      <View
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          position: "absolute",
        }}
      >
        <View
          style={{
            width: "100%",
            backgroundColor: blinkBackgroundColorText,
            position: "absolute",
            height: "100%",
          }}
        />

        <Animated.View
          style={{
            backgroundColor: backgroundColorText,
            width: "100%",
            opacity: backgroundColorIsBlinking ? backgroundColorOpacity : 1,
            position: "absolute",
            height: "100%",
          }}
        />

        <Animated.View
          style={{
            width: "100%",
            position: "absolute",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
            flexWrap: "nowrap",
          }}
        >
          <Animated.Text
            style={[
              {
                color: blinkColorText,
                position: "absolute",
                width: currentText.length * 150,
                fontSize: 220,
                flexShrink: 1,
              },
              animatedLinear,
            ]}
          >
            {currentText}
          </Animated.Text>

          <Animated.Text
            style={[
              {
                color: colorText,
                opacity: textIsBlinking ? textOpacity : 1,
                width: currentText.length * 150,
                fontSize: 220,
                flexShrink: 1,
              },
              animatedLinear,
            ]}
          >
            {currentText}
          </Animated.Text>
        </Animated.View>
      </View>

      <CloseButton />
    </View>
  );
};

export default Show;

{
  /* <Animated.Text
              style={{
                fontSize: 150,
                color: blinkColorText,
                width: "100%",
                height: "100%",
                transform: [
                  {
                    rotateZ: "90deg",
                  },
                ],
              }}
            >
              {currentText}
            </Animated.Text>

            <Animated.Text
              style={{
                fontSize: 150,
                color: colorText,
                opacity: textIsBlinking ? textOpacity : 1,
                width: "100%",
                height: "100%",
                transform: [
                  {
                    rotateZ: "90deg",
                  },
                ],
              }}
            >
              {currentText}
            </Animated.Text> */
}

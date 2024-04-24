import { ScrollView, View, Dimensions } from "react-native";
import { useContext, useEffect } from "react";
import { TextContext } from "../context/Text.context";
import CloseButton from "./close.button";
import Animated, {
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import AutoScroll from "@homielab/react-native-auto-scroll";
import { Text } from "react-native-paper";

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

        <AutoScroll
          style={{
            position: "absolute",
            top: 360,
            backgroundColor: "yellow",
            transform: [
              {
                rotateZ: "90deg",
              },
            ],
          }}
        >
          <View
            style={{
              backgroundColor: "blue",
            }}
          >
            <Text style={{ color: "red" }}>asdasdasd</Text>
          </View>
        </AutoScroll>
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

import { useContext, useEffect, useRef, useState } from "react";
import { ScrollView, Text, View, Dimensions } from "react-native";
import Animated, {
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { TextContext } from "../context/Text.context";

const width = Dimensions.get("window").width;

const TextSignComponent = () => {
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
  const [currentColorText, setCurrentColorText] = useState<string>(colorText);
  const [currentBackgroundColor, setCurrentBackgroundColor] =
    useState<string>(backgroundColorText);

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
    <>
      <View style={{ width: "100%" }}>
        <ScrollView
          horizontal
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: "100%",
              minWidth: width,
              height: 300,
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
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
                backgroundColor: currentBackgroundColor,
                width: "100%",
                opacity: backgroundColorIsBlinking ? backgroundColorOpacity : 1,
                position: "absolute",
                height: "100%",
              }}
            />

            <Animated.Text
              style={{
                fontSize: 150,
                color: blinkColorText,
                position: "absolute",
              }}
            >
              {currentText}
            </Animated.Text>

            <Animated.Text
              style={{
                fontSize: 150,
                color: currentColorText,
                opacity: textIsBlinking ? textOpacity : 1,
              }}
            >
              {currentText}
            </Animated.Text>
          </View>
          <View style={{ paddingRight: 50 }} />
        </ScrollView>
      </View>
    </>
  );
};

export default TextSignComponent;

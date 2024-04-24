import { StatusBar } from "expo-status-bar";
import { useContext, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import {
  Button,
  Card,
  TextInput,
} from "react-native-paper";
import TextColorComponent from "./_component/Text.color.component";
import BackgroundColorComponent from "./_component/Background.color.component";
import CustomSliderComponent from "./_component/Slider.component";
import BackgroundBlinkComponent from "./_component/Background.blink.component";
import TextBlinkComponent from "./_component/Text.blink.component";
import { TextContext } from "./context/Text.context";
import TextSignComponent from "./_component/Text.sign.component";

const Main = () => {
  const { currentText, setCurrentText, setShow } = useContext(TextContext);

  return (
    <>
      <View style={[styles.container]}>
        <StatusBar style="auto" />

        <TextSignComponent />

        <Card style={{ width: "90%", elevation: 5, marginTop: 25 }}>
          <Card.Content>
            <TextInput
              label={currentText}
              value={currentText}
              mode="outlined"
              style={{ height: 45 }}
              onChangeText={(text) => setCurrentText(text)}
            />

            <CustomSliderComponent />

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <TextColorComponent />
              <BackgroundColorComponent />
            </View>

            <BackgroundBlinkComponent />
            <TextBlinkComponent />
          </Card.Content>
          <Card.Actions>
            <Button onPress={() => setShow(true)} style={{ backgroundColor: "#2EA44F" }}>Ir</Button>
          </Card.Actions>
        </Card>
      </View>
    </>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#24292E",
    alignItems: "center",
    justifyContent: "center",
  },
  sectionContainer: {
    marginTop: 70,
    paddingHorizontal: 24,
  },
});

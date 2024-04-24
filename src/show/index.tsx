import { TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useContext } from "react";
import { TextContext } from "../context/Text.context";

const Show = () => {
  const { setShow } = useContext(TextContext);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      <TouchableOpacity
        onPress={() => setShow(false)}
        style={{
          backgroundColor: "black",
          position: "absolute",
          borderWidth: 3,
          borderColor: "white",
          padding: 5,
          paddingRight: 6,
          paddingBottom: 6,
          bottom: 40,
          right: 15,
        }}
      >
        <FontAwesome name="times" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Show;

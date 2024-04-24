import { TouchableOpacity, View } from "react-native";
import { useContext } from "react";
import { TextContext } from "../context/Text.context";
import CloseButton from "./close.button";

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
      <CloseButton />
    </View>
  );
};

export default Show;

import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { TextContext } from "../context/Text.context";
import { useContext } from "react";

const CloseButton = () => {
  const { setShow } = useContext(TextContext);

  return (
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
  );
};

export default CloseButton;

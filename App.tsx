import {
  PaperProvider,
  MD3DarkTheme as DefaultTheme,
} from "react-native-paper";
import Main from "./src/Main";
import { TextProvider } from "./src/context/Text.context";

const theme = {
  ...DefaultTheme,
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <TextProvider>
        <Main />
      </TextProvider>
    </PaperProvider>
  );
}

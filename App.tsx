import {
  PaperProvider,
  MD3DarkTheme as DefaultTheme,
} from "react-native-paper";
import Main from "./src/Main";
import { TextProvider } from "./src/context/Text.context";
import EntryPoint from "./src/entry-point";

const theme = {
  ...DefaultTheme,
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <TextProvider>
        <EntryPoint />
      </TextProvider>
    </PaperProvider>
  );
}

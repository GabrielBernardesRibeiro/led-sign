import {
  PaperProvider,
  MD3DarkTheme as DefaultTheme,
} from "react-native-paper";
import { TextProvider } from "./src/context/Text.context";
import EntryPoint from "./src/entry-point";
import * as Updates from "expo-updates";
import { useEffect } from "react";

const theme = {
  ...DefaultTheme,
};

export default function App() {
  const onFetchUpdateAsync = async () => {
    try {
      const update = await Updates.checkForUpdateAsync();

      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    } catch (error) {
      // You can also add an alert() to see the error message in case of an error when fetching updates.
      alert(`Error fetching latest Expo update: ${error}`);
    }
  };

  useEffect(() => {
    onFetchUpdateAsync();
  }, []);

  return (
    <PaperProvider theme={theme}>
      <TextProvider>
        <EntryPoint />
      </TextProvider>
    </PaperProvider>
  );
}

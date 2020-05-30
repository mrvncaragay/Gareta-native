import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ActivityIndicator } from "react-native";
import { ThemeProvider } from "styled-components";
import * as Font from "expo-font";
import { store, persistor } from "./redux/store";
import theme from "./theme";
import GaretaApp from "./GaretaApp";


export default () => {
  const [loaded, setLoaded] = useState(false);

  /* eslint-disable global-require */
  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        "SourceSerifPro-Bold": require("./assets/fonts/SourceSerifPro-Bold.ttf"),
        "SourceSerifPro-Regular": require("./assets/fonts/SourceSerifPro-Regular.ttf"),
        "SourceSerifPro-SemiBold": require("./assets/fonts/SourceSerifPro-SemiBold.ttf"),
        "IMFellDoublePica-Italic": require("./assets/fonts/IMFellDoublePica-Italic.ttf")
      });

      setLoaded(true);
    };

    loadFont();
  }, []);
  /* eslint-enable global-require */

  return (
    loaded
      ? (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={theme}>
              <GaretaApp />
            </ThemeProvider>
          </PersistGate>
        </Provider>
      )
      : <ActivityIndicator size="large" />
  );
};

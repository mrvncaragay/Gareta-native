import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { ThemeProvider } from "styled-components";
import * as Font from "expo-font";
import theme from "./Theme";
import GaretaApp from "./GaretaApp";

export default () => {
  const [loaded, setLoaded] = useState(false);

  /* eslint-disable global-require */
  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        "SourceSerifPro-Bold": require("./assets/fonts/SourceSerifPro-Bold.ttf"),
        "SourceSerifPro-Regular": require("./assets/fonts/SourceSerifPro-Regular.ttf"),
        "SourceSerifPro-SemiBold": require("./assets/fonts/SourceSerifPro-SemiBold.ttf")
      });

      setLoaded(true);
    };

    loadFont();
  }, []);
  /* eslint-enable global-require */

  return (
    loaded
      ? (
        <ThemeProvider theme={theme}>
          <GaretaApp />
        </ThemeProvider>
      )
      : <ActivityIndicator size="large" />
  );
};

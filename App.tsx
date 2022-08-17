import { FC, ReactNode, useEffect, useState } from "react";
import { Provider } from "react-redux";
import { AppLayout } from "./src/components";
import { useLoadFonts } from "./src/hooks";
import { WelcomeScreen } from "./src/screens";
import { store } from "./src/store";
import { useAppDispatch, useAppSelector } from "./src/store/hooks";
import { setWeather } from "./src/store/weatherFeature/weatherSlice";

const App = (): ReactNode => {
  const loadedFonts = useLoadFonts();

  return (
    <Provider store={store}>
      <AppLayout>
        <WelcomeScreen />
      </AppLayout>
    </Provider>
  );
};

export default App;

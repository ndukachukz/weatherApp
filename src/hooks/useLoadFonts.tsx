import { useFonts } from "expo-font";

const useLoadFonts = (): boolean => {
  const [fontsLoaded, error] = useFonts({
    DMSansBold: require("../../assets/fonts/DMSans-Bold.ttf"),
    DMSansBoldItalic: require("../../assets/fonts/DMSans-BoldItalic.ttf"),
    DMSansItalic: require("../../assets/fonts/DMSans-Italic.ttf"),
    DMSansMedium: require("../../assets/fonts/DMSans-Medium.ttf"),
    DMSansMediumItalic: require("../../assets/fonts/DMSans-MediumItalic.ttf"),
    DMSansRegular: require("../../assets/fonts/DMSans-Regular.ttf"),
  });
  console.warn({ error });
  return fontsLoaded;
};

export default useLoadFonts;

import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RootNavigator from "./src/navigator/RootNavigator";
import "./src/styles/global.css"
import { useFonts } from 'expo-font'

export default function App() {

	const [loaded] = useFonts({
		Helvetica: require("./assets/font/Helvetica.ttf"),
		HelveticaBold: require("./assets/font/Helvetica-Bold.ttf"),
		HelveticaOblique: require("./assets/font/Helvetica-Oblique.ttf"),
		HelveticaBoldOblique: require("./assets/font/Helvetica-BoldOblique.ttf"),
		HelveticaLight: require("./assets/font/helvetica-light-587ebe5a59211.ttf"),
	});

	if (!loaded) {
		return null;
	}

	return (
		<SafeAreaProvider>
			<RootNavigator />
		</SafeAreaProvider>
	);
}

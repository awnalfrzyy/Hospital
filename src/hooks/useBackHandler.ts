import { useEffect } from "react";
import { BackHandler } from "react-native";

/**
 * Custom hook untuk handle Android back button press
 *
 * param {() => void} onBackPress - Callback ketika back button ditekan
 * param {boolean} isEnabled - Whether the back handler is active
 *
 * example
 * // Usage in component
 * useBackHandler(() => {
 *   handleCloseModal();
 *   return true; // Prevent default behavior
 * }, isModalOpen);
 */
export function useBackHandler(
  onBackPress: () => boolean | null | undefined,
  isEnabled: boolean = true
): void {
  useEffect(() => {
    if (!isEnabled) return;

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      onBackPress
    );

    return () => backHandler.remove();
  }, [onBackPress, isEnabled]);
}

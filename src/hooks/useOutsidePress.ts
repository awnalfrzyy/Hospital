import { useCallback, useRef } from "react";
import { GestureResponderEvent } from "react-native";

/**
 * example
 * // Basic usage in React Native
 * const { handleOverlayPress, handleContentPress } = useOutsidePress(() => {
 *   console.log('Pressed outside!');
 * });
 */
export function useOutsidePress(onOutsidePress: () => void): {
  handleOverlayPress: (event: GestureResponderEvent) => void;
  handleContentPress: (event: GestureResponderEvent) => void;
} {
  /**
   * Handle press pada overlay (area di luar content)
   * Ini akan memanggil onOutsidePress
   */
  const handleOverlayPress = useCallback(
    (event: GestureResponderEvent) => {
      onOutsidePress();
    },
    [onOutsidePress]
  );

  /**
   * Handle press pada content (area di dalam modal)
   * Ini akan mencegah onOutsidePress terpanggil
   */
  const handleContentPress = useCallback((event: GestureResponderEvent) => {
    // Stop propagation untuk mencegah event sampai ke overlay
    event.stopPropagation();
  }, []);

  return {
    handleOverlayPress,
    handleContentPress,
  };
}

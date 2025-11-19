import { useState, useCallback } from "react";
import { useOutsidePress } from "../../../hooks/useOutsidePress";

/**
 * Interface untuk useViewProfile hook di React Native
 */
interface UseViewProfileReturn {
  modalVisible: boolean;
  selectedImage: string | null;
  openModal: (imageUrl: string) => void;
  closeModal: () => void;
  handleOverlayPress: (event: any) => void;
  handleContentPress: (event: any) => void;
}

/**
 * Custom hook untuk mengelola modal preview gambar di React Native
 * Menggunakan useOutsidePress untuk handle outside press detection
 *
 * @version 2.1.0
 * @created 2024-01-15
 * @last_updated 2024-01-16
 *
 * @feature_added Integration with useOutsidePress
 * @feature_added Separate concern for touch detection
 *
 * @returns {UseViewProfileReturn} Object berisi state dan handler functions
 */
export function useViewProfile(): UseViewProfileReturn {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  /**
   * Membuka modal dengan gambar yang dipilih
   */
  const openModal = useCallback((imageUrl: string) => {
    setSelectedImage(imageUrl);
    setModalVisible(true);
  }, []);

  /**
   * Menutup modal dan mereset state
   */
  const closeModal = useCallback(() => {
    setModalVisible(false);
    setTimeout(() => setSelectedImage(null), 300);
  }, []);

  /**
   * Gunakan useOutsidePress hook untuk handle outside press
   * Hook ini mengembalikan handler functions untuk overlay dan content
   */
  const { handleOverlayPress, handleContentPress } =
    useOutsidePress(closeModal);

  return {
    modalVisible,
    selectedImage,
    openModal,
    closeModal,
    handleOverlayPress,
    handleContentPress,
  };
}

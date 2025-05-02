import { FontAwesome } from '@expo/vector-icons';
import React, { FC } from 'react';
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  Text,
  View,
} from 'react-native';
import {
  GestureHandlerRootView,
  ScrollView,
} from 'react-native-gesture-handler';

interface ModalComponentProps {
  modalShow: boolean;
  toggleModal: () => void;
  title?: string;
  leftButtonAction?: () => void;
  leftButtonLabel?: string;
  transparent?: boolean;
  children: React.ReactNode;
}

const ModalComponent: FC<ModalComponentProps> = ({
  modalShow,
  toggleModal,
  title = 'Modal Title',
  leftButtonAction,
  leftButtonLabel = 'Back',
  transparent = true,
  children,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={transparent}
      visible={modalShow}
      onRequestClose={toggleModal}
      className="flex-1 bg-white "
      presentationStyle="formSheet"
      style={{ backgroundColor: 'white', flex: 1 }}>
      {/* Modal Header with title, left button, and close button */}
      <View
        className="flex flex-row justify-between px-6 bg-white items-center h-16"
        style={{
          borderBottomWidth: 1,
          borderBottomColor: '#E2E8F0',
        }}>
        {leftButtonAction && (
          <Pressable
            onPress={leftButtonAction}
            className="gap-2 flex flex-row w-[20%] items-center justify-start">
            <FontAwesome name="chevron-left" size={20} />
            <Text className="text-xl">{leftButtonLabel}</Text>
          </Pressable>
        )}
        <Text className="text-xl font-bold w-[60%] text-center">{title}</Text>
        <Pressable onPress={toggleModal} className="w-[20%] items-end">
          <FontAwesome name="close" size={20} />
        </Pressable>
      </View>
      {/* Modal Body */}

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
        <GestureHandlerRootView>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="p-6">
            {children}
          </ScrollView>
        </GestureHandlerRootView>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default ModalComponent;

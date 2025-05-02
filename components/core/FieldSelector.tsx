import { View, Text, Platform, TouchableOpacity } from "react-native";
import React, { FC, useState } from "react";
import FieldSelectorDTO from "./FieldSelectorDTO";
import { VStack } from "../ui/vstack";
import { Input, InputField, InputIcon, InputSlot } from "../ui/input";

import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { FormControl, FormControlError } from "../ui/form-control";
import { HStack } from "../ui/hstack";
import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
} from "@/components/ui/select";

import { Switch } from "../ui/switch";
import { ChevronDownIcon } from "../ui/icon";
import ModalComponent from "./ModalComponent";
import { Textarea, TextareaInput } from "../ui/textarea";
import { FontAwesome } from "@expo/vector-icons";
import { useTranslation } from "@/hooks/useTranslation";

interface FieldSelectorProps {
  model?: FieldSelectorDTO;
  value?: any;
  updateField?: (name: string, value: any) => void;
  formik?: any;
}

const FieldSelector: FC<FieldSelectorProps> = (props: any) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [model, setModel] = useState<FieldSelectorDTO>(props.model);
  const { t } = useTranslation();
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  console.log("props errors", props.formik.errors);
  const returnField = () => {
    switch (model.type) {
      case "hstack":
        return (
          <HStack
            className={model.containerClass ?? "w-full"}
            space={model.space ?? "xs"}
          >
            {model &&
              model.subItems &&
              model.subItems.map(
                (subModel: FieldSelectorDTO, index: number) => {
                  return (
                    <FieldSelector
                      key={index}
                      model={subModel}
                      formik={props.formik}
                      // updateField={props.updateField}
                      value={
                        (props.formik.values as any)[subModel.name] ?? null
                      }
                      updateField={(name: string, value: any) =>
                        props.updateField(name, value)
                      }
                    />
                  );
                }
              )}
          </HStack>
        );
      case "text":
        return (
          <FormControl isInvalid={props.formik.errors[model.name]}>
            <Input className="rounded-2xl ">
              {model.icon && (
                <InputSlot className="pl-3">
                  <InputIcon as={model.icon as React.ElementType} />
                </InputSlot>
              )}
              <InputField
                type="text"
                value={props.value}
                onChangeText={(e: any) => props?.updateField(model.name, e)}
                keyboardType={model.keyboardType}
              />
            </Input>
          </FormControl>
        );

      case "password":
        return (
          <FormControl isInvalid={props.formik.errors[model.name]}>
            <Input className="rounded-2xl ">
              {model.icon && (
                <InputSlot className="pl-3">
                  <InputIcon as={model.icon as React.ElementType} />
                </InputSlot>
              )}
              <InputField
                type={showPassword ? "text" : "password"}
                value={props.value}
                onChangeText={(e: any) => props?.updateField(model.name, e)}
                keyboardType={model.keyboardType}
              />
              <InputSlot
                className="pr-3"
                onPress={() => {
                  setShowPassword(!showPassword);
                }}
              >
                <FontAwesome
                  name={showPassword ? "eye-slash" : "eye"}
                  size={16}
                  color="gray"
                />
              </InputSlot>
            </Input>
          </FormControl>
        );
      case "date":
        return (
          <>
            <TouchableOpacity onPress={() => setShowModal(true)}>
              <Text
                className="rounded-2xl "
                style={{
                  borderWidth: 1,
                  borderColor: "#ccc",
                  padding: 10,
                  borderRadius: 5,
                }}
              >
                {model.dateSelectorType === "time"
                  ? new Date(props.value || Date.now()).toLocaleTimeString()
                  : new Date(props.value || Date.now()).toDateString()}
              </Text>
            </TouchableOpacity>
            <ModalComponent
              transparent={false}
              modalShow={showModal}
              toggleModal={toggleModal}
              title={t("Pick")}
              // leftButtonLabel={t('Back')}
              // leftButtonAction={handleShowAddItinerary}
            >
              <DateTimePicker
                value={new Date(props.value || Date.now())}
                mode={model.dateSelectorType ?? "date"}
                display={Platform.OS === "ios" ? "inline" : "default"}
                onChange={(event, selectedDate) => {
                  // console.log('date   ssss', selectedDate);
                  props.updateField(model.name, selectedDate);
                  toggleModal();
                }}
              />
            </ModalComponent>
          </>
        );
      case "select":
        return (
          // <FormControl isInvalid={props.formik.errors[model.name]}>
          <Select
            className="rounded-2xl "
            closeOnOverlayClick={true}
            selectedValue={props.value}
            initialLabel={props.value ?? ""}
            onValueChange={(e: any) => props.updateField(model.name, e)}
          >
            <SelectTrigger variant="outline" size="md">
              <SelectInput placeholder={t("Select option")} />
              {/* <SelectIcon className="mr-3" as={ChevronDownIcon} /> */}
            </SelectTrigger>
            <SelectPortal useRNModal={true}>
              <SelectBackdrop />

              <SelectContent className="pb-10">
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                {model &&
                  model.dataSourceLocal &&
                  model.dataSourceLocal.map((item: any, index) => (
                    <SelectItem key={index} value={item.id} label={item.name} />
                  ))}
                {/* <SelectItem value={'h'} label={'hola'} /> */}
              </SelectContent>
            </SelectPortal>
          </Select>
          // </FormControl>
        );

      case "checkbox":
        return (
          <Switch
            value={props.value}
            onValueChange={(e) => {
              props.updateField(model.name, e);
            }}
          />
        );
      case "email":
        return (
          <FormControl isInvalid={props.formik.errors[model.name]}>
            <Input className="rounded-2xl ">
              {model.icon && (
                <InputSlot className="pl-3">
                  <InputIcon as={model.icon as React.ElementType} />
                </InputSlot>
              )}
              <InputField
                type="text"
                keyboardType={model.keyboardType ?? "email-address"}
                value={props.value}
                onChangeText={(e: any) => props.updateField(model.name, e)}
              />
            </Input>
          </FormControl>
        );
      case "number":
        return (
          <FormControl isInvalid={props.formik.errors[model.name]}>
            <Input className="rounded-2xl ">
              {model.icon && (
                <InputSlot className="pl-3">
                  <InputIcon as={model.icon as React.ElementType} />
                </InputSlot>
              )}
              <InputField
                type="text"
                keyboardType={model.keyboardType ?? "number-pad"}
                value={props.value}
                onChangeText={(e: any) => props.updateField(model.name, e)}
              />
            </Input>
          </FormControl>
        );
      case "textarea":
        return (
          <FormControl isInvalid={props.formik.errors[model.name]}>
            <Textarea className="rounded-2xl ">
              <TextareaInput
                value={props.value}
                onChangeText={(e: any) => props.updateField(model.name, e)}
              />
            </Textarea>
          </FormControl>
        );
    }
  };

  if (!model || model.hidden) {
    return <></>;
  }

  return (
    <VStack className={model.containerClass}>
      <HStack className="w-full">
        {model.title && (
          <Text className="text-typography-950 font-semibold mt-4 mb-2">
            {t(model.title ?? "")}
          </Text>
        )}
        {model.required && <Text className="text-red-600 ms-2 mt-4">*</Text>}
      </HStack>

      {returnField()}
      {props.formik && props.formik.errors[model.name] && (
        <Text className="text-red-500 text-sm">
          {t(props.formik.errors[model.name] ?? "")}
        </Text>
      )}
    </VStack>
  );
};

export default FieldSelector;

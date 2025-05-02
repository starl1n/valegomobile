import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  useColorScheme,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";

import FieldSelectorDTO from "../core/FieldSelectorDTO";
import FieldSelector from "../core/FieldSelector";
import * as yup from "yup";
// import yupTypeValidator from '@/common/YupTypeValidator';
import { useFormik } from "formik";
import { Box } from "../ui/box";
import { FontAwesome } from "@expo/vector-icons";
import { HStack } from "../ui/hstack";
import { useTranslation } from "@/hooks/useTranslation";
import yupTypeValidator, { YupSchema } from "@/common/YupTypeValidator";
import { Spinner } from "../ui/spinner";
import { useRouter } from "expo-router";
import RegisterDTO from "./Register.DTO";
import { VStack } from "../ui/vstack";
const RegisterContainer = () => {
  // PROPERTIES
  const [isLoading, setIsLoading] = useState(false);
  const [fields, setFields] = useState<FieldSelectorDTO[]>(RegisterDTO);
  const { t } = useTranslation();
  const router = useRouter();
  const [formPrepared, setFormPrepared] = useState(false);
  const [formikInitialObject, setFormikInitialObject] = useState<any>({});
  const [validationsSchema, setValidationSchema] =
    useState<yup.ObjectSchema<any>>();

  const formik = useFormik({
    initialValues: formikInitialObject,
    onSubmit: (values) => {
      handleSubmit(values);
    },
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: validationsSchema,
  });

  const colorScheme = useColorScheme();
  console.log("colorScheme", colorScheme);

  //   METHODS
  const updateField = (name: string, value: any) => {
    formik.setFieldValue(name, value);
  };
  const prepareFormikObject = () => {
    const initialObject: { [key: string]: string } = {};
    let initialObjectValidation: { [key: string]: YupSchema } = {};

    fields.forEach((field: FieldSelectorDTO) => {
      initialObject[field.name] = field.value;

      if (field.required) {
        const schema = yupTypeValidator(field);

        if (schema) {
          initialObjectValidation[field.name] = schema;
        }
      }
      if (field.subItems) {
        field.subItems.forEach((subItem: FieldSelectorDTO) => {
          initialObject[subItem.name] = subItem.value;

          if (subItem.required) {
            const schema = yupTypeValidator(subItem);

            if (schema) {
              initialObjectValidation[subItem.name] = schema;
            }
          }
        });
      }
    });

    setFormikInitialObject(initialObject);
    setValidationSchema(yup.object().shape(initialObjectValidation));

    setFormPrepared(true);
  };

  //   const fillFormikObject = (record: any) => {
  //     fields.forEach((item: FieldSelectorDTO) => {
  //       if (item && item.name.length > 0) {
  //         //console.log("field name", item.name, "RecordValue ", record[item.name]);
  //         if (record && record[item.name]) {
  //           formik.setFieldValue(item.name, record[item.name]);
  //         }
  //       }
  //     });
  //   };
  const handleSubmit = (values: any) => {
    console.log("values", values);
    try {
      setIsLoading(true);
      router.push("/(app)/(tabs)");
    } catch (error) {
      console.log("error", error);
    } finally {
      setIsLoading(false);
    }
  };
  //   UI / EVENTS

  useEffect(() => {
    prepareFormikObject();
  }, []);

  return (
    <SafeAreaView
      className={colorScheme === "dark" ? "bg-black-800" : "bg-while"}
    >
      <ScrollView className={"h-full w-full  px-4 "}>
        <Text className="text-3xl font-semibold mt-4 text-black dark:text-white">
          {t("Register")}
        </Text>
        <Text className="text-xl text-gray-500">Please enter your details</Text>
        <VStack>
          {fields &&
            fields.map((field) => (
              <FieldSelector
                key={field.name}
                model={field}
                formik={formik}
                updateField={updateField}
                value={(formik.values as any)[field.name] ?? null}
              />
            ))}
        </VStack>
        <Button
          className="mt-8 rounded-2xl bg-primary-500 "
          style={{ height: 50 }}
          disabled={isLoading === true}
          onPress={() => {
            formik.handleSubmit();
          }}
        >
          {isLoading && <Spinner color="white" />}
          <Text className="font-semibold text-white dark:text-black">
            {t("Register")}
          </Text>
        </Button>
        <HStack className=" py-8 items-center align-middle">
          <Box className=" h-[1px] w-1/3 shadow-transparent  bg-gray-300" />
          <Text className="text-center w-1/3 text-gray-500">OR</Text>
          <Box className=" h-[1px] w-1/3 shadow-transparent  bg-gray-300" />
        </HStack>

        <Button className="mt-2 rounded-2xl border border-w-1 bg-transparent h-[50] border-outline-700 ">
          <FontAwesome
            name="apple"
            size={24}
            color={colorScheme === "dark" ? "white" : "black"}
            className="mr-2"
          />
          <Text
            className={
              "font-semibold " +
              (colorScheme === "dark" ? "text-white" : "text-black")
            }
          >
            Apple
          </Text>
        </Button>

        <Button className="mt-2 rounded-2xl border border-w-1 bg-transparent h-[50] border-outline-700 ">
          <FontAwesome
            name="google"
            size={24}
            color={colorScheme === "dark" ? "white" : "black"}
            className="mr-2"
          />
          <Text
            className={
              "font-semibold " +
              (colorScheme === "dark" ? "text-white" : "text-black")
            }
          >
            Google
          </Text>
        </Button>

        <Pressable
          className="mt-4 rounded-2xl  py-4 flex flex-row items-center justify-center"
          onPress={() => router.replace("/login")}
        >
          <Text className="mr-2 text-black dark:text-white">
            Already have an account?
          </Text>
          <Text
            className={
              "font-bold " +
              (colorScheme === "dark" ? "text-white" : "text-black")
            }
          >
            Login
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterContainer;

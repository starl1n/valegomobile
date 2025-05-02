import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  useColorScheme,
} from "react-native";
import React from "react";
import { Center } from "../ui/center";
import { useSession } from "@/contexts/AuthContext";
import { Heading } from "../ui/heading";
import { useTranslation } from "@/hooks/useTranslation";
import { Button } from "../ui/button";
import { useRouter } from "expo-router";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Box } from "../ui/box";
import { Link } from "../ui/link";
import { VStack } from "../ui/vstack";
import { MenuSeparator } from "../ui/menu";
import { HStack } from "../ui/hstack";
import { FontAwesome } from "@expo/vector-icons";

const ProfileContainer = () => {
  const { session, signOut } = useSession();
  const { t } = useTranslation();
  const colorScheme = useColorScheme();
  const router = useRouter();
  if (session) {
    return (
      <SafeAreaView>
        <ScrollView>
          <Center>
            <Avatar size="2xl" className="mt-5 ">
              <AvatarImage
                source={{
                  uri: "https://images.unsplash.com/photo-1744131047954-f2ba9f2c777f?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }}
              />
            </Avatar>
            <Heading className="font-bold text-2xl mt-2 mb-4 ">
              {session}
            </Heading>
          </Center>
          <VStack
            space="md"
            className="bg-white dark:bg-gray-900 py-4 px-2 mb-4"
          >
            <HStack>
              <FontAwesome
                name="list"
                size={20}
                color={colorScheme === "dark" ? "white" : "black"}
                className="mr-2"
              />
              <Text className="text-black dark:text-white">My orders</Text>
            </HStack>

            <Box className="border-b-hairline border-gray-200 dark:border-gray-600" />
            <HStack>
              <FontAwesome
                name="address-book"
                size={20}
                color={colorScheme === "dark" ? "white" : "black"}
                className="mr-2"
              />
              <Text className="text-black dark:text-white">My addresses</Text>
            </HStack>
          </VStack>

          {/* Settings */}
          <Text className="text-black dark:text-white font-bold text-xl mt-4 mb-3">
            Settings
          </Text>
          <VStack
            space="md"
            className="bg-white dark:bg-gray-900 py-4 px-2 mb-4"
          >
            <HStack>
              <FontAwesome
                name="edit"
                size={20}
                color={colorScheme === "dark" ? "white" : "black"}
                className="mr-2"
              />
              <Text className="text-black dark:text-white">
                Edit general info
              </Text>
            </HStack>

            <Box className="border-b-hairline border-gray-200 dark:border-gray-600" />
            <HStack>
              <FontAwesome
                name="support"
                size={20}
                color={colorScheme === "dark" ? "white" : "black"}
                className="mr-2"
              />
              <Text className="text-black dark:text-white">
                Customer Support
              </Text>
            </HStack>
          </VStack>
          <Button
            className="bg-red-500 mt-4"
            onPress={() => {
              signOut();
              router.push("/login");
            }}
          >
            <Text>{t("Logout")}</Text>
          </Button>
        </ScrollView>
      </SafeAreaView>
    );
  } else {
    return (
      <Center className="flex-1">
        <Heading className="font-bold text-2xl">
          {t("Sign-In to your account")}
        </Heading>
        <Button
          className="bg-primary-500"
          onPress={() => {
            signOut();
            router.push("/login");
          }}
        >
          <Text>{t("Login")}</Text>
        </Button>
      </Center>
    );
  }
};

export default ProfileContainer;

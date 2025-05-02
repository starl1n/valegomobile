import EditScreenInfo from "@/components/EditScreenInfo";
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar";
import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { FontAwesome } from "@expo/vector-icons";
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  useColorScheme,
  View,
} from "react-native";
import { FlashList } from "@shopify/flash-list";
import { useTranslation } from "@/hooks/useTranslation";
import { useSession } from "@/contexts/AuthContext";
import { router } from "expo-router";

const HomeContainer = () => {
  // PARAMETERS
  const { session } = useSession();
  const colorScheme = useColorScheme();
  const { t } = useTranslation();
  const DATA = [
    {
      title: "First Item",
      icon: "heart",
    },
    {
      title: "Second Item",
      icon: "circle",
    },
    {
      title: "Third Item",
      icon: "circle",
    },
    {
      title: "Fourth Item",
      icon: "circle",
    },
    {
      title: "Fifth Item",
      icon: "circle",
    },
    {
      title: "Sixth Item",
      icon: "circle",
    },
  ];

  const DATA_TRENDING = [
    {
      title: "First Item",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 100,
    },
    {
      title: "Second Item",
      image:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 100,
    },
    {
      title: "Very long name of item to show with dots",
      image:
        "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=3704&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 100,
    },
    {
      title: "Second Item",
      image:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=3880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 100,
    },
  ];

  // METHODS

  // UI EVENTS
  return (
    <SafeAreaView>
      {/* User info */}
      <HStack className="mx-4 border-b-hairline border-gray-200">
        <Pressable
          onPress={() => {
            router.replace("/login");
          }}
        >
          <HStack>
            <Avatar>
              <AvatarImage
                source={{
                  uri: "https://images.unsplash.com/photo-1743090597731-d6fc3800ebf6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
                }}
              />
              <AvatarFallbackText>AG</AvatarFallbackText>
            </Avatar>

            <VStack className="ml-2">
              <Text className="text-typography-secondary  text-gray-900 dark:text-gray-100">
                Hello
              </Text>
              <Text className="font-bold text-gray-900 dark:text-gray-100">
                {!session ? "Guest" : session}
              </Text>
            </VStack>
          </HStack>
        </Pressable>
        <HStack className="ml-auto">
          <Pressable className="mr-2 px-2">
            <FontAwesome
              name="search"
              size={24}
              color={colorScheme === "dark" ? "white" : "black"}
            />
          </Pressable>
          <Pressable className="mr-2 px-2">
            <FontAwesome
              name="shopping-cart"
              size={24}
              color={colorScheme === "dark" ? "white" : "black"}
            />
          </Pressable>
        </HStack>
      </HStack>
      <ScrollView className=" " scrollEventThrottle={16}>
        {/* SLIDESHOW */}
        <Box className="my-2 bg-white dark:bg-gray-800 h-[200px] mx-4 rounded-2xl">
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1679310446454-f94b53167675?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            style={{ width: "100%", height: "100%" }}
            className="rounded-2xl"
          />
        </Box>

        <Heading className="mt-4 mx-4 font-bold text-xl">
          {t("Categories")}
        </Heading>

        <FlashList
          className="mx-4 mt-2"
          data={DATA}
          horizontal
          renderItem={({ item }) => (
            <View className=" py-2 px-4 me-2 bg-white dark:bg-gray-900 rounded-2xl items-center">
              <FontAwesome
                name={item.icon}
                size={24}
                color={colorScheme === "dark" ? "white" : "black"}
              />
              <Text className="text-gray-900 dark:text-gray-100">
                {item.title}
              </Text>
            </View>
          )}
          estimatedItemSize={200}
        />

        <Heading className="mt-4 mx-4 font-bold text-xl">Trending</Heading>

        <FlashList
          className="mx-4 mt-2"
          data={DATA_TRENDING}
          numColumns={2}
          ItemSeparatorComponent={() => <View className="w-20 h-2" />}
          renderItem={({ item }) => (
            <View className="  bg-white dark:bg-gray-900 h-full w-[95%] mb-2 rounded-xl">
              <Image
                source={{ uri: item.image }}
                className="w-full h-[150px] object-cover"
              />
              <Text numberOfLines={1} className="mx-2">
                {item.title}
              </Text>
              <Text className="font-bold mx-2">${item.price}</Text>
            </View>
          )}
          estimatedItemSize={200}
        />

        <Heading className="mt-4 mx-4 font-bold text-xl">
          Continue where you left
        </Heading>
        <FlashList
          className="mx-4 mt-2 bg-white dark:bg-gray-900"
          data={DATA_TRENDING}
          horizontal
          renderItem={({ item }) => (
            <View className=" me-2 border border-gray-200 dark:border-gray-950 h-[200px] w-[200px] mb-2 rounded-xl">
              <Image
                source={{ uri: item.image }}
                className="w-full h-[150px] object-cover"
              />
              <Text numberOfLines={1} className="mx-2">
                {item.title}
              </Text>
              <Text className="font-bold mx-2">${item.price}</Text>
            </View>
          )}
          estimatedItemSize={200}
        />
      </ScrollView>
    </SafeAreaView>
    // <Center className="flex-1">
    //   <Heading className="font-bold text-2xl">Expo V3</Heading>
    //   <Divider className="my-[30px] w-[80%]" />
    //   <Text className="p-4">Example below to use gluestack-ui components.</Text>
    //   <EditScreenInfo path="app/(app)/(tabs)/index.tsx" />
    // </Center>
  );
};

export default HomeContainer;

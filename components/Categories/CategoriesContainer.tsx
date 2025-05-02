import { View, Text, Image, SafeAreaView } from "react-native";
import React from "react";
import { FlashList } from "@shopify/flash-list";
import { Heading } from "../ui/heading";
import { useTranslation } from "@/hooks/useTranslation";

const CategoriesContainer = () => {
  const { t } = useTranslation();
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

  return (
    <SafeAreaView className="flex-1">
      <FlashList
        className="mx-4 mt-2"
        ListHeaderComponent={() => {
          return (
            <Heading className="mt-4 mb-2 font-bold text-xl">
              {t("Categories")}
            </Heading>
          );
        }}
        data={DATA_TRENDING}
        numColumns={2}
        ItemSeparatorComponent={() => <View className="w-20 h-2" />}
        renderItem={({ item }) => (
          <View className="  bg-white dark:bg-gray-900 h-full w-[95%] mb-2 rounded-xl">
            <Image
              source={{ uri: item.image }}
              className="w-full h-[150px] object-cover"
            />
            <Text
              numberOfLines={1}
              className="mx-2 text-gray-900 dark:text-gray-50"
            >
              {item.title}
            </Text>
          </View>
        )}
        estimatedItemSize={200}
      />
    </SafeAreaView>
  );
};

export default CategoriesContainer;

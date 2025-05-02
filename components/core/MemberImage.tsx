import { View, Text, TouchableNativeFeedback } from 'react-native';
import React, { FC, useState } from 'react';
import { SvgFromUri } from 'react-native-svg';
import Settings from '@/common/Settings';
import { Image } from '../ui/image';
import { useRouter } from 'expo-router';

interface MemberImageProps {
  image: string;
  name: string;
  lastName: string;
  memberId: string;
}

const MemberImage: FC<MemberImageProps> = ({
  image,
  name,
  lastName,
  memberId,
}) => {
  const svgBaseUrl =
    'https://placehold.co/100x100/8E9BB7/ffffff?font=open-sans&text=';
  const [imageHasError, setImageHasError] = useState(false);
  const imgFallBack = () => {
    setImageHasError(true);
  };

  const router = useRouter();

  return (
    <TouchableNativeFeedback
      onPress={() => {
        router.push(`/profile/${memberId}`);
      }}
      background={TouchableNativeFeedback.Ripple('rgba(0, 0, 0, 0.3)', false)}>
      <View className="flex flex-col items-center justify-center">
        {imageHasError || !image ? (
          <View className="rounded-md h-16 w-16 p-4 overflow-hidden items-center justify-center flex">
            <SvgFromUri
              uri={svgBaseUrl + name[0] + lastName[0]}
              width={55}
              height={55}
            />
          </View>
        ) : (
          <Image
            source={{
              uri: `${Settings.BasePath}/files/${image}`,
            }}
            className="rounded-md h-16 w-16 object-contain object-center bg-white"
            alt="Member Image"
            onError={() => imgFallBack()}
          />
        )}

        <Text className="text-lg text-dark">{`${name} ${lastName?.[0]}.`}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export default MemberImage;

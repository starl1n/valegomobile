import React, { FC, useState } from 'react';
import { Image } from '../ui/image';

interface DetailsImageProps {
  imagePlaceholder: string;
  image: string;
  alt: string;
}

const DetailsImage: FC<DetailsImageProps> = ({
  image,
  imagePlaceholder,
  alt,
}) => {
  const baseImage = imagePlaceholder;
  const [imageHasError, setImageHasError] = useState(false);
  const imgFallBack = () => {
    setImageHasError(true);
  };

  let currentImage = imageHasError || !image ? baseImage : { uri: image };

  return (
    <Image
      source={currentImage}
      className=" object-cover h-64 w-full"
      alt={alt}
      onError={() => imgFallBack()}
    />
  );
};

export default DetailsImage;

import {
  View,
  Text,
  TouchableNativeFeedback,
  Linking,
  Platform,
} from 'react-native';
import React, { FC } from 'react';
import { FontAwesome } from '@expo/vector-icons';

interface SocialLinksProps {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
  youtube?: string;
}

const SocialLinks: FC<SocialLinksProps> = ({
  facebook,
  twitter,
  instagram,
  linkedin,
  youtube,
}) => {
  const instagramUrl = `instagram://user?username=${instagram?.replace('https://www.instagram.com/', '')}`;
  const facebookUrl = `fb://profile/${facebook?.replace('https://www.facebook.com/', '')}`;
  const twitterUrl = `twitter://user?screen_name=${twitter?.replace('https://twitter.com/', '')}`;
  const linkedinUrl = `linkedin://profile/${linkedin?.replace('https://www.linkedin.com/in/', '')}`;
  const youtubeUrl = `youtube://www.youtube.com/channel/${youtube?.replace('https://www.youtube.com/channel/', '')}`;

  return (
    <View className="flex flex-row gap-2 my-2">
      {/*Facebook*/}
      {
        <TouchableNativeFeedback
          disabled={!facebook}
          onPress={Platform.select({
            ios: () => {
              Linking.canOpenURL(facebookUrl)
                .then(supported => {
                  if (supported) {
                    Linking.openURL(facebookUrl); // Open Facebook app
                  } else {
                    Linking.openURL(facebook || 'https://www.facebook.com'); // Fallback to browser if app not installed
                  }
                })
                .catch(err => console.error('An error occurred', err));
            },
            android: () => {
              Linking.canOpenURL(facebookUrl)
                .then(supported => {
                  if (supported) {
                    Linking.openURL(facebookUrl); // Open Facebook app
                  } else {
                    Linking.openURL('https://www.facebook.com'); // Fallback to browser if app not installed
                  }
                })
                .catch(err => console.error('An error occurred', err));
            },
          } as any)}
          background={TouchableNativeFeedback.Ripple(
            'rgba(0, 0, 0, 0.3)',
            true,
          )}>
          <View
            style={{
              backgroundColor: '#3b5998', // Facebook blue
              padding: 10,
              width: 40,
              height: 40,
              opacity: !facebook ? 0.5 : 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
              overflow: 'hidden', // This is important for the ripple effect to be clipped within the border radius.
            }}>
            <FontAwesome name="facebook" size={20} color="white" />
          </View>
        </TouchableNativeFeedback>
      }

      {/*Instagram*/}
      {
        <TouchableNativeFeedback
          disabled={!instagram}
          onPress={Platform.select({
            ios: () => {
              Linking.canOpenURL(instagramUrl)
                .then(supported => {
                  if (supported) {
                    Linking.openURL(instagramUrl); // Open Instagram app
                  } else {
                    Linking.openURL(instagram || 'https://www.instagram.com'); // Fallback to browser if app not installed
                  }
                })
                .catch(err => console.error('An error occurred', err));
            },
            android: () => {
              Linking.canOpenURL(instagramUrl)
                .then(supported => {
                  if (supported) {
                    Linking.openURL(instagramUrl); // Open Instagram app
                  } else {
                    Linking.openURL('https://www.instagram.com'); // Fallback to browser if app not installed
                  }
                })
                .catch(err => console.error('An error occurred', err));
            },
          } as any)}
          background={TouchableNativeFeedback.Ripple(
            'rgba(0, 0, 0, 0.3)',
            true,
          )}>
          <View
            style={{
              backgroundColor: '#C13584', // Instagram color
              padding: 10,
              width: 40,
              height: 40,
              opacity: !instagram ? 0.5 : 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
              overflow: 'hidden', // This is important for the ripple effect to be clipped within the border radius.
            }}>
            <FontAwesome name="instagram" size={20} color="white" />
          </View>
        </TouchableNativeFeedback>
      }

      {/*Linkedin*/}
      {
        <TouchableNativeFeedback
          disabled={!linkedin}
          onPress={Platform.select({
            ios: () => {
              Linking.canOpenURL(linkedinUrl)
                .then(supported => {
                  if (supported) {
                    Linking.openURL(linkedinUrl); // Open Linkedin app
                  } else {
                    Linking.openURL(linkedin || 'https://www.linkedin.com'); // Fallback to browser if app not installed
                  }
                })
                .catch(err => console.error('An error occurred', err));
            },
            android: () => {
              Linking.canOpenURL(linkedinUrl)
                .then(supported => {
                  if (supported) {
                    Linking.openURL(linkedinUrl); // Open Linkedin app
                  } else {
                    Linking.openURL('https://www.linkedin.com'); // Fallback to browser if app not installed
                  }
                })
                .catch(err => console.error('An error occurred', err));
            },
          } as any)}
          background={TouchableNativeFeedback.Ripple(
            'rgba(0, 0, 0, 0.3)',
            true,
          )}>
          <View
            style={{
              backgroundColor: '#0077B5', // LinkedIn blue
              padding: 10,
              width: 40,
              height: 40,
              opacity: !linkedin ? 0.5 : 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
              overflow: 'hidden', // This is important for the ripple effect to be clipped within the border radius.
            }}>
            <FontAwesome name="linkedin" size={20} color="white" />
          </View>
        </TouchableNativeFeedback>
      }
      {/*Youtube*/}
      {
        <TouchableNativeFeedback
          disabled={!youtube}
          onPress={Platform.select({
            ios: () => {
              Linking.canOpenURL(youtubeUrl)
                .then(supported => {
                  if (supported) {
                    Linking.openURL(youtubeUrl); // Open Youtube app
                  } else {
                    Linking.openURL(youtube || 'https://www.youtube.com'); // Fallback to browser if app not installed
                  }
                })
                .catch(err => console.error('An error occurred', err));
            },
            android: () => {
              Linking.canOpenURL(youtubeUrl)
                .then(supported => {
                  if (supported) {
                    Linking.openURL(youtubeUrl); // Open Youtube app
                  } else {
                    Linking.openURL('https://www.youtube.com'); // Fallback to browser if app not installed
                  }
                })
                .catch(err => console.error('An error occurred', err));
            },
          } as any)}
          background={TouchableNativeFeedback.Ripple(
            'rgba(0, 0, 0, 0.3)',
            true,
          )}>
          <View
            style={{
              backgroundColor: '#FF0000', // YouTube red
              padding: 10,
              width: 40,
              height: 40,
              opacity: !youtube ? 0.5 : 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
              overflow: 'hidden', // This is important for the ripple effect to be clipped within the border radius.
            }}>
            <FontAwesome name="youtube-play" size={20} color="white" />
          </View>
        </TouchableNativeFeedback>
      }

      {/*Twitter*/}
      {
        <TouchableNativeFeedback
          disabled={!twitter}
          onPress={Platform.select({
            ios: () => {
              Linking.canOpenURL(twitterUrl)
                .then(supported => {
                  if (supported) {
                    Linking.openURL(twitterUrl); // Open Twitter app
                  } else {
                    Linking.openURL(twitter || 'https://twitter.com'); // Fallback to browser if app not installed
                  }
                })
                .catch(err => console.error('An error occurred', err));
            },
            android: () => {
              Linking.canOpenURL(twitterUrl)
                .then(supported => {
                  if (supported) {
                    Linking.openURL(twitterUrl); // Open Twitter app
                  } else {
                    Linking.openURL('https://twitter.com'); // Fallback to browser if app not installed
                  }
                })
                .catch(err => console.error('An error occurred', err));
            },
          } as any)}
          background={TouchableNativeFeedback.Ripple(
            'rgba(0, 0, 0, 0.3)',
            true,
          )}>
          <View
            style={{
              backgroundColor: '#1DA1F2', // Twitter blue
              padding: 10,
              width: 40,
              height: 40,
              opacity: !twitter ? 0.5 : 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
              overflow: 'hidden', // This is important for the ripple effect to be clipped within the border radius.
            }}>
            <FontAwesome name="twitter" size={20} color="white" />
          </View>
        </TouchableNativeFeedback>
      }
    </View>
  );
};

export default SocialLinks;

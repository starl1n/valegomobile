import {
  View,
  Text,
  TouchableNativeFeedback,
  Linking,
  Platform,
} from 'react-native';
import React, { FC } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { useTranslation } from '@/hooks/useTranslation';

interface ContactLinksProps {
  contact?: string;
  email?: string;
}

const ContactLinks: FC<ContactLinksProps> = ({ contact, email }) => {
  const {t} = useTranslation();
  const emailUrl = `mailto:${email}`;
  const messageUrl = `sms:${contact}`;
  const contactUrl = `tel:${contact}`;

  return (
    <View className="flex flex-row gap-2 my-2">
      {/*Contact Call*/}
      {
        <TouchableNativeFeedback
          disabled={!contact}
          onPress={Platform.select({
            ios: () => {
              Linking.canOpenURL(contactUrl)
                .then(supported => {
                  if (supported) {
                    Linking.openURL(contactUrl);
                  }
                })
                .catch(err => console.error('An error occurred', err));
            },
            android: () => {
              Linking.canOpenURL(contactUrl)
                .then(supported => {
                  if (supported) {
                    Linking.openURL(contactUrl);
                  } else {
                    Linking.openURL('https://www.contact.com');
                  }
                })
                .catch(err => console.error('An error occurred', err));
            },
          } as any)}
          background={TouchableNativeFeedback.Ripple(
            'rgba(0, 0, 0, 0.3)',
            false,
          )}>
          <View
            style={{
              backgroundColor: 'white',
              paddingHorizontal: 20,
              height: 40,
              opacity: !contact ? 0.5 : 1,
              justifyContent: 'center',
              gap: 5,
              alignItems: 'center',
              alignContent: 'center',
              flexDirection: 'row',
              borderRadius: 20,
              overflow: 'hidden',
            }}>
            <FontAwesome name="phone" size={20} color="black" />
            <Text className="font-bold text-xl">{t('Call')}</Text>
          </View>
        </TouchableNativeFeedback>
      }

      {/*Contact Message*/}
      {
        <TouchableNativeFeedback
          disabled={!contact}
          onPress={Platform.select({
            ios: () => {
              Linking.canOpenURL(messageUrl)
                .then(supported => {
                  if (supported) {
                    Linking.openURL(messageUrl);
                  }
                })
                .catch(err => console.error('An error occurred', err));
            },
            android: () => {
              Linking.canOpenURL(messageUrl)
                .then(supported => {
                  if (supported) {
                    Linking.openURL(messageUrl);
                  } else {
                    Linking.openURL('https://www.message.com');
                  }
                })
                .catch(err => console.error('An error occurred', err));
            },
          } as any)}
          background={TouchableNativeFeedback.Ripple(
            'rgba(0, 0, 0, 0.3)',
            false,
          )}>
          <View
            style={{
              backgroundColor: 'white',
              paddingHorizontal: 20,
              height: 40,
              opacity: !contact ? 0.5 : 1,
              justifyContent: 'center',
              gap: 5,
              alignItems: 'center',
              alignContent: 'center',
              flexDirection: 'row',
              borderRadius: 20,
              overflow: 'hidden',
            }}>
            <FontAwesome name="commenting-o" size={20} color="black" />
            <Text className="font-bold text-xl">{t('Message')}</Text>
          </View>
        </TouchableNativeFeedback>
      }

      {/*Contact Email*/}
      {
        <TouchableNativeFeedback
          disabled={!email}
          onPress={() => {
            Linking.canOpenURL(emailUrl)
              .then(supported => {
                if (supported) {
                  Linking.openURL(emailUrl);
                }
              })
              .catch(err => console.error('An error occurred', err));
          }}
          background={TouchableNativeFeedback.Ripple(
            'rgba(0, 0, 0, 0.3)',
            false,
          )}>
          <View
            style={{
              backgroundColor: 'white',
              paddingHorizontal: 20,
              height: 40,
              opacity: !email ? 0.5 : 1,
              justifyContent: 'center',
              gap: 5,
              alignItems: 'center',
              alignContent: 'center',
              flexDirection: 'row',
              borderRadius: 20,
              overflow: 'hidden',
            }}>
            <FontAwesome name="envelope-o" size={20} color="black" />
            <Text className="font-bold text-xl">{t('Email')}</Text>
          </View>
        </TouchableNativeFeedback>
      }
    </View>
  );
};

export default ContactLinks;

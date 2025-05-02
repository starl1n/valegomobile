import React from 'react';
import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
} from '../ui/alert-dialog';
import { Heading } from '../ui/heading';

import { Text } from '@/components/ui/text';
import { Button, ButtonText } from '../ui/button';
import { useTranslation } from '@/hooks/useTranslation';

interface Props {
  show: boolean;
  toggle: () => void;
  confirm: () => void;
  title?: string;
  message?: string;
}

const ConfirmComponent = (props: Props) => {
  const { t } = useTranslation();
  console.log('props', props);
  return (
    <AlertDialog
      isOpen={props.show}
      onClose={props.toggle}
      size="md"
      useRNModal={true}>
      <AlertDialogBackdrop />
      <AlertDialogContent>
        {props.title && (
          <AlertDialogHeader>
            <Heading className="text-typography-950 font-semibold" size="md">
              {props.title ?? t('Are you sure?')}
            </Heading>
          </AlertDialogHeader>
        )}
        {props.message && (
          <AlertDialogBody className="mt-3 mb-4">
            <Text size="sm">{props.message}</Text>
          </AlertDialogBody>
        )}
        <AlertDialogFooter className="">
          <Button
            variant="outline"
            action="secondary"
            onPress={props.toggle}
            size="sm">
            <ButtonText>{t('Cancel')}</ButtonText>
          </Button>
          <Button size="sm" onPress={props.confirm}>
            <ButtonText>{t('Confirm')}</ButtonText>
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmComponent;

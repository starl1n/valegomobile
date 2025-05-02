import React from 'react';
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
  ActionsheetItemText,
} from '../ui/actionsheet';
import OptionsMenuItemsDTO from './OptionsMenuItemsDTO';

interface PropsDTO {
  toggle: () => void;
  show: boolean;
  items: OptionsMenuItemsDTO[];
}

const OptionsMenu = (props: PropsDTO) => {
  return (
    <Actionsheet isOpen={props.show} useRNModal={true} onClose={props.toggle}>
      <ActionsheetBackdrop />
      <ActionsheetContent className={'pb-10'}>
        <ActionsheetDragIndicatorWrapper>
          <ActionsheetDragIndicator />
        </ActionsheetDragIndicatorWrapper>
        {props.items &&
          props.items.map((item, index) => (
            <ActionsheetItem
              key={index}
              onPress={() => {
                if (item.onPress) {
                  item.onPress(item);
                }
                props.toggle();
              }}
              disabled={item.disabled}>
              <ActionsheetItemText>{item.title}</ActionsheetItemText>
            </ActionsheetItem>
          ))}
      </ActionsheetContent>
    </Actionsheet>
  );
};

export default OptionsMenu;

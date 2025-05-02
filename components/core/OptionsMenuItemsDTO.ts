interface OptionsMenuItemsDTO {
  title: string;
  id: string;
  object?: any;
  onPress?: (item: any) => void;
  disabled?: boolean;
}

export default OptionsMenuItemsDTO;

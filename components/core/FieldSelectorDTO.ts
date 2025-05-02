interface FieldSelectorDTO {
  value?: any;
  icon?: string;
  name: string;
  title?: string;
  type:
    | 'email'
    | 'password'
    | 'text'
    | 'hstack'
    | 'vstack'
    | 'select'
    | 'number'
    | 'textarea'
    | 'date'
    | 'checkbox';
  dbType: string;
  space?: 'md' | 'xs' | 'xl';
  containerClass?: string;
  required?: boolean;
  dataSource?: string;
  dataSourceValueField?: string;
  dataSourceTextField?: string;
  dataSourceLocal?: SelectField[];
  datasourceMethod?: 'POST' | 'GET';
  dependOf?: string;
  subItems?: FieldSelectorDTO[];
  groupNumber?: number;
  readOnly?: boolean;
  keyboardType?: 'email-address' | 'numeric' | 'default' | 'phone-pad';
  dateSelectorType?: 'date' | 'datetime' | 'time' | 'countdown';
  dontSyncToServer?: boolean;
  hidden?: boolean;
}

interface SelectField {
  id: string | number | boolean;
  name: string;
}

export default FieldSelectorDTO;

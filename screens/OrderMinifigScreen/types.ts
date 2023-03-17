import { Schema } from 'yup';
import { NavigationStackParamList } from 'setup/Navigation/types';

export type OrderMinifigScreenProps = ScreenProps<
  NavigationStackParamList,
  'OrderMinifigScreen'
>;

export interface OrderMinifigFormFieldsProps {
  fullName: string;
  email: string;
  adress: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface FieldProps {
  name: string;
  label: string;
}

export interface UseOrderMinifigFormReturnType {
  initialValues: OrderMinifigFormFieldsProps;
  validationSchema: Schema<OrderMinifigFormFieldsProps>;
  fields: FieldProps[];
}

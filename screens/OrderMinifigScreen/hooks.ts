import { useState } from 'react';
import * as Yup from 'yup';
import {
  UseOrderMinifigFormReturnType,
  OrderMinifigFormFieldsProps,
} from './types';

export const useOrderMinifigForm = (): UseOrderMinifigFormReturnType => {
  const [initialValues] = useState<OrderMinifigFormFieldsProps>({
    fullName: '',
    email: '',
    adress: '',
    city: '',
    state: '',
    zipCode: '',
  });

  const requiredError = 'Field is required';

  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .matches(/^(?=.*[a-z])(?=.*[A-Z])/, 'Only letters should be provided')
      .required(requiredError),
    email: Yup.string().email().required(requiredError),
    adress: Yup.string().required(requiredError),
    city: Yup.string()
      .matches(/^(?=.*[a-z])(?=.*[A-Z])/, 'Only letters should be provided')
      .required(requiredError),
    state: Yup.string()
      .matches(/^(?=.*[a-z])(?=.*[A-Z])/, 'Only letters should be provided')
      .required(requiredError),
    zipCode: Yup.string()
      .matches(/^(?=.*[0-9])/, 'Only numbers should be provided')
      .required(requiredError),
  });

  const fields = [
    { name: 'fullName', label: 'Full Name' },
    { name: 'email', label: 'Email' },
    { name: 'adress', label: 'Address' },
    { name: 'city', label: 'City' },
    { name: 'state', label: 'State' },
    { name: 'zipCode', label: 'Zip Code' },
  ];

  return {
    initialValues,
    validationSchema,
    fields,
  };
};

import React from 'react';
import { Formik } from 'formik';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Input from 'components/Input';
import Box from 'components/Box';
import Button from 'components/Button';
import { OrderMinifigScreenProps } from './types';
import { useOrderMinifigForm } from './hooks';
import { StyledOrderMinifigScreenTitle } from './styles';

const OrderMinifigScreen: React.FC<OrderMinifigScreenProps> = ({
  navigation,
  route,
}) => {
  const { fields, ...formikProps } = useOrderMinifigForm();
  const { minifigId } = route?.params || {};

  return (
    <Formik
      {...formikProps}
      onSubmit={(values) =>
        navigation?.navigate('OrderMinifigSummary', {
          minifigId: String(minifigId),
          ...values,
        })
      }
    >
      {({
        values,
        errors,
        touched,
        dirty,
        handleBlur,
        handleChange,
        handleSubmit,
        isValid,
      }) => (
        <Box px='s'>
          <KeyboardAwareScrollView
            bounces={false}
            extraHeight={200}
            enableOnAndroid
            automaticallyAdjustContentInsets={false}
            showsVerticalScrollIndicator={false}
          >
            <StyledOrderMinifigScreenTitle>
              PERSONAL DETAILS
            </StyledOrderMinifigScreenTitle>
            {fields.map(({ name, label }) => (
              <Input
                key={name}
                {...{ label }}
                value={values[name]}
                error={touched[name] && errors[name]}
                onChangeText={handleChange(name)}
                onBlur={handleBlur(name)}
              />
            ))}
            <Button
              label='VIEW SUMMARY'
              onPress={() => handleSubmit()}
              isDisabled={!isValid || !dirty}
            />
          </KeyboardAwareScrollView>
        </Box>
      )}
    </Formik>
  );
};

export default OrderMinifigScreen;

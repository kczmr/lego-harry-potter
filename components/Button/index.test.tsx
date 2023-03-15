import React from 'react';
import { render, fireEvent } from 'setup/testing-library';
import Button from '.';

describe('Button', () => {
  const label = 'test';

  test('display label', () => {
    const { getByText } = render(
      <Button {...{ label }} onPress={() => undefined} />
    );
    const element = getByText(label);

    expect(element).toBeTruthy();
  });

  test('onPress click', () => {
    const handlePress = jest.fn();
    const { getByRole } = render(
      <Button {...{ label }} onPress={handlePress} />
    );
    fireEvent.press(getByRole('button'));

    expect(handlePress).toHaveBeenCalledTimes(1);
  });

  test('renders disabled state', () => {
    const { getByA11yState } = render(
      <Button {...{ label }} onPress={() => undefined} isDisabled />
    );
    const element = getByA11yState({ disabled: true });

    expect(element).toBeTruthy();
  });
});

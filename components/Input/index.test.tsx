import React from 'react';
import { render, fireEvent } from 'setup/testing-library';
import Input from '.';

describe('Input', () => {
  const placeholder = 'test';
  test('input renders', () => {
    const { getByPlaceholderText } = render(
      <Input label='' {...{ placeholder }} />
    );

    expect(getByPlaceholderText(placeholder)).toBeTruthy();
  });

  test('input changes text', () => {
    const onEventMock = jest.fn();
    const { getByPlaceholderText } = render(
      <Input label='' onChangeText={onEventMock} {...{ placeholder }} />
    );

    fireEvent.changeText(getByPlaceholderText(placeholder), 'minifig');
    expect(onEventMock).toHaveBeenCalledWith('minifig');
  });

  test('input display label', () => {
    const label = 'test';
    const { getByText } = render(<Input {...{ label }} />);

    const element = getByText(label);

    expect(element).toBeTruthy();
  });

  test('input display error', () => {
    const error = 'test';
    const { getByText } = render(<Input label='' {...{ error }} />);

    const element = getByText(error);

    expect(element).toBeTruthy();
  });
});

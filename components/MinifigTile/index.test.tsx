import React from 'react';
import { render, fireEvent } from 'setup/testing-library';
import MinifigTile from '.';

describe('MinifigTile', () => {
  const baseProps = {
    title: 'title',
    onPress: () => undefined,
    onDetailsPress: () => undefined,
    isActive: false,
  };

  test('display title', () => {
    const { getByText } = render(<MinifigTile {...baseProps} />);
    const element = getByText(baseProps.title);

    expect(element).toBeTruthy();
  });

  test('onPress click', () => {
    const handlePress = jest.fn();
    const { getByTestId, getByText } = render(
      <MinifigTile
        {...baseProps}
        onPress={handlePress}
        onDetailsPress={handlePress}
      />
    );
    const tile = getByTestId('minifig');
    const showDetailsButton = getByText('Show details');

    fireEvent.press(tile);
    fireEvent.press(showDetailsButton);

    expect(handlePress).toHaveBeenCalledTimes(2);
  });

  test('display image', () => {
    const { getByTestId } = render(
      <MinifigTile
        {...baseProps}
        imageUrl='https://cdn.rebrickable.com/media/sets/fig-000457/60621.jpg'
      />
    );
    const element = getByTestId('minifigImage');

    expect(element).toBeTruthy();
  });
});

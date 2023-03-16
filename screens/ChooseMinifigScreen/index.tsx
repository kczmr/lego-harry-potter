import React, { useRef, useState } from 'react';
import { Dimensions, FlatList, ViewToken } from 'react-native';
import { useTheme } from 'styled-components/native';
import Box from 'components/Box';
import MinifigTile from 'components/MinifigTile';
import Button from 'components/Button';
import { useChooseMinifigScreen } from './hooks';
import { StyledChooseMinifigScreenTitle } from './styles';
import { MinifigsItem } from './types';

const SCREEN_WIDTH = Dimensions.get('window').width;

const ChooseMinifigScreen: React.FC = () => {
  const { items } = useChooseMinifigScreen();
  const { space } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const flatlistRef = useRef<FlatList<MinifigsItem>>(null);
  const viewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length) setActiveIndex(viewableItems[0].index || 0);
    }
  ).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollToIndex = (index: number) => {
    flatlistRef.current?.scrollToIndex({ index });
  };

  return (
    <Box flex={1} pt='l' alignItems='center'>
      <StyledChooseMinifigScreenTitle>
        CHOOSE YOUR MINIFIG
      </StyledChooseMinifigScreenTitle>
      <FlatList
        ref={flatlistRef}
        data={items}
        keyExtractor={({ key }) => key}
        renderItem={({ item, index }) => {
          return (
            <MinifigTile
              {...item}
              onPress={() => scrollToIndex(index)}
              onDetailsPress={() => undefined}
              isActive={activeIndex === index}
            />
          );
        }}
        contentContainerStyle={{ marginTop: 100 }}
        ListHeaderComponent={() => <Box ml='m' />}
        ItemSeparatorComponent={() => <Box ml='m' />}
        ListFooterComponent={() => <Box ml='m' />}
        showsHorizontalScrollIndicator={false}
        horizontal
        // this should be recalculated
        snapToOffsets={[...Array(items.length)].map(
          (_, i) => i * (SCREEN_WIDTH * 0.8 - 40) + (i - 1) * 40
        )}
        snapToAlignment='center'
        decelerationRate='fast'
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        directionalLockEnabled
      />
      <Box flex={1}>
        <Button label='CHOOSE FIGURE' onPress={() => undefined} />
      </Box>
    </Box>
  );
};

export default ChooseMinifigScreen;

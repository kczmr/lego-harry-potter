import React, { useRef, useState } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  ViewToken,
} from 'react-native';
import { useTheme } from 'styled-components/native';
import Box from 'components/Box';
import MinifigTile from 'components/MinifigTile';
import Button from 'components/Button';
import { useChooseMinifigScreen } from './hooks';
import { StyledChooseMinifigScreenTitle } from './styles';
import { ChooseMinifigScreenProps, MinifigsItem } from './types';

const SCREEN_WIDTH = Dimensions.get('window').width;

const ChooseMinifigScreen: React.FC<ChooseMinifigScreenProps> = ({
  navigation,
}) => {
  const {
    items,
    minifigsQuery: { isFetching },
  } = useChooseMinifigScreen();
  const { space, colors } = useTheme();
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
        renderItem={({ item: { set_url, ...restItem }, index }) => {
          return (
            <MinifigTile
              {...restItem}
              onPress={() => scrollToIndex(index)}
              onDetailsPress={() =>
                navigation?.navigate('WebViewScreen', { url: set_url })
              }
              isActive={activeIndex === index}
            />
          );
        }}
        contentContainerStyle={{ marginTop: space.l * 2 }}
        ListHeaderComponent={() => <Box ml='m' />}
        ItemSeparatorComponent={() => <Box ml='m' />}
        ListFooterComponent={() => <Box mr='m' />}
        ListEmptyComponent={() =>
          isFetching ? (
            <ActivityIndicator size='large' color={colors.orange} />
          ) : null
        }
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
      {items.length ? (
        <Box flex={1}>
          <Button label='CHOOSE FIGURE' onPress={() => undefined} />
        </Box>
      ) : null}
    </Box>
  );
};

export default ChooseMinifigScreen;

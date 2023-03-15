import colors from './config/colors';
import space from './config/space';
import sizes from './config/sizes';

const theme = {
  colors,
  space,
  sizes,
};

export default theme;

export type Theme = typeof theme;

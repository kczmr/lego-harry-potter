import styled from 'styled-components/native';
import { flexbox, space, layout } from 'styled-system';
import { BoxProps } from './types';

const Box = styled.View<BoxProps>`
  ${space};
  ${flexbox};
  ${layout};
`;

export default Box;

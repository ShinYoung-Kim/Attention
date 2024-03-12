import {ColorType} from '@constant/color';
import * as Icons from '@asset/icon';
import {SvgProps} from 'react-native-svg';

type IconNameType = keyof typeof Icons;

export type IconType = SvgProps & {
  name: IconNameType;
  fill: ColorType;
  size: number;
};

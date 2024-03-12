import {IconType} from '@type/icon';
import * as Icons from '@asset/icon';
import {COLOR} from '@constant/color';

function Icon({name, fill = 'WFWHITE', size = 24, ...props}: IconType) {
  const CustomIcon = Icons[name];
  return (
    <CustomIcon fill={COLOR[fill]} width={size} height={size} {...props} />
  );
}

export default Icon;

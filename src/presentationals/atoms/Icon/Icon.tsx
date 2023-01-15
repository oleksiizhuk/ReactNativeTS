import React, {FC} from 'react';
import {icons} from '../../../assets';

interface IconProps {
  iconName: string;
}
export const Icon: FC<IconProps> = ({iconName}) => {
  // @ts-ignore
  const IconComponent = icons[iconName];
  return <IconComponent />;
};

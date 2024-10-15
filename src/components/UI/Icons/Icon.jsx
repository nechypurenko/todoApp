import React from 'react';
import * as styled from './Icon.styled';
import {EyeCloseIcon} from './icons/eyeClose';
import {EyeIcon} from './icons/eye';
import {CloseIcon} from './icons/close';
import {PlayIcon} from './icons/play';
import {ArrowRightIcon} from './icons/chevronRight';
import {ArrowLeftIcon} from './icons/chevronLeft';

const iconList = {
  eyeClose: EyeCloseIcon,
  eye: EyeIcon,
  close: CloseIcon,
  play:PlayIcon,
  arrowRight: ArrowRightIcon,
  arrowLeft: ArrowLeftIcon,
};

export const Icon = ({ name, color = 'black', size = 24 }) => {
  const IconComponent = iconList[name];

  return (
    <styled.StyledIconWrapper size={size}>
      {IconComponent ? <IconComponent color={color} /> : <span>Icon not found</span>}
    </styled.StyledIconWrapper>
  );
};
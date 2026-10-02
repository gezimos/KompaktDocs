import React, {type ReactNode} from 'react';
import ColorModeToggle from '@theme-original/ColorModeToggle';
import type ColorModeToggleType from '@theme/ColorModeToggle';
import type {WrapperProps} from '@docusaurus/types';
import {useColorMode} from '@docusaurus/theme-common';

type Props = WrapperProps<typeof ColorModeToggleType>;

export default function ColorModeToggleWrapper(props: Props): ReactNode {
  const {colorMode} = useColorMode();
  return (
    <ColorModeToggle
      {...props}
      value={colorMode}
      respectPrefersColorScheme={false}
    />
  );
}

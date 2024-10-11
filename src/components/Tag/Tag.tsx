import React from 'react';
import { scales, TagProps } from './types';
import { StyledTag } from './StyledTag';

const Tag: React.FC<TagProps> = ({
  startIcon,
  endIcon,
  children,
  ...props
}) => (
  <StyledTag {...props}>
    {React.isValidElement(startIcon) &&
      React.cloneElement(startIcon, {
        mr: '0.5em',
      } as any)}
    {children}
    {React.isValidElement(endIcon) &&
      React.cloneElement(endIcon, {
        ml: '0.5em',
      } as any)}
  </StyledTag>
);

Tag.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  variant: 'primary',
  // eslint-disable-next-line react/default-props-match-prop-types
  scale: scales.MD,
  // eslint-disable-next-line react/default-props-match-prop-types
  outline: false,
};

export default Tag;

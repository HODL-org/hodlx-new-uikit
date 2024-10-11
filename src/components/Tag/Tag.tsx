import React from 'react';
import { scales, TagProps } from './types';
import { StyledTag } from './StyledTag';

const Tag: React.FC<TagProps> = ({
  variant = 'primary',
  scale = scales.MD,
  outline = false,
  startIcon,
  endIcon,
  children,
  ...props
}) => (
  <StyledTag {...props}>
    {React.isValidElement(startIcon) &&
      React.cloneElement(startIcon as any, {
        mr: '0.5em',
      })}
    {children}
    {React.isValidElement(endIcon) &&
      React.cloneElement(endIcon as any, {
        ml: '0.5em',
      })}
  </StyledTag>
);

// Tag.defaultProps = {
//   variant: 'primary',
//   scale: scales.MD,
//   outline: false,
// };

export default Tag;

import { defineStyleConfig } from '@chakra-ui/react';
import { Text } from './Text';
import { ButtonVariants } from 'styles/types/button.types';

export const buttonVariants = {
  "risen": {
    "position": "relative",
    "top": "0px",
    "borderTop": "4px",
    "borderRight": "4px",
    "borderBottom": "8px",
    "borderLeft": "4px",
    "transition": "top 0.3s, border-bottom 0.3s, background-color 0.3s",
    "_active": {
      "borderBottom": "4px",
      "top": "4px"
    }
  },
}


export const Button = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    ...Text.baseStyle,
    ...Text.variants?.['Button/Small'],

    borderRadius: '10px',
    borderColor: 'black',
    borderStyle: 'solid',

    backgroundColor: 'white',
    transition: "background-color 0.3s",
    _hover: {
      backgroundColor: 'secondary',
    },
  },
  variants: buttonVariants,

  defaultProps: {
    variant: ButtonVariants.risen,
  },
});

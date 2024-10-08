import { defineStyleConfig } from '@chakra-ui/react';
import { Text } from './Text';

const hoverColorTransition = 'background-color 0.3s';

export const Button = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    ...Text.baseStyle,
    ...Text.variants?.button,

    borderRadius: '10px',
    borderColor: 'primary',
    borderStyle: 'solid',

    backgroundColor: 'white',
    transition: hoverColorTransition,
    _hover: {
      backgroundColor: 'secondary', //TODO
    },
  },
  variants: {
    risen: {
      position: 'relative',
      top: '0px',

      borderTop: '4px',
      borderRight: '4px',
      borderBottom: '8px',
      borderLeft: '4px',

      transition: 'top 0.3s, border-bottom 0.3s, ' + hoverColorTransition,

      _active: {
        borderBottom: '4px',
        top: '4px',
      },
    },
    risen_secondary: {
      backgroundColor: 'secondary',
      _hover: {
        backgroundColor: 'error', //TODO
      },
      position: 'relative',
      top: '0px',

      borderTop: '4px',
      borderRight: '4px',
      borderBottom: '8px',
      borderLeft: '4px',

      transition: 'top 0.3s, border-bottom 0.3s, ' + hoverColorTransition,

      _active: {
        borderBottom: '4px',
        top: '4px',
      },
    },
    risen_tertiary: {
      backgroundColor: 'tertiary',
      _hover: {
        backgroundColor: 'error', //TODO
      },
      position: 'relative',
      top: '0px',

      borderTop: '4px',
      borderRight: '4px',
      borderBottom: '8px',
      borderLeft: '4px',

      transition: 'top 0.3s, border-bottom 0.3s, ' + hoverColorTransition,

      _active: {
        borderBottom: '4px',
        top: '4px',
      },
    },
    risen_error: {
      backgroundColor: 'error',
      _hover: {
        backgroundColor: 'accent',
      },
      position: 'relative',
      top: '0px',

      borderTop: '4px',
      borderRight: '4px',
      borderBottom: '8px',
      borderLeft: '4px',

      transition: 'top 0.3s, border-bottom 0.3s, ' + hoverColorTransition,

      _active: {
        borderBottom: '4px',
        top: '4px',
      },
    },
  },

  defaultProps: {
    variant: 'risen',
  },
});

import { defineStyleConfig } from '@chakra-ui/react';

export const Text = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    fontFamily: 'DM Sans, Comic Sans, Arial',
    color: 'black',
  },

  variants: {
    page_title: {
      fontWeight: 'bold',
      fontSize: '2.5rem',
      letterSpacing: -0.01,
      lineHeight: 1,
    },
    section_title: {
      fontWeight: 'bold',
      fontSize: '2rem',
      letterSpacing: -0.01,
      lineHeight: 1,
    },
    content: {
      fontWeight: 'regular',
      fontSize: '1rem',
      letterSpacing: 0.01,
      lineHeight: 1.4,
    },
    subtitle: {
      fontWeight: 'bold',
      fontSize: '1.125rem',
      letterSpacing: 0,
      lineHeight: 1,
    },


    button: {
      fontWeight: 'bold',
      fontSize: '1rem',
      letterSpacing: 0.01,
      lineHeight: 1,
      textTransform: 'uppercase',
    },

    header_title: {
      fontWeight: 'bolder',
      fontSize: '3rem',
      letterSpacing: -0.01,
      lineHeight: 1,
    },
    header_entry: {
      fontWeight: 'bold',
      fontSize: '2rem',
      letterSpacing: -0.01,
      lineHeight: 1,
    },
    "header_entry.selected": {
      fontWeight: 'normal',
      fontSize: '1.750rem',
      letterSpacing: -0.01,
      lineHeight: 1,
    },

    menu_entry: {
      fontWeight: 'bold',
      fontSize: '1.5rem',
      letterSpacing: -0.01,
      lineHeight: 1,
    },
  },

  defaultProps: {
    variant: 'content',
  },
});

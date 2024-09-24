import { extendTheme } from '@chakra-ui/react';
import { Button } from './Button';
import { Text } from './Text';
import { Input } from './Input';
import { Select } from './Select';

/*
#272727 Raisin black X
 #8B686B Rose taupe X
#EFA9AE Cherry blossom pink X
 #AD83AA African Violet X
#6B5CA5 Ultra violet X
 #5FAEAF Verdigris X
#52FFB8 Aquamarine X
 #FED766 Mustard X
#934B00 Brown X

*/

export const theme = extendTheme({
  colors: {
    white: '#FFFFFF',
    black: '272727', //Raisin black
    primary: '#6B5CA5', //Ultra violet
    "primary.dark": '#AD83AA', //African Violet
    secondary: '#EFA9AE', //Cherry blossom pink
    "secondary.dark": '#8B686B', //Rose taupe
    tertiary: '#52FFB8', //Aquamarine
    "tertiary.dark": '#5FAEAF', //Verdigris
    accent: '#FED766', //Mustard
    error: '#934B00', //Brown
  },
  components: {
    Button,
    Text,
    Select,
    Input,
  },
});

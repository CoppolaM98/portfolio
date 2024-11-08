import { defineStyleConfig } from '@chakra-ui/react';
import { TextVariants } from 'styles/types/text.types';
import { AppFontFamily, AppFontSize, AppLineHeight } from 'styles/types/typography.types';

export const textVariants = {
  "Display/Large": {
    "fontFamily": AppFontFamily.title,
    "fontSize": AppFontSize['4xl'],
    "fontStyle": "normal",
    "fontWeight": 700,
    "lineHeight": AppLineHeight["3xl"]
  },
  "Display/Medium": {
    "fontFamily": AppFontFamily.title,
    "fontSize": AppFontSize['3xl'],
    "fontStyle": "normal",
    "fontWeight": 700,
    "lineHeight": AppLineHeight["2xl"]
  },
  "Display/Small": {
    "fontFamily": AppFontFamily.title,
    "fontSize": AppFontSize['2xl'],
    "fontStyle": "normal",
    "fontWeight": 700,
    "lineHeight": AppLineHeight["xl"]
  },
  "Title/Large": {
    "fontFamily": AppFontFamily.title,
    "fontSize": AppFontSize['xl'],
    "fontStyle": "normal",
    "fontWeight": 700,
    "lineHeight": AppLineHeight["l"]
  },
  "Title/Medium": {
    "fontFamily": AppFontFamily.title,
    "fontSize": AppFontSize['l'],
    "fontStyle": "normal",
    "fontWeight": 700,
    "lineHeight": AppLineHeight["s"]
  },
  "Title/Small": {
    "fontFamily": AppFontFamily.title,
    "fontSize": AppFontSize['m'],
    "fontStyle": "normal",
    "fontWeight": 700,
    "lineHeight": AppLineHeight["s"]
  },
  "Body/Large/Bold": {
    "fontFamily": AppFontFamily.body,
    "fontSize": AppFontSize['m'],
    "fontStyle": "normal",
    "fontWeight": 700,
    "lineHeight": AppLineHeight["m"]
  },
  "Body/Large/Regular": {
    "fontFamily": AppFontFamily.body,
    "fontSize": AppFontSize['s'],
    "fontStyle": "normal",
    "fontWeight": 400,
    "lineHeight": AppLineHeight["m"]
  },
  "Body/Medium/Bold": {
    "fontFamily": AppFontFamily.body,
    "fontSize": AppFontSize['s'],
    "fontStyle": "normal",
    "fontWeight": 700,
    "lineHeight": AppLineHeight["m"]
  },
  "Body/Medium/Regular": {
    "fontFamily": AppFontFamily.body,
    "fontSize": AppFontSize['s'],
    "fontStyle": "normal",
    "fontWeight": 400,
    "lineHeight": AppLineHeight["m"]
  },
  "Body/Small/Bold": {
    "fontFamily": "DM Sans",
    "fontSize": "16px",
    "fontStyle": "normal",
    "fontWeight": 700,
    "lineHeight": "18px"
  },
  "Body/Small/Regular": {
    "fontFamily": "DM Sans",
    "fontSize": "16px",
    "fontStyle": "normal",
    "fontWeight": 400,
    "lineHeight": "18px"
  },
  "Body/Smallest/Medium": {
    "fontFamily": AppFontFamily.body,
    "fontSize": AppFontSize['2xs'],
    "fontStyle": "normal",
    "fontWeight": 500,
    "lineHeight": AppLineHeight["2xs"]
  },
  "Body/Smallest/Regular": {
    "fontFamily": AppFontFamily.body,
    "fontSize": AppFontSize['2xs'],
    "fontStyle": "normal",
    "fontWeight": 400,
    "lineHeight": AppLineHeight["2xs"]
  },
  "Button/Big": {
    "fontFamily": AppFontFamily.body,
    "fontSize": AppFontSize['s'],
    "fontStyle": "normal",
    "fontWeight": 700,
    "lineHeight": AppLineHeight["s"],
    "textTransform": "uppercase"
  },
  "Button/Small": {
    "fontFamily": AppFontFamily.body,
    "fontSize": AppFontSize['2xs'],
    "fontStyle": "normal",
    "fontWeight": 700,
    "lineHeight": AppLineHeight["2xs"],
    "textTransform": "uppercase"
  }
}

export const Text = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    fontFamily: 'DM Sans, Comic Sans, Arial',
    color: 'black',
  },
  variants: textVariants,
  defaultProps: {
    variant: TextVariants['Body/Medium/Regular'],
  },
});

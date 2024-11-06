
import { ModeTokensEnum } from 'utils/types/ModeTokensEnum';
import typography from '../figma_json/typography.json';

// this file is to obtain enum-like objects for the properties

type Typography = typeof typography

export const AppFontFamily: ModeTokensEnum<Typography["fontFamily"]> = {
  title: 'title',
  body: 'body'
}

export const AppFontSize:ModeTokensEnum<Typography["fontSize"]> = {
  '2xs': '2xs',
  xs: 'xs',
  s: 's',
  m: 'm',
  l: 'l',
  xl: 'xl',
  '2xl': '2xl',
  '3xl': '3xl',
  '4xl': '4xl'
}

export const AppFontWeight:ModeTokensEnum<Typography["fontWeight"]> = {
  Bold: 'Bold',
  Medium: 'Medium',
  Regular: 'Regular'
}

export const AppLineHeight: ModeTokensEnum<Typography["lineHeight"]> = {
  '2xs': '2xs',
  xs: 'xs',
  s: 's',
  m: 'm',
  l: 'l',
  xl: 'xl',
  '2xl': '2xl',
  '3xl': '3xl'
}



// export const AppBreakpoints: {[key in keyof typeof typography.breakpoints]: key} = {}
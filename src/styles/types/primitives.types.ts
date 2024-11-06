
import primitives from '../figma_json/primitives.json';

// this file is to obtain enum-like objects for the properties

type Primitives = typeof primitives

export const AppColors: { [key in keyof Primitives["color"]]: key } = {
  'gray-50': 'gray-50',
  'gray-200': 'gray-200',
  'gray-400': 'gray-400',
  'gray-600': 'gray-600',
  'gray-800': 'gray-800',
  'gray-900': 'gray-900',
  'gray-medical-white': 'gray-medical-white',
  'brand-digital-blue': 'brand-digital-blue',
  'brand-medical-green': 'brand-medical-green',
  'brand-medical-secondary': 'brand-medical-secondary',
  'brand-ecg-yellow': 'brand-ecg-yellow',
  'brand-donation-red': 'brand-donation-red'
}

export const AppRadii: { [key in keyof Primitives["radius"]]: key } = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
  '2xl': '2xl',
  '3xl': '3xl'
}

export const AppSpacings: { [key in keyof Primitives["spacing"]]: key } = {
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
  10: '10',
  11: '11',
  12: '12',
  13: '13',
  14: '14',
  15: '15',
  ',5': ',5'
}


// export const AppBreakpoints: {[key in keyof typeof primitives.breakpoints]: key} = {}
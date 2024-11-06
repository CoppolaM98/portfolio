
import { ModeTokensEnum } from 'utils/types/ModeTokensEnum';
import components from '../figma_json/components.json';

// this file is to obtain enum-like objects for the properties

type Components = typeof components

export const AppComponents: ModeTokensEnum<Components> = {
  'Tab.spacing': 'Tab.spacing'
}

// export const AppBreakpoints: {[key in keyof typeof primitives.breakpoints]: key} = {}
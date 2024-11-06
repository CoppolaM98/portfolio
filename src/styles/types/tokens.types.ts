
import { ModeTokensEnum } from 'utils/types/ModeTokensEnum';
import tokens from '../figma_json/tokens.json';

// this file is to obtain enum-like objects for the properties

type Tokens = typeof tokens

export const AppSemanticTokens: ModeTokensEnum<Tokens> = {
  'text.text-primary': 'text.text-primary',
  'text.text-secondary': 'text.text-secondary',
  'text.text-tertiary': 'text.text-tertiary',
  'text.text-brand': 'text.text-brand',
  'text.text-buttons': 'text.text-buttons',
  'text.text-invert': 'text.text-invert',
  'text.text-error': 'text.text-error',
  'surface.surface-primary': 'surface.surface-primary',
  'surface.surface-secondary': 'surface.surface-secondary',
  'surface.surface-light': 'surface.surface-light',
  'surface.surface-tertiary': 'surface.surface-tertiary',
  'surface.surface-invert': 'surface.surface-invert',
  'surface.surface-brand-primary': 'surface.surface-brand-primary',
  'surface.surface-brand-secondary': 'surface.surface-brand-secondary',
  'surface.surface-brand-tertiary': 'surface.surface-brand-tertiary',
  'surface.surface-brand-danger': 'surface.surface-brand-danger',
  'border.border-primary': 'border.border-primary',
  'border.border-secondary': 'border.border-secondary',
  'border.border-hover': 'border.border-hover',
  'border.border-error': 'border.border-error',
  'spacing.spacing-none': 'spacing.spacing-none',
  'spacing.spacing-xs': 'spacing.spacing-xs',
  'spacing.spacing-s': 'spacing.spacing-s',
  'spacing.spacing-m': 'spacing.spacing-m',
  'spacing.spacing-l': 'spacing.spacing-l',
  'spacing.spacing-xl': 'spacing.spacing-xl',
  'spacing.spacing-2xl': 'spacing.spacing-2xl',
  'spacing.spacing-3xl': 'spacing.spacing-3xl',
  'radius.radius-xs': 'radius.radius-xs',
  'radius.radius-small': 'radius.radius-small',
  'radius.radius-rounded': 'radius.radius-rounded',
  'radius.radius-full': 'radius.radius-full',
  'padding-none': 'padding-none',
  'padding-xs': 'padding-xs',
  'padding-s': 'padding-s',
  'padding-m': 'padding-m',
  'padding-l': 'padding-l',
  'padding-xl': 'padding-xl'
}

// export const AppBreakpoints: {[key in keyof typeof primitives.breakpoints]: key} = {}
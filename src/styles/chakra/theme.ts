import { extendTheme, StyleFunctionProps } from '@chakra-ui/react';
import { AppComponents } from 'styles/types/components.types';
import { AppSemanticTokens } from 'styles/types/tokens.types';
import { AppFontFamily, AppFontSize, AppFontWeight, AppLineHeight } from 'styles/types/typography.types';
import { StringEnum } from 'utils/types/StringEnum';
import components from '../figma_json/components.json';
import primitives from '../figma_json/primitives.json';
import tokens from '../figma_json/tokens.json';
import typography from '../figma_json/typography.json';
import { Button } from './Button';
import { Input } from './Input';
import { Select } from './Select';
import { Text } from './Text';

type PrefixType = "fontsize" | "fontweight" | "lineheight" | "fontfamily" | "component" | "token"
const prefixes: StringEnum<PrefixType> = {
  fontsize: 'fontsize',
  fontweight: 'fontweight',
  lineheight: 'lineheight',
  fontfamily: 'fontfamily',
  component: 'component',
  token: 'token'
}

const formatFigmaTokenKey = (prefix: PrefixType, key: string) => `--${prefix}-${key}`.replace(/([A-Z])/g, '-$1').toLowerCase()
const mapObjToObj = (obj: any, cb: (key: string, val: any) => { key: string, val: any }) => obj && Object.keys(obj).reduce(
  (a, key) => {
    const entry = cb(key, obj[key]);
    a[entry.key] = entry.val;
    return a
  }, {} as any)
const formatAsCssVars = (prefix: PrefixType, obj: any) => mapObjToObj(obj, (key, val) => ({ key: formatFigmaTokenKey(prefix, key), val })) ?? {}


export const theme = extendTheme({
  colors: primitives.color,
  radii: primitives.radius,
  space: mapObjToObj(primitives.spacing, (key, val) => ({key, val: val + "px"})),
  semanticTokens: {
    lineHeights: {
      ...mapObjToObj(AppLineHeight, (key) => ({ key, val: `var(${formatFigmaTokenKey(prefixes.lineheight, key)})` })),
      m: null // TODO IMPORTANT: FOR SOME REASON, HAVING A lineHeights TOKEN KEY "m" BREAKS THE WHOLE THEME. LINEHEIGHTS m ARE OVERWRITTEN
    },
    fontWeights: {
      ...mapObjToObj(AppFontWeight, (key) => ({ key, val: `var(${formatFigmaTokenKey(prefixes.fontweight, key)})` })),
    },
    fonts: {
      ...mapObjToObj(AppFontFamily, (key) => ({ key, val: `var(${formatFigmaTokenKey(prefixes.fontfamily, key)})` })),
    },
    fontSizes: {
      ...mapObjToObj(AppFontSize, (key) => ({ key, val: `var(${formatFigmaTokenKey(prefixes.fontsize, key)})` })),
    },
    ...mapObjToObj(AppSemanticTokens, (key) => ({ key, val: `var(${formatFigmaTokenKey(prefixes.token, key)})` })),
    ...mapObjToObj(AppComponents, (key) => ({ key, val: `var(${formatFigmaTokenKey(prefixes.component, key)})` })),
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      html: {
        [`@media screen and (max-width: ${props.theme.breakpoints.md})`]: {
          ...formatAsCssVars(prefixes.fontsize, typography.fontSize.Mobile),
          ...formatAsCssVars(prefixes.lineheight, typography.lineHeight.Mobile),
          ...formatAsCssVars(prefixes.fontweight, typography.fontWeight.Mobile),
          ...formatAsCssVars(prefixes.fontfamily, typography.fontFamily.Mobile),
          ...formatAsCssVars(prefixes.token, tokens.Mobile),
          ...formatAsCssVars(prefixes.component, components.Mobile),
        },
        [`@media screen and (min-width: ${props.theme.breakpoints.md})`]: {
          ...formatAsCssVars(prefixes.fontsize, typography.fontSize.Desktop),
          ...formatAsCssVars(prefixes.lineheight, typography.lineHeight.Desktop),
          ...formatAsCssVars(prefixes.fontweight, typography.fontWeight.Desktop),
          ...formatAsCssVars(prefixes.fontfamily, typography.fontFamily.Desktop),
          ...formatAsCssVars(prefixes.token, tokens.Desktop),
          ...formatAsCssVars(prefixes.component, components.Desktop),
        },
      }
    })
  },


  components: {
    Button,
    Text,
    Select,
    Input,
  },
});
import { config as configBase } from "@tamagui/config";
import { createTamagui, createTokens } from "tamagui";

const tokens = createTokens({
  color: {
    whiteA1: "hsla(0, 0%, 100%, 0)",
    whiteA2: "hsla(0, 0%, 100%, 0.013)",
    whiteA3: "hsla(0, 0%, 100%, 0.034)",
    whiteA4: "hsla(0, 0%, 100%, 0.056)",
    whiteA5: "hsla(0, 0%, 100%, 0.086)",
    whiteA6: "hsla(0, 0%, 100%, 0.124)",
    whiteA7: "hsla(0, 0%, 100%, 0.176)",
    whiteA8: "hsla(0, 0%, 100%, 0.249)",
    whiteA9: "hsla(0, 0%, 100%, 0.386)",
    whiteA10: "hsla(0, 0%, 100%, 0.446)",
    whiteA11: "hsla(0, 0%, 100%, 0.592)",
    whiteA12: "hsla(0, 0%, 100%, 0.923)",
    blackA1: "hsla(0, 0%, 0%, 0.012)",
    blackA2: "hsla(0, 0%, 0%, 0.027)",
    blackA3: "hsla(0, 0%, 0%, 0.047)",
    blackA4: "hsla(0, 0%, 0%, 0.071)",
    blackA5: "hsla(0, 0%, 0%, 0.090)",
    blackA6: "hsla(0, 0%, 0%, 0.114)",
    blackA7: "hsla(0, 0%, 0%, 0.141)",
    blackA8: "hsla(0, 0%, 0%, 0.220)",
    blackA9: "hsla(0, 0%, 0%, 0.439)",
    blackA10: "hsla(0, 0%, 0%, 0.478)",
    blackA11: "hsla(0, 0%, 0%, 0.565)",
    blackA12: "hsla(0, 0%, 0%, 0.910)",
  },
  // ... see configuration docs for required tokens
  space: {},
  size: {},
  radius: {},
  zIndex: {},
});

export const config = createTamagui({
  ...configBase,
  themes: {
    ...configBase.themes,
    dark: {
      ...configBase.themes.dark,
      ...tokens.color,
    },
    light: {
      ...configBase.themes.light,
      ...tokens.color,
    },
  },
});

export default config;

export type Conf = typeof config;

declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}

import {createTheme, Theme, ThemeOptions} from '@material-ui/core';
import {Palette, PaletteColor, TypeText} from '@material-ui/core/styles/createPalette';
import createSpacing from '@material-ui/core/styles/createSpacing';
import {TypographyStyleOptions, Variant} from '@material-ui/core/styles/createTypography';
// import @material-ui/lab/themeAugmentationだとnot foundエラーになるので下記のように記述している
import ThemeAugmentation from '@material-ui/lab/themeAugmentation';
import tinycolor from 'tinycolor2';

// ThemeAugmentation未使用だとimport文が消えてしまうので以下を記述
// ただしUnusedTypeも一度も参照しないのでeslintを無効にする
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type UnusedType = ThemeAugmentation.LabComponentNameToClassKey;

const primary = '#0a3cff';
const secondary = '#FF5C93';
const warning = '#ff9800';
const success = '#4caf50';
const error = '#f44336';
const info = '#2196f3';
const tanceNavy = '#0A1950';
const white = '#FFFFFF';
const black = '#000000';
const darkGray = '#4D4D4D';
const lightenRate = 7.5;
const darkenRate = 15;
const paleBlue = '#F0F9FF';

const TOOLBAR_HEIGHT = 80;

declare module '@material-ui/core/styles/createTheme' {
  interface Theme {
    customShadows: {
      widget: string;
      widgetDark: string;
      widgetWide: string;
    };
  }
  interface ThemeOptions {
    customShadows: {
      widget: string;
      widgetDark: string;
      widgetWide: string;
    };
  }
}

declare module '@material-ui/core/styles/createTheme' {
  interface TypeBackground {
    default: string;
    paper: string;
    light: string;
  }
}

declare module '@material-ui/core/styles/createPalette' {
  interface TypeBackground {
    default: string;
    paper: string;
    light: string;
  }
}

const sectionTypography: Partial<Record<Variant, TypographyStyleOptions>> = {
  h1: {
    color: primary,
    fontSize: '2.5rem',
    lineHeight: 1.5,
    fontWeight: 'bold',
  },
  h2: {
    color: primary,
    fontSize: '1.5625rem',
    lineHeight: 1.5,
    fontWeight: 'bold',
  },
  h3: {
    color: tanceNavy,
    fontSize: '1.125rem',
    lineHeight: 1.5,
    fontWeight: 'bold',
  },
  h4: undefined,
  h5: undefined,
  h6: undefined,
  // body1, body2, button, caption, overlineはMUIのデフォルトをそのまま使用
  subtitle1: {
    color: tanceNavy,
  },
  subtitle2: {
    color: tanceNavy,
    fontWeight: 'bold',
  },
} as const;

const FONT_FAMILY = '"Noto Sans JP", "Roboto", "Helvetica", "Arial", sans-serif';

export type SectionTypography = keyof typeof sectionTypography | 'inherit' | undefined;

/**
 * MaterialUIのテーマ定義
 */
const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: primary,
      light: tinycolor(primary).lighten(lightenRate).toHexString(),
      dark: tinycolor(primary).darken(darkenRate).toHexString(),
    },
    secondary: {
      main: secondary,
      light: tinycolor(secondary).lighten(lightenRate).toHexString(),
      dark: tinycolor(secondary).darken(darkenRate).toHexString(),
      contrastText: white,
    },
    warning: {
      main: warning,
      light: tinycolor(warning).lighten(lightenRate).toHexString(),
      dark: tinycolor(warning).darken(darkenRate).toHexString(),
    },
    success: {
      main: success,
      light: tinycolor(success).lighten(lightenRate).toHexString(),
      dark: tinycolor(success).darken(darkenRate).toHexString(),
    },
    info: {
      main: info,
      light: tinycolor(info).lighten(lightenRate).toHexString(),
      dark: tinycolor(info).darken(darkenRate).toHexString(),
    },
    error: {
      main: error,
      light: tinycolor(error).lighten(lightenRate).toHexString(),
      dark: tinycolor(error).darken(darkenRate).toHexString(),
    },
    text: {
      primary: black,
      secondary: tanceNavy,
      hint: '#B9B9B9',
    },
    background: {
      default: paleBlue,
      light: '#F3F5FF',
    },
  },
  customShadows: {
    widget: '0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A',
    widgetDark: '0px 3px 18px 0px #4558A3B3, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A',
    widgetWide: '0px 12px 33px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A',
  },
  spacing: createSpacing((v) => 8 * v),
  typography: {
    // フォントサイズに関する設定 ref https://v4.mui.com/customization/typography/#font-size
    htmlFontSize: 16, // ブラウザ設定のフォントサイズの基準値
    fontSize: 16, // デフォルトフォントサイズ
    fontFamily: FONT_FAMILY,
    ...sectionTypography,
  },
  mixins: {toolbar: {minHeight: TOOLBAR_HEIGHT}},
  overrides: {
    MuiButtonBase: {
      root: {
        // ButtonBaseは個別にフォント指定しなければスタイルが当たらない
        fontFamily: FONT_FAMILY,
      },
    },
    MuiButton: {
      containedPrimary: {
        fontWeight: 'bold',
      },
    },
    MuiStep: {
      root: {
        fontWeight: 'bold',
      },
    },
    // 参考：https://v4.mui.com/customization/globals/#global-css
    MuiCssBaseline: {
      '@global': {
        '.MuiTypography-h1.MuiTypography-gutterBottom': {
          marginBottom: 24,
        },
        '.MuiTypography-h2.MuiTypography-gutterBottom': {
          marginBottom: 32,
        },
        '.MuiTypography-h3.MuiTypography-gutterBottom': {
          marginBottom: 24,
        },

        '.MuiStepLabel-label.MuiStepLabel-alternativeLabel': {
          color: darkGray,
        },
        '.MuiStepLabel-label.MuiStepLabel-alternativeLabel.MuiStepLabel-active': {
          fontWeight: 'bold',
          color: primary,
        },
      },
    },
    MuiTab: {
      root: {
        // &$ruleNameで指定
        '&$selected': {
          fontWeight: 'bold',
        },
      },
      selected: {
        // NOP
      },
    },
    MuiDialogTitle: {
      root: {
        color: tanceNavy,
      },
    },
    MuiCard: {
      root: {
        borderRadius: 8,
      },
    },
    MuiTableRow: {
      root: {
        '&.MuiTableRow-hover:hover>td': {
          backgroundColor: paleBlue,
        },
      },
      hover: {
        backgroundColor: white,
      },
    },
    MuiTableCell: {
      head: {
        backgroundColor: tanceNavy,
        color: white,
        fontWeight: 'bold',
        lineHeight: 'inherit', // 通常の行の高さを同じに
      },
      stickyHeader: {
        backgroundColor: tanceNavy,
        color: white,
        fontWeight: 'bold',
      },
    },
    MuiTextField: {
      root: {
        backgroundColor: white,
      },
    },
    MuiAlert: {
      root: {
        backgroundColor: white,
      },
    },
    MuiSelect: {
      root: {
        backgroundColor: white,
      },
    },
  },
  props: {
    MuiAlert: {
      variant: 'outlined',
    },
  },
};

export const AppTheme = createTheme(themeOptions);

export function getColor(
  color: keyof Palette | undefined,
  theme: Theme,
  brigtness: keyof PaletteColor | keyof TypeText = 'main',
): string | undefined {
  if (!color) {
    return theme.palette.text.primary;
  }

  const c = theme.palette[color];
  if (typeof c === 'object' && 'primary' in c) {
    if (brigtness in c) {
      const key = brigtness as keyof TypeText;
      return c[key];
    }
  }
  if (typeof c === 'object' && 'main' in c && 'dark' in c) {
    const key = brigtness as keyof PaletteColor;
    return c[key];
  }
}

export function getFontWeight(style = ''): number {
  switch (style) {
    case 'light':
      return 300;
    case 'medium':
      return 500;
    case 'bold':
      return 600;
    default:
      return 400;
  }
}

export function getFontSize(size = '', variant: Variant = 'caption', theme: Theme): string {
  let multiplier;

  switch (size) {
    case 'sm':
      multiplier = 0.8;
      break;
    case 'md':
      multiplier = 1.2;
      break;
    case 'xl':
      multiplier = 2;
      break;
    case 'xxl':
      multiplier = 3;
      break;
    default:
      multiplier = 1;
      break;
  }

  const defaultSize: string =
    variant && theme.typography[variant]
      ? (theme.typography[variant].fontSize as string)
      : `${theme.typography.fontSize}px`;

  return `calc(${defaultSize} * ${multiplier})`;
}

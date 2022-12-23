import { Appearance } from 'react-native';

export interface DefaultTheme {
  dark: boolean;
  colors: {
    primary: string;
    secondary: string;
    third: string;
    fourth: string;
    notification: string;
    background: string;
    card: string;
    text: string;
    border: string;
    gray: string;
    success: string;
    error: string;
    warning: string;
  };
}

export const lightTheme: DefaultTheme = {
  dark: false,
  colors: {
    primary: '#3F3B6C',
    secondary: '#9F73AB',
    third: '#624F82',
    fourth: '#A3C7D6',
    notification: '#FFFFFF',
    background: '#FFFFFF',
    card: '#FFFFFF',
    text: '#000000',
    border: '#d3d3d3',
    gray: '#7d7d7d',
    success: '##52c41a',
    error: '#ff190c',
    warning: '#faad14',
  },
};

export const darkTheme: DefaultTheme = {
  dark: true,
  colors: {
    primary: '#6E85B2',
    secondary: '#3E2C41',
    third: '#553939',
    fourth: '#A77979',
    notification: '#261C2C',
    background: '#261C2C',
    card: '#5C527F',
    text: '#f8f8f8',
    border: '#d3d3d3',
    gray: '#d3d3d3',
    success: '#439946',
    error: '#bf2d25',
    warning: '#cfbe27',
  },
};

const getTheme = (): DefaultTheme => {
  const colorScheme = Appearance.getColorScheme();
  console.log('🚀 ~ file: index.ts:59 ~ getTheme ~ colorScheme', colorScheme);
  if (colorScheme === 'dark') {
    return darkTheme;
  }
  return lightTheme;
};

export const theme = getTheme();

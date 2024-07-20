const DefaultTheme = {
  schemes: {
    radius: '0.2rem',
    contrastParams: {
      light: {
        saturation: 70,
        luminance: 19,
      },
      dark: {
        saturation: 88,
        luminance: 77,
      },
    },
    common: {
      black: 'hsl(0, 100%, 0%)',
      white: 'hsl(0, 100%, 100%)',
    },
    light: {
      background: 'hsl(0, 0%, 100%)',
      foreground: 'hsl(240, 10%, 3.9%)',
      card: 'hsl(0, 0%, 100%)',
      cardForeground: 'hsl(240, 10%, 3.9%)',
      popover: 'hsl(0, 0%, 100%)',
      popoverForeground: 'hsl(240, 10%, 3.9%)',
      primary: 'hsl(240, 5.9%, 10%)',
      primaryForeground: 'hsl(0, 0%, 98%)',
      secondary: 'hsl(240, 4.8%, 95.9%)',
      secondaryForeground: 'hsl(240, 5.9%, 10%)',
      muted: 'hsl(240, 4.8%, 95.9%)',
      mutedForeground: 'hsl(240, 3.8%, 46.1%)',
      accent: 'hsl(240, 4.8%, 95.9%)',
      accentForeground: 'hsl(240, 5.9%, 10%)',
      destructive: 'hsl(0, 84.2%, 60.2%)',
      destructiveForeground: 'hsl(0, 0%, 98%)',
      border: 'hsl(240, 5.9%, 90%)',
      input: 'hsl(240, 5.9%, 90%)',
      ring: 'hsl(240, 5.9%, 10%)',
      warning: 'hsl(38, 92%, 50%)',
      warningForeground: 'hsl(48, 96%, 89%)',
      success: 'hsl(91, 60.4%, 81.2%)',
      successForeground: 'hsl(90, 61.1%, 14.1%)',
      info: 'hsl(214, 76.4%, 50.2%)',
      infoForeground: 'hsl(214.3, 77.8%, 92.9%)',
    },
    dark: {
      background: 'hsl(240, 10%, 3.9%)',
      foreground: 'hsl(0, 0%, 98%)',
      card: 'hsl(240, 10%, 3.9%)',
      cardForeground: 'hsl(0, 0%, 98%)',
      popover: 'hsl(240, 10%, 3.9%)',
      popoverForeground: 'hsl(0, 0%, 98%)',
      primary: 'hsl(0, 0%, 98%)',
      primaryForeground: 'hsl(240, 5.9%, 10%)',
      secondary: 'hsl(240, 3.7%, 15.9%)',
      secondaryForeground: 'hsl(0, 0%, 98%)',
      muted: 'hsl(240, 3.7%, 15.9%)',
      mutedForeground: 'hsl(240, 5%, 64.9%)',
      accent: 'hsl(240, 3.7%, 15.9%)',
      accentForeground: 'hsl(0, 0%, 98%)',
      destructive: 'hsl(0, 62.8%, 30.6%)',
      destructiveForeground: 'hsl(0, 0%, 98%)',
      border: 'hsl(240, 3.7%, 15.9%)',
      input: 'hsl(240, 3.7%, 15.9%)',
      ring: 'hsl(240, 4.9%, 83.9%)',
      warning: 'hsl(48, 96%, 89%)',
      warningForeground: 'hsl(38, 92%, 50%)',
      success: 'hsl(90, 61.1%, 14.1%)',
      successForeground: 'hsl(90, 60%, 90.2%)',
      info: 'hsl(214.3, 77.8%, 92.9%)',
      infoForeground: 'hsl(214.4, 75.8%, 19.4%)',
    },
  },

  typography: {
    global: {
      fontFamily: "'Times New Roman', serif",
      fontSize: 16,
      fontWeightRegular: 400,
    },
  },
  shadows: [
    'none',
    'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px',
    'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
  ],
};

export default DefaultTheme;

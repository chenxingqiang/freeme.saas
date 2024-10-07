import type { ITheme } from '@xterm/xterm';

const style = getComputedStyle(document.documentElement);
const cssVar = (token: string) => style.getPropertyValue(token) || undefined;

export function getTerminalTheme(overrides?: ITheme): ITheme {
  return {
    cursor: cssVar('--freeme-elements-terminal-cursorColor'),
    cursorAccent: cssVar('--freeme-elements-terminal-cursorColorAccent'),
    foreground: cssVar('--freeme-elements-terminal-textColor'),
    background: cssVar('--freeme-elements-terminal-backgroundColor'),
    selectionBackground: cssVar('--freeme-elements-terminal-selection-backgroundColor'),
    selectionForeground: cssVar('--freeme-elements-terminal-selection-textColor'),
    selectionInactiveBackground: cssVar('--freeme-elements-terminal-selection-backgroundColorInactive'),

    // ansi escape code colors
    black: cssVar('--freeme-elements-terminal-color-black'),
    red: cssVar('--freeme-elements-terminal-color-red'),
    green: cssVar('--freeme-elements-terminal-color-green'),
    yellow: cssVar('--freeme-elements-terminal-color-yellow'),
    blue: cssVar('--freeme-elements-terminal-color-blue'),
    magenta: cssVar('--freeme-elements-terminal-color-magenta'),
    cyan: cssVar('--freeme-elements-terminal-color-cyan'),
    white: cssVar('--freeme-elements-terminal-color-white'),
    brightBlack: cssVar('--freeme-elements-terminal-color-brightBlack'),
    brightRed: cssVar('--freeme-elements-terminal-color-brightRed'),
    brightGreen: cssVar('--freeme-elements-terminal-color-brightGreen'),
    brightYellow: cssVar('--freeme-elements-terminal-color-brightYellow'),
    brightBlue: cssVar('--freeme-elements-terminal-color-brightBlue'),
    brightMagenta: cssVar('--freeme-elements-terminal-color-brightMagenta'),
    brightCyan: cssVar('--freeme-elements-terminal-color-brightCyan'),
    brightWhite: cssVar('--freeme-elements-terminal-color-brightWhite'),

    ...overrides,
  };
}

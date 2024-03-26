export const COLOR = {
  WF900: '#1A202C',
  WF800: '#2D3648',
  WF700: '#4A5468',
  WF600: '#717D96',
  WF500: '#A0ABC0',
  WF400: '#CBD2E0',
  WF300: '#E2E7F0',
  WF200: '#EDF0F7',
  WF100: '#F7F9FC',
  WFWHITE: '#FFFFFF',
  MAIN01: '#FF6D2F',
};

export const FRAME_COLOR = {
  Orange: '#FF6D2F',
  White: '#FFFFFF',
  Black: '#000000',
  Gray: '#CBCBCB',
  Mint: '#A9F8FF',
  Yellow: '#FFF384',
  Pink: '#FF9ED0',
};

export type ColorType = keyof typeof COLOR;
export type FrameColorType = keyof typeof FRAME_COLOR;

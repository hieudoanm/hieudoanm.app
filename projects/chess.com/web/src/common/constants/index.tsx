import { Title } from '@prisma/client';

export const APP_NAME: string = 'Chess Insights';
export const APP_DESCRIPTION: string =
  'Free and Open-source Software (FOSS) for chess.com Insights';
export const YEAR: number = new Date().getFullYear();
// Titles
export const OPEN_TITLES: Title[] = ['GM', 'IM', 'FM', 'CM', 'NM'];
export const WOMAN_TITLES: Title[] = ['WGM', 'WIM', 'WFM', 'WCM', 'WNM'];
export const TITLES: Title[] = [...OPEN_TITLES, ...WOMAN_TITLES];
// Ratings
export const GAP: number = 100;
// Colors
export const TIME_COLORS: string[] = [
  '#E53E3E',
  '#DD6B20',
  '#D69E2E',
  '#38A169',
  '#319795',
  '#3182CE',
  '#00B5D8',
  '#805AD5',
  '#D53F8C',
];
export const TEAL_COLOR: string = '#008080';
export const TEAL_COLORS: string[] = [
  '#008080',
  '#007373',
  '#006666',
  '#005a5a',
  '#004d4d',
  '#004040',
  '#003333',
  '#002626',
  '#000d0d',
  '#000000',
];
export const GRAY_COLOR: string = '#808080';
export const GRAY_COLORS: string[] = [
  '#808080',
  '#737373',
  '#666666',
  '#5a5a5a',
  '#4d4d4d',
  '#404040',
  '#333333',
  '#262626',
  '#1a1a1a',
  '#0d0d0d',
  '#000000',
];
export const RED_COLOR: string = '#ff0000';
export const RED_COLORS: string[] = [
  '#ff0000',
  '#e60000',
  '#cc0000',
  '#b30000',
  '#990000',
  '#800000',
  '#660000',
  '#4c0000',
  '#330000',
  '#190000',
  '#000000',
];
export const COLORS_MAP: Record<string, string[]> = {
  teal: TEAL_COLORS,
  gray: GRAY_COLORS,
  red: RED_COLORS,
};
// Results
export const WIN_RESULTS: string[] = ['win'];
export const DRAW_RESULTS: string[] = [
  '50move',
  'agreed',
  'insufficient',
  'repetition',
  'stalemate',
  'timevsinsufficient',
];
export const LOSS_RESULTS: string[] = [
  'checkmated',
  'resigned',
  'timeout',
  'abandoned',
];

export const TITLED_ABBREVIATIONS: Record<Title, string> = {
  GM: 'Grand Master',
  IM: 'International Master',
  FM: 'FIDE Master',
  CM: 'Candidate Master',
  NM: 'National Master',
  WGM: 'Woman Grand Master',
  WIM: 'Woman International Master',
  WFM: 'Woman FIDE Master',
  WCM: 'Woman Candidate Master',
  WNM: 'Woman National Master',
  AGM: 'Arena Grand Master',
  AIM: 'Arena International Master',
  AFM: 'Arena FIDE Master',
  ACM: 'Arena Candidate Master',
};

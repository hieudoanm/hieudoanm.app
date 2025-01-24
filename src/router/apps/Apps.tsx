import { AppLayout } from '@web/layout/AppLayout';
import { logger } from '@web/log';
import Link from 'next/link';
import { FC, ReactNode, useState } from 'react';
import {
  FaAppStore,
  FaArrowTrendUp,
  FaAtom,
  FaBitcoin,
  FaBrain,
  FaBusinessTime,
  FaCalculator,
  FaCamera,
  FaChess,
  FaClock,
  FaCloudSunRain,
  FaCode,
  FaCoins,
  FaCrown,
  FaFlag,
  FaFlagUsa,
  FaFootball,
  FaFutbol,
  FaGamepad,
  FaHand,
  FaHeart,
  FaIdBadge,
  FaInstagram,
  FaLanguage,
  FaLightbulb,
  FaMagnifyingGlass,
  FaMap,
  FaMarkdown,
  FaMoneyBillTransfer,
  FaMusic,
  FaNewspaper,
  FaPalette,
  FaQrcode,
  FaRobot,
  FaRuler,
  FaRulerCombined,
  FaScaleBalanced,
  FaScrewdriverWrench,
  FaStar,
  FaTable,
  FaTelegram,
  FaWheelchair,
} from 'react-icons/fa6';

export enum Border {
  Dashed = 'border-dashed',
  Solid = 'border-solid',
}

export type Folder =
  | 'home'
  | 'calculator'
  | 'chess'
  | 'chess-players'
  | 'chess-tools'
  | 'clock'
  | 'colors'
  | 'countries'
  | 'converter'
  | 'csv'
  | 'crypto'
  | 'games'
  | 'languages'
  | 'news'
  | 'news-de'
  | 'news-kr'
  | 'news-uk'
  | 'news-us'
  | 'sciences'
  | 'tools'
  | 'trends'
  | 'vietnam'
  | 'usa';

export type App = {
  id: string;
  href: string;
  name: string;
  shortName: string;
  enabled: boolean;
  icon: ReactNode;
  borderStyle: Border;
  folder: Folder;
  isFolder: boolean;
};

const cryptoApps: App[] = [
  'coins',
  'dao',
  'football',
  'meme',
  'privacy',
  'stable',
].map((crypto: string) => ({
  id: `crypto-${crypto}`,
  href: `crypto/${crypto}`,
  name: crypto,
  shortName: crypto,
  enabled: true,
  icon: <FaBitcoin />,
  borderStyle: Border.Solid,
  folder: 'crypto',
  isFolder: false,
}));

const languagesApps: App[] = ['english', 'korean'].map((language: string) => ({
  id: `languages-${language}`,
  href: `languages/${language}`,
  name: language,
  shortName: language,
  enabled: true,
  icon: <FaLanguage />,
  borderStyle: Border.Solid,
  folder: 'languages',
  isFolder: false,
}));

const sciencesApps: App[] = ['chemistry', 'sociology'].map(
  (science: string) => ({
    id: `${science}`,
    href: `${science}`,
    name: science,
    shortName: science,
    enabled: true,
    icon: <FaBrain />,
    borderStyle: Border.Solid,
    folder: 'home',
    isFolder: false,
  })
);

export const allApps: App[] = [
  {
    id: 'all',
    href: 'all',
    name: 'All',
    shortName: 'All',
    enabled: true,
    icon: <FaAppStore />,
    borderStyle: Border.Solid,
    folder: 'home',
    isFolder: true,
  },
  {
    id: 'calculator',
    href: 'calculator',
    name: 'Calculator',
    shortName: 'Calculator',
    enabled: true,
    icon: <FaCalculator />,
    borderStyle: Border.Solid,
    folder: 'home',
    isFolder: true,
  },
  {
    id: 'calculator-math',
    href: 'calculator/math',
    name: 'Math',
    shortName: 'Math',
    enabled: true,
    icon: <FaCalculator />,
    borderStyle: Border.Solid,
    folder: 'calculator',
    isFolder: false,
  },
  {
    id: 'camera',
    href: 'camera',
    name: 'Camera',
    shortName: 'Camera',
    enabled: true,
    icon: <FaCamera />,
    borderStyle: Border.Solid,
    folder: 'home',
    isFolder: false,
  },
  {
    id: 'chess',
    href: 'chess',
    name: 'Chess',
    shortName: 'Chess',
    enabled: true,
    icon: <FaChess />,
    borderStyle: Border.Solid,
    folder: 'home',
    isFolder: true,
  },
  {
    id: 'chess-chess960',
    href: 'chess/chess960',
    name: 'Chess960',
    shortName: 'Chess960',
    enabled: true,
    icon: <FaChess />,
    borderStyle: Border.Solid,
    folder: 'chess',
    isFolder: false,
  },
  {
    id: 'chess-openings',
    href: 'chess/openings',
    name: 'Openings',
    shortName: 'Openings',
    enabled: true,
    icon: <FaChess />,
    borderStyle: Border.Solid,
    folder: 'chess',
    isFolder: false,
  },
  {
    id: 'chess-2800',
    href: 'chess/2800',
    name: '2800',
    shortName: '2800',
    enabled: true,
    icon: <FaMagnifyingGlass />,
    borderStyle: Border.Solid,
    folder: 'chess',
    isFolder: false,
  },
  {
    id: 'chess-titled',
    href: 'chess/titled',
    name: 'Titled',
    shortName: 'Titled',
    enabled: true,
    icon: <FaCrown />,
    borderStyle: Border.Solid,
    folder: 'chess',
    isFolder: false,
  },
  {
    id: 'chess-clock',
    href: 'chess/clock',
    name: 'Clock',
    shortName: 'Clock',
    enabled: true,
    icon: <FaClock />,
    borderStyle: Border.Solid,
    folder: 'chess',
    isFolder: false,
  },
  {
    id: 'chess-elo',
    href: 'chess/elo',
    name: 'Elo',
    shortName: 'Elo',
    enabled: true,
    icon: <FaCalculator />,
    borderStyle: Border.Solid,
    folder: 'chess',
    isFolder: false,
  },
  {
    id: 'clock',
    href: 'clock',
    name: 'Clock',
    shortName: 'Clock',
    enabled: true,
    icon: <FaClock />,
    borderStyle: Border.Solid,
    folder: 'home',
    isFolder: true,
  },
  {
    id: 'clock-pomodoro',
    href: 'clock/pomodoro',
    name: 'Pomodoro',
    shortName: 'Pomodoro',
    enabled: true,
    icon: <FaClock />,
    borderStyle: Border.Solid,
    folder: 'clock',
    isFolder: false,
  },
  {
    id: 'clock-world',
    href: 'clock/world',
    name: 'Timezones',
    shortName: 'Timezones',
    enabled: true,
    icon: <FaClock />,
    borderStyle: Border.Solid,
    folder: 'clock',
    isFolder: false,
  },
  {
    id: 'colors',
    href: 'colors',
    name: 'Colors',
    shortName: 'Colors',
    enabled: true,
    icon: <FaPalette />,
    borderStyle: Border.Solid,
    folder: 'home',
    isFolder: true,
  },
  {
    id: 'colors-converter',
    href: 'colors/converter',
    name: 'Colors Converter',
    shortName: 'Converter',
    enabled: true,
    icon: <FaPalette />,
    borderStyle: Border.Solid,
    folder: 'colors',
    isFolder: false,
  },
  {
    id: 'colors-picker',
    href: 'colors/picker',
    name: 'Colors Picker',
    shortName: 'Picker',
    enabled: true,
    icon: <FaPalette />,
    borderStyle: Border.Solid,
    folder: 'colors',
    isFolder: false,
  },
  {
    id: 'colors-randomiser',
    href: 'colors/randomiser',
    name: 'Colors Randomiser',
    shortName: 'Randomiser',
    enabled: true,
    icon: <FaPalette />,
    borderStyle: Border.Solid,
    folder: 'colors',
    isFolder: false,
  },
  {
    id: 'calculator-forex',
    href: 'calculator/forex',
    name: 'Forex',
    shortName: 'Forex',
    enabled: true,
    icon: <FaMoneyBillTransfer />,
    borderStyle: Border.Solid,
    folder: 'calculator',
    isFolder: false,
  },
  {
    id: 'calculator-length',
    href: 'calculator/length',
    name: 'Length',
    shortName: 'Length',
    enabled: true,
    icon: <FaRuler />,
    borderStyle: Border.Solid,
    folder: 'calculator',
    isFolder: false,
  },
  {
    id: 'calculator-screen',
    href: 'calculator/screen',
    name: 'Screen',
    shortName: 'Screen',
    enabled: true,
    icon: <FaRulerCombined />,
    borderStyle: Border.Solid,
    folder: 'calculator',
    isFolder: false,
  },
  {
    id: 'calculator-weight',
    href: 'calculator/weight',
    name: 'Weight',
    shortName: 'Weight',
    enabled: true,
    icon: <FaScaleBalanced />,
    borderStyle: Border.Solid,
    folder: 'calculator',
    isFolder: false,
  },
  {
    id: 'csv',
    href: 'csv',
    name: 'CSV',
    shortName: 'CSV',
    enabled: true,
    icon: <FaTable />,
    borderStyle: Border.Solid,
    folder: 'home',
    isFolder: true,
  },
  {
    id: 'csv-to-html',
    href: 'csv/html',
    name: 'CSV to HTML',
    shortName: 'CSV / HTML',
    enabled: true,
    icon: <FaTable />,
    borderStyle: Border.Solid,
    folder: 'csv',
    isFolder: false,
  },
  {
    id: 'csv-to-json',
    href: 'csv/json',
    name: 'CSV to JSON',
    shortName: 'CSV / JSON',
    enabled: true,
    icon: <FaTable />,
    borderStyle: Border.Solid,
    folder: 'csv',
    isFolder: false,
  },
  {
    id: 'csv-to-md',
    href: 'csv/md',
    name: 'CSV to MD',
    shortName: 'CSV / MD',
    enabled: true,
    icon: <FaTable />,
    borderStyle: Border.Solid,
    folder: 'csv',
    isFolder: false,
  },
  {
    id: 'csv-to-sql',
    href: 'csv/sql',
    name: 'CSV to SQL',
    shortName: 'CSV / SQL',
    enabled: true,
    icon: <FaTable />,
    borderStyle: Border.Solid,
    folder: 'csv',
    isFolder: false,
  },
  {
    id: 'countries',
    href: 'countries',
    name: 'Countries',
    shortName: 'Countries',
    enabled: true,
    icon: <FaMap />,
    borderStyle: Border.Solid,
    folder: 'home',
    isFolder: false,
  },
  {
    id: 'manifest',
    href: 'manifest',
    name: 'manifest.json',
    shortName: 'manifest.json',
    enabled: true,
    icon: <FaCode />,
    borderStyle: Border.Solid,
    folder: 'home',
    isFolder: false,
  },
  {
    id: 'markdown',
    href: 'markdown',
    name: 'Markdown',
    shortName: 'Markdown',
    enabled: true,
    icon: <FaMarkdown />,
    borderStyle: Border.Solid,
    folder: 'home',
    isFolder: false,
  },
  {
    id: 'games',
    href: 'games',
    name: 'Games',
    shortName: 'Games',
    enabled: true,
    icon: <FaGamepad />,
    borderStyle: Border.Solid,
    folder: 'home',
    isFolder: true,
  },
  {
    id: 'games-flipism',
    href: 'games/flipism',
    name: 'Flipism',
    shortName: 'Flipism',
    enabled: true,
    icon: <FaCoins />,
    borderStyle: Border.Solid,
    folder: 'games',
    isFolder: false,
  },
  {
    id: 'games-rock-paper-scissors',
    href: 'games/rock-paper-scissors',
    name: 'Rock Paper Scissors',
    shortName: 'Rock Paper Scissors',
    enabled: true,
    icon: <FaHand />,
    borderStyle: Border.Solid,
    folder: 'games',
    isFolder: false,
  },
  {
    id: 'games-wheel-of-fortune',
    href: 'games/wheel-of-fortune',
    name: 'Wheel of Fortune',
    shortName: 'Wheel of Fortune',
    enabled: true,
    icon: <FaWheelchair />,
    borderStyle: Border.Solid,
    folder: 'games',
    isFolder: false,
  },
  {
    id: 'qrcode',
    href: 'qrcode',
    name: 'QR Code',
    shortName: 'QR Code',
    enabled: true,
    icon: <FaQrcode />,
    borderStyle: Border.Solid,
    folder: 'home',
    isFolder: false,
  },
  {
    id: 'uuid',
    href: 'uuid',
    name: 'UUID',
    shortName: 'UUID',
    enabled: true,
    icon: <FaIdBadge />,
    borderStyle: Border.Solid,
    folder: 'home',
    isFolder: false,
  },
  {
    id: 'languages',
    href: 'languages',
    name: 'Languages',
    shortName: 'Languages',
    enabled: true,
    icon: <FaLanguage />,
    borderStyle: Border.Solid,
    folder: 'home',
    isFolder: true,
  },
  {
    id: 'languages-detection',
    href: 'languages/detection',
    name: 'Detection',
    shortName: 'Detection',
    enabled: true,
    icon: <FaLanguage />,
    borderStyle: Border.Solid,
    folder: 'languages',
    isFolder: false,
  },
  ...languagesApps,
  {
    id: 'photos',
    href: 'photos',
    name: 'Photos',
    shortName: 'Photos',
    enabled: true,
    icon: <FaInstagram />,
    borderStyle: Border.Solid,
    folder: 'home',
    isFolder: false,
  },
  {
    id: 'news',
    href: 'news',
    name: 'News',
    shortName: 'News',
    enabled: true,
    icon: <FaNewspaper />,
    borderStyle: Border.Solid,
    folder: 'home',
    isFolder: true,
  },
  ...sciencesApps,
  {
    id: 'settings',
    href: 'settings',
    name: 'Settings',
    shortName: 'Settings',
    enabled: true,
    icon: <FaScrewdriverWrench />,
    borderStyle: Border.Solid,
    folder: 'home',
    isFolder: false,
  },
  {
    id: 'status',
    href: 'status',
    name: 'Status',
    shortName: 'Status',
    enabled: true,
    icon: <FaLightbulb />,
    borderStyle: Border.Solid,
    folder: 'home',
    isFolder: false,
  },
  {
    id: 'telegram',
    href: 'telegram',
    name: 'Telegram',
    shortName: 'Telegram',
    enabled: true,
    icon: <FaTelegram />,
    borderStyle: Border.Solid,
    folder: 'home',
    isFolder: false,
  },
  {
    id: 'trends',
    href: 'trends',
    name: 'Trends',
    shortName: 'Trends',
    enabled: true,
    icon: <FaArrowTrendUp />,
    borderStyle: Border.Solid,
    folder: 'home',
    isFolder: true,
  },
  {
    id: 'weather',
    href: 'weather',
    name: 'Weather',
    shortName: 'Weather',
    enabled: true,
    icon: <FaCloudSunRain />,
    borderStyle: Border.Solid,
    folder: 'home',
    isFolder: false,
  },
  {
    id: 'un',
    href: 'countries/all',
    name: 'Countries',
    shortName: 'Countries',
    enabled: true,
    icon: <FaFlag />,
    borderStyle: Border.Solid,
    folder: 'countries',
    isFolder: false,
  },
  {
    id: 'usa',
    href: 'countries/usa',
    name: 'United States',
    shortName: 'USA',
    enabled: true,
    icon: <FaFlagUsa />,
    borderStyle: Border.Solid,
    folder: 'countries',
    isFolder: false,
  },
  {
    id: 'usa-states',
    href: 'countries/usa/states',
    name: 'States',
    shortName: 'States',
    enabled: true,
    icon: <FaFlagUsa />,
    borderStyle: Border.Solid,
    folder: 'usa',
    isFolder: false,
  },
  {
    id: 'usa-congress',
    href: 'countries/usa/congress',
    name: 'Congress',
    shortName: 'Congress',
    enabled: true,
    icon: <FaFlagUsa />,
    borderStyle: Border.Solid,
    folder: 'usa',
    isFolder: false,
  },
  {
    id: 'usa-presidents',
    href: 'countries/usa/presidents',
    name: 'Presidents',
    shortName: 'Presidents',
    enabled: true,
    icon: <FaFlagUsa />,
    borderStyle: Border.Solid,
    folder: 'usa',
    isFolder: false,
  },
  {
    id: 'vietnam',
    href: 'countries/vietnam',
    name: 'Vietnam',
    shortName: 'Vietnam',
    enabled: true,
    icon: <FaStar />,
    borderStyle: Border.Solid,
    folder: 'countries',
    isFolder: false,
  },
  {
    id: 'vietnam-licenses',
    href: 'countries/vietnam/licenses',
    name: 'Licenses',
    shortName: 'Licenses',
    enabled: true,
    icon: <FaStar />,
    borderStyle: Border.Solid,
    folder: 'vietnam',
    isFolder: false,
  },
  {
    id: 'vietnam-provinces',
    href: 'countries/vietnam/provinces',
    name: 'Provinces',
    shortName: 'Provinces',
    enabled: true,
    icon: <FaStar />,
    borderStyle: Border.Solid,
    folder: 'vietnam',
    isFolder: false,
  },
  {
    id: 'vietnam-vnindex',
    href: 'countries/vietnam/vnindex',
    name: 'VNIndex',
    shortName: 'VNIndex',
    enabled: true,
    icon: <FaStar />,
    borderStyle: Border.Solid,
    folder: 'vietnam',
    isFolder: false,
  },
  {
    id: 'crypto',
    href: 'crypto',
    name: 'Crypto',
    shortName: 'Crypto',
    enabled: true,
    icon: <FaBitcoin />,
    borderStyle: Border.Solid,
    folder: 'home',
    isFolder: true,
  },
  ...cryptoApps,
  {
    id: 'news-de',
    href: 'news/de',
    name: 'DE News',
    shortName: 'DE News',
    enabled: true,
    icon: <FaNewspaper />,
    borderStyle: Border.Solid,
    folder: 'news',
    isFolder: true,
  },
  {
    id: 'news-de-business',
    href: 'news/de/business',
    name: 'DE Business',
    shortName: 'DE Business',
    enabled: true,
    icon: <FaBusinessTime />,
    borderStyle: Border.Solid,
    folder: 'news-de',
    isFolder: false,
  },
  {
    id: 'news-de-entertainment',
    href: 'news/de/entertainment',
    name: 'DE Entertainment',
    shortName: 'DE Entertainment',
    enabled: true,
    icon: <FaMusic />,
    borderStyle: Border.Solid,
    folder: 'news-de',
    isFolder: false,
  },
  {
    id: 'news-de-health',
    href: 'news/de/health',
    name: 'DE Health',
    shortName: 'DE Health',
    enabled: true,
    icon: <FaHeart />,
    borderStyle: Border.Solid,
    folder: 'news-de',
    isFolder: false,
  },
  {
    id: 'news-de-science',
    href: 'news/de/science',
    name: 'DE Science',
    shortName: 'DE Science',
    enabled: true,
    icon: <FaAtom />,
    borderStyle: Border.Solid,
    folder: 'news-de',
    isFolder: false,
  },
  {
    id: 'news-de-sports',
    href: 'news/de/sports',
    name: 'DE Sports',
    shortName: 'DE Sports',
    enabled: true,
    icon: <FaFutbol />,
    borderStyle: Border.Solid,
    folder: 'news-de',
    isFolder: false,
  },
  {
    id: 'news-de-technology',
    href: 'news/de/technology',
    name: 'DE Technology',
    shortName: 'DE Technology',
    enabled: true,
    icon: <FaRobot />,
    borderStyle: Border.Solid,
    folder: 'news-de',
    isFolder: false,
  },
  {
    id: 'news-kr',
    href: 'news/kr',
    name: 'KR News',
    shortName: 'KR News',
    enabled: true,
    icon: <FaNewspaper />,
    borderStyle: Border.Solid,
    folder: 'news',
    isFolder: true,
  },
  {
    id: 'news-kr-business',
    href: 'news/kr/business',
    name: 'KR Business',
    shortName: 'KR Business',
    enabled: true,
    icon: <FaBusinessTime />,
    borderStyle: Border.Solid,
    folder: 'news-kr',
    isFolder: false,
  },
  {
    id: 'news-kr-entertainment',
    href: 'news/kr/entertainment',
    name: 'KR Entertainment',
    shortName: 'KR Entertainment',
    enabled: true,
    icon: <FaMusic />,
    borderStyle: Border.Solid,
    folder: 'news-kr',
    isFolder: false,
  },
  {
    id: 'news-kr-health',
    href: 'news/kr/health',
    name: 'KR Health',
    shortName: 'KR Health',
    enabled: true,
    icon: <FaHeart />,
    borderStyle: Border.Solid,
    folder: 'news-kr',
    isFolder: false,
  },
  {
    id: 'news-kr-science',
    href: 'news/kr/science',
    name: 'KR Science',
    shortName: 'KR Science',
    enabled: true,
    icon: <FaAtom />,
    borderStyle: Border.Solid,
    folder: 'news-kr',
    isFolder: false,
  },
  {
    id: 'news-kr-sports',
    href: 'news/kr/sports',
    name: 'KR Sports',
    shortName: 'KR Sports',
    enabled: true,
    icon: <FaFutbol />,
    borderStyle: Border.Solid,
    folder: 'news-kr',
    isFolder: false,
  },
  {
    id: 'news-kr-technology',
    href: 'news/kr/technology',
    name: 'KR Technology',
    shortName: 'KR Technology',
    enabled: true,
    icon: <FaRobot />,
    borderStyle: Border.Solid,
    folder: 'news-kr',
    isFolder: false,
  },
  {
    id: 'news-uk',
    href: 'news/uk',
    name: 'UK News',
    shortName: 'UK News',
    enabled: true,
    icon: <FaNewspaper />,
    borderStyle: Border.Solid,
    folder: 'news',
    isFolder: true,
  },
  {
    id: 'news-uk-business',
    href: 'news/uk/business',
    name: 'UK Business',
    shortName: 'UK Business',
    enabled: true,
    icon: <FaBusinessTime />,
    borderStyle: Border.Solid,
    folder: 'news-uk',
    isFolder: false,
  },
  {
    id: 'news-uk-entertainment',
    href: 'news/uk/entertainment',
    name: 'UK Entertainment',
    shortName: 'UK Entertainment',
    enabled: true,
    icon: <FaMusic />,
    borderStyle: Border.Solid,
    folder: 'news-uk',
    isFolder: false,
  },
  {
    id: 'news-uk-health',
    href: 'news/uk/health',
    name: 'UK Health',
    shortName: 'UK Health',
    enabled: true,
    icon: <FaHeart />,
    borderStyle: Border.Solid,
    folder: 'news-uk',
    isFolder: false,
  },
  {
    id: 'news-uk-science',
    href: 'news/uk/science',
    name: 'UK Science',
    shortName: 'UK Science',
    enabled: true,
    icon: <FaAtom />,
    borderStyle: Border.Solid,
    folder: 'news-uk',
    isFolder: false,
  },
  {
    id: 'news-uk-sports',
    href: 'news/uk/sports',
    name: 'UK Sports',
    shortName: 'UK Sports',
    enabled: true,
    icon: <FaFutbol />,
    borderStyle: Border.Solid,
    folder: 'news-uk',
    isFolder: false,
  },
  {
    id: 'news-uk-technology',
    href: 'news/uk/technology',
    name: 'UK Technology',
    shortName: 'UK Technology',
    enabled: true,
    icon: <FaRobot />,
    borderStyle: Border.Solid,
    folder: 'news-uk',
    isFolder: false,
  },
  {
    id: 'news-us',
    href: 'news/us',
    name: 'US News',
    shortName: 'US News',
    enabled: true,
    icon: <FaNewspaper />,
    borderStyle: Border.Solid,
    folder: 'news',
    isFolder: true,
  },
  {
    id: 'news-us-business',
    href: 'news/us/business',
    name: 'US Business',
    shortName: 'US Business',
    enabled: true,
    icon: <FaBusinessTime />,
    borderStyle: Border.Solid,
    folder: 'news-us',
    isFolder: false,
  },
  {
    id: 'news-us-entertainment',
    href: 'news/us/entertainment',
    name: 'US Entertainment',
    shortName: 'US Entertainment',
    enabled: true,
    icon: <FaMusic />,
    borderStyle: Border.Solid,
    folder: 'news-us',
    isFolder: false,
  },
  {
    id: 'news-us-health',
    href: 'news/us/health',
    name: 'US Health',
    shortName: 'US Health',
    enabled: true,
    icon: <FaHeart />,
    borderStyle: Border.Solid,
    folder: 'news-us',
    isFolder: false,
  },
  {
    id: 'news-us-science',
    href: 'news/us/science',
    name: 'US Science',
    shortName: 'US Science',
    enabled: true,
    icon: <FaAtom />,
    borderStyle: Border.Solid,
    folder: 'news-us',
    isFolder: false,
  },
  {
    id: 'news-us-sports',
    href: 'news/us/sports',
    name: 'US Sports',
    shortName: 'US Sports',
    enabled: true,
    icon: <FaFootball />,
    borderStyle: Border.Solid,
    folder: 'news-us',
    isFolder: false,
  },
  {
    id: 'news-us-technology',
    href: 'news/us/technology',
    name: 'US Technology',
    shortName: 'US Technology',
    enabled: true,
    icon: <FaRobot />,
    borderStyle: Border.Solid,
    folder: 'news-us',
    isFolder: false,
  },
];

export const Grid: FC<{ apps: App[] }> = ({ apps = [] }) => {
  const numberOfApps: number = apps.length;
  const sm: number = Math.ceil(numberOfApps / 6);
  const md: number = Math.floor(numberOfApps / sm);
  const gridClass: string = `grid grid-cols-${sm} md:grid-cols-${md}`;
  logger.info({ sm, md, gridClass });

  return (
    <>
      <div className='hidden grid-cols-1 grid-cols-2 grid-cols-3 grid-cols-4 grid-cols-5 grid-cols-6 md:grid-cols-1 md:grid-cols-2 md:grid-cols-3 md:grid-cols-4 md:grid-cols-5 md:grid-cols-6'></div>
      <div className={`${gridClass} h-full gap-4 md:gap-6`}>
        {apps.map(({ id, href, name, shortName, icon, borderStyle }) => {
          return (
            <div key={id} className='col-span-1'>
              <div className='flex h-full items-center justify-center'>
                <Link href={`/apps/${href}`}>
                  <div className='flex flex-col gap-y-2 md:gap-y-4'>
                    <div
                      className={`border-base-content mx-auto flex aspect-square w-12 items-center justify-center rounded-xl border text-xl md:w-16 ${borderStyle}`}>
                      {icon}
                    </div>
                    <div className='truncate text-center text-xs md:text-base'>
                      <span className='hidden capitalize md:inline'>
                        {name}
                      </span>
                      <span className='inline capitalize md:hidden'>
                        {shortName}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export const GridTemplate: FC<{ full?: boolean; folder?: Folder }> = ({
  full = false,
  folder = 'home',
}) => {
  const apps = allApps.filter(
    ({ enabled, folder: appFolder }: App) => appFolder === folder && enabled
  );

  return (
    <AppLayout nav full={full || apps.length <= 6}>
      <div className='container mx-auto h-full'>
        <div className='h-full p-4 md:p-8'>
          <Grid apps={apps} />
        </div>
      </div>
    </AppLayout>
  );
};

export const ListTemplate: FC = () => {
  const [query, setQuery] = useState('');

  const apps = allApps
    .filter(({ isFolder }) => !isFolder)
    .filter(
      ({ name = '', shortName = '' }: App) =>
        shortName.toLowerCase().includes(query.toLowerCase()) ||
        name.toLowerCase().includes(query.toLowerCase())
    );

  return (
    <AppLayout nav navBorder full>
      <div className='h-full overflow-auto'>
        <div className='border-base-content border-b'>
          <div className='container mx-auto'>
            <div className='p-4 md:p-8'>
              <input
                id='query'
                name='query'
                placeholder='Query'
                className='input input-bordered w-full'
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </div>
          </div>
        </div>
        {apps.length > 0 ? (
          apps.map(({ id, name, icon, href }) => {
            return (
              <Link key={id} href={href}>
                <div className='border-base-content border-b'>
                  <div className='container mx-auto'>
                    <div className='p-4 md:p-8'>
                      <div className='flex items-center gap-x-4'>
                        <div className='text-4xl'>{icon}</div>
                        <div>{name}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })
        ) : (
          <div className='border-base-content border-b'>
            <div className='container mx-auto'>
              <div className='p-4 md:p-8'>
                <p className='text-center'>No Apps</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  );
};

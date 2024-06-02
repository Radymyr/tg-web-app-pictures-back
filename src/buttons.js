import { inlineKeyboard } from 'telegraf/markup';
import { WebAppUrl } from './initialize.js';

export const inlineOpenButton = inlineKeyboard([
  { text: 'Open the app', web_app: { url: WebAppUrl } },
]);

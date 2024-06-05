import { inlineKeyboard } from 'telegraf/markup';
import 'dotenv/config';

export const inlineOpenButton = inlineKeyboard([
  { text: 'Open the app', web_app: { url: process.env.WebAppUrl } },
]);

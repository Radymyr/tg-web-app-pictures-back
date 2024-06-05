import 'dotenv/config';
import fs from 'fs/promises';

import { bot, instruction, photoPath } from './initialize.js';
import { inlineOpenButton } from './buttons.js';

bot.start(async (ctx) => {
  await ctx.replyWithPhoto({ source: photoPath }, inlineOpenButton);
});

bot.on('message', (ctx) => {
  try {
    ctx.sendMessage(`${instruction} ${ctx.from.first_name}! 😊`, {
      parse_mode: 'Markdown',
      ...inlineOpenButton,
    });
  } catch (error) {
    console.error('Error sending message:', error);
  }
});

export const sendPhotoToUser = async (userId, filePath, caption) => {
  try {
    const TEXT_LENGTH = 1024;
    const captionText = `The response to your request exceeds the allowed size,
      the response will be sent as a separate message below ⬇`;

    if (caption.length > TEXT_LENGTH) {
      await bot.telegram.sendPhoto(
        userId,
        { source: filePath },
        { caption: captionText }
      );

      await bot.telegram.sendMessage(userId, caption);
    } else {
      await bot.telegram.sendPhoto(
        userId,
        { source: filePath },
        { caption: caption }
      );
    }

    await fs.unlink(filePath);
  } catch (error) {
    console.error('Error sending photo to user:', error);
  }
};

export const startBot = () => bot.launch();

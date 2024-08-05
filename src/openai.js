import 'dotenv/config';
import OpenAI from 'openai';
import { sendPhotoToUser } from './bot.js';
import fs from 'fs/promises';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const describeImage = async (
  userId,
  filePath,
  encodedImageFile,
  textQuestion
) => {
  try {
    const stats = fs.statSync(filePath);
    const fileSizeInBytes = stats.size;
    console.log('File path:', filePath);
    console.log('File size:', fileSizeInBytes);

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'user',
          content: [
            { type: 'text', text: textQuestion },
            {
              type: 'image_url',
              image_url: {
                url: encodedImageFile,
                detail: 'low',
              },
            },
          ],
        },
      ],
    });

    const answer = response.choices[0].message.content;

    if (answer) {
      await sendPhotoToUser(userId, filePath, answer);
    }
  } catch (error) {
    console.error('Error during analysis:', error);
  }
};

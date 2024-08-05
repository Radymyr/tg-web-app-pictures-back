import 'dotenv/config';
import OpenAI from 'openai';
import { sendPhotoToUser } from './bot.js';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const describeImage = async (
  userId,
  filePath,
  encodedImageFile,
  textQuestion
) => {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'user',
          content: [
            { type: 'text', text: textQuestion },
            {
              type: 'image_url',
              image_url: {
                url: encodedImageFile,
                detail: 'high',
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

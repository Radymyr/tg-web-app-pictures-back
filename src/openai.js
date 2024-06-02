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
    if (!encodedImageFile) {
      throw new Error('Encoded image file is undefined');
    }
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
                detail: 'low',
              },
            },
          ],
        },
      ],
    });

    const answer = response.choices[0].message.content;
    console.log('answer:', answer);

    if (answer) {
      await sendPhotoToUser(userId, filePath, answer);
    }
  } catch (error) {
    console.error('Error during analysis:', error);
  }
};

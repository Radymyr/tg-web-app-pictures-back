import path from 'path';
import { Telegraf } from 'telegraf';
import 'dotenv/config';

export const bot = new Telegraf(process.env.BOT_TOKEN);
export const __dirname = path.dirname(new URL(import.meta.url).pathname);

export const instruction = `# Instructions for Using the App

1. **Open the App:**  
   - Click the **"Open the App"** button to launch the application.

2. **Upload Your Photo:**  
   - Once the app is open, upload your photo by selecting the file from your device.

3. **Enter Your Question:**  
   - In the input field that appears, type your question about the photo.

4. **Submit Your Question:**  
   - Click the **"Submit"** button to send your question along with the photo.

5. **Receive the Response:**  
   - The chat bot will respond with the photo and the description you requested.

Good luck!`;

export const photoPath = path.join(
  __dirname,
  'assets',
  'images',
  'presentation.jpeg'
);

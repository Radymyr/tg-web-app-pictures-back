import express from 'express';
import cors from 'cors';

import { encodeImageToBase64 } from './encodeImage.js';
import { describeImage } from './openai.js';
import { upload, getValidateFields } from './filters.js';

export const app = express();

app.use(cors({ origin: '*' }));
app.use(express.static('./uploads'));
app.use(express.urlencoded({ extended: true }));

const EXPRESS_PORT = process.env.EXPRESS_PORT || 3000;

app.post(
  '/upload',
  upload.single('photo'),
  getValidateFields,
  async (req, res) => {
    try {
      if (!req.file) {
        return res
          .status(400)
          .send({ description: 'No file uploaded or invalid file type.' });
      }
      const { file, body } = req;

      const encodedImage = encodeImageToBase64(file.path, file.originalname);

      if (encodedImage) {
        await describeImage(body.userId, file.path, encodedImage, body.text);
        res.send({
          description:
            'The image was sent successfully✅ The answer has been sent to your chat 💬',
        });
      } else {
        res.status(400).send({ description: 'Failed to encode the image.' });
      }
    } catch (err) {
      console.error('Error handling upload:', err);
      res.status(500).send({ description: 'Failed to process the image.' });
    }
  }
);

export const startServer = () => {
  app.listen(EXPRESS_PORT, () =>
    console.log(`listening on port ${EXPRESS_PORT}`)
  );
};

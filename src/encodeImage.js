import fs from 'fs';
import mime from 'mime-types';

export function encodeImageToBase64(imagePath, originalname) {
  try {
    const imageBuffer = fs.readFileSync(imagePath);
    if (!imageBuffer) {
      return res.status(400).send('Could not determine imageBuffer');
    }

    const mimeType = mime.lookup(originalname);

    if (!mimeType) {
      return res.status(400).send('Unable to determine MIME type');
    }

    const base64Image = imageBuffer.toString('base64');

    return `data:${mimeType};base64,${base64Image}`;
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}

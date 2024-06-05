import multer from 'multer';
import mime from 'mime-types';
import fs from 'fs/promises';

export const upload = multer({
  dest: 'uploads/',
  fileFilter: (_, file, cb) => {
    const mimeType = mime.lookup(file.originalname);
    const acceptedImageTypes = ['image/jpeg', 'image/png', 'image/gif'];

    if (acceptedImageTypes.includes(mimeType)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only JPEG, PNG, and GIF are allowed.'));
    }
  },
});

export const getValidateFields = async (req, res, next) => {
  const { file, body } = req;
  const { text, userId } = body;

  if (!text || !file || !userId) {
    res.status(400).send({ description: 'One of the fields is not filled in' });
    await fs.unlink(file.path);

    return;
  }

  next();
};

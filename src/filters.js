import multer from 'multer';
import mime from 'mime-types';

export const upload = multer({
  dest: 'uploads/',
  fileFilter: (req, file, cb) => {
    const mimeType = mime.lookup(file.originalname);
    const acceptedImageTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (acceptedImageTypes.includes(mimeType)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only JPEG, PNG, and GIF are allowed.'));
    }
  },
});

export const fieldValidation = ['text', 'file', 'userId'];

const cloudinary = require('../config/cloudinaryConfig');
const multer = require('multer');

const storage = multer.diskStorage({});
const upload = multer({ storage });

const uploadImage = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: `products/${req.body.product_id}`,
    });
    res.status(200).json({
      message: 'Image uploaded successfully',
      url: result.secure_url,
    });
  } catch (error) {
    res.status(400).json({
      message: 'Image upload failed',
      error: error.message,
    });
  }
};

module.exports = {
  upload,
  uploadImage,
};

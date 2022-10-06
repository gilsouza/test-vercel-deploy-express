const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    res.json({
      status: 200,
      message: 'OK',
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: 500,
      message: 'Deu ruim',
    });
  }
});

module.exports = router;

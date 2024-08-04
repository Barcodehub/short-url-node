const express = require('express');
const router = express.Router();
const urlService = require('../services/urlService');

router.post('/shorten', async (req, res) => {
  try {
    const { url } = req.body;
    if (!url) {
      return res.status(400).json({ error: 'URL is required' });
    }
    const shortCode = await urlService.shortenUrl(url);
    res.json({ shortUrl: `${req.protocol}://${req.get('host')}/${shortCode}` });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/:shortCode', async (req, res) => {
  try {
    const { shortCode } = req.params;
    const originalUrl = await urlService.getOriginalUrl(shortCode);
    if (originalUrl) {
      return res.redirect(originalUrl);
    }
    res.status(404).json({ error: 'URL not found' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
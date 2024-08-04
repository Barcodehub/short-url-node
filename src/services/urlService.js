const shortid = require('shortid');
const Url = require('../models/url');

class UrlService {
  async shortenUrl(originalUrl) {
    const shortCode = shortid.generate();
    const url = new Url({
      originalUrl,
      shortCode,
    });
    await url.save();
    return shortCode;
  }

  async getOriginalUrl(shortCode) {
    const url = await Url.findOne({ shortCode });
    if (url) {
      return url.originalUrl;
    }
    return null;
  }
}

module.exports = new UrlService();
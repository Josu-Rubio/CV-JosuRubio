const express = require('express');
const router = express.Router();

router.get('/:locale', (req, res, next) => {
  const locale = req.params.locale;

  const returnTo = req.get('referer');

  res.cookie('mycv-locale', locale, { maxAge: 1000 * 60 * 60 * 24 * 20 });

  res.redirect(returnTo);
});

module.exports = router;

'use strict';

const i18n = require('i18n');
const path = require('path');

module.exports = function () {
  i18n.configure({
    locales: ['es', 'en'],
    directory: path.join(__dirname, '..', 'locales'),
    defaultLocale: 'es',
    autoReload: true, // recargar ficheros de idioma si cambian
    syncFiles: true, // crear literales en todos los locales automáticamente en desarrollo
    cookie: 'mycv-locale',
  });

  // por si usamos i18n en scripts:
  i18n.setLocale('es');

  return i18n;
};

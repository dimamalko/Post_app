// @flow

import cs from '../locales/cs';
import env from '../config/evironment';

const locales = { cs };
const { lng } = env;

type Data = {
  [string]: Data | string
};

const translation = (data: Data, keys) => {
  if (!data) {
    return '';
  }

  const key = keys.shift();

  if (typeof data[key] === 'object') {
    return translation(data[key], keys);
  }

  return data[key];
};

const i18n = {
  // eslint-disable-next-line id-length
  t: (key: string, rescue?: string) =>
    translation(locales[lng], key.split('.')) || rescue || key
};

export default i18n;

// @flow
import './footer.scss';
import React from 'react';
import i18n from '../../services/i18n';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__directions">
        <p className="footer__directions--paragraph">
          {i18n.t('footer.directions')}
        </p>
        <p>{i18n.t('general.home')}</p>
        <p>{i18n.t('general.about')}</p>
        <p>{i18n.t('general.contact')}</p>
      </div>
      <div className="footer__contacts">
        <p className="footer__contacts--paragraph">
          {i18n.t('general.contact')}
        </p>
        <p>{i18n.t('footer.company')}</p>
        <p>{i18n.t('footer.tel')}</p>
        <p>{i18n.t('footer.contactEmail')}</p>
        <p>{i18n.t('footer.adress')}</p>
        <p className="footer__copyright">&copy;{i18n.t('footer.copy')}</p>
      </div>
    </div>
  );
}

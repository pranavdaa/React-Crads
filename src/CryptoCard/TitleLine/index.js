import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const TitleLine = props => {
  let {
    currencyName,
    currencyPrice
  } = props;

  return (
    <div className={styles['crypto-card-title-line']}>
      <div className={styles['currency-name']}>{ currencyName }</div>
      <div className={styles['currency-price']}>{ currencyPrice }</div>
    </div>
  );
}

TitleLine.propTypes = {
  currencyName: PropTypes.string.isRequired,
  currencyPrice: PropTypes.string
};

export default TitleLine;

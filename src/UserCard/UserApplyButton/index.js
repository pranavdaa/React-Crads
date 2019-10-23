import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const UserApplyButton = ({
  productName,
  description,
  buttonText,
  rating,
  url
}) => {
  const renderButton = () => {
    if (buttonText) {
      return (
        <div className={styles['row']}>
          <a className={styles['buy-button']} href={url}>
            {buttonText}
          </a>
        </div>
      );
    } else {
      return null;
    }
  };
  return (
    <div className={styles['product-card-description-box']}>
      {renderButton()}
    </div>
  );
};

export default UserApplyButton;

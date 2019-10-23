import React from 'react';

import styles from './styles.scss';
import FontAwesome from 'react-fontawesome';

class UsrAdditionalInfo extends React.Component {
  render() {
    let {
      date,
      location
    } = this.props;
    
    return (
      <div
	      className={styles['user-card-body']}
	    >
        <div className={styles['iconstyl']}>
         <a>        
        <FontAwesome name='calendardkvcnkd'/>
      </a>
      </div>
        <div className={styles['user-card-position-name']}>
	        {location}
	      </div>
        <div className={styles['user-card-position-name']}>
	        {date}
	      </div>
	      {this.props.children}
      </div>
    );
  }
}

export default UsrAdditionalInfo;

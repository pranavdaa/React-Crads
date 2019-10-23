import React from 'react';

import Card from '../Card';
import UserCardHeader from './UserCardHeader';
import UserCardAvatar from './UserCardAvatar';
import UserCardBody from './UserCardBody';
import UserCardStats from './UserCardStats';
import UsrAdditionalInfo from './UsrAdditionalInfo';
import UserApplyButton from './UserApplyButton';
import styles from './styles.scss';

class UserCard extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let {
      className,
      href,
      header,
      avatar,
      name,
      positionName,
      stats,
      date,
      buttonText,
      url,
      location,
      ...other
    } = this.props;
    
    return (
      <a className={styles['card-link']} href={href}>
	      <Card
          className={className}
          {...other}
	      >
	        <UserCardHeader
	          src={header}
	        />
	        <UserCardAvatar
	          src={avatar}
	        />
	        <UserCardBody
	          name={name}
	          positionName={positionName}
	        >
	          {this.props.children}
	        </UserCardBody>

<hr className={styles['line']} />

<UsrAdditionalInfo 
date={date}
location={location}
>
  {this.props.children}
</UsrAdditionalInfo>

	        {
	          stats !== undefined
	            ? <UserCardStats
		      stats={stats}
		                      />
	          : null
	        }
          <UserApplyButton 
          buttonText={buttonText}
          url={url}
          />
	        
	      </Card>
      </a>
    );
  }
}

export default UserCard;

import React, { PropTypes } from 'react';
import * as Styles from './logo.scss';
import classnames from 'classnames';

export default function Logo(props) {
  let { className, ...others} = props;
  className=classnames(
	  className,
	  Styles.logo
  );
  return (
     <div className={className} {...others }>
	   <h1>旅游没涂</h1>
	 </div>
  );
}
Logo.propTypes={
     className:PropTypes.string,
}
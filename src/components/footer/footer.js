import React from 'react';
import * as Styles from './footer.scss';
import DevTools from '../../utils/DevTools';

export default function (props){
	let {className ,...others} = props;
  return (
   <div className={ className } {...others}>
     网站部，静态内容，不想写，样式不是很好，没有ui，只能这样了，react系列网站，与君们多多学习。
	  <DevTools />
   </div>	  
  );
}
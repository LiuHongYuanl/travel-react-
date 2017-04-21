import React from 'react';

import * as Styles from './comment.scss';
export default function Comment(props){
  return (
	  <div className={Styles.commentAll}>
	     <div className={Styles.commentLeft}>
	       <img src={props.userImg} />
	       <p>{props.userName}</p>
         </div>

	     <div className={Styles.commentRight}>
	       <div>
	          <span>导游服务：{props.tourGuideService ==1 ? "满意": ''}{props.tourGuideService ==2 ? "一般": ''}{props.tourGuideService ==3 ? "不满意": ''}</span>
	          <span>旅行交通：{props.travelTraffic ==1 ? "满意" : ""}{props.travelTraffic ==2 ? "一般" : ""}{props.travelTraffic ==3 ? "不满意" : ""}</span>
	          <span>餐饮住宿：{props.cateringAccommodation == 1 ? "满意" : ""}{props.cateringAccommodation == 2 ? "一般" : ""}{props.cateringAccommodation == 3 ? "不满意" : ""}</span>
	          <span>行程安排：{props.scheduling == 1 ? "满意" : "" }{props.scheduling == 2 ? "一般" : "" }{props.scheduling == 3 ? "不满意" : "" }</span>
	       </div>
	       <div style={{marginBottom:'15px'}}>{props.userComment}</div>
	       <div>{props.time}</div>
         </div>
      </div>
	  );
}
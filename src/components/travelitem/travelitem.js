import React, { Component, PropTypes } from 'react';

import * as Styles from './travelitem.scss';
//import { Tabs, Tab } from 'react-bootstrap';

 function getAbsPoint(e){
	      if(e!=null){
			 let y = e.offsetTop;
			while(e = e.offsetParent)
			 {
					 y += e.offsetTop;
			 }
			return y;
	        }
		  }

export default class Travelitem extends Component{
	constructor(props){
	   super(props); 
	  this.state={
	      loading:'http://m.tuniucdn.com/filebroker/cdn/olb/33/7a/337a449e1b9abccee5efb848705327bd_w320_h180_c0_t0_w400_h300_c0_t0.jpg'
	   };
	}

 componentDidMount() {
       console.log(this.state.loading);
       window.addEventListener('scroll',() => {
  	     if(this.state.loading == 'http://m.tuniucdn.com/filebroker/cdn/olb/33/7a/337a449e1b9abccee5efb848705327bd_w320_h180_c0_t0_w400_h300_c0_t0.jpg'){
	      let scrolltop=document.documentElement.scrollTop||document.body.scrollTop;
		  let windowHeight=document.documentElement.clientHeight||document.body.clientHeight;




         //	console.log(getAbsPoint(this.refs.item));
         if(scrolltop + windowHeight > getAbsPoint(this.refs.item)){
	     this.setState({
		    loading:this.props.imgSrc
		  });
            //console.log(scrolltop + windowHeight);
            //console.log(this.setState);
			

			//console.log(this.state.loading);
	     }
	
	   }
	 })
   
  }

  componentWillUnMount(){
      window.removeEventListener('scroll');
  }

  handleNavigate(e){
    e.preventDefault();
	this.props.push({pathname:"buyproduct",query:{id:this.props.id}});
  }

	render() {
	return ( 
				<div className={Styles.item} ref='item' onClick={this.handleNavigate.bind(this)}>
					<div className={Styles.pic}>
						<a  target="_blank">
						 <img data-lazyload-type="img" src={this.state.loading} data-lazyload-src={this.props.imgSrc}/>
						 <span>{this.props.describe}</span> 
						</a>
					</div>

					<div className={Styles.price}>
						<span>¥
						  <span>{this.props.price}</span>
						元</span>
						<span>
						  <span>参团人数：</span>
		                    {this.props.preson}
						</span>
					</div>

					<div className={Styles.time}>
						<span>{this.props.timeStart}</span>
						<span data-time>~</span>
						<span>{this.props.timeEnd}</span>
					</div>

					<div className={Styles.name}>
						<a  target="_blank" title = {this.props.title} >
		                         {this.props.title}
						</a>
					</div>
				</div>
		);
	}
}

Travelitem.propTypes={
       imgSrc:PropTypes.string,
	   preson:PropTypes.number,
	   timeStart:PropTypes.string,
	   timeEnd:PropTypes.string,
	   price:PropTypes.number,
	   describe:PropTypes.string,
	   title:PropTypes.string,
	   id:PropTypes.number
}

//Travellist.defaultProps={}
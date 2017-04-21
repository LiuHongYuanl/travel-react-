import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import * as Styles from './header.scss';
import Hoverdown from '../hoverdown/hoverdown';
import { Row, Col, Dropdown, Glyphicon, MenuItem } from 'react-bootstrap';

export default class Header extends Component{
	constructor(props){
	  super(props);
	  this.state={
	    hover:false
	  }
	  this.handleHoveron=this.handleHoveron.bind(this);
	  this.handleHoveroff=this.handleHoveroff.bind(this);
	}
    
	handleHoveron(){
	   this.setState({
	     hover:true
	   });
	}

	handleHoveroff(){
	   this.setState({
	     hover:false
	   });
	}
    
	render () {

       let style = this.state.hover ? {display:'block'} : {display:'none'};
       let cx=classnames({up_icon:this.state.hover,down_icon:this.state.hover===false,})

	  return (
	   <div className= { Styles.hAll} >
		 <div>
		  <div className={ Styles.hLeftuser }>
				 <li><a>登陆</a></li>
				 <li><span>|</span></li>
				 <li><a>注册</a></li>
		   </div>

           <div className={ Styles.hRightInfo }>
		  		<ul>
		  		          <li style={{width:'116px',marginRight:'92px'}}><Hoverdown title={<i>和好很好</i>} top="30px" left="-500px" width="592px" icon_top_up='7px' icon_left='75px' icon_left_down='13px'><div style={{background:'red'}}>随着应用不断变大，保证组件被正确使用变得非常有用。为此我们引入propTypes。React.PropTypes 提供很多验证器 (validator) 来验证传入数据的有效性。当向 props 传入无效数据时，JavaScript 控制台会抛出警告。注意为了性能考虑，只在开发环境验证 propTypes。下面用例子来说明不同验证器的区别：</div></Hoverdown></li>

		       </ul>
		  </div>

		   <div className={ Styles.hRightInfo }>

				<ul>
		          <li><a>我的购物车</a></li>
		          <li>
		            <Hoverdown title={<span>我的订单</span>} top="30px" left="0px" width="92px" icon_top_up='7px' icon_left='75px' icon_left_down='13px'>
		              <ul className={Styles.userbuy}>
		               <li><a>全部订单</a></li>
		               <li><a>酒店订单</a></li>
		               <li><a>旅游订单</a></li>
		              </ul>
		            </Hoverdown>
	              </li>
		          <li><a>客服中心</a></li>
				</ul>
		        
		   </div>
			   

		  </div>
	   </div>
	  );
	}
}
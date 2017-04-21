import React, { Component } from 'react';
import classnames from 'classnames';
import { Link, IndexLink } from 'react-router';
import * as Styles from './nav.scss';
import { Button, Glyphicon } from 'react-bootstrap';


export default class Nav extends Component{
	constructor(props){
	  super(props);
	  this.state={
	    navshow:true
	  }
     this.handleNavshow=this.handleNavshow.bind(this);
	}
    handleNavshow() {
      this.setState({
	    navshow:!this.state.navshow
	  });
	}
   render() {
	  let cl = classnames({'navshow':this.state.navshow===true,'navhide':this.state.navshow===false});
     return (
	   <div className={Styles.nav}>
		  <ul className={Styles[cl]}>
		     <li >
		      <IndexLink to="/"  activeStyle={{backgroundColor:'#4ecf5b'}} title="首页">
	         首页	      </IndexLink>
		     <span>|</span>

		    </li>	
		     <li >
		       <Link to="/tours" activeStyle={{backgroundColor:'#4ecf5b'}}>
		         跟团游         </Link>
				<span>|</span>
    
		     </li>			
		     <li >
		  	   <Link to="/liner" activeStyle={{backgroundColor:'#4ecf5b'}}>
	              邮轮          </Link>
				 <span>|</span>	 
	         </li>	
		 	 <li>
		       <Link to="/hotel" activeStyle={{backgroundColor:'#4ecf5b'}}>
	            酒店         </Link>
				 <span>|</span>

		     </li>	
		     <li >
   	           <Link to="/scenicspot" activeStyle={{backgroundColor:'#4ecf5b'}}> 
	              景点
		 	   </Link>
	        </li>	
		  </ul>
		  <div  style={{zIndex:1000}}> <Button onClick={this.handleNavshow}><Glyphicon glyph="align-justify" /></Button></div>
	   </div>	 
	 );
   }
}
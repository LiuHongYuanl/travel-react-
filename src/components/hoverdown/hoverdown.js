import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import * as Styles from './hoverdown.scss';
import { Row, Col, Dropdown, Glyphicon, MenuItem } from 'react-bootstrap';

export default class Hoverdown extends Component{
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
	   style={top:this.props.top,left:this.props.left,width:this.props.width,...style}
       let cx=classnames({up_icon:this.state.hover,down_icon:this.state.hover===false,})
       let styleupdown=this.state.hover ? {top:this.props.icon_top_up,left:this.props.icon_left} : {top:this.props.icon_left_down,left:this.props.icon_left};
	  return (
		          <div className={Styles.hoverli} data-hoverli onMouseOver={this.handleHoveron}  onMouseOut={this.handleHoveroff}><span>{this.props.title}</span>
		            <span className={Styles[cx]} style={styleupdown}></span>
		             <div style={style}>
		               {this.props.children}
		  		    </div>
		          </div>
	  );
	}
}
Hoverdown.propTypes={
  title:PropTypes.node.isRequired,
    top:PropTypes.string,
   left:PropTypes.string,
  width:PropTypes.string,
}
import React, { Component, PropTypes } from 'react';

import * as Styles from './travellist.scss';
import Travelitem from '../travelitem/travelitem.js';
import { Tabs, Tab, Row, Col, Grid} from 'react-bootstrap';
import { Link } from 'react-router';

export default class Travellist extends Component{
	constructor(props){
	   super(props); 

	}

	render() {
		

	return ( 
		<div className={Styles.sec}>
		  <Grid>
	        <Row>
		    <Col sm={2} style={{paddingLeft:'0px',paddingRight:'0px'}} > 
				<div className={Styles.secleft}>
				   <h2>{this.props.productName}</h2>
		            {this.props.productPic}
				</div>
			</Col>
            <Col sm={10} style={{paddingLeft:'0px',paddingRight:'0px'}} >
				<div className={Styles.secright}>
		          {this.props.children}
				</div>
			 </Col>
		   </Row>
		</Grid>
		</div>
		);
	}
}

Travellist.propTypes={
       children:PropTypes.node,

}

//Travellist.defaultProps={}
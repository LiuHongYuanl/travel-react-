import React, { Component } from 'react';

import Productlist from '../components/productlist/productlist.js';
import Select from '../components/select/select.js';
import * as Styles from './Hotel.scss';
import { Grid, Row, Col, Pagination } from 'react-bootstrap';

import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import  { loadArticles }  from './HotelRedux'; 

class Hotel extends Component{
	constructor(props){
	  super(props);
	  this.state={
	     activePage: 1
	  }
		 this.handleSelect=this.handleSelect.bind(this);
	}


    
    handleSelect(eventKey) {
      this.setState({
         activePage: eventKey
       });
    }

	render() {
	  return(
	   	 <div>
		  <Grid>
		    <Row>
               <Col md={10}>
			     <div>

		  <Select city={true} loadArticles={this.props.loadArticles} activePage={this.state.activePage}  url="/routerhotelproductlist.json"/>
			     </div>

			     <div className={Styles.product}>

				  { (this.props.productList.loading===false && this.props.productList.error===false&&this.props.productList.articlesList.productlist!=null) ? 
								this.props.productList.articlesList.productlist.map((entry,index) => (
		                          <Productlist key = { entry.id } { ...entry } push={this.props.push}/>
	                   )) : "" }
							
		                     {(this.props.productList.loading ===true) ? <p>加载中。。。</p> : ''}
                            {(this.props.productList.error ===true) ? <p>加载错误</p> : ''}


			     </div>

			     <div className={Styles.page}>
                    <Pagination
						prev
						next
						first
						last
						ellipsis
						boundaryLinks
						items={Math.ceil(this.props.productList.articlesList.pagetotal/5)}
						maxButtons={5}
						activePage={this.state.activePage}
						onSelect={this.handleSelect} />
			     </div>
			   </Col>
			
			   <Col md={2} style={{border:'1px solid green'}}>
			     <div>  
			     </div>
			   </Col>
		    </Row>
		  </Grid>
	     </div>
	  );
	}

}

export default connect(state => {
   return {
      productList:state.hotel.productList,

   };
},
dispatch => {
   return {
      loadArticles:bindActionCreators(loadArticles,dispatch),
	  push:bindActionCreators(push,dispatch),
   };
}
)(Hotel);
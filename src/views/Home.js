import React, { Component } from 'react';
import Toursproductlist from '../components/Home/Toursproductlist.js';
import Linerproductlist from '../components/Home/Linerproductlist.js';
import Hotelproductlist from '../components/Home/Hotelproductlist.js';
import Scenicspotproductlist from '../components/Home/Scenicspotproductlist.js';
import * as Styles from './Home.scss';
import { Carousel, Tabs, Tab } from 'react-bootstrap';
import { Link } from 'react-router';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadArticles, loadLinerArticles, loadHotelArticles, loadScenicspotArticles} from './HomeRedux'; 
import DevTools from '../utils/DevTools';

class Home extends Component {
 	constructor(props){
	   super(props); 

	}

    
	


render() {

  return (
        <div>
		  <Carousel>
			<Carousel.Item>
			  <img  alt="900x500" src={require('../theme/image/ABHYa92.jpeg')} />            
			  <Carousel.Caption>
				<h3>First slide label</h3>
				<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
			  </Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
			  <img  alt="900x500" src={require("../theme/image/27.jpeg")}/>
			  <Carousel.Caption>
				<h3>Second slide label</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			  </Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
			  <img  alt="900x500" src={require("../theme/image/27.jpeg")}/>
			  <Carousel.Caption>
				<h3>Third slide label</h3>
				<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
			  </Carousel.Caption>
			</Carousel.Item>
		  </Carousel>
        <Toursproductlist { ...this.props.homeproductList } loadArticles = { this.props.loadArticles } push={this.props.push}/>
 
        <Linerproductlist {...this.props.linerproductList } loadLinerArticles = { this.props.loadLinerArticles } push={this.props.push}/>

       <Hotelproductlist {...this.props.hotelproductList } loadHotelArticles = { this.props.loadHotelArticles } push={this.props.push} />
       
	   <Scenicspotproductlist  {...this.props.scenicspotproductList } loadScenicspotArticles = { this.props.loadScenicspotArticles } push={this.props.push}  />

        </div>
  );
}
}

export default connect(state => {
   return {
      homeproductList:state.home.homeproductList,
	  linerproductList:state.home.linerproductList,
	  hotelproductList:state.home.hotelproductList,
	  scenicspotproductList:state.home.scenicspotproductList,
		  
   };
},
dispatch => {
   return {
      loadArticles:bindActionCreators(loadArticles,dispatch),
	  loadLinerArticles:bindActionCreators(loadLinerArticles,dispatch),
	  loadHotelArticles:bindActionCreators(loadHotelArticles,dispatch),
	  loadScenicspotArticles:bindActionCreators(loadScenicspotArticles,dispatch),
	  push:bindActionCreators(push,dispatch),
   };
}
)(Home);
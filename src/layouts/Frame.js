import React, { Component } from 'react';
import Nav from '../components/nav/nav';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Search from '../components/serach/serach';


export default class Frame extends Component{
	render() {
	  return (
	    <div>
		  <div><Header /></div>
		  <div><Search /></div>
		  <div>
		    <Nav />
		  </div>
		  <div>
		    {this.props.children}
		  </div>
		  <div><Footer /></div>
		</div>
	  );
	
	}
}

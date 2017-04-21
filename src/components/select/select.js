import React, { Component } from 'react';

import classnames from 'classnames';
import * as Styles from './select.scss';
import { Grid, Row, Col, Form, ControlLabel, FormControl, FormGroup, Button, Glyphicon } from 'react-bootstrap';

export default class Select extends Component{
	constructor(props) {
	   super(props);
	   this.state={
	      select:'comprehensive',
          priceStart:'',
		  priceEnd:'',
		  timeStart:'',
		  timeEnd:'',
		  destinationStart:'',
		  destinationEnd:''
	   };

	   this.handleSelect=this.handleSelect.bind(this);
	   this.handleChange=this.handleChange.bind(this);
	   this.handleClick=this.handleClick.bind(this);
	}
     
    /*componentWillMount(){
	   this.setState({
	     activePage:this.props.activePage
	   });
		 
	}*/

	componentDidUpdate(prevProps,prevState){
    	if(this.state.select!==prevState.select){
	      let activePage=this.props.activePage;
		  let url=this.props.url;
	   this.props.loadArticles(url,activePage,{...this.state});
		  //console.log(this.state.select);
		  }
	}

    componentWillReceiveProps(nextProps){
	   if(this.props.activePage!==nextProps.activePage){
      		 let activePage=nextProps.activePage;
			 	  let url=this.props.url;
	       this.props.loadArticles(url,activePage,{...this.state});
			 //console.log(nextProps);
		 }
	}

	componentDidMount() {
		 let activePage=this.props.activePage;
		 	  let url=this.props.url;
	  this.props.loadArticles(url,activePage,{...this.state});
	}

    handleSelect(e){
		if(e.target.getAttribute("name") === "priceup" && this.state.select==="priceup"){
	    //alert(e.target.getAttribute("name"));
				this.setState({
		             select:"pricedown"
		         });

		  // alert(this.state.select);
		} else {
          this.setState({
		     select:e.target.getAttribute("name")
		   });
		}
         
		//  setTimeout(()=>{console.log(this.state.select)},100);
	}

	handleChange(e){
		if(e.target.getAttribute("name")==="priceStart"){
		    this.setState({
		       priceStart:e.target.value
		    });
		}else if(e.target.getAttribute("name")==="priceEnd"){
		   	this.setState({
		       priceEnd:e.target.value
		    });
		}else if(e.target.getAttribute("name")==="timeStart"){
		  	this.setState({
		       timeStart:e.target.value
		    });
		}else if(e.target.getAttribute("name")==="timeEnd"){
		  	this.setState({
		       timeEnd:e.target.value
		    });
		}else if(e.target.getAttribute("name")==="destinationStart"){
		  	this.setState({
		       destinationStart:e.target.value
		    });
		}else if(e.target.getAttribute("name")==="destinationEnd"){
		  	this.setState({
		       destinationEnd:e.target.value
		    });
		}

	 // console.log(e.target.getAttribute("name"));
	}

	handleClick(){

	   	      let activePage=this.props.activePage;
			  	  let url=this.props.url;
	    this.props.loadArticles(url,activePage,{...this.state});
	}

	render() {
         let recommend=classnames({selected:this.state.select==='recommend'});
         let comprehensive=classnames({selected:this.state.select==='comprehensive'});
         let salesVolume=classnames({selected:this.state.select==='salesVolume'});
         let satisfaction=classnames({selected:this.state.select==='satisfaction'});
         let priceup=classnames({selected:this.state.select==='priceup'||this.state.select==='pricedown'});

		 let city=this.props.city ? {display:'none'} : {}; 

	   return (
		 <div className={Styles.selectAll}>
		      <Row>
		         <Col sm={3}>
		             <div className={Styles.selectLeft}>
		              <p>
		                <button className={Styles[recommend]} name="recommend" onClick={this.handleSelect}>推荐</button>
		                <button className={Styles[comprehensive]} name="comprehensive" onClick={this.handleSelect}>综合</button>
		                <button className={Styles[salesVolume]} name="salesVolume" onClick={this.handleSelect}>销量</button>
		              </p>
		              <p>
		   		        <button className={Styles[satisfaction]} name="satisfaction" onClick={this.handleSelect}>满意度</button>
		                <button className={Styles[priceup]} name="priceup" onClick={this.handleSelect}>价格</button>
		              </p>
	                 </div>
		         </Col>
		         <Col sm={6}>
		             <div className={Styles.selectCenter}>
		               <p>
		                <span>价格区间</span>
	                    <input type='number' name="priceStart" onChange={this.handleChange} value={this.state.priceStart}/>
		                <span>~</span>
		                <input type='number' name="priceEnd" onChange={this.handleChange} value={this.state.priceEnd}/>
		               </p>
		               <p>
		                <span>时间区间</span>
		                <input type='text' name="timeStart" onChange={this.handleChange} value={this.state.timeStart}/>
		                 <span>~</span>
		                <input type='text' name="timeEnd" onChange={this.handleChange} value={this.state.timeEnd}/>
		               </p>
		             </div>
		         </Col>
		         <Col sm={3}>
		             <div className={Styles.selectRight}>
		               <p style={city}>
		                <span>出发地点</span>
                        <input type='text' name="destinationStart" onChange={this.handleChange} value={this.state.destinationStart}/>
		               </p>
		               <p>
		                <span>{this.props.city ? '地址' : '结束地点'}</span>
		                <input type='text' name="destinationEnd" onChange={this.handleChange} value={this.state.destinationEnd}/>		               
		               </p>
		             </div>
		         </Col>
	          </Row>
		      <Row>
		         <Col sm={12}> <Button onClick={this.handleClick} block><Glyphicon glyph="search" /></Button></Col>
	          </Row>
	     </div>   
	   );
	}

}
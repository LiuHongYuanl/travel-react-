import React, { Component, PropTypes } from 'react';
import * as Styles from './Toursproductlist.scss';
import Travelitem from '../travelitem/travelitem.js';
import Travellist from '../travellist/travellist.js';
import { Tabs, Tab, Row, Col, Grid} from 'react-bootstrap';
import { Link } from 'react-router';

export default class Toursproductlist extends Component{
	constructor(props){
	   super(props); 

	}

	componentDidMount() {
	   this.props.loadArticles();
	}

	handleNavigate(tohere,select,e){
	   e.preventDefault();
	  // this.props.push(tohere);
	  this.props.push({pathname:tohere,query:{select:select}});
	}

	

	render() {
		console.log(this.props.articlesList);
	  return ( 

		  <Travellist productName="跟团游" productPic={<img src={require("../../theme/image/guonei.png")}/>}> 
             <Tabs defaultActiveKey={1} id="uncontrolled-tab-example" bsStyle="pills">
						<Tab eventKey={1} title="主推">
					      <div style={{borderTop:'1px solid red',marginTop:'10px',position:'relative'}}>
		                   <div style={{position:'absolute',right:'0px',top:'-20px',cursor:'pointer'}}>
		                     <Link to="/tours/?select=zhutui">更多产品></Link>
		                   </div>
						   <div className={Styles.allItem}>

		                    { (this.props.loading===false && this.props.error===false) ? 
								this.props.articlesList.cproduct.map((entry,index) => (
		                          <Travelitem key = { entry.id } { ...entry } push={this.props.push}/>
	                        )) : "" }
							
		                     {(this.props.loading ===true) ? <p>加载中。。。</p> : ''}
                            {(this.props.error ===true) ? <p>加载错误</p> : ''}
						   </div>
					      </div>
						</Tab>
						<Tab eventKey={2} title="热销">
						  <div style={{borderTop:'1px solid red',marginTop:'10px',position:'relative'}}>
		                   <div style={{position:'absolute',right:'0px',top:'-20px',cursor:'pointer'}}>
		                    <a onClick={this.handleNavigate.bind(this,"/tours","rexiao")}>更多产品></a>
		                   </div>
						   <div className={Styles.allItem}>
		                  
						   
						   	{ (this.props.loading===false && this.props.error===false) ?  this.props.articlesList.wproduct.map((entry,index) => (
		                          <Travelitem key = { entry.id } { ...entry } push={this.props.push} />
	                        )) : ""}
							
		                     {(this.props.loading ===true) ? <p>加载中。。。</p> : ''}
                            {(this.props.error ===true) ? <p>加载错误</p> : ''}
						   </div>
					      </div>
						</Tab>
					</Tabs>
	      </Travellist>

          
		);
	}
}

Toursproductlist.propTypes={
       children:PropTypes.node,

}


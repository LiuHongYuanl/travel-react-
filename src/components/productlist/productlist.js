import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import * as Styles from './productlist.scss';

export default class Productlist extends Component{
	constructor(props) {
	   super(props);
	   this.handleClickPush=this.handleClickPush.bind(this);
	}

	handleClickPush(e){
	   e.preventDefault();
	 


      let win = window.open(`/buyproduct?id=${this.props.id}`, '_blank');
      win.focus();  

	   //this.props.push({pathname:"/buyproduct",query:{id:this.props.id}});
	}


	render() {
	   return (
		 <div className={Styles.productall} onClick={this.handleClickPush}>
	
		      <Row>
		         <Col sm={3}>
		             <div className={Styles.productleft}>
		               <img src={this.props.imgSrc}/>
		             </div>
		         </Col>
		         <Col sm={6}>
		             <div className={Styles.productcenter}>
		                <p style={{maxHeight:'40px'}} data-hover>
			               <span style={{fontSize:'16px'}}>{this.props.title}</span>
				        </p>

		                <p>
		                   {this.props.destinationStart ? '出发地:' : ''}<span>{this.props.destinationStart || ''}</span>
		                   <span style={{float:'right'}}>{this.props.destinationStart ? '目的地' : '地址'}:<span>{this.props.destinationEnd}</span></span>
		                </p>

		                <p>
		                   {this.props.describe}
		                </p>

		                <p>		                   
							{this.props.timeStart ? '出发时间:' : ''}<span>{this.props.timeStart || ''}</span>
		                    <span style={{float:'right'}}>{this.props.timeStart ? '结束' : ''}时间:<span>{this.props.timeEnd}</span></span>
					    </p>
		             </div>
		         </Col>
		         <Col sm={3}>
		             <div className={Styles.productright}>
						<p>¥
							<span>{this.props.price}</span>
						</p>
					    <p>
							<span>{this.props.preson}</span>
						    次购买
						</p>
						 <p>
							{this.props.total ? '总数' : ''}<span>{this.props.total || ""}</span>
						</p>
					 </div>
		         </Col>
	          </Row>
	    
	     </div>   
	   );
	}

}
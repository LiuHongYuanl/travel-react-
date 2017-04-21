import React, { Component } from 'react';

import Comment from '../components/comment/comment.js';
import * as Styles from './Buyproduct.scss';
import { Grid, Row, Col, Pagination, Carousel, Tabs, Tab, FormGroup, ControlLabel, FormControl, Form ,Modal,Button} from 'react-bootstrap';

import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import  { loadProduct, loadComment }  from './BuyproductRedux'; 

class Buyproduct extends Component{
	constructor(props){
	   super(props);
       this.state={
	      Buynumber:1,
          activePage:1,
		  showModal: false,
		  user:'',
		  email:'',
	   };
	this.handleChangeNumber=this.handleChangeNumber.bind(this);
	this.handleSelect=this.handleSelect.bind(this);
	this.close=this.close.bind(this);
	this.open=this.open.bind(this);
	this.handleChangUE=this.handleChangUE.bind(this);
	}

	handleChangeNumber(e) {
	   let num=e.target.value>0 ? e.target.value : 1;
	   this.setState({
	      Buynumber:num
	   });
	  console.log(this.state.Buynumber);
	}

	  handleSelect(eventKey) {
		this.setState({
		  activePage: eventKey
		});

		   this.props.loadComment("/someproductcomment.json",this.props.id,this.state.activePage);
	  }

	close() {
			this.setState({ showModal: false });
		}

	open() {

			this.setState({ showModal: true });
	    }

   handleChangUE(e) {

		 if(e.target.name === "user"){
			 this.setState({
				user:e.target.value
			 });
		}else if(e.target.name === "email"){
		  	 this.setState({
				email:e.target.value
			 });
		}
			console.log(this.state.user);
		}

   componentDidMount(){
      this.props.loadProduct("/someproduct.json",this.props.id);
	   this.props.loadComment("/someproductcomment.json",this.props.id,this.state.activePage);
	  loadComment
   }


//http://m.tuniucdn.com/filebroker/cdn/olb/43/67/43671520f38d1e3b208b7bb8c7f9eca5_w450_h300_c1_t0_w160_h90_c1_t0.jpg
    render() {
	   return (
		 <div>
		   <div className={Styles.all}>
		     <Grid>
		        <Row>
		          <Col md={12}><h2 style={{marginBottom:'20px',marginTop:'20px'}}>{this.props.someproduct.product.title}</h2></Col>
	            </Row>
		        <Row>
		           <Col md={6}> 
				      <Carousel>
						<Carousel.Item>
						  <img  alt="900x500" style={{maxWidth:'100%',margin:"0 auto"}}  src={this.props.someproduct.product.imgSrc1} />            
						</Carousel.Item>
						<Carousel.Item>
						  <img  alt="900x500" style={{maxWidth:'100%',margin:"0 auto"}} src={this.props.someproduct.product.imgSrc2}/>
						</Carousel.Item>
						<Carousel.Item>
						  <img  alt="900x500" style={{maxWidth:'100%',margin:"0 auto"}}  src={this.props.someproduct.product.imgSrc3} />
						</Carousel.Item>
					  </Carousel>
		           </Col>
		           <Col md={6}>
		             <div className={Styles.productLeft}>
						<p>价格：
		                   <span style={{fontSize:'30px',color:'#f60'}}>￥{this.props.someproduct.product.price}</span>
		                </p>

						<p>购买人数：<span style={{color:'#333'}}>{this.props.someproduct.product.preson}</span>		                   
						<span style={{float:'right'}}>点评人数：<span style={{color:'#333'}}>{this.props.comment.commentproduct.total}</span></span>
						</p>

						<p>
							   {this.props.someproduct.product.destinationStart ? '出发地:' : ''}<span style={{color:'#333'}}>{this.props.someproduct.product.destinationStart || ''}</span>
							   <span style={{float:'right'}}>{this.props.someproduct.product.destinationStart ? '目的地' : '地址'}:<span style={{color:'#333'}}>{this.props.someproduct.product.destinationEnd}</span></span>
						</p>

						<p>		                   
								{this.props.someproduct.product.timeStart ? '出发时间:' : ''}<span style={{color:'#333'}}>{this.props.someproduct.product.timeStart || ''}</span>
								<span style={{float:'right'}}>{this.props.someproduct.product.timeStart ? '结束' : ''}时间:<span style={{color:'#333'}}>{this.props.someproduct.product.timeEnd}</span></span>
						</p>

						<div className={Styles.buy}>
						 <Form>
							<FormGroup controlId="formInlineNamerr">
							  <ControlLabel>购买次数：</ControlLabel>
							  {' '}
							  <FormControl type="number" placeholder="Jane Doe" min = '1' value={this.state.Buynumber} style={{display:'inline-block',width: 'auto'}} onChange={this.handleChangeNumber}/>
							</FormGroup>
						 </Form>
						  
						  <p>总价：<span style={{fontSize:'30px',color:'#f60'}}>￥{this.state.Buynumber*this.props.someproduct.product.price}</span></p>
						  <button onClick={this.open}>立即预定</button>
							    <Modal show={this.state.showModal} onHide={this.close} style={{top: '80px'}}>
								  <Modal.Header closeButton>
									<Modal.Title>{this.props.someproduct.product.title}</Modal.Title>
								  </Modal.Header>
								  <Modal.Body>
									<h4>商品信息</h4>
							        <p>
										   {this.props.someproduct.product.destinationStart ? '出发地:' : ''}<span style={{color:'#333'}}>{this.props.someproduct.product.destinationStart || ''}</span>
										   <span style={{float:'right'}}>{this.props.someproduct.product.destinationStart ? '目的地' : '地址'}:<span style={{color:'#333'}}>{this.props.someproduct.product.destinationEnd}</span></span>
									</p>

									<p>		                   
											{this.props.someproduct.product.timeStart ? '出发时间:' : ''}<span style={{color:'#333'}}>{this.props.someproduct.product.timeStart || ''}</span>
											<span style={{float:'right'}}>{this.props.someproduct.product.timeStart ? '结束' : ''}时间:<span style={{color:'#333'}}>{this.props.someproduct.product.timeEnd}</span></span>
									</p>
															
									 <Form>
										<FormGroup controlId="formInlineNamerr">
										  <ControlLabel>购买次数：</ControlLabel>
										  {' '}
										  <FormControl type="number" placeholder="Jane Doe" min = '1' value={this.state.Buynumber} style={{display:'inline-block',width: 'auto'}} onChange={this.handleChangeNumber}/>
										</FormGroup>
									 </Form>
											  总价：<span style={{fontSize:'30px',color:'#f60'}}>￥{this.state.Buynumber*this.props.someproduct.product.price}</span>
								    


									<h4>个人信息</h4>
									  <Form horizontal>
										<FormGroup controlId="formHorizontalPassword">
										  <Col componentClass={ControlLabel} sm={2}>
											联系电话：
										  </Col>
										  <Col sm={10}>
											<FormControl type="text" name="user" placeholder="联系电话" value={this.state.user} onChange={this.handleChangUE}/>
										  </Col>
										</FormGroup>

										<FormGroup controlId="formHorizontalEmail">
										  <Col componentClass={ControlLabel} sm={2}>
											邮箱
										  </Col>
										  <Col sm={10}>
											<FormControl type="email" name="email" placeholder="邮箱" value={this.state.email} onChange={this.handleChangUE}/>
										  </Col>
										</FormGroup>

										<FormGroup>
										  <Col smOffset={2} sm={10}>
											<Button type="submit">
											 购买
											</Button>
										  </Col>
										</FormGroup>
									  </Form>
								  </Modal.Body>
								  <Modal.Footer>
											联系电话为用户名，邮箱为密码，可登录查看订单
									<Button onClick={this.close}>Close</Button>
								  </Modal.Footer>
								</Modal>
						</div>
				    </div>
	               </Col>
		        </Row>
	         </Grid>
	       </div>
		   <div className={Styles.all}>
				<Tabs defaultActiveKey={1} id="uncontrolled-tab-example" bsStyle="pills">
						<Tab eventKey={1} title="产品介绍">
                             <div style={{margin:'50px 20px'}}>{this.props.someproduct.product.detailed}</div>
						</Tab>
						<Tab eventKey={2} title="游客点评">
						  <div>
		                   {/*this.props.comment.commentItems.map(
							  (entry,index) => {
							     return (<Comment key={entry.id} {...entry}/>);
						        }
							  )*/}

                         { (this.props.comment.loading===false && this.props.comment.error===false&&this.props.comment.commentproduct.commentItems!=null) ? 
								this.props.comment.commentproduct.commentItems.map((entry,index) => (
		                          <Comment key={entry.id} {...entry}/>
	                   )) : "" }
							
		                     {(this.props.comment.loading ===true) ? <p>加载中。。。</p> : ''}
                            {(this.props.comment.error ===true) ? <p>加载错误</p> : ''}

							  <div style={{maxWidth:'482px',margin:'20px auto'}}>
							          <Pagination
										prev
										next
										first
										last
										ellipsis
										boundaryLinks
										items={Math.ceil(this.props.comment.commentproduct.total/5)}
										maxButtons={5}
										activePage={this.state.activePage}
										onSelect={this.handleSelect} />	  
							  </div>
						   </div>
						</Tab>
				</Tabs>			  
		   </div>
	     </div>   
	   );
	}
}


export default connect((state,ownProps) => {
   return {
      someproduct:state.buyproduct.someproduct,
      comment:state.buyproduct.comment,
      id:ownProps.location.query.id,
   };
},
dispatch => {
   return {
      loadProduct:bindActionCreators(loadProduct,dispatch),
	  loadComment:bindActionCreators(loadComment,dispatch),
	  push:bindActionCreators(push,dispatch),
   };
}
)(Buyproduct);
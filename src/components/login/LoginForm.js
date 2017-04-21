import React, { Component,PropTypes } from 'react';
import classnames from 'classnames';
import * as Styles from './_loginForm.scss';
import { Form, FormGroup, Col, FormControl, controllabel, Checkbox, Button, Grid, Row,Label,ListGroup,ListGroupItem } from 'react-bootstrap';

export default class LoginForm extends Component{
  constructor(props) {
     super(props);
	 this.state={
	   Vuser:'',
	   userCheck:null,
	   uErrorText:'',
	   Vpass:'',
	   passCheck:null,
	   pErrorText:'',
	   VIcode:'',
	   IcodeCheck:null,
	   IErrorText:'',
	   check:false,
	 };
    this.handleChange=this.handleChange.bind(this);
	this.handleUserCheck=this.handleUserCheck.bind(this);
	this.handlePassCheck=this.handlePassCheck.bind(this);
	this.handleIcodeCheck=this.handleIcodeCheck.bind(this);
	this.handleFormSubmit=this.handleFormSubmit.bind(this);
  }

  handleChange(e){
	 let value=e.target.name;
	 if(value === 'Vuser'){
       this.setState({Vuser: e.target.value});
     }else if(value === 'Vpass'){
	   this.setState({Vpass: e.target.value});
	 }else if(value === 'VIcode'){
	   this.setState({VIcode: e.target.value});
	 }else if(value === 'check'){
	    this.setState({check: !this.state.check});
	 }
	//console.log( e.target.name);
  }
  
  handleUserCheck() {
      let Vuser=this.state.Vuser.trim();
      this.setState({Vuser});
      let Ulen=Vuser.length; 
	  if(Ulen < 6){
	    this.setState({uErrorText:'用户名不能小于6字符',userCheck:'error'});
	  }else if(Ulen > 12){
	    this.setState({uErrorText:'用户名不能大于12字符',userCheck:'error'});
	  }else{
	     this.setState({uErrorText:'',userCheck:'success'});
	  }
  }

  handlePassCheck() {
	  let Vpass=this.state.Vpass.trim();
      this.setState({Vpass});
      let len=Vpass.length;
	  if(len < 6){
	    this.setState({pErrorText:'密码不能小于6字符',passCheck:'error'});
	  }else if(len > 20){
	    this.setState({pErrorText:'密码不能大于20字符',passCheck:'error'});
	  }else{
	     this.setState({pErrorText:'',passCheck:'success'});
	  }
  }

  handleIcodeCheck() {
	  let VIcode=this.state.VIcode.trim();
      this.setState({VIcode});
	  if(!/^\d{4}$/.test(this.state.VIcode)){
	    this.setState({IErrorText:'验证码是4位数字',IcodeCheck:'error'});
	  }else{
	     this.setState({IErrorText:'',IcodeCheck:'success'});
	  }
  }

  handleFormSubmit(e) {
	  
     if(this.state.userCheck === 'success' && this.state.passCheck === 'success' && this.state.IcodeCheck === 'success'){
	     //return true;
       //submit();
	 }else{
	 //  return false;
	  // alert('d');
      this.handleUserCheck();
	  this.handlePassCheck();
	  this.handleIcodeCheck();
	  e.preventDefault();
	 }
  }

/* allCheck(e) {
   let value=e.target.name;
   let Ulen=this.state.Vuser.length;
   let Plen=this.state.Vpass.length;
   let Ilen=this.state.VIcode.length;
   if(value === 'Vuser' && Ulen <= 0){
       this.setState({Vuser: e.target.value});
     }else if(value === 'Vpass'){
	   this.setState({Vpass: e.target.value});
	 }else if(value === 'VIcode'){
	   this.setState({VIcode: e.target.value});
	 }
 }*/

  //return (<div>登陆</div>);
  render() {
	 // console.log(Styles);
     const { className, ...others } = this.props; 

	  return (
	    <div {...others} className={
	       classnames(
			   Styles.loginF,
			   className
        )}>
		  <div><h3>账号登陆</h3></div>
		  <Form horizontal onSubmit={this.handleFormSubmit}>
		          <div className={Styles.tooltip}>
                   <span>
		            <Label bsStyle="danger">
                     {this.state.uErrorText}
                    </Label>
                   </span>
				   <span>
	                <Label bsStyle="danger">
                      {this.state.pErrorText}
                    </Label>
	               </span>
				   <span>
		  	         <Label bsStyle="danger">
                      {this.state.IErrorText}
                     </Label>
                   </span>
				  </div>
           

			<FormGroup controlId="formhorizontalemail" validationState={this.state.userCheck}>
			  <Col componentClass={controllabel} sm={2}>
				用户名:
			  </Col>
			  <Col sm={9}>
				<FormControl type="text" value={this.state.Vuser} name="Vuser" onChange={this.handleChange} placeholder="手机号/昵称" onBlur={this.handleUserCheck}/>
		        <FormControl.Feedback />
			  </Col>
			</FormGroup>

			<FormGroup controlId="formhorizontalpassword" validationState={this.state.passCheck}>
			  <Col componentClass={controllabel} sm={2}>
				密码:
			  </Col>
			  <Col sm={9}>
				<FormControl type="password" name="Vpass" value={this.state.Vpass} onChange={this.handleChange} onBlur={this.handlePassCheck} placeholder="密码" />
				<FormControl.Feedback />
			  </Col>
			</FormGroup>

			<FormGroup controlId="formhorizontalcode" validationState={this.state.IcodeCheck}>
			  <Col componentClass={controllabel} sm={2}>
				验证码:
			  </Col>
			  <Col sm={5}>
				<FormControl type="text" name="VIcode" value={this.state.VIcode} onChange={this.handleChange} onBlur={this.handleIcodeCheck} placeholder="验证码" />
				<FormControl.Feedback />
			  </Col>
			  <Col sm={5}><img src="data:image/gif;base64,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" id="imgCode" alt="" width="104px"/></Col>
			</FormGroup>

			<FormGroup>
			  <Col smOffset={2} sm={10}>
				<Checkbox checked={this.state.check} onChange={this.handleChange} name="check"> 两周内自动登录</Checkbox>
			  </Col>
			</FormGroup>

			<FormGroup>
			  <Col smOffset={2} sm={10}>
				<Button type="submit">
				  登陆
				</Button>
			  </Col>
			</FormGroup>
		  </Form>
          <div className={Styles.Ffooter}>
				<span><a>忘记密码</a></span>
				<span><a>立即注册</a></span>
		  </div>
	    </div>
	);
  }
}

LoginForm.propTypes={
  className:PropTypes.string,
}
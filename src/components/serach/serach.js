import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { FormGroup, InputGroup, FormControl, Glyphicon, Button} from 'react-bootstrap';
import * as Styles from './serach.scss';
import Hoverdown from '../hoverdown/hoverdown';
import Logo from '../logo/logo.js';




export default class Search extends Component{
	constructor(props){
	  super(props);
	  this.state={
	    search:'',
		Searchselect:'all',
		SearchselectName:'全部',
	    scrolltop:{}
	  }

	  this.handleSearch=this.handleSearch.bind(this);
	  this.handleSearchselect=this.handleSearchselect.bind(this);
	}

	componentDidMount(){
	  /* window.onscroll=() => {
	      let scrolltop=document.documentElement.scrollTop||document.body.scrollTop;
		  if(scrolltop > 30){
              console.log(this.setState);
		     this.setState({ scrolltop:{ position:'fixed',left:'0',top:'0'} });
		  }else{
		     this.setState({ scrolltop:{ position:'relative'} });
		  }
	   }*/
       window.addEventListener("scroll",() => {
	      let scrolltop=document.documentElement.scrollTop||document.body.scrollTop;
		  if(scrolltop > 30){
             // console.log(this.setState);
		     this.setState({ scrolltop:{ position:'fixed',left:'0',top:'0',zIndex:'10000'} });
		  }else{
		     this.setState({ scrolltop:{ position:'relative'} });
		  }

	});}

	componentWillUnMount(){
       window.removeEventListener("scroll");
	}

	handleSearch(e) {
	   this.setState({
	      search:e.target.value
	   });
		 // alert(e.target.value);
	}
   handleSearchselect(e){
     if(this.state.Searchselect !== e.target.getAttribute('data-Searchselect')){
     this.setState({Searchselect:e.target.getAttribute('data-Searchselect'),SearchselectName:e.target.innerHTML});
    }
   }
	render() {
	     let name=this.state.SearchselectName;
		 let chengshiClass=classnames({
		   'Searchselect':this.state.Searchselect==='chengshi'
		 });
		let jingdianClass=classnames({
		   'Searchselect':this.state.Searchselect==='jingdian'
		 });
		 let jiudianClass=classnames({
		   'Searchselect':this.state.Searchselect==='jiudian'
		 });
		 let tuanClass=classnames({
		   'Searchselect':this.state.Searchselect==='tuan'
		 });
		 let allClass=classnames({
		   'Searchselect':this.state.Searchselect==='all'
		 });
	   return (
		   <div style={{height:'100px',width:'100%'}}>
		 <div className={Styles.allSearch} style={{...this.state.scrolltop,width:'100%'}}>
		   <div className={Styles.leftLogo}><Logo /></div>
		   <div className={Styles.allSearchSelect}>
		   <div className={Styles.rightSelect}>
		     <Hoverdown title={<span style={{marginLeft:'16px'}}>{name}</span>} top="40px" left="12px" width="82px" icon_top_up='15px' icon_left='75px' icon_left_down='21px'>
                <div className={Styles.rightSelectHover}>
		           <li data-Searchselect='chengshi' className={Styles[chengshiClass]} onClick={this.handleSearchselect}>城市</li>
		           <li data-Searchselect='jingdian' className={Styles[jingdianClass]}  onClick={this.handleSearchselect}>景点</li>
		           <li data-Searchselect='jiudian' className={Styles[jiudianClass]}  onClick={this.handleSearchselect}>酒店</li>
		           <li data-Searchselect='tuan' className={Styles[tuanClass]}  onClick={this.handleSearchselect}>更团游</li>
		           <li data-Searchselect='all' className={Styles[allClass]}  onClick={this.handleSearchselect}>全部</li>
		        </div>
		     </Hoverdown>
		   </div>

		   <div className={Styles.rightSearch}>
		     <FormGroup bsSize="large">
			  <InputGroup>
				<FormControl type="text" value={this.state.search} onChange={this.handleSearch} placeholder="go to you want to go" />
				<InputGroup.Button>
                     <Button bsSize="large">
				        <Glyphicon glyph="search" />
				     </Button>
                </InputGroup.Button>
		       </InputGroup>
			 </FormGroup>
	       </div> 

		   </div>
	     </div>  
		   </div>
	   );
	}

}
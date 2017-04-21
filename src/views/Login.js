import React from 'react';
import LoginForm from '../components/login/LoginForm';
import Logo from '../components/logo/logo';
import Footer from '../components/footer/footer';
import * as Styles from './Login.scss';

export default function Login(){
  return (	
    <div>
	  <Logo />
      <div className={Styles.loginBody}>
         <LoginForm className= { Styles.formBy }/>
	  </div>
      <Footer />
    </div>  
  );
}
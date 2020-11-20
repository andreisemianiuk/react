import React from "react";
import s from "../Common/FormControls/FormControls.module.css"
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormControls/FormControls";
import {maxLength15, maxLength50, minLength5, required} from "../../Utilites/validators/validators";
import {Redirect} from "react-router-dom";

let LoginForm = (props) => {
  return (
   <form onSubmit={props.handleSubmit}>
     <div>
       <Field component={Input} validate={[required, maxLength50]} placeholder={'Email'} name={'email'} />
     </div>
     <div>
       <Field component={Input} validate={[required, maxLength15, minLength5]}
              placeholder={'Password'} name={'password'} type="password"/>
     </div>
     <div>
       <Field type={'checkbox'} name={'rememberMe'} component={'input'}/>remember me
     </div>
     <div>
       <button>Submit</button>
     </div>
     {props.error &&
       <div className={s.formAuthError}>
         {props.error}
       </div>
     }
   </form>
  )
}

LoginForm = reduxForm({
  form: 'login'
})(LoginForm)


const Login = (props) => {
  const submit = formData => {
    props.login(formData.email, formData.password, formData.rememberMe);
  }
  if (props.isAuth) {
    return <Redirect to="/profile"/>
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={submit}/>
    </div>
  )
}


export default Login;
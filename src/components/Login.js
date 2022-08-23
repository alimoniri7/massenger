import React from 'react';

//formik
import { useFormik } from 'formik';

//router dom
import { Link } from 'react-router-dom'

//styles
import styles from './signUp.module.scss'

//authentication
import {  signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase';

//components
import GoogleButton from './shared/GoogleButton';




// Validate form
const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if(!values.password){
    errors.password = 'Password is required'
  }else if (!/^(?=.*\d{1})(?=.*[a-z]{1})(?=.*[A-Z]{1})[a-zA-Z0-9]{8,24}$/.test(values.password)){
    errors.password = 'Invalid Password'
  }


  return errors;
};



// login

const login = (values) =>{
    console.log(values);
    signInWithEmailAndPassword(auth , values.email , values.password )
        .catch(err => alert(err))
}

const Login = () => {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: login,
  });





  // console.log(formik.touched);
  // console.log(formik.values);
  return (
    <div className={styles.viewport} >
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Login </h2>
          <span>ChitChat</span>
        </div>
        <form onSubmit={formik.handleSubmit} className={styles.formContainer}>

          <div className={styles.inputContainer}>
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onKeyUp={formik.handleBlur}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className={formik.touched.email && formik.errors.email ? styles.inputDanger : styles.inputNormal}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className={styles.error}>{formik.errors.email}</div>
              ) : null}
          </div>

          <div className={styles.inputContainer}>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                onKeyUp={formik.handleBlur}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className={formik.touched.password && formik.errors.password ? styles.inputDanger : styles.inputNormal}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className={styles.error}>{formik.errors.password}</div>
              ) : null}
          </div>


          <div className={styles.buttons} >
              <Link to='/signup' >SignUp</Link>
              <button type="submit">Submit</button>
          </div>
        </form>

        <div className={styles.line} ></div>

        <GoogleButton/>
      </div>
    </div>
  );
};
export default Login;
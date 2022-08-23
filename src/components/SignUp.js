import React  from 'react';

//formik
import { useFormik } from 'formik';

//router dom
import { Link } from 'react-router-dom'

//styles
import styles from './signUp.module.scss'

//authentication
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase';
import GoogleButton from './shared/GoogleButton';



// Validate form
const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Name is required';
  }

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if(!values.password){
    errors.password = 'Password is required'
  }else if (!/^(?=.*\d{1})(?=.*[a-z]{1})(?=.*[A-Z]{1})[a-zA-Z0-9]{8,24}$/.test(values.password)){
    errors.password = <ul>
      <li>Most be at least 8 characters</li>
      <li>Most contains UpperCase & LowerCase letters</li>
      <li>Most contains numbers</li>
    </ul>
  }

  if(!values.confirmPassword){
    errors.confirmPassword = 'confimation is required'
  }else if(values.confirmPassword !== values.password){
    errors.confirmPassword = 'Password does not match!'
  }

  return errors;
};



// signup
const signup = (values) =>{
    createUserWithEmailAndPassword(auth , values.email , values.password)
      .catch(error => {
        alert(error.message)
      })
}




const SignUp = () => {

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validate,
    onSubmit: signup,
  });

  // console.log(formik.touched);
  // console.log(formik.values);
  return (
    <div className={styles.viewport} >
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Sign in </h2>
          <span>ChitChat</span>
        </div>
        <form onSubmit={formik.handleSubmit} className={styles.formContainer}>
          <div className={styles.inputContainer}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onKeyUp={formik.handleBlur}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className={formik.touched.name && formik.errors.name ? styles.inputDanger : styles.inputNormal}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className={styles.error} >{formik.errors.name}</div>
              ) : null}
          </div>

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

          <div className={styles.inputContainer}>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                onChange={formik.handleChange}
                onKeyUp={formik.handleBlur}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
                className={formik.touched.confirmPassword && formik.errors.confirmPassword ? styles.inputDanger : styles.inputNormal}
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                <div className={styles.error}>{formik.errors.confirmPassword}</div>
              ) : null}
          </div>
          <div className={styles.buttons} >
              <Link to='/login' >Login</Link>
              <button type="submit">Submit</button>
          </div>
        </form>

        <div className={styles.line} ></div>

        <GoogleButton/>
      </div>
    </div>
  );
};
export default SignUp;
import React from 'react';

//formik
import { useFormik } from 'formik';

//router dom
import { Link } from 'react-router-dom'

//styles
import styles from './signUp.module.scss'

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

const SignUp = () => {

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
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

        <div>
            <button to='/login' className={styles.google} ><svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
  <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
    <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"/>
    <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"/>
    <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"/>
    <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"/>
  </g>
</svg> SignUp with Google</button>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
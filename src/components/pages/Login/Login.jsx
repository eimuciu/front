import { useState } from 'react';
import css from './Login.module.scss';
import { BigHeader } from '../../atoms/Header/Header';
import Input from '../../atoms/Input/Input';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FormButton } from '../../atoms/Button/Button';

const objShape = {
  email: '',
  password: '',
};

const loginValues = {
  email: '',
  password: '',
};

const registerValues = {
  email: '',
  password: '',
  confirmpassword: '',
};

const loginValidation = Yup.object({
  email: Yup.string()
    .email('Email must be a valid email')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});

const registerValidation = Yup.object({
  email: Yup.string()
    .email('Email must be a valid email')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  confirmpassword: Yup.string()
    .required('Confirm password is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

function Login() {
  const [pageState, setPageState] = useState('login');

  const formik = useFormik({
    initialValues: pageState === 'login' ? loginValues : registerValues,
    validationSchema:
      pageState === 'login' ? loginValidation : registerValidation,
    validateOnBlur: true,
    validateOnChange: false,
    onSubmit: async (values, actions) => {
      alert(JSON.stringify(values));
      //   setIsLoading(true);
      //   const datadetails = await postDataToServer(values);
      //   if (datadetails.err) {
      //     makeMessage(datadetails.err, 'error');
      //     setIsLoading(false);
      //     return;
      //   }
      //   setIsLoading(false);
      //   makeMessage(datadetails.msg, 'success');
      actions.resetForm();
    },
  });

  const switchState = () => {
    if (pageState === 'login') {
      setPageState('register');
    }
    if (pageState === 'register') {
      setPageState('login');
    }
  };

  return (
    <div className={css.main}>
      <span>
        <BigHeader text={pageState === 'login' ? 'Login' : 'Register'} />
      </span>
      <form onSubmit={formik.handleSubmit}>
        <Input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          name="email"
          type="text"
          placeholder="Email"
          error={formik.touched.email && formik.errors.email}
        />
        <Input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          name="password"
          type="password"
          placeholder="Password"
          error={formik.touched.password && formik.errors.password}
        />
        {pageState === 'register' && (
          <Input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.repeatepassword}
            name="confirmpassword"
            type="password"
            placeholder="Confirm password"
            error={
              formik.touched.confirmpassword && formik.errors.confirmpassword
            }
          />
        )}
        {pageState === 'login' && <FormButton type="submit">Login</FormButton>}
        {pageState === 'register' && (
          <FormButton type="submit">Register</FormButton>
        )}
      </form>
      {pageState === 'login' && (
        <p>
          Do not have an account? Register{' '}
          <span onClick={switchState} role="button">
            here
          </span>
        </p>
      )}
      {pageState === 'register' && (
        <p>
          Login{' '}
          <span onClick={switchState} role="button">
            here
          </span>
        </p>
      )}
    </div>
  );
}

export default Login;

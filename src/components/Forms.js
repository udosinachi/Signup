import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import './Forms.css'

const Forms = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      password: '',
      retypePassword: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('The First name is required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('The Last name is required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      phoneNumber: Yup.number()
        .required('The phone field is required')
        .min(7)
        .integer('No decimals'),
      password: Yup.string().required('Password is required'),
      retypePassword: Yup.string().oneOf(
        [Yup.ref('password'), null],
        'Password must match'
      ),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })
  return (
    <div className='main-div'>
      <div className='div1'>
        <form onSubmit={formik.handleSubmit} className='theform'>
          <div className='logo-div'>
            <img src='/assets/paylogo2.png' alt='logo' className='logo' />
          </div>
          <div className='head'>
            <h2>Create your account</h2>
            <p className='p1'>
              Already have an account? <a href='gh'>Login</a>
            </p>
          </div>
          <div className='names'>
            <label>
              <input
                id='firstName'
                name='firstName'
                type='text'
                placeholder='First Name'
                className='input1'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div>{formik.errors.firstName}</div>
              ) : null}
            </label>

            <label>
              <input
                id='lastName'
                name='lastName'
                type='text'
                placeholder='Last Name'
                className='input2'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div>{formik.errors.lastName}</div>
              ) : null}
            </label>
          </div>

          <div className='d1'>
            <label>
              <input
                id='email'
                name='email'
                type='email'
                placeholder='Email Address'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null}
            </label>
          </div>

          <div className='d1'>
            <label>
              <input
                id='phoneNumber'
                name='phoneNumber'
                type='number'
                placeholder='Phone Number'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phoneNumber}
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <div>{formik.errors.phoneNumber}</div>
              ) : null}
            </label>
          </div>

          <div className='d1'>
            <label>
              <input
                id='password'
                name='password'
                type='string'
                placeholder='Password'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
              ) : null}
            </label>
          </div>

          <div className='d1'>
            <label>
              <input
                id='retypePassword'
                name='retypePassword'
                type='string'
                placeholder='Retype Password'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.retypePassword}
              />
              {formik.touched.retypePassword && formik.errors.retypePassword ? (
                <div>{formik.errors.retypePassword}</div>
              ) : null}
            </label>
          </div>

          <div className='check'>
            <input type='checkbox' className='checkbox' /> I have read the
            <a href='ff'>terms and conditions</a>
          </div>
          <h4>Forgot password?</h4>

          <div className='butt-div'>
            <button type='submit' className='butt'>
              Create account
            </button>
          </div>
        </form>
      </div>
      <div className='div2'>
        <div>
          <img
            src='/assets/polymath.jpeg'
            alt='polymath'
            className='second-image'
          />
        </div>

        {/* <div className='sub-div2'>
          <img src='/assets/yellow.png' alt='yellow' className='yellow-ball' />
          <p>
            Buying land from buildbay is the best decision knowing i don’t have
            to worry about omo onile situations.
          </p>
          <img src='/assets/tacha.png' alt='tacha' />
          <p>Tacha Ex-Big brother naija and brand ambassador</p>
          <p>
            I invest with buildbay with peace of mind knowing my money is
            secured.
          </p>
        </div> */}
      </div>
    </div>
  )
}

export default Forms

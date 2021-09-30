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
        .required('The First name field is required'),
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
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor='firstName'>First Name</label>
          <input
            id='firstName'
            name='firstName'
            type='text'
            placeholder='Placeholder'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div>{formik.errors.firstName}</div>
          ) : null}

          <label htmlFor='lastName'>Last Name</label>
          <input
            id='lastName'
            name='lastName'
            type='text'
            placeholder='Placeholder'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div>{formik.errors.lastName}</div>
          ) : null}

          <label htmlFor='email'>Email Address</label>
          <input
            id='email'
            name='email'
            type='email'
            placeholder='Placeholder'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}

          <label htmlFor='phoneNumber'>Phone Number</label>
          <input
            id='phoneNumber'
            name='phoneNumber'
            type='number'
            placeholder='Placeholder'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNumber}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <div>{formik.errors.phoneNumber}</div>
          ) : null}

          <label htmlFor='password'>Password</label>
          <input
            id='password'
            name='password'
            type='string'
            placeholder='Placeholder'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}

          <label htmlFor='retypePassword'>Retype Password</label>
          <input
            id='retypePassword'
            name='retypePassword'
            type='string'
            placeholder='Placeholder'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.retypePassword}
          />
          {formik.touched.retypePassword && formik.errors.retypePassword ? (
            <div>{formik.errors.retypePassword}</div>
          ) : null}

          <button type='submit'>Submit</button>
        </form>
      </div>
      <div className='div2'>
        <img src='/assets/tacha.png' alt='tacha' />
      </div>
    </div>
  )
}

export default Forms

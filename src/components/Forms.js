import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Loading from './loader'
import './Forms.css'

const Forms = () => {
  const [mode, setMode] = useState('password')
  const [loading, setLoading] = useState(false)
  const [check, setCheck] = useState(false)

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
      email: Yup.string()
        .email('Invalid email address')
        .required('An Email is required'),
      phoneNumber: Yup.number().required('The phone field is required').min(7),
      password: Yup.string().required('Password is required'),
      retypePassword: Yup.string().oneOf(
        [Yup.ref('password'), null],
        'Password must match'
      ),
    }),
    onSubmit: (values, { resetForm }) => {
      setLoading(false)
      const data = {
        firstName: values.firstName,
        lastName: values.lastName,
        phoneNumber: values.phoneNumber,
        email: values.email,
        password: values.password,
      }
      setLoading(true)
      console.log(data)
      axios
        .post('https://polymathng.herokuapp.com/auth/users/register', data)
        .then((res) => {
          setLoading(false)
          console.log(res.data)
          toast.success('Registration successful')
          resetForm({ values: '' })
        })
        .catch((err) => {
          console.log('err')
          setLoading(false)
          toast.error('Sorry something went wrong')
        })
    },
  })

  const eyeClick = () => {
    if (mode === 'password') {
      setMode('text')
    } else {
      setMode('password')
    }
  }

  return (
    <div className='main-div'>
      <div className='div1'>
        <form onSubmit={formik.handleSubmit} className='theform'>
          <div className='logo-div'>
            <img src='/assets/paylogo2.png' alt='logo' className='logo' />
          </div>
          <div className='head'>
            <h2>Create your account </h2> <span></span>
            <p className='p1'>
              Already have an account? <a href='gh'>Login</a>
            </p>
          </div>
          <div className='names'>
            <div className='name1'>
              <label>
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className='label2'>
                    <span className='x'>&#x2A3B;</span>
                    <input
                      id='firstName'
                      name='firstName'
                      type='text'
                      placeholder='First Name'
                      className='inputerror'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.firstName}
                    />{' '}
                    <div className='error'>{formik.errors.firstName}</div>
                  </div>
                ) : (
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
                )}
              </label>
            </div>
            <ToastContainer />
            <div className='name2'>
              <label>
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className='label2'>
                    <input
                      id='lastName'
                      name='lastName'
                      type='text'
                      placeholder='Last Name'
                      className='inputerror2'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.lastName}
                    />
                    <span className='x1'>&#x2A3B;</span>

                    <div className='error'>{formik.errors.lastName}</div>
                  </div>
                ) : (
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
                )}
              </label>
            </div>
          </div>

          <div className='d1'>
            <label>
              {formik.touched.email && formik.errors.email ? (
                <div className='label2'>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    placeholder='Email Address'
                    className='inputerror2'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  <span className='x2'>&#x2A3B;</span>
                  <div className='error'>{formik.errors.email}</div>
                </div>
              ) : (
                <input
                  id='email'
                  name='email'
                  type='email'
                  placeholder='Email Address'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
              )}
            </label>
          </div>

          <div className='d1'>
            <label>
              {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <div className='label2'>
                  <input
                    id='phoneNumber'
                    name='phoneNumber'
                    type='number'
                    placeholder='Phone Number'
                    className='inputerror2'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phoneNumber}
                  />
                  <span className='x2'>&#x2A3B;</span>
                  <div className='error'>{formik.errors.phoneNumber}</div>
                </div>
              ) : (
                <input
                  id='phoneNumber'
                  name='phoneNumber'
                  type='number'
                  placeholder='Phone Number'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phoneNumber}
                />
              )}
            </label>
          </div>

          <div className='d1'>
            <label>
              {formik.touched.password && formik.errors.password ? (
                <div className='label2'>
                  <input
                    id='password'
                    name='password'
                    type={mode}
                    placeholder='Password'
                    className='inputerror2'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                  {mode === 'password' ? (
                    <>
                      <span className='x3' onClick={eyeClick}>
                        <i className='fa fa-eye' aria-hidden='true'></i>
                      </span>
                      <div className='error'>{formik.errors.password}</div>
                    </>
                  ) : (
                    <>
                      {' '}
                      <span className='x3' onClick={eyeClick}>
                        <i className='fa fa-eye-slash' aria-hidden='true'></i>
                      </span>
                      <div className='error'>{formik.errors.password}</div>
                    </>
                  )}
                </div>
              ) : (
                <div className='label2'>
                  <input
                    id='password'
                    name='password'
                    type={mode}
                    placeholder='Password'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />

                  {mode === 'password' ? (
                    <>
                      <span className='x4' onClick={eyeClick}>
                        <i className='fa fa-eye' aria-hidden='true'></i>
                      </span>
                    </>
                  ) : (
                    <>
                      {' '}
                      <span className='x4' onClick={eyeClick}>
                        <i className='fa fa-eye-slash' aria-hidden='true'></i>
                      </span>
                    </>
                  )}
                </div>
              )}
            </label>
          </div>

          <div className='d1'>
            <label>
              {formik.touched.retypePassword && formik.errors.retypePassword ? (
                <div className='label2'>
                  <input
                    id='retypePassword'
                    name='retypePassword'
                    type={mode}
                    placeholder='Retype Password'
                    className='inputerror2'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.retypePassword}
                  />
                  {mode === 'password' ? (
                    <>
                      <span className='x3' onClick={eyeClick}>
                        <i className='fa fa-eye' aria-hidden='true'></i>
                      </span>
                      <div className='error'>{formik.errors.password}</div>
                    </>
                  ) : (
                    <>
                      {' '}
                      <span className='x3' onClick={eyeClick}>
                        <i className='fa fa-eye-slash' aria-hidden='true'></i>
                      </span>
                      <div className='error'>{formik.errors.password}</div>
                    </>
                  )}
                </div>
              ) : (
                <div className='label2'>
                  <input
                    id='retypePassword'
                    name='retypePassword'
                    type={mode}
                    placeholder='Retype Password'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.retypePassword}
                  />
                  {mode === 'password' ? (
                    <>
                      <span className='x4' onClick={eyeClick}>
                        <i className='fa fa-eye' aria-hidden='true'></i>
                      </span>
                    </>
                  ) : (
                    <>
                      {' '}
                      <span className='x4' onClick={eyeClick}>
                        <i className='fa fa-eye-slash' aria-hidden='true'></i>
                      </span>
                    </>
                  )}
                </div>
              )}
            </label>
          </div>

          <div className='check'>
            <p>
              <input
                type='checkbox'
                className='checkbox'
                checked={check}
                onChange={() => {
                  setCheck(!check)
                }}
              />{' '}
              I have read the
              <a href='ff'> terms and conditions</a>
            </p>
          </div>
          <h4>Forgot password?</h4>

          <div className='butt-div'>
            <button type='submit' className='butt' disabled={check === false}>
              {loading ? <Loading color={'white'} /> : 'Register'}
            </button>
          </div>
        </form>
      </div>
      <div className='div2'>
        <div className='div3'>
          {/* <img
            src='/assets/polymath.jpeg'
            alt='polymath'
            className='second-image'
          /> */}
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

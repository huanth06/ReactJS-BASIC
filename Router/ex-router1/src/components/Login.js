import React from 'react'
import {Field, Form, Formik} from 'formik'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  let navigate = useNavigate();
  return (
    <>
      <Formik 
        initialValues={
          {
            email: '',
            password: ''
          }
        }
        onSubmit={values=>{
          if(values.email === 'admin@gmail.com' && values.password==='letmein'){
            alert("Loged in successfully!");
            navigate('/home');
          }
        }}
      >
        <Form>
          <Field name={'email'} placeholder={'Email'}></Field>
          <Field name={'password'} placeholder={'Password'}></Field>
          <button type="">Login</button>
        </Form>
      </Formik>
    </>
  )
}

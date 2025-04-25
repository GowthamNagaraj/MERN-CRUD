import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import './AadharForm.css'
import { AadharNumber } from '../../Tools/RandomAadharNumber'

const initialValues = {
    firstname:'',
    lastname:'',
    email:'',
    gender:'',
    address:'',
    phone:'',
    aadharno:0,
    dob:'',
}

const AadharForm = () => {
    const formik = useFormik({
        initialValues,
        validationSchema: Yup.object({
            firstname: Yup.string().required("Required"),
            lastname: Yup.string().required("Required"),
            email: Yup.string().required("Required").email("Invalid Email").matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/,'Invalid Email'),
            gender: Yup.string().required("Required"),
            address: Yup.string().required("Required"),
            phone: Yup.string().min(6,"Please check your contact number").max(10,"your contact number is above 10").required("Required"),
            dob: Yup.string().required("Required"),
        }),
        onSubmit: values => {
            values.aadharno = AadharNumber();
            console.log(JSON.stringify(values,null,2));
        }
    })


  return (
    <div className='form'>
        <h2><span>Aadhar</span> Form</h2>
        <form onSubmit={formik.handleSubmit}>
            <div className="inputs">
                <label htmlFor="firstname">First Name</label>
                <input 
                    id='firstname'
                    name='firstname'
                    type="text" 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstname}
                />
                {
                    formik.touched.firstname && formik.errors.firstname ? 
                    (<span className='error'>{formik.errors.firstname}</span>) : null
                }
            </div>
            <div className="inputs">
                <label htmlFor="lastname">Last Name</label>
                <input 
                    id='lastname'
                    name='lastname'
                    type="text" 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastname}
                />
                {
                    formik.touched.lastname && formik.errors.lastname ? 
                    (<span className='error'>{formik.errors.lastname}</span>) : null
                }
            </div>
            <div className="inputs">
                <label htmlFor="email">Email</label>
                <input 
                    id='email'
                    name='email'
                    type="text" 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {
                    formik.touched.email && formik.errors.email ? 
                    (<span className='error'>{formik.errors.email}</span>) : null
                }
            </div>
            <div className="inputs">
                <label htmlFor="gender">Gender</label>
                <select 
                    name="gender" 
                    id="gender"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.gender}
                >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                </select>
                {
                    formik.touched.gender && formik.errors.gender ? 
                    (<span className='error'>{formik.errors.gender}</span>) : null
                }
            </div>
            <div className="inputs">
                <label htmlFor="address">Address</label>
                <input 
                    id='address'
                    name='address'
                    type="text" 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.address}
                />
                {
                    formik.touched.address && formik.errors.address ? 
                    (<span className='error'>{formik.errors.address}</span>) : null
                }
            </div>
            <div className="inputs">
                <label htmlFor="phone">Phone</label>
                <input 
                    id='phone'
                    name='phone'
                    type="number" 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                />
                {
                    formik.touched.phone && formik.errors.phone ? 
                    (<span className='error'>{formik.errors.phone}</span>) : null
                }
            </div>
            <div className="inputs">
                <label htmlFor="dob">DOB</label>
                <input 
                    id='dob'
                    name='dob'
                    type="date" 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.dob}
                />
                {
                    formik.touched.dob && formik.errors.dob ? 
                    (<span className='error'>{formik.errors.dob}</span>) : null
                }
            </div>
            <div className="button_section">
                <button type='submit'>Submit</button>
                <button type='reset'>Cancel</button>
            </div>
        </form>
    </div>
  )
}

export default AadharForm

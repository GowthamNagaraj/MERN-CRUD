import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import './AadharForm.css'
import { AadharNumber } from '../../Tools/RandomAadharNumber'
import AadharServices from '../../Services/Services'
import { Link, useNavigate, useParams } from 'react-router-dom'

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

    const Services = new AadharServices

    const navigate = useNavigate()

    const {id} = useParams()

    const [btnName, setBtnName] = useState("Submit")
    useEffect(()=>{
        editdata();
    },[0])

    async function editdata(){
        try {
            Services.editData(id)
            .then(res => {
                const data = res.data.result
                // console.log(data);
                formik.setValues(data)
                if(!id){
                    setBtnName("Submit")
                }else{
                    setBtnName("Update")
                }
            })
            .catch(err => {
                console.log(err);
            })
        } catch (error) {
            console.log(error);
            
        }
    }
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
        onSubmit: async (values) => {
            values.aadharno = AadharNumber();
            if(btnName !== "Update"){
                await Services.postData(JSON.stringify(values, null, 2))
                    .then(res => {
                        if (res.data.status === 200) {
                            navigate("/AadharTable")
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    });    
            }else{
                delete values._id
                await Services.updateData(id,JSON.stringify(values, null, 2))
                    .then(res => {
                        if (res.data.status === 200) {
                            navigate("/AadharTable")
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
            
            // console.log(JSON.stringify(values,null,2));
        }
    })

    const handleCancel = () => {
        if(!id){
            formik.setValues(initialValues)
        }else{
            formik.setValues(initialValues)
            navigate("/AadharTable")
        }
    }


  return (
    <div className="box">
        <Link to={'/AadharTable'} className='backtoTable'>Back to Table</Link>
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
                <button type='submit'>{btnName}</button>
                <button type='reset' onClick={handleCancel}>Cancel</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default AadharForm

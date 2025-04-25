import React, { useEffect, useState } from 'react'
import AadharServices from '../../Services/Services';
import './AadharTable.css'
import { Link, useNavigate } from 'react-router-dom';
const AadharTable = () => {
  const [data,setData] = useState([])
  const service = new AadharServices;
  const navigate = useNavigate()

  useEffect(()=>{
    getAadhar();
  },[])

  async function getAadhar() {
    try {
        await service.getAll()
        .then(response => {
          const data = response.data.result;
          const res = [];

          data.map((item)=>{
            let date = item.dob.split("-");
            date = `${date[2]}-${date[1]}-${date[0]}`
            item.dob = date
            res.push(item)
          })
          
          setData(res)
        }).catch((err)=> {
          console.log(err);
        })
    } catch (error) {
        console.log(error);
        
    }
  }

  async function editAadhar(id) {
    console.log(id);
    
    try {
        navigate(`/AadharForm/${id}`)
    } catch (error) {
        console.log(error);
        
    }
  }

  async function deleteAadhar(id) {
    console.log(id);
    const action = confirm("Are you sure want to delete ?");

    try {
        if(action){
          await service.deleteData(id)
            .then(res => {
              console.log(res);
              getAadhar();
            })
            .catch(err => {
              console.log(err);

            })
        }
    } catch (error) {
        console.log(error);
        
    }
  }

  return (
    <div>
      <div className="top">
        <Link className='add' to={'/AadharForm'}>Add to Aadhar</Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Aadhar no</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Address</th>
            <th>DOB</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item,i)=>(
              <tr key={i} id={item._id}>
                <td>{i+1}</td>
                <td>{item.aadharno}</td>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.gender}</td>
                <td>{item.address}</td>
                <td>{item.dob}</td>
                <td>
                  <div className="actbtns">
                  <button className='edit' onClick={()=>{editAadhar(item._id)}}>Edit</button>
                  <button className='delete' onClick={()=>{deleteAadhar(item._id)}}>Delete</button>
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default AadharTable

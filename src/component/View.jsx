import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Nav from './Nav'

const View = () => {


    const [data,changeData]=useState([])
    const fetchData=()=>{

        axios.get("").then(
           
            (response)=>{
                    console.log(response.data)

                changeData(response.data)
            }
        ).catch()
    }
   useEffect(() => {
    fetchData()
}, [])
  return (
    <div>
        <Nav />
         <div className="container">
                <div className="row">
                    <div className="col-12">

                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>volunteer_id</th>
                                    <th>fullname</th>
                                    <th>email</th>
                                    <th>phone</th>
                                    <th>dob </th>
                                    <th>gender</th>
                                    <th>blood</th>
                                    <th>dep</th>
                                    <th>year</th>
                                    <th>camp</th>
                                    <th>hour</th>
                                    <th>address</th>
                                    <th>unit</th>
                                </tr>
                            </thead>

                            <tbody>
                                {data.map((value, index) => (
                                    <tr key={index}>
                                        <td>{value.volunteer_id}</td>
                                        <td>{value.fullname}</td>
                                        <td>{value.email}</td>
                                        <td>{value.phone}</td>
                                        <td>{value.dob}</td>
                                        <td>{value.gender}</td>
                                        <td>{value.blood}</td>
                                        <td>{value.dep}</td>
                                        <td>{value.year}</td>
                                        <td>{value.camp}</td>
                                        <td>{value.hour}</td>
                                        <td>{value.address}</td>
                                        <td>{value.unit}</td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>

                    </div>
                </div>
            </div>
        </div>
  
  )
}

export default View
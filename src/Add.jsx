import axios from 'axios'
import React, { useState } from 'react'
import Nav from './component/Nav'

const Add = () => {
    const[input,changeInput]=useState({

        "volunteer_id":"",
        "fullname":"",
        "email":"",
        "phone":"",
        "dob":"",
        "gender":"",
        "blood":"",
        "dep":"",
        "year":"",
        "camp":"",
        "hour":"",
        "address":"",
        "unit":""

    })
    const inputHandler=(event)=>{

        changeInput({...input,[event.target.name]:event.target.value})
    }
    const readValue=()=>{

        console.log(input)
        axios.post("",input).then(
            (response)=>{response.data}
        ).catch()
    }
  return (
    <div>
        <Nav />
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Volunteer_id</label>
                    <input type="text" className="form-control"
                    name="Teamid"
                    value={input.volunteer_id}
                    onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <label htmlFor="" className="form-label">Fullname</label>
                    <input type="text" className="form-control"
                    name="Teamname"
                    value={input.fullname}
                    onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <label htmlFor="" className="form-label">Email</label>
                    <input type="Email" className="form-control"
                    name="Teamleader"
                    value={input.email}
                    onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <label htmlFor="" className="form-label">Phone</label>
                    <input type="email" className="form-control"
                    name="Phone"
                    value={input.phone}
                    onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <label htmlFor="" className="form-label">Dob</label>
                    <input type="date" className="form-control"
                    name="Dob"
                    value={input.dob}
                    onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <label htmlFor="" className="form-label">Gender</label>
                    <select id="" className="form-select" name="Gender" value={input.gender} onChange={inputHandler}>
                        <option value="select">select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <label htmlFor="" className="form-label">Blood</label>
                    <select id="" className="form-select" name="Blood" value={input.blood} onChange={inputHandler}>
                        <option value="select">select</option>
                        <option value="A+">A+</option>
                        <option value="B+">B+</option>
                                                <option value="O+">O+</option>

                    </select>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <label htmlFor="" className="form-label">Dep</label>
                    <select  id="" className="form-select" name="Blood" value={input.dep} onChange={inputHandler}>
                        <option value="select">select</option>
                        <option value="MCA">MCA</option>
                        <option value="Btech">Btech</option>

                    </select>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <label htmlFor="" className="form-label">Year</label>
                    <input type="date" className="form-control"
                    name="Problem"
                    value={input.year}
                    onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <label htmlFor="" className="form-label">Camp</label>
                    <input type="text" className="form-control"
                    name="Camp"
                    value={input.camp}
                    onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <label htmlFor="" className="form-label">Hour</label>
                    <input type="text" className="form-control"
                    name="Hour"
                    value={input.hour}
                    onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <label htmlFor="" className="form-label">Address</label>
                    <input type="text" className="form-control"
                    name="Address"
                    value={input.address}
                    onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Unit</label>
                    <input type="text" className="form-control"
                    name="Unit"
                    value={input.unit}
                    onChange={inputHandler} />

                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-success"onClick={readValue}>submit</button>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Add
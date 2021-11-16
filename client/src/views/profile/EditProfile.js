import React, { useState} from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { editUser } from "../../JS/actions/user";
import {  useHistory } from "react-router-dom";

import "./editProfile.css"
import Notifications from "components/Notifications/Notifications";
const EditProfile = ({location }) => {
    // const isLoad = useSelector((state) => state.userReducer.isLoad);
    const user = useSelector((state) => state.userReducer.user);
  const errors = useSelector((state) => state.userReducer.errors);

    const [edit, setedit] = useState({
      phone: "",
      adress: "",
      contry: "",
    });
  const handleChange = (e) => {
    setedit({ ...edit, [e.target.name]: e.target.value });
  };
  const history = useHistory();
  //dipatch edit funcion
  const dispatch = useDispatch();
  const handleUser = (e) => {
    dispatch(editUser(user._id,{...edit}),history);
  }; 

    return (
        <>
         {errors && errors
          ? errors.map((el, i) => <Notifications error={el} key={i} />)
          : null}
        <div>{ user ?
            (
           <div className="container rounded bg-white mt-5">
    <div className="row">
        <div className="col-md-4 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" src={require("assets/img/avatarprofile.jpg").default}
 alt="profileImg" width="90"/><span className="font-weight-bold">{user.name}</span><span className="text-black-50">{user.email}</span><span>{user.role}</span></div>
        </div>
        <div className="col-md-8">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div onClick={() => {
                    history.goBack();
                }} className="d-flex flex-row align-items-center back"><i className="fa fa-long-arrow-left mr-1 mb-1"></i>
                        <h6>Go Back</h6>
                    </div>
                    <h6 className="text-right">Edit Profile</h6>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6"><input  type="text" name="name" className="form-control" defaultValue={user.name} onChange={handleChange}/></div>
                    {/* <div className="col-md-6"><input type="text" className="form-control" defaultValue="Doe" placeholder="Doe"/></div> */}
                </div>
                <div className="row mt-3">
                    <div className="col-md-6"><input type="text" name="email" className="form-control" defaultValue={user.email} onChange={handleChange}/></div>
                    <div className="col-md-6"><input maxLength="8" type="tel" name="phone" className="form-control" defaultValue={user.phone} placeholder="Phone number" onChange={handleChange}/></div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-6"><input type="text" name="adress" className="form-control" placeholder="adress" defaultValue={user.adress} onChange={handleChange}/></div>
                    <div className="col-md-6"><input type="text" name="contry" className="form-control" defaultValue={user.contry} placeholder="Country" onChange={handleChange}/></div>
                </div>
                <div className="row mt-3">
                    {/* <div className="col-md-6"><input type="text" className="form-control" placeholder="Bank Name" defaultValue="Bank of America"/></div> */}
                    {/* <div className="col-md-6"><input type="text" cl assName="form-control" defaultValue="043958409584095" placeholder="Account Number"/></div> */}
                </div>
                <div className="mt-5 text-right">
                    <button className="btn btn-primary profile-button"
                     type="button"
                     onClick={(e) => {
                         e.preventDefault();
                         handleUser();
                         history.goBack();
                      }}
                >Save Profile</button></div>
            </div>
        </div>
    </div>
</div> 
      )
            :null}
        </div>
        </>
    )
}

export default EditProfile

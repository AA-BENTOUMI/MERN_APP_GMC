import React, { useState} from "react";
import { useSelector } from "react-redux";
import { addRoom } from "../../JS/actions/room";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import  './AddRoom.css'
const AddRoom = () => {
    const user = useSelector((state) => state.userReducer.user);
    const [newRoom, setNewRoom] = useState({
       roomName: "",
      categorie: "",
      estimation: "",
      description: "",
      images: "",
      date:"",
      id_seller:"",  
      starting:"", 
      addsum:""  
  })
  const dispatch = useDispatch();
  const history = useHistory();

 const handleChange = (e) => {
        setNewRoom({...newRoom, [e.target.name]: e.target.value});
    }

    const handlePhoto = (e) => {
        setNewRoom({...newRoom, images: e.target.files[0]});
    }

const uploadRoom=(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('roomName', newRoom.roomName);
        formData.append('categorie', newRoom.categorie);
        formData.append('estimation', newRoom.estimation);
        formData.append('description', newRoom.description);
        formData.append('date', newRoom.date);
        formData.append('id_seller', user._id);
        formData.append('images', newRoom.images);
    dispatch(addRoom(formData,history));

}
    return (
         <div className="container light-style flex-grow-1 container-p-y" style={{marginTop: "6%"}}>
    <div className="card overflow-hidden" style={{ margin:" 6%"}}>
      <div className="row no-gutters row-bordered row-border-light">
        <div className="col-md-3 pt-0">
          <div className="list-group list-group-flush account-settings-links">
            <a className="list-group-item list-group-item-action active" data-toggle="list" href="!#">New Room</a>
          </div>
        </div>
        <div className="col-md-9">
          <div className="tab-content">
            <div className="tab-pane fade active show" id="account-general">

              <div className="card-body media align-items-center">
                <img src="https://www.suzukijember.com/gallery/gambar_product/default.jpg" alt="" className="d-block ui-w-80"/>
                <div className="media-body ml-4">
                    <div className="card-body">
                    <hr className="border-light m-0"/>
                  <label className="btn btn-outline-primary" >
                    <input type="file"  className="form-control mb-1" id="exampleFormControlFile1"
                    name="images"
                    onChange={handlePhoto}
                    />
                    <div className="text-secondary small mt-1">Allowed JPG, GIF or PNG. Max size of 800K</div>
                  </label> &nbsp;
                </div>
              </div>

                <div className="form-group">
                  <label className="form-label">Room Name</label>
                  <input type="text" name="roomName" className="form-control mb-1"
                  onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Categorie</label>
                <select name="categorie" className="form-control mb-1"  defaultValue=""
                  onChange={handleChange}>
                  <option value="">Choose a Categorie</option>
                  <option value="Antique">Antique object</option>
                  <option value="Rare">Rare object</option>
                  <option value="Art">Artistic object</option>
                  <option value="collection">Collection</option>
                </select>
                </div>
                  <label className="form-label">Estimation</label>
              <div className="input-group mb-3">
               <div className="input-group-prepend">
                 <span className="input-group-text">TND</span>
              </div>
                <input type="text" name="estimation" 
                className="form-control" aria-label="Amount (to the nearest dollar)"
                  onChange={handleChange}
                />
                  <div className="input-group-append">
                 <span className="input-group-text">.000</span>
                </div>
              </div>
               <div className="form-group">
                  <label className="form-label">Start Day</label>
                   <input type="datetime-local" name="date" className="form-control mb-1"
                  //  value="2018-06-12T19:30"
                   min="2021-10-07T00:00" max="2025-06-14T00:00"
                  onChange={handleChange}
                   />
                </div>
              </div>
              <div className="form-group">
                  <label className="form-label">Description</label>
                  <textarea className="form-control" name="description" rows="5"
                  onChange={handleChange}
                  ></textarea>
                </div>
            </div>          
            </div>         
        </div>
        <div className="text-right mt-3">
      <button type="button" className="btn btn-primary profile-button" 
      onClick={uploadRoom}>Save Room</button>&nbsp;
      <button type="button" className="btn btn-default"onClick={() => {
      history.goBack();
      }} >Cancel</button>  
      </div>
    </div>
    </div>

  </div>   
    ) 
}

export default AddRoom

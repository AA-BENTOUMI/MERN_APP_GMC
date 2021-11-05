import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyRooms } from "JS/actions/room";
import RoomCards from "components/RoomCards/RoomCards";
import Spinner from "components/Spinner/Spinner";
import { getPartiRooms } from "JS/actions/room";
const RoomsList = () => {
    const user = useSelector((state) => state.userReducer.user);
  const myrooms = useSelector((state) => state.roomReducer.myrooms);
  const isLoad = useSelector((state) => state.userReducer.isLoad);
    const dispatch = useDispatch();
   useEffect(() => {
    console.log(user);
    if (user && user.role === "seller") {
      dispatch(getMyRooms());
    } else {
      dispatch(getPartiRooms());
    }
  }, [dispatch,user]);

    return (
         <div style={{display:"flex",flexWrap:"wrap",marginTop:"10%"}}>
           {isLoad?(<Spinner/>):
      myrooms?
        (myrooms.map((el) => <RoomCards room={el} key={el._id} />)):null
      }
    </div>
    )
}

export default RoomsList

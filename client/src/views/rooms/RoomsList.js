import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRooms } from "JS/actions/room";
import RoomCards from "components/RoomCards/RoomCards";

const RoomsList = () => {
        const rooms = useSelector((state) => state.roomReducer.rooms);
    console.log(rooms)
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(getRooms());
  }, [dispatch]);

    return (
         <div style={{display:"flex",flexWrap:"wrap",marginTop:"10%"}}>
      {rooms?
        (rooms.map((el) => <RoomCards room={el} key={el._id} />)):null
      }
    </div>
    )
}

export default RoomsList

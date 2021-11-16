import { React, useEffect,useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch} from "react-redux";
import { clearErrors } from 'JS/actions/user';
import 'react-toastify/dist/ReactToastify.css';
const Notifications = ({error}) => {
     const [show, setShow] = useState(true);
  const dispatch = useDispatch();
   useEffect(() => {
    setTimeout(() => {
      setShow(false);
      dispatch(clearErrors());
    }, 5000);
  }, [dispatch]);
    return (
        <div>
        <div><div>{show && toast(error.msg)}</div></div>     
        <ToastContainer />
        </div>
    )
}

export default Notifications

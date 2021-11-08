// import React, { useState} from "react";
// import { createPopper } from "@popperjs/core";

// const NotificationDropdown = ({room}) => {
//   console.log(room._id)
//   // dropdown props
//   const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
//   const [idButton, setIdButton] = useState("")
//   const btnDropdownRef = React.createRef();
//   const popoverDropdownRef = React.createRef();
//   const openDropdownPopover = () => {
//     createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
//       placement: "left-start",
//     });
//     setDropdownPopoverShow(true);
//   };
//   const closeDropdownPopover = () => {
//     setDropdownPopoverShow(false);
//   };
//   const handelButton=(e)=>{
//     setIdButton(e.target.id)
//     e.preventDefault()
//   }
//   return (
//     <>
//       <a
//         className="text-blueGray-500 py-1 px-3"
//         href="#pablo"
//         ref={btnDropdownRef}
//         id={room._id}
//         onClick={(e) => {
//           handelButton(e)
//           dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
//         }}
//       >
//         <i className="fas fa-ellipsis-v"></i>
//       </a>
      
//       <div
//         ref={popoverDropdownRef}
//         className={
//           (dropdownPopoverShow ? "block " : "hidden ") +
//           "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
//         }
//       >
//         <button className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
//   <i className="fas fa-heart"></i> Small
// </button>
// <button className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
//   <i className="fas fa-heart"></i> Small
// </button>
//       </div>
//     </>
//   );
// };

// export default NotificationDropdown;
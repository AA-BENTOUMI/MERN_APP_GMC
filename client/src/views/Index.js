/*eslint-disable*/
import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRooms } from "JS/actions/room";
import Spinner from "components/Spinner/Spinner";
import IndexCards from "components/RoomCards/IndexCards";


export default function Index() {
  const rooms = useSelector((state) => state.roomReducer.rooms);
  const isLoad = useSelector((state) => state.userReducer.isLoad);
    const dispatch = useDispatch();
    // upload all rooms
    useEffect(() => {
    dispatch(getRooms());
  }, [dispatch]);

  return (
    <>
      {/* <IndexNavbar fixed /> */}
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                Notus React - A beautiful extension for Tailwind CSS.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                Notus React is Free and Open Source. It does not change any of
                the CSS from{" "}
                <a
                  href="https://tailwindcss.com/?ref=creativetim"
                  className="text-blueGray-600"
                  target="_blank"
                >
                  Tailwind CSS
                </a>
                . It features multiple HTML elements and it comes with dynamic
                components for ReactJS, Vue and Angular.
              </p>
              
            </div>
          </div>
        </div>

        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
          src={require("assets/img/pattern_react.png").default}
          alt="..."
        />
      </section>
       <div style={{display:"flex",flexWrap:"wrap",marginTop:"10%"}}>
           {isLoad?(<Spinner/>):
      rooms?
        (rooms.map((el) => <IndexCards room={el} key={el._id} />)):null
      }
    </div>
    </>
  );
}

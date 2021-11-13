import React from "react";
import { useSelector } from "react-redux";
import { participate } from "JS/actions/room";
import { useDispatch } from "react-redux";
import { startRoom } from "JS/actions/room";
import moment from 'moment'
import 'moment-precise-range-plugin';

// components
export default function Landing({ location: { state }}) {
    const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  //add id user to id object of room schema
  const handleParticipate = () => {
    dispatch(participate(state._id,{...user._id}));
  };
  let now = new Date();
  let start=new Date(state.date)
  //calcul diffrece between two times
var millisTill10 = start - now;
var restTime = moment.preciseDiff(start, now);
console.log(restTime)
if (millisTill10 < 0) {
   millisTill10 += 86400000; 
}
// function dispached after passed time
setTimeout(function() {
   alert("activated room")
    dispatch(startRoom(state._id,{activated:true}));
}, millisTill10);
  return (
    <>
      <main>
        <section className="relative py-20">
          <div className="container mx-auto px-4">
            <div className="mt-12">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index"
                  // target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Get started
                </a>
                <a
                  href="https://github.com/creativetimofficial/notus-react?ref=nr-index"
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  // target="_blank"
                >
                  Github Star
                </a>
              </div>
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={`http://localhost:3000/uploads/${state.images}`}
                />
              </div>
                <button className="text-lightBlue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-lightBlue-300">
                    <i className="fas fa-rocket text-xl"></i>
                  </button>
              
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  
                  <h3 className="text-3xl font-semibold">Name:{state.roomName}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                   Description: {state.description}
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Categorie:{state.categorie}
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Estimation:{state.estimation}TND
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            {restTime}
                          </h4>
                        </div>
                      </div>
                  <p className="text-sm text-blueGray-400 mt-4"><span className="text-emerald-500 mr-2"><i className="fas fa-arrow-up"></i> 3.48%</span><span className="whitespace-nowrap">Since last month</span></p>
                    </li>
                  </ul>
                  {/* display only for buyers */}
                  {user&&(user.role!=="seller")? <button
              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
              onClick={handleParticipate}
            >
              Participate
            </button>:null}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-blueGray-800">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

        </section>
        
      </main>
    </>
  );
}

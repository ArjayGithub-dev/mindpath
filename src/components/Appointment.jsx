import React, { useState } from 'react';
import styles from "../style";
import { Link, useLocation } from "react-router-dom";

const Appointment = () => {
  return (
    <section id="trusted-clients" className={`flex flex-col items-center ${styles.paddingY}`}>
      <div className="text-center">
      {/* <p className="font-poppins font-thin text-white ss:text-[18px] text-[16px] mt-10">
          Empower Your Practice with Our Innovative App</p> */}
        <h1 className="font-poppins font-bold ss:text-[42px] text-[38px] text-white mb-4 mt-4">
          Join Our Community of Professional Therapists
        </h1>
        <p className="font-poppins font-light text-white ss:text-[18px] text-[16px]">
          Connect with clients seeking your expertise. 
          Schedule a face-to-face interview to verify your eligibility and start your journey with us!</p>   
      </div>
      <button className="btn btn-wide font-poppins font-bold text-[15px] bg-white text-blue rounded-md m-[50px]" onClick={()=>document.getElementById('my_modal_3').showModal()}>
        Schedule Interview
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box w-11/12 max-w-5xl p-8">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-poppins font-regular text-[24px]">Prepare for Your Interview Appointment</h3>
          <h3 className="font-bold text-lg">What to Bring:</h3>
          <p className="">
            To verify your eligibility during the face-to-face interview, please bring the following documents:
          </p>
          <ul className="list-disc pl-5 py-2"> {/* Add padding to the left for proper indentation */}
            <li>A copy of your current professional license.</li>
            <li>An updated resume.</li>
            <li>A government-issued photo ID for identity verification.</li>
          </ul>
          <li className="btn btn-wide font-poppins font-bold bg-blue text-white rounded-md mt-4">
            <Link to="/AppointmentPage">Schedule Interview</Link>
        </li>
        </div>
      </dialog>
    </section>
  )
}

export default Appointment;

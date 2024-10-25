import React, { useState, useEffect } from 'react';
import styles from "../style";
import { Navbar, Footer, TermsConditions, } from "../components";
import ApppointmentDataService from "../services/appointment.service";


const AppointmentPage = () => {

  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);


  const [firstname, setfirstname] = useState("");
  const [middlename, setmiddlename] = useState("");
  const [surname, setsurname] = useState("");
  const [email, setemail] = useState("");
  const [suffix, setsuffix] = useState("");
  const [gender, setgender] = useState("");
  const [region, setregion] = useState("");
  const [province, setprovince] = useState("");
  const [cityMunicipality, setcityMunicipality] = useState("");
  const [barangay, setbarangay] = useState("");
  const [dateTime, setdateTime] = useState("");
  const [isAgree, setisAgree] = useState("");

  const [message, setMessage] = useState({ error: false, msg: "" });
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    // Validate required fields
    if (
      firstname === "" || 
      surname === "" || 
      gender === "" || 
      email === "" ||
      region === "" ||
      province === "" ||
      cityMunicipality === "" ||
      barangay === "" ||
      dateTime === "" ||
      isAgree === "" 
    ) {
      setMessage({ error: true, msg: "Alert: You must fill in all required fields marked with an asterisk (*) to proceed with your submission." });
      return;
    }

    const newAppointment = {
      firstname,
      middlename,
      surname,
      gender,
      email,
      suffix,
      region,
      province,
      cityMunicipality,
      barangay,
      dateTime,
      isAgree,
      status: "Upcoming",
    };

    try {
      await ApppointmentDataService.addAppointment(newAppointment);
      setMessage({ error: false, msg: "Appointment Booked Successfully!" });
      setIsModalOpen(true); // Open the modal on successful submission
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    // Clear form fields after submission
    setfirstname("");
    setmiddlename("");
    setsurname("");
    setgender("");
    setemail("");
    setsuffix("");
    setregion("");
    setprovince("");
    setcityMunicipality("");
    setbarangay("");
    setdateTime("");
    setisAgree("");
  };

    // Scroll to the top when there is an error message
    useEffect(() => {
      if (message.error) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, [message]);

    

  return (
    <>
      <div className="w-full overflow-hidden">
        {/* Navbar Section */}
        <div className={`bg-dirtywhite ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        {/* Form Section */}
        <div className={`bg-dirtywhite w-full py-12 ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>

            {/* Conditional Warning Alert */}
            {message.error && (
              <div role="alert" className="alert alert-warning mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 shrink-0 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <span>{message.msg}</span>
              </div>
            )}

            <h2 className="font-poppins text-[30px] font-semibold mb-6">Appointment Schedule</h2>
              <p className="font-poppins font-light text-gray text-[16px] mb-2">
                Please provide your accurate personal details to help us process your appointment efficiently.
              </p> 

            <form className="p-8 w-full max-w-[600px]" onSubmit={handleSubmit}>
              <h2 className="font-poppins text-[24px] font-light mt-8 mb-2">Personal Information</h2>

              {/* Firstname */}
              <div className="mb-4">
                <label htmlFor="firstname" className="block font-poppins text-gray-700 font-medium mb-2">
                  Firstname <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstname"
                  className="input input-bordered input-md w-full max-w-xs"
                  placeholder="Enter your firstname"
                  value={firstname}
                  onChange={(e) => setfirstname(e.target.value)}
                />
              </div>

              {/* Middlename */}
              <div className="mb-4">
                <label htmlFor="middlename" className="block font-poppins text-gray-700 font-medium mb-2">
                  Middlename
                </label>
                <input
                  type="text"
                  id="middlename"
                  className="input input-bordered input-md w-full max-w-xs"
                  placeholder="Enter your middlename"
                  value={middlename}
                  onChange={(e) => setmiddlename(e.target.value)}
                />
              </div>

              {/* Surname */}
              <div className="mb-4">
                <label htmlFor="surname" className="block font-poppins text-gray-700 font-medium mb-2">
                  Surname <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="surname"
                  className="input input-bordered input-md w-full max-w-xs"
                  placeholder="Enter your surname"
                  value={surname}
                  onChange={(e) => setsurname(e.target.value)}
                />
              </div>     

              {/* Suffix */}
              <div className="mb-4">
                <label htmlFor="suffix" className="block font-poppins text-gray-700 font-medium mb-2">
                  Suffix 
                </label>
                <select
                  id="suffix"
                  className="select select-bordered w-full max-w-xs"
                  value={suffix}
                  onChange={(e) => setsuffix(e.target.value)}
                >
                  <option value="" disabled>
                    -- Select Suffix --
                  </option>
                  <option value="Jr.">Jr.</option>
                  <option value="Sr.">Sr.</option>
                  <option value="III">III</option>
                  <option value="IV">IV</option>
                  <option value="V">V</option>
                </select>
              </div>

              {/* Gender */}
              <div className="mb-4">
                <label htmlFor="gender" className="block font-poppins text-gray-700 font-medium mb-2">
                  Gender <span className="text-red-500">*</span>
                </label>
                <select
                  id="gender"
                  className="select select-bordered w-full max-w-xs"
                  value={gender}
                  onChange={(e) => setgender(e.target.value)}
                >
                  <option value="" disabled>
                    -- Select Gender --
                    </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              {/* Email */}
              <div className="mb-4">
                <label htmlFor="email" className="block font-poppins text-gray-700 font-medium mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="input input-bordered input-md w-full max-w-xs"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
              </div>

              <h2 className="font-poppins text-[24px] font-semilight mt-8 mb-6">Complete Address</h2>

              {/* Region */}
              <div className="mb-4">
                <label htmlFor="region" className="block font-poppins text-gray-700 font-medium mb-2">
                  Region <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="region"
                  className="input input-bordered input-md w-full max-w-xs"
                  placeholder="Enter your region"
                  value={region}
                  onChange={(e) => setregion(e.target.value)}
                />
              </div>

              {/* Province */}
              <div className="mb-4">
                <label htmlFor="province" className="block font-poppins text-gray-700 font-medium mb-2">
                  Province <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="province"
                  className="input input-bordered input-md w-full max-w-xs"
                  placeholder="Enter your province"
                  value={province}
                  onChange={(e) => setprovince(e.target.value)}
                />
              </div>

              {/* City/Municipality */}
              <div className="mb-4">
                <label htmlFor="cityMunicipality" className="block font-poppins text-gray-700 font-medium mb-2">
                  City/Municipality <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="cityMunicipality"
                  className="input input-bordered input-md w-full max-w-xs"
                  placeholder="Enter your city/municipality"
                  value={cityMunicipality}
                  onChange={(e) => setcityMunicipality(e.target.value)}
                />
              </div>

              {/* Barangay */}
              <div className="mb-4">
                <label htmlFor="barangay" className="block font-poppins text-gray-700 font-medium mb-2">
                  Barangay <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="barangay"
                  className="input input-bordered input-md w-full max-w-xs"
                  placeholder="Enter your barangay"
                  value={barangay}
                  onChange={(e) => setbarangay(e.target.value)}
                />
              </div>

              <h2 className="font-poppins text-[24px] font-light mt-8 mb-6">Appointment Schedule</h2>

              {/* Date and Time */}
              <div className="mb-4">
                <label htmlFor="dateTime" className="block font-poppins text-gray-700 font-medium mb-2">
                  Preferred Date and Time <span className="text-red-500">*</span>
                </label>
                <input
                  type="datetime-local"
                  id="dateTime"
                  className="input input-bordered input-md w-full max-w-xs"
                  value={dateTime}
                  onChange={(e) => setdateTime(e.target.value)}
                />
              </div>

             {/* Terms & Conditions */}
             <div className="mb-4 flex items-center mt-8">
              <input 
                type="checkbox" 
                id="isAgree"
                className="checkbox checkbox-sm mr-2"
                checked={isAgree} // Use checked instead of value
                onChange={(e) => setisAgree(e.target.checked)} // Use e.target.checked to get the boolean value
              />
              <p className="font-poppins font-light text-gray text-[14px]">
                I have read and agree to the 
                <span 
                className="text-[#0093FD] cursor-pointer ml-1" 
                onClick={() => document.getElementById('my_modal_1').showModal()}>
                 terms and conditions
          </span>.
              </p>
            </div>

            <TermsConditions />

          <button type="submit" className="btn btn-wide font-poppins font-bold bg-blue text-white rounded-md px-[160px] mt-4">
            Submit
          </button>

            </form>
          </div>
        </div>

        {/* Modal Confirmation */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="modal modal-open">
              <div className="modal-box">
                <h2 className="font-poppins font-bold text-lg py-4">Your appointment has been booked! 🎉</h2>
                <p>We’ve sent you a confirmation email with the details of your booking. 
                Please check your inbox for further instructions.</p>
                <div className="modal-action">
                  <button className="btn" onClick={() => setIsModalOpen(false)}>Close</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer Section */}
        <div className={`bg-dirtywhite ${styles.paddingX}`}>
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentPage;

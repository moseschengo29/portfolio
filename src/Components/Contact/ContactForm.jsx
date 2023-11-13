import { useState } from "react"
import toast from "react-hot-toast";

function ContactForm() {
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        phone: "",
        additional_information: ""
    });


    const validateEmail = (email) => {
        const emailpattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailpattern.test(email);
    };

    function validatePhoneNumber(phoneNumber) {
    // Define the pattern for a North American phone number
    const phonePattern = /^\d{10}$/;

    // Remove any non-digit characters from the input
    const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');

    // Check if the cleaned phone number matches the pattern
    return phonePattern.test(cleanedPhoneNumber);
}

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
        !formData.fullname ||
        !formData.email ||
        !formData.phone
        ) {
        toast.error("Please fill in all the fields");
        } else if (
        // !/^[A-Z][a-zA-Z]*$/.test(formData.first_name || formData.last_name)
        !/^[a-zA-Z]*$/.test(formData.first_name || formData.last_name)
        ) {
        toast.error("Name must Start with a capital letter");
        } else if (!validateEmail(formData.email)) {
        toast.error("Invalid Email Format");
        } else if (!validatePhoneNumber(formData.phone)) {
        toast.error("Invalid Phone number");
        } else {
        try {
            // make regestration request using signupMutation
            console.log(`formData: `, formData);
        } catch (error) {
            // Registration failed, handle errors
           console.log(error)
        }
        }
    };

  return (
    <div>
    <p className="email-me">Email me directly: </p>
       <form
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={handleSubmit}
              >
                <div>
                  <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    value={formData.fullname}
                    onChange={(e) =>
                      setFormData({ ...formData, fullname: e.target.value })
                    }
                    className="form-input"
                    placeholder="Enter full name"
                    required=""
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="form-input"
                    placeholder="Enter email address"
                    required=""
                  />
                </div>
                <div>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="form-input"
                    placeholder="Enter phone number"
                    required=""
                  />
                </div>
                <div>
                
                  <textarea
                    type='text'
                    name='additional_information'
                    id="additional_information"
                    value={formData.additional_information}
                    onChange={(e) =>
                      setFormData({ ...formData, additional_information: e.target.value })
                    }
                    placeholder="Any additional information?(Optional)"
                    className="form-input"
                    required=""
                  />
                </div>

                <button
                  type="submit"
                  className="btn"
                >
                  Send Message
                </button>
                
              </form>
    </div>
  )
}

export default ContactForm

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   startSignup,
//   signupSuccess,
//   signupFailure,
// } from "../features/auth/authSlicerRegister";
// import { useDispatch, useSelector } from "react-redux";
// import { useSignupMutation } from "../features/auth/authMutations";
// import { selectsignUp } from "../features/auth/authSlicerRegister";

// const RegistrationForm = () => {
//   const [registrationSuccess, setRegistrationSuccess] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const dispatch = useDispatch();
//   const signUpData = useSelector(selectsignUp);
//   const navigate = useNavigate();
//   const [errorMessage, setErrMsg] = useState("");

//   const [register] = useSignupMutation();

//   const [formData, setFormData] = useState({
//     first_name: "",
//     last_name: "",
//     email: "",
//     phone: "",
//     password: "",
//   });

//   const validateEmail = (email) => {
//     const emailpattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     return emailpattern.test(email);
//   };

//   const validatePassword = (password) => {
//     const passwordpattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
//     return passwordpattern.test(password);
//   };
//   const validatePhonenumber = (phone) => {
//     const phonenumberpattern = /^(?:254|0)[17]\d{8}$/;
//     return phonenumberpattern.test(phone);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     dispatch(startSignup()); // Dispatch the first action of the user which is to enter details
//     setErrMsg("");

//     if (
//       !formData.first_name ||
//       !formData.last_name ||
//       !formData.email ||
//       !formData.phone ||
//       !formData.password
//     ) {
//       setErrMsg("Please fill in all the fields");
//       dispatch(signupFailure("Please fill in the required fields"));
//     } else if (
//       // !/^[A-Z][a-zA-Z]*$/.test(formData.first_name || formData.last_name)
//       !/^[a-zA-Z]*$/.test(formData.first_name || formData.last_name)
//     ) {
//       setErrMsg("Name must Start with a capital letter");
//       dispatch(signupFailure("Name must start with a capital letter"));
//     } else if (!validateEmail(formData.email)) {
//       setErrMsg("Invalid Email Format");
//       dispatch(signupFailure("Invalid Email Format"));
//     } else if (!validatePassword(formData.password)) {
//       setErrMsg("Password should be atleast 8 characters");
//       dispatch(signupFailure("Password should be atleast 8 characters"));
//     } else if (!validatePhonenumber(formData.phone)) {
//       setErrMsg("Invalid Phone number");
//       dispatch(signupFailure("Invalid Phone number"));
//     } else {
//       try {
//         // make regestration request using signupMutation
//         console.log(`formData: `, formData);
//         const result = await register(formData);
//         console.log(`Register result: `, result);

//         // Registration was successful
//         dispatch(signupSuccess());
//         setRegistrationSuccess(true);
//         setIsLoading(true);
//         navigate("/login");

//       } catch (error) {
//         // Registration failed, handle errors
//         dispatch(signupFailure(error.message));
//         setRegistrationSuccess(false);
//       }
//     }
//   };

//   return (
//     <div className="pt-20">
//       {signUpData.isLoading && <p>Signing up...</p>}
//       {signUpData.errorMessage && (
//         <p className="text-red-500">{errorMessage}</p>
//       )}
//       {registrationSuccess && <p>Registration successful!</p>}
//       <section className="bg-gray-50 dark:bg-[#F7F2EE]">
//         <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
//           {/* <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
//           <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
//           Flowbite    
//       </a> */}

//           <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white dark:border-gray-700">
//             <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//               <h1 className="text-xl font-bold leading-tight tracking-tight text-[#592727] md:text-2xl">
//                 Create an account
//               </h1>
//               <form
//                 className="space-y-4 md:space-y-6"
//                 action="#"
//                 onSubmit={handleSubmit}
//               >
//                 {/* <div>
//                       <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">username</label>
//                       <input type="text" name="email" id="username" value={formData.username} 
//                          onChange={(e) => setFormData({ ...formData, username: e.target.value })}className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
//                   </div> */}
//                 <div>
//                   <label
//                     htmlFor="firstname"
//                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-[#592727]"
//                   >
//                     First name
//                   </label>
//                   <input
//                     type="text"
//                     name="firstname"
//                     id="firstname"
//                     value={formData.first_name}
//                     onChange={(e) =>
//                       setFormData({ ...formData, first_name: e.target.value })
//                     }
//                     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     placeholder="enter first name..."
//                     required=""
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="lastname"
//                     className="block mb-2 text-sm font-medium text-[#592727]"
//                   >
//                     Last name
//                   </label>
//                   <input
//                     type="text"
//                     name="lastname"
//                     id="lastname"
//                     value={formData.last_name}
//                     onChange={(e) =>
//                       setFormData({ ...formData, last_name: e.target.value })
//                     }
//                     className="bg-gray-50 border border-gray-300 dark:text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     placeholder="enter last name...."
//                     required=""
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block mb-2 text-sm font-medium text-[#592727] "
//                   >
//                     Your email
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     id="email"
//                     value={formData.email}
//                     onChange={(e) =>
//                       setFormData({ ...formData, email: e.target.value })
//                     }
//                     className="bg-gray-50 border border-gray-300 dark:text-gray-800 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     placeholder="name@company.com"
//                     required=""
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="phone"
//                     className="block mb-2 text-sm font-medium text-[#592727] "
//                   >
//                     Phone Number
//                   </label>
//                   <input
//                     type="number"
//                     name="phone"
//                     id="phone"
//                     value={formData.phone}
//                     onChange={(e) =>
//                       setFormData({ ...formData, phone: e.target.value })
//                     }
//                     className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     placeholder="254712345678"
//                     required=""
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="password"
//                     className="block mb-2 text-sm font-medium text-[#592727] "
//                   >
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     name="password"
//                     id="password"
//                     value={formData.password}
//                     onChange={(e) =>
//                       setFormData({ ...formData, password: e.target.value })
//                     }
//                     placeholder="••••••••"
//                     className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     required=""
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full text-white bg-[#73332D] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//                 >
//                   Sign Up
//                 </button>
//                 <p className="text-sm font-light text-gray-800">
//                   Already have an account?{" "}
//                   <Link
//                     to="/login"
//                     className="font-medium text-blue-600 hover:underline "
//                   >
//                     Login here
//                   </Link>
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default RegistrationForm;
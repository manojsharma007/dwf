import React, { useEffect, useState } from "react";
//Icon
// import userIcon from "../img/user.svg";
// import emailIcon from "../img/email.svg";

//import passwordIcon from "../img/password.svg";
// Validate
import { validate } from "./validate";
// Styles
import styles from "./SignUp.module.css";
import "react-toastify/dist/ReactToastify.css";
// Toast
import { ToastContainer, toast } from "react-toastify";
import { notify } from "./toast";
//
import { Link } from "react-router-dom";
// Axios
import axios from "axios";

const SignUp = () => {
  const [data, setData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    streetNumber: "",
    streetName: "",
    addressLine: "",
    city: "",
    state: "",
    zipCode: "",
     phone: "",
    homePhone: "",
    email: "",
    password: "",
    confirmPassword: "",
    IsAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
   const [isNextPage, setIsNextPage] = useState(false);

  useEffect(() => {
    setErrors(validate(data, "signUp"));
  }, [data, touched]);

  const changeHandler = (event) => {
    if (event.target.name === "IsAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const submitHandler = (event) => {
    setIsNextPage(true);
    console.log("data", data);
    return
    event.preventDefault();
    if (!Object.keys(errors).length) {
      // Pushing data to database usuing PHP script
      const urlApi = `https://lightem.senatorhost.com/login-react/index.php?email=${data.email.toLowerCase()}&password=${data.password}&register=true`;
      const pushData = async () => {
        const responseA = axios.get(urlApi);
        const response = await toast.promise(responseA, {
          pending: "Check your data",
          success: "Checked!",
          error: "Something went wrong!",
        });
        if (response.data.ok) {
          notify("You signed Up successfully", "success");
        } else {
          notify("You have already registered, log in to your account", "warning");
        }
      };
      pushData();
    } else {
      notify("Please Check fileds again", "error");
      setTouched({
        firstName: true,
          middleName:true,
        lastName: true,
        dob: true,
        streetNumber: true,
        streetName:true,
        addressLine: true,
        city: true,
        state: true,
        zipCode: true,
        phone: true,
        homePhone: true,
        email: true,
        password: true,
        confirmPassword: true,
        IsAccepted: false,
      });
    }
  };

  return (
  
    
      <div>
      <form className={styles.formLogin} autoComplete="off"  style={{ display: !isNextPage ? "block" : "none" }}>
        <h2>Sign Up</h2>
        <div className={styles.formColumns}>
          {/* Column 1 */}
          <div className={styles.formColumn}>
            <div className={styles.item}>
              <div className={errors.firstName && touched.firstName ? styles.unCompleted : !errors.firstName && touched.firstName ? styles.completed : undefined}>
                <input type="text" name="firstName" value={data.firstName} placeholder="First Name" onChange={changeHandler} onFocus={focusHandler} autoComplete="off" />
                
              </div>
              {errors.firstName && touched.firstName && <span className={styles.error}>{errors.firstName}</span>}
            </div>
            <div className={styles.item}>
              <div className={errors.middleName && touched.middleName ? styles.unCompleted : !errors.middleName && touched.middleName ? styles.completed : undefined}>
                <input type="text" name="middleName" value={data.middleName} placeholder="Middle Name" onChange={changeHandler} onFocus={focusHandler} autoComplete="off" />
              
              </div>
              {errors.middleName && touched.middleName && <span className={styles.error}>{errors.middleName}</span>}
            </div>
            <div>
              <div className={errors.lastName && touched.lastName ? styles.unCompleted : !errors.lastName && touched.lastName ? styles.completed : undefined}>
                <input type="text" name="lastName" value={data.lastName} placeholder="Last Name" onChange={changeHandler} onFocus={focusHandler} autoComplete="off" />
              
              </div>
              {errors.lastName && touched.lastName && <span className={styles.error}>{errors.lastName}</span>}
            </div>
            <div>
              <div className={errors.dob && touched.dob ? styles.unCompleted : !errors.dob && touched.dob ? styles.completed : undefined}>
              <label>Date of Birth</label>  <input type="date" name="dob" value={data.dob} placeholder="Date of Birth" onChange={changeHandler} onFocus={focusHandler} autoComplete="off" />
              </div>
              {errors.dob && touched.dob && <span className={styles.error}>{errors.dob}</span>}
            </div>
            <div>
              <div className={errors.streetNumber && touched.streetNumber ? styles.unCompleted : !errors.streetNumber && touched.streetNumber ? styles.completed : undefined}>
                <input type="text" name="streetNumber" value={data.streetNumber} placeholder="Street Number" onChange={changeHandler} onFocus={focusHandler} autoComplete="off" />
                
              </div>
              {errors.streetNumber && touched.streetNumber && <span className={styles.error}>{errors.streetNumber}</span>}
            </div>
            <div>
              <div className={errors.streetName && touched.streetName ? styles.unCompleted : !errors.streetName && touched.streetName ? styles.completed : undefined}>
                <input type="text" name="streetName" value={data.streetName} placeholder="Street Name" onChange={changeHandler} onFocus={focusHandler} autoComplete="off" />
                
              </div>
              {errors.streetName && touched.streetName && <span className={styles.error}>{errors.streetName}</span>}
            </div>
            <div>
              <div className={errors.addressLine && touched.addressLine ? styles.unCompleted : !errors.addressLine && touched.addressLine ? styles.completed : undefined}>
                <input type="text" name="addressLine" value={data.addressLine} placeholder="Address Line" onChange={changeHandler} onFocus={focusHandler} autoComplete="off" />
                
              </div>
              {errors.addressLine && touched.addressLine && <span className={styles.error}>{errors.addressLine}</span>}
            </div>
          </div>
          {/* Column 2 */}
          <div className={styles.formColumn}>
            <div>
              <div className={errors.city && touched.city ? styles.unCompleted : !errors.city && touched.city ? styles.completed : undefined}>
                <input type="text" name="city" value={data.city} placeholder="City" onChange={changeHandler} onFocus={focusHandler} autoComplete="off" />
                
              </div>
              {errors.city && touched.city && <span className={styles.error}>{errors.city}</span>}
            </div>
            <div>
              <div className={errors.state && touched.state ? styles.unCompleted : !errors.state && touched.state ? styles.completed : undefined}>
                <input type="text" name="state" value={data.state} placeholder="State" onChange={changeHandler} onFocus={focusHandler} autoComplete="off" />
                
              </div>
              {errors.state && touched.state && <span className={styles.error}>{errors.state}</span>}
            </div>
            <div>
              <div className={errors.zipCode && touched.zipCode ? styles.unCompleted : !errors.zipCode && touched.zipCode ? styles.completed : undefined}>
                <input type="text" name="zipCode" value={data.zipCode} placeholder="Zip Code" onChange={changeHandler} onFocus={focusHandler} autoComplete="off" />
                
              </div>
              {errors.zipCode && touched.zipCode && <span className={styles.error}>{errors.zipCode}</span>}
            </div>
            <div>
              <div className={errors.phone && touched.phone ? styles.unCompleted : !errors.phone && touched.phone ? styles.completed : undefined}>
                <input type="text" name="phone" value={data.phone} placeholder="Phone" onChange={changeHandler} onFocus={focusHandler} autoComplete="off" />
                
              </div>
              {errors.phone && touched.phone && <span className={styles.error}>{errors.phone}</span>}
            </div>
            <div>
              <div className={errors.homePhone && touched.homePhone ? styles.unCompleted : !errors.homePhone && touched.homePhone ? styles.completed : undefined}>
                <input type="text" name="homePhone" value={data.homePhone} placeholder="Home Phone" onChange={changeHandler} onFocus={focusHandler} autoComplete="off" />
                
              </div>
              {errors.homePhone && touched.homePhone && <span className={styles.error}>{errors.homePhone}</span>}
            </div>
            <div>
              <div className={errors.email && touched.email ? styles.unCompleted : !errors.email && touched.email ? styles.completed : undefined}>
                <input type="text" name="email" value={data.email} placeholder="E-mail" onChange={changeHandler} onFocus={focusHandler} autoComplete="off" />
              
              </div>
              {errors.email && touched.email && <span className={styles.error}>{errors.email}</span>}
            </div>
            <div>
              <div className={errors.password && touched.password ? styles.unCompleted : !errors.password && touched.password ? styles.completed : undefined}>
                <input type="password" name="password" value={data.password} placeholder="Password" onChange={changeHandler} onFocus={focusHandler} autoComplete="off" />
                {/* <img src={passwordIcon} alt="" /> */}
              </div>
              {errors.password && touched.password && <span className={styles.error}>{errors.password}</span>}
            </div>
            <div>
              <div className={errors.confirmPassword && touched.confirmPassword ? styles.unCompleted : !errors.confirmPassword && touched.confirmPassword ? styles.completed : undefined}>
                <input type="password" name="confirmPassword" value={data.confirmPassword} placeholder="Confirm Password" onChange={changeHandler} onFocus={focusHandler} autoComplete="off" />
                {/* <img src={passwordIcon} alt="" /> */}
              </div>
              {errors.confirmPassword && touched.confirmPassword && <span className={styles.error}>{errors.confirmPassword}</span>}
            </div>
            <div>
              <div className={styles.terms}>
                <input type="checkbox" name="IsAccepted" checked={data.IsAccepted} id="accept" onChange={changeHandler} onFocus={focusHandler} />
                <label htmlFor="accept">I accept terms of privacy policy</label>
              </div>
              {errors.IsAccepted && touched.IsAccepted && <span className={styles.error}>{errors.IsAccepted}</span>}
            </div>
            {/* <div>
              <button type="button" onClick={submitHandler}>Next</button>
              <span style={{ color: "#a29494", textAlign: "center", display: "inline-block", width: "100%" }}>
                Already have a account? <Link to="/login">Sign In</Link>
              </span>
            </div> */}
                    <div>
          <button type="button" className="submit" onClick={submitHandler}>Next </button>
          <span style={{ color: "#a29494", textAlign: "center", display: "inline-block", width: "100%" }}>
            Already have a account? <Link to="/login">Sign In</Link>
          </span>
        </div>
          </div>
        </div>
      </form>

      <ToastContainer />
 <div style={{ display: isNextPage ? "block" : "none" }}>
  <h2>Welcome to the next step!</h2>
  <p>Before you can start using your account, we need to set up some security questions.</p>
  <p>These questions will help you recover your account in case you forget your password.</p>
  <p>Make sure to remember your answers!</p>
  <p>Answer the following questions to enhance your account security:</p>
  <p>These questions will help you recover your account in case you forget your password.</p>
  <p>Make sure to remember your answers!</p>
 
  <form className={styles.formLogin} >
    <label className={styles.formColumn} htmlFor="favfood">Fav food:</label>
    <input type="text" id="favfood" name="favfood" />
      
    <label htmlFor="favcolor">Fav color:</label>
    <input type="text" id="favcolor" name="favcolor" />
      
    <label htmlFor="favplace">Fav place:</label>
    <input type="text" id="favplace" name="favplace" />
      
    <label htmlFor="petname">Pet name:</label>
    <input type="text" id="petname" name="petname" />
      
    <label htmlFor="birthplace">Birth Place:</label>
    <input type="text" id="birthplace" name="birthplace" />
      
  </form>
</div>
         

    </div>
  
  
  
  );
};

export default SignUp;

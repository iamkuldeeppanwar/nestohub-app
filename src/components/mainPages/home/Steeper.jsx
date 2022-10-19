import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";

const steps = [
  "Create Account",
  "Mobile,Email OTP Verification",
  "Work Experience",
  "Address Information",
  "Document Submition",
  "Profile",
];

export default function Steeper() {
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    mobileOtp: "",
    mobileOtp2: "",
    mobileOtp3: "",
    mobileOtp4: "",
    emailOtp: "",
    emailOtp2: "",
    emailOtp3: "",
    emailOtp4: "",
    experience: "",
    builderList: "",
    registrationNumber: "",
    certificationCopy: "",
    address: "",
    state: "",
    pinCode: "",
    city: "",
    area: "",
    whatsapp: "",
    file: "",
    file1: "",
    file2: "",
    file3: "",
  });

  const [images,setImages] = useState(false);

  const handleChange = async(e) => {
    // const {name,value} = e.target;

    if (document.getElementsByName(e.target.name)[0].nextElementSibling) {
      document.getElementsByName(e.target.name)[0].nextElementSibling.remove();
    }

    if (
      e.target.name === "file" ||
      e.target.name === "file1" ||
      e.target.name === "file2" ||
      e.target.name === "file3"
    ) {
      setDetails({ ...details, [e.target.name]: e.target.files[0] });
      e.preventDefault();
      try {
        if (!e.target.files[0]) return alert("Files doesnt exit");

        if (e.target.files[0] > 1024 * 1024) return alert("size to large");

        if (
          e.target.files[0] !== "image/jpeg" &&
          e.target.files[0] !== "image/png"
        )
          return alert("file format is incorrect");

        let formData = new FormData();
        formData.append("file", e.target.files[0]);
        // formData.append("file1", e.target.files[0]);
        // formData.append("file2", e.target.files[0]);
        // formData.append("file3", e.target.files[0]);
        console.log(formData);


        const res = await axios.post('/api/upload',formData,{
          headers: {'content-type': 'multipart/form-data'}
      })

      console.log(res.data);
      setImages(res.data);


      } 
      catch (error) {
        alert(error.response.data.msg)
      }

    } 
    else {
      setDetails({ ...details, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let resp = await axios.post("/api/broker", { ...details,images });
      alert(resp.data.msg);
    } catch (error) {
      console.log("else");
      alert(error.response.data.msg);
    }
  };

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    // if(activeStep===0){
    //   if(details.firstName.length ===0 || details.lastName.length===0 || details.mobile.length===0 || details.email.length === 0){
    //     alert("plz fill all the data");
    //   }
    //   else{
    //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
    //     setSkipped(newSkipped);
    //    }
    // }

    // else if(activeStep === 1){
    //   if(details.mobileOtp.length === 0 || details.mobileOtp2.length == 0 || details.mobileOtp3.length === 0 || details.mobileOtp4.length === 0 || details.emailOtp.length === 0 || details.emailOtp2.length === 0 || details.emailOtp3.length === 0 || details.emailOtp4.length === 0){
    //     alert("plz fill the data");
    //    }
    //    else{
    //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
    //     setSkipped(newSkipped);
    //    }
    // }

    //  else{
    //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
    //   setSkipped(newSkipped);
    //  }

    //  <small className="text-error">First name is required</small>

    // console.log(t);
    let flag = true;
    for (let i of document.querySelectorAll(".alertEle")) {
      i.remove();
    }
    for (let i of Object.keys(details)) {
      let t = document.getElementsByName(i);
      if (details[i] === "" && t.length !== 0) {
        flag = false;
        let nc = document.createElement("div");
        nc.setAttribute("class", "alertEle");
        nc.innerHTML = `<small class="text-error">${i} is required</small>`;
        t[0].parentNode.appendChild(nc);
      }
    }

    if (flag) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const stylepeer = {
    backgroundColor: "#c00000",
    color: "#ffffff",
    width: "150px",
    maxWidth: "100%",
    height: "45px",
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <>
          {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}

          <form onSubmit={handleSubmit}>
            {activeStep === 0 && (
              <div className="wrapper">
                <h2>Create Account</h2>
                <div id="myForm" className="dance">
                  <div className="form">
                    <div className="top-form">
                      <div className="inner-form">
                        <input
                          type="text"
                          placeholder="First Name As Per Aadhar"
                          name="firstName"
                          required
                          value={details.firstName}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="inner-form">
                        <input
                          type="text"
                          placeholder="Last Name As Per Aadhar"
                          name="lastName"
                          value={details.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="top-form">
                      <div className="inner-form">
                        <input
                          type="text"
                          placeholder="First Name As Per Aadhar"
                          name="mobile"
                          required
                          value={details.mobile}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="inner-form">
                        <input
                          type="email"
                          placeholder="Last Name As Per Aadhar"
                          name="email"
                          value={details.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeStep === 1 && (
              <div className="wrapper">
                <h2>Mobile OTP Verification</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente quas natus optio dicta, impedit minus eum blanditiis
                  ex adipisci{" "}
                </p>
                <div id="myForm" className="dance">
                  <div className="form">
                    <div className="top-form">
                      <div className="inner-form inner-form-1">
                        <input
                          type="text"
                          name="mobileOtp"
                          required
                          value={details.mobileOtp}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="inner-form inner-form-1">
                        <input
                          type="text"
                          name="mobileOtp2"
                          required
                          value={details.mobileOtp2}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="inner-form inner-form-1">
                        <input
                          type="text"
                          name="mobileOtp3"
                          required
                          value={details.mobileOtp3}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="inner-form inner-form-1">
                        <input
                          type="text"
                          name="mobileOtp4"
                          value={details.mobileOtp4}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    {/* <div className="top-form">
           
          </div> */}
                  </div>
                </div>
                <h2>Email OTP Verification</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente quas natus optio dicta, impedit minus eum blanditiis
                  ex adipisci{" "}
                </p>
                <div id="myForm" className="dance">
                  <div className="form">
                    <div className="top-form">
                      <div className="inner-form inner-form-1">
                        <input
                          type="text"
                          name="emailOtp"
                          required
                          value={details.emailOtp}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="inner-form inner-form-1">
                        <input
                          type="text"
                          name="emailOtp2"
                          required
                          value={details.emailOtp2}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="inner-form inner-form-1">
                        <input
                          type="text"
                          name="emailOtp3"
                          required
                          value={details.emailOtp3}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="inner-form inner-form-1">
                        <input
                          type="text"
                          name="emailOtp4"
                          value={details.emailOtp4}
                          required
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeStep === 2 && (
              <div className="wrapper">
                <h2>Create Account</h2>
                <div id="myForm" className="dance">
                  <div className="form">
                    <div className="top-form">
                      <div className="inner-form">
                        <input
                          type="text"
                          placeholder="Experience in the field (years.)"
                          name="experience"
                          value={details.experience}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="inner-form">
                        <input
                          type="text"
                          placeholder="List of builders with whom broker has worked"
                          name="builderList"
                          value={details.builderList}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="top-form">
                      <div className="inner-form">
                        <input
                          type="text"
                          placeholder="Rera Registration Number (if yes)"
                          name="registrationNumber"
                          value={details.registrationNumber}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="inner-form">
                        <input
                          type="text"
                          placeholder="Rera Certification Copy (Optional)"
                          name="certificationCopy"
                          value={details.certificationCopy}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeStep === 3 && (
              <div className="wrapper">
                <h2>Address Information</h2>
                <div id="myForm" className="dance">
                  <div className="form">
                    <div className="bottom-form">
                      <div className="inner-form">
                        <textarea
                          placeholder="Address"
                          name="address"
                          value={details.address}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="top-form">
                      <div className="inner-form inner-form-1">
                        <input
                          type="text"
                          placeholder="State"
                          name="state"
                          value={details.state}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="inner-form inner-form-1">
                        <input
                          type="text"
                          placeholder="PIN Code"
                          name="pinCode"
                          value={details.pinCode}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="inner-form inner-form-1">
                        <input
                          type="text"
                          placeholder="City"
                          name="city"
                          value={details.city}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="inner-form inner-form-1">
                        <input
                          type="text"
                          placeholder="Area"
                          name="area"
                          value={details.area}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* activeStep 4 mai apna input type file hai  */}
            {activeStep === 4 && (
              <div className="wrapper">
                <h2>Document Submition</h2>
                <div id="myForm" className="dance">
                  <div className="form">
                    <div className="top-form">
                      <div className="inner-form">
                        <label htmlFor="">Photo of PAN</label>
                        <input
                          className="fileup"
                          type="file"
                          placeholder="Photo of Business Card / Shop (Optional)"
                          name="file"
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="inner-form">
                        <label htmlFor="">Photo of Aadhar</label>

                        <input
                          className="fileup"
                          type="file"
                          placeholder="Rera Certification Copy"
                          name="file1"
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="top-form">
                      <div className="inner-form">
                        <label htmlFor="">
                          Photo of Business Card / Shop (Optional)
                        </label>
                        <input
                          className="fileup"
                          type="file"
                          placeholder="Photo of Pan"
                          name="file2"
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="inner-form">
                        <label htmlFor="">
                          Rera Certification Copy (Optional)
                        </label>
                        <input
                          className="fileup"
                          type="file"
                          placeholder="Photo of Aadhar"
                          name="file3"
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeStep === 5 && (
              <div className="wrapper">
                <h2>Profile</h2>
                <div className="whatsapp-box">
                  <div className="imgs-what">
                    <img src="" alt="" />
                  </div>
                  <div id="myForm" className="dance">
                    <div className="form">
                      <div className="top-form">
                        <div className="inner-form">
                          <input
                            className="fileup"
                            type="text"
                            placeholder="Whatsapp Number (Optional) - Same as contact number tick"
                            name="whatsapp"
                            value={details.whatsapp}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                style={stylepeer}
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {/* {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )} */}

              {activeStep === steps.length - 1 ? (
                <Button type="submit" style={stylepeer} className="next-btn">
                  Submit
                </Button>
              ) : (
                <Button
                  type={"button"}
                  style={stylepeer}
                  className="next-btn"
                  onClick={handleNext}
                >
                  Next
                </Button>
              )}
            </Box>
          </form>
        </>
      )}
    </Box>
  );
}

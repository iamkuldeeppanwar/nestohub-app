import React, {useState} from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const steps = [
  "Create Account",
  "Mobile,Email OTP Verification",
  "Work Experience",
  "Address Information",
  "Document Submition",
  "Profile",
];

export default function Steeper() {
  const [details,setDetails] = useState({

  })
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

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
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
        <React.Fragment>
          {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}

          <form>
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
                          name="name"
                          required
                        />
                      </div>
                      <div className="inner-form">
                        <input
                          type="text"
                          placeholder="Last Name As Per Aadhar"
                          name="email"
                          required
                        />
                      </div>
                    </div>
                    <div className="top-form">
                      <div className="inner-form">
                        <input
                          type="text"
                          placeholder="First Name As Per Aadhar"
                          name="name"
                          required
                        />
                      </div>
                      <div className="inner-form">
                        <input
                          type="text"
                          placeholder="Last Name As Per Aadhar"
                          name="email"
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
                        <input type="text" name="mobile-otp1" required />
                      </div>
                      <div className="inner-form inner-form-1">
                        <input type="text" name="mobile-otp2" required />
                      </div>
                      <div className="inner-form inner-form-1">
                        <input type="text" name="mobile-otp3" required />
                      </div>
                      <div className="inner-form inner-form-1">
                        <input type="text" name="mobile-otp4" required />
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
                        <input type="text" name="email-otp1" required />
                      </div>
                      <div className="inner-form inner-form-1">
                        <input type="text" name="email-otp2" required />
                      </div>
                      <div className="inner-form inner-form-1">
                        <input type="text" name="email-otp3" required />
                      </div>
                      <div className="inner-form inner-form-1">
                        <input type="text" name="email-otp4" required />
                      </div>
                    </div>
                    {/* <div className="top-form">
           
          </div> */}
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
                          required
                        />
                      </div>
                      <div className="inner-form">
                        <input
                          type="text"
                          placeholder="List of builders with whom broker has worked"
                          name="builderList"
                          required
                        />
                      </div>
                    </div>
                    <div className="top-form">
                      <div className="inner-form">
                        <input
                          type="text"
                          placeholder="Rera Registration Number (if yes)"
                          name="RegistrationNumber"
                          required
                        />
                      </div>
                      <div className="inner-form">
                        <input
                          type="text"
                          placeholder="Rera Certification Copy (Optional)"
                          name="Certification Copy"
                          required
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
                    <div class="bottom-form">
                      <div class="inner-form">
                        <textarea
                          placeholder="Address"
                          name="address"
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="top-form">
                      <div className="inner-form inner-form-1">
                        <input
                          type="text"
                          placeholder="State"
                          name=""
                          required
                        />
                      </div>
                      <div className="inner-form inner-form-1">
                        <input
                          type="text"
                          placeholder="PIN Code"
                          name="pinCode"
                          required
                        />
                      </div>
                      <div className="inner-form inner-form-1">
                        <input
                          type="text"
                          placeholder="City"
                          name="city"
                          required
                        />
                      </div>
                      <div className="inner-form inner-form-1">
                        <input
                          type="text"
                          placeholder="Area"
                          name="area"
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
                    <div class="top-form">
                      <div class="inner-form">
                    
                        <label htmlFor="">Photo of PAN</label>
                   
                        <input
                          className="fileup"
                          type="file"
                          placeholder="Photo of Business Card / Shop (Optional)"
                          name="address"
                          required
                        />
                         
                      </div>
                      <div class="inner-form">
                     
                        <label htmlFor="">Photo of Aadhar</label>
                   
                        <input
                          className="fileup"
                          type="file"
                          placeholder="Rera Certification Copy"
                          name="address"
                          required
                        />
                      </div>
                    </div>
                    <div class="top-form">
                      <div class="inner-form">
                      <label htmlFor="">Photo of Business Card / Shop (Optional)</label>
                        <input
                          className="fileup"
                          type="file"
                          placeholder="Photo of Pan"
                          name="address"
                          required
                        />
                      </div>
                      <div class="inner-form">
                      <label htmlFor="">Rera Certification Copy (Optional)</label>
                        <input
                          className="fileup"
                          type="file"
                          placeholder="Photo of Aadhar"
                          name="address"
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
                       
                    </div>
                    <div id="myForm" className="dance">
                  <div className="form">
                    <div class="top-form">
                      <div class="inner-form">
                        <input
                          className="fileup"
                          type="text"
                          placeholder="Whatsapp Number (Optional) - Same as contact number tick"
                          name="address"
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

              <Button
                style={stylepeer}
                className="next-btn"
                onClick={handleNext}
              >
                {activeStep === steps.length - 1 ? "Submit" : "Next"}
              </Button>
            </Box>
          </form>
        </React.Fragment>
      )}
    </Box>
  );
}

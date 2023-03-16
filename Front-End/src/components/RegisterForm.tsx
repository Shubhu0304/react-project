import React, {useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import bgImg from '../assests/bgimg.jpg';
import {useForm} from 'react-hook-form';

const RegisterForm= () => {
    const {register,handleSubmit,watch,formState:{errors}} = useForm()
    // const onSubmit = (data: any) => console.log(data);
    const password = useRef({});
    password.current = watch("password", "");
    const onSubmit = async (data:any) => {
     console.log(data);
    };

    // console.log(watch('name'));
    return (

        
        <section className="vh-100" style={{backgroundColor: "#eee"}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius: "25px"}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                {/* <span className="text-center">Register and enjoy the service</span> */}

                <form className="mx-1 mx-md-4" onSubmit={handleSubmit(onSubmit)}>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fa fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    {/* <label className="form-label">Your Name</label> */}
                      <input type="text"{...register("name", {required: true})} id="form3Example1c" placeholder="Your Name" className="form-control" />
                      {/* <label className="form-label" for="form3Example1c">Your Name</label> */}
                      <span style={{color:'red'}}>{errors.name?.type==="required" && "This field is Mandatory!!"} </span> 
                     
                     
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fa fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    {/* <label className="form-label">Your Email</label> */}
                      <input type="email"{...register("email", {required:true})} id="form3Example3c" placeholder="Your Email" className="form-control" />
                      {/* <label className="form-label" for="form3Example3c">Your Email</label> */}
                      <span style={{color:'red'}}>{errors.email?.type==="required" && "Email is required!!"} </span> 
                      
                      
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fa fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                         {/* <label className="form-label">Password</label> */}
                      <input type="password"{...register("password",{required:true , minLength:8 })} id="form3Example4c" placeholder="Password" className="form-control" />
                      {/* {errors.name?.type==="required" && "You cannot leave this field empty!!"} */}
                      {/* <label className="form-label" for="form3Example4c">Password</label> */}
                      <span style={{color:'red'}}>{errors.password?.type==="required" && "Password cannot be empty"} </span> 
                      <span style={{color:'red'}}>{errors.password?.type==="minLength" && "Password must have at least 8 characters"} </span> 
                     
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fa fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    {/* <label className="form-label">Repeat your password</label> */}
                      <input type="password"{...register("confirmpwd",{required:true, validate: value =>value === password.current })} id="form3Example4cd" placeholder= "Repeat your password" className="form-control" />
                      {/* <label className="form-label" for="form3Example4cd">Repeat your password</label> */}
                      <span style={{color:'red'}}>{errors.confirmpwd?.type==="required" && "Please confirm the password"} </span> 
                      <span style={{color:'red'}}>{errors.confirmpwd?.type==="validate" && "The passwords do not match"} </span> 
                     
                      
                    </div>
                  </div>

                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    {/* <label className="form-check-label" for="form2Example3"> */}
                    <label className="form-check-label">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-primary btn-lg">Register</button>
                  </div>
                  
                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src={bgImg}
                  className="img-fluid" alt="Sample image" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        </section>
  )
}

export default RegisterForm;

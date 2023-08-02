
import Lottie from "lottie-react";
import First from "./FirstAnimation.json"
import { Container, Button, Card,CardBody, CardText, CardTitle } from "reactstrap";
import {ImProfile} from "react-icons/im"
import {BiMessageAltCheck} from "react-icons/bi"
import {FaRegHandshake} from "react-icons/fa"

const FirstSection = () => {
return (
<Container className="mt-3 mb-5 py-3">
    <div className=" d-md-flex justify-content-between w-100 my-5 py-5">
        <div className="my-auto text-white mx-auto w-100 ">

            <h1 className="fs-1">
                Find Your <span className="text-decoration-underline">Dream Job</span> Here.
            </h1>
            <p className="fs-3 fst-italic">
                Get hired by the top companies and secure a bright future.  
            </p>
            <button className=" mt-2 text-uppercase zoom cssbuttons-io-button " style={{letterSpacing: "2px"}}>
                Apply Now
                <span class="icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
  </span>
            </button>
        </div>
        <div className=" w-75 ms-md-auto  mx-auto mx-md-0">
        <Lottie animationData={First} loop={true} className="w-75 ms-md-auto mx-auto mx-md-0"/>
        </div>
      
    
    </div>
    
    <div className="d-md-flex justify-content-between  mx-auto">
    <Card className="bg-transparent text-white border-rounded border border-white mx-5 cardcss mb-4 border-bottom-0 border-end-0 border-3"
>
    <ImProfile className="mx-auto fs-1 mt-4"/>
  <CardBody className="text-center">
    <CardTitle tag="h5">
      1) Create your Profile
    </CardTitle>
    <CardText className="mt-3">
    Lorem ipsum dolor sit amet, consectetaur adipisicing elit
    </CardText>
  </CardBody>
</Card>
<Card className="bg-transparent text-white border-rounded border border-white mx-5 cardcss mb-4  border-bottom-0 border-end-0 border-3"
>
    <BiMessageAltCheck  className="mx-auto fs-1 mt-4"/>
  <CardBody className="text-center">
    <CardTitle tag="h5">
    2) Receive Job Offers
    </CardTitle>
    <CardText className="mt-3">
    Lorem ipsum dolor sit amet, consectetaur adipisicing elit
    </CardText>
  </CardBody>
</Card>
<Card className="bg-transparent text-white border-rounded border border-white mx-5 cardcss mb-4  border-bottom-0 border-end-0 border-3"
>
    <FaRegHandshake className="mx-auto fs-1 mt-4"/>
  <CardBody className="text-center">
    <CardTitle tag="h5">
     3) Achieve Your Dream Job
    </CardTitle>
    <CardText className="mt-3">
    Lorem ipsum dolor sit amet, consectetaur adipisicing elit
    </CardText>
  </CardBody>
</Card>
    </div>
   
</Container>
)
}

export default FirstSection;
import { Col, Container, Row } from "reactstrap"
import {FaFacebook, FaInstagram} from "react-icons/fa"
import {FiMail} from "react-icons/fi"
const Footer = () => {
    return (
        <Container fluid className="text-white footer py-5 ">
            <Row className=" mx-md-auto  widthfooter ">
                <Col  lg={4}>
                <div >
    <h3 className="text-uppercase">
        JobKart
    </h3>
    <p className="fw-light">
        JobKart is the best web platform to grab the best job opportunity and upscale your career and also hire the best world-wide talent for your company. 
    </p>
</div>
                </Col>
                <Col   lg={4}>
                <div className="ms-lg-auto w-50">
    <h6 className="text-uppercase">
        Candidates
    </h6>
    <div class="list-group ">
  <button type="button" class="list-group-item list-group-item-action bg-transparent border-0  text-white ps-0 fw-light">Candidate Signup</button>
  <button type="button" class="list-group-item list-group-item-action bg-transparent border-0 text-white ps-0 fw-light">Look for Job</button>
  <button type="button" class="list-group-item list-group-item-action bg-transparent border-0 text-white ps-0 fw-light">Refer & Earn</button>
</div>
</div>
                </Col>
                <Col   lg={4}>
                <div className="ms-lg-auto w-50">
    <h6 className="text-uppercase">
        Connect 
    </h6>
    <div class="list-group ">
  <button type="button" class="list-group-item list-group-item-action bg-transparent border-0  text-white ps-0 fw-light">Contact Us</button>
  <div className="d-flex ">
  <button type="button" class="list-group-item list-group-item-action bg-transparent border-0 text-white ps-0 fs-4">
    <FaFacebook/>
  </button>
  <button type="button" class="list-group-item list-group-item-action bg-transparent border-0 text-white ps-0 fs-4">
    <FiMail/>
  </button>
  <button type="button" class="list-group-item list-group-item-action bg-transparent border-0 text-white ps-0 fs-4">
    <FaInstagram/>
  </button>
  </div>
  
</div>
</div>
                </Col>
            </Row>



        </Container>
    )
}
export default Footer;
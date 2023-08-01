import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Container } from "reactstrap";
import Navvbar from "./components/Navbar";
import FirstSection from "./components/FirstSection";
import MiddleSection from "./components/MiddleSection";
import Footer from "./components/Footer";
import 'animate.css';

const App = () => {
    return(
        <Container fluid className="p-0">
            <div className="section1">
            <Navvbar/>
            <FirstSection/>
       <MiddleSection/>
       <Footer />
            </div>

        </Container>
        
    )
}
export default App;
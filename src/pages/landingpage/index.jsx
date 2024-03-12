import Footer from "../../components/landcomponents/footer";
import Navbar from "../../components/landcomponents/navbar";
import Newrelease from "../../components/landcomponents/newrelease";
import Popular from "../../components/landcomponents/popular";
import Slider from "../../components/landcomponents/slider";
import Toprated from "../../components/landcomponents/toprated";

export default function Landingpage() {
  return <>
  <Navbar/>
  <Slider/>
  <Newrelease/>
  <Toprated/>
  <Popular/>
  <Footer/>
  </>;
}

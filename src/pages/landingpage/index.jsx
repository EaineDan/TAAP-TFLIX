import Display from "../../components/landcomponents/display";
import Footer from "../../components/landcomponents/footer";
import Navbar from "../../components/landcomponents/navbar";
import NewReleased from "../../components/landcomponents/newrelease";
import Popular from "../../components/landcomponents/popular";
import TopRated from "../../components/landcomponents/toprated";
import Upcoming from "../../components/landcomponents/upcoming";
import MovieSlider from "../../components/landcomponents/videoslider";



export default function Landingpage() {
  return <>
  <Navbar/>
  <MovieSlider/>
  <Popular/>
  <TopRated/>
  <NewReleased/>
  <Upcoming/>
  <Display/>
  <Footer/>
  </>;
}

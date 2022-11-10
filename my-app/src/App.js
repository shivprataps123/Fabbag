import Navbar from './Components/Navbar/Navbar';
import './App.css';
import { Box } from "@chakra-ui/react";
import ImageSlider from './Components/Slider/ImageSlider'
import {SlideData} from './Components/Slider/SlideData'
import HomeGrid from './Components/GridView/HomeGrid';
import Footer from './Components/Footer/footer';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Box  w="100%" p={4} color="white">
      <ImageSlider slides={SlideData} />
    </Box>
     <HomeGrid/>
     <Footer/>
    </div>
  );
}

export default App;
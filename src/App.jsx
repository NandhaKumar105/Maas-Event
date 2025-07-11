import Home from './Components/Home'
import Service from './Components/Service';
import Gallery from './Components/Gallery';
import Screen from './Components/Screen';
import Spotlight from './Components/Spotlight';
import Team from './Components/Team';
import Testimonial from './Components/Testimonial';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() { 
  return (
    <>
    <section id="home"><Home/></section>
     <section id="service"><Service/></section>
    <section id="gallery"><Gallery/></section> 
     <Screen/>
    <Spotlight/> 
   <section id="team"><Team/></section>
    <section id="testimonial"><Testimonial/></section>
     <section id="contact"><Contact/></section>
    <Footer/> 
     
    </>
  );
}
export default App;

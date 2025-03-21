import Herosection from "@/components/Herosection";
import Navbar from "@/components/Navigation";
import Body from "@/components/Body";
import Footer from "@/components/Footer";

export default function Home() {
  return (
<div className=" p-5 justify-between min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white  pr-10">
  <Navbar />
  <Herosection/>
  <Body/>
  <Footer/>

</div>
  
     
  );
}

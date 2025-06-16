import Image from "next/image";
import homeImage from "../../../assets/home.jpg"
function Performance() {
  console.log("hello");
  
  return(
    <>
    <div>Performance page</div>
    <Image src={homeImage} alt="home image"/>
    </>
  )
}

export default Performance;
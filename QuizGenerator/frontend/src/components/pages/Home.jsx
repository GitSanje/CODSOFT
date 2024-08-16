import useGlobalContextProvider from "../../context/GlobalContext";
import QuizzBox from "../partials/QuizzBox"

const Home = () => {
  const {allQzz} = useGlobalContextProvider()


  return (
    <>

    <div className="div">
    <QuizzBox />
    </div>
 

    
    </>
  )
}

export default Home
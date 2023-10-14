import Banner from "../../components/Banner/Banner";
import Gallery from "../../components/Gallery/Gallery";
import NavFooter from "../../components/NavBar/NavFooter";
import Coffees from "../Coffees/Coffees";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <NavFooter></NavFooter>
            <Coffees></Coffees>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;
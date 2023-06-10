import Banner from "../Banner/Banner";
import ClassSection from "../ClassSection/ClassSection";
import InstructorSection from "../InstructorSection/InstructorSection";
import Slider from "../Slider/Slider";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Slider></Slider>
            <InstructorSection></InstructorSection>
            <ClassSection></ClassSection>
        </div>
    );
};

export default Home;
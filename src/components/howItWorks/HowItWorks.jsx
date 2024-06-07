import Heading from "../heading/Heading";
import SignUp from '../../../public/images/how-it-works/Register.png'
import Profile from '../../../public/images/how-it-works/Profile.png'
import Participate from '../../../public/images/how-it-works/Participate.png'
import Report from '../../../public/images/how-it-works/Report.png'
import Pro from '../../../public/images/how-it-works/Pro.png'
import WorksHeading from "./WorksHeading";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const HowItWorks = () => {

    const subHeading = "In this section we are going to explain you , how our community works. with picture and template you can clearly understand about the functionality of this normal website.";
    const heading = "How it works";

    const describtionOne = "come and sign up first to get the best feeling of this survey site."
    const titleOne = "Sign Up";

    const describtionTwo = "after signingig up look at your profile and assemble it gorgiously.";
    const titleTwo = "Create Profile";

    const describtionThree = "Now participate any of the survey you are interested but one survey one time";
    const titleThree = "Participate Survey";

    const describtionFour = "Report any kind of survey if you think them inappropriate";
    const titleFour = "Report Survey";

    const describtionFive = "Spend some money and be a Pro user to get more unlocked feature";
    const titleFive = "Pro user";
    return (
        <div className="mt-16 px-[60px]">
            <Heading heading={heading} subHeading={subHeading}></Heading>
            <div>

                <div className="flex justify-center gap-6">
                    <div className="flex gap-3 items-center">
                        <WorksHeading title={titleOne} describtion={describtionOne}></WorksHeading>
                        <FaArrowAltCircleRight className="text-xl text-[#815df6]" />
                    </div>
                    <div>
                        <img className="w-[15vw] rounded-xl" src={SignUp} alt="signup" />
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className=" flex h-[80px] border-2 border-gray-300 border-dashed">

                    </div>
                </div>

                <div className="flex justify-center gap-6">
                    <div className="flex gap-3 items-center">
                        <img className="w-[15vw] rounded-xl" src={Profile} alt="signup" />
                        <FaArrowAltCircleLeft className="text-xl text-[#815df6]" />
                    </div>
                    <div className="flex gap-3 items-center">
                        <WorksHeading title={titleTwo} describtion={describtionTwo}></WorksHeading>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className=" flex h-[80px] border-2 border-gray-300 border-dashed">

                    </div>
                </div>

                <div className="flex justify-center gap-6">
                    <div className="flex gap-3 items-center">
                        <WorksHeading title={titleThree} describtion={describtionThree}></WorksHeading>
                        <FaArrowAltCircleRight className="text-xl text-[#815df6]" />
                    </div>
                    <div>
                        <img className="w-[15vw] rounded-xl" src={Participate} alt="signup" />
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className=" flex h-[80px] border-2 border-gray-300 border-dashed">

                    </div>
                </div>

                <div className="flex justify-center gap-6">
                    <div className="flex gap-3 items-center">
                        <img className="w-[15vw] rounded-xl" src={Report} alt="signup" />
                        <FaArrowAltCircleLeft className="text-xl text-[#815df6]" />
                    </div>
                    <div className="flex gap-3 items-center">
                        <WorksHeading title={titleFour} describtion={describtionFour}></WorksHeading>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className=" flex h-[80px] border-2 border-gray-300 border-dashed">

                    </div>
                </div>

                <div className="flex justify-center gap-6">
                    <div className="flex gap-3 items-center">
                        <WorksHeading title={titleFive} describtion={describtionFive}></WorksHeading>
                        <FaArrowAltCircleRight className="text-xl text-[#815df6]" />
                    </div>
                    <div>
                        <img className="w-[10vw] rounded-xl" src={Pro} alt="signup" />
                    </div>
                </div>
                <div className="flex justify-center mt-2">
                    <button className="bg-[#859770] px-3 py-2 rounded-xl text-white hover:bg-black duration-500">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
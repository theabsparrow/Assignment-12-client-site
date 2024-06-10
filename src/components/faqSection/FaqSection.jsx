import Heading from "../heading/Heading";
import faq from '../../../public/images/Feature.png'

const FaqSection = () => {
    const heading = "Features and Questions";
    const subHeading = "Ask us freequently. Make question about our features and works. Here we picked some popular question asked by public. we tried to answer them in a very easy way"
    return (
        <div className="font-poppins px-2 lg:px-[60px] mt-16">
            <Heading heading={heading} subHeading={subHeading}></Heading>

            <div className="flex flex-col lg:flex-row items-center justify-center mt-6">

                <div className="lg:w-[50%] ">
                    <div className='shadow-xl border rounded-xl flex justify-center'>
                        <img src={faq} alt="" />
                    </div>
                </div>

                <div className="space-y-2 lg:w-[50%]">

                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            What is the purpose of this survey website?
                        </div>
                        <div className="collapse-content">
                            <p>The purpose of our survey website is to gather valuable feedback from participants. This data help researchers in making informed decisions.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            How do I participate in a survey
                        </div>
                        <div className="collapse-content">
                            <p>To participate in a survey, simply visit our website and browse the available surveys. Once you find a survey you're interested in, click on it to start.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Are my responses anonymous and confidential?
                        </div>
                        <div className="collapse-content">
                            <p>Yes, your responses are completely anonymous and confidential. We ensure that all personal information is protected and never shared with third parties. </p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Can I see the results of the survey I participated in?
                        </div>
                        <div className="collapse-content">
                            <p>Depending on the survey, results may be shared with participants. Some surveys will provide a summary of the results after completion, while others may keep the results private for research purposes.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                        What should I do if I encounter technical issues while taking a survey?
                        </div>
                        <div className="collapse-content">
                            <p>If you experience any technical issues while taking a survey, please contact our support team for assistance. Provide as much detail as possible about the issue, and we will help resolve it promptly.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FaqSection;
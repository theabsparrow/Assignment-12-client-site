import { useState } from "react";
import AllSurvey from "../allSurvey/AllSurvey";
import useSurveys from "../hooks/useSurveys";



const AllSurveys = () => {
    const [filter, setFilter] = useState('');
    const [surveys] = useSurveys(filter);

    const handleFilter = (e) => {
        setFilter(e.target.value)
    }
    console.log(filter)
    return (
        <div className="font-poppins px-[60px] mt-6 space-y-5" >
            <div>
                <h1>Total Survey: {surveys.length}</h1>
            </div>
            <div className="flex items-start justify-center space-x-7">
                <div className="mb-[160px] flex justify-center items-center space-x-2">
                    <label htmlFor="filter by" className="text-xl font-medium text-[#859770]"> Filter By:</label>
                    <select onChange={handleFilter} name="category" id="category" className=" outline-none rounded-xl bg-[#859770] p-2 text-white">
                        <option value="">All</option>
                        <option value="Agriculture">Agriculture</option>
                        <option value="Education">Education</option>
                        <option value="Science">Science</option>
                        <option value="Nature">Nature</option>
                        <option value="Traveling">Traveling</option>
                    </select>
                </div>
                <div className="flex justify-center items-center space-x-2">
                    <label htmlFor="sort by" className="text-xl font-medium text-[#859770]"> Sort By:</label>
                    <select name="votes" id="votes" className=" outline-none rounded-xl bg-[#859770] p-2 text-white">
                        <option value="">Vote</option>
                        <option value="dsc">Descending Order</option>
                        <option value="asc">Ascending Order</option>

                    </select>
                </div>
            </div>
            {
                surveys.map(survey => <AllSurvey key={survey._id} survey={survey}></AllSurvey>)
            }
        </div>
    );
};

export default AllSurveys;
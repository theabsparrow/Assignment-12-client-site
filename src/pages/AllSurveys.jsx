import { useState } from "react";
import AllSurvey from "../allSurvey/AllSurvey";
import useSurveys from "../hooks/useSurveys";
import { Helmet } from "react-helmet";



const AllSurveys = () => {
    const [filter, setFilter] = useState('');
    const [sort , setSort] = useState("");
    const [surveys] = useSurveys(filter, sort);

    const handleFilter = (e) => {
        setFilter(e.target.value)
    }
    const handleSort = e => {
        setSort(e.target.value)
    }
    return (
        <div className="font-poppins px-2 lg:px-[60px] mt-6 space-y-5" >
            <Helmet>
                <title>All Surveys || SurveyAtlas</title>
            </Helmet>
            <div className="flex">
                <h1 className="bg-[#859770] px-2 py-1 rounded-xl text-white">Total Survey: <span className="bg-[#35DC7569] rounded-xl px-1">{surveys.length}</span></h1>
            </div>
            <div className="flex items-start justify-center space-x-7">
                <div className="mb-[130px] flex justify-center items-center space-x-2">
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
                    <select onChange={handleSort} name="votes" id="votes" className=" outline-none rounded-xl bg-[#859770] p-2 text-white">
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
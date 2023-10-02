import { IoLocationOutline } from 'react-icons/io5';
import {BiDollarCircle} from 'react-icons/bi';
const Job = ({job}) => {
    const {logo,job_title,company_name,remote_or_onsite,job_type,location,salary} = job;
    return (
        <div className='border p-3'>
            <img src={logo}/>
            <h2>{job_title}</h2>
            <p>{company_name}</p>
            <div className="flex">
                <button className="border-2 border-[#9873FF] rounded px-4 py-1 text-[#9873FF] font-semibold  mr-3">{remote_or_onsite}</button>
                <button className="border-2 border-[#9873FF] rounded px-4 py-1 text-[#9873FF] font-semibold ">{job_type}</button>
            </div>
            <div className="flex items-center my-4">
                <p className="flex items-center text-lg mr-5 gap-1"><IoLocationOutline></IoLocationOutline>{location}</p>
                <p className="flex items-center text-lg gap-1"><BiDollarCircle></BiDollarCircle>{salary}</p>
            </div>
            <div>
                <button className="bg-[#7E90FE] text-white font-bold px-3 py-2 rounded">View Details</button>
            </div>

        </div>
    );
};

export default Job;
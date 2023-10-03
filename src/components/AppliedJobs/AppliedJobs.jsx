import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";
// import { list } from "postcss";

const AppliedJobs = () => {

    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleJobDisplay = filter => {
        if(filter === 'all'){
            setDisplayJobs(appliedJobs);
        }
        else if (filter === 'remote') {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
                setDisplayJobs(remoteJobs);
        }
        else if(filter === 'onsite')
        {
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
                setDisplayJobs(onsiteJobs);
        }
    }

    useEffect(() => {
        const storedJobIds = getStoredJobApplication([]);
        if (jobs.length > 0) {
            // const jobApplyed = jobs.filter(job => storedJobIds.includes(job.id)) ///method: 1
            const jobApplied = [];
            for (const id of storedJobIds) { // Method : 2
                const job = jobs.find(job => job.id === id)
                if (job) {
                    jobApplied.push(job);
                }
            }
            // console.log(jobApplyed);
            setAppliedJobs(jobApplied);
            setDisplayJobs(jobApplied);
        }
    }, [jobs])
    return (
        <div>
            <h1>Apply for Jobs: {appliedJobs.length}</h1>
            <div className="dropdown ">
                    <label tabIndex={0} className="btn m-1">Filter By</label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li onClick={() => handleJobDisplay('all')}><a>All</a></li>
                    <li onClick={() => handleJobDisplay('remote')}><a>Remote</a></li>
                    <li onClick={() => handleJobDisplay('onsite')}><a>Onsite</a></li>
                </ul>
            </div>
            <ul>
                {
                    displayJobs.map(job => <li key={job.id}>
                        <div className="border-2 gap-5 p-5 m-3">
                            <span>{job.job_title}</span>
                            <h2>{job.company_name}</h2>
                        </div>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;
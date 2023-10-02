import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJob = () => {

    const [jobs, setJobs] = useState([]);

    // this is not an ideal way 
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])

    return (
        <div>
            <h1 className="text-4xl text-center font-semibold">Featured Jobs</h1>
            <p className="text-center my-5">Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className="grid grid-cols-2 gap-7 my-5">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={dataLength === jobs.length ? 'hidden' : ''}> 
                <div className="flex justify-center my-5">
                    <button onClick={() => { setDataLength(jobs.length) }}
                        className="btn btn-primary">Show all</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJob;
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localstorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const intId = parseInt(id);
    const job = jobs.find(job => job.id === intId)
    console.log(job);

    const handleApplyJob = () => {
        saveJobApplication(intId);
        toast('You have successfully apply.')
    }

    return (
        <div>
            {/* <h1>Job Details: {job.id}</h1> */}
            <div className="grid grid-cols-4 gap-3 my-5">
                <div className=" col-span-3">
                    <p className="mb-5"><span className="font-bold">Job Description: </span>{job.job_description}</p>
                    <p className="mb-5"><span className="font-bold">Job Responsibility: </span>{job.job_responsibility}</p>
                    <p className="mb-5"><span className="font-bold">Educational Requirements: </span> <br />{job.educational_requirements}</p>
                    <p className="mb-5"><span className="font-bold">Educational Requirements: </span> <br />{job.experiences}</p>

                </div>
                <div className="">
                    <div className="bg-slate-100 p-5">
                        <h2 className="font-bold text-2xl">Job Details</h2>
                        <hr className="my-5" />
                        <p className="mb-3"><span className="font-bold">Salary: </span>{job.salary}</p>
                        <p className="mb-5"><span className="font-bold">Job Title: </span>{job.job_title}</p>
                        <h2 className="font-bold">Contact Information</h2>
                        <hr className="my-5" />
                        <p className="mb-2"><span className="font-bold">Phone: </span>{job.contact_information.phone}</p>
                        <p className="mb-2"><span className="font-bold">Email: </span>{job.contact_information.email}</p>
                        <p className="mb-2"><span className="font-bold">Address: </span>{job.contact_information.address}</p>

                    </div>
                    <button onClick={handleApplyJob} className="btn btn-primary w-full mt-5">Apply now</button>
                    <ToastContainer />
                </div>
                
            </div>
        </div>
    );
};

export default JobDetails;
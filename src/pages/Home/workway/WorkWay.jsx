import workimg from "../../../assets/workway.avif"

const WorkWay = () => {

    return (
        <div className="flex flex-col md:flex-row ">
            <div className="md:flex-1 flex md:items-end ">
                <img src={workimg} alt="" />
            </div>
            <div className="md:flex-1  ">
                <div className="join join-vertical w-full">
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" checked="checked" />
                        <div className="collapse-title text-xl text-[#0D4329] font-medium">
                        Fixed Price
                        </div>
                        <div className="collapse-content">
                            <p className="text-gray-500">Set a total fixed cost for your job and create milestones to ensure you're satisfied every step of the way. Set a due date and the amount to be paid for each milestone.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl text-[#0D4329] font-medium">
                        Hourly
                        </div>
                        <div className="collapse-content">
                            <p>Track progress with ease and pay Freelancers by the hour using our Time Tracker software. If you hire multiple Freelancers for your job, you'll receive a breakdown of each Freelancer's hourly rate and time tracked.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-[#0D4329] text-xl font-medium">
                        Task-Based
                        </div>
                        <div className="collapse-content">
                            <p>Pay for a single completed online freelance task, however big or small. Create and assign tasks as needed and generate invoice for each task once it is completed.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-[#0D4329] text-xl font-medium">
                        Recurring Payment
                        </div>
                        <div className="collapse-content">
                            <p>Easily pay your go-to Freelancers on an ongoing basis. Set up to four recurring payment rules for any given job - pay every week, every other week, every month, or every quarter. Stop or resume payments at any point with just a click of a button.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkWay;





import { IoIosCheckmarkCircle } from 'react-icons/io';
import businessSolutionImg from "../../../assets/businessSolution.webp"
const BusinessSolution = () => {
    return (
        <div className="md:h-[150vh] lg:h-[90vh] p-5 lg:flex items-center bg-[#0D084D]">
            <div className="p-5">
                <p className="text-white text-4xl font-bold">HirePark
                    <span className="text-[#1DBF73]">.</span>
                    <span className="text-xl font-medium">Business Solutions</span>
                </p>
                <p className="text-white text-3xl md:text-4xl font-bold mt-5">Advanced solutions and <br /> professional talent for <br /> businesses</p>
                <div className="space-y-3 mt-5">
                    <div className='flex items-center gap-2'>
                        <div className='text-white text-2xl'>
                            <IoIosCheckmarkCircle></IoIosCheckmarkCircle>
                        </div>
                        <div>
                            <p className="text-xl font-bold text-white">HirePark Pro</p>
                            <p className="text-white text-base">Access top freelancers and professional business tools for any project</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='text-white text-2xl'>
                            <IoIosCheckmarkCircle></IoIosCheckmarkCircle>
                        </div>
                        <div>
                            <p className="text-xl font-bold text-white">HirPark Certified</p>
                            <p className="text-white text-base">Build your own branded marketplace of certified experts</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='text-white text-2xl'>
                            <IoIosCheckmarkCircle></IoIosCheckmarkCircle>
                        </div>
                        <div>
                            <p className="text-xl font-bold text-white">HirePark Enterprise</p>
                            <p className="text-white text-base">Manage your freelance workforce and onboard additional talent with an end-to-end SaaS solution</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* img */}
            <div className='hidden md:flex  justify-center p-5'>
                <img className='md:w-3/5 lg:w-3/4' src={businessSolutionImg} alt="" />
            </div>
        </div>
    );
};

export default BusinessSolution;
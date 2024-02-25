import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useAxios from '../useAxios/useAxios';
import JobCategoryCard from '../../pages/Home/JobCategories/jobCategoryCard';
import "./ReactTabs.css"

const ReactTabs = () => {
    const axiosInstance = useAxios()
    const [jobs, setJobs] = useState([])
    const [initialJob, setInitialJob] = useState([])
    const [isExist, setIsExist] = useState(true)
    useEffect(() => {
        axiosInstance.get(`/api/v1/jobs?category=Web Development`)
            .then(res => setInitialJob(res.data))
    }, [])
    const handleCategory = category => {
        console.log(category)
        axiosInstance.get(`/api/v1/jobs?category=${category}`)
            .then(res => setJobs(res.data))
    }
    const categories = ["Web Development", "Digital Marketing", "Graphics Design",]
    return (
        <div>

            <Tabs>
                <TabList>
                    {
                        categories?.map((category, index) => <Tab onClick={() => {
                            handleCategory(category)
                            setIsExist(false)
                        }} key={index} >{category}</Tab>)
                    }
                </TabList>
                <TabPanel>
                    <div className="  bg-base-100 grid grid-cols-1 md:p-5 p-2 lg:grid-cols-2 gap-3">
                        {
                            isExist ? initialJob?.map(job => <JobCategoryCard key={job?._id} job={job}></JobCategoryCard>) :
                                jobs?.map(job => <JobCategoryCard key={job?._id} job={job}></JobCategoryCard>)

                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="  bg-base-100 grid grid-cols-1 md:p-5 p-2  lg:grid-cols-2 gap-3">
                        {
                            isExist ? initialJob?.map(job => <JobCategoryCard key={job?._id} job={job}></JobCategoryCard>) :
                                jobs?.map(job => <JobCategoryCard key={job?._id} job={job}></JobCategoryCard>)

                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="  bg-base-100 grid grid-cols-1 md:p-5 p-2  lg:grid-cols-2 gap-3">
                        {
                            isExist ? initialJob?.map(job => <JobCategoryCard key={job?._id} job={job}></JobCategoryCard>) :
                                jobs?.map(job => <JobCategoryCard key={job?._id} job={job}></JobCategoryCard>)

                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReactTabs;
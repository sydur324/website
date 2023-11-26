import { useState } from 'react';
import './EducationPage.css'

const EducationPage = () => {
    const [toggle, setToggle] = useState(1)
    const toggleTab = (index) => {
        setToggle(index)
    }
    return (
        <div className="xl:px-20 lg:px-16 md:px-14 sm:px-12 px-12 py-8">
            <div className='education-bg py-16 px-12'>
                <div className='z-10 relative'>
                    <h2 className='text-[#262626] lg:text-2xl md:text-2xl sm:text-xl text-base font-bold'>Education & Scholarship</h2>
                </div>
            </div>

            <div className="lg:flex items-center  lg:gap-0 gap-6 lg:justify-between justify-center lg:text-left text-center">
                <div className=" lg:w-[60%] pt-8">
                    <h2 className="text-xl font-bold">WEG Scholarship</h2>
                    <p className="py-3 text-[#474646] ">
                        WEG provides a good number of scholarships every year to the students
                        throughout the world. The objective of the scholarship program is to promote
                        talents by accelerating the path of education. Students must apply for the scholarship
                        through the prescribed application form. WEG provides scholarship in three categories:
                    </p>
                </div>
            </div>

            <div className="py-4">
                <div className="flex head-tab border-b">
                    <button
                        onClick={() => toggleTab(1)}
                        className={toggle === 1 ? "tabs active-tabs px-4 py-2" : "px-4 py-2  tabs"}

                    >Category-A</button>

                    <button
                        onClick={() => toggleTab(2)}
                        className={toggle === 2 ? "tabs active-tabs px-4 py-2" : "px-4 py-2  tabs"}>Category-B</button>

                    <button
                        onClick={() => toggleTab(3)}
                        className={toggle === 3 ? "tabs active-tabs px-4 py-2" : "px-4 py-2  tabs"}
                    >Category-C</button>
                </div>


                <div>
                    <div className={toggle === 1 ? "content active-content" : "content"}>
                        <div className="border my-4 py-4 px-4">
                            <h2 className="font-bold">Category-A</h2>

                            <div className="py-4">
                                <p className="leading-6">
                                    Students who are studying at college level (Higher secondary) are
                                    eligible for this category. GPA in SSC/O Level will be the basis for selection.
                                    However, poor students with minimum GPA 3.00 can also apply. In that case he or
                                    she must submit a recommendation letter from the head of his or her institution.
                                    Students must submit the photocopy of transcript with the prescribed application
                                    form.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={toggle === 2 ? "content active-content" : "content"}>
                        <div className="border my-4 py-4 px-4">
                            <h2 className="font-bold">Category-B</h2>

                            <div className="py-4">
                                <p className="leading-6">
                                    Students who are studying at university level (graduate and post-graduate)
                                    are eligible for this category. GPA in SSC/O Level and HSC/A Level will be the basis
                                    for selection. However, poor students with minimum GPA 3.00 in SSC/O Level and HSC/A
                                    Level can also apply. In that case he or she must submit a recommendation letter from
                                    the head of his or her institution/department. Students must submit the photocopy of
                                    transcripts with the prescribed application form.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={toggle === 3 ? "content active-content" : "content"}>
                        <div className="border my-4 py-4 px-4">
                            <h2 className="font-bold">Category-C</h2>

                            <div className="py-4">
                                <p className="leading-6">
                                    Phil and PhD candidates are eligible for this category.
                                    CGPA in graduate and post graduate level will be the basis for selection.
                                    However, poor students with minimum CGPA 3.00 in both graduate and post
                                    graduate level can also apply. In that case he or she must submit a
                                    recommendation letter from his or her supervisor. Candidates must
                                    submit the photocopy of transcripts with the prescribed application form.
                                </p>
                            </div>
                        </div>
                    </div>







                </div>
            </div>
        </div>
    );
};
export default EducationPage;
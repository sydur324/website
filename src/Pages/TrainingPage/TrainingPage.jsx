import { useState } from 'react';
import './TrainingPage.css'

const TrainingPage = () => {
    const [toggle, setToggle] = useState(1)
    const toggleTab = (index) => {
        setToggle(index)
    }
    return (
        <div className="xl:px-20 lg:px-16 md:px-14 sm:px-12 px-12 py-8">
            <div className='trainging-bg py-16 px-12'>
                <div className='z-10 relative'>
                    <h2 className='text-[#262626] lg:text-2xl md:text-2xl sm:text-xl text-base font-bold'>Training of WEG</h2>
                </div>
            </div>

            <div>
                <h2 className='font-bold text-xl text-[#F46957] py-2 mt-2 border-b'>Training</h2>

                <p className='py-4'>
                    WEG organizes two types of research based training programs:
                    Business and Social Research Methodology (theoretical) and the
                    application of SPSS program in research program. The duration of
                    Business and Social Research Methodology is 3 months
                    (2 day per week and two classes per day). The duration of SPSS
                    training program is 2 months (2 days per week, and two classes
                    per day). The tanning fees are equivalent to USD 200 and USD 175
                    for Business and Social Research Methodology and SPSS respectively
                    (each trainee).
                </p>

                <div className="py-4">
                    <div className="flex head-tab border-b">
                        <button
                            onClick={() => toggleTab(1)}
                            className={toggle === 1 ? "tabs active-tabs px-4 py-2" : "px-4 py-2  tabs"}

                        >Methodology</button>

                        <button
                            onClick={() => toggleTab(2)}
                            className={toggle === 2 ? "tabs active-tabs px-4 py-2" : "px-4 py-2  tabs"}>SPSS</button>
                    </div>


                    <div>
                        <div className={toggle === 1 ? "content active-content" : "content"}>
                            <div className="border my-4 py-4 px-4">
                                <h2 className="font-bold">Methodology</h2>

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
                                <h2 className="font-bold">SPSS</h2>

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

           
                    </div>
                </div>
            </div>
        </div>
    );
};
export default TrainingPage;
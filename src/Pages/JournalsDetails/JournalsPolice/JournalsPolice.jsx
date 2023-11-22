import { useState } from 'react';
import './JournalsPolice.css'

const JournalsPolice = () => {
    const [toggle, setToggle] = useState(1)
    const toggleTab = (index) => {
        setToggle(index)
    }
    return (
        <div className="xl:px-20 lg:px-16 md:px-14 sm:px-12 px-12 py-6">
            <div className='flex lg:flex-row flex-col  w-full gap-6'>


                <div className="phead-tab border xl:flex flex-col lg:flex-col md:flex-row sm:flex-col lg:w-1/5 text-xl font-bold">
                    <button
                        onClick={() => toggleTab(1)}
                        className={toggle === 1 ? "ptabs active-tabs border-none px-2 lg:px-0 py-3 w-full" : "px-2 lg:px-0 border-b py-3 w-full  ptabs"}

                    >E-Publication FirstTM</button>

                    <button
                        onClick={() => toggleTab(2)}
                        className={toggle === 2 ? "ptabs active-tabs border-none w-full px-2 lg:px-0 py-3" : " border-b py-3 px-2 lg:px-0 w-full ptabs"}>Plagiarism Policy</button>

                    <button
                        onClick={() => toggleTab(3)}
                        className={toggle === 3 ? "ptabs active-tabs border-none w-full px-2 lg:px-0  py-3" : " border-b py-3 px-2 lg:px-0 w-full ptabs"}
                    >Copyright Policy</button>



                    <button
                        onClick={() => toggleTab(4)}
                        className={toggle === 4 ? "ptabs active-tabs border-none w-full px-2 lg:px-0  py-3" : " border-b px-2 lg:px-0 py-3 w-full ptabs"}
                    >Submission Policy</button>

                    <button
                        onClick={() => toggleTab(5)}
                        className={toggle === 5 ? "ptabs active-tabs border-none w-full px-2 lg:px-0 py-2" : " border-b py-2 px-2 lg:px-0 w-full ptabs"}
                    >Review Policy</button>

                    <button
                        onClick={() => toggleTab(6)}
                        className={toggle === 6 ? "ptabs active-tabs w-full px-2 lg:px-0  py-2" : " py-2 px-2 lg:px-0 w-full ptabs"}
                    >Publication Fee</button>
                </div>


                <div className='border w-full'>
                    <div className={toggle === 1 ? "content active-content" : "content"}>
                        <div className='py-4 px-4'>
                            <h2 className='font-bold text-[#5b5a5a]'>E-Publication First<sup>TM</sup></h2>
                            <p className='mt-4'>
                                E-Publication FirstTMis a feature offered through our journal platform.
                                It allows PDF version of manuscripts that have been peer reviewed and accepted,
                                to be hosted online prior to their inclusion in a final printed journal. Readers
                                can freely access or cite the article. The accepted papers are published online
                                within one week after the completion of all necessary publishing steps.
                            </p>
                        </div>
                    </div>

                    <div className={toggle === 2 ? "content active-content" : "content"}>
                        <div className='py-4 px-4'>
                            <h2 className='font-bold text-[#5b5a5a]'>Plagiarism Policy</h2>
                            <p className='mt-4'>
                                The editorial board is very strict regarding plagiarism.
                                The journal believes that taking the ideas and work of others
                                without giving them credit is unfair and dishonest. Copying even
                                one sentence from someone else's manuscript, or even one of your
                                own that has previously been published, without proper citation is
                                considered plagiarism-use your own words instead. The editorial board
                                retains the absolute authority to reject the review process of a
                                submitted manuscript if it subject to minor or major plagiarism and
                                even may cancel the publication upon the complaint of victim(s) of
                                plagiarism.
                            </p>
                        </div>
                    </div>

                    <div className={toggle === 3 ? "content active-content" : "content"}>
                        <div className='py-4 px-4'>
                            <h2 className='font-bold text-[#5b5a5a]'>Copyright</h2>
                            <p className='mt-4'>
                                Copyrights for articles published in the journal are retained by the authors,
                                with first publication rights granted to the journal. The journal/publisher
                                is not responsible for subsequent uses of the work. It is the author's
                                responsibility to bring an infringement action if so desired by the author.
                            </p>
                        </div>
                    </div>

                    <div className={toggle === 4 ? "content active-content" : "content"}>
                        <div className='py-4 px-4'>
                            <h2 className='font-bold text-[#5b5a5a]'>Submission</h2>
                            <p className='mt-4'>
                                The author should submit the paper via e-mail to the
                                executive editor at editor@aripd.net
                                Mention the name of the journal in which you are interested
                                to publish your paper as ARIPD follows central submission
                                policy for all journals i.e. same e-mail (<span className='text-[#F46957]'>editor@aripd.net</span>)
                                for submission in any ARIPD journal.
                            </p>
                        </div>
                    </div>

                    <div className={toggle === 5 ? "content active-content" : "content"}>
                        <div className='py-4 px-4'>
                            <h2 className='font-bold text-[#5b5a5a]'>Review Policy</h2>
                            <p className='mt-4'>
                                The journal follows double blind peer review policy.
                                The paper is sent to two reviewers (the experts in respective field)
                                to review the paper in the light of journal's guidelines and features of a
                                quality research paper. For papers which require changes, the same reviewers
                                will be used to ensure that the quality of the revised paper is acceptable.
                            </p>
                        </div>
                    </div>

                    <div className={toggle === 6 ? "content active-content" : "content"}>
                        <div className='py-4 px-4'>
                            <h2 className='font-bold text-[#5b5a5a]'>Publication Fee</h2>
                            <p className='mt-4'>
                                The publication processing fee for a research paper is 200 USD.
                                The author/corresponding author will get one print copy. However,
                                the author may order for additional print copy. The charge for each
                                additional print copy is 30 USD. The publication fee is charged only
                                for accepted paper. The author/corresponding author has to pay the
                                publication as per the method determined by the executive editor.
                                The author will get official receipt of publication fee with proper
                                seal and signature.
                            </p>
                        </div>
                    </div>



                </div>

            </div>
        </div>
    );
};
export default JournalsPolice;
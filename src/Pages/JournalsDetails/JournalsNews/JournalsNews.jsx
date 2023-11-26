import { useState } from "react";

const JournalsNews = () => {
    const [toggle, setToggle] = useState(1)
    const toggleTab = (index) => {
        setToggle(index)
    }
    return (
        <div className="">
            <div className='bg-[#f4695721] my-8 xl:px-20 lg:px-16 md:px-14 sm:px-12 px-12 py-8'>
                <h2 className='text-2xl font-bold'>Latest News</h2>
                <p className='py-2 font-medium text-[#4b4b4b]'>
                    Wherever & whenever you need us. We are here for
                    you  <br></br> contact us for
                    all your support needs
                    be it technical, general queries or information support.
                </p>
            </div>

            <div className="xl:px-20 lg:px-16 md:px-14 sm:px-12 px-12">
                <div className='flex lg:flex-row flex-col  w-full gap-6'>
                    <div className="phead-tab border xl:flex flex-col lg:flex-col md:flex-row sm:flex-col lg:w-1/4 text-xl font-bold">
                        <button
                            onClick={() => toggleTab(1)}
                            className={toggle === 1 ? "ptabs active-tabs border-none px-2 lg:px-0 py-3 w-full" : "px-2 lg:px-0 border-b py-3 w-full  ptabs"}

                        >Best Paper Award Declared</button>

                        <button
                            onClick={() => toggleTab(2)}
                            className={toggle === 2 ? "ptabs active-tabs border-none w-full px-2 lg:px-0 py-3" : " border-b py-3 px-2 lg:px-0 w-full ptabs"}>
                            Recruitment of Editor
                        </button>

                        <button
                            onClick={() => toggleTab(3)}
                            className={toggle === 3 ? "ptabs active-tabs border-none  w-full px-2 lg:px-0  py-3" : "border-b  py-3 px-2 lg:px-0 w-full ptabs"}
                        >WEG is now indexed with DRJI</button>
                    </div>

                    <div className='border w-full'>
                        <div className={toggle === 1 ? "content active-content" : "content"}>
                            <div className=''>
                                <div>
                                    <h2 className='font-bold px-4 py-4 text-[#060606] bg-[#FDEBEA]'>Best Paper Award Declared</h2>
                                    <p className='mt-4 py-2 px-4'>
                                        The Editorial Board of IJBSS has proudly declared the best papers
                                        published in different issues in 2013. The readers, authors and
                                        researchers can read the best articles in IJBSS Website. As IJBSS
                                        follows double blind peer review policy strictly, every paper published
                                        in IJBSS is supposed to be quality research paper. However, the best paper
                                        selection team gives special emphasize on every aspect of a quality research
                                        paper and chooses 2 or 3 best papers published in each issue of the journal.
                                    </p>
                                </div>

                                <div className="py-6">
                                    <h2 className='font-bold px-4 py-4 text-[#060606] bg-[#FDEBEA]'>Recruitment of Editor</h2>
                                    <p className='mt-4 py-2 px-4'>
                                        IJBSS is inviting self-enthusiastic and experienced faculty and
                                        researchers worldwide to be the part of its editorial team. Since
                                        IJBSS follows double blind peer review policy, it welcomes those
                                        faculty and researchers as the editors who have tolerance and sufficient
                                        time to edit/review a research paper rigorously. Please note that
                                        it is a voluntary activity and no financial remuneration will be
                                        given to the editor. If you think that you are the right person
                                        that IJBSS is looking for, please download the ‘application form
                                        for editor’ and send the completed form to editor@ijbssnet.com
                                        along with your recent photograph and latest CV.
                                    </p>
                                </div>

                                <div className="py-6">
                                    <h2 className='font-bold px-4 py-4 text-[#060606] bg-[#FDEBEA]'>WEG is now indexed with DRJI</h2>
                                    <p className='mt-4 py-2 px-4'>
                                        WEG is now indexed with DRJI, a newly
                                        established directory with the promise of
                                        indexing best journals. Visit <a className="text-[#F46957] cursor-pointer  duration-300" href="" target="_blank">www.drji.org</a>
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className={toggle === 2 ? "content active-content" : "content"}>
                            <div className=''>
                                <div>
                                    <h2 className='font-bold px-4 py-4 text-[#060606] bg-[#FDEBEA]'>Recruitment of Editor</h2>
                                    <p className='mt-4 py-2 px-4'>
                                        IJBSS is inviting self-enthusiastic and experienced faculty and
                                        researchers worldwide to be the part of its editorial team. Since
                                        IJBSS follows double blind peer review policy, it welcomes those
                                        faculty and researchers as the editors who have tolerance and sufficient
                                        time to edit/review a research paper rigorously. Please note that
                                        it is a voluntary activity and no financial remuneration will be
                                        given to the editor. If you think that you are the right person
                                        that IJBSS is looking for, please download the ‘application form
                                        for editor’ and send the completed form to editor@ijbssnet.com
                                        along with your recent photograph and latest CV.
                                    </p>
                                </div>

                                <div className="py-6">
                                    <h2 className='font-bold px-4 py-4 text-[#060606] bg-[#FDEBEA]'>Best Paper Award Declared</h2>
                                    <p className='mt-4 py-2 px-4'>
                                        The Editorial Board of IJBSS has proudly declared the best papers
                                        published in different issues in 2013. The readers, authors and
                                        researchers can read the best articles in IJBSS Website. As IJBSS
                                        follows double blind peer review policy strictly, every paper published
                                        in IJBSS is supposed to be quality research paper. However, the best paper
                                        selection team gives special emphasize on every aspect of a quality research
                                        paper and chooses 2 or 3 best papers published in each issue of the journal.
                                    </p>
                                </div>

                                <div className="py-6">
                                    <h2 className='font-bold px-4 py-4 text-[#060606] bg-[#FDEBEA]'>WEG is now indexed with DRJI</h2>
                                    <p className='mt-4 py-2 px-4'>
                                        WEG is now indexed with DRJI, a newly
                                        established directory with the promise of
                                        indexing best journals. Visit <a className="text-[#F46957] cursor-pointer  duration-300" href="" target="_blank">www.drji.org</a>
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className={toggle === 3 ? "content active-content" : "content"}>
                            <div className=''>
                                <div>
                                    <h2 className='font-bold px-4 py-4 text-[#060606] bg-[#FDEBEA]'>WEG is now indexed with DRJI</h2>
                                    <p className='mt-4 py-2 px-4'>
                                        WEG is now indexed with DRJI, a newly
                                        established directory with the promise of
                                        indexing best journals. Visit <a className="text-[#F46957] cursor-pointer  duration-300" href="" target="_blank">www.drji.org</a>
                                    </p>
                                </div>

                                <div className="py-6">
                                    <h2 className='font-bold px-4 py-4 text-[#060606] bg-[#FDEBEA]'>Best Paper Award Declared</h2>
                                    <p className='mt-4 py-2 px-4'>
                                        The Editorial Board of IJBSS has proudly declared the best papers
                                        published in different issues in 2013. The readers, authors and
                                        researchers can read the best articles in IJBSS Website. As IJBSS
                                        follows double blind peer review policy strictly, every paper published
                                        in IJBSS is supposed to be quality research paper. However, the best paper
                                        selection team gives special emphasize on every aspect of a quality research
                                        paper and chooses 2 or 3 best papers published in each issue of the journal.
                                    </p>
                                </div>

                                <div className="py-6">
                                    <h2 className='font-bold px-4 py-4 text-[#060606] bg-[#FDEBEA]'>Recruitment of Editor</h2>
                                    <p className='mt-4 py-2 px-4'>
                                        IJBSS is inviting self-enthusiastic and experienced faculty and
                                        researchers worldwide to be the part of its editorial team. Since
                                        IJBSS follows double blind peer review policy, it welcomes those
                                        faculty and researchers as the editors who have tolerance and sufficient
                                        time to edit/review a research paper rigorously. Please note that
                                        it is a voluntary activity and no financial remuneration will be
                                        given to the editor. If you think that you are the right person
                                        that IJBSS is looking for, please download the ‘application form
                                        for editor’ and send the completed form to editor@ijbssnet.com
                                        along with your recent photograph and latest CV.
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
export default JournalsNews;
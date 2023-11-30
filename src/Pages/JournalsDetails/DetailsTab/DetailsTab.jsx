import { useState } from "react";
import './DetailsTab.css'
import { IoIosCheckboxOutline } from "react-icons/io";
import JournalArchive from "../JournalArchive/JournalArchive";
import CurrentJournal from "../CurrentJournal/CurrentJournal";
import AboutWEG from "../AboutWEG/AboutWEG";
import EditorialBoard from "../EditorialBoard/EditorialBoard";
import AdviserBoard from "../AdviserBoard/AdviserBoard";
import CurrentModel from "../CurrentModel/CurrentModel";

const DetailsTab = ({ item }) => {

    

    const [toggle, setToggle] = useState(1)
    const toggleTab = (index) => {
        setToggle(index)
    }

    const proces = [
        {
            "rule": "Paper is sent to 2 reviewers for review.",
        },
        {
            "rule": "The reviewers' recommendations determine whether a paper will be accepted / accepted subject to change / subject to resubmission with significant changes / rejected.",
        },
        {
            "rule": "For papers which require changes, the same reviewers will be used to ensure that the quality of the revised paper is acceptable.",
        },
        {
            "rule": "If the paper is accepted by the reviewers, author(s) will be notified to pay the author fee Acceptance letter will be provided after the payment has been made.",
        },
        {
            "rule": "Author/Corresponding Author will be notified about the possible date of publication (both online and print).",
        },
        {
            "rule": "One hard copy of the published journal (Print) for each article will be sent to the author/corresponding author.",
        },
        {
            "rule": "The review process takes maximum two weeks.",
        }
    ]


    return (
        <div className="">
            <div className="flex flex-wrap head-tab border">
                <button
                    onClick={() => toggleTab(1)}
                    className={toggle === 1 ? "tabs active-tabs px-4 py-2" : "px-4 py-2  tabs"}

                >Aims & Scope</button>

                <button
                    onClick={() => toggleTab(2)}
                    className={toggle === 2 ? "tabs active-tabs px-4 py-2" : "px-4 py-2  tabs"}>Editorial Board</button>

                <button
                    onClick={() => toggleTab(3)}
                    className={toggle === 3 ? "tabs active-tabs px-4 py-2" : "px-4 py-2  tabs"}
                >Advisory Board</button>



                <button
                    onClick={() => toggleTab(4)}
                    className={toggle === 4 ? "tabs active-tabs px-4 py-2" : "px-4 py-2  tabs"}
                >Current Issue</button>

                <button
                    onClick={() => toggleTab(5)}
                    className={toggle === 5 ? "tabs active-tabs px-4 py-2" : "px-4 py-2  tabs"}
                >CPI</button>

                <button
                    onClick={() => toggleTab(6)}
                    className={toggle === 6 ? "tabs active-tabs px-4 py-2" : "px-4 py-2  tabs"}
                >Submission</button>

                <button
                    onClick={() => toggleTab(7)}
                    className={toggle === 7 ? "tabs active-tabs px-4 py-2" : "px-4 py-2  tabs"}
                >Archive
                </button>

                <button
                    onClick={() => toggleTab(8)}
                    className={toggle === 8 ? "tabs active-tabs px-4 py-2" : "px-4 py-2  tabs"}
                >Call for Papers</button>
            </div>

            <div>
                <div className={toggle === 1 ? "content active-content" : "content"}>
                    <div className="border my-4 py-4 px-4">
                        <h2 className="font-bold">Aims & Scope</h2>

                        <div className="py-4">
                            <p>{item.amis}</p>

                        </div>
                    </div>
                </div>

                <div className={toggle === 2 ? "content active-content" : "content"}>
                    <div className="border my-4 py-4 px-4">
                        <h2 className="font-bold">Editorial Board</h2>
                        <EditorialBoard></EditorialBoard>
                    </div>
                </div>

                <div className={toggle === 3 ? "content active-content" : "content"}>
                    <div className="border my-4 py-4 px-4">
                        <h2 className="font-bold">International Advisory Board</h2>

                      <AdviserBoard></AdviserBoard>
                    </div>
                </div>

                <div className={toggle === 4 ? "content active-content" : "content"}>
                    <CurrentJournal></CurrentJournal>
                </div>

                <div className={toggle === 5 ? "content active-content" : "content"}>
                    hi
                </div>
                <div className={toggle === 6 ? "content active-content" : "content"}>
                    <div className="border my-4 py-4 px-4">
                        <h2 className="font-bold">Process Of Submission</h2>

                        <div className="py-4">
                            <p className="py-2 font-medium">All manuscripts must be submitted electronically
                                through the e-mail to the editor at <span className="font-bold cursor-pointer hover:text-[#EF645A] duration-300">editor@ijllnet.com</span>
                            </p>
                            <p className="py-2 font-medium">
                                Authors are advised to follow the <span className="font-bold cursor-pointer hover:text-[#EF645A] duration-300">Author
                                    Guidelines</span> in preparing the manuscript before submission.
                            </p>

                            <h2 className="font-bold">Review and Publication Process</h2>
                            <p className="py-2 font-medium">
                                A full double-blind refereeing process is used that comprises of the following steps.
                            </p>

                            

                            <div className="py-4">
                                <h2 className="font-bold">Copyright</h2>
                                <p className="py-2 font-medium">
                                    Copyrights for articles published in IJLL are retained by the authors,
                                    with first publication rights granted to the journal. The journal/publisher
                                    is not responsible for subsequent uses of the work. It is the author's
                                    responsibility to bring an infringement action if so desired by the author.
                                </p>

                                <h2 className="font-bold">Publication fee</h2>
                                <p className="py-2 font-medium">
                                    If the paper is accepted for publication, author(s) will be asked to pay 200 USD as
                                    article publication fee in order to defray the operating costs. Waiver policy is not
                                    applicable.
                                    The payment method will be notified by the editor after the acceptance of the paper.
                                </p>

                                <p className="py-2 font-medium">
                                    Author(s) will be entitled to one copy of the printed journal with free of charge i.e.
                                    one printed copy is provided against one article disregarding the number of the authors
                                    Authors can also get
                                    additional copies of the printed journal by paying 30 USD for each additional copy.
                                </p>
                            </div>


                        </div>
                    </div>
                </div>

                <div className={toggle === 7 ? "content active-content" : "content"}>
                  hi
                </div>

                <div className={toggle === 8 ? "content active-content" : "content"}>
                    <div className="border my-4 py-4 px-4">
                        <h2 className="font-bold">Call for Papers</h2>

                        <div className="py-4">
                            <p className="">  is a quarterly peer reviewed journal published by
                                <span className="text-[#F46957] px-1 cursor-pointer hover:border-b border-[#f4695765]">Center for Promoting Ideas (CPI).</span>
                            </p>

                            <p className="py-3">
                                It covers the areas of business and social science such as management,
                                marketing, finance, economics, banking, accounting, human resources management,
                                international business, hotel and tourism, entrepreneurship development, business
                                ethics, international relations, law, development studies, population studies,
                                political science, history, journalism and mass communication, corporate governance,
                                cross-cultural studies, public administration, psychology, philosophy, sociology,
                                women studies,
                                religious studies, social welfare, anthropology, linguistics, education and so on.
                            </p>

                            <p>
                                 publishes original papers, review papers, conceptual
                                framework, analytical and simulation models, case studies,
                                empirical research, technical notes, and book reviews.
                            </p>

                            <p className="py-3">Send your manuscript to the editor at <span className="font-medium text-[#F46957] cursor-pointer">editor@ijllnet.com</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default DetailsTab;
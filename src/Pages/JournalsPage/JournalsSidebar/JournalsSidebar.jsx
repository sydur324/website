import useJournals from "../../../Hooks/useJournals";


const JournalsSidebar = ({ subList, filterSub, setJournals }) => {
    const [journalls] = useJournals()
    return (
        <div className="lg:w-1/4 hidden lg:block">
            <div className="bg-[#E5E5E5]  px-20 py-6">
                <h2 className="text-base font-bold text-[#115680]">
                    Journals by Subjects
                </h2>
                <div>
                    <div className="space-y-2 py-4 cursor-pointer flex flex-col text-lg font-medium">
                        <button className="text-left" onClick={() => setJournals(journalls)}>
                            All
                        </button>
                        {
                            subList.map((sub, index) => (
                                <button className="text-left" onClick={() => filterSub(sub)} key={index}>
                                    {sub}
                                </button>
                            ))

                        }
                    </div>
                </div>
            </div>
        </div>
    );
};
export default JournalsSidebar;
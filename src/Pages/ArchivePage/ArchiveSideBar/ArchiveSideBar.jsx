import useArchive from "../../../Hooks/useArchive";

const ArchiveSideBar = ({ yearList, filterYear, setArchivess }) => {
    const [archives, refetch] = useArchive()
    return (
        <div className="lg:w-1/4 hidden lg:block">
            <div className="bg-[#E5E5E5]  px-20 py-6">
                <h2 className="text-base font-bold text-[#115680]">
                    Archive:
                </h2>
                <div>
                    <div className="space-y-2 py-4 cursor-pointer flex flex-col text-lg font-medium">
                        <button className="text-left" onClick={() => setArchivess(archives)}>
                            All
                        </button>
                        {
                            yearList.map((year,index) => (
                                <button className="text-left" onClick={() => filterYear(year)} key={index}>
                                    {year}
                                </button>
                            ))

                        }
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ArchiveSideBar;
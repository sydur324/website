import JournalVolum from "../JournalVolum/JournalVolum";

const JournalArchive = ({ archives }) => {


    return (
        <div className="">
            <div className=" my-4">
                <div className="flex gap-4 w-full">

                    <div className="w-1/5">
                        <div className="bg-[#F46957]">
                            {
                                archives.map((year, index) => <div key={index}>
                                    <div className="flex item-center justify-center border-b py-2 hover:bg-[#115680] hover:text-white  cursor-pointer text-white font-medium space-x-1">
                                        <p>Year</p>
                                        <p>:</p>
                                        <li className="list-none bg-[]">{year.year}</li>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>

                    <div className="w-full">
                        
                        <div>
                            {
                                archives.map((volums, index) => <div className="" key={index}>
                                    <div className="">
                                   {
                                    volums.volum.map((volumInfo,index) => <JournalVolum key={index} volum={volumInfo}>

                                    </JournalVolum>)
                                   }

                                    </div>
                                </div>)
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
export default JournalArchive;
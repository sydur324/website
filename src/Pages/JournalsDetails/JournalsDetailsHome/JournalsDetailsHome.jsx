import { useEffect, useState } from "react";
import DetailsTab from "../DetailsTab/DetailsTab";

const JournalsDetailsHome = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch("single.json")
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, [])
    return (
        <div className="xl:px-20 lg:px-16 md:px-14 sm:px-12 px-12">
            <div className="flex w-full relative">
                <div className="lg:w-4/5 w-full ">
                    {
                        items.map(item => <div key={item.id}>
                            <div>
                                <div className="lg:flex gap-6 lg:space-y-0 space-y-4 py-8">
                                    <div className="lg:w-1/4  w-full"><img className="w-full" src={item.image} alt="" /></div>
                                    <div className="space-y-2 lg:w-3/4 w-full">
                                        <h2 className="text-xl font-medium text-[#F46957]">{item.title}</h2>
                                        <div className="lg:flex items-center lg:space-x-2 gap-2">
                                            <p className="font-bold">ISSN :</p>
                                            <div className="lg:flex lg:space-x-2 lg:space-y-0 space-y-2 gap-2 text-[#262626c0]">
                                                <p>{item.issnP} (Print Version) /</p>
                                                <p>{item.issnE} (Electronic Version)</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <p className="font-bold">Frequency:</p>
                                            <p className="text-[#262626c0]">{item.frequency}</p>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <p className="font-bold">Nature:</p>
                                            <p className="text-[#262626c0]">{item.Nature}</p>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <p className="font-bold flex "><span className="lg:block xl:block hidden">Submission</span> E-mail:</p>
                                            <p className="text-[#262626c0]">{item.email}</p>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <p className="font-bold">Language of Publication</p>
                                            <p className="text-[#262626c0]">{item.Language}</p>
                                        </div>
                                        <p className="text-[#262626c0]">{item.decription.slice(0, 200)}</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <DetailsTab item={item}></DetailsTab>
                            </div>
                        </div>)
                    }
                </div>

                <div className="w-1/4 bg-[#F46957] absolute top-0 right-0">
                    hi
                </div>

            </div>
        </div>
    );
};
export default JournalsDetailsHome;
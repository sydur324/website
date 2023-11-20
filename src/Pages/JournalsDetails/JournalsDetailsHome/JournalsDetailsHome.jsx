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
                <div className="w-4/5 ">
                    {
                        items.map(item => <div key={item.id}>
                            <div>
                                <div className="flex gap-6 py-8">
                                    <div className="w-2/4"><img className="w-full" src={item.image} alt="" /></div>
                                    <div className="space-y-2">
                                        <h2 className="text-xl font-medium text-[#F46957]">{item.title}</h2>
                                        <div className="flex items-center space-x-2">
                                            <p className="font-bold">ISSN :</p>
                                            <p className="flex items-center space-x-2  text-[#262626c0]"><span>{item.issnP} (Print Version)</span> <span>-</span><span>{item.issnE} (Electronic Version)</span></p>
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
                                            <p className="font-bold">Submission E-mail:</p>
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
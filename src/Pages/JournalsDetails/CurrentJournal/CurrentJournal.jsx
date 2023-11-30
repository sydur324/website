import useArticle from "../../../Hooks/useArticle";
import CurrentModel from "../CurrentModel/CurrentModel";

const CurrentJournal = () => {
    const [articles,refetch] = useArticle()
    return (
        <div className="">
            <div className="border my-4 py-4 px-4">
                <h2 className="font-bold px-4">Current Articles</h2>

                <div>
                    {
                        articles.map((article, index) => <div key={index}>
                            <div className="px-4 py-2">
                                <h2 className="font-medium text-[#F96E54]">{article.title}</h2>
                                <div className="lg:flex lg:items-center lg:space-x-1 lg:space-y-0 space-y-1 text-sm py-1 text-[#494949]">
                                    <p>{article.firstAuthor},</p>
                                    <p>{article.information}</p>
                                </div>
                                <div className="lg:flex lg:items-center lg:space-x-6 lg:space-y-0 space-y-2 py-2 hidden">
                                    <p className="text-base lg:font-semibold md:font-semibold sm:font-semibold font-normal"><span>DOI :</span><span className="text-[#F96E54] font-normal hover:border-b hover:border-[#f96d54d0] cursor-pointer">{article.DOI}</span></p>
                                    <p className="text-base lg:font-semibold md:font-semibold sm:font-semibold font-normal"><span>URL :</span><span className="text-[#F96E54] font-normal hover:border-b hover:border-[#f96d54d0] cursor-pointer">{article.DOIURL}</span></p>
                                </div>

                                <div className="flex items-center space-x-4 cursor-pointer my-4">
                                    <button className="px-3 py-2 bg-[#F46957] text-sm font-medium rounded hover:bg-[#115680] duration-300 text-white"><CurrentModel article={article}></CurrentModel></button>
                                    <button className="px-3 py-2 bg-[#F46957] text-sm font-medium rounded hover:bg-[#115680] duration-300 text-white">PDF</button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};
export default CurrentJournal;
import JournalModel from "../JournalModel/JournalModel";

const JournalArticle = ({ article }) => {
    return (
        <div className="my-2 border py-2">
            <div className="px-4 py-2">
                <h2 className="font-medium text-[#F96E54]">{article.title}</h2>
                <div className="flex items-center space-x-1 text-sm py-1 text-[#494949]">
                    <p>{article.writter},</p>
                    <p>{article.profetion}</p>
                </div>
                <div className="flex items-center space-x-6 py-2">
                      <p className="text-base font-semibold"><span>DOI :</span><span className="text-[#F96E54] font-normal hover:border-b hover:border-[#f96d54d0] cursor-pointer">{article.doi}</span></p>
                      <p className="text-base font-semibold"><span>URL :</span><span className="text-[#F96E54] font-normal hover:border-b hover:border-[#f96d54d0] cursor-pointer">{article.url}</span></p>       
                </div>

                <div className="flex items-center space-x-4 cursor-pointer my-4">
                     <button className="px-3 py-2 bg-[#F46957] text-sm font-medium rounded hover:bg-[#115680] duration-300 text-white"><JournalModel article={article}></JournalModel></button>
                     
                     <button className="px-3 py-2 bg-[#F46957] text-sm font-medium rounded hover:bg-[#115680] duration-300 text-white">PDF</button>
                </div>
            </div>
        </div>
    );
};
export default JournalArticle;
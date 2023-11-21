import JournalArticle from "../JournalArticle/JournalArticle";

const JournalVolum = ({ volum }) => {
    const {article} = volum 
    return (
        <div className=" w-full">
            <div className="flex items-center justify-center space-x-1 font-medium text-sm border px-2 py-2 text-center">
                <p>Vol - {volum.volNum}</p>
                <p>No - {volum.volSerial}</p>
                <p>{volum.volDate}</p>
            </div>

            <div>
                {
                    article.map((fullArticle,index) =><JournalArticle
                    key={index} article={fullArticle}
                    >

                    </JournalArticle>)
                }
            </div>

        </div>
    );
};
export default JournalVolum;
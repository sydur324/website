import { LiaIndustrySolid } from "react-icons/lia";

const JournalIndex = () => {

    return (
        <div>
            

            <div className='bg-[#f4695721] my-8 xl:px-20 lg:px-16 md:px-14 sm:px-12 px-12 py-8'>
                <h2 className='text-2xl font-bold'>WEG Indexing</h2>
                <p className='py-2 font-medium text-[#4b4b4b]'>
                WEG is indexed with the follwing organizations.
                </p>
            </div>

            <div className="xl:px-20 lg:px-16 md:px-14 sm:px-12 px-12">
                <div className="space-y-4 cursor-pointer">

                    <div className="group">
                        <div className="flex items-center space-x-2 text-lg font-medium">
                            <p className="px-1 py-1 border group-hover:bg-[#F46957] group-hover:text-white duration-300"><LiaIndustrySolid /></p>
                            <p>Cabell Publishing Inc.</p>
                        </div>
                        <div className="py-3 space-y-3">
                            <p>Cabell Publishing, Inc. helps professors, graduate students, and researchers
                                publish their manuscripts in academic journals. It strives to maintain current
                                information on over 4,000 journals. This information includes addresses, phones,
                                e-mails and web sites for our listed journals making Cabell's Directories an easy
                                point of reference when preparing to publish a manuscript.
                            </p>

                            <p>
                                The Directory helps you to determine which journals typically publish
                                manuscripts similar to yours or could be the best fit for your manuscript.
                                The index in each Directory helps you match the characteristics of your
                                manuscript to the topic areas the journal emphasizes and acceptance rate.
                            </p>

                            <div>
                                <p>To read more, please visit :</p>
                                <a className="text-[#1B577F] group-hover:text-[#F46957]  duration-300" href="http://www.cabells.com/index.aspx" target="_blank">http://www.cabells.com/index.aspx</a>
                            </div>
                        </div>
                    </div>

                    <div className="group">
                        <div className="flex items-center space-x-2 text-lg font-medium">
                            <p className="px-1 py-1 border group-hover:bg-[#F46957] group-hover:text-white duration-300"><LiaIndustrySolid /></p>
                            <p>Ulrichsweb™</p>
                        </div>
                        <div className="py-3 space-y-3">
                            <p>
                                Ulrichsweb™ is the authoritative source of bibliographic and publisher
                                information on more than 300,000 periodicals of all types–academic and scholarly
                                journals, Open Access publications, peerreviewed titles, popular magazines,
                                newspapers, newsletters, and more from around the world. And, it's easy to use!
                            </p>

                            <div>
                                <p>To read more, please visit :</p>
                                <a className="text-[#1B577F] group-hover:text-[#F46957]  duration-300" href="http://www.ulrichsweb.com" target="_blank">http://www.ulrichsweb.com</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
export default JournalIndex;
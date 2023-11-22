import { TbExternalLinkOff } from "react-icons/tb";
const AboutWEG = () => {
    return (
        <div className="border my-4 py-4 px-4">
            <h2 className="font-bold">About CPI</h2>

            <div className="py-4">

                <p className="">
                    Center for Promoting Ideas (CPI) is a research based organization.
                    It has been working for creating and nurturing talents in USA and
                    Bangladesh since its inception. It is working in the fields of
                    education and research and has attained a significant place in the
                    world for its praiseworthy activities. In addition to research
                    activities, CPI provides a good number of scholarships to the poor
                    and meritorious students at various levels of education throughout
                    the world. It plays an important role in the field of research by
                    funding research projects and publishing the research papers.
                </p>

                <h2 className="font-bold py-2 text-[#F46957]">CPI Published For</h2>

                <div className="flex flex-col space-y-1 font-medium">
                    <a className="flex items-center space-x-1 hover:text-[#F46957] duration-300" href=""><span className="text-[#F46957] "><TbExternalLinkOff /></span><span className="">International Journal of Business and Social Science</span></a>
                    <a className="flex items-center space-x-1 hover:text-[#F46957] duration-300" href=""><span className="text-[#F46957] "><TbExternalLinkOff /></span><span>International Journal of Humanities and Social Science</span></a>
                    <a className="flex items-center space-x-1 hover:text-[#F46957] duration-300" href=""><span className="text-[#F46957] "><TbExternalLinkOff /></span><span>International Journal of Applied Science and Technology</span></a>
                    <a className="flex items-center space-x-1 hover:text-[#F46957] duration-300" href=""><span className="text-[#F46957] "><TbExternalLinkOff /></span><span>International Journal of Business</span></a>
                    <a className="flex items-center space-x-1 hover:text-[#F46957] duration-300" href=""><span className="text-[#F46957] "><TbExternalLinkOff /></span><span>Humanities and Technology</span></a>
                    <a className="flex items-center space-x-1 hover:text-[#F46957] duration-300" href=""><span className="text-[#F46957] "><TbExternalLinkOff /></span><span>American International Journal of Contemporary Research</span></a>
                </div>

                <p className="py-2">
                    CPI creating a platform to share the thoughts of professionals,
                    scholars and academicians throughout the world. The journals are
                    published from USA under the direct supervisions of renowned academicians of
                    the world. The quick review process, rich editorial boards and quality publications
                    have already made these journals unique.
                </p>


            </div>
        </div>
    );
};
export default AboutWEG;
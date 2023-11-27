import './Footer.css'

const Footer = () => {

    return (
        <div className="xl:px-20 lg:px-16 md:px-14 sm:px-12 px-12 py-8 bg-[#E5E5E5]">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">

                <div>
                    <h2 className="footer text-xl font-bold text-[#28597D] py-4">Journal Subjects</h2>
                    <div className="lg:flex lg:space-x-6 text-[#6c6c6c] text-base font-medium">

                        <div className="">
                            <ul className="space-y-1">
                                <li className='ppp'>Archaeology</li>
                                <li>Architecture</li>
                                <li>Film, Media & Cultural Studies</li>
                                <li>History</li>
                                <li>Islamic Studies</li>
                                <li>Language & Linguistics</li>
                                <li>Law</li>
                            </ul>
                        </div>

                        <div>
                            <ul className="space-y-1">
                                <li>Literary Studies</li>
                                <li>Natural History</li>
                                <li>Philosophy</li>
                                <li>Politics</li>
                                <li>Religious Studies</li>
                                <li>Science & Social Science</li>
                                <li>Scottish Studies</li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div>
                    <h2 className="text-xl font-bold text-[#28597D] py-4">Librarian Services</h2>
                    <ul className="text-[#6c6c6c] text-sm font-medium space-y-1">
                        <li>Activation</li>
                        <li>Journal Ordering and Pricing</li>
                        <li>Registration</li>
                        <li>Renewals</li>
                        <li>Usage Statistics</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-bold text-[#28597D] py-4">General Resources</h2>
                    <ul className="text-[#6c6c6c] text-sm font-medium space-y-1">
                        <li>Access Token Activation</li>
                        <li>Accessibility Statement</li>
                        <li>Author Services</li>
                        <li>Browse for Books</li>
                        <li>Catalogues</li>
                        <li>Contact Information</li>
                        <li>Early Career Researcher Hub</li>
                        <li>Journal Ordering and Pricing</li>
                        <li>Mailing List</li>
                        <li>Permissions</li>
                        <li>Search Journals</li>
                        <li>Website Feedback</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};
export default Footer;
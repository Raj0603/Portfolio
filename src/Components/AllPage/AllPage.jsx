import Sidebar from '..//Sidebar/Sidebar'
import AboutPage from '..//AboutPage/AboutPage'
import ContactPage from '..//ContactPage/ContactPage'
import Portfolio from '..//Portfolio/Portfolio'
import TagCloud from '../SkillsPage/Skills'
import Footer from '../Footer/Footer'

const AllPage = () =>{
    return(
        <>
            <Sidebar/>
            {/* <Index/> */}
            <AboutPage/>
            <TagCloud/>
            {/* <Resume/> */}
            <Portfolio/>
            <ContactPage/>
            <Footer/>
        </>
    )
}
export default AllPage
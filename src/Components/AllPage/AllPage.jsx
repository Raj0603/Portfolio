import Sidebar from '..//Sidebar/Sidebar'
import AboutPage from '..//AboutPage/AboutPage'
import ContactPage from '..//ContactPage/ContactPage'
import Portfolio from '..//Portfolio/Portfolio'
import TagCloud from '../SkillsPage/Skills'
import Credit from '../Credits/Attribute'

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
            <Credit/>
        </>
    )
}
export default AllPage
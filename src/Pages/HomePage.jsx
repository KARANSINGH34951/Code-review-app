import Hero from '../components/Hero'
import Features from '../components/Features'
import ConnectWithUs from '../components/ConnectWithUs'
import FAQSection from '../components/FAQAection'
import CodeIllustrationSection from '../components/CodeIllustrationSection'
import Footer from '../components/Footer'
import NavBar from "../components/NavBar"
import { useSelector } from 'react-redux';
import { selector } from '../feature/userSlice';
import CodeEditore from '../components/CodeEditore'
import CodeSummary from '../components/CodeSummary'

const HomePage = () => {
  const user = useSelector(selector);
  return (
    <div>
      <NavBar/>
      
      {user.loggedIn ? <CodeEditore/>:<Hero/>}
      {user.loggedIn && <CodeSummary/>}
      <Features/>
      <CodeIllustrationSection/>
      <ConnectWithUs/>
      <FAQSection/>
      <Footer/>
    </div>
  )
}

export default HomePage
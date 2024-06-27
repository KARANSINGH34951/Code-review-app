import Hero from '../components/Hero'
import Features from '../components/Features'
import ConnectWithUs from '../components/ConnectWithUs'
import FAQSection from '../components/FAQAection'
import CodeIllustrationSection from '../components/CodeIllustrationSection'
import Footer from '../components/Footer'
import NavBar from "../components/NavBar"

const HomePage = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Features/>
      <CodeIllustrationSection/>
      <ConnectWithUs/>
      <FAQSection/>
      <Footer/>
    </div>
  )
}

export default HomePage
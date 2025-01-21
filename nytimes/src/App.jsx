import Header from "./components/Header"
import NavBar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import FeaturedStories from "./components/FeaturedStories"
import MiscArticles from "./components/MiscArticles"
import Footer from "./components/Footer"

export default function App() {

  return (
    <>
        <Header />
        <NavBar />

      <main>
        <HeroSection />
        {/* <FeaturedStories /> */}
        {/* <MiscArticles /> */}
      </main>

      <Footer />
    </>
  )
}

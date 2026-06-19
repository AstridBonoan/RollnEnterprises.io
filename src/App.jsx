import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Mission from './components/Mission'
import Products from './components/Products'
import WhyUs from './components/WhyUs'
import Vision from './components/Vision'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className="page-bg" aria-hidden="true" />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Mission />
        <Products />
        <WhyUs />
        <Vision />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App

import Benefits from './components/benefits'
import BottomBar from './components/bottom-bar'
import Faq from './components/faq'
import FooterSection from './components/footer-section'
import Header from './components/header'
import Hero from './components/hero'
import HowItWorks from './components/how-it-works'
import Location from './components/location'
import Schedule from './components/schedule'

export default function App() {
  return (
    <>
      <Header />

      <main
        id="top"
        className="pb-[calc(86px+var(--safe-bottom))]"
      >
        <div className="mx-auto w-[min(1100px,calc(100%-28px))] max-[520px]:w-[calc(100%-22px)]">
          <Hero />
          <Benefits />
          <Schedule />
          <HowItWorks />
          <Faq />
          <Location />
          <FooterSection />
        </div>
      </main>

      <BottomBar />
    </>
  )
}

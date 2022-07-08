import { useState, useEffect } from 'react'
import { AboutDataProvider } from '../../utils/provider'
import Banner from '../../components/Banner'
import Dropdown from '../../components/Dropdown'
import Loader from '../../components/Loader'
import Error from '../../components/Error'
import aboutBanner from '../../assets/banners/about-banner.jpg'
import './style.css'

/**
 * Display the about page with company values ​​and a banner without a caption.
 *
 * @returns {JSX.Element} The About component
 */
function About() {
  const [isLoading, setLoading] = useState(true)
  const [aboutPageData, setAboutPageData] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    const getAboutPageData = async () => {
      try {
        const aboutData = await AboutDataProvider()

        setAboutPageData(aboutData)
      } catch (err) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    getAboutPageData()
  }, [])

  return (
    <main className="main-content-wrapper main-content-wrapper--about-page">
      {error ? (
        <Error />
      ) : isLoading ? (
        <Loader />
      ) : (
        <div className="About-page-main-content">
          <Banner
            bannerBackgroundImage={aboutBanner}
            styleModifier={{
              bannerContainer: 'Banner--about-page',
              backgroundImageContainer: 'Banner__background-image--about-page',
            }}
          />
          <div className="About-page-main-content__kasa-values">
            {aboutPageData &&
              aboutPageData.map((aboutData) => (
                <Dropdown
                  key={`${aboutData.kasaValue.title}`}
                  label={aboutData.kasaValue.title}
                  styleModifier={{
                    dropdownContainer: 'Dropdown--about-page',
                    triggerAndLabelContainer:
                      'Dropdown-trigger-and-label-container--about-page',
                    label: 'Dropdown__label--about-page',
                    trigger: 'Dropdown__trigger--about-page',
                    triggerIcon: 'Dropdown__trigger__icon--about-page',
                  }}
                >
                  <p className="Dropdown__content Dropdown__content--about-page">
                    {aboutData.kasaValue.description}
                  </p>
                </Dropdown>
              ))}
          </div>
        </div>
      )}
    </main>
  )
}

export default About

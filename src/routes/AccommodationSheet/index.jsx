import { useEffect, useState } from 'react'
import { AccommodationSheetDataProvider } from '../../utils/provider'
import { useParams } from 'react-router-dom'
import Carousel from '../../components/Carousel'
import Title from '../../components/Title'
import Tag from '../../components/Tag'
import Host from '../../components/Host'
import Rate from '../../components/Rate'
import Dropdown from '../../components/Dropdown'
import Error from '../../components/Error'
import Loader from '../../components/Loader'
import NotFound from '../NotFound'
import './style.css'

/**
 * Display the listing of the accommodation whose
 * id is stored in the url after the user clicks on
 * his card on the home page.
 *
 * @returns {JSX.Element} The AccommodationSheet component.
 */
function AccommodationSheet() {
  const [isLoading, setLoading] = useState(true)
  const [currentAccommodationSheetData, setCurrentAccommodationSheetData] =
    useState(null)

  const [error, setError] = useState(false)

  const { id } = useParams()
  const invalidId = id.match(/^[a-z0-9]{8}$/i) === null

  useEffect(() => {
    if (!invalidId) {
      const getCurrentAccommodationData = async () => {
        try {
          const accommodationSheetData = await AccommodationSheetDataProvider(
            id
          )

          setCurrentAccommodationSheetData(accommodationSheetData)
        } catch (err) {
          setError(true)
        } finally {
          setLoading(false)
        }
      }

      getCurrentAccommodationData()
    }
  },)

  if (invalidId) {
    return <NotFound />
  }

  return (
    <main className="main-content-wrapper main-content-wrapper--accommodation-sheet">
      {error ? (
        <Error />
      ) : isLoading ? (
        <Loader />
      ) : (
        <section className="Accommodation-infos">
          {currentAccommodationSheetData && (
            <Carousel
              currentAccommodationPicturesURLs={
                currentAccommodationSheetData.pictures
              }
            />
          )}
          <div className="Main-accommodation-infos">
            <div className="Accommodation-title-and-tags">
              {currentAccommodationSheetData && (
                <Title
                  currentAccommodationLocation={
                    currentAccommodationSheetData.location
                  }
                  currentAccommodationTitle={
                    currentAccommodationSheetData.title
                  }
                />
              )}
              <ul className="Accommodation-tag-list">
                {currentAccommodationSheetData &&
                  currentAccommodationSheetData.tags.map((tagName) => (
                    <Tag key={tagName} name={tagName} />
                  ))}
              </ul>
            </div>
            <div className="Accommodation-host-and-rate">
              {currentAccommodationSheetData && (
                <Host
                  hostName={currentAccommodationSheetData.hostInformation.name}
                  hostPictureURLs={
                    currentAccommodationSheetData.hostInformation.picture
                  }
                />
              )}
              {currentAccommodationSheetData && (
                <Rate
                  currentAccommodationRating={parseInt(
                    currentAccommodationSheetData.rating
                  )}
                />
              )}
            </div>
          </div>

          <div className="Additional-accommodation-information">
            <Dropdown label="Description">
              <p className="Dropdown__content Dropdown__content--description-of-the-accommodation">
                {currentAccommodationSheetData &&
                  currentAccommodationSheetData.description}
              </p>
            </Dropdown>
            <Dropdown label="Équipements">
              <ul className="Dropdown__content Dropdown__content--housing-equipment">
                {currentAccommodationSheetData &&
                  currentAccommodationSheetData.equipments.map((equipment) => (
                    <li key={`${equipment}`}>{equipment}</li>
                  ))}
              </ul>
            </Dropdown>
          </div>
        </section>
      )}
    </main>
  )
}

export default AccommodationSheet

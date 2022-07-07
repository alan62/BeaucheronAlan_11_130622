import { useState, useEffect } from 'react'
import { GalleryDataProvider } from '../../utils/provider'
import Thumbnail from '../Thumbnail'
import Loader from '../Loader'
import Error from '../Error'
import './style.css'

/**
 * Display accommodation thumbnail gallery.
 *
 * @returns {JSX.Element} The Gallery component.
 */
export default function Gallery() {
  const [isLoading, setLoading] = useState(true)
  const [galleryComponentData, setGalleryComponentData] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    const getGalleryComponentData = async () => {
      try {
        const galleryData = await GalleryDataProvider()

        setGalleryComponentData(galleryData)
      } catch (err) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    getGalleryComponentData()
  }, [])

  return (
    <div className="Gallery">
      {error ? (
        <Error />
      ) : isLoading ? (
        <Loader />
      ) : (
        galleryComponentData.map((accommodation) => (
          <Thumbnail
            key={`accommodation-${accommodation.id}`}
            id={accommodation.id}
            title={accommodation.title}
            coverURL={accommodation.cover}
          />
        ))
      )}
    </div>
  )
}

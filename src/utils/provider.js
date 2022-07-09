import GalleryData from './data-formatters/GalleryData'
import AccommodationSheetData from './data-formatters/AccommodationSheetData'
import AboutData from './data-formatters/AboutData'

/**
 * Display a message in the console to warn that the call to fetch() ended with an error.
 *
 * @param {Error} error - The error object returned from a failed call to fetch.
 */
const alertFetchFailure = (error, data) => {
  console.error('detailed information about the fetch call failure.', error)

  throw Error(
    `Accommodation data could not be retrieved. Here is what was recovered: ${data}`
  )
}

/**
 * Retrieve accommodation data and create an
 * GalleryData object from it to return it.
 *
 * @return {GalleryData} An instance of the GalleryData class.
 */
export async function GalleryDataProvider() {
  let data = {}

  try {
    const response = await fetch('/logements.json')

    if (response.ok) {
      const data = await response.json()

      const galleryData = data.map(
        (accommodation) => new GalleryData(accommodation)
      )

      return galleryData
    }
  } catch (error) {
    alertFetchFailure(error, data)
  }
}

/**
 * Retrieve the data from the values ​​of the company
 * to create from them an AboutData object
 * which will be returned by the function.
 *
 * @returns {AboutData[]} An array of instances of the AboutData class.
 */
export async function AboutDataProvider() {
  let data = {}

  try {
    const response = await fetch('/kasa-values.json')

    if (response.ok) {
      data = await response.json()

      const aboutData = data.map((kasaValue) => new AboutData(kasaValue))

      return aboutData
    }
  } catch (error) {
    alertFetchFailure(error, data)
  }
}

/**
 * Retrieve accommodation data whose id matches the id parameter
 * and create an AccommodationSheetData object with that data.
 *
 * @param {String} id - The id of the apartment whose user has
 * chosen to consult the accommodation sheet.
 * @return {AccommodationSheetData} An instance of the AccommodationSheetData class.
 */
export async function AccommodationSheetDataProvider(id) {
  let data = {}

  try {
    const response = await fetch('/logements.json')

    if (response.ok) {
      data = await response.json()

      const currentAccommodationData = data.find(
        (accommodation) => accommodation.id === id
      )

      return new AccommodationSheetData(currentAccommodationData)
    }
  } catch (error) {
    alertFetchFailure(error, data)
  }
}

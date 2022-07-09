/**
 * A class that formats accommodation data to retrieve
 * only the data used by the gallery component.
 */
class GalleryData {
  /**
   *
   * @param {Object} data - Accommodation data.
   * @param {String} data.id - Accommodation id.
   * @param {String} data.title - Accommodation title.
   * @param {String} data.cover - Accommodation cover URL.
   */
  constructor({ id, title, cover }) {
    this.id = id
    this.title = title
    this.cover = cover
  }
}

export default GalleryData

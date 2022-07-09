/**
 * A class that formats accommodation data to only
 * retrieve data used by the accommodation sheet page.
 */
class AccommodationSheetData {
  /**
   * A positive or negative whole number.
   * @typedef {Number} Integer
   */

  /**
   * Create an AccommodationSheet object
   *
   * @param {Object} data - Current viewing accommodation sheet data
   * @param {String} data.id - Current accommodation id
   * @param {String[]} data.pictures - Current accommodation pictures URLs
   * @param {String} data.title - Current accommodation title
   * @param {String} data.location - Current accommodation location
   * @param {String[]} data.tags - Current accommodation tags
   * @param {Object} data.host - Current accommodation host
   * @param {String} data.host.name - Current accommodation host name
   * @param {String} data.host.picture - Current accommodation host picture URL
   * @param {Integer} data.rating - Current accommodation rating
   * @param {String} data.description - Current accommodation description
   * @param {String[]} data.equipements - Current accommodation equipments
   */
  constructor({
    id,
    pictures,
    title,
    location,
    tags,
    host,
    rating,
    description,
    equipments,
  }) {
    this.id = id
    this.title = title
    this.location = location
    this.tags = tags
    this.pictures = pictures
    this.hostInformation = host
    this.rating = rating
    this.description = description
    this.equipments = equipments
  }
}

export default AccommodationSheetData

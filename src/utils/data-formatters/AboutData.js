/**
 * A class that formats company values ​​data for
 * display on the About page.
 */
class AboutData {
  /**
   *
   * @param {Object} data - One of the values ​​of the company
   * @param {String} data.title - Title of one of the company's values
   * @param {String} data.description - Description of one of the company's values
   */
  constructor(data) {
    this.kasaValue = data
  }
}

export default AboutData

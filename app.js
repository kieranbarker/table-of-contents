;(function () {

  // Opt into strict mode
  'use strict';


  //
  // Variables
  //

  // Get the #table-of-contents element
  const tableOfContents = document.querySelector('#table-of-contents');

  // Get all h2 elements as an array
  const headings = [...document.querySelectorAll('h2')];


  //
  // Functions
  //

  /**
   * Create a skip link for a heading
   * @param {HTMLHeadingElement} heading The heading
   * @returns {String} An HTML string
   */
  function createSkipLink (heading) {
    // If the heading doesn't have an ID, create one
    if (!heading.id) {
      heading.id = heading.textContent.replace(/\s+/g, '-');
    }

    // Return the HTML string
    return `
      <li>
        <a href="#${heading.id}">
          ${heading.textContent}
        </a>
      </li>
    `;
  }

  /**
   * Render the table of contents
   */
  function render () {
    // If there aren't any headings, just bail
    if (headings.length < 1) return;

    // Build and insert the table of contents
    tableOfContents.innerHTML = `
      <ol>
        ${headings.map(createSkipLink).join('')}
      </ol>
    `;
  }


  //
  // Inits & Event Listeners
  //

  // Render the table of contents
  render();

})();
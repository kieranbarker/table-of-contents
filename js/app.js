;(function(d) {

  "use strict";

  /**
   * Variables
   */

  var tableOfContents = d.querySelector("#table-of-contents");
  var headings = Array.from(d.querySelectorAll("h2"));

  /**
   * Functions
   */

  function assignId(element) {
    if (element.id) return;
    element.id = element.textContent.replace(/\W+/g, "-").toLowerCase();
  }

  function createLink(heading) {
    return (
      "<li>" +
        "<a href='#" + heading.id + "'>" + heading.textContent + "</a>" +
      "</li>"
    );
  }

  /**
   * Init
   */

  // Bail if there are no headings
  if (!headings.length) return;

  // Assign each heading an ID if necessary
  headings.forEach(assignId);

  // Insert the table of contents
  tableOfContents.innerHTML = (
    "<nav>" +
      "<ol>" +
        headings.map(createLink).join("") +
      "</ol>" +
    "</nav>"
  );

})(document);
;(function(d) {

  "use strict";

  var tableOfContents = d.querySelector("#table-of-contents");
  var headings = Array.from(d.querySelectorAll("h2[id]"));

  function createLink(heading) {
    return (
      "<li>" +
        "<a href='#" + heading.id + "'>" + heading.textContent + "</a>" +
      "</li>"
    );
  }

  tableOfContents.innerHTML = (
    "<nav>" +
      "<ol>" +
        headings.map(createLink).join("") +
      "</ol>" +
    "</nav>"
  );

})(document);
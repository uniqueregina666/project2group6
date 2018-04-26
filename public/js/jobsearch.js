/**
 * pulls information from the form and build the query URL
 * @returns {string} URL for GitJobs API based on form inputs
 */
function buildQueryURL() {
    // queryURL is the url we'll use to query the API
    var queryURL = "https://jobs.github.com/positions.json?";
  
    // grab text the user typed into the search input, add as parameter to url
    var jobDescription = $("#search-term").val().trim();
    queryURL += "description=" + jobDescription;
  
    // if the user provides a jobTitle, include it in the queryURL
    var location = $("#location").val().trim();
  
    if (parseInt(location)) {
      queryURL += "location=" + location;
    }
  
    // if the user provides a location, include it in the queryURL
    var fullTime = $("#fulltime").val().trim();
  
    if (parseInt(fullTime)) {
      queryURL += "full_time=true";
    }
  
    // Logging the URL so we have access to it for troubleshooting
    console.log("---------------\nURL: " + queryURL + "\n---------------");
  
    return queryURL;
  }
  
  /**
   * takes API data (JSON/object) and turns it into elements on the page
   * @param {object} jobData - object containing Git Job API data
   */
  
  // function to empty out the articles
  function clear() {
    $("#well-section").empty();
  }
  
  // CLICK HANDLERS
  // ==========================================================
  
  // .on("click") function associated with the Search Button
  $("#run-search").on("click", function(event) {
    // This line allows us to take advantage of the HTML "submit" property
    // This way we can hit enter on the keyboard and it registers the search
    // (in addition to clicks). Prevents the page from reloading on form submit.
    event.preventDefault();
  
    // empty the region associated with the articles
    clear();
  
    // build the query URL for the ajax request to the NYT API
    var queryURL = buildQueryURL();
  
    // make the AJAX request to the API - GETs the JSON data at the queryURL.
    // the data then gets passed as an argument to the updatePage function
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(updatePage);
  });
  
  //  .on("click") function associated with the clear button
  $("#clear-all").on("click", clear);
  
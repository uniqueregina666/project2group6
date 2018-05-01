// When user hits the search-btn
$("#search-btn").on("click", function(event) {
    event.preventDefault();
  
    // Save the job they typed into the job-search input
    var jobSearched = $("#jobtitle").val().trim();
  
    // Make an AJAX get request to our api, including the user's book in the url
    $.get("/api/" + jobSearched, function(data) {
  
    // Save the job they typed into the job-search input
    var locationSearched = $("#location").val().trim();
  
    // Make an AJAX get request to our api, including the user's book in the url
    $.get("/api/" + locationSearched, function(data) {

    renderJobs(data);
    })

});

});
 
function renderJobs(data) {
    if (data.length !== 0) {
  
      $("#stats").empty();
      $("#stats").show();
  
      for (var i = 0; i < data.length; i++) {
  
        var div = $("<div>");
  
        div.append("<h2>" + data[i].title + "</h2>");
        div.append("<p>Author: " + data[i].author + "</p>");
        div.append("<p>Genre: " + data[i].genre + "</p>");
        div.append("<p>Pages: " + data[i].pages + "</p>");;
        $("#stats").append(div);
  
      }

    }
}

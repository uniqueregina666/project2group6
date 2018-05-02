// When user hits the search-btn
$("#search-btn").on("click", function(event) {
    event.preventDefault();
  
    // Save the job they typed into the job-search input
    var jobSearched = $("#jobtitle").val().trim();
  
    // Make an AJAX get request to our api, including the job in the url
    $.get("/api/" + jobSearched, function(data) {
  
    // Save the job they typed into the job-search input
    var locationSearched = $("#location").val().trim();
  
    // Make an AJAX get request to our api, including the location in the url
    $.get("/api/" + locationSearched, function(data) {

      $("#job-area").prepend(row);
    })

});

});
 
$.then(function()  {
    if (data.length !== 0) {
  
      for (var i = 0; i < data.length; i++) {
  
        var div = $("<div>");
        row.addClass("job");
  
        div.append("<h2>Job Title:" + data[i].jobtitle + "</h2>");
        div.append("<p>Location: " + data[i].location + "</p>");
        div.append("<p>Company: " + data[i].company + "</p>");
        div.append("<p>Contact: " + data[i].contact + "</p>");;
        div.append("<p>Job Overview" + data[i].joboverview + "</p>");
        div.append("<p>Salary: " + data[i].salary + "</p>");
        div.append("<p>Bonuses: " + data[i].bonuses + "</p>");
        div.append("<p>Created at: " + data[i].createdAt+ "</p>");;
       
        $("#job-area").prepend(row);
  
      }

    }
})

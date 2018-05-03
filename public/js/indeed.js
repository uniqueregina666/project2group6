// When user hits the search-btn
$(document).on("click", "#search-btn",function(event) {
    event.preventDefault();
  console.log("hello")
    // Save the job they typed into the job-search input
    var jobSearched = $("#jobtitle").val().trim();
  
    // Make an AJAX get request to our api, including the job in the url
    $.get("/api/" + jobSearched, function(data) {
      //console.log(data)
    // Save the job they typed into the job-search input
    // var locationSearched = $("#location").val().trim();
  
    // Make an AJAX get request to our api, including the location in the url
    // $.get("/api/" + locationSearched, function(data) {

      // $("#job-area").prepend(row);
    // })

});

});

$.get("/api/all", function(data) {
    if (data.length !== 0) {
  console.log(data)
      for (var i = 0; i < data.length; i++) {
  
        var div = $("<div>");
        // row.addClass("job");
  
        div.append("<h2>Job Title:" + data[i].jobTitle + "</h2>");
        // div.append("<p>Location: " + data[i].location + "</p>");
        div.append("<p>Company: " + data[i].companyInfo + "</p>");
        // div.append("<p>Contact: " + data[i].contact + "</p>");;
        div.append("<p>Job Overview" + data[i].jobOverview + "</p>");
        div.append("<p>Salary: " + data[i].salaryRange + "</p>");
        div.append("<p>Bonuses: " + data[i].bonuses + "</p>");
        div.append("<p>Created at: " + data[i].createdAt+ "</p>");;
       
        $("#job-area").prepend(div);
  
      }

    }
})

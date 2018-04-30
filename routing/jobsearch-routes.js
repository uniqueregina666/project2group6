
// Routes
app.get("/", function(req, res) {

  // If the main route is hit, then we initiate a SQL query to grab all records.
  // All of the resulting records are stored in the variable "result."
  connection.query("SELECT * FROM jobs", function(err, result) {

    // We then begin building out HTML elements for the page.
    var html = "<h1> Job Results </h1>";

    // Here we begin an unordered list.
    html += "<ul>";

    // We then use the retrieved records from the database to populate our HTML file.
    for (var i = 0; i < result.length; i++) {
      html += "<li><p> ID: " + result[i].id + "</p>";
      html += "<p>user ID: " + result[i].userID + " </p>";
      html += "<p>Job Title: " + result[i].jobtitle + " </p>";
      html += "<p>Location: " + result[i].location + " </p>";
      html += "<p>Company: " + result[i].company + " </p>";
      html += "<p>Contact: " + result[i].contact + " </p>";
      html += "<p>Email: " + result[i].email+ " </p>";
      html += "<p>Phone: " + result[i].phone + " </p>";
      html += "<p>Webpage: " + result[i].webpage + " </p>";
      html += "<p>Date Posted: " + result[i].createdAt + " </p></li>";
    }

    // We close our unordered list.
    html += "</ul>";

    // Finally we send the user the HTML file we dynamically created.
    res.send(html);
  });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
$("#fullstack-search-btn").on("click", function(event){
    event.preventDefault();
 
    $.get("/api/fullstack", function(data){
    console.log(data);
 
    renderCandidates(data);
    });
 
 });
 
 $("#frontend-search-btn").on("click", function(event){
    event.preventDefault();
 
    $.get("/api/frontend", function(data){
    console.log(data);
 
    renderCandidates(data);
    });
 
 });
 
 $("#backend-search-btn").on("click",function(event){
    event.preventDefault();
 
    $.get("/api/backend", function(data){
    console.log(data);
 
    renderCandidates(data);
    });
 
 });
 
 ("#cybersecurity-search-btn").on("click", function(event){
    event.preventDefault();
 
    $.get("/api/cyber", function(data){
    console.log(data);
 
    renderCandidates(data);
    });
 
 });
 
 function renderCandidates(data) {
    if (data.length !==0) {
 
        $("#info").empty();
        $("#info").empty();
 
        for (var i = 0; i < data.length; i++) {
 
            var div = $("<div>");
 
            div.append("<p>Last Name: " + data[i].last_name + "</p>");
            div.append("<p>First Name: " + data[i].first_name + "</p>");
            div.append("<p>Title: " + data[i].title + "</p>");
            div.append("<p>Street: " + data[i].street + "</p>");
            div.append("<p>City: " + data[i].city + "</p>");
            div.append("<p>State: " + data[i].state + "</p>");
            div.append("<p>Zip: " + data[i].zip + "</p>");
            div.append("<p>Email: " + data[i].email + "</p>");
            div.append("<p>Experience: " + data[i].experience + "</p>");
 
            $("#info").append(div);
        
        }
    }
 }
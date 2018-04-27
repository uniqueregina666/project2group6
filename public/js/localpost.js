$(document).ready(function(){

    var jobInput = $("#jobTitle");
    var companyInput = $("#companyInfo");
    var overviewInput = $("#jobOverview");
    var qualifInput = $("#qualifications");
    var bonusInput = $("#bonusSkills");
    var salaryInput = $("#salaryRange");


    $(document).on("click", "#submitButton", handleJobPostSubmit);
// A function to handle what happens when the form is submitted to create a new Author
function handleJobPostSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (!jobInput.val().trim().trim()) {
      return;
    }
    // Calling the upsertAuthor function and passing in the value of the name input
    upsertJobPost({
        jobTitle: jobInput,
        companyInfo: companyInput,
        jobOverview: jobInput,
        bonuses: bonusInput,
        salaryRange: salaryInput
    });
  }

  // A function for creating an author. Calls getAuthors upon completion
  function upsertJobPost(postData) {
      console.log(postData)
    $.post("/api/authors", postData).then(function(){
        res.end();
    })
   
  }
});

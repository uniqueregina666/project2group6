$(document).ready(function () {

    var jobInput = $("#jobTitle");
    var companyInput = $("#companyInfo");
    var overviewInput = $("#jobOverview");
    var qualifInput = $("#qualifications");
    var bonusInput = $("#bonusSkills");
    var salaryInput = $("#salaryRange");


    $(document).on("click", "#submitButton", function(event){
        event.preventDefault()
        var newJob = {
            jobTitle: jobInput.val().trim(),
            companyInfo: companyInput.val().trim(),
            jobOverview: jobInput.val().trim(),
            bonuses: bonusInput.val().trim(),
            salaryRange: salaryInput.val().trim()
        }
        $.post("/api/posts", newJob).then(function () {
            
        })

    });
});

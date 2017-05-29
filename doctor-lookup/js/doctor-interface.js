var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctors = function(medicalIssue, doctorData) {
  doctorData.forEach(function(doctor){
  var doctorBio = doctor.profile.bio;
  var display =
  '<div class="col-md-4 mb-3">' +
        '<div class="card">' +
          '<div class="card-block">' +
            '<h4 class="card-title">' + doctorBio + '</h4>' +
          '</div>' +
        '</div>' +
  '</div>';
  $('.showDoctor').append(medicalIssue + display);
});
};

$(document).ready(function() {
  var doctorObject = new Doctor();
  console.log(doctorObject);
  $('#issue-search').click(function() {
    var medicalIssue = $('#medical-issue').val();
    $('#medical-issue').val("");
    doctorObject.getDoctors(medicalIssue, displayDoctors);
  });
});

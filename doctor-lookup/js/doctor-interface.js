var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctors = function(medicalIssue, doctorData) {
  doctorData.forEach(function(doctor){
  var doctorFirstName = doctor.profile.first_name;
  var doctorLastName = doctor.profile.last_name;
  var display =
  '<div class="col-md-4 mb-3">' +
        '<div class="card">' +
          '<div class="card-block">' +
            '<h4 class="card-title">' + doctorFirstName + doctorLastName + '</h4>' +
          '</div>' +
        '</div>' +
  '</div>';
  $('.showDoctor').append(display);
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

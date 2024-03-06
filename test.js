$(document).ready(function() {
    $('form').submit(function(event) {
      event.preventDefault();
      var email = $('#email').val();
      var phishingUrl = $('#phishing-url').val();
      var description = $('#description').val();
      var data = {
        email: email,
        phishingUrl: phishingUrl,
        description: description
      };
      $.post('/report-phishing', data, function(response) {
        alert(response.message);
      });
    });
  });
  
/* Google API function is inline in index.html
 * It doesn't work otherwise */
 
$( document ).ready(function() {
  function writeExperience() {
    var date = new Date();
    var experience = (date.getFullYear() - 2017) * 12 + 2 + date.getMonth();
    $('#experience').html(experience);
  }
  writeExperience();
});

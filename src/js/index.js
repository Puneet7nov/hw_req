// If comparable Platform is:
// No --> Show Platform Size dropdown
// Yes --> Show list of Existing Platforms in IOP DB

$(document).ready(function() {
      $("input[name='compPlatform']").on('change',function() {
  //  if (isCompPlatform == "Yes") {
      if ($(this).val() == "Yes") {
        document.getElementById("platformSize").style.display = 'none';
        document.getElementById("platForEstimate").style.display = 'block';
    } 
 //   if (isCompPlatform == "No") {
     if ($(this).val() == "No") {
        document.getElementById("platForEstimate").style.display = 'none';
        document.getElementById("platformSize").style.display = 'block';
    }
   });

// If Multi Location platform selected --> show List with number of locations
// and output table should show location column
// Else if single location --> Do NOT show location column in      
    
    $("input[name='multiLocationPlatform']").on('change',function() {
  //  if (isCompPlatform == "Yes") {
      if ($(this).val() == "Yes") {
        document.getElementById("NoOfLocation").style.display = 'block';
    } 
 //   if (isCompPlatform == "No") {
     if ($(this).val() == "No") {
        document.getElementById("NoOfLocation").style.display = 'none';
    }
   });

   });


//fetch and select button --> Model js file --> Fetch comp list from DB
// and View js files --> show comp list in drop down

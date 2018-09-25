
// If comparable Platform is:
// No --> Show Platform Size dropdown
// Yes --> Show list of Existing Platforms in IOP DB

function showhideComparablePlatform(isCompPlatform) {
    if (isCompPlatform == "Yes") {
        document.getElementById("platformSize").style.display = 'block';
        document.getElementById("platForEstimate").style.display = 'none';
    } 
    if (isCompPlatform == "No") {
        document.getElementById("platForEstimate").style.display = 'block';
        document.getElementById("platformSize").style.display = 'none';
    }
}


// If Multi Location platform selected --> show List with number of locations
// and output table should show location column
// Else if single location --> Do NOT show location column in   



//fetch and select button --> Model js file --> Fetch comp list from DB
// and View js files --> show comp list in drop down

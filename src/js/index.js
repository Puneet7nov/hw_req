import "isomorphic-fetch";
import { stringify } from 'querystring';

let selectedComps;

$(document).ready(function () {
    $("input[name='compPlatform']").on('change', function () {
        //  if (isCompPlatform == "Yes") {
        if ($(this).val() == "Yes") {
            document.getElementById("platformSize").style.display = 'none';
            document.getElementById("platForEstimate").style.display = 'block';
        }

        if ($(this).val() == "No") {
            document.getElementById("platForEstimate").style.display = 'none';
            document.getElementById("platformSize").style.display = 'block';
        }
    });

    // If Multi Location platform selected --> show List with number of locations
    // and output table should show location column
    // Else if single location --> Do NOT show location column in   

    $("input[name='multiLocationPlatform']").on('change', function () {

        if ($(this).val() == "Yes") {
            document.getElementById("NoOfLocation").style.display = 'block';
        }

        if ($(this).val() == "No") {
            document.getElementById("NoOfLocation").style.display = 'none';
        }
    });

});

//fetch and select button --> Model js file --> Fetch comp list from DB
// and View js files --> show comp list in drop down


$('.button').click(function () {

    const url = 'http://localhost:3000/OverAllCompInfo';
    let dropdown = document.getElementById('componentList');

    dropdown.length = 0;

    let defaultOption = document.createElement('option');
  //  defaultOption.text = 'Select Components Required';

  //   dropdown.add(defaultOption);
 //    dropdown.selectedIndex = 0;

    fetch(url)
        .then(
        function (response) {
            if (response.status !== 200) {
                console.warn('Looks like there was a problem. Status Code: ' +
                    response.status);
                return;
            }

            // Examine the text in the response  
            response.json().then(function (data) {
                let option;

                for (let i = 0; i < data.length; i++) {
                    option = document.createElement('option');
                    option.text = data[i].component_name;
                    dropdown.add(option);
                }
                $('#componentList').multiselect({
                    includeSelectAllOption: false
                });
            });
        }
        )
        .catch(function (err) {
            console.error('Fetch Error -', err);
        });

});

$('#hwButton').click(function () {
selectedComps = $('button').prop('title');
fetchAndLog();

}); 



const fetchAndLog = async () => {
    const url = `http://localhost:3000/OverAllCompInfo/${selectedComps}`;
    const response = await fetch(url);
    const json = await response.json();
    // just log ‘json’
    console.log(json);
    function edit(el) {
        el.childNodes[0].removeAttribute("disabled");
        el.childNodes[0].focus();
        window.getSelection().removeAllRanges();
    }
    function disable(el) {
        el.setAttribute("disabled","");
    }

        for(var i=0;i<json.length;i++)
    {
        var tr="<tr>";
        var td1="<td class=tdLeft>"+json[i]["component_name"]+"</td>";
        var td2="<td class=td>"+json[i]["windows"]+"</td>";
        var td3="<td class=td>"+json[i]["linux"]+"</td>";
        var td4="<td class=td>"+json[i]["solaris"]+"</td>";
        var td5="<td class=td>"+json[i]["x86"]+"</td>";
        var td6="<td class=td contenteditable='true'><input value=1 class=inputEdit></td></tr>";

       $("#tbody").append(tr+td1+td2+td3+td4+td5+td6); 
    }

    


}

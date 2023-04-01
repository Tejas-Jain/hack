// function onPageLoad() {
//     console.log( "document loaded" );
//     var url = "http://127.0.0.1:5000/get_previous_illness"; // Use this if you are NOT using nginx which is first 7 tutorials
//     // var url = "/api/get_loc"; // Use this if  you are using nginx. i.e tutorial 8 and onwards
//     $.get(url,function(data, status) {
//         console.log("got response for get_location_names request");
//         if(data) {
//             var previous_illness = data.previous_illness;
//             var uiprev_ill = document.getElementById("uiprev_ill");
//             $('#uiprev_ill').empty();
//             for(var i in previous_illness) {
//                 var opt = new Option(previous_illness[i]);
//                 $('#uiprev_ill').append(opt);
//             }
//         }
//     });
//   }
  
//   window.onload = onPageLoad;
//   function onPageLoad() {
//     console.log( "document loaded" );
//     var url = "http://127.0.0.1:5000/get_cardiac_CT"; // Use this if you are NOT using nginx which is first 7 tutorials
//     // var url = "/api/get_loc"; // Use this if  you are using nginx. i.e tutorial 8 and onwards
//     $.get(url,function(data, status) {
//         console.log("got response for get_location_names request");
//         if(data) {
//             var cardiac_CT = data.cardiac_CT;
//             var uicardiac_CT = document.getElementById("uicardiac_CT");
//             $('#uicardiac_CT').empty();
//             for(var j in cardiac_CT) {
//                 var opt1 = new Option(cardiac_CT[j]);
//                 $('#uicardiac_CT').append(opt1);
//             }
//         }
//     });
//   }
//   window.onload = onPageLoad;


function onClickedEstimatePrice() {
    console.log("Estimate price button clicked");
    var age = document.getElementById("uiage");
    var chest_pain = document.getElementById("uicp");
    var sob = document.getElementById("uisob");
    var systolic = document.getElementById("uisys");
    var diasys = document.getElementById("uidiasys");
    var hrate = document.getElementById("uihrate");
    var chol = document.getElementById("uichol");
    var diab = document.getElementById("uidiab");
    var hyper = document.getElementById("uihyper");
    var smoking = document.getElementById("uismoke");
    var obe = document.getElementById("uiobe");
    var gender = document.getElementById("uigender");
    var prev_ill = document.getElementById("uiprev_ill");
    var card_ct = document.getElementById("uicardiac_CT");
    var estPrice = document.getElementById("uiEstimatedPrice");
  
    var url = "http://127.0.0.1:5000/predict_disease"; //Use this if you are NOT using nginx which is first 7 tutorials
    // var url = "/api/predict_home_price"; // Use this if  you are using nginx. i.e tutorial 8 and onwards
  
    $.post(url, {
        previous_illness: prev_ill.value,
        cardiac_CT:card_ct.value,
        Age: parseFloat(age.value),
        Chest_pain: parseFloat(chest_pain.value),
        Shortness_of_breath: parseFloat(sob.value),
        Systolic: parseFloat(systolic.value),
        Diastolic: parseFloat(diasys.value),
        Heart_rate: parseFloat(hrate.value),
        Cholesterol_level: parseFloat(chol.value),
        Diabetes: parseFloat(diab.value),
        Hypertension: parseFloat(hyper.value),
        Smoking : parseFloat(smoking.value),
        Obesity: parseFloat(obe.value),
        Gender: parseFloat(gender.value)
        
    },function(data, status) {
        console.log(data.predict_disease);
        estPrice.innerHTML = "<h2>" + data.predict_disease.toString() + " Lakh</h2>";
        console.log(status);
    });
  }

  
function onPageLoad() {
    console.log( "document loaded" );
  
    // Load previous illness dropdown
    var prevIllnessUrl = "http://127.0.0.1:5000/get_previous_illness";
    $.get(prevIllnessUrl, function(data, status) {
      console.log("got response for get_previous_illness request");
      if (data) {
        var previousIllness = data.previous_illness;
        var uiprevIll = document.getElementById("uiprev_ill");
        $('#uiprev_ill').empty();
        for (var i in previousIllness) {
          var opt = new Option(previousIllness[i]);
          $('#uiprev_ill').append(opt);
        }
      }
    });
  
    // Load cardiac CT dropdown
    var cardiacCTUrl = "http://127.0.0.1:5000/get_cardiac_CT";
    $.get(cardiacCTUrl, function(data, status) {
      console.log("got response for get_cardiac_CT request");
      if (data) {
        var cardiacCT = data.cardiac_CT;
        var uicardiacCT = document.getElementById("uicardiac_CT");
        $('#uicardiac_CT').empty();
        for (var i in cardiacCT) {
          var opt1 = new Option(cardiacCT[i]);
          $('#uicardiac_CT').append(opt1);
        }
      }
    });
  }
  
  window.onload = onPageLoad;
  
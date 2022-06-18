function onSheet() {}
function homee(frm) {
  console.log(frm);
}
function gatee(frm) {
  console.log(frm);
}

function newFirm() {
  var x = document.getElementById("firmName").value;
  //console.log(x);
  if (x === "VIJAY LAXMI DALL MILL, MOHALLA GANDHI NAGAR JAITHARA ETAH") {
    document.getElementById("nine_r").value = "17121983(75)/9/00140";
    document.getElementById("gate_pass").value = "17121983(75)/GP/00085";
    document.getElementById("six_r").value =
      "17121983(75)/6/00300,17121983(75)/6/00301,17121983(75)/6/00302";
  } else {
    document.getElementById("nine_r").value = "57027386(75)/9/00140";
    document.getElementById("gate_pass").value = "57027386(75)/GP/00085";
    document.getElementById("six_r").value =
      "57027386(75)/6/00300,57027386(75)/6/00301,57027386(75)/6/00302";
  }
}

google.load("elements", "1", { packages: "transliteration" });
var control;
function onLoad() {
  var options = {
    //Source Language
    sourceLanguage: google.elements.transliteration.LanguageCode.ENGLISH,
    // Destination language to Transliterate
    destinationLanguage: [google.elements.transliteration.LanguageCode.HINDI],
    shortcutKey: "ctrl+g",
    transliterationEnabled: true,
  };
  control = new google.elements.transliteration.TransliterationControl(options);
  //  control.makeTransliteratable(['txtMessage']);
  control.makeTransliteratable(["J_CATEGORY"]);
  control.makeTransliteratable(["TO_FIRM"]);
}
google.setOnLoadCallback(onLoad);

//   base64_encode = function(str = "") {
//   return btoa(unescape(encodeURIComponent(str)));
// };

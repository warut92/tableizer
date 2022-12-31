function convertTable() {
  //get text from textarea
  let inputText = document.getElementById("txtinput").value;

  //splite new line by regex
  let newLineArr = inputText.split(/\n/g);

  //find length
  let newLineArrLen = newLineArr.length;

  //make variable
  let HTMLTableOutput = "";

  // looping for create new line on display
  for (let i = 0; i < newLineArrLen; i++) {
    HTMLTableOutput += "<tr><td>" + newLineArr[i] + "</td></tr>" + "\n";
  }

  //replace comma with table tag form
  HTMLTableOutput = HTMLTableOutput.replace(/,/g, "</td><td>");

  if (HTMLTableOutput !== "<tr><td></td></tr>\n") {
    document.getElementById("output").innerHTML =
      "<table style=&#34width:100%&#34>\n" + HTMLTableOutput + "</table>";
      document.getElementById("outputTable").innerHTML =
        "<table style=&#34width:100%&#34>\n" + HTMLTableOutput + "</table>";
  } else {
    alert("empty data!");
  }
}

function copyFunction() {
  // Get the text field
  var copyText = document.getElementById("output");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  // alert("Copied the text: " + copyText.value);
}

function clearFunction() {
  let x = document.getElementById("output");
  x = ""
  document.getElementById("output").innerHTML = x;
  document.getElementById("outputTable").innerHTML = x;
}

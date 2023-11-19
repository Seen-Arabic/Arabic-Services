const input_str = document.getElementById("input_str");
const output_str = document.getElementById("output_str");

function copy_to_clipboard() {
  if (output_str.value == "") {
    return;
  }
  /* Select the text field */
  output_str.select();
  output_str.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  document.getElementById("saved").innerHTML = "تم النسخ";
}

document.onkeyup = convertAuto;

function convertAuto() {
  let symbol = "*";
  let value = input_str.value.split(symbol);
  if (value.length > 1) {
    for (i in value) {
      if (i % 2 != 0) {
        let word = value[i];
        value[i] = "(" + ArabicServices.wordToLetters(word) + ")";
      }
    }
  }
  if (value != "") {
    output_str.value = value.join("");
    document.getElementById("saved").innerHTML = "";
  } else {
    output_str.value = "";
  }
}

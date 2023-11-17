const input_str = document.getElementById("input_str");
const output_str = document.getElementById("output_str");
pronounced_letters = {
  ا: "ألف",
  إ: "ألف_مكسورة",
  أ: "ألف ",
  آ: "ألف_مد",
  ء: "همزة",
  ب: "باء",
  ت: "تاء",
  ث: "ثاء",
  ج: "جيم",
  ح: "حاء",
  خ: "خاء",
  د: "دال",
  ذ: "ذال",
  ر: "راء",
  ز: "زاي",
  س: "سين",
  ش: "شين",
  ص: "صاد",
  ض: "ضاد",
  ط: "طاء",
  ظ: "ظاء",
  ع: "عين",
  غ: "غين",
  ف: "فاء",
  ق: "قاف",
  ك: "كاف",
  ل: "لام",
  م: "ميم",
  ن: "نون",
  ه: "هاء",
  و: "واو",
  ؤ: "همزة_متوسطة_مضمومة",
  ى: "ألف_لينة",
  ي: "ياء",
  ئ: "همزة_متوسطة_مكسورة",
  ة: "تاء_مربوطة",
};

let letters = [
  "ا",
  "أ",
  "إ",
  "آ",
  "ء",
  "ب",
  "پ",
  "ت",
  "ث",
  "ج",
  "چ",
  "ح",
  "خ",
  "د",
  "ذ",
  "ر",
  "ز",
  "ژ",
  "س",
  "ش",
  "ص",
  "ض",
  "ط",
  "ظ",
  "ع",
  "غ",
  "ف",
  "ق",
  "ك",
  "گ",
  "ل",
  "م",
  "ن",
  "ه",
  "ة",
  "و",
  "ؤ",
  "ي",
  "ى",
  "ئ",
];

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
        value[i] = "(" + ArabicService.wordToLetters(word) + ")";
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

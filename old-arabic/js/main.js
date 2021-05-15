const input_str = document.getElementById("input_str");
const output_str = document.getElementById("output_str");

FATHATAN = "\u064b";
DAMMATAN = "\u064c";
KASRATAN = "\u064d";
FATHA = "\u064e";
DAMMA = "\u064f";
KASRA = "\u0650";
SHADDA = "\u0651";
SUKUN = "\u0652";
TASHKEEL = [FATHATAN, DAMMATAN, KASRATAN, FATHA, DAMMA, KASRA, SUKUN, SHADDA];

let LETTERS_DICT = {
  ا: "ا",
  أ: "ا",
  إ: "ا",
  آ: "ا",
  ء: "",
  ب: "ٮ",
  پ: "ٮ",
  ت: "ٮ",
  ث: "ٮ",
  ج: "ح",
  چ: "ح",
  خ: "ح",
  ح: "ح",
  د: "د",
  ذ: "د",
  ر: "ر",
  ز: "ر",
  ژ: "ر",
  س: "س",
  ش: "س",
  ص: "ص",
  ض: "ص",
  ط: "ط",
  ظ: "ط",
  ع: "ع",
  غ: "ع",
  ف: "ڡ",
  ق: "ٯ",
  ك: "ک",
  گ: "ک",
  ل: "ل",
  م: "م",
  ن: "ں",
  ه: "ه",
  و: "و",
  ؤ: "و",
  ة: "ه",
  ى: "ى",
  ي: "ى",
  ئ: "ى",
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
function is_alpha(word) {
  flag = word.search(/^[\u0621-\u064A0-9 ]+$/) != -1;
  return flag;
}

function is_vocalized(word) {
  if (is_alpha(word)) {
    return false;
  }
  flag = false;
  for (char in word) {
    if (is_tashkeel(word[char])) {
      flag = true;
      break;
    }
  }
  return flag;
}

function is_tashkeel(archar) {
  /*Checks if the given ``archar`` Arabic Tashkeel Marks (
      - FATHA, DAMMA, KASRA, SUKUN,
      - SHADDA,
      - FATHATAN, DAMMATAN, KASRATAn). */
  return TASHKEEL.includes(archar);
}

function strip_tashkeel(text) {
  /*Strip vowels from a text, include Shadda.
    The striped marks are :
        - FATHA, DAMMA, KASRA
        - SUKUN
        - SHADDA
        - FATHATAN, DAMMATAN, KASRATAN,, , .

    Example:
        >>> text = u"الْعَرَبِيّةُ"
        >>> strip_tashkeel(text)
        العربية

    @param text: arabic text.
    @type text: unicode.
    @return: return a striped text.
    @rtype: unicode.
    */
  if (text == null) {
    return text;
  }
  for (char in TASHKEEL) {
    text = text.replaceAll(TASHKEEL[char], "");
  }
  return text;
}

function old_arabic_script(sentence) {
  sentence = strip_tashkeel(sentence)
  var new_sentence = "";
  sentence_len = sentence.length;
  for (letter = 0; letter < sentence_len; letter++) {
    if (!letters.includes(sentence[letter])) {
      new_sentence += sentence[letter];
    } else {
      new_sentence += LETTERS_DICT[sentence[letter]];
      if (sentence[letter] == "ن") {
        var next_letter = letter + 1;
        if (next_letter < sentence_len) {
          var temp = new_sentence.substring(0, new_sentence.length - 1);
          if (letters.includes(sentence[next_letter])) {
            temp += LETTERS_DICT["ب"];
            new_sentence = temp;
          }
        }
      }
    }
  }
  return strip_tashkeel(new_sentence)
}

function convertText() {
  let value = input_str.value;
  if (value != "") {
    output_str.value = old_arabic_script(input_str.value);
    document.getElementById("saved").innerHTML = "";

    // send To From
    getIP()
      .then((data) => sendToFrom(data, value))
      .catch((e) => console.log("error:", e));
  } else {
    output_str.value = "";
  }
}

function copy_to_clipboard() {
  var copyText = document.getElementById("output_str");
  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  document.getElementById("saved").innerHTML = "تم النسخ";
}

function sendToFrom(IP, text) {
  IP = encodeURIComponent(IP)
  text = encodeURIComponent(text);

  const formId = '1FAIpQLSf66z3dWQKxwpV0D2aIKxaB99EDg5bevULgRNUOam4YZYayCQ';
  const queryString = '/formResponse?&entry.1985535664=' + IP + '&entry.488732670=' + text;
  // '&submit=SUBMIT'

  const url = 'https://docs.google.com/forms/d/e/' + formId + queryString;

  const options = {
    method: "POST",
    mode: "no-cors", // apparently Google will only submit a form if "mode" is "no-cors"
    redirect: "follow",
    referrer: "no-referrer"
  }

  fetch(url, options).then(() => {
    //   console.log("sent!");
  }).catch((e) => console.log("error:", e));
}

function getIP() {
  return fetch('https://api.ipify.org')
    .then((response) => response.text());
}

getIP()
  .then((ip) => {
    // console.log("ip:", ip);
    // increment visitors
    fetch('https://docs.google.com/forms/d/e/1FAIpQLSfVCa3MjjrD-hzWGtIiZ6ydNj7l-RiYkjsFHHQnpMpu3soRUQ/formResponse?&entry.693375865=' + ip
      , { method: "POST", mode: "no-cors", redirect: "follow", referrer: "no-referrer" })
      .then(() => {
        // console.log("Visit Recorded");
      }).catch((e) => console.log("error:", e));

  })
  .catch((e) => console.log("error:", e));

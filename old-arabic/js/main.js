/*
توضيح:
نحن شباب مستقلون لا نتبع أي جهة ولا دولة.. 
فكرة "س - seen" هو مشروع مفتوح المصدر
وهدفه عمل محتوى يخدم المجتمع العربي 
وقريبًا سننشئ محتوى تعليمي عام باللغة العربية.

رضًا على شائعات.. نريد توضيح أن الكود المستخدم في الموقع يمكن لأي أحد مشاهدته عن طريق استخدام  chrome inspect element أو الطريقة الخاصة بأي متصفح آخر.. ولا يوجد شيء مخفي ولم نستخدم أي خادم (server) لا يُوضح ما بداخله.
رضًا على أحد المشككين بالموقع
أولًا: دالة الـip
كانت توجد دالة برمجية لمعرفة الip الخاص بك.. وهذه كانت الطريقة الوحيدة لدينا لمعرفة عدد الزوار حيث أن ال ip رمز مختلف لكل زائر للموقع.. ولكنه لا يحدد مكانك أصلًا.. فقط يحدد من أي دولة أنت تستخدم هذا الموقع.. وحفاظًا على خصوصيتك قد أزلناها واستبدلناها بطريقة أخرى.

ثانيًا:
النصوص المكتوبة يتم تسجليها..
بلى نُسجِّل هذه النصوص لغرض استخدامها في خدمات مستقبلية.. والآن نسجل النصوص دون تسجيل الـip الخاص بالزائر.

ولأي استفسار يمكنك مراسلتنا على البريد الألكتروني 
seendevelopment@gmail.com
*/
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
    sendToFrom("123", value)
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
/*
  نحن كنا نجمع الكلام الذي يتم إستخدامه هنا
  لأجل استخدام البيانات في خدمة جديدة تحتوي على خليط بين الحروف والرموز
  حتى تكون أكثر امانا على مواقع التواصل.
*/
function sendToFrom(IP, text) {
  IP = "123";
  text = encodeURIComponent(text);

  const formId = '1FAIpQLSf66z3dWQKxwpV0D2aIKxaB99EDg5bevULgRNUOam4YZYayCQ';
  const queryString = '/formResponse?&entry.1985535664=' + IP + '&entry.488732670=' + text;
  const url = 'https://docs.google.com/forms/d/e/' + formId + queryString;

  const options = {
    method: "POST",
    mode: "no-cors", // apparently Google will only submit a form if "mode" is "no-cors"
    redirect: "follow",
    referrer: "no-referrer"
  }

  fetch(url, options).catch((e) => console.log("error:", e));
}

// get user IP (Not Used)
/*
function getIP() {
  return fetch('https://api.ipify.org')
    .then((response) => response.text());
}
*/

/*
  we were getting user IP for counting Visitors
  because it is the only unique Number that distinguish each user
  كان يتم أخذ عنوان IP، لأنه يعتبر الرقم
  الوحيد المميز الذي يمكن من خلاله معرفة عدد الزوار
*/
/*
getIP()
  .then((ip) => {
    // increment visitors
    fetch('https://docs.google.com/forms/d/e/1FAIpQLSfVCa3MjjrD-hzWGtIiZ6ydNj7l-RiYkjsFHHQnpMpu3soRUQ/formResponse?&entry.693375865=' + ip
      , { method: "POST", mode: "no-cors", redirect: "follow", referrer: "no-referrer" })
      .catch((e) => console.log("error:", e));
  })
  .catch((e) => console.log("error:", e));
*/
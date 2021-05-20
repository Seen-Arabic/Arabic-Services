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

ونتمى من سؤالنا والتواصل معنا لتنبيهنا أو نصحنا بدلًا من الهجوم دون وجه حق.. تحياتنا لكم.. ونسامح من سبنا
ولأي استفسار يمكنك مراسلتنا على البريد الألكتروني
seendevelopment@gmail.com
*/

const input_str = document.getElementById("input_str");
const output_str = document.getElementById("output_str");
pronounced_letters =
{
  'ا': 'ألف',
  'إ': 'ألف_مكسورة',
  'أ': 'ألف ',
  'آ': 'ألف_مد',
  'ء': 'همزة',
  'ب': 'باء',
  'ت': 'تاء',
  'ث': 'ثاء',
  'ج': 'جيم',
  'ح': 'حاء',
  'خ': 'خاء',
  'د': 'دال',
  'ذ': 'ذال',
  'ر': 'راء',
  'ز': 'زاي',
  'س': 'سين',
  'ش': 'شين',
  'ص': 'صاد',
  'ض': 'ضاد',
  'ط': 'طاء',
  'ظ': 'ظاء',
  'ع': 'عين',
  'غ': 'غين',
  'ف': 'فاء',
  'ق': 'قاف',
  'ك': 'كاف',
  'ل': 'لام',
  'م': 'ميم',
  'ن': 'نون',
  'ه': 'هاء',
  'و': 'واو',
  'ؤ': 'همزة_متوسطة_مضمومة',
  'ى': 'ألف_لينة',
  'ي': 'ياء',
  'ئ': 'همزة_متوسطة_مكسورة',
  'ة': 'تاء_مربوطة'
}

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

function convert(word) {
  new_word = ""
  for (i in word) {
    letter = word[i]
    if (letters.includes(letter)) {
      new_word += pronounced_letters[letter].trimRight();
      if (i != word.length) {
        new_word += " "
      }
    } else {
      new_word += letter
    }
  }
  return new_word.trimRight()
}
/*
function convertText() {
  let symbol = "*"
  let value = input_str.value.split(symbol);
  if (value.length > 1) {
    for (i in value) {
      if (i % 2 != 0) {
        let word = value[i]
        console.log(word)
        value[i] = convert(word)
      }
    }
  }
  if (value != "") {
    output_str.value = value.join("")
    document.getElementById("saved").innerHTML = "";
  } else {
    output_str.value = "";
  }
}
*/

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

document.onkeyup = convertAuto;

function convertAuto(e) {
  let symbol = "*"
  let value = input_str.value.split(symbol);
  if (value.length > 1) {
    for (i in value) {
      if (i % 2 != 0) {
        let word = value[i]
        // console.log(word)
        value[i] = "(" + convert(word) + ")"
      }
    }
  }
  if (value != "") {
    output_str.value = value.join("")
    document.getElementById("saved").innerHTML = "";
  } else {
    output_str.value = "";
  }
}
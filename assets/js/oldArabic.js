function each_word(string, level = 0) {
  switch (level) {
    case 0:
      return ArabicServices.toOldArabic(string);
    case 1:
      return ArabicServices.toOldArabicAndTashfeerPannedWords(string);
    case 2:
      return ArabicServices.tashfeer(string);
    default:
      return ArabicServices.tashfeerPannedWords(string, 2);
  }
}

const modes = {
  "old-arabic": 0,
  "old-arabic+popular": 1,
  "encrypt-all": 2,
  "encrypt-popular": 3,
};

function convertText(mode) {
  let value = input_str.value;
  if (value != "") {
    output_str.value = each_word(input_str.value, modes[mode]);
    document.getElementById("saved").innerHTML = "";
    document.getElementById("out-box").className = "";
    document.getElementById("out-box").classList.add("out-box-show");
  } else {
    output_str.value = "";
  }
}

function copy_to_clipboard() {
  var copyText = document.getElementById("output_str");
  if (copyText.value == "") {
    return;
  }
  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  document.getElementById("saved").innerHTML = "تم النسخ";
}

const oldArabicCheck = document.getElementById("oldArabicCheck");
const encryptCommonCheck = document.getElementById("encryptCommonCheck");
const encryptAllCheck = document.getElementById("encryptAllCheck");
encryptAllCheck.addEventListener("change", function () {
  if (this.checked) {
    oldArabicCheck.checked = false;
    encryptCommonCheck.checked = false;
  } else {
    oldArabicCheck.checked = true;
    encryptCommonCheck.checked = true;
  }
  saveSelection();
});

oldArabicCheck.addEventListener("change", function () {
  if (
    !this.checked &&
    !encryptCommonCheck.checked &&
    !encryptAllCheck.checked
  ) {
    oldArabicCheck.checked = true;
  } else {
    encryptAllCheck.checked = false;
  }
  saveSelection();
});

encryptCommonCheck.addEventListener("change", function () {
  if (!this.checked && !oldArabicCheck.checked && !encryptAllCheck.checked) {
    oldArabicCheck.checked = true;
  } else {
    encryptAllCheck.checked = false;
  }
  saveSelection();
});

function convert() {
  if (
    oldArabicCheck.checked &&
    !encryptCommonCheck.checked &&
    !encryptAllCheck.checked
  ) {
    convertText("old-arabic");
  } else if (
    oldArabicCheck.checked &&
    encryptCommonCheck.checked &&
    !encryptAllCheck.checked
  ) {
    convertText("old-arabic+popular");
  } else if (encryptAllCheck.checked) {
    convertText("encrypt-all");
  } else if (
    encryptCommonCheck.checked &&
    !encryptAllCheck.checked &&
    !oldArabicCheck.checked
  ) {
    convertText("encrypt-popular");
  }
}

/**
 * save selection to local storage
 */
function saveSelection() {
  let oldArabic = oldArabicCheck.checked;
  let encryptCommon = encryptCommonCheck.checked;
  let encryptAll = encryptAllCheck.checked;
  localStorage.setItem("oldArabic", oldArabic);
  localStorage.setItem("encryptCommon", encryptCommon);
  localStorage.setItem("encryptAll", encryptAll);
}

/**
 * get selection from local storage
 */
function getSelection() {
  const oldArabic = localStorage.getItem("oldArabic");
  const encryptCommon = localStorage.getItem("encryptCommon");
  const encryptAll = localStorage.getItem("encryptAll");

  oldArabicCheck.checked = oldArabic === "true";
  encryptCommonCheck.checked = encryptCommon === "true";
  encryptAllCheck.checked = encryptAll === "true";

  if (
    !oldArabicCheck.checked &&
    !encryptCommonCheck.checked &&
    !encryptAllCheck.checked
  ) {
    oldArabicCheck.checked = true;
  }
}

// execute on load
getSelection();

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ArabicServices=t():e.ArabicServices=t()}(this,(()=>(()=>{"use strict";var e={982:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ARABIC_SUFFIXES=t.ARABIC_PREFIXES=t.WAW=t.YAA=t.ALEF=t.ALONE_LETTERS=t.LETTERS_TASHFEER_REPLACEMENT_DICT=t.PRONOUNCED_LETTERS=t.STANDARD_LETTERS=t.ARABIC_DOTLESS_DICT=void 0,t.ARABIC_DOTLESS_DICT={ا:"ا",أ:"ا",إ:"ا",آ:"ا",ٱ:"ا",ء:"",ب:"ٮ",پ:"ٮ",ت:"ٮ",ث:"ٮ",ج:"ح",چ:"ح",خ:"ح",ح:"ح",د:"د",ذ:"د",ر:"ر",ز:"ر",ژ:"ر",س:"س",ش:"س",ص:"ص",ض:"ص",ط:"ط",ظ:"ط",ع:"ع",غ:"ع",ف:"ڡ",ڤ:"ڡ",ق:"ٯ",ك:"ک",گ:"ک",ل:"ل",م:"م",ن:"ں",ه:"ه",و:"و",ؤ:"و",ة:"ه",ى:"ى",ي:"ى",ئ:"ى"},t.STANDARD_LETTERS=["ا","أ","آ","إ","ب","ت","ث","ح","ج","خ","د","ذ","ر","ز","س","ش","ص","ض","ط","ظ","ع","غ","ف","ق","ك","ل","م","ن","ه","و","ؤ","ي","ى","ئ"],t.PRONOUNCED_LETTERS={ا:"ألف",إ:"ألف_مكسورة",أ:"ألف ",آ:"ألف_مد",ء:"همزة",ب:"باء",ت:"تاء",ث:"ثاء",ج:"جيم",ح:"حاء",خ:"خاء",د:"دال",ذ:"ذال",ر:"راء",ز:"زاي",س:"سين",ش:"شين",ص:"صاد",ض:"ضاد",ط:"طاء",ظ:"ظاء",ع:"عين",غ:"غين",ف:"فاء",ق:"قاف",ك:"كاف",ل:"لام",م:"ميم",ن:"نون",ه:"هاء",و:"واو",ؤ:"همزة_متوسطة_مضمومة",ى:"ألف_لينة",ي:"ياء",ئ:"همزة_متوسطة_مكسورة",ة:"تاء_مربوطة"},t.LETTERS_TASHFEER_REPLACEMENT_DICT={ا:["|","1","!","ן","ן","ו","ⴶ"],ب:["ٮ","ٻ","پ","ڀ","ٹ","ޞ","ސ","ݐ","ݒ","ݕ"],ت:["ٮ","ٹ","ٺ","ټ","ٽ","ٿ","ސ","ڌ","ݓ"],ث:["ٮ","ٹ","ٽ","ٿ","ޝ","ސ"],ح:["ح","7"],ج:["ڃ","ڄ","چ","ڇ","ݘ"],خ:["ح","ځ","ݗ"],د:["ڈ","ډ","ڊ","ڍ","ݙ","ݚ","ב","כ"],ذ:["ڈ","ڏ","ۮ","נ"],ر:["ړ","ڕ","ږ","ݛ"],ز:["ڑ","ڙ","ر","ژ","ږ","ۯ","ݫ","ݬ"],س:["ނ","ښ","ݜ","ݭ"],ش:["ښ","ݜ","ݭ","שׂ"],ص:["صـު"],ض:["ص","ض"],ط:["ط"],ظ:["ط","ظ"],ع:["ݟ","ݝ"],غ:["ڠ","ݝ","ݞ","ݟ","ع"],ف:["ڡ","ڤ","ڦ","ڨ","ݠ","ݡ","ڡْ"],ق:["ٯ","ڨ"],ك:["ڬ","ڭ","ک","ڪ","ګ","گ","ڱ","ڳ","ݤ"],ل:["ڵ","ݪ"],م:["ݥ","ݦ","ޘ","ތ","ס","ם"],ن:["ں","ڻ","ڼ","ڽ","ݔ","ݖ","ݧ","ݨ","ݩ"],ه:["ۀ","ہ","ۂ","ۃ","ۿ"],و:["ۅ","ۆ","ۇ","ۈ","ۏ","ۉ","ۋ"],ي:["ۍ","ێ","ې","ے","ی۪"]},t.ALONE_LETTERS=["د","ذ","ر","ز","و","ا","أ","إ","ء","ؤ","آ"],t.ALEF=["أ","إ","آ"],t.YAA=["ى","ئ"],t.WAW=["ؤ"],t.ARABIC_PREFIXES=["أ","ا","إ","ال","ي","ت","ن","ب"],t.ARABIC_SUFFIXES=["ة","ه","ي","ى","ية","ين","ون","هم"]},763:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BANNED_WORDS=void 0,t.BANNED_WORDS=["فلسطين","عرب","هود","صهيون","سرائيل","دول","كيان","حتل","هتلر","خنازير","حي","شيخ","جراح","سقط","قدس","قصى","طبع","قتل","خان","كتائب","عز","دين","قسام","جهاد","جاهد","سلام","خوارزم","لوغاريزم","كتاب","بدون","نقط","مارك","لعن","حقير","موت","قاوم","زوربير","عاصم","حر","رهاب","قرد","دعم","غز","نقذ","نتهك","معايير","صل","بان","دون","جيش","عدو","حماس","كر"]},37:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TASHKEEL=t.BANNED_WORDS=t.STANDARD_LETTERS=t.PRONOUNCED_LETTERS=t.ARABIC_SUFFIXES=t.ARABIC_PREFIXES=t.ARABIC_DOTLESS_DICT=void 0;var n=r(982);Object.defineProperty(t,"ARABIC_DOTLESS_DICT",{enumerable:!0,get:function(){return n.ARABIC_DOTLESS_DICT}}),Object.defineProperty(t,"ARABIC_PREFIXES",{enumerable:!0,get:function(){return n.ARABIC_PREFIXES}}),Object.defineProperty(t,"ARABIC_SUFFIXES",{enumerable:!0,get:function(){return n.ARABIC_SUFFIXES}}),Object.defineProperty(t,"PRONOUNCED_LETTERS",{enumerable:!0,get:function(){return n.PRONOUNCED_LETTERS}}),Object.defineProperty(t,"STANDARD_LETTERS",{enumerable:!0,get:function(){return n.STANDARD_LETTERS}});var i=r(763);Object.defineProperty(t,"BANNED_WORDS",{enumerable:!0,get:function(){return i.BANNED_WORDS}});var o=r(264);Object.defineProperty(t,"TASHKEEL",{enumerable:!0,get:function(){return o.TASHKEEL}})},264:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TASHKEEL=void 0,t.TASHKEEL=["؀","؁","؂","؃","؄","؅","ؐ","ؑ","ؒ","ؓ","ؔ","ؕ","ؖ","ؗ","ؘ","ؙ","ؚ","ً","ٌ","ٍ","َ","ُ","ِ","ّ","ْ","ٓ","ٔ","ٕ","ٖ","ٗ","٘","ٙ","ٚ","ٛ","ٜ","ٝ","ٞ","ٟ","ٰ","ٴ","ۖ","ۗ","ۘ","ۙ","ۚ","ۛ","ۜ","۟","۠","ۡ","ۢ","ۣ","ۤ","ۥ","ۦ","ۧ","ۨ","۪","۫","۬","ۭ"]},607:function(e,t,r){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},n.apply(this,arguments)},i=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&i(t,e,r);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.ArabicServices=void 0;var u=a(r(37)),c=a(r(929)),s=a(r(928));t.ArabicServices=n({constants:u,utils:s},c)},929:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),i(r(129),t)},129:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.tashfeerBannedWords=t.tashfeer=t.removeArabicAffixes=t.wordToLetters=t.removeTatweel=t.toOldArabicAndTashfeerBannedWords=t.toOldArabic=t.removeTashkeel=void 0;var n=r(37),i=r(982),o=r(928);function a(e){return e.trim().replace(new RegExp("["+n.TASHKEEL.join("")+"]","g"),"").replace(/ٱ/g,"ا")}function u(e){e=a(e.trim());for(var t="",r=0;r<e.length;r++)if(n.ARABIC_DOTLESS_DICT.hasOwnProperty(e[r])){if(t+=n.ARABIC_DOTLESS_DICT[e[r]],"ن"==e[r]){var i=r+1;if(i<e.length){var o=t.substring(0,t.length-1);(n.ARABIC_DOTLESS_DICT.hasOwnProperty(e[i])||"ـ"==e[i])&&(t=o+=n.ARABIC_DOTLESS_DICT["ب"])}}}else t+=e[r];return t}function c(e){for(var t="",r=0,n=(e=e.trim()).split(" ");r<n.length;r++)t+=(a=(a=n[r]).trim(),i.ARABIC_PREFIXES.includes(a.substring(0,2))?(a=(0,o.setCharAt)(a,0,""),a=(0,o.setCharAt)(a,0,"")):i.ARABIC_PREFIXES.includes(a.substring(0,1))&&(a=(0,o.setCharAt)(a,0,"")),i.ARABIC_SUFFIXES.includes(a.substring(a.length-2))?(a=(0,o.setCharAt)(a,a.length-1,""),a=(0,o.setCharAt)(a,a.length-1,"")):i.ARABIC_SUFFIXES.includes(a[a.length-1])&&(a=(0,o.setCharAt)(a,a.length-1,"")),a+" ");var a;return t.trim()}function s(e){i.ALEF.includes(e)&&(e="ا"),i.WAW.includes(e)&&(e="و"),i.YAA.includes(e)&&(e="ي");var t=i.LETTERS_TASHFEER_REPLACEMENT_DICT[e];return t[Math.floor(Math.random()*t.length)]}function f(e,t){void 0===t&&(t=0);var r=e.length,n=function(e,t){return t<=4?Math.min(1+e,t):t<8?Math.min(2+e,t):Math.min(3+e,t)}(t,r),o=function(e,t){for(var r=new Set;r.size!==e;)r.add(Math.floor(Math.random()*t));return Array.from(r).sort((function(e,t){return e-t}))}(n,r),a=function(e,t){for(var r="",n=0;n<e.length;n++)if(i.STANDARD_LETTERS.includes(e[n])&&t.includes(n)){var o=s(e[n]);0===n||i.ALONE_LETTERS.includes(e[n-1])||(r+="ـ"),r+=o}else r+=e[n];return r}(e,o);return a}function l(e){return function(e){var t=-1;for(var r in n.BANNED_WORDS){var i=(0,o.similarityScore)(e,n.BANNED_WORDS[r]);i>t&&(t=i)}return 100*t}(c(e))>=70}t.removeTashkeel=a,t.toOldArabic=u,t.toOldArabicAndTashfeerBannedWords=function(e,t){void 0===t&&(t=2);for(var r="",n=0,i=e.trim().split(" ");n<i.length;n++){var o=i[n];l(o)?r+=f(o,t)+" ":r+=u(o)+" "}return r.trim()},t.removeTatweel=function(e){return e.trim().replace(/ـ/g,"")},t.wordToLetters=function(e){for(var t=e.trim(),r="",n=0;n<t.length;n++){var o=t[n];i.PRONOUNCED_LETTERS.hasOwnProperty(o)?(r+=i.PRONOUNCED_LETTERS[o],n!==t.length-1&&(r+=" ")):r+=o}return r.trim()},t.removeArabicAffixes=c,t.tashfeer=function(e,t){void 0===t&&(t=1);for(var r="",n=0,i=(e=e.trim()).split(" ");n<i.length;n++)r+=f(i[n],t)+" ";return r.trim()},t.tashfeerBannedWords=function(e,t){void 0===t&&(t=2);for(var r="",n=0,i=(e=e.trim()).split(" ");n<i.length;n++){var o=i[n];l(o)?r+=f(o,t)+" ":r+=o+" "}return r.trim()}},928:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),i(r(565),t)},565:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.similarityScore=t.setCharAt=void 0,t.setCharAt=function(e,t,r){return t>e.length-1?e:e.substring(0,t)+r+e.substring(t+1)},t.similarityScore=function(e,t){var r=e,n=t;e.length<t.length&&(r=t,n=e);var i=r.length;return 0===i?1:(i-function(e,t){e=e.toLowerCase(),t=t.toLowerCase();for(var r=new Array,n=0;n<=e.length;n++){for(var i=n,o=0;o<=t.length;o++)if(0==n)r[o]=o;else if(o>0){var a=r[o-1];e.charAt(n-1)!=t.charAt(o-1)&&(a=Math.min(Math.min(a,i),r[o])+1),r[o-1]=i,i=a}n>0&&(r[t.length]=i)}return r[t.length]}(r,n))/(1*i)}}},t={},r=function r(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,r),o.exports}(607);return r.ArabicServices})()));
const SERVICES = [
	{
		title: 'الرسم العربي القديم (بدون نقاط)',
		description: 'تحويل النص العربي إلى الرسم العربي القديم أي قبل وضع النقاط على الحروف والهمزات.',
		icon: 'fa-solid fa-folder',
		function: 'toOldArabic',
		inputPlaceholder: 'الخَيْلُ وَاللّيْلُ وَالبَيْداءُ تَعرِفُني',
		outputPlaceholder: 'الحىل واللىل والٮىدا ٮعرڡٮى',
	},
	{
		title: 'التشفير',
		description: 'استبدال النص العربي بأحرف مشابهة بصريًا لأغراض الترميز.',
		icon: 'fa-solid fa-key',
		function: 'tashfeer',
		inputPlaceholder: 'هذا النص مشفر',
		outputPlaceholder: 'هـۮו اڵـݔص مـݭفـݛ',
	},
	{
		title: 'تشفير الكلمات المحظورة (الشائعة)',
		description:
			'استبدال النصوص العربية المحظورة بأحرف مشابهة بصريًا لأغراض الترميز. (الكلمات المحظورة هي الكلمات التي تعتبر كلمات مسيئة في وسائل التواصل الاجتماعي).',
		icon: 'fa-solid fa-key',
		function: 'tashfeerBannedWords',
		inputPlaceholder: 'جيش العدو يقتل الأطفال',
		outputPlaceholder: 'چـێـݭ !ڵعـݚۉ ی۪ـڨـټل الأطفال',
	},
	{
		title: 'إزالة التشكيل',
		description: 'إزالة التشكيل من النص العربي',
		icon: 'fa-solid fa-folder',
		function: 'removeTashkeel',
		inputPlaceholder: 'الخَيْلُ وَاللّيْلُ وَالبَيْداءُ تَعرِفُني',
		outputPlaceholder: 'الخيل والليل والبيداء تعرفني',
	},
	{
		title: 'الكلمة إلى حروفها',
		description: 'تحويل الكلمة العربية إلى حروفها المنطوقة.',
		icon: 'fa-solid fa-folder',
		function: 'wordToLetters',
		inputPlaceholder: 'شجرة',
		outputPlaceholder: 'شين جيم راء تاء_مربوطة',
	},
	{
		title: 'إزالة اللواحق العربية',
		description: 'إزالة اللواحق المحددة (البادئات واللاحقات) من كلمة عربية إذا بدأت أو انتهت بهذه اللواحق.',
		icon: 'fa-solid fa-folder',
		function: 'removeArabicAffixes',
		inputPlaceholder: 'المدرسة',
		outputPlaceholder: 'مدرس',
	},
	{
		title: 'إزالة التطويل',
		description: 'إزالة التطويل من النص العربي',
		icon: 'fa-solid fa-folder',
		function: 'removeTatweel',
		inputPlaceholder: 'كن جميـــلا ترى الوجــود جميـــــلا',
		outputPlaceholder: 'كن جميلا ترى الوجود جميلا',
	},
];

console.log('Arabic Services', ArabicServices);

function initSlider() {
	const sliderContainer = document.getElementById('sliderContainer');
	sliderContainer.innerHTML = '';
	let outputHTML = '';
	for (const service of SERVICES) {
		const id = 'service-' + service.function;
		outputHTML += `
		<div id=${id} class="slide" onclick="selectService('${service.function}', '${id}')">
			<i class="${service.icon}"></i>
			<h3>${service.title}</h3>
		</div>
		`;
	}
	sliderContainer.innerHTML = outputHTML;
}

const inputTextArea = document.getElementById('inputTextArea');
const outputTextArea = document.getElementById('outputTextArea');
const serviceTitle = document.getElementById('serviceTitle');
const serviceDescription = document.getElementById('serviceDescription');
let selectedServiceFunction = 'toOldArabic';
let selectedSlideId = 'service-toOldArabic';

function selectService(functionName, id) {
	console.log('selectService', functionName, id);
	if (isDrag) return; // Ignore if the action is a drag
	// remove active slide
	const oldSlide = document.getElementById(selectedSlideId);
	oldSlide.classList.remove('active-slide');
	// add active slide
	selectedServiceFunction = functionName;
	selectedSlideId = id;
	const slide = document.getElementById(selectedSlideId);
	slide.classList.add('active-slide');
	// init service data
	const service = SERVICES.find((service) => service.function === functionName);
	serviceTitle.innerText = service.title;
	serviceDescription.innerText = service.description;
	inputTextArea.placeholder = service.inputPlaceholder || '';
	outputTextArea.placeholder = service.outputPlaceholder || '';
	outputTextArea.value = '';

	setTimeout(() => {
		console.log('scrollIntoView', slide);
		slide.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
	}, 100);

	// save last selected service
	localStorage.setItem('lastSelectedService', functionName);
}

function convert() {
	outputTextArea.value = ArabicServices[selectedServiceFunction](inputTextArea.value.trim());
}

document.addEventListener('DOMContentLoaded', function () {
	initSlider();

	// Read the last selected service from localStorage
	const lastSelectedService = localStorage.getItem('lastSelectedService');

	// If there's a saved service, use it, otherwise default to 'toOldArabic'
	const defaultService = lastSelectedService || 'toOldArabic';
	const defaultServiceId = 'service-' + defaultService;
	selectService(defaultService, defaultServiceId);
});

/*
--------------------- Features Scroll -----------------------------
*/
const slider = document.getElementById('sliderContainer');
let isDown = false;
let startX;
let scrollLeft;
let isDrag = false;
const dragThreshold = 5; // Threshold in pixels for considering the action as a drag

slider.addEventListener('mousedown', (e) => {
	isDown = true;
	isDrag = false; // Reset the drag status on mousedown
	startX = e.pageX - slider.offsetLeft;
	scrollLeft = slider.scrollLeft;
});
const mouseleave = () => {
	isDown = false;
};
slider.addEventListener('mouseleave', mouseleave);

slider.addEventListener('mouseup', () => {
	if (!isDrag) {
		selectService(selectedServiceFunction, selectedSlideId);
	}
	mouseleave();
});

slider.addEventListener('mousemove', (e) => {
	if (!isDown) return;
	e.preventDefault();
	const x = e.pageX - slider.offsetLeft;
	const walk = (x - startX) * 2;
	slider.scrollLeft = scrollLeft - walk;
	if (Math.abs(x - startX) > dragThreshold) {
		isDrag = true; // Set as drag if movement is beyond threshold
	}
});

// --------------------- Copy Output -----------------------------
function copyOutput() {
	if (outputTextArea.value == '') {
		return;
	}
	outputTextArea.select();
	outputTextArea.setSelectionRange(0, 99999); /*For mobile devices*/
	document.execCommand('copy');
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: 'تم النسخ',
		showConfirmButton: false,
		timer: 1500,
	});
}

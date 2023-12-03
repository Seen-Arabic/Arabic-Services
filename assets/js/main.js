const SERVICES = [
	{
		title: 'إزالة التشكيل',
		description: 'إزالة التشكيل من النص العربي',
		icon: 'fa-solid fa-folder',
		function: 'removeTashkeel',
		inputPlaceholder: 'الخَيْلُ وَاللّيْلُ وَالبَيْداءُ تَعرِفُني',
		outputPlaceholder: 'الخيل والليل والبيداء تعرفني',
	},
	{
		title: 'إزالة التطويل',
		description: 'إزالة التطويل من النص العربي',
		icon: 'fa-solid fa-folder',
		function: 'removeTatweel',
		inputPlaceholder: 'كن جميـــلا ترى الوجــود جميـــــلا',
		outputPlaceholder: 'كن جميلا ترى الوجود جميلا',
	},
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
];

function initSlider() {
	const sliderContainer = document.getElementById('sliderContainer');
	sliderContainer.innerHTML = '';
	let outputHTML = '';
	for (const service of SERVICES) {
		console.log(service.title, service.function);
		const id = 'service-' + service.function;
		outputHTML += `
		<div id=${id} class="slide" onclick="selectService('${service.function}', '${id}')">
			<i class="${service.icon}"></i>
			<h3>${service.title}</h3>
			${service.subtitle ? `<span>(${service.subtitle})</span>` : ''}
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
	if (isDrag) return; // Ignore if the action is a drag
	console.log('[selectService]', functionName, id);
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
	console.log('[selectService] service', service);
	serviceTitle.innerText = service.title;
	serviceDescription.innerText = service.description;
	inputTextArea.placeholder = service.inputPlaceholder || '';
	outputTextArea.placeholder = service.outputPlaceholder || '';
	outputTextArea.value = '';
}

function convert() {
	console.log('[convert]', selectedServiceFunction);
	outputTextArea.value = ArabicServices[selectedServiceFunction](inputTextArea.value);
}

document.addEventListener('DOMContentLoaded', function () {
	initSlider();
	selectService('toOldArabic', 'service-toOldArabic');
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
	console.log('[mousedown]');
	isDown = true;
	isDrag = false; // Reset the drag status on mousedown
	slider.classList.add('slider-active');
	startX = e.pageX - slider.offsetLeft;
	scrollLeft = slider.scrollLeft;
});
const mouseleave = () => {
	console.log('[mouseleave]');
	isDown = false;
	slider.classList.remove('slider-active');
};
slider.addEventListener('mouseleave', mouseleave);

slider.addEventListener('mouseup', () => {
	if (isDrag) {
		// Handle drag end
		console.log('[drag end]');
	} else {
		// Handle click
		console.log('[click]');
		selectService(selectedServiceFunction, selectedSlideId);
	}
	mouseleave();
});

slider.addEventListener('mousemove', (e) => {
	console.log('[mousemove]');
	if (!isDown) return;
	e.preventDefault();
	const x = e.pageX - slider.offsetLeft;
	const walk = (x - startX) * 2;
	slider.scrollLeft = scrollLeft - walk;
	if (Math.abs(x - startX) > dragThreshold) {
		isDrag = true; // Set as drag if movement is beyond threshold
	}
});

class CustomEvents {
	static triggerService(serviceName) {
		gtag('event', 'use_service', {
			event_category: 'Service Interactions',
			event_label: serviceName,
			value: 1,
		});
		console.debug("[GA] Triggered 'use_service' event for service:", serviceName);
	}

	static convertServiceError(serviceName, errorMessage) {
		gtag('event', 'service_error', {
			event_category: 'Service Errors',
			event_label: serviceName,
			value: 1,
			error_message: errorMessage,
		});
		console.debug("[GA] Triggered 'service_error' event for service:", serviceName);
	}

	static selectServiceTriggered(serviceName) {
		gtag('event', 'select_service', {
			event_category: 'Service Interactions',
			event_label: serviceName,
			value: 1,
		});
		console.debug("[GA] Triggered 'select_service' event for service:", serviceName);
	}

	static triggerCopyOutput() {
		gtag('event', 'copy_output', {
			event_category: 'Output Actions',
			event_label: 'Copy Output',
			value: 1,
		});
	}

	static triggerShareOutput() {
		gtag('event', 'share_output', {
			event_category: 'Output Actions',
			event_label: 'Share Output',
			value: 1,
		});
	}

	static triggerInstallPWA() {
		gtag('event', 'install_pwa', {
			event_category: 'PWA Actions',
			event_label: 'Install PWA',
			value: 1,
		});
	}

	static triggerAboutUs() {
		gtag('event', 'about_us', {
			event_category: 'About Us',
			event_label: 'About Us',
			value: 1,
		});
	}
}

const SERVICES = [
	{
		title: 'الرسم العربي القديم',
		description: 'تحويل النص العربي إلى الرسم العربي القديم أي قبل وضع النقاط على الحروف والهمزات.',
		icon: 'fa-solid fa-folder',
		thumbnailURL: 'assets/images/toOldArabic.svg',
		function: 'toOldArabic',
		inputPlaceholder: 'الخَيْلُ وَاللّيْلُ وَالبَيْداءُ تَعرِفُني',
		outputPlaceholder: 'الحىل واللىل والٮىدا ٮعرڡٮى',
	},
	{
		title: 'التشفير',
		description: 'استبدال النص العربي بأحرف مشابهة بصريًا لأغراض الترميز.',
		icon: 'fa-solid fa-key',
		thumbnailURL: 'assets/images/tashfeer.svg',
		function: 'tashfeer',
		inputPlaceholder: 'هذا النص مشفر',
		outputPlaceholder: 'هـۮו اڵـݔص مـݭفـݛ',
	},
	{
		title: 'تشفير الكلمات المحظورة (الشائعة)',
		description:
			'استبدال النصوص العربية المحظورة بأحرف مشابهة بصريًا لأغراض الترميز. (الكلمات المحظورة هي الكلمات التي تعتبر كلمات مسيئة في وسائل التواصل الاجتماعي).',
		icon: 'fa-solid fa-key',
		thumbnailURL: 'assets/images/tashfeerBannedWords.svg',
		function: 'tashfeerBannedWords',
		inputPlaceholder: 'جيش العدو يقتل الأطفال',
		outputPlaceholder: 'چـێـݭ !ڵعـݚۉ ی۪ـڨـټل الأطفال',
	},
	{
		title: 'إزالة التشكيل',
		description: 'إزالة التشكيل من النص العربي',
		icon: 'fa-solid fa-folder',
		thumbnailURL: 'assets/images/removeTashkeel.svg',
		function: 'removeTashkeel',
		inputPlaceholder: 'الخَيْلُ وَاللّيْلُ وَالبَيْداءُ تَعرِفُني',
		outputPlaceholder: 'الخيل والليل والبيداء تعرفني',
	},
	{
		title: 'الكلمة إلى حروفها',
		description: 'تحويل الكلمة العربية إلى حروفها المنطوقة.',
		icon: 'fa-solid fa-folder',
		thumbnailURL: 'assets/images/wordToLetters.svg',
		function: 'wordToLetters',
		inputPlaceholder: 'شجرة',
		outputPlaceholder: 'شين جيم راء تاء_مربوطة',
	},
	{
		title: 'إزالة اللواحق العربية (قيد التطوير)',
		description: 'إزالة اللواحق المحددة (البادئات واللاحقات) من كلمة عربية إذا بدأت أو انتهت بهذه اللواحق.',
		icon: 'fa-solid fa-folder',
		thumbnailURL: 'assets/images/removeArabicAffixes.svg',
		function: 'removeArabicAffixes',
		inputPlaceholder: 'المدرسة',
		outputPlaceholder: 'مدرس',
	},
	{
		title: 'إزالة التطويل',
		description: 'إزالة التطويل من النص العربي',
		icon: 'fa-solid fa-folder',
		thumbnailURL: 'assets/images/removeTatweel.svg',
		function: 'removeTatweel',
		inputPlaceholder: 'كن جميـــلا ترى الوجــود جميـــــلا',
		outputPlaceholder: 'كن جميلا ترى الوجود جميلا',
	},
];

function initSlider() {
	const sliderContainer = document.getElementById('sliderContainer');
	sliderContainer.innerHTML = '';
	let outputHTML = '';
	for (const service of SERVICES) {
		const id = 'service-' + service.function;
		const thumbnailURL = service.thumbnailURL
			? `<img src="${service.thumbnailURL}" alt="${service.title}" />`
			: `<i class="${service.icon}"></i>`;
		outputHTML += `
		<div id=${id} class="slide" onclick="selectService('${service.function}', '${id}')">
			${thumbnailURL}
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
		slide.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
	}, 100);

	// save last selected service
	localStorage.setItem('lastSelectedService', functionName);

	CustomEvents.selectServiceTriggered(selectedServiceFunction);
}

function convert() {
	const inputText = inputTextArea.value.trim();
	if (inputText === '') {
		outputTextArea.value = '';
		return;
	}
	try {
		outputTextArea.value = ArabicServices[selectedServiceFunction](inputText);
		CustomEvents.triggerService(selectedServiceFunction);
	} catch (error) {
		console.error(error);
		CustomEvents.convertServiceError(selectedServiceFunction, error.message);
	}
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
		// selectService(selectedServiceFunction, selectedSlideId);
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

	CustomEvents.triggerCopyOutput();
}

// --------------------- Share -----------------------------
function shareOutput() {
	const textToShare = outputTextArea.value.trim();
	if (textToShare == '') {
		return;
	}

	CustomEvents.triggerShareOutput();

	// Check if the Web Share API is available
	if (navigator.share) {
		navigator
			.share({
				text: textToShare,
			})
			.then(() =>
				Swal.fire({
					position: 'center',
					icon: 'success',
					title: 'تم المشاركة',
					showConfirmButton: false,
					timer: 1500,
				}),
			)
			.catch((error) => {
				console.log('Error sharing:', error);
			});
	} else {
		// Web Share API is not available, handle it as a fallback
		Swal.fire({
			position: 'center',
			icon: 'error',
			title: 'عذراً، لا يدعم متصفحك هذه الميزة',
			showConfirmButton: false,
			timer: 1500,
		});
	}
}

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
	// Prevent the mini-infobar from appearing on mobile
	e.preventDefault();
	// Stash the event so it can be triggered later.
	deferredPrompt = e;
	// Update UI to notify the user they can add to home screen
	showInstallPromotion();
});

const downloadButton = document.getElementById('downloadButton');
function showInstallPromotion() {
	downloadButton.style.display = 'block';
}

function downloadHandlerForPWA() {
	// Hide the app provided install promotion
	downloadButton.style.display = 'none';
	// Show the install prompt
	deferredPrompt.prompt();
	// Wait for the user to respond to the prompt
	deferredPrompt.userChoice.then((choiceResult) => {
		if (choiceResult.outcome === 'accepted') {
			console.log('User accepted the install prompt');
		} else {
			console.log('User dismissed the install prompt');
			showInstallPromotion();
		}
		deferredPrompt = null;
	});

	CustomEvents.triggerInstallPWA();
}

window.addEventListener('appinstalled', () => {
	// Hide the app-provided install promotion
	hideInstallPromotion();
	// Clear the deferredPrompt so it can be garbage collected
	deferredPrompt = null;
	// Optionally, send analytics event to indicate successful install
	console.log('PWA was installed');
});

function hideInstallPromotion() {
	const downloadButton = document.getElementById('downloadButton');
	downloadButton.style.display = 'none';
}

function promptInstallPWA() {
	Swal.fire({
		title: 'تثبيت التطبيق',
		text: 'هل تريد تثبيت التطبيق على جهازك؟',
		icon: 'question',
		iconColor: '#ff9800',
		showCancelButton: true,
		confirmButtonText: 'نعم',
		cancelButtonText: 'لا',
	}).then((result) => {
		if (result.isConfirmed) {
			downloadHandlerForPWA();
		} else if (result.dismiss === Swal.DismissReason.cancel) {
			console.log('User dismissed the prompt to install PWA');
		}
	});
}
// if (deferredPrompt !== null) {
// 	promptInstallPWA();
// }

// --------------------- About Us -----------------------------

function showAboutUs() {
	CustomEvents.triggerAboutUs();

	Swal.fire({
		title: 'من نحن',
		width: '90%',
		html: `
		<p dir="rtl">
		خدمات اللغة العربية هي موقع ومكتبات برمجية متميزة تهدف إلى تحسين وتسهيل التعامل مع اللغة العربية عبر الإنترنت وتمكين المبرمجين والمطورين من استخدام خدمات متقدمة في تطبيقاتهم. يقدم الموقع مجموعة واسعة من الأدوات والوظائف التي تشمل تشفير النص العربي، إزالة التشكيل والتطويل من النص العربي، تحويل النص العربي إلى النص العربي القديم بدون تشكيل، تحويل الأرقام العربية إلى الأرقام الهندية، وتحويل الكلمات إلى حروف.
		</p>
		<p dir="rtl">
		من خلال المكتبات البرمجية والAPI المتوفرة، يمكن للمبرمجين تكامل هذه الخدمات بسهولة في تطبيقاتهم بأي لغة برمجة يفضلونها، مثل Java وPython وJavaScript وغيرها. تتيح لهم هذه الخدمات إمكانية تحسين النص العربي وتنقيحه بسرعة ودقة، مما يساهم في تحسين جودة التطبيقات وتجربة المستخدم النهائي.
		</p>
		<p dir="rtl">
		موقع ومكتبات خدمات اللغة العربية يهدف إلى تسهيل استخدام اللغة العربية في البرمجة والتطبيقات، وتحقيق تواصل أفضل وفعالية أكبر في التعامل مع النصوص العربية. سواء كنت مبرمجًا يبحث عن طرق مبتكرة لتحسين التعامل مع اللغة العربية أو شخصًا يرغب في تحسين جودة النصوص العربية عبر الإنترنت، ستجد في هذه الخدمات المميزة كل ما تحتاجه لتحقيق أهدافك بسهولة وفعالية.
		</p>
		<p dir="rtl">
		اصدار الموقع: 2.0.3
		</p>
		`,
		icon: 'info',
		iconColor: '#ff9800',
		showCancelButton: false,
		confirmButtonText: 'حسناً',
	});
}

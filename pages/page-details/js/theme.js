( function( $ ) {

	// Document Ready
	$( document ).ready(function() {
		const logo = document.getElementById('svg-logo')

		// Enroll Now Button Modal
		const enrollNowButtons = document.querySelectorAll('.cta-button.modal');
		const hasModalButton = ( enrollNowButtons.length > 0 );
		const [...enrollNowButton] = enrollNowButtons;

		if (hasModalButton) {
			document.querySelectorAll('body')[0].classList.add('modal')
			enrollNowButton.map(btn => {
				btn.setAttribute('data-featherlight', '#enroll-now')
			});

			$('.cta-button.modal').featherlight();
		}




		// Accordion Tabs
		const accordionList = document.querySelectorAll('.accordion');
		const hasAccordionList = ( accordionList.length > 0 );
		const accordionTabs = () => {
			const accordionTabTitles = document.querySelectorAll('.tab-title');
			const [...accTabs] = accordionList;
			accordionTabTitles.forEach(title => {

				title.addEventListener('click', (e) => {
					e.preventDefault();

					if( !e.target.offsetParent.className.includes('active') ) {
						accTabs.map(tab => {
							tab.className.includes('active') ? tab.classList.remove('active') : false;
						});
					}

					e.target.offsetParent.classList.toggle('active')
				});
			});
		}
		hasAccordionList ? accordionTabs() : false;


		// Dot Training Page | Tabs
		const isdotTrainingPage = document.querySelectorAll('body.page-id-10').length > 0;
		const dotTrainingPageTabs = () => {
			const dotTraining = document.getElementById('training-program');

			const tabs = document.querySelectorAll('.tabs > li');
			const tabContent = document.querySelectorAll('.tab-content');
			const [...tabContentItem] = tabContent;

			const dotTrainingCards = dotTraining.querySelectorAll('.cards > li');
			dotTrainingCards.forEach(card => {
				card.classList.add('card');
			});

			tabs.forEach(tab => {
				tab.addEventListener('click', (e) => {
					e.preventDefault();

					// Remove All 'Active' class from Tab & Content
					tab.className.includes('active') ?  tab.removeAttribute('class') : false;
					tabContentItem.map(tc => {
						tc.className.includes('active') ? tc.classList.remove('active') : false;
					})

					// Toggle Class for Tab & Content
					if(tabs[0] === e.target && e.target.className != 'active' ) {
						tabs[1].removeAttribute('class');
						tabContent[0].classList.toggle('active');
						e.target.classList.toggle('active');

					} else {
						tabs[0].removeAttribute('class');
						tabContent[1].classList.toggle('active');
						e.target.classList.toggle('active');
					}
				});
			});
		}
		isdotTrainingPage ? dotTrainingPageTabs() : false;



		// Pricing Page
		const isPricingPage = document.querySelectorAll('body.page-id-19').length > 0;
		const pricingColumnTabs = () => {
			const pricingColumnsContainer = document.getElementById('price-column-container');
 			const pricingColumns = document.getElementById('pricing-columns');
			const pricingTabs = pricingColumns.querySelectorAll('.tabs > li');
			const basicPackage = pricingColumns.getElementsByClassName('dot-enrollment');
			const featuredPackage = pricingColumns.getElementsByClassName('enrollment-testing');
			const colHiddenWidth = basicPackage[0].offsetWidth / 2
			const [...li] = pricingTabs
			pricingTabs[0].classList.add('active')

			const displayNone = () => {
				basicPackage[0].style.display = 'none';
			}

			const desktop = window.matchMedia('(min-width: 1200px)');
			const tablet = window.matchMedia('(min-width: 801px) and (max-width: 1199px)');

			pricingTabs.forEach(tab => {
				tab.addEventListener('click', (e) => {
					e.preventDefault();

					// Use map() to remove each item's class
					li.map(tabLi => { tabLi.removeAttribute('class') } );

					// Add 'active' class to click target
					e.target.classList.add('active');

					if (pricingTabs[1] === e.target) {
						basicPackage[0].classList.add('hide');
						pricingColumnsContainer.classList.add('faa-active');
						desktop.matches ? pricingColumnsContainer.style.transform = `translateX(-${colHiddenWidth}px)` : false;
						tablet.matches ? featuredPackage[0].style.transform = `translateX(-50%)` : false;
					} else {
						basicPackage[0].classList.remove('hide');
						pricingColumnsContainer.classList.remove('faa-active');
						desktop.matches ? pricingColumnsContainer.removeAttribute('style') : false;
						tablet.matches ? featuredPackage[0].removeAttribute('style') : false;
					}
				});
			});
		}
		isPricingPage ? pricingColumnTabs() : false;


		

		// Customer Reivews Slider | Owl-Carousel
		const testimonialSlider = $('#review-slider .owl-carousel');
		testimonialSlider.owlCarousel({
		    autoplay: true,
		    autoplayTimeout: 5000,
		    autoplayHoverPause: true,
		    loop:true,
		    margin:10,
		    nav:true,
		    navText: ['<i class="fas fa-long-arrow-alt-left"></i>', '<i class="fas fa-long-arrow-alt-right"></i>'],
		    dots: false,
	        slideTransition: 'ease-in-out',
	        responsive:{
		        0:{
		            items:1
		        },
		        1200:{
		            items:2
		        },
		        1700:{
		            items:3
		        }
		    }
		});

		const dotLogos = $('#dot-organizations-compliance .owl-carousel');
		$('#dot-organizations-compliance p').owlCarousel({
		    autoplay: true,
		    autoplayTimeout: 1000,
		    autoplayHoverPause: true,
		    center: true,
		    loop:true,
		    margin:10,
		    nav:false,
		    dots: false,
	        slideTransition: 'ease-in-out',
	        responsive:{
		        0:{
		            items:4
		        },
		        800:{
		            items:5
		        },
		        1400:{
		            items:7
		        }
		    }
		})

	}); // END Document Ready
} )( jQuery );



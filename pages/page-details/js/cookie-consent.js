// Display Cookie Consent
const displayCookieConsent = () => {
	let cookieConsent

	cookieConsent = JSON.parse(window.localStorage.getItem('cookie-consent-user-aggree'))
	if (cookieConsent == null)
		window.localStorage.setItem('cookie-consent-user-aggree', 'false')

	// Check if user has consent, exit if true.
	cookieConsent = JSON.parse(window.localStorage.getItem('cookie-consent-user-aggree'))
	if (cookieConsent) return

	// Get site name from meta tag - "og:site_name"
	const [...metaSiteNames] = document.getElementsByTagName("meta")
	const [meta] = metaSiteNames.filter(meta => meta.attributes[0].value === 'og:site_name')

	// Create Nodes
	const ccContainer = document.createElement("div")
	const ccParagraph = document.createElement("p");
	const ccPolicyLink = document.createElement("a");
	const ccButton = document.createElement("button");

	// Add attributes
	ccContainer.classList.add('cookie-consent-container')
	ccContainer.dataset.consentAggree = cookieConsent
	ccParagraph.classList.add('cookie-consent-content')
	ccPolicyLink.classList.add('cookie-consent-policy')
	ccButton.classList.add('cookie-consent-button')

	// Add contents
	ccParagraph.textContent = `Notice. ${(typeof meta.content == null) ? 'This website' : meta.content} uses cookies to provide necessary website functionality, improve your experience and analyze our traffic. By using our website, you agree to our `
	ccPolicyLink.href = '/privacy-policy'
	ccButton.textContent = 'OK'

	// Dismiss and remove consent container when user aggrees.
	// Update local storage value to 'true'
	ccButton.addEventListener('click', (e) => {
		e.preventDefault()
		ccContainer.remove()
		window.localStorage.setItem('cookie-consent-user-aggree', 'true')
	})

	// Append nodes
	ccPolicyLink.append('Privacy Policy')
	ccContainer.append(ccParagraph, ccButton);
	ccParagraph.append(ccPolicyLink)

	// Append main container to <body>
	document.body.append(ccContainer);
}
document.body.onload = displayCookieConsent();
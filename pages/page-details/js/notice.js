document.body.onload = () => {
    const isActive = false
    if (!isActive) return

    const pageContainer = document.querySelector('#page')

    // Create Node Elements
    const noticeContainer = document.createElement("div")
    const noticeText = document.createElement("p")

    noticeText.textContent = 'We are currently experiencing technical issues with our system. Please call us if you would like to register.'

    noticeContainer.append(noticeText)

    noticeContainer.style.display = 'flex'
    noticeContainer.style.alignItems = 'center'
    noticeContainer.style.justifyContent = 'center'
    noticeContainer.style.textAlign = 'center'
    noticeContainer.style.backgroundColor = '#b14141'

    noticeText.style.margin = '.5rem .5rem'
    noticeText.style.fontSize = '1rem'
    noticeText.style.fontFamily = 'var(--e-global-typography-primary-font-family, inherit)'
    noticeText.style.fontStyle = 'italic'
    noticeText.style.color = 'rgba(255 255 255 / .9)'

    pageContainer.before(noticeContainer)
}

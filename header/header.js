// Function to load the header
function loadHeader() {
    fetch('/header/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            // Set the logo link based on the current language
            setLogoLink();
            // Attach event listeners after the header is loaded
            document.getElementById('en').onclick = () => switchLanguage('en');
            document.getElementById('de').onclick = () => switchLanguage('de');
        })
        .catch(error => console.error('Error loading header:', error));
}

// Function to set the logo link based on the current language
function setLogoLink() {
    const currentUrl = window.location.href;
    const urlParts = currentUrl.split('/');
    const currentLang = urlParts[3]; // Assuming the language is the third part of the URL

    let logoLink = 'privacy.html'; // Default link

    if (currentLang === 'en') {
        logoLink = '/en/';
    } else if (currentLang === 'de') {
        logoLink = '/de/';
    }

    document.getElementById('logo-link').href = logoLink;
}

// Function to switch language
function switchLanguage(lang) {
    const currentUrl = window.location.href;
    const urlParts = currentUrl.split('/');
    const currentLang = urlParts[3]; // Assuming the language is the third part of the URL

    // Replace the current language with the new language
    if (currentLang === 'en' || currentLang === 'de') {
        urlParts[3] = lang;
    } else {
        // If no language is present, add the new language
        urlParts.splice(3, 0, lang);
    }

    // Redirect to the new URL
    window.location.href = urlParts.join('/');
}

// Call the function to load the header
loadHeader();
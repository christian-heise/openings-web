// Function to load the footer
function loadFooter() {
    fetch('/footer/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
            // Set the current year
            document.getElementById('current-year').textContent = new Date().getFullYear();
            // Set the Impressum link based on the current language
            setImpressumLink();
        })
        .catch(error => console.error('Error loading footer:', error));
}

// Function to set the Impressum link based on the current language
function setImpressumLink() {
    const currentUrl = window.location.href;
    const urlParts = currentUrl.split('/');
    const currentLang = urlParts[3]; // Assuming the language is the third part of the URL

    let impressumLink = 'impressum.html'; // Default link

    if (currentLang === 'en') {
        impressumLink = '/en/impressum.html';
    } else if (currentLang === 'de') {
        impressumLink = '/de/impressum.html';
    }

    document.getElementById('impressum-link').href = impressumLink;
}

// Call the function to load the footer
loadFooter();
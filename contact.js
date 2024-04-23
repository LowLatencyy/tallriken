document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contact-form form');
    form.addEventListener('submit', function (event) {
        let hasError = false;

        // Validering av namn
        const name = document.getElementById('name');
        if (name.value.trim() === '') {
            alert('Du måste ange ditt namn.');
            name.focus();
            hasError = true;
        }

        // Validering av e-post
        const email = document.getElementById('email');
        if (email.value.trim() === '') {
            alert('Du måste ange en e-postadress.');
            email.focus();
            hasError = true;
        } else if (!email.value.includes('@')) {
            alert('Du måste ange en giltig e-postadress.');
            email.focus();
            hasError = true;
        }

        // Validering av meddelande
        const message = document.getElementById('message');
        if (message.value.trim() === '') {
            alert('Du måste skriva ett meddelande.');
            message.focus();
            hasError = true;
        }

        if (hasError) {
            event.preventDefault(); // Förhindra formuläret från att skickas
            return false;
        }

        // Här kan du lägga till kod för att visa en laddningsindikator eller liknande
        // Om allt är korrekt, låt formuläret skickas
    });
});

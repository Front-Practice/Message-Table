document.addEventListener('DOMContentLoaded', () => {
    const formSection = document.getElementById('form-section');
    const tableSection = document.getElementById('table-section');
    const contactForm = document.getElementById('contact-form');
    const tableBody = document.querySelector('#submissions-table tbody');
    const seeTableBtn = document.getElementById('see-table-btn');
    const goBackBtn = document.getElementById('go-back-btn');

    function showView(viewToShow) {
        formSection.classList.remove('active');
        tableSection.classList.remove('active');
        viewToShow.classList.add('active');
    }

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        if (!name || !email) {
            alert('Please fill out your name and email.');
            return;
        }

        const newRow = tableBody.insertRow(0); 
        newRow.innerHTML = `
            <td>${name}</td>
            <td>${email}</td>
            <td>${phone || 'N/A'}</td>
            <td>${message || 'N/A'}</td>
        `;

        contactForm.reset();

        showView(tableSection);
    });

    seeTableBtn.addEventListener('click', function() {
        showView(tableSection);
    });

    goBackBtn.addEventListener('click', function() {
        showView(formSection);
    });
});
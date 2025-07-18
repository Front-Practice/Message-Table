document.addEventListener('DOMContentLoaded', () => {
    const $ = id => document.getElementById(id);

    const formSection = $('form-section');
    const tableSection = $('table-section');
    const contactForm = $('contact-form');
    const tableBody = document.querySelector('#submissions-table tbody');
    const seeTableBtn = $('see-table-btn');
    const goBackBtn = $('go-back-btn');

    const showView = view => {
        formSection.classList.remove('active');
        tableSection.classList.remove('active');
        view.classList.add('active');
    };

    contactForm.addEventListener('submit', e => {
        e.preventDefault();

        const name = $('name').value;
        const email = $('email').value;
        const phone = $('phone').value || 'N/A';
        const message = $('message').value || 'N/A';

        if (!name || !email) {
            alert('Please fill out your name and email.');
            return;
        }

        tableBody.insertRow(0).innerHTML = `
            <td>${name}</td>
            <td>${email}</td>
            <td>${phone}</td>
            <td>${message}</td>
        `;

        contactForm.reset();
        showView(tableSection);
    });

    seeTableBtn.addEventListener('click', () => showView(tableSection));
    goBackBtn.addEventListener('click', () => showView(formSection));
});

const form = document.getElementById(
    'registration-form');

form.addEventListener('submit',(Event) => {
    alert('Your registration form has been submitted!');
    Event.preventDefault();
})

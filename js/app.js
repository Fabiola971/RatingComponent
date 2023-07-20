// preview
const ratings = document.querySelectorAll('.value span');
const btnSubmit = document.querySelector('.submit button');
const container = document.querySelector('.container');

ratings.forEach(element => {
    console.log('element: ',element);
    element.addEventListener('click', function(){
        console.log(element.innerText);
        rateGiven.innerHTML = element.innerText;
    });
});

btnSubmit.addEventListener('click', function(){
    container.style.visibility = 'hidden';
    containerThanks.style.visibility = 'visible';
    thanksTransition();
});

function thanksTransition(){
    containerThanks.classList.add('thanksTransition');
};

// thank you
const rateGiven = document.querySelector('.information span');
const containerThanks = document.querySelector('.containerThanks');


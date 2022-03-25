const darkModeBtnOne = document.querySelector('.dark-btn-1')
    darkModeBtnTwo = document.querySelector('.dark-btn-2')
    sunBtn = document.querySelector('.sun-btn')
    moonBtn = document.querySelector('.moon-btn')
    emailCpyBtn = document.getElementById('a-1')
    phoneCpyBtn = document.getElementById('a-2')
    addressCpyBtn = document.getElementById('a-3')
    iconsEmail = document.getElementById('Layer_1')
    iconsPhone = document.getElementById('Layer_2')
    iconsAddress = document.getElementById('Layer_3')
    atag = document.getElementById('coffee-link');

let darkMod = false;

darkModeBtnOne.addEventListener('click', () => {
    sunBtn.classList.toggle('tog-btn');
    moonBtn.classList.toggle('tog-btn');
    document.body.style.color = "#d7d9d4";
    atag.style.color = "#d7d9d4";
    document.body.style.backgroundColor = "#121212";
    iconsEmail.classList.toggle('s1-light');
    iconsPhone.classList.toggle('s1-light');
    iconsAddress.classList.toggle('s1-light');
    darkMod = true;
    console.log(darkMod);
});

darkModeBtnTwo.addEventListener('click', () => {
    sunBtn.classList.toggle('tog-btn');
    moonBtn.classList.toggle('tog-btn');
    document.body.style.color = "#464a31";
    atag.style.color = "#464a31";
    document.body.style.backgroundColor = "#d7d9d4";
    iconsEmail.classList.toggle('s1-light');
    iconsPhone.classList.toggle('s1-light');
    iconsAddress.classList.toggle('s1-light');
    darkMod = false;
    console.log(darkMod);
});

emailCpyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText("omarsha157@gmail.com");
    

    if(darkMod === true) {
        emailCpyBtn.classList.add('tl-tp-dark');
    } else {
        emailCpyBtn.classList.add('tl-tp');
    }

    const myTimeout = setTimeout(removeAfter, 1000);
    function removeAfter() {
        emailCpyBtn.classList.remove('tl-tp', 'tl-tp-dark');
    }
})

phoneCpyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText("+91 7994931348");

    if (darkMod === true) {
        phoneCpyBtn.classList.add('tl-tp-dark');
    } else {
        phoneCpyBtn.classList.add('tl-tp');
    }

    const myTimeout = setTimeout(removeAfter, 1000);
    function removeAfter() {
        phoneCpyBtn.classList.remove('tl-tp', 'tl-tp-dark');
    }
})

addressCpyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText("Sha land, AKG nagar, Edava p.o , Trivandrum pin: 695311");

    if (darkMod === true) {
        addressCpyBtn.classList.add('tl-tp-dark');
    } else {
        addressCpyBtn.classList.add('tl-tp');
    }

    const myTimeout = setTimeout(removeAfter, 1000);
    function removeAfter() {
        addressCpyBtn.classList.remove('tl-tp', 'tl-tp-dark');
    }
})
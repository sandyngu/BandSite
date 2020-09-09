const titles = ['DATES', 'VENUE', 'LOCATION'];

let API_KEY = '9a757c70-5aa3-46d0-b4fd-b232e544ed82';

window.onload = parentFunction();

function parentFunction() {
    let parentElement = document.createElement('div');
    parentElement.classList.add('main-section__shows-container');
    let parentParent = document.querySelector('.main-section');
    parentParent.appendChild(parentElement);
    
    headings();
};

function headings() {
    let heading = document.createElement('div');
    heading.classList.add('main-section__shows-headings');
    let headingsTitleDate = document.createElement('p');
    headingsTitleDate.classList.add('main-section__shows-headings-title', 'main-section__shows-headings-title-date');
    headingsTitleDate.innerText = titles[0];
    let headingsTitleVenue = document.createElement('p');
    headingsTitleVenue.classList.add('main-section__shows-headings-title', 'main-section__shows-headings-title-venue');
    headingsTitleVenue.innerText = titles[1];
    let headingsTitleLocation = document.createElement('p');
    headingsTitleLocation.classList.add('main-section__shows-headings-title', 'main-section__shows-headings-title-location');
    headingsTitleLocation.innerText = titles[2];

    let showsContainer = document.querySelector('.main-section__shows-container');
    
    showsContainer.appendChild(heading);
    heading.appendChild(headingsTitleDate);
    heading.appendChild(headingsTitleVenue);
    heading.appendChild(headingsTitleLocation);   
};

let showsURL = 'https://project-1-api.herokuapp.com/showdates?api_key=9a757c70-5aa3-46d0-b4fd-b232e544ed82';

axios.get(showsURL)
    .then(res => {

    res.data.forEach(res => {

        let showsList = document.createElement('div');
        showsList.classList.add('main-section__shows');
        let showsTitle1 = document.createElement('p');
        showsTitle1.classList.add('main-section__shows-content', 'main-section__shows-title');
        let showsDate = document.createElement('p');
        showsDate.classList.add('main-section__shows-content', 'main-section__shows-date');
        let showsTitle2 = document.createElement('p');
        showsTitle2.classList.add('main-section__shows-content', 'main-section__shows-title');
        let showsVenue = document.createElement('p');
        showsVenue.classList.add('main-section__shows-content', 'main-section__shows-venue');
        let showsTitle3 = document.createElement('p');
        showsTitle3.classList.add('main-section__shows-content', 'main-section__shows-title');
        let showsLocation = document.createElement('p');
        showsLocation.classList.add('main-section__shows-content', 'main-section__shows-location');
        let button = document.createElement('button');
        button.classList.add('button', 'main-section__shows-button');
        button.innerText = "BUY TICKETS";
        let divider = document.createElement('div');
        divider.classList.add('divider', 'main-section__shows-divider');

        let showsContainer = document.querySelector('.main-section__shows-container');

        showsContainer.appendChild(showsList);
        showsList.appendChild(showsTitle1);
        showsList.appendChild(showsDate);
        showsList.appendChild(showsTitle2);
        showsList.appendChild(showsVenue);
        showsList.appendChild(showsTitle3);
        showsList.appendChild(showsLocation);
        showsList.appendChild(button);
        showsList.appendChild(divider);


        showsTitle1.innerText = titles[0];
        showsDate.innerText = res.date;
        showsTitle2.innerText = titles[1];
        showsVenue.innerText = res.place;
        showsTitle3.innerText = titles[2];
        showsLocation.innerText = res.location;

})
    .catch(err => console.log(err));   
})

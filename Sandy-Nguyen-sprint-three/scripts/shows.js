const titles = ['DATES', 'VENUE', 'LOCATION'];

let API_KEY = '9a757c70-5aa3-46d0-b4fd-b232e544ed82';
let showsURL = 'https://project-1-api.herokuapp.com/showdates?api_key=9a757c70-5aa3-46d0-b4fd-b232e544ed82';

/*When the window loads, this function creates the parent div*/

window.onload = parentFunction();

function parentFunction() {
    let parentElement = document.createElement('div');
    parentElement.classList.add('main-section__shows-container');
    let parentParent = document.querySelector('.main-section');
    parentParent.appendChild(parentElement);
    
    headings();
};

/*This function creates the headings on the shows page*/

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
    
    loadShowDates();
};

/*This function takes the show dates information from the API and creates elements for all the shows, displaying them on the page*/

function loadShowDates() {
    axios.get(showsURL)
        .then(res => {

        res.data.forEach(res => {

            let showsList = document.createElement('div');
            showsList.classList.add('main-section__shows');
            let datesTitle = document.createElement('p');
            datesTitle.classList.add('main-section__shows-content', 'main-section__shows-title');
            let showsDate = document.createElement('p');
            showsDate.classList.add('main-section__shows-content', 'main-section__shows-date');
            let venuesTitle = document.createElement('p');
            venuesTitle.classList.add('main-section__shows-content', 'main-section__shows-title');
            let showsVenue = document.createElement('p');
            showsVenue.classList.add('main-section__shows-content', 'main-section__shows-venue');
            let locationTitle = document.createElement('p');
            locationTitle.classList.add('main-section__shows-content', 'main-section__shows-title');
            let showsLocation = document.createElement('p');
            showsLocation.classList.add('main-section__shows-content', 'main-section__shows-location');
            let button = document.createElement('button');
            button.classList.add('button', 'main-section__shows-button');
            button.innerText = "BUY TICKETS";
            let divider = document.createElement('div');
            divider.classList.add('divider', 'main-section__shows-divider');

            let showsContainer = document.querySelector('.main-section__shows-container');

            showsContainer.appendChild(showsList);
            showsList.appendChild(datesTitle);
            showsList.appendChild(showsDate);
            showsList.appendChild(venuesTitle);
            showsList.appendChild(showsVenue);
            showsList.appendChild(locationTitle);
            showsList.appendChild(showsLocation);
            showsList.appendChild(button);
            showsList.appendChild(divider);

            datesTitle.innerText = titles[0];
            showsDate.innerText = res.date;
            venuesTitle.innerText = titles[1];
            showsVenue.innerText = res.place;
            locationTitle.innerText = titles[2];
            showsLocation.innerText = res.location;
        });
        })
        .catch(err => console.log(err));  
};
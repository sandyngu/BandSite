const shows = [{
    date: 'Mon Dec 17 2018',
    venue: 'Ronald Lane',
    location: 'San Francisco, CA'
}, {
    date: 'Tue Jul 18 2019',
    venue: 'Pier 3 East',
    location: 'San Francisco, CA'
}, {
    date: 'Fri Jul 22 2019',
    venue: 'View Lounge',
    location: 'San Francisco, CA'
}, {
    date: 'Sat Aug 12 2019',
    venue: 'Hyatt Agency',
    location: 'San Francisco, CA'
}, {
    date: 'Fri Sep 05 2019',
    venue: 'Moscow Center',
    location: 'San Francisco, CA'
}, {
    date: 'Wed Aug 11 2019',
    venue: 'Pres Club',
    location: 'San Francisco, CA'
}]

const titles = ['DATES', 'VENUE', 'LOCATION'];

function parentFunction() {
    let parentElement = document.createElement('div');
    parentElement.classList.add('main-section__shows-container');
    let parentParent = document.querySelector('.main-section');
    parentParent.appendChild(parentElement);
    
    headings();
    loadData();
};

window.onload = parentFunction();

function headings() {
    let heading = document.createElement('div');
    heading.classList.add('main-section__shows-headings');
    let headingsTitleDate = document.createElement('p');
    headingsTitleDate.classList.add('main-section__shows-headings-title', 'main-section__shows-headings-title-date');
    headingsTitleDate.innerHTML = titles[0];
    let headingsTitleVenue = document.createElement('p');
    headingsTitleVenue.classList.add('main-section__shows-headings-title', 'main-section__shows-headings-title-venue');
    headingsTitleVenue.innerHTML = titles[1];
    let headingsTitleLocation = document.createElement('p');
    headingsTitleLocation.classList.add('main-section__shows-headings-title', 'main-section__shows-headings-title-location');
    headingsTitleLocation.innerHTML = titles[2];

    let showsContainer = document.querySelector('.main-section__shows-container');
    
    showsContainer.appendChild(heading);
    heading.appendChild(headingsTitleDate);
    heading.appendChild(headingsTitleVenue);
    heading.appendChild(headingsTitleLocation);   
}

function loadData () {
    shows.forEach((data) => showCreator(data));
}

function showCreator(show) {
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
    showsDate.innerText = show.date;
    showsTitle2.innerText = titles[1];
    showsVenue.innerText = show.venue;
    showsTitle3.innerText = titles[2];
    showsLocation.innerText = show.location;
}
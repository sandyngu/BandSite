const showsContainer = document.querySelector('.main-section__shows-container');
const dates = ["Mon Dec 17 2018", "Tue Jul 18 2019", "Fri Jul 22 2019", "Sat Aug 12 2019", "Fri Sep 05 2019", "Wed Aug 11 2019"];
const titles = ["DATE", "VENUE", "LOCATION"];
const venues = ["Ronald Lane", "Pier 3 East", "View Lounge", "Hyatt Agency", "Moscow Center"];
const locations = ["San Francisco, CA"];

function function1() {
    let heading = document.createElement('div');
    heading.classList.add('main-section__shows-headings');
    let headingsTitleDate = document.createElement('p');
    headingsTitleDate.classList.add('main-section__shows-headings-title',  'main-section__shows-headings-title-date');
    headingsTitleDate.innerHTML = titles[0]
    let headingsTitleVenue = document.createElement('p');
    headingsTitleVenue.classList.add('main-section__shows-headings-title',  'main-section__shows-headings-title-venue');
    headingsTitleVenue.innerHTML = titles[1];
    let headingsTitleLocation = document.createElement('p');
    headingsTitleLocation.classList.add('main-section__shows-headings-title',  'main-section__shows-headings-title-location');
    headingsTitleLocation.innerHTML = titles[2];

    showsContainer.appendChild(heading);
    heading.appendChild(headingsTitleDate);
    heading.appendChild(headingsTitleVenue);
    heading.appendChild(headingsTitleLocation);
}

function function2() {
    let shows = document.createElement('div');
    shows.classList.add('main-section__shows');
    let showsTitle1 = document.createElement('p');
    showsTitle1.classList.add('main-section__shows-content', 'main-section__shows-title');
    showsTitle1.innerHTML = titles[0];
    let showsDate = document.createElement('p');
    showsDate.classList.add('main-section__shows-content', 'main-section__shows-date');
    showsDate.innerHTML = dates[0];
    let showsTitle2 = document.createElement('p');
    showsTitle2.classList.add('main-section__shows-content', 'main-section__shows-title');
    showsTitle2.innerHTML = titles[0];
    let showsVenue = document.createElement('p');
    showsVenue.classList.add('main-section__shows-content', 'main-section__shows-venue');
    showsVenue.innerHTML = venues[0];
    let showsTitle3 = document.createElement('p');
    showsTitle3.classList.add('main-section__shows-content', 'main-section__shows-title');
    showsTitle3.innerHTML = titles[0];
    let showsLocation = document.createElement('p');
    showsLocation.classList.add('main-section__shows-content', 'main-section__shows-location');
    showsLocation.innerHTML = locations[0];
    let button = document.createElement('button');
    button.classList.add('button', 'main-section__shows-button');
    button.innerHTML = "BUY TICKETS";
    let divider = document.createElement('div');
    divider.classList.add('divider', 'main-section__shows-divider');

    showsContainer.appendChild(shows);
    shows.appendChild(showsTitle1);
    shows.appendChild(showsDate);
    shows.appendChild(showsTitle2);
    shows.appendChild(showsVenue);
    shows.appendChild(showsTitle3);
    shows.appendChild(showsLocation);
    shows.appendChild(button);
    shows.appendChild(divider);
}

setTimeout(function1, 0);

setTimeout(function2, 0)

function function3() {
    for (let i = 0; i < 5; i++) {
        function2(i);
    }
}

setTimeout(function3, 0);
let API_KEY = '9a757c70-5aa3-46d0-b4fd-b232e544ed82';
let commentsURL = ('https://project-1-api.herokuapp.com/comments?api_key=9a757c70-5aa3-46d0-b4fd-b232e544ed82');

window.onload = parentFunction(); 

function parentFunction() {
    let parentElement = document.createElement('div');
    parentElement.classList.add('comments-section__guestbook');
    let divider = document.createElement('div');
    divider.classList.add('divider', 'comments-section__guestbook-divider');
    let parentParent = document.querySelector('.comments-section');
    parentParent.appendChild(parentElement);
    parentElement.appendChild(divider); 
    
    loadComments();
};

function loadComments() {
    axios.get(commentsURL)
        .then(res => {
        
        res.data.sort(function sortData(a, b) {
        return b.timestamp - a.timestamp
        });
        
        res.data.forEach((res) => {
            
        let divider = document.createElement('div');
        divider.classList.add('divider', 'comments-section__guestbook-divider');
        let guestbookContainer = document.createElement('div');
        guestbookContainer.classList.add('comments-section__guestbook-container');
        let guestbookPhoto = document.createElement('div');
        guestbookPhoto.classList.add('comments-section__guestbook-photo');
        let guestbookEntry = document.createElement('div');
        guestbookEntry.classList.add('comments-section__guestbook-entry');
        let guestbookName = document.createElement('h4');
        guestbookName.classList.add('comments-section__guestbook-name');
        let guestbookDate = document.createElement('div');
        guestbookDate.classList.add('comments-section__guestbook-date');
        let guestbookText = document.createElement('div');
        guestbookText.classList.add('comments-section__guestbook-text');

        let guestbook = document.querySelector('.comments-section__guestbook');
        
        guestbook.appendChild(guestbookContainer);
        guestbookContainer.appendChild(guestbookPhoto);
        guestbookContainer.appendChild(guestbookEntry);
        guestbookEntry.appendChild(guestbookName);
        guestbookEntry.appendChild(guestbookDate);
        guestbookEntry.appendChild(guestbookText);
        guestbook.appendChild(divider);
        
        let time = new Date(res.timestamp); 
        guestbookDate.innerText = time.toLocaleDateString(); 
        
        guestbookName.innerText = res.name;
        guestbookText.innerText = res.comment;
        })  
        })  
        .catch(error => {
            console.log(error);
    });
};

function deleteAll() {
     document.querySelector('.comments-section__guestbook').remove();
}

const commentsForm = document.querySelector('.comments-section__form');

commentsForm.addEventListener('submit', function commentsFormHandler(event) {
    event.preventDefault();

    let name = commentsForm.name.value;
    let comment = commentsForm.comment.value; 

    if (name == 0 && comment == 0) {
        document.querySelector('.comments-section__form-input-name').style.backgroundColor = '#ECE7E7';
        document.querySelector('.comments-section__form-input-comment').style.backgroundColor = '#ECE7E7';
        console.error('Give us a little love -- complete the fields before submitting!');
        alert('Give us a little love -- complete the fields before submitting!');

        return 
    }
        else if (name == 0) {
            document.querySelector('.comments-section__form-input-name').style.backgroundColor = '#ECE7E7';
            console.error('What do you have to hide? Tell us your name!');
            alert('What do you have to hide? Tell us your name!');
        }
        else if (comment == 0) {
            document.querySelector('.comments-section__form-input-comment').style.backgroundColor = '#ECE7E7';
            console.error("Don't you have anything nice to say? Include a comment!");
            alert("Don't you have anything nice to say? Include a comment!");
        }
        else {
            axios.post(commentsURL, {
            name: commentsForm.name.value,
            comment: commentsForm.comment.value,
            })
                .then(res => {
                    deleteAll();
                    parentFunction();
                    console.log(res);
                })
                .catch(error => {
                    console.log("Error", error.message);
                })        
                commentsForm.reset();
        }
})



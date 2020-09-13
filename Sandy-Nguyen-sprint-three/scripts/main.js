let API_KEY = '9a757c70-5aa3-46d0-b4fd-b232e544ed82';
let commentsURL = ('https://project-1-api.herokuapp.com/comments?api_key=9a757c70-5aa3-46d0-b4fd-b232e544ed82');

/*When the window loads, this function creates the parent div*/

window.onload = parentFunction(); 

function parentFunction() {
    let parentElement = document.createElement('div');
    parentElement.classList.add('comments-section__guestbook');
    let divider = document.createElement('div');
    divider.classList.add('divider', 'comments-section__guestbook-divider');
    let parentParent = document.querySelector('.comments-section');
    parentParent.appendChild(parentElement);
    parentElement.appendChild(divider); 
    
    displayComments();
};

/*When the parent div is created, the comments are pulled from the API and the elements are made to display the comments. The comments are sorted by timestamp with most recent at the top*/

function displayComments() {
    axios.get(commentsURL)
        .then(res => {
        
        res.data.sort(function sortData(a, b) {
            return b.timestamp - a.timestamp
        });
        
        res.data.forEach(res => {
            
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
        });  
        })  
        .catch(err => console.log(err));
};

/*This function deletes the parent div, which deletes the loaded comments as they have nothing to append to*/

function deleteAll() {
     document.querySelector('.comments-section__guestbook').remove();
}

/*When the form is completed and submitted, the new comment is posted to the existing array in the API. When certain areas of the comment form are missing, the comment will not be added and an error message will occur. The 3 default comments will be deleted and reloaded on the window with the new comment on top*/

const commentsForm = document.querySelector('.comments-section__form');

commentsForm.addEventListener('submit', function commentsFormHandler(event) {
    event.preventDefault();

    let name = commentsForm.name.value;
    let comment = commentsForm.comment.value; 

    if (name == 0 && comment == 0) {
        document.querySelector('.comments-section__form-input-name').style.backgroundColor = '#FFF0F0';
        document.querySelector('.comments-section__form-input-name').style.borderColor = '#FF0000';
        document.querySelector('.comments-section__form-input-comment').style.backgroundColor = '#FFF0F0';
        document.querySelector('.comments-section__form-input-comment').style.borderColor = '#FF0000';
        console.error('Give us a little love -- complete the fields before submitting!');

        return 
    }
        else if (name == 0) {
            document.querySelector('.comments-section__form-input-name').style.backgroundColor = '#FFF0F0';
            document.querySelector('.comments-section__form-input-name').style.borderColor = '#FF0000';
            document.querySelector('.comments-section__form-input-comment').style.backgroundColor = '#FAFAFA';
            document.querySelector('.comments-section__form-input-comment').style.borderColor = '#AFAFAF';
            console.error('What do you have to hide? Tell us your name!');
        }
        else if (comment == 0) {
            document.querySelector('.comments-section__form-input-name').style.backgroundColor = '#FAFAFA';
            document.querySelector('.comments-section__form-input-name').style.borderColor = '#AFAFAF';
            document.querySelector('.comments-section__form-input-comment').style.backgroundColor = '#FFF0F0';
            document.querySelector('.comments-section__form-input-comment').style.borderColor = '#FF0000';
            console.error("Don't you have anything nice to say? Include a comment!");
        }
        else {
            document.querySelector('.comments-section__form-input-name').style.backgroundColor = '#FAFAFA';
            document.querySelector('.comments-section__form-input-name').style.borderColor = '#AFAFAF';
            document.querySelector('.comments-section__form-input-comment').style.backgroundColor = '#FAFAFA';
            document.querySelector('.comments-section__form-input-comment').style.borderColor = '#AFAFAF';

            axios.post(commentsURL, {
            name: commentsForm.name.value,
            comment: commentsForm.comment.value,
            })
                .then(res => {
                    commentsForm.reset();
                    deleteAll();
                    parentFunction();
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                })        
            }
})


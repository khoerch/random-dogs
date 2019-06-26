'use strict';

function getDogs(num) {
    //This fetches the users designated number of images from the Dog API database
    fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
        .then(x => x.json())
        .then(y => displayDogs(y, num))
        .catch(error => alert('Please check internet connection'));
};

function displayDogs(y, num) {
    //This displays the resulting images by adjusting the DOM with the new info
    console.log(y);
    $('.results').removeClass('hidden');
    for (let i = 0; i < num; i ++) {
        $('.results-img').append(
            `<img src="${y.message[i]}" alt="dog picture">`
        );
    };

};

function formSubmit() {
    //this function watches for a user submitting the form and passes the results to the GET function
    $('form').submit(event => {
        event.preventDefault();
        $('.results-img').html('');
        let userNum = $('#num-dogs').val();
        getDogs(userNum);
    });
};

$(function() {
    console.log('Waiting for user input');
    formSubmit();
});
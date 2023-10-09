'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
///https://countries-api-836d.onrender.com/countries/ 


// Syntax for API CALL "Old-Fashioned way"

const request = new XMLHttpRequest();
// adding the url to get data.
request.open('GET', 'https://nekos.best/api/v2/endpoints');

//after adding url we to to send it to the url and that send request fetches the data in the Background 'Asychronously'.
request.send();

// now we need a callBack 

request.addEventListener('load', function () {
    // "TO CHECK DID WE FETCH THE DATA OR NOT!!" console.log(this.responseText);

    // now to convert the data in required "OBJECT "Format 
    // destructuring data. using [];
    const data = JSON.parse(this.responseText);
    console.log(data);

    // NOW WE NEED THE HTML FORMAT TO SHOW DATA STORED IN OBJECTS

    const html = `
            <article class="country">
            <img class="country__img" src="${data.image}" />
            
            </div>
            </article>
`;

countriesContainer.insertAdjacentHTML('beforeend',html)

countriesContainer.computedStyleMap.opacity =1;

})


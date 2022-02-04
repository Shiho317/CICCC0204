//get elements in js
const classHeader = document.querySelector('.header');
const subtitle = document.createElement('h3');
const cardsWrap = document.querySelector('#card');
const header = document.querySelector('header');


//create elements
const subtitleText = document.createTextNode('tutorial blog');
subtitle.appendChild(subtitleText);

//inseart subtitle after title
classHeader.appendChild(subtitle);

//get data from API

const getData = (method, url, data) => {
  const datas = fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(results => {
    return results.json()
  })
  return datas
};

//create cards from API datas

async function fetchDatas(){
  try{
    const catchDatas = await getData(
      "GET",
      "https://jsonplaceholder.typicode.com/photos"
    )

    for(const card of catchDatas){

      //create new elements inside of card
      const cardImg = document.createElement('img')
      cardImg.setAttribute('src', card.thumbnailUrl);
      cardImg.setAttribute('alt', card.id);
      const cardTitle = document.createElement('p');
      cardTitle.textContent = card.title;
      
      const cardList = document.createElement('div');
      cardList.id = card.id;

      //insert new elements inside of card
      cardsWrap.appendChild(cardList);
      cardList.appendChild(cardImg);
      cardList.appendChild(cardTitle);

      //add classname
      cardList.classList.add('contents-wrap')

    }
  }
  catch(err){
    console.log(err)
  }
}

fetchDatas()

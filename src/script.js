document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('get-buddy');
  button.addEventListener('click', myNewBuddy);
});

function myNewBuddy () {

  const button = document.getElementById('get-buddy');

  // removing the button from the page
  button.parentNode.removeChild(button);

  // buddy varieties
  const buddies = [
    'https://img.freepik.com/free-vector/cute-shiba-inu-holding-ice-cream-cartoon-vector-icon-illustration-animal-food-icon-concept-isolated_138676-4427.jpg?w=1060&t=st=1677077725~exp=1677078325~hmac=af867390329bc57fb4762835d6eac5d080fdfc3a619e3df032531ef04ed1844a',
    'https://img.freepik.com/free-vector/cute-shiba-inu-dog-snorkeling-waving-hand-cartoon-vector-icon-illustration-animal-holiday-icon_138676-4990.jpg?w=1060&t=st=1677077284~exp=1677077884~hmac=1c959ac446214e8a2ee006276517656b25f965e0b51fdbc3ba42aea73c85e709',
    'https://img.freepik.com/free-vector/cute-dog-sticking-her-tongue-out-cartoon-icon-illustration_138676-2709.jpg?w=1060&t=st=1677074326~exp=1677074926~hmac=cdd68b7e9730e8ed1c7b5ed5ab5ee2bd964eb26f42fd8599f6588f661fad5671',
    'https://img.freepik.com/free-vector/cute-shiba-inu-dog-sitting-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3556.jpg?w=1060&t=st=1677077649~exp=1677078249~hmac=33299663d1cc3eb1dff0f41db797b6dfd8c62db7db4ee203054e955b5c8c882d',
    'https://img.freepik.com/free-vector/cute-shiba-inu-dog-wearing-shoes-cartoon-vector-icon-illustration-animal-nature-icon-isolated-flat_138676-4725.jpg?w=1060&t=st=1677077871~exp=1677078471~hmac=0d038074f96797d9d47e2a5260d3465ddfb85cfc5cae25025bd0b439c8bfa834',
    'https://img.freepik.com/free-vector/cute-koi-fish-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-4217.jpg?w=1060&t=st=1677077768~exp=1677078368~hmac=97e4d64f31d4fb60cb926ef00b2114946fce1039554126c50dda68223f661f0f'
  ];

  // random pic
  const randomPic = Math.floor(Math.random() * buddies.length);
  const newBuddy = buddies[randomPic];

  // choose div
  const div = document.getElementById('my-buddy');

  // show buddy text
  const greetings = document.createElement('p');
  greetings.textContent = "Your new buddy says 'Hi!'";
  greetings.setAttribute("id", "greetings");
  div.appendChild(greetings);

  // show buddy pic
  const img = document.createElement('img');
  img.src = newBuddy;
  img.setAttribute("id", "pet-image")
  div.appendChild(img);

  //try again 

  const newButton = document.createElement("button");
  newButton.setAttribute("id", "new-button")

  // button's text content

  newButton.textContent = "Try again!";

  // reload page (try again function)

  newButton.addEventListener("click", function () {
    console.log("Wait for new friend!");
    window.location.reload();
  });

  // try again button
  div.appendChild(newButton);

}



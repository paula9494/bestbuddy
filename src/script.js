import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function coinToss () {
  // Randomly return either 'heads' or 'tails'
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://img.freepik.com/free-vector/cute-cat-eating-donut-cartoon-vector-icon-illustration-animal-food-icon-concept-isolated-flat_138676-4529.jpg?w=1060&t=st=1676305437~exp=1676306037~hmac=89550b02b628766f038b86624958ef4c5253e00c86633bb5ed05da0d4883a973',
  doggy: 'https://img.freepik.com/free-vector/cute-shiba-inu-dog-drink-milk-tea-boba-cartoon_138676-2438.jpg?w=1060&t=st=1676305427~exp=1676306027~hmac=a6ce691604afa79ca953ef5e5ef4c273150e7dbe693f1882dd6711c771e52135'
};

function App () {
  const [isShowingImg, setIsShowingImg] = useState(false);

  const handleClick = () => {
    setIsShowingImg(!isShowingImg);
  };

  return (
    <div>
      <button onClick={handleClick}> click me </button>
      {isShowingImg && (
        <img src={pics[coinToss() === 'heads' ? 'kitty' : 'doggy']} alt="animal" />
      )}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));


/*import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function coinToss () {
  // Randomly return either 'heads' or 'tails'
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://img.freepik.com/free-vector/cute-cat-eating-donut-cartoon-vector-icon-illustration-animal-food-icon-concept-isolated-flat_138676-4529.jpg?w=1060&t=st=1676305437~exp=1676306037~hmac=89550b02b628766f038b86624958ef4c5253e00c86633bb5ed05da0d4883a973',
  doggy: 'https://img.freepik.com/free-vector/cute-shiba-inu-dog-drink-milk-tea-boba-cartoon_138676-2438.jpg?w=1060&t=st=1676305427~exp=1676306027~hmac=a6ce691604afa79ca953ef5e5ef4c273150e7dbe693f1882dd6711c771e52135'
};

const img = <img src={pics[coinToss() === 'heads' ? 'kitty' : 'doggy']} />;
const button = (
  <button> click me </button>
);

function App () { }


ReactDOM.render(<App />, document.getElementById('app'));*/


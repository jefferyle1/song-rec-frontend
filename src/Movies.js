import React from "react";


const Movies = ({ list }) => {
  let cards = <h3>Loading...</h3>;

  if (list) {
    cards = list.map((m, i) => <Movie key={i} item={m} />);
  }

  console.log(list);

  return (
    <div >
      <div> {cards} </div>
    </div>
  );
};


const Movie = props => {
    const { name, album, artists } = props.item;

  
    return (
      <div> {name} by {artists[0]["name"]} </div>
    );
  };

export default Movies;

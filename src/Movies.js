import React from "react";


const Movies = ({ list }) => {
  let cards = <h3>Loading...</h3>;

  if (list) {
    cards = list.slice(0,5).map((m, i) => <Movie key={i} item={m} />);
  }

  console.log(list);

  return (
    <div >
      <div> {cards} </div>
    </div>
  );
};


const Movie = props => {
    const { title, poster_path, vote_average } = props.item;
  
    return (
      <div> {title} </div>
    );
  };

export default Movies;

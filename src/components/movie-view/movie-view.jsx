export const MovieView = ({ movie, onBackClick }) => {
  return (
    <div>
      <div>
        <img src={movie.image} alt={movie.title} />
      </div>
      <div>
        <h2>{movie.title}</h2>
      </div>
      <div>
        <span>Description: </span>
        <p>{movie.description}</p>
      </div>
      <div>
        <span>Genre: </span>
        <p>{movie.genre}</p>
      </div>
      <div>
        <span>Director: </span>
        <p>{movie.director}</p>
      </div>
      <button onClick={onBackClick}>Back</button>
    </div>
  );
};

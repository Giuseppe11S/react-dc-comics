
// props per le card
const ComicCard = ({ comic }) => {
  return (
    <div className="comic-card">
      <img src={comic.thumb} alt={comic.title} />
      <h2>{comic.series}</h2>
    </div>
  );
};

export default ComicCard;
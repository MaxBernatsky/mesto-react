function Card({ card }) {
  return (
    <li className='place'>
      <img src={card.link} alt={card.name} className='place__img' />
      <button
        className='place__delete-btn'
        type='button'
        aria-label='delete'></button>
      <div className='place__name'>
        <h2 className='place__title'>{card.name}</h2>
        <div className='place__likes'>
          <button
            className='place__like-btn'
            type='button'
            aria-label='Like'></button>
          <span className='place__like-count'>
            {Object.keys(card.likes).length}
          </span>
        </div>
      </div>
    </li>
  );
}

export default Card;

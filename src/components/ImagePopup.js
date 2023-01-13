function ImagePopup() {
  return (
    <div id='popup-img' className='popup'>
      <div className='popup__container'>
        <figure className='popup__figure'>
          <button
            className='popup__close'
            type='button'
            aria-label='Close'></button>
          <img src='#' alt='картинка' className='popup__img' />
          <figcaption className='popup__descr'>Горный Алтай</figcaption>
        </figure>
      </div>
    </div>
  );
}
export default ImagePopup;

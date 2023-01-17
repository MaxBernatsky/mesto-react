function PopupWithForm({ title, name, children, isOpen, onClose, buttonText }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div className='popup__container'>
        <form className='popup__form' name={name} noValidate>
          <button
            onClick={onClose}
            className='popup__close'
            type='button'
            aria-label='Close'></button>
          <h3 className='popup__title'>{title}</h3>
          {children}
          <button className='popup__button' type='submit'>
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
export default PopupWithForm;

function Main() {
  const handleEditAvatarClick = () => {
    const popupEditAvatar = document.querySelector('#popup-change');
    popupEditAvatar.classList.add('popup_opened');
  };
  const handleEditProfileClick = () => {
    const popupEditProfile = document.querySelector('#popup-profile');
    popupEditProfile.classList.add('popup_opened');
  };
  const handleAddPlaceClick = () => {
    const popupAddPlace = document.querySelector('#popup-place');
    popupAddPlace.classList.add('popup_opened');
  };
  return (
    <main className='container'>
      <section className='profile'>
        <div className='profile__img-container'>
          <img src='#' alt='Ваш Аватар' className='profile__img' />
          <button
            onClick={handleEditAvatarClick}
            className='profile__img-edit'
            type='button'
            aria-label='edit-avatar'></button>
        </div>
        <div className='profile__info'>
          <h1 className='profile__title'></h1>
          <button
            onClick={handleEditProfileClick}
            className='profile__btn-edit'
            type='button'
            aria-label='Edit'></button>
          <p className='profile__subtitle'></p>
        </div>
        <button
          onClick={handleAddPlaceClick}
          className='profile__btn-add'
          type='button'
          aria-label='Add'></button>
      </section>

      <section className='content'>
        <ul className='places'></ul>
      </section>
    </main>
  );
}

export default Main;

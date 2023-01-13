function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
  return (
    <main className='container'>
      <section className='profile'>
        <div className='profile__img-container'>
          <img src='#' alt='Ваш Аватар' className='profile__img' />
          <button
            className='profile__img-edit'
            type='button'
            aria-label='edit-avatar'></button>
        </div>
        <div className='profile__info'>
          <h1 className='profile__title'></h1>
          <button
            className='profile__btn-edit'
            onClick={onEditProfile}
            type='button'
            aria-label='Edit'></button>
          <p className='profile__subtitle'></p>
        </div>
        <button
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

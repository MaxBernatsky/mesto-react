import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  // const [isEditAvatarClick, setIsEditAvatarClick] = useState(false);
  // function handleEditAvatarClick() {
  //   setIsEditAvatarClick(true);
  // }

  return (
    <div className='root' id='root'>
      <div className='page'>
        <Header />
        <Main />
        <Footer />
      </div>
      <div id='popup-profile' className='popup'>
        <div className='popup__container'>
          <form className='popup__form' name='popupProfile' noValidate>
            <button
              className='popup__close'
              type='button'
              aria-label='Close'></button>
            <h3 className='popup__title'>Редактировать профиль</h3>
            <input
              type='text'
              className='popup__input popup__input_item_name'
              name='profileName'
              placeholder='Введите имя'
              required
              minLength='2'
              maxLength='40'
              id='name-input'
            />
            <span className='popup__input-error' id='name-input-error'></span>
            <input
              type='text'
              className='popup__input popup__input_item_descr'
              name='profileProfession'
              placeholder='Ваша профессия'
              required
              minLength='2'
              maxLength='200'
              id='profession-input'
            />
            <span
              className='popup__input-error'
              id='profession-input-error'></span>
            <button className='popup__button' type='submit'>
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <div id='popup-place' className='popup'>
        <div className='popup__container'>
          <form className='popup__form' name='popupPlaceForm' noValidate>
            <button
              className='popup__close'
              type='button'
              aria-label='Close'></button>
            <h3 className='popup__title'>Новое место</h3>
            <input
              type='text'
              className='popup__input popup__input_item_name'
              name='name'
              placeholder='Название'
              required
              minLength='2'
              maxLength='30'
              id='place-name-input'
            />
            <span
              className='popup__input-error'
              id='place-name-input-error'></span>
            <input
              type='url'
              className='popup__input popup__input_item_descr'
              name='link'
              placeholder='Ссылка на картинку'
              required
              id='place-link-input'
            />
            <span
              className='popup__input-error'
              id='place-link-input-error'></span>
            <button className='popup__button' type='submit'>
              Создать
            </button>
          </form>
        </div>
      </div>
      <div id='popup-confirm' className='popup'>
        <div className='popup__container'>
          <form className='popup__form' name='popupConfirmForm' noValidate>
            <button
              className='popup__close popup__close-confirm'
              type='button'
              aria-label='Close'></button>
            <h3 className='popup__title'>Вы уверены?</h3>
            <button className='popup__button' type='submit'>
              Да
            </button>
          </form>
        </div>
      </div>
      <div id='popup-change' className='popup'>
        <div className='popup__container'>
          <form className='popup__form' name='popupChangeForm' noValidate>
            <button
              className='popup__close popup__close-change'
              type='button'
              aria-label='Close'></button>
            <h3 className='popup__title'>Обновить аватар</h3>
            <input
              type='url'
              className='popup__input popup__input_item_descr'
              name='link'
              placeholder='Ссылка на картинку'
              required
              id='avatar-link-input'
            />
            <span
              className='popup__input-error'
              id='avatar-link-input-error'></span>
            <button className='popup__button' type='submit'>
              Сохранить
            </button>
          </form>
        </div>
      </div>
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

      <template id='place-template'>
        <li className='place'>
          <img
            src='./images/karachaevsk.jpg'
            alt='Карачаевск'
            className='place__img'
          />
          <button
            className='place__delete-btn'
            type='button'
            aria-label='delete'></button>
          <div className='place__name'>
            <h2 className='place__title'>Карачаевск</h2>
            <div className='place__likes'>
              <button
                className='place__like-btn'
                type='button'
                aria-label='Like'></button>
              <span className='place__like-count'></span>
            </div>
          </div>
        </li>
      </template>
    </div>
  );
}

export default App;

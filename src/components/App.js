import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import { useState } from 'react';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

  const [selectedCard, setIsSelectedCard] = useState(null);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsSelectedCard(null);
  }

  function handleCardClick(card) {
    setIsSelectedCard(card);
  }

  return (
    <div className='root' id='root'>
      <div className='page'>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
          buttonText={'Сохранить'}
          name='profile'
          title='Редактировать профиль'
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}>
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
        </PopupWithForm>

        <PopupWithForm
          buttonText={'Сохранить'}
          name='popupChangeForm'
          title='Обновить аватар'
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}>
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
        </PopupWithForm>

        <PopupWithForm
          buttonText={'Создать'}
          name='popupPlaceForm'
          title='Новое место'
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}>
          <input
            type='text'
            className='popup__input popup__input_item_name'
            name='name'
            placeholder='Название'
            required
            minLength='2'
            maxLength='30'
            id='place-link-input'
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
        </PopupWithForm>
        <ImagePopup
          card={selectedCard}
          isOpen={selectedCard}
          onClose={closeAllPopups}
        />
      </div>
    </div>
  );
}

export default App;

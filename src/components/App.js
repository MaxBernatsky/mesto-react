import { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

  const [selectedCard, setIsSelectedCard] = useState(null);

  const [currentUser, setCurrentUser] = useState({});

  const [cards, setCards] = useState([]);

  const [deletedCard, setDeletedCard] = useState([]);

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

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api
      .changeLikeCardStatus(card._id, isLiked ? 'DELETE' : 'PUT')
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((error) => console.log(error));
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setDeletedCard(null);
        setCards((newArr) => newArr.filter((item) => card._id !== item._id));
      })
      .catch((error) => console.log(error));
  }

  function handleUpdateUser(data) {
    api
      .setUserProfile(data)
      .then((newInfo) => {
        setCurrentUser(newInfo);
        closeAllPopups();
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    Promise.all([api.getUserProfile(), api.getInitialCards()])
      .then(([userData, cards]) => {
        setCurrentUser(userData);
        setCards(cards);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {' '}
      <div className='root' id='root'>
        <div className='page'>
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onEditAvatar={handleEditAvatarClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            cards={cards}
          />
          <Footer />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
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
    </CurrentUserContext.Provider>
  );
}

export default App;

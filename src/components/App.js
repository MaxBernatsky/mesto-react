import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import { useState } from 'react';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  return (
    <div className='root' id='root'>
      <div className='page'>
        <Header />
        <Main onEditProfile={handleEditProfileClick} />
        <Footer />
        <PopupWithForm
          name='profile'
          title='Редактировать профиль'
          isOpen={isEditProfilePopupOpen}>
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
      </div>
    </div>
  );
}

export default App;

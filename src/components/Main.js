import { useEffect } from 'react';
import { useState } from 'react';
import api from '../utils/api.js';
import Card from './Card';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserProfile()
      .then((userData) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    api
      .getInitialCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <main className='container'>
      <section className='profile'>
        <div className='profile__img-container'>
          <img src={userAvatar} alt='Ваш Аватар' className='profile__img' />
          <button
            onClick={onEditAvatar}
            className='profile__img-edit'
            type='button'
            aria-label='edit-avatar'></button>
        </div>
        <div className='profile__info'>
          <h1 className='profile__title'>{userName}</h1>
          <button
            className='profile__btn-edit'
            onClick={onEditProfile}
            type='button'
            aria-label='Edit'></button>
          <p className='profile__subtitle'>{userDescription}</p>
        </div>
        <button
          onClick={onAddPlace}
          className='profile__btn-add'
          type='button'
          aria-label='Add'></button>
      </section>

      <section className='content'>
        <ul className='places'>
          {cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;

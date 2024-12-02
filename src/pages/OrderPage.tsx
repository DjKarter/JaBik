import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../features/store';
import './OrderPage.scss';
import { CustomSelect } from '../components/CustomSelect.tsx';

const OrderPage: React.FC = () => {
  const artworks = useSelector((state: RootState) => state.artworks.list);
  const [selectedArtwork, setSelectedArtwork] = useState<string | undefined>();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Отправка данных на сервер или обработка заявки
    console.log({
      name,
      email,
      message,
      selectedArtwork,
    });

    setIsSubmitted(true);
  };

  return (
    <div className="order-page">
      <h1>Заказать картину</h1>
      {isSubmitted ? (
        <div className="order-page__success">
          <p>Спасибо за ваш заказ! Мы свяжемся с вами в ближайшее время.</p>
        </div>
      ) : (
        <form className="order-page__form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ваше имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Ваш email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <CustomSelect
            artworks={artworks}
            onSelect={(id) => setSelectedArtwork(id)}
          />
          <textarea
            placeholder="Сообщение (например, что вы хотите изменить в картине)"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit">Отправить</button>
        </form>
      )}
    </div>
  );
};

export default OrderPage;

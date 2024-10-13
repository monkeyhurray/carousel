'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import styles from '@/styles/components/Carousel/CardBox.module.scss';
import { CARDS } from '@/constants/card';

const Carousel = () => {
  const cardRef = useRef(null);
  // const [translateValue, setTranslateValue] = useState(0);

  //   useEffect(() => {
  //     cardRef.current = cardRef.current;
  //   }, [cardRef]);
  // const extendedItems = [CARDS[CARDS.length - 1], ...CARDS, CARDS[0]];

  // const onClickPrev = () => {
  //   setTranslateValue((prev) => prev - 6);
  //   cardRef.current.style.transform = `translateX(${translateValue}rem)`;
  // };
  // const onClickProh = () => {
  //   setTranslateValue((prev) => prev + 6);
  //   cardRef.current.style.transform = `translateX(${translateValue}rem)`;
  // };

  return (
    <div className={styles['carousel-box']}>
      <h1>이전</h1>
      <div ref={cardRef} className={styles['carousel-box__cards']}>
        {CARDS.map((book) => {
          return (
            <div className={styles['carousel-box__cards__card']} key={book.id}>
              <Image
                className={styles['carousel-box__cards__card__img']}
                src={book.image}
                alt="책"
              />
              <p className={styles['carousel-box__cards__card__contents']}>
                <span
                  className={
                    styles['carousel-box__cards__card__contents__title']
                  }
                >
                  {book.title}
                </span>
                <span
                  className={
                    styles['carousel-box__cards__card__contents__author']
                  }
                >
                  {book.author}
                </span>
              </p>
            </div>
          );
        })}
      </div>
      <h1>다음</h1>
    </div>
  );
};

export default Carousel;

'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from '@/styles/components/Carousel/CardBox.module.scss';
import { CARDS } from '@/constants/card';

const Carousel = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const cards = CARDS;
  const [translateValue, setTranslateValue] = useState(0);

  useEffect(() => {
    if (translateValue === 0 && prevRef.current) {
      prevRef.current.style.pointerEvents = 'none';
    }
  }, [translateValue]);

  const onClickProh = () => {
    setTranslateValue((prev) => {
      const newValue = prev - 6;
      if (cardRef.current) {
        cardRef.current.style.transform = `translateX(${newValue}rem)`;
      }
      return newValue;
    });
  };
  if (cardRef.current) {
    console.log(cardRef.current.style.width);
  }
  const onClickPrev = () => {
    setTranslateValue((prev) => {
      const newValue = prev + 6;
      if (cardRef.current) {
        cardRef.current.style.transform = `translateX(${newValue}rem)`;
      }
      return newValue;
    });
  };

  return (
    <>
      <div className={styles['carousel-box']}>
        <h1
          className={styles['carousel-box__click']}
          ref={prevRef}
          onClick={onClickPrev}
        >
          이전
        </h1>
        <div className={styles['carousel-box__contents']}>
          <div
            ref={cardRef}
            className={styles['carousel-box__contents__cards']}
          >
            {cards.map((book) => {
              return (
                <div
                  className={styles['carousel-box__contents__cards__card']}
                  key={book?.id}
                >
                  <Image
                    className={
                      styles['carousel-box__contents__cards__card__img']
                    }
                    src={book?.image}
                    alt="책"
                  />
                  <p
                    className={
                      styles['carousel-box__contents__cards__card__contents']
                    }
                  >
                    <span
                      className={
                        styles[
                          'carousel-box__contents__cards__card__contents__title'
                        ]
                      }
                    >
                      {book?.title}
                    </span>
                    <span
                      className={
                        styles[
                          'carousel-box__contents__cards__card__contents__author'
                        ]
                      }
                    >
                      {book?.author}
                    </span>
                  </p>
                </div>
              );
            })}
          </div>
          <h1 className={styles['carousel-box__click']} onClick={onClickProh}>
            다음
          </h1>
        </div>
      </div>
    </>
  );
};

export default Carousel;

'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from '@/styles/components/Carousel/CardBox.module.scss';
import { CARDS } from '@/constants/card';
import { deepCopyArr } from '@/lib/deepCopyArr';
import left from '@/../../public/assets/carousel/leftArrow.svg';
import right from '@/../../public/assets/carousel/rightArrow.svg';
const Carousel = () => {
  const btnPrevRef = useRef<HTMLImageElement>(null);
  const btnNextRef = useRef<HTMLImageElement>(null);
  const cardRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLImageElement>(null);

  const [translateValue, setTranslateValue] = useState(0);

  useEffect(() => {
    if (btnPrevRef.current && btnNextRef.current) {
      // prev 버튼 처리
      btnPrevRef.current.style.pointerEvents =
        translateValue === 0 ? 'none' : 'auto';
      // next 버튼 처리
      btnNextRef.current.style.pointerEvents =
        translateValue === -8.6 * 2 ? 'none' : 'auto';
    }
  }, [translateValue]);

  const prevFunc = () => {
    setTranslateValue((prev) => {
      const newValue = prev + 8.6;
      if (contentRef.current) {
        contentRef.current.style.transform = `translateX(${newValue}rem)`;
      }
      return newValue;
    });
  };

  const nextFunc = () => {
    setTranslateValue((prev) => {
      const newValue = prev - 8.6;
      if (contentRef.current) {
        contentRef.current.style.transform = `translateX(${newValue}rem)`;
      }
      return newValue;
    });
  };

  const cards = deepCopyArr(CARDS);

  return (
    <>
      <div className={styles['container']}>
        <Image
          ref={btnPrevRef}
          className={styles['container-arrow']}
          onClick={prevFunc}
          src={left}
          alt="이전"
        />
        <div className={styles['container-carousel']}>
          <div ref={contentRef} className={styles['container-carousel__cells']}>
            {cards.map((book) => {
              return (
                <div
                  key={book.id}
                  className={styles['container-carousel__cells__cell']}
                >
                  <Image
                    ref={cardRef}
                    className={styles['container-carousel__cells__cell__img']}
                    src={book.image}
                    alt="책"
                  />
                  <p
                    className={
                      styles['container-carousel__cells__cell__content']
                    }
                  >
                    <span>{book.title}</span>
                    <span>{book.author}</span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <Image
          ref={btnNextRef}
          className={styles['container-arrow']}
          onClick={nextFunc}
          src={right}
          alt="다음"
        />
      </div>
    </>
  );
};

export default Carousel;

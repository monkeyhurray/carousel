'use client';
import React, { useState, useEffect, useRef } from 'react';
import styles from '@/styles/components/ImageCarousel/ImageCarousel.module.scss';
import Image from 'next/image';
import { CARDS } from '@/constants/card';

import { deepCopyArr } from '@/lib/deepCopyArr';

const ImageCarousel = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const widthRef = useRef(0);
  const [value, setValue] = useState(0);

  const cards = deepCopyArr(CARDS);
  const changeCard = cards.slice(0, 2).length;

  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      // prev 버튼 처리
      prevRef.current.style.pointerEvents = value === 0 ? 'none' : 'auto';
      // next 버튼 처리
      nextRef.current.style.pointerEvents =
        value === -7.6 * changeCard ? 'none' : 'auto';
    }
  }, [value, prevRef.current, nextRef.current]);

  useEffect(() => {
    if (contentRef.current) {
      widthRef.current = contentRef.current.clientWidth;
    }
  }, []);
  // console.log(widthRef.current);
  const prevFunc = () => {
    setValue((prev) => {
      const newValue = prev + 7.6;
      if (contentRef.current) {
        contentRef.current.style.transform = `translateX(${newValue}rem)`;
      }
      return newValue;
    });
  };

  const proFunc = () => {
    setValue((prev) => {
      const newValue = prev - 7.6;
      if (contentRef.current) {
        contentRef.current.style.transform = `translateX(${newValue}rem)`;
      }
      return newValue;
    });
  };

  return (
    <>
      <div className={styles['container']}>
        <div className={styles['container-carousel']}>
          <div ref={contentRef} className={styles['container-carousel__cells']}>
            {cards.slice(0, 3).map((book) => {
              return (
                <Image
                  className={styles['container-carousel__cells__cell']}
                  key={book.id}
                  src={book.image}
                  alt="사진"
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles['btn']}>
        <div ref={prevRef} className={styles['btn-prev']} onClick={prevFunc}>
          이전
        </div>
        <div ref={nextRef} className={styles['btn-prev']} onClick={proFunc}>
          다음
        </div>
      </div>
    </>
  );
};

export default ImageCarousel;

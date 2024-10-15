'use client';
import React, { useState, useEffect, useRef } from 'react';
import styles from '@/styles/components/ImageCarousel/ImageCarousel.module.scss';
import Image, { StaticImageData } from 'next/image';
import { CARDS } from '@/constants/card';

import type { ItemType } from '@/types/cardType';

const ImageCarousel = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const widthRef = useRef(0);
  const [value, setValue] = useState(0);

  const deepCopy = (arr: ItemType[] | ItemType): ItemType[] => {
    if (Array.isArray(arr)) {
      const result = [];
      for (const item of arr) {
        result.push(...deepCopy(item));
      }
      return result;
    }
    return [{ ...arr }];
  };

  const cards = deepCopy(CARDS);
  const changeCard = cards.slice(0, 2).length;

  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      // prev 버튼 처리
      prevRef.current.style.pointerEvents = value === 0 ? 'none' : 'auto';
      // next 버튼 처리
      nextRef.current.style.pointerEvents =
        value === -9 * changeCard ? 'none' : 'auto';
    }
  }, [value, prevRef.current, nextRef.current]);

  useEffect(() => {
    if (contentRef.current) {
      widthRef.current = contentRef.current.clientWidth;
      console.log('콘텐츠의 너비:', widthRef.current);
      console.log('콘텐츠의 개당 너비:', widthRef.current / 3);
    }
  }, []);

  const prevFunc = () => {
    setValue((prev) => {
      const newValue = prev + 9;
      if (contentRef.current) {
        contentRef.current.style.transform = `translateX(${newValue}rem)`;
      }
      return newValue;
    });
  };

  const proFunc = () => {
    setValue((prev) => {
      const newValue = prev - 9;
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
            {cards
              .slice(0, 3)
              .map((e: { id: number; image: StaticImageData }) => {
                return (
                  <Image
                    className={styles['container-carousel__cells__cell']}
                    key={e.id}
                    src={e.image}
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

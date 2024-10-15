// 'use client';

// import React, { useState, useRef } from 'react';
// import Image from 'next/image';
// import styles from '@/styles/components/Carousel/CardBox.module.scss';
// import { CARDS } from '@/constants/card';

// const InfinityCarousel = () => {
//   const cardRef = useRef<HTMLDivElement>(null);
//   const cards = CARDS;
//   const [translateValue, setTranslateValue] = useState(0);

//   // useEffect(() => {
//   //   if (translateValue > 0) {
//   //     return setCards([cards[0], ...cards, cards[cards.length - 1]]);
//   //   } else if (translateValue < 0) {
//   //     return setCards([cards[cards.length - 1], ...cards, cards[0]]);
//   //   } else if (translateValue === 0) {
//   //     setCards(CARDS);
//   //   }
//   // }, [translateValue]);

//   const onClickProh = () => {
//     setTranslateValue((prev) => {
//       const newValue = prev - 6;
//       if (cardRef.current) {
//         cardRef.current.style.transform = `translateX(${newValue}rem)`;
//       }
//       return newValue;
//     });
//   };

//   const onClickPrev = () => {
//     setTranslateValue((prev) => {
//       const newValue = prev + 6;
//       if (cardRef.current) {
//         cardRef.current.style.transform = `translateX(${newValue}rem)`;
//       }
//       return newValue;
//     });
//   };

//   return (
//     <div className={styles['carousel-box']}>
//       <h1 className={styles['carousel-box__click']} onClick={onClickPrev}>
//         이전
//       </h1>
//       <div className={styles['carousel-box__contents']}></div>
//       <div ref={cardRef} className={styles['carousel-box__contents__cards']}>
//         {cards.map((book) => {
//           return (
//             <div
//               className={styles['carousel-box__contents__cards__card']}
//               key={book?.id}
//             >
//               <Image
//                 className={styles['carousel-box__contents__cards__card__img']}
//                 src={book?.image}
//                 alt="책"
//               />
//               <p
//                 className={
//                   styles['carousel-box__contents__cards__card__contents']
//                 }
//               >
//                 <span
//                   className={
//                     styles[
//                       'carousel-box__contents__cards__card__contents__title'
//                     ]
//                   }
//                 >
//                   {book?.title}
//                 </span>
//                 <span
//                   className={
//                     styles[
//                       'carousel-box__contents__cards__card__contents__author'
//                     ]
//                   }
//                 >
//                   {book?.author}
//                 </span>
//               </p>
//             </div>
//           );
//         })}
//       </div>
//       <h1 className={styles['carousel-box__click']} onClick={onClickProh}>
//         다음
//       </h1>
//     </div>
//   );
// };

// export default InfinityCarousel;

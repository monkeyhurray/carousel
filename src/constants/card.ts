import camilo from '@/../../public/assets/doncamillo.jpg';
import pappone from '@/../../public/assets/pappone.jpg';
import devil from '@/../../public/assets/devil.jpeg';
import vegiterian from '@/../../public/assets/vegiterian.jpeg';
import docker from '@/../../public/assets/docker.jpeg';
import fox from '@/../../public/assets/fox.jpg';
import { ItemType } from '@/types/cardType';

export const CARDS: ItemType[] = [
  { id: 1, image: camilo, title: '돈까밀로', author: '조바니노' },
  { id: 2, image: pappone, title: '패포네', author: '과레스키' },
  { id: 3, image: devil, title: '악마', author: '조반니노' },
  { id: 4, image: vegiterian, title: '채식주의자', author: '한강' },
  { id: 5, image: docker, title: '도커', author: '쿠버네티스' },
  { id: 6, image: pappone, title: '패포네', author: '과레스키' },
  { id: 7, image: camilo, title: '돈까밀로', author: '조바니노' },
  { id: 8, image: devil, title: '악마', author: '조반니노' },
  { id: 9, image: docker, title: '도커', author: '쿠버네티스' },
  { id: 10, image: vegiterian, title: '채식주의자', author: '한강' },
  { id: 11, image: fox, title: '책제목', author: '한강' },
  { id: 12, image: pappone, title: '책제목', author: '한강' },
];

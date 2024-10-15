import { StaticImageData } from 'next/image';

export interface ItemType {
  id: number;
  image: StaticImageData;
  title: string;
  author: string;
}

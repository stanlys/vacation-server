export class ProductModel {
  _id: string;
  image: string;
  title: string;
  price: number;
  oldPrice: number;
  credit: number;
  calculatedRating: number;
  decription: string;
  advantages: string;
  disAvantages: string;
  categories: Array<string>;
  tags: string;
  charcteristics: {
    [key: string]: string;
  };
}

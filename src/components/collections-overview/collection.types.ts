export interface Items {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export type Collection = {
  id: number;
  title: string;
  routeName: string;
  items: Items[];
};

export type Collections = {
  collections: Collection[];
};

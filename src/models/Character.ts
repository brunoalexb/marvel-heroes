export default interface Hero {
    id: number;
    name: string;
    description: string;
    isFavorite?: boolean;
    thumbnail: {
      path: string;
      extension: string;
    };
    series: {
      available: number;
      collectionURI: string;
      items: { name: string; resourceURI: string }[];
    };
  }
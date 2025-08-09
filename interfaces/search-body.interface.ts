export interface SearchBody {
  filters?: any;
  search?: string;
  category?: string;
  page?: number;
  size?: number;
  sort?: {
    [key: string]: 1 | -1;
  };
  projections?: {
    [key: string]: 0 | 1;
  };
  populate?: boolean;
  lean?: boolean;
  minPrice?: string;
  maxPrice?: string;
  rating?: number;
}

export interface SearchParams extends SearchBody {
  q?: string;
}

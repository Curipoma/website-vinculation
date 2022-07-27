export interface PaginatorModel {
  page: number;
  firstItem: number;
  lastPage: number;
  limit: number;
  lastItem: number;
  totalItems: number;
}

export interface PaginatorDto extends Partial<PaginatorModel> {}

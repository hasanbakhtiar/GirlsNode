export interface ProductAttributes {
  id?: number;
  image: string;
  title: string;
  price?: number | null;
  description?: string | null;
  active?: boolean | null;
  categoryId?: number | null;
}
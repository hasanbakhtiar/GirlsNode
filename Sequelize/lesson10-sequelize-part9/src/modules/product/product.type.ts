export interface ProductType {
  id?: number;
  image: string;
  title: string;
  slug: string;
  price?: number | null;
  description?: string | null;
  active?: boolean | null;
  categoryId?: number | null;
}
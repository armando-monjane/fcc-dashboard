export type Product = {
  id?: string | null;
  name: string;
  description?: string | null;
  thumbnail?: string | null;
  price: number;
  quantity: number;
  categoryID: string;
  tags?: Array<string | null> | null;
}
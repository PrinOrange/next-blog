export interface DocMetaModel {
  id: string;
  title: string;
  subtitle?: string;
  citation?: string;
  imgURL?: string;
  postDate: string;
  tags?: string[];
  declaration?: string;
  author?: string;
  originFrom?: string;
  originURL?: string;
  allowShare?: boolean;
}

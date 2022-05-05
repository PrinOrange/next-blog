export interface DocsListItem {
  id: string,
  imgURL?:string,
  title: string,
  subtitle?: string,
  citation?:string,
  tags?: string[],
  postDate: string;
}

export type DocsListModel = DocsListItem[];
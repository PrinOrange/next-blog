import { createContext, useContext, useRef } from "react";

interface DocFilterType {
  keyword?: string[];
  tags?: string[];
  outset?: string;
}

const DocFilterContext = createContext<DocFilterType>({
  keyword: [],
  tags: [],
});

export function useDocFilter() {
  const _i = useContext(DocFilterContext);

  const setFilter = (
    keyword: string[] | undefined = _i.keyword,
    tags: string[] | undefined = _i.tags,
    outset: string | undefined = _i.outset
  ): void => {
    _i.keyword = keyword;
    _i.tags = tags;
    _i.outset = outset;
  };
  const getFilter = (): DocFilterType => {
    return {
      keyword: _i.keyword,
      tags: _i.tags,
      outset: _i.outset,
    };
  };
  return {
    setFilter,
    getFilter,
  };
}

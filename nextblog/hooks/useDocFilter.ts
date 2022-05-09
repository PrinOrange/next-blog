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

  const setKeywords = (keywords: string[]) => {
    _i.keyword = keywords;
  };

  const setTags = (tags: string[]) => {
    _i.tags = tags;
  };

  const setOutset = (outset: string) => {
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
    setKeywords,
    setTags,
    setOutset,
    getFilter,
  };
}

import { createContext, useContext, useRef } from "react"

interface DocFilterType {
    keyword?: string[],
    tags?: string[],
    outset?: string,
}

const DocFilterContext = createContext<DocFilterType>({
    keyword: [],
    tags: [],
});

export function useDocFilter() {
    const _i = useContext(DocFilterContext);

    const setFilter = (value: DocFilterType): void => {
        _i.keyword = value.keyword;
        _i.tags = value.tags;
        _i.outset = value.outset;
    }
    const getFilter = (): DocFilterType => {
        return {
            keyword: _i.keyword,
            tags: _i.tags,
            outset: _i.outset,
        }
    }
    return {
        setFilter,
        getFilter,
    };
}
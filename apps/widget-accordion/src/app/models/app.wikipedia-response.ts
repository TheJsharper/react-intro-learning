export interface WikipediaResponse {
    batchcomplete: string;
    continue:      Continue;
    query:         Query;
}

export interface Continue {
    sroffset: number;
    continue: string;
}

export interface Query {
    searchinfo: Searchinfo;
    search:     Result[];
}

export interface Result {
    ns:        number;
    title:     string;
    pageid:    number;
    size:      number;
    wordcount: number;
    snippet:   string;
    timestamp: Date;
}

export interface Searchinfo {
    totalhits: number;
}

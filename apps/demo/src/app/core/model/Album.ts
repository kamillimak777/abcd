// Generated by https://quicktype.io

export interface AlbumSearchResponse {
    albums: PagingObject<AlbumResponse>
}

export function isAlbumSearchResponse(res: any): asserts res is AlbumSearchResponse {
    if (
      !(
        res &&
        'albums' in res &&
        'items' in res.albums &&
        Array.isArray(res.albums.items)
      )
    ) {
      throw new Error('Invalid Search Response');
    }
  }
  

export interface AlbumResponse {
    album_type:             string;
    total_tracks:           number;
    available_markets:      string[];
    external_urls:          ExternalUrls;
    href:                   string;
    id:                     string;
    images:                 Image[];
    name:                   string;
    release_date:           string;
    release_date_precision: string;
    restrictions:           Restrictions;
    type:                   "album";
    uri:                    string;
    artists:                Artist[];
    tracks?:                 PagingObject<Track>;
}

export interface Album {
    id:                     string;
    images:                 Image[];
    name:                   string;
}

// Structural Polymorphism (vs Nominal Polymorphizm ie. Java)
let ar = {} as AlbumResponse
let a = {} as Album
a = ar 
// ar = a // error 


export interface Artist {
    external_urls: ExternalUrls;
    followers:     Followers;
    genres:        string[];
    href:          string;
    id:            string;
    images:        Image[];
    name:          string;
    popularity:    number;
    type:          string;
    uri:           string;
}

export interface ExternalUrls {
    spotify: string;
}

export interface Followers {
    href:  string;
    total: number;
}

export interface Image {
    url:    string;
    height: number;
    width:  number;
}

export interface Restrictions {
    reason: string;
}

export interface PagingObject<T> {
    href:     string;
    items:    T[];
    limit:    number;
    next:     string;
    offset:   number;
    previous: string;
    total:    number;
}

export interface Track {
   id:            string;
   name:          string;
   type:          'track';
   preview_url:    string
}

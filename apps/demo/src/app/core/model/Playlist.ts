export interface Playlist {
  id: string;
  name: string;
  public: boolean;
  description: string;
}

type AllowedIdTypes = number | string // | object;

// Nowy Ekran

function parseId(id: AllowedIdTypes) {
  // return id.toString() 

  // Type Narrowing
  if (typeof id === 'number') {
    return id.toFixed(2)
  }

  if (typeof id === 'string') {
    return id.toUpperCase()
  }

  // Exhaustiveness Check
  const _shouldNotHappen: never = id
  throw new Error('Unexpected id type!')
}

const res = parseId({} as 123)
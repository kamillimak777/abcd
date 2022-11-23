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

  exhaustivenessCheck(id)
  // const zcx = 123 // Dead code
}

// Exhaustiveness Check
function exhaustivenessCheck(_shouldNotHappen: never): never {
  throw new Error('Unexpected type!')
}

// const res = parseId({} as 123)
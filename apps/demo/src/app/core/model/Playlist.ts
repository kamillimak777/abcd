interface Track { id: string, name: string; duration_ms: number }
interface Episode { id: string, name: string;   }

export interface Playlist {
  id: string;
  name: string;
  public: boolean;
  description: string;
  tracks?: Track[]
}


// if (x != null)
// if (typeof x == primitive)
// if (x instanceof Constructor)
// if ('key' in x )


function getInfo(res: Playlist | Track ) {
  if ('public' in res) {
    return `${res.name} has ${res.tracks?.length ?? 'no'} tracks`
  }
  if ('duration_ms' in res) {
    return `${res.name} has ${res.duration_ms}ms length`
  }
  exhaustivenessCheck(res)
}


/// ==================
// p is unknown
const p = {} as Playlist
///

if (p.tracks) {
  const len0 = p.tracks.length
};

const len1 = p.tracks ? p.tracks.length : 0
const len2 = p.tracks?.length
const len3 = p.tracks?.length || 0
const len4 = p.tracks?.length ?? 0

// Hacks - Casting
const len5 = p.tracks?.length as any
const len6 = p.tracks?.length as number
const len7 = p.tracks?.length!

/// ==================

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


/* eslint-disable quote-props */
type CharacterMapping = {
  [char: string]: string;
};

function invertMapping(obj: CharacterMapping): CharacterMapping {
  const result = {};
  const _keys = Object.keys(obj);
  for (let i = 0, length = _keys.length; i < length; i++) {
    result[obj[_keys[i]]] = _keys[i];
  }
  return result;
}

namespace BaliConst {
  /* Regex for various type of valid Latin glyph for Balinese */
  const LATIN = {
    CONSONANTS: `KH|TS|SY|\\^t|\\^T|\\^d|\\^D|ng|ny|sh|[hncrkdtswlpjymgbzfvqDNSTKGCPBJRL]`, //
    UNSTANDARD: `KH|TS|SY|\\^t|\\^T|\\^d|\\^D|sh|AA|II|UU|AI|AU|UA|IA|RX|Rx|LX|Lx|lx|rx|[xDNSTKGCPBJRL@]`,
    STANDARD: `ng|ny|sh|[aiueohncrkdtswlpjymgbzfvq ]`,
    CONSONANTS_TENGENAN: `ng|[rh]`,
    DIGITS: `[\\d]+`,
    DIGITS_PUNC: `[\\d]+|\\/[:()'"<>{}]?!]`,
    HINDU: `@|\\*|\\~`,
    DOT_COMMA: `[\.,\\/":\\|]`,
    SPACE: `[ _]`,
    VOWELS: `aa|ai|au|ae|ao|ia|ii|iu|ie|io|ua|ui|uu|ue|uo|ea|ei|eu|eo|xa|xi|xu|xe|xo|oa|oi|ou|oe|UA|IA|[aiueox]`, //
    SUARA: `AA|II|UU|AI|AU|RX|LX|[AIUEO]`,
    // EXCEPT_SWARA: `[^AIUEO]|^AA|^II|^UU|^AI|^AU`,
    // CAPTURE_RESIDUE: "(?=[A-Za-zÀ-ÿ])(dh|ny|th|ng|kh|dz|sy|gh|NY|[hncrkdtswlpjymgbzfvNKTSPGB])?(dh|ny|th|ng|kh|dz|sy|gh|NY|[hncrkdtswlpjymgbzfvNKTSPGB])?([aiueoxAIUEOXÉÈéè])?",
  };
  /* Regex for various type of valid Sundanese characters glyph */
  const BALI = {
    ANGKA: `[\\u1B50-\\u1B59]`,
    WIANJANA: `[\\u1B13-\\u1B33\\u1B45-\\u1B4B]`,
    REREKAN: `[\\u1B34]`,
    TENGENAN: `[\\u1B00-\\u1B04]`,
    SUARA: `[\\u1B05-\\u1B0A\\u1B0F-\\u1B12\\u1B0B-\\u1B0E]`,
    VOWELS: `[\\u1B35-\\u1B43\\u1B3A-\\u1B3D]`,
    ADEG: `[\\u1B44]`,
    PADA: `᭟᭜᭟|[\\u1B5A-\\u1B60]`,
    HINDU: `ᬒᬁ|[\\u1B00-\\u1B01]`,
    SPACE: `[ \\u200B\\u200C]`,
    CARIK: `[\\u1B5E]`,
  };
  export const REGEX = {
    /* Capturing Latin characters that corresponds to a valid Balinese glyph */
    CAPTURE_LATIN: [
      `(${LATIN.SPACE})`,
      `|`,
      `(${LATIN.DOT_COMMA})`,
      `|`,
      `(${LATIN.DIGITS})`,
      `|`,
      `(${LATIN.SUARA})`,
      `|`,
      `(${LATIN.HINDU})`,
      `|`,
      `(${LATIN.CONSONANTS})?`,
      `(?!${LATIN.SPACE}(?!${LATIN.VOWELS}))`,
      `(${LATIN.CONSONANTS})?`,
      `(${LATIN.VOWELS})`,
      // `(:?${LATIN.VOWELS})?`,
      `(${LATIN.CONSONANTS_TENGENAN})?`,
      `(?!${LATIN.VOWELS})`,
      `|`,
      `(${LATIN.CONSONANTS})`,
    ].join(""),
    /* Capturing Sundanese characters that corresponds to a valid Latin glyph */
    CAPTURE_BALI: [
      `(${BALI.SPACE})`,
      `|(?:${BALI.CARIK})?(${BALI.ANGKA})(?:${BALI.CARIK})?`,
      `|(${BALI.HINDU})`,
      `|(${BALI.WIANJANA})(${BALI.REREKAN})?(${BALI.ADEG})?(${BALI.VOWELS})?(${BALI.TENGENAN})?`,
      `|(${BALI.SUARA})(${BALI.TENGENAN})?`,
      `|(${BALI.PADA})`,
    ].join(""),
    CAPTURE_UNSTANDARD: [
      `(${LATIN.UNSTANDARD})`,
      `|(${LATIN.STANDARD})`,
      `|`,
      `(${LATIN.DOT_COMMA})`,
      `|`,
      `(${LATIN.DIGITS})`,
      `|`,
      `(${LATIN.HINDU})`,
    ].join(""),
  };
}

/* Various type of Sundanese characters, accessed with a key of Latin character */
namespace BaliChars {
  export const SUARA: CharacterMapping = {
    A: "ᬅ",
    I: "ᬇ",
    U: "ᬉ",
    E: "ᬏ",
    O: "ᬑ",
    AA: "ᬆ",
    II: "ᬈ",
    UU: "ᬊ",
    AI: "ᬐ",
    AU: "ᬒ",
    RX: "ᬌ",
    Rx: "ᬌ",
    LX: "ᬎ",
    Lx: "ᬎ",
    rx: "\u1B0B",
    lx: "\u1B0D",
  };
  export const WIANJANA: CharacterMapping = {
    k: "ᬓ",
    K: "ᬔ",
    g: "ᬕ",
    G: "ᬖ",
    ng: "ᬗ",
    c: "ᬘ",
    C: "ᬙ",
    j: "ᬚ",
    J: "ᬛ",
    ny: "ᬜ",
    y: "ᬬ",
    t: "ᬢ",
    T: "ᬝ",
    "^t": "ᬣ",
    "^T": "ᬞ",
    d: "ᬤ",
    D: "ᬟ",
    "^d": "ᬥ",
    "^D": "ᬠ",
    n: "ᬦ",
    N: "ᬡ",
    r: "ᬭ",
    s: "ᬲ",
    S: "ᬱ",
    sh: "ᬰ",
    p: "ᬧ",
    P: "ᬨ",
    b: "ᬩ",
    B: "ᬪ",
    m: "ᬫ",
    l: "ᬮ",
    w: "ᬯ",
    h: "ᬳ",
    f: "ᬧ",
    q: "ᬓ",
    v: "ᬧ",
    z: "ᬲ",
    "adeg-adeg": "\u1B44",
  };

  export const SASAK: CharacterMapping = {
    ...WIANJANA,
    f: "ᭈ",
    q: "ᭅ",
    v: "ᭉ",
    z: "ᭊ",
    KH: "ᭆ",
    TS: "ᭇ",
    SY: "ᭋ",
  };

  export const PANGANGGE_SUARA: CharacterMapping = {
    i: "\u1B36",
    u: "\u1B38",
    x: "\u1B42",
    e: "\u1B3E",
    o: "\u1B40",
    aa: "\u1B35",
    ii: "\u1B37",
    uu: "\u1B39",
    ai: "\u1B3F",
    au: "\u1B41",
    ae: "\u1B0F",
    ao: "\u1B33\u1B40",
    ia: "\u1B36\u1B2C",
    iu: "\u1B36\u1B2C\u1B38",
    ie: "\u1B36\u1B2C\u1B3E",
    io: "\u1B36\u1B2C\u1B40",
    ua: "\u1B38\u1B2F",
    ui: "\u1B38\u1B2F\u1B36",
    ue: "\u1B38\u1B2F\u1B3E",
    uo: "\u1B38\u1B2F\u1B40",
    ea: "\u1B3E\u1B2C",
    ei: "\u1B3E\u1B33\u1B36",
    eu: "\u1B3E\u1B33\u1B38",
    eo: "\u1B3E\u1B2C\u1B40",
    xa: "\u1B42\u1B33",
    xi: "\u1B42\u1B33\u1B36",
    xu: "\u1B42\u1B33\u1B38",
    xe: "\u1B42\u1B0F",
    xo: "\u1B42\u1B33\u1B40",
    oa: "\u1B40\u1B2F",
    oi: "\u1B40\u1B33\u1B36",
    ou: "\u1B40\u1B33\u1B38",
    oe: "\u1B40\u1B2F\u1B3E",
    UA: "\u1B44\u1B2F",
    IA: "\u1B44\u1B2C",
    rx: "\u1B3A",
    lx: "\u1B3C",
    Rx: "\u1B3B",
    Lx: "\u1B3D",
    // ro: "\u1B3B",
    // lo: "\u1B3D",
  };
  export const PANGANGGE_TENGENAN: CharacterMapping = {
    ng: "\u1B02",
    r: "\u1B03",
    h: "\u1B04",
  };
  export const ANGKA: CharacterMapping = {
    "1": "᭑",
    "2": "᭒",
    "3": "᭓",
    "4": "᭔",
    "5": "᭕",
    "6": "᭖",
    "7": "᭗",
    "8": "᭘",
    "9": "᭙",
    "0": "᭐",
  };
  export const PADA: CharacterMapping = {
    ",": "᭞",
    ".": "᭟",
    ":": "᭝",
    "/": "᭟᭜᭟",
    '"': "᭚",
    "|": "᭛",
  };
  export const HINDU_SIGN: CharacterMapping = {
    "*": "\u1B01",
    "~": "\u1B00",
    "@": "ᬒᬁ",
  };
  export const STANDARD_LATIN: CharacterMapping = {
    x: "ě",
    AA: "Ā",
    II: "Ī",
    UU: "Ū",
    AI: "Ai",
    AU: "Au",
    UA: "ua",
    IA: "ia",
    RX: "ṝě",
    LX: "ḹě",
    Rx: "ṝě",
    Lx: "ḹě",
    rx: "ṛě",
    lx: "ḷě",
    K: "kh",
    G: "gh",
    C: "ch",
    J: "jh",
    T: "ṭ",
    "^t": "ṭh",
    "^T": "th",
    D: "ḍ",
    "^d": "dh",
    "^D": "ḍh",
    N: "ṇ",
    S: "ṣ",
    sh: "ś",
    P: "ph",
    B: "bh",
    "@": "Oṁ",
    TS: "ts",
    SY: "sy",
    KH: "ḫ",
  };
}

/* Various type of Latin characters, accessed with a key of Sundanese character */
namespace LatinChars {
  export const SUARA: CharacterMapping = invertMapping(BaliChars.SUARA);
  export const WIANJANA: CharacterMapping = invertMapping(BaliChars.WIANJANA);
  WIANJANA["ᬓ"] = "k";
  WIANJANA["ᬧ"] = "p";
  WIANJANA["ᬲ"] = "s";
  export const SASAK: CharacterMapping = invertMapping(BaliChars.SASAK);
  export const PANGANGGE_TENGENAN: CharacterMapping = invertMapping(BaliChars.PANGANGGE_TENGENAN);
  export const PANGANGGE_SUARA: CharacterMapping = invertMapping(BaliChars.PANGANGGE_SUARA);
  export const ANGKA: CharacterMapping = invertMapping(BaliChars.ANGKA);
  export const PADA: CharacterMapping = invertMapping(BaliChars.PADA);
  export const HINDU_SIGN: CharacterMapping = invertMapping(BaliChars.HINDU_SIGN);
}

export { LatinChars, BaliChars, BaliConst };

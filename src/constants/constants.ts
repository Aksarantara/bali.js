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
    CONSONANTS: `\\^t|\\^T|\\^d|\\^D|ng|ny|sh|[hncrkdtswlpjymgbzfvqDNSTKGCPBJ]`, //
    CONSONANTS_TENGENAN: `ng|[rh]`,
    // CONSONANTS_SUALALITA: `dh|sh|DH|^T|^t|[DNSTKGCPBJ]`,
    CONSONANTS_WITHOUT_TENGENAN: `\\^t|\\^T|\\^d|\\^D|ny|sh|[nckdtswlpjymgbzfvqDNSTKGCPBJ]`, //
    DIGITS: `[\\d]`,
    DIGITS_PUNC: `[\\d]+|\\\/\[:()'"<>{}\]?!]`,
    HINDU: `OM|\\*|\\||\\~`,
    DOT_COMMA: `[.,\\/":]`,
    SPACE: `[ _]`,
    VOWELS: `aa|ai|au|ae|ao|ia|ii|iu|ie|io|ua|ui|uu|ue|uo|ea|ei|eu|eo|xa|xi|xu|xe|xo|oa|oi|ou|oe|UA|IA|[aiueox]`, //
    SUARA: `AA|II|UU|AI|AU|[AIUEO]`,
    // EXCEPT_SWARA: `[^AIUEO]|^AA|^II|^UU|^AI|^AU`,
    // CAPTURE_RESIDUE: "(?=[A-Za-zÀ-ÿ])(dh|ny|th|ng|kh|dz|sy|gh|NY|[hncrkdtswlpjymgbzfvNKTSPGB])?(dh|ny|th|ng|kh|dz|sy|gh|NY|[hncrkdtswlpjymgbzfvNKTSPGB])?([aiueoxAIUEOXÉÈéè])?",
  };
  /* Regex for various type of valid Sundanese characters glyph */
  const SUNDA = {
    ANGKA: `[\\u1BB0-\\u1BB9]`,
    NGALAGENA: `[\\u1B8A-\\u1BA0\\u1BAE\\u1BAF]`,
    NOT_SUNDA: `[^\\u1B80-\\u1BA8\\u1BAE-\\u1BB9]`,
    PIPA: `[|]`,
    RARANGKEN_SONORANT: `[\\u1BA1-\\u1BA3]`,
    RARANGKEN_VOWEL: `[\\u1BA4-\\u1BAA]`,
    RARANGKEN_FINAL: `[\\u1B80-\\u1B82]`,
    SWARA: `[\\u1B83-\\u1B89]`,
  };
  export const REGEX = {
    /* Capturing Latin characters that corresponds to a valid Balinese glyph */
    CAPTURE_LATIN: [
      `(${LATIN.SPACE})`,
      `|`,
      `(${LATIN.DIGITS_PUNC})`,
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
      `|`,
      `(${LATIN.DOT_COMMA})`,
    ].join(""),
    /* Capturing Sundanese characters that corresponds to a valid Latin glyph */
    CAPTURE_SUNDA: [
      `(?:${SUNDA.PIPA})?(${SUNDA.ANGKA})(?:${SUNDA.PIPA})?`,
      `|`,
      `(${SUNDA.NOT_SUNDA})`,
      `|`,
      `(?:(${SUNDA.NGALAGENA})(${SUNDA.RARANGKEN_SONORANT})?(${SUNDA.RARANGKEN_VOWEL})?`,
      `|(${SUNDA.SWARA}))`,
      `(${SUNDA.RARANGKEN_FINAL})?`,
    ].join(""),
  };
}

/* Various type of Sundanese characters, accessed with a key of Latin character */
namespace BalineseChars {
  export const SUARA: CharacterMapping = {
    A: "ᬅ",
    I: "ᬇ",
    U: "ᬉ",
    E: "ᬏ",
    O: "ᬑ",
    AA: "ᬆ",
    II: 'ᬈ',
    UU: 'ᬊ',
    AI: 'ᬐ',
    AU: 'ᬒ',
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
    rx: "\u1B0B",
    lx: "\u1B0D",
    // ro: "\u1B3B",
    // lo: "\u1B3D",
  };
  export const PANGANGGE_TENGENAN: CharacterMapping = {
    ng: "\u1B02",
    r: "\u1B03",
    h: "\u1B04",
  }
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
  }
  export const HINDU_SIGN: CharacterMapping = {
    "*": "\u1B01",
    "~": "\u1B00",
    "|": "᭛",
    "OM": "ᬒᬁ"
  }
}

/* Various type of Latin characters, accessed with a key of Sundanese character */
namespace LatinChars {
  export const SUARA: CharacterMapping = invertMapping(BalineseChars.SUARA);
  export const WIANJANA: CharacterMapping = invertMapping(BalineseChars.WIANJANA);
  export const PANGANGGE_TENGENAN: CharacterMapping = invertMapping(BalineseChars.PANGANGGE_TENGENAN);
  export const PANGANGGE_SUARA: CharacterMapping = invertMapping(BalineseChars.PANGANGGE_SUARA);
  export const ANGKA: CharacterMapping = invertMapping(BalineseChars.ANGKA);
  export const PADA: CharacterMapping = invertMapping(BalineseChars.PADA);
  export const HINDU_SIGN: CharacterMapping = invertMapping(BalineseChars.HINDU_SIGN);
}

export { LatinChars, BalineseChars, BaliConst };

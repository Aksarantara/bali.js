import { BaliChars } from "../constants/constants";

/**
 * @description Provides many helper function to get Sundanese unicode characters from Latin characters
 */
namespace BaliHelper {
  /**
   * @description Returns the corresponding main consonant character
   * @param char The character to be transliterated
   */
  export const getMain = (char: string, prev_char?: string): string => {
    if (char == null) return "";
    if (char in BaliChars.SUARA) return BaliChars.SUARA[char];
    if (char == "n" && prev_char == "\u1B03") return BaliChars.WIANJANA["N"];
    if (char in BaliChars.WIANJANA) return BaliChars.WIANJANA[char];
    return char;
  };

  /**
   * @description Returns the corresponding sonorant consonant character
   * @param char The character to be transliterated
   */
  export const getSonorant = (char: string): string => {
    if (char == null) return "";
    if (char in BaliChars.PANGANGGE_TENGENAN) return BaliChars.PANGANGGE_TENGENAN[char];
    return char;
  };

  /**
   * @description Returns the corresponding rarangken character
   * @param char The character to be transliterated
   */
  export const getSuara = (char: string): string => {
    if (char == null) return "";
    if (char === "a") return "";
    if (char in BaliChars.PANGANGGE_SUARA) return BaliChars.PANGANGGE_SUARA[char];
    return char;
  };

  /**
   * @description Returns the corresponding pasangan consonant character
   * @param char The character to be transliterated
   */
  export const getPasangan = (char: string): string => {
    if (char == null) return "";
    if (char in BaliChars.WIANJANA) return BaliChars.WIANJANA["adeg-adeg"] + BaliChars.WIANJANA[char];
    return char;
  };

  /**
   * @description Returns the corresponding final (muted) consonant character
   * @param char The character to be transliterated
   */
  export const getFinal = (char: string): string => {
    if (char == null) return "";
    if (char in BaliChars.WIANJANA) return BaliChars.WIANJANA[char] + BaliChars.WIANJANA["adeg-adeg"];
    return char;
  };

  /**
   * @description Returns the corresponding Balinese punctuation character
   * @param char The character to be transliterated
   */
  export const getPada = (char: string): string => {
    if (char == null) return "";
    if (char in BaliChars.PADA) return BaliChars.PADA[char];
    return char;
  };

  /**
   * @description Returns the corresponding Balinese special Hindu sign
   * @param char The character to be transliterated
   */
  export const getHindu = (char: string): string => {
    if (char == null) return "";
    if (char in BaliChars.HINDU_SIGN) return BaliChars.HINDU_SIGN[char];
    return char;
  };

  /**
   * @description Returns the corresponding Sundanese number character
   * @param char The character to be transliterated
   */
  export const getNumber = (char: string): string => {
    if (char == null) return "";
    if (char in BaliChars.ANGKA) return BaliChars.ANGKA[char];
    return char;
  };
}

export default BaliHelper;

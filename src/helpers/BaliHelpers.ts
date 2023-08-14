import { BalineseChars } from "../constants/constants";

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
    if (char in BalineseChars.SUARA) return BalineseChars.SUARA[char];
    if (char == "n" && prev_char == "\u1B03") return BalineseChars.WIANJANA["N"]
    if (char in BalineseChars.WIANJANA) return BalineseChars.WIANJANA[char];
    return char;
  };

  /**
   * @description Returns the corresponding sonorant consonant character
   * @param char The character to be transliterated
   */
  export const getSonorant = (char: string): string => {
    if (char == null) return "";
    if (char in BalineseChars.PANGANGGE_TENGENAN) return BalineseChars.PANGANGGE_TENGENAN[char];
    return char;
  };

  /**
   * @description Returns the corresponding rarangken character
   * @param char The character to be transliterated
   */
  export const getSuara = (char: string): string => {
    if (char == null) return "";
    if (char === "a") return "";
    if (char === "^e") return BalineseChars.PANGANGGE_SUARA["e"];
    if (char in BalineseChars.PANGANGGE_SUARA) return BalineseChars.PANGANGGE_SUARA[char];
    return char;
  };

    /**
   * @description Returns the corresponding pasangan consonant character
   * @param char The character to be transliterated
   */
    export const getPasangan = (char: string): string => {
      if (char == null) return "";
      if (char in BalineseChars.WIANJANA) return BalineseChars.WIANJANA["adeg-adeg"] + BalineseChars.WIANJANA[char];
      return char;
    };

  /**
   * @description Returns the corresponding final (muted) consonant character
   * @param char The character to be transliterated
   */
  export const getFinal = (char: string): string => {
    if (char == null) return "";
    if (char in BalineseChars.WIANJANA) return BalineseChars.WIANJANA[char] + BalineseChars.WIANJANA["adeg-adeg"];
    return char;
  };

  /**
   * @description Returns the corresponding Balinese punctuation character
   * @param char The character to be transliterated
   */
  export const getPada = (char: string): string => {
    if (char == null) return "";
    if (char in BalineseChars.PADA) return BalineseChars.PADA[char];
    return char;
  };

  /**
   * @description Returns the corresponding Balinese special Hindu sign
   * @param char The character to be transliterated
   */
  export const getHindu = (char: string): string => {
    if (char == null) return "";
    if (char in BalineseChars.HINDU_SIGN) return BalineseChars.HINDU_SIGN[char];
    return char;
  };

  /**
   * @description Returns the corresponding Balinese special Hindu sign
   * @param char The character to be transliterated
   */
  export const getSpace = (char: string): string => {
    if (char == null) return "";
    if (char in BalineseChars.SPACE) return BalineseChars.SPACE[char];
    return char;
  };

  /**
   * @description Returns the corresponding Sundanese number character
   * @param char The character to be transliterated
   */
  export const getNumber = (char: string): string => {
    if (char == null) return "";
    if (char in BalineseChars.ANGKA) return BalineseChars.ANGKA[char];
    return char;
  };
}

export default BaliHelper;

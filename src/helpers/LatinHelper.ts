import { LatinChars } from "../constants/constants";

/**
 * @description Provides many helper function to get Latin characters from Sundanese characters
 */
namespace LatinHelper {
  /**
   * @description Returns the corresponding Ngalagena and Swara character
   * @param char The character to be transliterated
   */
  export const getLetter = (char: string): string => {
    if (char == null) return "";
    if (char in LatinChars.SUARA) return LatinChars.SUARA[char];
    if (char in LatinChars.WIANJANA) return LatinChars.WIANJANA[char];
    return char;
  };

  /**
   * @description Returns the corresponding sonorant pasangan character
   * @param char The character to be transliterated
   */
  export const getTengenan = (char: string): string => {
    if (char == null) return "";
    if (char in LatinChars.PANGANGGE_TENGENAN) return LatinChars.PANGANGGE_TENGENAN[char];
    return char;
  };

  export const getVowel = (char: string): string => {
    if (char == null) return "";
    if (char in LatinChars.PANGANGGE_SUARA) return LatinChars.PANGANGGE_SUARA[char];
    return char;
  };

  /**
   * @description Returns the corresponding pada character
   * @param char The character to be transliterated
   */
  export const getPada = (char: string): string => {
    if (char == null) return "";
    if (char in LatinChars.PADA) return LatinChars.PADA[char];
    return char;
  };

  /**
   * @description Returns the corresponding Latin number character
   * @param char The character to be transliterated
   */
  export const getNumber = (char: string): string => {
    if (char == null) return "";
    if (char in LatinChars.ANGKA) return LatinChars.ANGKA[char];
    return char;
  };

  /**
   * @description Returns the corresponding Miscellaneous character
   * @param char The character to be transliterated
   */
  export const getHindu = (char: string): string => {
    if (char == null) return "";
    if (char in LatinChars.HINDU_SIGN) return LatinChars.HINDU_SIGN[char];
    return char;
  };
}

export default LatinHelper;

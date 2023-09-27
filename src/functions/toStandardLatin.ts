import { preferNative as matchAll } from "string-match-all";
import { BaliConst } from "../constants/constants";
import LatinHelper from "../helpers/LatinHelper";
import SyllableBuilder from "../helpers/SyllableBuilder";

/**
 * @function toStandardLatin
 * @description Transliterate a string in Javanese characters into its corresponding form in Latin.
 * @param input The input string in Javanese script to be converted.
 * @returns The converted string in Latin.
 * @example
 * toLatin("ꦏꦂꦪ")
 * // => karya
 */
export const toStandardLatin = (input: string): string => {
  /* Trim input */
  input = input.trim();

  /*
   * Here, we break down the input on a per-syllable basis using RegEx,
   * iterate and feed it into the syllable transliterator,
   * and append the result to the output string.
   */
  const syllables = [...matchAll(input, RegExp(BaliConst.REGEX.CAPTURE_UNSTANDARD, "g"))];

  let output = "";
  if (syllables.length > 0) {
    for (const group of syllables) {
      output += getTransliteration(group);
    }
  }
  if (output !== "") return output.replace(/\s{2,}/g, " ");
  return input;
};

/**
 * @description Converts the already broken down syllable into Sundanese script
 */
const getTransliteration = (groups: RegExpMatchArray): string => {
  /* Assign each capture groups into variable names */
  const [unstandard, standard, dotcomma, digits, hindu] = groups.slice(1, 6);
  // console.log(
  //   `sp: ${space}, ctl: ${rerekan}, agk: ${angka}, ng: ${wianjana}, pgk: ${adeg}, vw: ${vowel}, sf: ${tengenan}, sw: ${suara}, pd: ${pada}`
  // );

  const builder = new SyllableBuilder();

  /* Converts syllable containing numbers */
  if (unstandard != null) {
    return builder.build(LatinHelper.getStandardLatin(unstandard));
  }
  if (standard != null) {
    return builder.build(standard);
  }
  if (dotcomma != null) {
    return builder.build(dotcomma);
  }
  if (digits != null) {
    return builder.build(digits);
  }
  if (hindu != null) {
    return builder.build(hindu);
  }

  return builder.build();
};

export default toStandardLatin;

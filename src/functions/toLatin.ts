import { preferNative as matchAll } from "string-match-all";
import { BaliConst } from "../constants/constants";
import LatinHelper from "../helpers/LatinHelper";
import SyllableBuilder from "../helpers/SyllableBuilder";

/**
 * @function toLatin
 * @description Transliterate a string in Javanese characters into its corresponding form in Latin.
 * @param input The input string in Javanese script to be converted.
 * @returns The converted string in Latin.
 * @example
 * toLatin("ꦏꦂꦪ")
 * // => karya
 */
export const toLatin = (input: string, reversible: boolean = true, sasak: boolean = false): string => {
  /* Trim input */
  input = input.trim();

  /*
   * Here, we break down the input on a per-syllable basis using RegEx,
   * iterate and feed it into the syllable transliterator,
   * and append the result to the output string.
   */
  const syllables = [...matchAll(input, RegExp(BaliConst.REGEX.CAPTURE_BALI, "g"))];

  let output = "";
  if (syllables.length > 0) {
    for (const group of syllables) {
      output += getTransliteration(group, reversible, sasak);
    }
  }
  return output.replace(/\s{2,}/g, " ");
};

/**
 * @description Converts the already broken down syllable into Sundanese script
 */
const getTransliteration = (groups: RegExpMatchArray, reversible: boolean = true, sasak: boolean = false): string => {
  /* Assign each capture groups into variable names */
  const [space, angka, hindu, wianjana, rerekan, adeg, vowel, tengenan, suara, tengenan2, pada] = groups.slice(1, 12);
  // console.log(
  //   `sp: ${space}, ctl: ${rerekan}, agk: ${angka}, ng: ${wianjana}, pgk: ${adeg}, vw: ${vowel}, sf: ${tengenan}, sw: ${suara}, pd: ${pada}`
  // );

  const builder = new SyllableBuilder(reversible);

  /* Converts syllable containing numbers */
  if (angka != null) {
    return builder.build(LatinHelper.getNumber(angka));
  }

  /* Converts syllable containing letters */
  if (wianjana != null) {
    /* Add cecak telu to get loan letter if cecak telu indeed exists in the syllable */
    builder.add(LatinHelper.getLetter(wianjana + (rerekan ?? ""), sasak));

    /* if there's no adeg, there might be consonant sign or sandhangan*/
    if (adeg == null) {
      /* Converts sandhangan */
      if (vowel != null) {
        builder.add(LatinHelper.getVowel(vowel));
      } else {
        builder.add("a");
      }

      /* Converts final sandhangan */
      if (tengenan != null) {
        builder.add(LatinHelper.getTengenan(tengenan));
      }
    }
  }

  if (suara != null) {
    /* Converts suara */
    builder.add(LatinHelper.getLetter(suara));
    if (tengenan2 != null) {
      builder.add(LatinHelper.getTengenan(tengenan2));
    }
  }

  if (pada != null) {
    /* Converts pada */
    builder.add(LatinHelper.getPada(pada));
  }

  if (space != null) {
    /* Modern Carakan is not scriptio continuo, so add space if it exists */
    builder.add(" ");
  }

  if (hindu != null) {
    builder.add(LatinHelper.getHindu(hindu));
  }

  return builder.build();
};

export default toLatin;

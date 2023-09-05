import { preferNative as matchAll } from "string-match-all";
import BaliHelper from "../helpers/BaliHelpers";
import SyllableBuilder from "../helpers/SyllableBuilder";
import { BaliConst } from "../constants/constants";

/**
 * @function toBalinese
 * @description Transliterate a string in Latin characters into its corresponding form in Sundanese script.
 * @param input The input string in Latin to be converted.
 * @returns The converted string in Sundanese script.
 * @example
 * toSundanese("Wih, geulis euy!")
 * // => ᮝᮤᮂ, ᮌᮩᮜᮤᮞ᮪ ᮉᮚ᮪!
 */
const toBalinese = (input: string): string => {
  /* Normalize input */
  input = input.trim();

  /*
   * Here, we break down the input on a per syllable basis using RegEx,
   * iterate and feed it into the syllable converter,
   * and append the result to the output string.
   */
  const syllables = [...matchAll(input, RegExp(BaliConst.REGEX.CAPTURE_LATIN, "g"))];

  let output = "";
  if (syllables.length > 0) {
    for (const group of syllables) {
      output += getTransliteration(group, output.charAt(output.length-1));
    }
  }
  return output;
};

/**
 * @description Converts the already broken down syllable into Sundanese script
 */
const getTransliteration = (groups: RegExpMatchArray, prev_char: string): string => {
  /* Assign each capture groups into variable names */
  let [
    space,
    digit_punc,
    suara,
    hindu,
    consonant,
    pasangan,
    vowel,
    tengenan,
    consonantStandalone,
    dotcomma,
  ] = groups.slice(1, 10);
  console.log(
    `
    space: ${space},
    digpunc: ${digit_punc},
    suara: ${suara},
    hnd: ${hindu},
    cons: ${consonant},
    psgn: ${pasangan},
    vow: ${vowel},
    teng: ${tengenan},
    consS: ${consonantStandalone},
    dot: ${dotcomma}`
  )

  const builder = new SyllableBuilder();

  if (space != null) {
    if (space == " ") return builder.build("\u200B")
    if (space == "_") return builder.build("")
  }

  /* Converts syllable containing numbers */
  if (digit_punc != null) {
    if (/\d/.test(digit_punc)) {
      let numbers = "";
      for (const each of digit_punc) {
        numbers += BaliHelper.getNumber(each);
      }
      return builder.build("᭞" + numbers + "᭞");
    }
    return builder.build(BaliHelper.getPada(digit_punc));
  }

  if (suara != null) {
    return builder.build(BaliHelper.getMain(suara))
  }

  if (hindu != null) {
    return builder.build(BaliHelper.getFinal(hindu))
  }

  /* Converts syllable containing main letters */
  if (consonantStandalone == null) {
    if (consonant != null) {
      if (consonant == "n" && (pasangan == "c" || pasangan == "j")) {consonant = "ny"}
      else if (consonant == "s" && pasangan == "c") {consonant = "sh"}
      else if (consonant == "d" && pasangan == "ny") {consonant = "j"}
      else if (consonant == "s" && pasangan == "T") {consonant = "S"}
      else if (consonant == "n" && pasangan == "B") {consonant = "m"}
      else if (pasangan == "n" && consonant == "r") {pasangan = "N"}
      else if (pasangan == "r" && vowel == "x") {vowel = "rx"; pasangan = "";}
      else if (pasangan == "l" && vowel == "x") {vowel = "lx"; pasangan = "";}
      else if (consonant == "r" && vowel == "x") {vowel = "rx"; consonant = "";}
      else if (consonant == "l" && vowel == "x") {vowel = "lx"; consonant = "";}
      /* Add main consonant */
      builder.add(BaliHelper.getMain(consonant, prev_char));
      /* Add consonant pasangan */
      if (pasangan != null) {
        builder.add(BaliHelper.getPasangan(pasangan));
      }
      /* Add vowel sign */
      builder.add(BaliHelper.getSuara(vowel));
    } else {
      /* Add standalone vowel character */
      builder.add(BaliHelper.getMain("h"));
      builder.add(BaliHelper.getSuara(vowel));
    }
    /* Add sonorant */
    if (tengenan != null) {
      builder.add(BaliHelper.getSonorant(tengenan));
    }
  } else {
    /* Add muted standalone consonant */
    builder.add(BaliHelper.getFinal(consonantStandalone));
  }

  if (dotcomma != null) {
    return builder.build(BaliHelper.getPada(dotcomma))
  }

  return builder.build();
};

export default toBalinese;

import { BaliChars } from "../constants/constants";

/**
 * @description A simple class that helps to compile and build the transliterated syllable.
 */

const toStandard = (transliteration: string): string => {
  if (transliteration == null) return "";
  if (transliteration in BaliChars.STANDARD_LATIN) return BaliChars.STANDARD_LATIN[transliteration];
  return transliteration;
};

class SyllableBuilder {
  result: string;
  reversible: boolean;

  constructor(reversible: boolean = true) {
    this.result = "";
    this.reversible = reversible;
  }
  add(input: string): void {
    if (this.reversible) {
      this.result += input;
    } else {
      this.result += toStandard(input);
    }
  }
  build(input?: string): string {
    if (input && this.reversible) this.result = input;
    else if (input && !!this.reversible) this.result = toStandard(input);
    return this.result;
  }
}

export default SyllableBuilder;

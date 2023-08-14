import { toBalinese } from "../src";

describe("Basic functionality tests", () => {
  // it("should convert all basic Wianjana", () => {
  //   const result = toBalinese("kaKagaGa ngacaCaja Janyayata TadaDana NarasaSa shapaPaba Bamalawaha faqavaza");
  //   const expected = "ᬓᬔᬕᬖᬗᬘᬙᬚᬛᬜᬬᬢᬝᬤᬟᬦᬡᬭᬲᬱᬰᬧᬨᬩᬪᬫᬮᬯᬳᬧᬓᬧᬲ";
  //   expect(result).toEqual(expected);
  // });

  // it("should convert all ^Wianjana", () => {
  //   const result = toBalinese("^ta^Ta ^da^Da");
  //   const expected = "ᬣᬞᬥᬠ";
  //   expect(result).toEqual(expected);
  // });

  // it("should convert all Aksara", () => {
  //   const result = toBalinese("A IUE OAAIIUUAIAU");
  //   const expected = "ᬅᬇᬉᬏᬑᬆᬈᬊᬐᬒ";
  //   expect(result).toEqual(expected);
  // });

  it("should convert Suara, Wianjana, Pasangan, and Pangangge Suara and Tengenan", () => {
    const result = toBalinese("Aku_p^ernah_naik_prahu_angin_s^eharga_17_milyar_b^ersama_s^eekor_anjing");
    const expected = "ᬅᬓᬸ​ ᬧᭂᬃᬡᬄ​ ᬦᬿᬓ᭄​ ᬧ᭄ᬭᬳᬸ​ ᬳᬗᬶᬦ᭄​ ᬲᭂᬳᬃᬕ​ ᭞᭑᭗᭞ ​ᬫᬶᬮ᭄ᬬᬃ​ ᬩᭂᬃᬲᬫ​ ᬲᭂᬏᬓᭀᬃ​ ᬳᬜ᭄ᬚᬶᬂ";
    expect(result).toEqual(expected);
  });
});

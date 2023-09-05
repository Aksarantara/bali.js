import { toBalinese } from "../src";

describe("Basic functionality tests", () => {
//  it("should convert all basic Wianjana", () => {
//    const result = toBalinese("kaKagaGa_ngacaCaja_Janyayata_TadaDana_NarasaSa_shapaPaba_Bamalawaha_faqavaza");
//    const expected = "ᬓᬔᬕᬖᬗᬘᬙᬚᬛᬜᬬᬢᬝᬤᬟᬦᬡᬭᬲᬱᬰᬧᬨᬩᬪᬫᬮᬯᬳᬧᬓᬧᬲ";
//    expect(result).toEqual(expected);
//  });

//  it("should convert all ^Wianjana", () => {
//    const result = toBalinese("^ta^Ta_^da^Da");
//    const expected = "ᬣᬞᬥᬠ";
//    expect(result).toEqual(expected);
//  });

//  it("should convert all Aksara", () => {
//    const result = toBalinese("A_IUE_OAAIIUUAIAU");
//    const expected = "ᬅᬇᬉᬏᬑᬆᬈᬊᬐᬒ";
//    expect(result).toEqual(expected);
//  });
//
    it("should convert Suara, Wianjana, Pasangan, and Pangangge Suara and Tengenan", () => {
      const result = toBalinese("Aku dan beni pxrnah naik prahu angin sxharga 17 milyar bxrsama ikan pindang");
      const expected = "ᬅᬓᬸ​ᬤᬦ᭄​ᬩᬾᬦᬶ​ᬧᭂᬃᬡᬄ​ᬦᬿᬓ᭄​ᬧ᭄ᬭᬳᬸ​ᬳᬗᬶᬦ᭄​ᬲᭂᬳᬃᬕ​᭞᭑᭗᭞​ᬫᬶᬮ᭄ᬬᬃ​ᬩᭂᬃᬲᬫ​ᬳᬶᬓᬦ᭄\u200Bᬧᬶᬦ᭄ᬤᬂ";
      expect(result).toEqual(expected);
    });

    it("should convert middle vocal", () => {
      const result = toBalinese("baakaisaumaelao tiikiariupiecio duunualuipuetuo sxekor sxorang sximan sxagama sxupil meabeikeuteo poajoilouroe bUAya sIAk");
      const expected = "ᬩᬵᬓᬿᬲᭁᬫᬏᬮᬳᭀ​ᬢᬷᬓᬶᬬᬭᬶᬬᬸᬧᬶᬬᬾᬘᬶᬬᭀ​ᬤᬹᬦᬸᬯᬮᬸᬯᬶᬧᬸᬯᬾᬢᬸᬯᭀ​ᬲᭂᬏᬓᭀᬃ​ᬲᭂᬳᭀᬭᬂ​ᬲᭂᬳᬶᬫᬦ᭄​ᬲᭂᬳᬕᬫ​ᬲᭂᬳᬸᬧᬶᬮ᭄​ᬫᬾᬬᬩᬾᬳᬶᬓᬾᬳᬸᬢᬾᬬᭀ​ᬧᭀᬯᬚᭀᬳᬶᬮᭀᬳᬸᬭᭀᬯᬾ​ᬩ᭄ᬯᬬ​ᬲ᭄ᬬᬓ᭄";
      expect(result).toEqual(expected);
    });

    it("should convert special assimilation cases", () => {
      const result = toBalinese("prabu kxrxng plxcing anjing pascad yadnya karna dusTa tanBak");
      const expected = "ᬧ᭄ᬭᬩᬸ​ᬓᭂᬋᬂ​ᬧᬍᬘᬶᬂ​ᬳᬜ᭄ᬚᬶᬂ​ᬧᬰ᭄ᬘᬤ᭄​ᬬᬚ᭄ᬜ​ᬓᬃᬡ​ᬤᬸᬱ᭄ᬝ​ᬢᬫ᭄ᬪᬓ᭄";
      expect(result).toEqual(expected);
    });

    it("should convert numbers and signs", () => {
      const result = toBalinese('"pada 17 Agustus, 1945: Indonesia merdeka./')
      const expected = "᭚ᬧᬤ​᭞᭑᭗᭞​ᬅᬕᬸᬲ᭄ᬢᬸᬲ᭄​᭞᭑᭙᭔᭕᭞​᭝​ᬇᬦ᭄ᬤᭀᬦᬾᬲᬶ​ᬬ᭟​ᬫᬾᬃᬤᬾᬓ᭟​᭜​᭟"
      expect(result).toEqual(expected);
    })
});

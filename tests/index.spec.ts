import { toBalinese, toLatin, toStandardLatin } from "../src";

describe("Basic functionality tests", () => {
  it("should convert all basic Wianjana", () => {
    const result = toBalinese("kaKagaGa_ngacaCaja_Janyayata_TadaDana_NarasaSa_shapaPaba_Bamalawaha_faqavaza");
    const expected = "ᬓᬔᬕᬖᬗᬘᬙᬚᬛᬜᬬᬢᬝᬤᬟᬦᬡᬭᬲᬱᬰᬧᬨᬩᬪᬫᬮᬯᬳᬧᬓᬧᬲ";
    expect(result).toEqual(expected);
  });

  it("should convert all ^Wianjana", () => {
    const result = toBalinese("^ta^Ta_^da^Da");
    const expected = "ᬣᬞᬥᬠ";
    expect(result).toEqual(expected);
  });

  it("should convert all Aksara", () => {
    const result = toBalinese("A_IUE_OAAIIUUAIAU");
    const expected = "ᬅᬇᬉᬏᬑᬆᬈᬊᬐᬒ";
    expect(result).toEqual(expected);
  });

  it("should convert Suara, Wianjana, Pasangan, and Pangangge Suara and Tengenan", () => {
    const result = toBalinese("Aku dan beni pxrnah naik prahu angin sxharga 17 milyar bxrsama ikan pindang");
    const expected = "ᬅᬓᬸ​ᬤᬦ᭄​ᬩᬾᬦᬶ​ᬧᭂᬃᬡᬄ​ᬦᬿᬓ᭄​ᬧ᭄ᬭᬳᬸ​ᬳᬗᬶᬦ᭄​ᬲᭂᬳᬃᬕ​᭞᭑᭗᭞​ᬫᬶᬮ᭄ᬬᬃ​ᬩᭂᬃᬲᬫ​ᬳᬶᬓᬦ᭄\u200Bᬧᬶᬦ᭄ᬤᬂ";
    expect(result).toEqual(expected);
  });

  it("should convert middle vocal", () => {
    const result = toBalinese(
      "baakaisaumaelao tiikiariupiecio duunualuipuetuo sxekor sxorang sximan sxagama sxupil meabeikeuteo poajoilouroe bUAya sIAk"
    );
    const expected =
      "ᬩᬵᬓᬿᬲᭁᬫᬏᬮᬳᭀ​ᬢᬷᬓᬶᬬᬭᬶᬬᬸᬧᬶᬬᬾᬘᬶᬬᭀ​ᬤᬹᬦᬸᬯᬮᬸᬯᬶᬧᬸᬯᬾᬢᬸᬯᭀ​ᬲᭂᬏᬓᭀᬃ​ᬲᭂᬳᭀᬭᬂ​ᬲᭂᬳᬶᬫᬦ᭄​ᬲᭂᬳᬕᬫ​ᬲᭂᬳᬸᬧᬶᬮ᭄​ᬫᬾᬬᬩᬾᬳᬶᬓᬾᬳᬸᬢᬾᬬᭀ​ᬧᭀᬯᬚᭀᬳᬶᬮᭀᬳᬸᬭᭀᬯᬾ​ᬩ᭄ᬯᬬ​ᬲ᭄ᬬᬓ᭄";
    expect(result).toEqual(expected);
  });

  it("should convert special assimilation cases", () => {
    const result = toBalinese("prabu kxrxng plxcing anjing pascad yadnya karna dusTa tanBak RXngi LXngi bRxsaLxm");
    const expected = "ᬧ᭄ᬭᬩᬸ​ᬓᭂᬋᬂ​ᬧᬼᬘᬶᬂ​ᬳᬜ᭄ᬚᬶᬂ​ᬧᬰ᭄ᬘᬤ᭄​ᬬᬚ᭄ᬜ​ᬓᬃᬡ​ᬤᬸᬱ᭄ᬝ​ᬢᬫ᭄ᬪᬓ᭄​ᬌᬗᬶ​ᬎᬗᬶ​ᬩᬻᬲᬎᬫ᭄";
    expect(result).toEqual(expected);
  });

  it("should convert all Sasak", () => {
    const result = toBalinese("faqivuzxng miTSKHoSY", true);
    const expected = "ᭈᭅᬶᭉᬸᭊᭂᬂ​ᬫᬶᭇ᭄ᭆᭀᭋ᭄";
    expect(result).toEqual(expected);
  });

  it("should convert punctuations", () => {
    const result = toBalinese('pi.Sx,|/*~":@');
    const expected = "ᬧᬶ᭟ᬱᭂ᭞᭛᭟᭜᭟ᬁᬀ᭚᭝ᬒᬁ";
    expect(result).toEqual(expected);
  });
});

describe("Basic functionality tests", () => {
  it("should convert all basic Wianjana toLatin", () => {
    const result = toLatin("ᬓᬔᬕᬖᬗᬘᬙᬚᬛᬜᬬᬢᬝᬤᬟᬦᬡᬭᬲᬱᬰᬧᬨᬩᬪᬫᬮᬯᬳᬧᬓᬧᬲ");
    const expected = "kaKagaGangacaCajaJanyayataTadaDanaNarasaSashapaPabaBamalawahapakapasa";
    expect(result).toEqual(expected);
  });

  it("should convert all ^Wianjana", () => {
    const result = toLatin("ᬣᬞᬥᬠ");
    const expected = "^ta^Ta^da^Da";
    expect(result).toEqual(expected);
  });

  it("should convert all Aksara", () => {
    const result = toLatin("ᬅᬇᬉᬏᬑᬆᬈᬊᬐᬒ");
    const expected = "AIUEOAAIIUUAIAU";
    expect(result).toEqual(expected);
  });

  it("should convert Suara, Wianjana, Pasangan, and Pangangge Suara and Tengenan", () => {
    const result = toLatin("ᬅᬓᬸ​ᬤᬦ᭄​ᬩᬾᬦᬶ​ᬧᭂᬃᬡᬄ​ᬦᬿᬓ᭄​ᬧ᭄ᬭᬳᬸ​ᬳᬗᬶᬦ᭄​ᬲᭂᬳᬃᬕ​᭞᭑᭗᭞​ᬫᬶᬮ᭄ᬬᬃ​ᬩᭂᬃᬲᬫ​ᬳᬶᬓᬦ᭄\u200Bᬧᬶᬦ᭄ᬤᬂ");
    const expected = "Aku dan beni pxrNah naik prahu hangin sxharga 17 milyar bxrsama hikan pindang";
    expect(result).toEqual(expected);
  });

  it("should convert middle vocal", () => {
    const result = toLatin(
      "ᬩᬵᬓᬿᬲᭁᬫᬏᬮᬳᭀ​ᬢᬷᬓᬶᬬᬭᬶᬬᬸᬧᬶᬬᬾᬘᬶᬬᭀ​ᬤᬹᬦᬸᬯᬮᬸᬯᬶᬧᬸᬯᬾᬢᬸᬯᭀ​ᬲᭂᬏᬓᭀᬃ​ᬲᭂᬳᭀᬭᬂ​ᬲᭂᬳᬶᬫᬦ᭄​ᬲᭂᬳᬕᬫ​ᬲᭂᬳᬸᬧᬶᬮ᭄​ᬫᬾᬬᬩᬾᬳᬶᬓᬾᬳᬸᬢᬾᬬᭀ​ᬧᭀᬯᬚᭀᬳᬶᬮᭀᬳᬸᬭᭀᬯᬾ​ᬩ᭄ᬯᬬ​ᬲ᭄ᬬᬓ᭄"
    );
    const expected =
      "baakaisaumaElaho tiikiyariyupiyeciyo duunuwaluwipuwetuwo sxEkor sxhorang sxhiman sxhagama sxhupil meyabehikehuteyo powajohilohurowe bwaya syak";
    expect(result).toEqual(expected);
  });

  it("should convert special assimilation cases", () => {
    const result = toLatin("ᬧ᭄ᬭᬩᬸ​ᬓᭂᬋᬂ​ᬧᬼᬘᬶᬂ​ᬳᬜ᭄ᬚᬶᬂ​ᬧᬰ᭄ᬘᬤ᭄​ᬬᬚ᭄ᬜ​ᬓᬃᬡ​ᬤᬸᬱ᭄ᬝ​ᬢᬫ᭄ᬪᬓ᭄​ᬌᬗᬶ​ᬎᬗᬶ​ᬩᬻᬲᬎᬫ᭄");
    const expected = "prabu kxrxng plxcing hanyjing pashcad yajnya karNa duSTa tamBak Rxngi Lxngi bRxsaLxm";
    expect(result).toEqual(expected);
  });

  it("should convert all Sasak", () => {
    const result = toLatin("ᭈᭅᬶᭉᬸᭊᭂᬂ​ᬫᬶᭇ᭄ᭆᭀᭋ᭄", true, true);
    const expected = "faqivuzxng miTSKHoSY";
    expect(result).toEqual(expected);
  });

  it("should convert punctuations", () => {
    const result = toLatin("ᬧᬶ᭟ᬱᭂ᭞᭛᭟᭜᭟ᬁᬀ᭚᭝ᬒᬁ");
    const expected = 'pi.Sx,|/*~":@';
    expect(result).toEqual(expected);
  });
});

describe("Basic functionality tests toStandardLatin", () => {
  it("should convert all basic Wianjana", () => {
    const result = toLatin("ᬓᬔᬕᬖᬗᬘᬙᬚᬛᬜᬬᬢᬝᬤᬟᬦᬡᬭᬲᬱᬰᬧᬨᬩᬪᬫᬮᬯᬳᬧᬓᬧᬲ", false);
    const expected = "kakhagaghangacachajajhanyayataṭadaḍanaṇarasaṣaśapaphababhamalawahapakapasa";
    expect(result).toEqual(expected);
  });

  it("toStandardLatin should work", () => {
    const result = toStandardLatin(
      "AAIIUUAIAUKagaGangacaCajaJanyayataTa daDanaNarasaSashapaPabaBamaRXLXrxlx^ta^Ta^da^DaSYxKHx@17./"
    );
    const expected =
      "ĀĪŪAiAukhagaghangacachajajhanyayataṭa daḍanaṇarasaṣaśapaphababhamaṝěḹěṛěḷěṭhathadhaḍhasyěḫěOṁ17./";
    expect(result).toEqual(expected);
  });

  it("should convert all ^Wianjana", () => {
    const result = toLatin("ᬣᬞᬥᬠ", false);
    const expected = "ṭhathadhaḍha";
    expect(result).toEqual(expected);
  });

  it("should convert all Aksara", () => {
    const result = toLatin("ᬅᬇᬉᬏᬑᬆᬈᬊᬐᬒ", false);
    const expected = "AIUEOĀĪŪAiAu";
    expect(result).toEqual(expected);
  });

  it("should convert Suara, Wianjana, Pasangan, and Pangangge Suara and Tengenan", () => {
    const result = toLatin("ᬅᬓᬸ​ᬤᬦ᭄​ᬩᬾᬦᬶ​ᬧᭂᬃᬡᬄ​ᬦᬿᬓ᭄​ᬧ᭄ᬭᬳᬸ​ᬳᬗᬶᬦ᭄​ᬲᭂᬳᬃᬕ​᭞᭑᭗᭞​ᬫᬶᬮ᭄ᬬᬃ​ᬩᭂᬃᬲᬫ​ᬳᬶᬓᬦ᭄\u200Bᬧᬶᬦ᭄ᬤᬂ", false);
    const expected = "Aku dan beni pěrṇah naik prahu hangin sěharga milyar běrsama hikan pindang";
    expect(result).toEqual(expected);
  });

  it("should convert middle vocal", () => {
    const result = toLatin(
      "ᬩᬵᬓᬿᬲᭁᬫᬏᬮᬳᭀ​ᬢᬷᬓᬶᬬᬭᬶᬬᬸᬧᬶᬬᬾᬘᬶᬬᭀ​ᬤᬹᬦᬸᬯᬮᬸᬯᬶᬧᬸᬯᬾᬢᬸᬯᭀ​ᬲᭂᬏᬓᭀᬃ​ᬲᭂᬳᭀᬭᬂ​ᬲᭂᬳᬶᬫᬦ᭄​ᬲᭂᬳᬕᬫ​ᬲᭂᬳᬸᬧᬶᬮ᭄​ᬫᬾᬬᬩᬾᬳᬶᬓᬾᬳᬸᬢᬾᬬᭀ​ᬧᭀᬯᬚᭀᬳᬶᬮᭀᬳᬸᬭᭀᬯᬾ​ᬩ᭄ᬯᬬ​ᬲ᭄ᬬᬓ᭄",
      false
    );
    const expected =
      "baakaisaumaElaho tiikiyariyupiyeciyo duunuwaluwipuwetuwo sěEkor sěhorang sěhiman sěhagama sěhupil meyabehikehuteyo powajohilohurowe bwaya syak";
    expect(result).toEqual(expected);
  });

  it("should convert special assimilation cases", () => {
    const result = toLatin("ᬧ᭄ᬭᬩᬸ​ᬓᭂᬋᬂ​ᬧᬼᬘᬶᬂ​ᬳᬜ᭄ᬚᬶᬂ​ᬧᬰ᭄ᬘᬤ᭄​ᬬᬚ᭄ᬜ​ᬓᬃᬡ​ᬤᬸᬱ᭄ᬝ​ᬢᬫ᭄ᬪᬓ᭄​ᬌᬗᬶ​ᬎᬗᬶ​ᬩᬻᬲᬎᬫ᭄", false);
    const expected = "prabu kěṛěng pḷěcing hanyjing paścad yajnya karṇa duṣṭa tambhak ṝěngi ḹěngi bṝěsaḹěm";
    expect(result).toEqual(expected);
  });

  it("should convert all Sasak", () => {
    const result = toLatin("ᭈᭅᬶᭉᬸᭊᭂᬂ​ᬫᬶᭇ᭄ᭆᭀᭋ᭄", false, true);
    const expected = "faqivuzěng mitsḫosy";
    expect(result).toEqual(expected);
  });

  it("should convert punctuations", () => {
    const result = toLatin("ᬧᬶ᭟ᬱᭂ᭞᭛᭟᭜᭟ᬁᬀ᭚᭝ᬒᬁ", false);
    const expected = 'pi.ṣě,|/*~":Oṁ';
    expect(result).toEqual(expected);
  });
});

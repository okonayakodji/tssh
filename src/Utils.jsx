export function transliteration(russian_text) {
    let matches = {
            "а": "a",
            "б": "b",
            "в": "v",
            "г": "g",
            "д": "d",
            "е": "e",
            "ё": "e",
            "ж": "zh",
            "з": "z",
            "и": "i",
            "й": "y",
            "к": "k",
            "л": "l",
            "м": "m",
            "н": "n",
            "о": "o",
            "п": "p",
            "р": "r",
            "с": "s",
            "т": "t",
            "у": "u",
            "ф": "f",
            "х": "h",
            "ц": "c",
            "ч": "cz",
            "ш": "sh",
            "щ": "sch",
            "ъ": "",
            "ы": "y",
            "ь": "",
            "э": "e",
            "ю": "yu",
            "я": "ya",
            "А": "A",
            "Б": "B",
            "В": "V",
            "Г": "G",
            "Д": "D",
            "Е": "E",
            "Ё": "E",
            "Ж": "ZH",
            "З": "Z",
            "И": "I",
            "Й": "Y",
            "К": "K",
            "Л": "L",
            "М": "M",
            "Н": "N",
            "О": "O",
            "П": "P",
            "Р": "R",
            "С": "S",
            "Т": "T",
            "У": "U",
            "Ф": "F",
            "Х": "H",
            "Ц": "C",
            "Ч": "CZ",
            "Ш": "sh",
            "Щ": "sch",
            "Ъ": "",
            "Ы": "y",
            "Ь": "",
            "Э": "e",
            "Ю": "yu",
            "Я": "ya",
            ",": "",
            "?": "",
            " ": " ",
            "~": "",
            "!": "",
            "@": "",
            "#": "",
            "Є": "e",
            "—": "",
    };
    russian_text = russian_text.toLowerCase()
    let english_text = "";
    for (const letter_id in russian_text) {
        let letter = russian_text[letter_id];
        if (Object.keys(matches).includes(letter)) {
            english_text += matches[letter];
        } else {
            english_text += letter;
        }
    }
    return english_text
}

export function generate_certname(names, template = "\w+") {
    let result = "";
    for (const i in names) {
      result += (transliteration(names[i]));
    }
    return result
}

export function generate_email_from_certname(certname, postfix) {
    return certname + postfix
}
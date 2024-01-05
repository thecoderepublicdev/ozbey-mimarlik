export default function createSlug(str) {
    const turkishCharacters = {
        'ç': 'c',
        'ğ': 'g',
        'ı': 'i',
        'ö': 'o',
        'ş': 's',
        'ü': 'u',
        'Ç': 'C',
        'Ğ': 'G',
        'İ': 'I',
        'Ö': 'O',
        'Ş': 'S',
        'Ü': 'U'
    };

    str = str.replace(/[çğıöşüÇĞİÖŞÜ]/g, function(match) {
        return turkishCharacters[match];
    });

    str = str.replace(/[^a-zA-Z0-9-]+/g, ' ');
    str = str.trim().replace(/\s+/g, '-');
    str = str.toLowerCase();

    return str;
}
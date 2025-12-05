export const capitalizeWord = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
};

export const capitalizePhrase = (phrase: string) => {
    let words = phrase.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = capitalizeWord(words[i]);
    }
    return words.join(' ');
};

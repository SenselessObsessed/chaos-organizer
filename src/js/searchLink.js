export default function seachLink(text) {
  const res = /http?s:\/\//gm.test(text);

  if (res) {
    const allWords = text.split(" ");
    const resWord = [];
    allWords.forEach((word) => {
      if (/http?s:\/\//gm.test(word)) {
        resWord.push(`<a href="${word}" target="_blank">${word}</a>`);
      } else {
        resWord.push(word);
      }
    });

    return resWord.join(" ");
  } else {
    return text;
  }
}

function filterLongWords(words,i){
    const a = words.filter(function(s) {return s.length>i})
    return a;
}

console.log(filterLongWords(["uniao","paladar","artista"],5));


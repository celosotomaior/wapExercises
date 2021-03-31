function reverse(s) {
    if (s === "") {
    return "";
    }
    return reverse(s.substr(1)) + s.charAt(0);
}

// function reverse2(str) {
//     let revStr = [];
//     for(let i = str.lenth-1; i>=0; i--) {
//         revStr.push(str.charAt(i));
//     }
//     return revStr.join(" ");
// }
console.log(reverse("Hello World"));


// console.log(reverse2("Hello World"));
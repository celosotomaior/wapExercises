function printFibo(n, a, b) {
    if (n === 0) return "";

    if(n===1) {
        console.log(`${a}`)
    } else if(n ===2)  {
    console.log(`${a}, ${b}`);
} else {
    let seq = `${a}, ${b}`;
    let nextA = a;
    let nextB = b;
    for(let i=0; i<n-2; i++) {
        let nextVal = nextA + nextB;
        nextA = nextB;
        nextB = nextVal;
        seq += `, ${nextVal}`;
    }
    console.log(seq);
    }
}

printFibo(20,12,1);


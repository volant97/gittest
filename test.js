function solution(s){
    let result = true;

    let num = 0;

    s = s.toUpperCase();
    
    for (let i = 0; i < s.lenght; i++) {
        if(s[i] === "P") {
            num++;
        }
        if(s[i] === "Y") {
            num--;
        }
    }
    
    if (num === 0) {
        result = true;
    } else {
        result = false;
    }

    return result;
}
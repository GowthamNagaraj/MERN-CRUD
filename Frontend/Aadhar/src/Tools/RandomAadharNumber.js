export function AadharNumber(){
    let min = 100000000000;
    let max = 999999999999;
    return Math.round(Math.random() * (max - min +1)) + min;
}
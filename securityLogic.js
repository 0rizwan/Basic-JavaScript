function logic(email){
    let arr = email.split("@");
    let left = arr[0];
    let right = arr[1];
    let result = [];

    let leftSplit = left.split("");
    let resultStr;

    console.log(leftSplit);
    leftSplit.forEach((e,i) =>{
        if (i < 2){
            result.push(e);
        }
        else if(i > leftSplit.length-3){
            result.push(e);
        }
        else{
            result.push("*");
        }
    })
    result.push("@");
    result.push(right);
    // console.log("result",result);

    resultStr = result.join("");
    console.log(resultStr);
    return resultStr;
}
console.log(logic("siddiquirizwan6969@gmail.com"));


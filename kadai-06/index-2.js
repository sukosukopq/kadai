const str1 = "abc"
const str2 = "'abc'"
const str3 = '"abc"'
const str4 = '{"a": undefined}'
const str5 = '{"a": 123}'
const str6 = '{a: 123}'

// str1
try {
    console.log(JSON.parse(str1))    
} catch (error) {
    console.log(error)
    // 正しくは"abc"
}

// str2
try {
    console.log(JSON.parse(str2))    
} catch (error) {
    console.log(error)
    // 'abc'は正しくは"abc"
}

// str3
try {
    console.log(JSON.parse(str3))    
} catch (error) {
    console.log(error)
}

// str4
try {
    console.log(JSON.parse(str4))    
} catch (error) {
    console.log(error)
    // undefinedは使えない
}

// str5
try {
    console.log(JSON.parse(str5))    
} catch (error) {
    console.log(error)
}

// str6
try {
    console.log(JSON.parse(str6))    
} catch (error) {
    console.log(error)
    // "a"になっていない
}
//最大の数を入力する

const max = parseInt(process.argv[2])

for (let n = 1; n <= max; n = n + 1) {
    if (n % 3 === 0 ) {
        console.log('ここは3の倍数でしょう')
    } else {
        console.log(n)
    }
}


//　3の倍数のときにメッセージを出力させたい
//　できた
// 最大の数を入力する
const max = parseInt(process.argv[2])

if (let n=1; n <= max; n=n+1) {
    if (n % 3 === 0) {
        console.log('これは3の倍数です')
    } else {
        console.log('これは3の倍数ではない！')
    }
}


//　3の倍数のときにメッセージを出力させたい
//　うまくいかない
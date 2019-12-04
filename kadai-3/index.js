// 生まれた日を入力
const day = parseInt(process.argv[2])

 if (n === 7) {
    console.log('あなたはAAな性格です')
} else if (n % 3 === 0) {
    console.log('あなたはAな性格です')
} else if (n % 3 === 1) {
    console.log('あなたはBな性格です')
} else if (n % 3 === 2) {
    console.log('あなたはCな性格です')
}

//生まれた日を33で割った余りで3通りする。7の日はまた別メッセージ
//うまくいかない
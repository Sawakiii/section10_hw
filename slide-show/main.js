let images = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg', 'img/img4.jpg'] 
let current = 0 
// ボタンのクリックイベントでcurrentを更新後
// images[current]で現在の写真を表示 

let mainImage = document.getElementById("main_image")
// 画像を挿入する要素を取得

var page = document.getElementById("page")
// ページ数を記述する要素を取得
page.textContent = "1/4"
// ページ数に初期値を記入

function prevImage() {
    if(current > 0) {   //1以下にならないように
        current -= 1
        mainImage.setAttribute("src", images[current])      //画像を変更
        page.textContent = (current+1) + "/" + images.length    // 現在の画像が何番目か表示
    } else if (current === 0) {     //4に戻る場合
        current = 3
        mainImage.setAttribute("src", images[current])      
        page.textContent = (current+1) + "/" + images.length    
    }
}
var prevButton = document.getElementById("prev")
prevButton.addEventListener("click", prevImage)
// prevボタンで前回の画像に変更
// また、pageを更新



function nextImage() {
    if(current < 3) {   //4以上にならないように
        current += 1
        mainImage.setAttribute("src", images[current])      //画像を変更
        page.textContent = (current+1) + "/" + images.length    // 現在の画像が何番目か表示
    } else if (current === 3) {
        current = 0
        mainImage.setAttribute("src", images[current])      //1に戻る場合
        page.textContent = (current+1) + "/" + images.length    
    }
}
var nextButton = document.getElementById("next")
nextButton.addEventListener("click", nextImage)
// nextボタンで前回の画像に変更
// また、pageを更新
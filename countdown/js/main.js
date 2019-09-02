var day = document.getElementById("day")
var hour = document.getElementById("hour")
var min = document.getElementById("min")
var sec = document.getElementById("sec")
// 書き加える要素を取得


var today = new Date()
// 現在の時刻を取得

var olynday = new Date(2020, 6, 24)
// オリンピックの時刻を取得

var diff = olynday.getTime() - today.getTime()
// 現在からオリンピックまでの時刻の差分を取得

var dayValue = Math.floor(diff/(1000*60*60*24))
// ミリ秒を日に変換し、小数点以下切り捨て

var hourValue = Math.floor((diff - (dayValue * 1000*60*60*24)) / (1000*60*60))
// 切り捨てたものを時間単位に変換し、小数点以下切り捨て

var minuteValue = Math.floor((diff - (dayValue * 1000*60*60*24) - (hourValue*1000*60*60)) / (1000*60))
// 切り捨てたものを分単位に変換し、小数点以下切り捨て

var secondValue = Math.floor((diff - (dayValue * 1000*60*60*24) - (hourValue*1000*60*60) - (minuteValue*1000*60)) / 1000)
// 切り捨てたものを秒単位に変換し、小数点以下切り捨て

day.textContent = dayValue
hour.textContent = hourValue
min.textContent = minuteValue
sec.textContent = secondValue
// テキストを書き加える

function countDown() {
    today = new Date()
    var diff = olynday.getTime() - today.getTime()
    var dayValue = Math.floor(diff/(1000*60*60*24))
    var hourValue = Math.floor((diff - (dayValue * 1000*60*60*24)) / (1000*60*60))
    var minuteValue = Math.floor((diff - (dayValue * 1000*60*60*24) - (hourValue*1000*60*60)) / (1000*60))
    var secondValue = Math.floor((diff - (dayValue * 1000*60*60*24) - (hourValue*1000*60*60) - (minuteValue*1000*60)) / 1000)
    day.textContent = dayValue
    hour.textContent = hourValue
    min.textContent = minuteValue
    sec.textContent = secondValue
    // todayを更新し、それ以下の関数を更新

    setTimeout(countDown, 1000)
    // 関数内で呼び出す
}


setTimeout(countDown, 1000)

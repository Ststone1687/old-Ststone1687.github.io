var page = 1;
var father = document.getElementById("add_which_news");
var icon = [
    "https://media.discordapp.net/attachments/713379026487476235/1023762235807498260/dice.png?width=663&height=663",
    "https://media.discordapp.net/attachments/713379026487476235/1023971568684105748/pin.png?width=663&height=663"
]

var datas = [
    [1,"at00001","About","2022.09.26"],//pin
    [1,"at00002","網頁設計專案實例","2022.09.27"],//pin
    [0,"at00007","yukicoder No.2082 AND OR XOR","2022.10.19"],
    [0,"at00006","yukicoder No.2101 [Cherry Alpha N] ずっとこの数列だったらいいのに","2022.10.18"],
    [0,"at00004","Zerojudge h789 線段樹之石(Segment Tree Stone) 題解","2022.09.29"],
    [0,"at00003","Codeforces Round #823 (Div.2) 心得文","2022.09.27"],
    [0,"at00000","網站測試","2022.09.26"]
];

var lk1 = "https://ststone1687.github.io/tags_main/articles/";
var lk2 = ".html";
var f1 = '<div class="which_news"><div class="news_icon"><img src="';
var f2 = '" width="30" height="30"></div><div class="news_main"><div class="news_text_set"><a href="';
var f3 = '" class="news_title">';
var f4 = '</a><time class="news_time">';
var f5 = '</time></div></div></div>';

function build(){
    var total = "";
    for(var i=(page-1)*10;i<Math.min(datas.length,page*10);i++){
        var add = f1+icon[datas[i][0]]+f2+lk1+datas[i][1]+lk2+f3+datas[i][2]+f4+datas[i][3]+f5;
        total += add;
    }
    father.innerHTML = total;
    var jump = document.getElementById("jump");
    jump.value = page;
}

function next_page(){
    if(datas.length>page*10){
        page += 1;
    }
    build();
}

function last_page(){
    if(page>=2){
        page -= 1;
    }
    build();
}

function jump(){
    var now = document.getElementById("jump").value;
    if(page>=1&&datas.length>(now-1)*10){
        page =now;
    }
    build();
}

function search(ele) {
    if(event.key === 'Enter') {
        jump();       
    }
}

build();

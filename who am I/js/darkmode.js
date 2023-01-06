  // 링크 색 바꾸기
function LinkSetColor(color){
    var alist = document.querySelectorAll('a');
    for(var i = 0; i < alist.length; i++)
        alist[i].style.color = color;
}
//h3 글자색 바꾸기
function h3SetColor(color){
    var h3Color = document.querySelectorAll('h3');
    for(var j = 0; j < h3Color.length; j++)
    h3Color[j].style.color = color;
}
//b 글자색 바꾸기
function bSetColor(color){
    var bColor = document.querySelectorAll('b');
    for(var h = 0; h < bColor.length; h++)
    bColor[h].style.color = color;
}

//dl 글자색 바꾸기
function dlSetColor(color){
    var dlColor = document.querySelectorAll('dl');
    for(var l = 0; l < dlColor.length; l++)
    dlColor[l].style.color = color;
}

// dl 배경색 바꾸기
function dlSetBackgroundColor(color){
    var dlbgColor = document.querySelectorAll('dl');
    for(var a = 0; a < dlbgColor.length; a++)
    dlbgColor[a].style.backgroundColor = color;
}

// 바디 글자색 바꾸기
function BodySetColor(color){
    document.querySelector('body').style.color = color;
}
//p 글자색 바꾸기
function pSetColor(color){
    document.querySelector('p').style.color = color;
}
//h1 글자색 바꾸기
function h1SetColor(color){
    document.querySelector('h1').style.color = color;
}
//h2 글자색 바꾸기
function h2SetColor(color){
    document.querySelector('h2').style.color = color;
}


//li 글자색 바꾸기
function liSetColor(color){
    document.querySelector('li').style.color = color;
}
//sectionTitle 글자색 바꾸기
function sectionTitleSetColor(color){
    document.querySelector('#sectionTitle').style.color = color;
}



// 바디 배경색 바꾸기
function BodySetBackgroundColor(color){
    document.querySelector('body').style.backgroundColor = color;
}
//header 배경색 바꾸기
function headerSetBackgroundColor(color){
    document.querySelector('header').style.backgroundColor = color;
}

//댓글 타이틀 배경색 바꾸기
function cmtSetBackgroundColor(color){
    document.querySelector('.cmt-title').style.backgroundColor = color;
}

//댓글 타이틀 글자색 바꾸기
function itemNameSetColor(color){
    document.querySelector('.itemName').style.color = color;
}
//

// 주간, 야간모드
function day_night_handler(self) {
    var target = document.querySelector('body');
    if (self.value == 'day') {
        //다크
        BodySetBackgroundColor('#13161c');
        headerSetBackgroundColor('#13161c');
        dlSetBackgroundColor('#2d364c');
        cmtSetBackgroundColor('#2d364c');

        sectionTitleSetColor('#ffffff');
        pSetColor('#ffffff');
        h1SetColor('#ffffff');
        h2SetColor('#ffffff');
        h3SetColor('#ffffff');
        bSetColor('#ffffff');

        dlSetColor('#ffffff');
        liSetColor('#ffffff');

        itemNameSetColor('#ffffff')

        BodySetColor('white');
        LinkSetColor('#13161c');
        self.value = 'night';
    }
    else {
        //라이트
        BodySetBackgroundColor('#ffffff');
        headerSetBackgroundColor('#ffffff');
        dlSetBackgroundColor('#FBFBFB');
        cmtSetBackgroundColor('#eceffe');

        sectionTitleSetColor('#000000');
        pSetColor('#80A5F5');
        h1SetColor('#80A5F5');
        h2SetColor('#000000');
        h3SetColor('#80A5F5');
        bSetColor('#80A5F5');
        dlSetColor('#000000');
        liSetColor('#000000');
        itemNameSetColor('#000000')


        BodySetColor('#000000');
        LinkSetColor('#000000');
        self.value = 'day';
    }
}

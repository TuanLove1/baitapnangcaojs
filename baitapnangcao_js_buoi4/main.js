document.getElementById('btnTomorrow').onclick = function(){
    var ngay = parseInt(document.getElementById('d').value);
    var thang = parseInt(document.getElementById('m').value);
    var nam = parseInt(document.getElementById('y').value);
    var ngaymoi = +ngay + 1;
    var ngaycu = ngay - 1;
    var kqTomorrow;
    if(ngay == 31 && thang == 12){
        kqTomorrow = ngay - 30 + '/' + (thang - 11) + '/' + (nam+1) + ' va ' + ngaycu + '/' + thang + '/' + nam;
    }
    else if(ngay == 31 && thang == 1 ||ngay == 31 && thang == 3 ||ngay == 31 && thang == 5 ||ngay == 31 && thang == 7 ||ngay == 31 && thang == 8 ||ngay == 31 && thang == 10 ||ngay == 31 && thang == 12){
        kqTomorrow = ngay - 30 + '/' + (thang + 1) + '/' + nam + ' va ' + ngaycu + '/' + thang + '/' + nam;
        console.log(kqTomorrow);
    }
    else if(ngay == 30 && thang == 4 ||ngay == 30 && thang == 6 ||ngay == 30 && thang == 9 ||ngay == 30 && thang == 11){
        kqTomorrow = ngay - 29 + '/' + (thang + 1) + '/' + nam + ' va ' + ngaycu + '/' + thang + '/' + nam;
    }
    else{
        kqTomorrow = (ngay+1)+ '/' + thang + '/' + nam + ' va ' + ngaycu + '/' + thang + '/' + nam;
    }
    document.getElementById('outputTomorrow').innerHTML = kqTomorrow;
    document.getElementById('outputTomorrow').classList.add('thongbao');
}


document.getElementById('btnMonths').onclick = function () {
    var months = parseInt(document.getElementById('thang').value);
    var years = parseInt(document.getElementById('nam').value);
    var kqDays;
    if (months < 1 || months > 12 || years < 0) {
        kqDays = 'Bạn nhập bị sai';
    } else if (months == 2 && years % 4 == 0) {
        kqDays = 'tháng ' + months + ' năm ' + years + ' có : 29 ngay';
    } else if (months == 2) {
        kqDays = 'tháng ' + months + ' năm ' + years + ' có : 28 ngay';
    } else if (months == 1 || months == 3 || months == 5 || months == 7 || months == 8 || months == 10 || months == 12) {
        kqDays = 'tháng ' + months + ' năm ' + years + ' có : 31 ngay';
    }    
    else {
        kqDays = 'tháng ' + months + ' năm ' + years + ' có : 30 ngay';
    }    
    document.getElementById('outputMonths').innerHTML = kqDays;
    document.getElementById('outputMonths').classList.add('thongbao')
}    

document.getElementById('btnNumber').onclick = function () {
    var so = parseInt(Math.floor(document.getElementById('threeNumber').value));
    var tram = parseInt(Math.floor(so / 100));
    var chuc = parseInt(Math.floor((so % 100) / 10));
    var donvi = parseInt(Math.floor((so % 100) % 10));
    var soNew;

    if (so < 100 || so > 999) {
        soNew = 'ban nhap sai';
    }    
    else if (tram == 1) {
        soNew = 'một trăm ';
    }    
    else if (tram == 2) {
        soNew = 'hai trăm ';
    }    
    else if (tram == 3) {
        soNew = 'ba trăm ';
    }    
    else if (tram == 4) {
        soNew = 'bốn trăm ';
    }    
    else if (tram == 5) {
        soNew = 'năm trăm';
    }    
    else if (tram == 6) {
        soNew = 'sáu trăm ';
    }    
    else if (tram == 7) {
        soNew = 'bảy trăm';
    }    
    else if (tram == 8) {
        soNew = 'tám trăm';
    }    
    else if (tram == 9) {
        soNew = 'chín trăm ';
    }    
    if (chuc == 0) {
        soNew = 'không';
    }    
    else if (chuc == 1) {
        soNew += 'mười';
    } else if (chuc == 2) {
        soNew = soNew += 'hai mươi';
    }    
    else if (chuc == 3) {
        soNew += 'ba mươi';
    }    
    else if (chuc == 4) {
        soNew += 'bốn mươi';
    }    
    else if (chuc == 5) {
        soNew += 'năm mươi';
    }    
    else if (chuc == 6) {
        soNew += 'sáu mươi';
    }    
    else if (chuc == 7) {
        soNew += 'bảy mươi';
    }    
    else if (chuc == 8) {
        soNew += 'tám mươi';
    }    
    else if (chuc == 9) {
        soNew += 'chín mươi';
    }    
    if ((donvi == 0)) {
        soNew += ' '
    }    
    else if (donvi == 1) {
        soNew += ' một';
    } else if (donvi == 2) {
        soNew += ' hai';
    }    
    else if (donvi == 3) {
        soNew += ' ba';
    }    
    else if (donvi == 4) {
        soNew += ' bốn';
    }    
    else if (donvi == 5) {
        soNew += ' năm';
    }    
    else if (donvi == 6) {
        soNew += ' sáu';
    }    
    else if (donvi == 7) {
        soNew += ' bảy';
    }    
    else if (donvi == 8) {
        soNew += ' tám';
    }    
    else if (donvi == 9) {
        soNew += ' chín';
    }    
    document.getElementById('outputNumber').innerHTML = soNew;
    document.getElementById('outputNumber').classList.add('thongbao');
}    


document.getElementById('btnsv').onclick = function(){
    var name1 = document.getElementById('sv1').innerText;
    var name2 = document.getElementById('sv2').innerText;
    var name3 = document.getElementById('sv3').innerText;
    var toadoAtuan = document.getElementById('tdasv1').value * 1;
    var toadoBtuan = document.getElementById('tdbsv1').value * 1;
    var toadoAphuong = document.getElementById('tdasv2').value * 1;
    var toadoBphuong = document.getElementById('tdbsv2').value * 1;
    var toadoAhien = document.getElementById('tdasv3').value * 1;
    var toadoBhien = document.getElementById('tdbsv3').value * 1;
    var toadoAtruong = document.getElementById('tdat').value * 1;
    var toadoBtruong = document.getElementById('tdbt').value * 1;
    var khoangCachTuan = parseFloat(Math.sqrt(((toadoAtruong - toadoAtuan)*(toadoAtruong-toadoAtuan)) +  ((toadoBtruong - toadoBtuan)*(toadoBtruong-toadoBtuan)))).toFixed(2) * 1;
    var khoangCachPhuong = parseFloat(Math.sqrt(((toadoAtruong - toadoAphuong)*(toadoAtruong-toadoAphuong)) +  ((toadoBtruong - toadoBphuong)*(toadoBtruong-toadoBphuong)))).toFixed(2) * 1;
    var khoangCachHien = parseFloat(Math.sqrt(((toadoAtruong - toadoAhien)*(toadoAtruong-toadoAhien)) +  ((toadoBtruong - toadoBhien)*(toadoBtruong-toadoBhien)))).toFixed(2) * 1;
    var kqKhoangCach;
    if (khoangCachTuan > khoangCachPhuong && khoangCachTuan > khoangCachHien)
    {
        kqKhoangCach = name1 + ' có khoảng cách từ trường đến nhà xa nhất: ' + khoangCachTuan + ' km';
    } else if(khoangCachPhuong > khoangCachTuan && khoangCachPhuong > khoangCachHien){
        kqKhoangCach = name2 + ' có khoảng cách từ trường đến nhà xa nhất: ' + khoangCachPhuong + ' km';
    }    
    else {
        kqKhoangCach = name3 + ' có khoảng cách từ trường đến nhà xa nhất: '+ khoangCachHien + ' km';
    }    
    document.getElementById('outputkc').innerHTML = kqKhoangCach;
    document.getElementById('outputkc').classList.add('thongbao');
}    



function kiem_tra_ngay() {
    let monTh = +document.getElementById('month').value;
    switch (monTh) {
        case 1:
            document.getElementById('result').innerHTML = 'Có 31 ngày';
            break;
        case 2:
            document.getElementById('result').innerHTML = 'Có 28/29 ngày';
            break;
        case 3:
            document.getElementById('result').innerHTML = 'Có 31 ngày';
            break;
        case 4:
            document.getElementById('result').innerHTML = 'Có 30 ngày';
            break;
        case 5:
            document.getElementById('result').innerHTML = 'Có 31 ngày';
            break;
        case 6:
            document.getElementById('result').innerHTML = 'Có 30 ngày';
            break;
        case 7:
            document.getElementById('result').innerHTML = 'Có 31 ngày';
            break;
        case 8:
            document.getElementById('result').innerHTML = 'Có 31 ngày';
            break;
        case 9:
            document.getElementById('result').innerHTML = 'Có 30 ngày';
            break;
        case 10:
            document.getElementById('result').innerHTML = 'Có 31 ngày';
            break;
        case 11:
            document.getElementById('result').innerHTML = 'Có 30 ngày';
            break;
        case 12:
            document.getElementById('result').innerHTML = 'Có 31 ngày';
            break;


    }
}
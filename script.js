function showtime() {
    var date = new Date();
    var H = date.getHours();
    var M = date.getMinutes();
    var S = date.getSeconds();
    var Session = "AM";
    if (H == 0) {
        H = 12;
    }
    if (H  > 12) {
        H = H - 12;
        Session = "PM";
    }
    H = (H < 10) ? "0" + H : H;
    M = (M < 10) ? "0" + M : M;
    S = (S < 10) ? "0" + S : S;
    var time = H + ":" + M + ":" + S + ":" + Session;
    document.getElementById("myclockdisplay").innerText = time;
    setTimeout(showtime, 1000);
}
showtime();
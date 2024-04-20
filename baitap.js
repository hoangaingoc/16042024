function bai1(){
    let doC = +document.getElementById("doC").value
    let doF = doC*9/5+32
    document.getElementById("bai1").innerHTML = doC + " độ C = " + doF + " độ F"
}
function bai2(){
    let m = +document.getElementById("m").value
    let ft = m*3.2808
    document.getElementById("bai2").innerHTML = m + "m = " + ft + "feet"
}
function bai3(){
    let a = +document.getElementById("a").value
    let s = Math.pow(a,2)
    document.getElementById("bai3").innerHTML = "Diện tích hình vuông có cạnh a = "+a+" là: "+s
}
function bai4(){
    let canh_a = +document.getElementById("canh_a").value
    let canh_b = +document.getElementById("canh_b").value
    let s_hcn = canh_a*canh_b
    document.getElementById("bai4").innerHTML = "Diện tích hình chữ nhật có cạnh a = "+canh_a+" cạnh b = "+canh_b+" là: "+s_hcn
}
function bai5(){
    let tg_a = +document.getElementById("tg_a").value
    let tg_b = +document.getElementById("tg_b").value
    let s_tg = 1/2 * (tg_a * tg_b)
    document.getElementById("bai5").innerHTML = "Diện tích tam giác vuông có 2 cạnh kề a = "+tg_a+"; b = "+tg_b+" là: "+s_tg
}
function bai6(){
    let so_a = +document.getElementById("so_a").value
    let so_b = +document.getElementById("so_b").value
    let x
    if(so_a!=0 && so_b!=0){
        x = -so_b/so_a
        document.getElementById("bai6").innerHTML = "x = "+x
    }
    if(so_a==0&&so_b!=0) {
        document.getElementById("bai6").innerHTML = "Hàm vô nghiệm"
    }
    if(so_a==0&&so_b==0) {
        document.getElementById("bai6").innerHTML = "Vô số nghiệm"
    }
}function bai7(){
    let s_a = +document.getElementById("s_a").value
    let s_b = +document.getElementById("s_b").value
    let s_c = +document.getElementById("s_c").value
    let delta = Math.pow(s_b,2) - 4 * s_a * s_c
    if(delta < 0){
        document.getElementById("bai7").innerHTML = "Phương trình vô nghiệm"
    }
    if(delta === 0) {
        let x0 = -s_b / (2 * s_a)
        document.getElementById("bai7").innerHTML = "Phương trình có 1 nghiệm kép: x1 = x2 = " + x0
    }
    if(delta >  0) {
        let x1 = ( -s_b + Math.sqrt(delta)) / (2 *s_a)
        let x2 = ( -s_b - Math.sqrt(delta)) / (2 *s_a)
        document.getElementById("bai7").innerHTML = "Phương trình có 2 nghiệm: x1 = " + x1 + "và x2 = " +x2
    }
}
function bai8(){
    let t = +document.getElementById("t").value
    let kt
    if(t<=0 || t>=120){
        document.getElementById("bai8").innerHTML = t+" không phải là số tuổi của một người"
    }
    else {
        document.getElementById("bai8").innerHTML = t+" là số tuổi của một người"
    }
}
function bai9() {
    let soA = +document.getElementById("soA").value
    let soB = +document.getElementById("soB").value
    let soC = +document.getElementById("soC").value
    if (soA > 0 && soB > 0 && soC > 0) {
        if (soA + soB > soC && soA + soC > soB && soB + soC > soA) {
            document.getElementById("bai9").innerHTML = "Ba số a, b, c vừa nhập là cạnh của tam giác"
        } else {
            document.getElementById("bai9").innerHTML = "Ba số a, b, c vừa nhập không phải là cạnh của tam giác"
        }
    }
}

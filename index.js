// Hàm kiểm tra nguyên tố - Trần Văn Sĩ
function ktSoNguyenTo(n) {
    if(n<=1) {
        return false
    }
    for(let i=2; i<=Math.sqrt(n); i++) {
        if(n%i==0) {
            return false
        }
    }
    return true
}
// Võ Quốc Thắng - Hàm tổng
function tong() {

}
// Trang Thanh Hải - Hàm hiệu
function hieu() {
    
}
// Nguyễn Hoàng Khang - Hàm tích
function tich(a, b) {
    return a * b;
    
}

// Phạm Ngọc Đông - Hàm thương

function thuong() {
    
}

// Gọi hàm
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
function tong() {}


// Trang Thanh Hải - Hàm hiệu
function hieu(a,b) {
    return a - b;
}


// Nguyễn Hoàng Khang - Hàm tích
function tich()

// Phạm Ngọc Đông - Hàm thương
function thuong(a, b) {
  if (b == 0) {
    return "Không thể chia cho 0";
  }
  return a / b;
}

// Gọi hàm

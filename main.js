// 환율정보
let currencyRatio = {
  USD: {
    KRW: 1187.02,
    USD: 1,
    VND: 22850.0,
    unit: "달러",
  },
  KRW: {
    KRW: 1,
    USD: 0.00084,
    VND: 19.25,
    unit: "원",
  },
  VND: {
    KRW: 0.052,
    USD: 0.000044,
    VND: 1,
    unit: "동",
  },
};

let fromCurrency = "USD";
let toCurrency = "USD";
// console.log(currencyRatio.USD.unit);
// console.log(currencyRatio.VND.unit);

// 드롭다운 리스트에서 아이템 선택하면 아이템 바뀜
// *querySelectorAll = 만족하는 선택자 여러개를 불러옴 (다른 선택자들은 만족하는것 한개만 불러옴.)
document.querySelectorAll("#from-currency-list a").forEach((menu) =>
  menu.addEventListener("click", function () {
    //1. btn 가져오기
    //2. bun 값 바꾸기
    document.getElementById("from-btn").textContent = this.textContent;
    //3. 선택된 currency값을 변수에 저장
    fromCurrency = this.textContent;
  })
);

document.querySelectorAll("to-currency-list a").forEach((menu) =>
  menu.addEventListener("click", function () {
    document.getElementById("#to-btn").textContent = this.textContent;
    //3. 선택된 currency값을 변수에 저장
    toCurrency = this.textContent;
  })
);

// 상단박스에서 금액 입력 시, 하단박스에서 환전액이 나타남.

// 하단박스에서 아이템을 선택하면, 상단박스에서 선택된 단위기준으로 환전됨.

// 숫자를 한국단위로 읽어줌.

// 하단박스에서 숫자를 입력했을 때 상단 박스에서 헌국단위로 읽어줌.

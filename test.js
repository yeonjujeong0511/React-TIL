let number = 0;
let number2 = 0;

// 순수 함수
// 외부의 값에 의존하지 않고 똑같은 인수를 전달하면 똑같은 결과를 반환한다
// 함수 안에서 외부 변수의 상태를 변경하지 않는다 => 이런 것들을 부수효과라고함 (sideEffect)
const pureIncrease = (arg, number) => {
  let a = number;
  console.log(arg + a);
};

pureIncrease(number, 1);
pureIncrease(number, 1);
pureIncrease(number, 1);
pureIncrease(number, 1);
pureIncrease(number, 1);

// 비순수 함수
// 외부의 값에 의존하며 똑같은인수를 전달해도 다른 결과를 반환한다
const impureIncrease = (number) => {
  let a = number;
  return ++number2 + a;
};

impureIncrease(1);

console.log(number2);

impureIncrease(1);

console.log(number2);

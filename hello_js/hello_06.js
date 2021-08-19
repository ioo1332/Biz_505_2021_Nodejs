let 배열1 = ["aaa", "bbb", "ccc"];
배열1.forEach((요소) => {
  console.log(요소.search(/[ab]+/));
});
/**
 * 문자열.search(찾는문자열)
 * 문자열내에 찾는 문자열이 있으면
 *
 */
let 새로운배열 = 배열1.filter((요소) => {
  return 요소.search(/[ab]+/) > -1;
});
// !!~요소.search(/[ab]+/); 의 연산결과는
//  요소.search 의 값이 0미만이면 false
// 0이상이면 true로 바꾸는 논리 비트 연산식
새로운배열 = 배열1.filter((요소) => {
  return !!~요소.search(/[ab]+/);
});
console.log(새로운배열);
// 배열1의 요소에 한개라도 영문자 a또는 b가 포함된것이 있냐?
// some 함수는 filter와 성질이 비슷한데
// 최종결과물이 배열이 아닌 boolean
let yesNo = 배열1.some((요소) => {
  return !!~요소.search(/[ab]+/);
});
if (yesNo) {
  console.log("배열1에는 a나 b가 있음");
} else {
  console.log("배열1에는 a나 b가 없음");
}

/** 이메일 정규식 검사 */
const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

/** 값의 최소 길이 검사 */
const isMinLength = (v, length) => length >= v.length;

/** 공백 확인 */
const isRequired = (v) => v.length === 0;

/** 문자열 일치 확인 */
const isSameString = (a, b) => String(a) === String(b);

/** 두 값이 동일한지 확인하는 함수 */
const sameAs = (value, otherValue) => {
  // 둘 다 문자열이 아니면 일단 false 반환
  if (typeof value !== "string" || typeof otherValue !== "string") return false;

  // 공백 제거 후 비교 (불필요한 띄어쓰기 허용 방지)
  return value.trim() === otherValue.trim();
};

const sortByIndex = (arr) =>
  [...arr].sort((a, b) => {
    const ai = Number.isFinite(a.index) ? a.index : Infinity; // 없으면 뒤로
    const bi = Number.isFinite(b.index) ? b.index : Infinity;
    return ai - bi; // 오름차순
  });

export {
  isMinLength,
  isRequired,
  isSameString,
  isValidEmail,
  sameAs,
  sortByIndex,
};

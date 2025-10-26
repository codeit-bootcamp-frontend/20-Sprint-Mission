/** 이메일 정규식 검사 */
export const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

/** 값의 최소 길이 검사 */
export const isMinLength = (v, min) => v.length <= min;

/** 공백 확인 */
export const isEmpty = (v) => v.length === 0;

/** 문자열 일치 확인 */
export const isSameString = (a, b) => String(a) === String(b);

/** 배열을 index 기준으로 정렬 desc 옵션 지원 */
export const sortByIndex = (arr, { desc = false } = {}) =>
  [...arr].sort((a, b) => {
    const ai = Number.isFinite(a?.index) ? a.index : Infinity;
    const bi = Number.isFinite(b?.index) ? b.index : Infinity;
    return desc ? bi - ai : ai - bi;
  });

export const debounce = (func, delay) => {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

/** 이메일 정규식 검사 */
export const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

/** 문자열 일치 확인 */
export const isSameString = (a, b) => String(a) === String(b);

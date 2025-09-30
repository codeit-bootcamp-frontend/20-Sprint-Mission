/** 이메일 정규식 검사 */
const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

/** 최소 글자수 8 */
const isMin8 = (v) => v.trim().length >= 8;

/** 공백 확인 */
const isRequired = (v) => v.trim().length > 0;

/** 문자열 일치 확인 */
const isSame = (a, b) => String(a) === String(b);

export { isMin8, isRequired, isSame, isValidEmail };

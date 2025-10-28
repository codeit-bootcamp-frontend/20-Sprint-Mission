const fetchWrapper = async (url, options = {}) => {
  const defaultHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const config = {
    ...options,
    headers: { ...defaultHeaders, ...(options.headers || {}) },
  };

  try {
    const res = await fetch(url, config);
    // 상태 코드별 처리
    if (!res.ok) {
      const text = await res.text();
      const error = new Error(`HTTP ${res.status}: ${res.statusText}`);
      error.status = res.status;
      error.body = text;
      throw error;
    }
    // JSON 응답 파싱
    const data = await res.json();
    return data;
  } catch (err) {
    // 공통 에러 핸들링
    if (err.name === "AbortError") {
      console.warn("요청이 취소되었습니다.");
    } else if (err.status === 401) {
      console.warn("인증이 만료되었습니다. 다시 로그인해주세요.");
    } else if (err.status >= 500) {
      console.error("서버 오류:", err);
    } else {
      console.error("요청 실패:", err);
    }

    throw err;
  }
};

export default fetchWrapper;

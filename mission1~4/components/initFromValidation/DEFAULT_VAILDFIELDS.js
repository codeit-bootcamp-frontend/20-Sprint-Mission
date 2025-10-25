import { isMinLength, isRequired, isValidEmail } from "../../js/utils.js";

const FIELDS_CLASSNAME = {
  input_container: "input-container",
  login_input: "login-input",
  input_label: "input-label",

  visibility_container: "visibility-container",
  btn_visibility: "btn-visibility",

  // 결과 제출 버튼
  active_button: "active-button",
  disabled_button: "disabled-button",
  login_button: "login-button",

  // 에러 메시지 노출
  is_valid: "is-valid",
  is_invalid: "is-invalid",
  is_error_message: "is-error-message",
};

const DEFAULT_VISIBILITY = {
  class: FIELDS_CLASSNAME.btn_visibility,
  on: { src: "/imgs/ic_visibility_on.png", alt: "비밀번호 보이기 버튼" },
  off: { src: "/imgs/ic_visibility_off.png", alt: "비밀번호 숨기기 버튼" },
};

const DEFAULT_LABLE = {
  innerContents: "",
  class: FIELDS_CLASSNAME.input_label,
};

const DEFAULT_VAILDFIELDS = [
  {
    index: 1,
    rules: [
      {
        element: "input",
        lable: {
          innerContents: "이메일",
        },
        attribute: {
          id: "userEmail",
          type: "email",
          placeholder: "이메일을 입력해주세요",
          class: FIELDS_CLASSNAME.login_input,
        },
        checkValue: (value) => {
          switch (true) {
            case isRequired(value):
              return {
                isValid: !isRequired(value),
                message: "이메일을 입력해주세요.",
              };

            case !isValidEmail(value):
              return {
                isValid: isValidEmail(value),
                message: "잘못된 이메일 형식입니다.",
              };

            default:
              return {
                isValid: true,
                message: "",
              };
          }
        },
      },
    ],
  },
  {
    index: 2,
    rules: [
      {
        element: "input",
        lable: {
          innerContents: "비밀번호",
        },
        attribute: {
          type: "password",
          id: "userPassword",
          placeholder: "비밀번호를 입력해주세요",
          class: FIELDS_CLASSNAME.login_input,
        },
        isVisibility: true,
        checkValue: (value) => {
          const length = 12;

          switch (true) {
            case isRequired(value):
              return {
                isValid: !isRequired(value),
                message: "비밀번호를 입력해주세요.",
              };

            case isMinLength(value, length):
              return {
                isValid: !isMinLength(value, length),
                message: `비밀번호를 ${length}자 이상 입력해주세요.`,
              };

            default:
              return {
                isValid: true,
                message: "",
              };
          }
        },
      },
    ],
  },
  {
    index: 3,
    rules: [
      {
        element: "button",
        innerContents: "로그인",
        attribute: {
          id: "submit-button",
          type: "submit",
          disabled: true,
          class: `${FIELDS_CLASSNAME.active_button} ${FIELDS_CLASSNAME.login_button}`,
        },
      },
    ],
  },
  // {
  //   rules: [
  //     {
  //       element: "input",
  //       lable: {
  //         innerContents: "1비밀번호",
  //       },
  //       innerContents: "로그인",
  //       attribute: {
  //         type: "checkbox",
  //         id: "1",
  //         class: `${FIELDS_CLASSNAME.disabled_button} ${FIELDS_CLASSNAME.login_button}`,
  //       },
  //     },
  //     {
  //       element: "input",
  //       lable: {
  //         innerContents: "2비밀번호",
  //       },
  //       innerContents: "로그인",
  //       attribute: {
  //         type: "checkbox",
  //         id: "12",
  //         class: `${FIELDS_CLASSNAME.disabled_button} ${FIELDS_CLASSNAME.login_button}`,
  //       },
  //     },
  //   ],
  // },
  // {
  //   rules: [
  //     {
  //       element: "select",
  //       lable: {
  //         innerContents: "셀릭트 박스",
  //       },
  //       options: [
  //         { value: "1", name: "1번" },
  //         { value: "2", name: "2버ㅏㄴ" },
  //         { value: "3", name: "3버ㅏㄴ" },
  //         { value: "4", name: "4버ㅏㄴ" },
  //       ],
  //       innerContents: "셀릭트 박스",
  //       attribute: {
  //         type: "checkbox",
  //         id: "145421",
  //         class: ``,
  //       },
  //     },
  //   ],
  // },
  // {
  //   rules: [
  //     {
  //       element: "select",
  //       options: [
  //         { value: "1", name: "1번" },
  //         { value: "2", name: "2버ㅏㄴ" },
  //         { value: "3", name: "3버ㅏㄴ" },
  //         { value: "4", name: "4버ㅏㄴ" },
  //         { value: "5", name: "4버ㅏㄴ" },
  //         { value: "6", name: "4버ㅏㄴ" },
  //         { value: "7", name: "4버ㅏㄴ" },
  //       ],
  //       innerContents: "셀릭트 박스",
  //       attribute: {
  //         type: "checkbox",
  //         id: "14sdads25421",
  //         class: ``,
  //       },
  //     },
  //   ],
  // },
  // {
  //   class: "",
  //   rules: [
  //     {
  //       element: "textarea",
  //       lable: {
  //         innerContents: "1비밀번호",
  //       },
  //       innerContents: "로그인",
  //       attribute: {
  //         type: "textarea",
  //         id: "11",
  //         class: ``,
  //       },
  //     },
  //     {
  //       element: "textarea",
  //       lable: {
  //         innerContents: "2비밀번호",
  //       },
  //       innerContents: "로그인",
  //       attribute: {
  //         type: "checkbox",
  //         id: "22",
  //         class: `${FIELDS_CLASSNAME.disabled_button} ${FIELDS_CLASSNAME.login_button}`,
  //       },
  //     },
  //     {
  //       element: "textarea",
  //       lable: {
  //         innerContents: "3비밀번호",
  //       },
  //       innerContents: "로그인",
  //       attribute: {
  //         type: "checkbox",
  //         id: "33",
  //         class: `${FIELDS_CLASSNAME.disabled_button} ${FIELDS_CLASSNAME.login_button}`,
  //       },
  //     },
  //   ],
  // },
];

export { DEFAULT_LABLE, DEFAULT_VISIBILITY, FIELDS_CLASSNAME };
export default DEFAULT_VAILDFIELDS;

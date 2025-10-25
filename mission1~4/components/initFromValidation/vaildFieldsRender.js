import {
  DEFAULT_LABLE,
  DEFAULT_VISIBILITY,
  FIELDS_CLASSNAME,
} from "./DEFAULT_VAILDFIELDS.js";

const createVisibilityButton = (options) => {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = options.class;
  btn.innerHTML = `<img src="${options.off.src}" alt="${options.off.alt}" />`;
  return btn;
};

const togglePasswordVisibility = (input, btn, options) => {
  const img = btn.querySelector("img");
  const toText = input.type === "password";
  input.type = toText ? "text" : "password";
  if (img) {
    img.src = toText ? options.on.src : options.off.src;
    img.alt = toText ? options.on.alt : options.off.alt;
  }
};

const normalizeVisibility = (v) => {
  if (v === true) return { ...DEFAULT_VISIBILITY };
  if (v && typeof v === "object") {
    return {
      class: v.class || DEFAULT_VISIBILITY.class,
      on: { ...DEFAULT_VISIBILITY.on, ...v.on },
      off: { ...DEFAULT_VISIBILITY.off, ...v.off },
    };
  }
  return null; // visibility 미사용
};

// 속성 설정
const setAttributes = (el, attrs = {}) => {
  Object.entries(attrs).forEach(([key, value]) => {
    if (value == null) return;

    if (key === "id") {
      el.setAttribute("name", String(value));
    }

    // disabled 등 boolean 속성 처리
    if (["disabled", "readonly", "required", "checked"].includes(key)) {
      const truthy =
        value === true || value === "true" || value === "" || value === key;
      if (truthy) el.setAttribute(key, "");
      return;
    }

    // 일반 속성
    el.setAttribute(key, String(value));
  });
};

const vaildFieldRender = (rule, field) => {
  const element = rule.element;
  const lable = document.createElement("label");
  const attrs = rule.attribute ?? {};
  const visibilityOpts = normalizeVisibility(rule.isVisibility);

  const result = [];
  // 라벨 생성
  if (rule.lable) {
    lable.className = rule.lable.class ?? DEFAULT_LABLE.class;
    lable.innerHTML = rule.lable.innerContents ?? DEFAULT_LABLE.innerContents;
    setAttributes(lable, { for: rule.attribute.id });

    result.push(lable);
  }

  switch (element) {
    case "select": {
      const select = document.createElement("select");
      setAttributes(select, attrs);

      (rule.options ?? []).forEach(({ name, value }) => {
        const option = document.createElement("option");
        option.textContent = name ?? "";
        option.value = value ?? "";
        select.appendChild(option);
      });

      result.push(select);
      break;
    }

    case "button": {
      const button = document.createElement("button");
      button.id = field.id;

      if (rule.innerContents != null) {
        // HTML이 꼭 필요하지 않다면 textContent가 안전
        button.textContent = String(rule.innerContents);
      }

      setAttributes(button, attrs);
      result.push(button);
      break;
    }

    case "textarea": {
      const textarea = document.createElement("textarea");

      if (rule.innerContents != null) {
        // textarea는 value 사용 권장
        textarea.value = String(rule.innerContents);
      }

      setAttributes(textarea, attrs);
      result.push(textarea);
      break;
    }

    case "input": {
      // rule.attribute가 없을 수 있으니 안전 접근
      const isPassword = rule.attribute?.type === "password";

      if (isPassword) {
        const wrapper = document.createElement("div");
        const input = document.createElement("input");

        wrapper.className = FIELDS_CLASSNAME.visibility_container;
        setAttributes(input, attrs);

        const visBtn = createVisibilityButton(visibilityOpts);
        visBtn.addEventListener("click", () =>
          togglePasswordVisibility(input, visBtn, visibilityOpts)
        );

        wrapper.appendChild(input);
        wrapper.appendChild(visBtn);
        result.push(wrapper);
      } else {
        const input = document.createElement("input");
        setAttributes(input, attrs);

        if (rule.innerContents != null) {
          input.value = String(rule.innerContents);
        }

        result.push(input);
      }
      break;
    }

    default: {
      // 필요 시 무시 대신 경고/예외 처리
      console.warn(`Unsupported element type: ${element}`);
      break;
    }
  }
  return result;
};

const vaildFieldsRender = (fields, containerId = "input-container") => {
  const formContainer = document.getElementById(containerId);

  if (!formContainer) {
    console.warn(
      `[vaildFieldsRender] 컨테이너 #${containerId} 를 찾을 수 없습니다.`
    );
    return;
  }

  for (const field of fields) {
    // const fieldSetClass = field.class ?? "fieldset";
    const fieldSet = document.createElement("fieldset");
    let fieldarr = [];

    fieldSet.className = `${FIELDS_CLASSNAME.input_container} ${
      field.class ?? ""
    }`.trim();

    // 설명 속성이 있으면 legend 생성
    if (field.description) {
      const legend = document.createElement("legend");

      legend.innerHTML = field.description;
      legend.className = field.discriptionStyle;

      fieldSet.appendChild(legend);
    }

    for (const rule of field.rules) {
      fieldarr.push(vaildFieldRender(rule, field, fieldSet));
    }

    const flat = fieldarr.flatMap((el) => el);

    if (flat.length > 1) {
      flat.forEach((el) => fieldSet.appendChild(el));
      formContainer.appendChild(fieldSet);
    } else {
      formContainer.appendChild(flat[0]);
    }
  }
};

export { vaildFieldsRender };

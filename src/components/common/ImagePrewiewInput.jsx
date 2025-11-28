import { useEffect, useState } from "react";

function ImagePreviewInput() {
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) {
      setPreviewUrl(null);
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);
  };

  // 메모리 누수 방지용 (URL 해제)
  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <input type="file" accept="image/*" onChange={handleChange} />

      {previewUrl && (
        <img
          src={previewUrl}
          alt="미리보기"
          style={{ width: "200px", height: "200px", objectFit: "cover" }}
        />
      )}
    </div>
  );
}

export default ImagePreviewInput;

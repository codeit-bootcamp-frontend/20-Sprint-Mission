import { useCallback, useEffect, useRef, type ChangeEvent } from 'react';
import { useAddItemPageState } from './useAddItemPageState';

export function useAddItemPageController() {
  const {
    name,
    price,
    description,
    tagInput,
    tags,
    previewSrc,
    showImageLimitWarning,
    setName,
    setPrice,
    setDescription,
    setTagInput,
    setTags,
    setPreviewSrc,
    setShowImageLimitWarning,
  } = useAddItemPageState();

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleTagSubmit = useCallback(
    (value: string) => {
      if (tags.includes(value)) {
        return;
      }
      setTags((prev) => [...prev, value]);
      setTagInput('');
    },
    [setTags, setTagInput, tags],
  );

  const handleRemoveTag = useCallback(
    (label: string) => {
      setTags((prev) => prev.filter((tag) => tag !== label));
    },
    [setTags],
  );

  const handleUploadClick = useCallback(() => {
    if (previewSrc) {
      setShowImageLimitWarning(true);
      return;
    }
    setShowImageLimitWarning(false);
    fileInputRef.current?.click();
  }, [previewSrc, setShowImageLimitWarning]);

  const handleFileChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) {
        return;
      }
      setPreviewSrc(URL.createObjectURL(file));
      setShowImageLimitWarning(false);
    },
    [setPreviewSrc, setShowImageLimitWarning],
  );

  const handleRemovePreview = useCallback(() => {
    setPreviewSrc('');
    setShowImageLimitWarning(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, [setPreviewSrc, setShowImageLimitWarning]);

  useEffect(() => {
    return () => {
      if (previewSrc) {
        URL.revokeObjectURL(previewSrc);
      }
    };
  }, [previewSrc]);

  return {
    name,
    price,
    description,
    tagInput,
    tags,
    previewSrc,
    showImageLimitWarning,
    fileInputRef,
    setName,
    setPrice,
    setDescription,
    setTagInput,
    handleTagSubmit,
    handleRemoveTag,
    handleUploadClick,
    handleFileChange,
    handleRemovePreview,
  };
}

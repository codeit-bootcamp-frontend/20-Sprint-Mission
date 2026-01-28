import { useState } from 'react';

export function useAddItemPageState() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [previewSrc, setPreviewSrc] = useState('');
  const [showImageLimitWarning, setShowImageLimitWarning] = useState(false);

  return {
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
  };
}

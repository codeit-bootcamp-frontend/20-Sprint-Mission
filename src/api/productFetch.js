import api, { ENDPOINTS } from ".";

/**
 * @param { number } productId // 아이템 ID
 */
export const getProductDetail = async (productId) => {
  const data = await api.get(`${ENDPOINTS.products}/${productId}`);

  return data;
};

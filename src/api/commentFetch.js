import api, { ENDPOINTS } from ".";

/**
 * @param { number } productId // 아이템 ID
 * @param {{
 *   limit: number,
 *   cursor?: number,
 * }} params
 */
export const getProductCommentList = async (productId, params) => {
  const data = await api.get(`${ENDPOINTS.products}/${productId}/comments`, {
    params,
  });

  return data;
};

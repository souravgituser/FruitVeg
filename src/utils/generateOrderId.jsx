export const generateOrderId = () => {
  const timestamp = Date.now().toString(36);
  const randomString = Math.random().toString(36).substring(2, 8);
  const orderId = `O-${timestamp}${randomString}`.toUpperCase();
  return orderId;
};
export const today = new Date();
export const tomorrow = new Date();
export const yesterday = new Date();

tomorrow.setDate(today.getDate() + 1);
yesterday.setDate(today.getDate() - 1);

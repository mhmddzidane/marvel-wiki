// content type
export const getContentType = (type = "") => {
  switch (type) {
    case "form-data":
      return "multipart/form-data";
    default:
      return "application/json";
  }
};

// header
export const createHeader = (value = {}, base = {}) => ({
  ...base,
  ...value,
});

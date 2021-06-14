const apiUrl = {
  signIn: '/api/api/v1/customer/auth:signin',
  signUp: '/api/api/v1/customer/auth:signup',
  forgetPassword: '/api/api/v1/customer/password:forgot',
  resetPassword: '/api/api/v1/customer/password:reset',
  updatePassword: '/api/api/v1/customer/password',
  validateAccount: '/api/api/v1/customer/validateAccount',
  customer: '/api/api/v1/customer',
  language: '/api/api/v1/language',
  updateLanguage: '/api/api/v1/customer/language',
  countries: '/api/api/v1/country/search',
  createAddress: '/api/api/v1/address',
  getPhoneCodes: '/api/api/v1/country/getPhoneCodes',
  searchAddress: '/api/api/v1/address/search',
  address: '/api/api/v1/address',
  searchProduct: '/api/api/v1/product/search',
  makeSearch: '/api/api/v1/search',
  getCategoryTree: '/api/api/v1/category/tree?languageCode=',
  getCategoryTree: '/api/api/v1/category/tree?languageCode=',
  checkProductQuantity: '/api/api/v1/card/checkProductQuantity',
};

export default apiUrl;

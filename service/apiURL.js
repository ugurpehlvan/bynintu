const apiUrl = {
  signIn: '/api/api/v1/customer/auth:signin',
  signUp: '/api/api/v1/customer/auth:signup',
  forgetPassword: '/api/api/v1/customer/password:forgot',
  resetPassword: '/api/api/v1/customer/password:reset',
  updatePassword: '/api/api/v1/customer/password',
  validateAccount: '/api/api/v1/customer/validateAccount',
  customer: '/api/api/v1/customer',
  language: '/api/api/v1/language',
  countries: '/api/api/v1/country/search',
  createAddress: '/api/api/v1/address',
  getPhoneCodes: '/api/api/v1/country/getPhoneCodes',
  searchAddress: '/api/api/v1/address/search',
  address: '/api/api/v1/address',
};

export default apiUrl;

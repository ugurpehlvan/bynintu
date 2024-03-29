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
  searchOrders: '/api/api/v1/order/search',
  fetchOrder: '/api/api/v1/order/',
  address: '/api/api/v1/address',
  searchProduct: '/api/api/v1/product/search',
  makeSearch: '/api/api/v1/search',
  getCategoryTree: '/api/api/v1/category/tree?languageCode=',
  checkProductQuantity: '/api/api/v1/card/checkProductQuantity',
  createCardForLogin: '/api/api/v1/card/createCardForLogin',
  cardPage: '/api/api/v1/card/cardPage',
  createIteminCard: '/api/api/v1/card',
  stripeCheckoutIntent: '/api/api/v1/checkout/stripe/intent',
  stripeCheckoutSuccess: '/api/api/v1/checkout/stripe/success',
  homePageData: '/api/api/v1/dashboard',
  listSearch: '/api/api/v1/product/listSearch',
  staticProduct: '/api/api/v1/product',
  ipToCountry: '/api/api/v1/country/ipToCountry',
  getCargoPrice: '/api/api/v1/product/getCargoPrice',
};

export default apiUrl;

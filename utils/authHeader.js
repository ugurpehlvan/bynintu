const authHeader = () => ({
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  },
});

export default authHeader;

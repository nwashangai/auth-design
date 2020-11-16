export default (scope, data) => {
  switch (scope) {
    case '/':
      if (data.login.trim() < 1 || data.password.trim() < 1) {
        return {
          success: false
        };
      }
      break;
    case '/register':
      if (
        data.email.trim() < 1 ||
        data.name.trim() < 1 ||
        data.phone.trim() < 1 ||
        data.password.trim() < 1 ||
        data.email.trim() < 1 ||
        data.confirmPassword.trim() < 1
      ) {
        return {
          success: false
        };
      }
      break;

    default:
      if (data.email.trim() < 1) {
        return {
          success: false
        };
      }
      break;
  }
  return {
    success: true,
    message: 'success'
  };
};

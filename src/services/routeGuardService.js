
export const requireLogin = (to, from, next) => {
  if (localStorage.getItem('token')) {
    if (to.location.pathname != '/login' || to.location.pathname != '/') {
      next();
    }
    next.redirect('/tickets');
  };

  next.redirect('/login');

}
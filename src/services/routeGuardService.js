
export const requireLogin = (to, from, next) => {
  if (localStorage.getItem('token')) {

    const publicRoutes = ['/', '/login', '/signup']

    if (!publicRoutes.includes(to.location.pathname)) {
      next();
    }
    next.redirect('/tickets');
  };

  next.redirect('/login');

}
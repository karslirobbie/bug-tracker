
export const requireLogin = (to, from, next) => {
  const publicRoutes = ['/login', '/signup']

  if (localStorage.getItem('token')) {

    if (!publicRoutes.includes(to.location.pathname)) {
      next();
    }
    next.redirect('/tickets');
  };

  if (publicRoutes.includes(to.location.pathname)) next.redirect(to.location.pathname);

  next.redirect("/login");

}
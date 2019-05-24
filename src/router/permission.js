/*
 * Router config for Vue
 * ---------------------------------------------------------------------------------------------------------------------
 */
import router from './routes';

router.beforeEach((to, from, next) => {
  next();
});
router.afterEach((to, from, next) => {

});

export default router;

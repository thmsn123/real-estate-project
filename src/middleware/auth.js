export default function checkAuth ({ next, store }){
   
    if(!store.getters.isAuthenticated){
        return next({
           name: 'auth'
        })
    }
   
    return next()
   }
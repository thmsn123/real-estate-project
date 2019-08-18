import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        authToken: null,
        singlePost: [],
        loadedSales: [],
        loadedRentals: [],
        loadedComments: [],
        loadedNews: []
    },
    getters: {
        currentPost: state => route => {
            if (route.name === "salesdetails") {
                state.singlePost = state.loadedSales.find(x => x.id === route.params.id);
            } else if (route.name === "rentalsdetails") {
                state.singlePost = state.loadedRentals.find(x => x.id === route.params.id);
            } else {
                state.singlePost = state.loadedNews.find(x => x.id === route.params.id);
            }

            return state.singlePost;
        },
        loadedSales(state) {
            return state.loadedSales;
        },
        loadedRentals(state) {
            return state.loadedRentals;
        },
        loadedNews(state) {
            return state.loadedNews;
        },
        loadedComments(state) {
            return state.loadedComments;
        },
        isAuthenticated(state) {
            return state.authToken != null;
        }
    },
    mutations: {
        SET_LOADED_SALES(state, loadedSales) {
            state.loadedSales = loadedSales;
        },
        SET_LOADED_RENTALS(state, loadedRentals) {
            state.loadedRentals = loadedRentals;
        },
        SET_LOADED_NEWS(state, loadedNews) {
            state.loadedNews = loadedNews;
        },
        SET_LOADED_COMMENTS(state, loadedComments) {
            state.loadedComments = loadedComments;
        },
        FILTER_DATA(state, data) {
            if (data.filter === "type") {
                if (data.page === "sales") {
                    state.loadedSales = state.loadedSales.filter(
                        item => item.propertyType.toLowerCase() === data.event.target.textContent.toLowerCase()
                    )
                } else {
                    state.loadedRentals = state.loadedRentals.filter(
                        item => item.propertyType.toLowerCase() === data.event.target.textContent.toLowerCase()
                    )
                }
            } else if (data.filter === "price") {
                if (data.page === "sales") {
                    if (data.event.target.textContent.toLowerCase() === "to 20000 €") {
                        state.loadedSales = state.loadedSales.filter(
                            item => item.price <= 20000
                        )
                    } else if (data.event.target.textContent.toLowerCase() === "from 20000 to 50000 €") {
                        state.loadedSales = state.loadedSales.filter(
                            item => item.price >= 20000 && item.price <= 50000
                        )
                    } else if (data.event.target.textContent.toLowerCase() === "from 50000 to 100000 €") {
                        state.loadedSales = state.loadedSales.filter(
                            item => item.price >= 50000 && item.price <= 100000
                        )
                    } else {
                        state.loadedSales = state.loadedSales.filter(
                            item => item.price >= 100000
                        )
                    }
                } else {
                    if (data.event.target.textContent.toLowerCase() === "to 500 €") {
                        state.loadedRentals = state.loadedRentals.filter(
                            item => item.price <= 500
                        )
                    } else if (data.event.target.textContent.toLowerCase() === "from 100 to 500 €") {
                        state.loadedRentals = state.loadedRentals.filter(
                            item => item.price >= 100 && item.price <= 500
                        )
                    } else if (data.event.target.textContent.toLowerCase() === "from 500 to 1000 €") {
                        state.loadedRentals = state.loadedRentals.filter(
                            item => item.price >= 500 && item.price <= 1000
                        )
                    } else {
                        state.loadedRentals = state.loadedRentals.filter(
                            item => item.price >= 1000
                        )
                    }
                }
            } else {
                if (data.page === "sales") {
                    state.loadedSales = state.loadedSales.filter(
                        item => item.location.toLowerCase() === data.event.target.textContent.toLowerCase()
                    )
                } else {
                    state.loadedRentals = state.loadedRentals.filter(
                        item => item.location.toLowerCase() === data.event.target.textContent.toLowerCase()
                    )
                }
            }
        },
        SET_TOKEN(state, token) {
            state.authToken = token;
        },
        CLEAR_TOKEN(state) {
            state.authToken = null;
        }
    },
    actions: {
        getPosts(context, postType) {

            return axios.get("https://real-estate-project-e32ed.firebaseio.com/" + postType + ".json")
                .then(response => {
                    const loadedPosts = [];
                    for (const key in response.data) {
                        if (response.data[key].gallery) {
                            response.data[key].gallery = response.data[key].gallery.split(",");
                        }
                        loadedPosts.push({ ...response.data[key], id: key });
                    }

                    if (postType === "news") {
                        context.commit("SET_LOADED_NEWS", loadedPosts);
                    } else if (postType === "sales") {
                        context.commit("SET_LOADED_SALES", loadedPosts);
                    } else {
                        context.commit("SET_LOADED_RENTALS", loadedPosts);
                    }
                })
                .catch(e => context.error(e));
        },
        getComments(context) {
            return axios.get("https://real-estate-project-e32ed.firebaseio.com/comments.json")
                .then(response => {
                    const loadedComments = [];
                    for (const key in response.data) {
                        loadedComments.push({ ...response.data[key], id: key });
                    }

                    context.commit("SET_LOADED_COMMENTS", loadedComments);
                })
                .catch(e => console.log(e));
        },
        addPost(context, post) {
            return axios
                .post("https://real-estate-project-e32ed.firebaseio.com/" + post.postType + ".json?auth=" + context.state.authToken, post)
                .then(result => {
                    console.log(result);
                })
                .catch(e => console.log(e));
        },
        addComment(context, post) {
            return axios
                .post("https://real-estate-project-e32ed.firebaseio.com/comments.json", post)
                .then(result => {
                    console.log(result);
                })
                .catch(e => console.log(e));
        },
        authenticateUser(context, authData) {
            let authUrl = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDHidM-Bk0JA3eWcQ2M8iyXK4wqUWGHwmA";

            return axios.post(authUrl, {
                email: authData.email,
                password: authData.password,
                returnSecureToken: true
            }).then(result => {
                context.commit('SET_TOKEN', result.data.idToken);
                localStorage.setItem("token", result.data.idToken);
                localStorage.setItem('tokenExpiration', new Date().getTime() + +result.data.expiresIn * 1000);

                return result.status;
            })
                .catch(error => {
                    return error.response.status;
                });
        },
        initAuth(context) {
            let token = localStorage.getItem('token');
            let expirationDate = localStorage.getItem("tokenExpiration");

            if (token) {
                context.commit('SET_TOKEN', token);
            }

            if (expirationDate) {
                if (new Date().getTime() > +expirationDate || !token) {
                    context.dispatch('logOut');
                    return;
                }
            }
        },
        logOut(context) {
            alert('Logged out!');
            context.commit('CLEAR_TOKEN');
            localStorage.removeItem("token");
            localStorage.removeItem("tokenExpiration");
        }
    }
});
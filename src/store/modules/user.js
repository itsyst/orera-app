import Vue from 'vue'
import { firebaseAuth, firebaseDb } from 'boot/firebase'

// All Mutations, Actions, and getters will be namespaced under 'user'
export const namespaced = true;
let getAuthUser = window.sessionStorage.getItem('authUser');

export const state = {
  userDetails: {},
  users: {},
  authenticated: getAuthUser ? getAuthUser : false,
}

export const mutations = {
  SET_USER_Details(rootState, data) {
    rootState.userDetails = data
  },
  SET_USERS(state, data) {
    state.users = data
  },
  ADD_USER(state, data) {
    Vue.set(state.users, data.userId, data.userDetails)
  },
  UPDATE_USER(state, data) {
    let target = state.users[data.userId];
    if (target) {
      Object.assign(state.users[data.userId], data.userDetails)
    }
  },
  SET_AUTH(state, status) {
    state.authenticated = status
  }
}

export const actions = {
  registerUser({ dispatch }, data) {
    firebaseAuth.createUserWithEmailAndPassword(data.email, data.password)
      .then(() => {
        let userId = firebaseAuth.currentUser.uid;
        firebaseDb.ref('users/' + userId).set({
          name: data.name,
          email: data.email,
          isActive: false,
          image: "https://cdn.quasar.dev/img/boy-avatar.png"
        })
      })
      .catch(error => {
        var errorCode = error.code;
        if (errorCode == 'auth/weak-password') {
          let notification = {
            type: 'error',
            message: 'The password is too weak.'
          }
          dispatch('notification/add', notification, { root: true })
        } else {
          let notification = {
            type: 'error',
            message: "Please check your information and try again"
          }
          dispatch('notification/add', notification, { root: true })
        }

      })
  },
  loginUser({ commit, dispatch }, data) {
    firebaseAuth.signInWithEmailAndPassword(data.email, data.password).then(() => {
      if (firebaseAuth.currentUser.emailVerified) {
        commit('SET_AUTH', this.authenticated = true)
        this.$router.replace({
          name: 'Contacts'
        })
        window.sessionStorage.setItem('authUser', JSON.stringify(this.authenticated));
      }
      else {
        const notification = {
          type: 'error',
          message: 'Make sure that your email is verified!'
        }
        dispatch('notification/add', notification, { root: true })
      }
    }).catch(error => {
      const notification = {
        type: 'error',
        message: 'Please enter a valid email address and password'
      }
      dispatch('notification/add', notification, { root: true })
    })
  },
  logoutUser({ commit, dispatch }) {
    firebaseAuth.signOut()
      .then(() => {
        window.sessionStorage.removeItem('authUser');
        commit('SET_AUTH', this.authenticated = false)
        const notification = {
          type: 'success',
          message: ""
        }
        dispatch('notification/add', notification, { root: true })
      })
      .catch(error => {
        const notification = {
          type: 'error',
          message: "There was a problem logging out user"
        }
        dispatch('notification/add', notification, { root: true })
      })
  },
  watchAuth({ commit, dispatch, state }) {
    firebaseAuth.onAuthStateChanged(user => {
      if (user) {
        if (user.emailVerified) {
          // User is logged in.
          let userId = firebaseAuth.currentUser.uid;
          firebaseDb.ref('users/' + userId).once('value', snapshot => {
            let userDetails = snapshot.val()
            commit('SET_USER_Details', {
              userId: userId,
              name: userDetails.name,
              email: userDetails.email,
              image: userDetails.image,
              isActive: userDetails.isActive,
            })

          })
          dispatch('firebaseUpdateUser', {
            userId: userId,
            updates: {
              isActive: true,
            }
          })
        }
        dispatch('firebaseGetUsers')
      }
      else {
        // User is logged out.
        dispatch('firebaseUpdateUser', {
          userId: state.userDetails.userId,
          updates: {
            isActive: false,
          }
        }).then(() => {
          commit('SET_USERS', {})
        })
        commit('SET_USER_Details', {})
      }
    })
  },
  sendVerification({ dispatch }) {
    var user = firebaseAuth.currentUser;
    user.sendEmailVerification().then(() => {
      const notification = {
        type: 'success',
        message: "A verification email was sent to your inbox, may take up to 5min!"
      }
      dispatch('notification/add', notification, { root: true })

    }).catch((error) => {
      const notification = {
        type: 'error',
        message: "Something went wrong, Please try again later"
      }
      dispatch('notification/add', notification, { root: true })
    });
  },
  recoverPassword({ dispatch }, data) {
    firebaseAuth.sendPasswordResetEmail(data).then(() => {
      const notification = {
        type: 'success',
        message: "Your reset password link has been successfully sent"
      }
      dispatch('notification/add', notification, { root: true })
    }).catch((error) => {
      const notification = {
        type: 'error',
        message: "Please enter a valid email address"
      }
      dispatch('notification/add', notification, { root: true })
    });
  },
  firebaseUpdateUser({ }, data) {
    if (data.userId) {
      firebaseDb.ref('users/' + data.userId).update(data.updates)
    }
  },
  firebaseGetUsers({ commit }) {
    firebaseDb.ref('users').on('child_added', snapshot => {
      let userDetails = snapshot.val()
      let userId = snapshot.key;
      commit('ADD_USER', {
        userId,
        userDetails
      })
    })
    firebaseDb.ref('users').on('child_changed', snapshot => {
      let userDetails = snapshot.val()
      let userId = snapshot.key
      commit('UPDATE_USER', {
        userId,
        userDetails
      })
    })

  },
  firebaseSendMessage({ }, data) {
    firebaseDb.ref('chats/' + state.userDetails.userId + '/' + data.otherUserId).push(data.message)

    data.message.from = 'them'
    firebaseDb.ref('chats/' + data.otherUserId + '/' + state.userDetails.userId).push(data.message)
  },
  goVideoRoom() {
    return this.$router.replace('/room' + '/' + state.userDetails.userId)
  },
  sendRequest({ dispatch }, data) {
    alert('request sent')
  }
}

export const getters = {
  getUsers: state => {
    let usersFiltered = {}
    let user = firebaseAuth.currentUser;
    Object.keys(state.users).forEach(key => {
      if (key !== user.uid) {
        usersFiltered[key] = state.users[key]
      }
    })
    return usersFiltered
  }
}

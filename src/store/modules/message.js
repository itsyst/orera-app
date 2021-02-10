import Vue from "vue";
import { firebaseDb } from 'boot/firebase'

let messagesRef;

// All Mutations, Actions, and getters will be namespaced under 'message'
export const namespaced = true;

export const state = {
  messages: {},
}

export const mutations = {
  ADD_MESSAGE(state, data) {
    Vue.set(state.messages, data.messageId, data.messageDetails)
  },
  CLEAR_MESSAGES(state) {
    state.messages = {}
  }
}

export const actions = {
  firebaseGetMessages({ commit, rootState }, otherUserId) {
    let userId = rootState.user.userDetails.userId
    messagesRef = firebaseDb.ref('chats/' + userId + '/' + otherUserId)
    messagesRef.on('child_added', snapshot => {
      let messageDetails = snapshot.val()
      let messageId = snapshot.key
      commit('ADD_MESSAGE', {
        messageId,
        messageDetails
      })
    })
  },
  firebaseStopMessages({ commit }) {
    if (messagesRef) {
      messagesRef.off('child_added')
      commit('CLEAR_MESSAGES')
    }
  }
}

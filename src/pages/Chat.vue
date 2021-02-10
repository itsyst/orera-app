<template>
  <q-page ref="chatRef" class="chat flex column">
    <q-banner
      v-if="!otherUserDetails.isActive"
      class="bg-grey-4 text-center fixed-top"
    >
      {{ otherUserDetails.name }} is offline
    </q-banner>
    <div
      :class="{ invisible: !showMessages }"
      class="q-pa-md column col justify-end"
    >
      <q-chat-message
        v-for="(message, key) in messages"
        :key="key"
        :name="message.from == 'me' ? userDetails.name : otherUserDetails.name"
        :avatar="
          message.from == 'me' ? userDetails.image : otherUserDetails.image
        "
        size="6"
        :text="[message.text]"
        text-sanitize
        :sent="message.from == 'me' ? true : false"
      />
    </div>
    <q-footer elevated class="q-pa-xs">
      <q-toolbar>
        <q-form @submit="sendMessage" class="full-width row">
          <q-input
            v-model="newMessage"
            @blur="scrollToBottom"
            ref="newMessage"
            bg-color="white"
            label="Message"
            class="col 11"
            outlined
            rounded
            clearable
            dense
          >
          </q-input>
          <q-btn id="send" round dense flat type="submit" icon="send" />
        </q-form>
      </q-toolbar>
    </q-footer>
  </q-page>
</template>

<script>
import { mapActions, mapState } from "vuex";
import mixinUserDetails from "../mixins/mixin-user-details";
export default {
  mixins: [mixinUserDetails],
  data() {
    return {
      newMessage: "",
      showMessages: false
    };
  },
  computed: {
    ...mapState("message", ["messages"]),
    ...mapState("user", ["userDetails"])
  },
  methods: {
    ...mapActions("message", ["firebaseGetMessages", "firebaseStopMessages"]),
    ...mapActions("user", ["firebaseSendMessage"]),
    clearMessageForm() {
      this.$refs.newMessage.focus();
      this.newMessage = "";
    },
    sendMessage() {
      if (this.newMessage) {
        this.firebaseSendMessage({
          message: {
            text: this.newMessage,
            from: "me"
          },
          otherUserId: this.$route.params.otherUserId
        });
      }
      this.clearMessageForm();
    },
    scrollToBottom() {
      let chatPage = this.$refs.chatRef.$el;
      setTimeout(() => {
        window.scrollTo(0, chatPage.scrollHeight);
      }, 20);
    }
  },
  watch: {
    messages: function(val) {
      if (Object.keys(val).length) this.scrollToBottom();
      setTimeout(() => {
        this.showMessages = true;
      }, 200);
    }
  },
  mounted() {
    this.firebaseGetMessages(this.$route.params.otherUserId);
  },
  destroyed() {
    this.firebaseStopMessages();
  }
};
</script>
<style lang="scss" scoped>
.q-banner {
  width: 80vw;
  margin: 0 auto;
  top: 50px;
  z-index: 2;
  opacity: 0.8;
  @media (max-width: $breakpoint-xs-max) {
    width: 100%;
  }
}
.chat {
  position: relative;
  width: 80vw;
  max-width: auto;
  background-color: #faf9fc !important;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23e2a5b3' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
  @media (max-width: $breakpoint-xs-max) {
    width: 100%;
  }
}
.q-footer {
  width: 80vw;
  margin: 0 auto;
  @media (max-width: $breakpoint-xs-max) {
    width: 100%;
  }
}
#send {
  color: $white;
  margin: 0 auto;
}
.q-banner{
  z-index: 2;
  top: 50px;
}
</style>

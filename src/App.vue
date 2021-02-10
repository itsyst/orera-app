<template>
  <div id="q-app">
    <notification-container />
    <router-view />
  </div>
</template>
<script>
import { mapActions } from "vuex";
import NotificationContainer from "./components/NotificationContainer";
export default {
  components: {
    NotificationContainer
  },
  methods: {
    ...mapActions("user", ["watchAuth"])
  },
  mounted() {
    this.watchAuth();
  }
};
</script>
<style lang="scss">
.q-page-container {
  background: #e7ebf0;
}
</style>

<template>
  <q-item-section class="notification-container">
    <NotificationBar
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
    />
  </q-item-section>
</template>

<script>
import NotificationBar from "./NotificationBar";
import { mapState } from "vuex";

export default {
  components: { NotificationBar },
  computed: mapState("notification", ["notifications"])
};
</script>

<style lang="scss" scoped>
.notification-container {
  position: absolute;
  top: 450px;
  right: 9%;
  left: 9%;
  z-index: 1;
}
</style>

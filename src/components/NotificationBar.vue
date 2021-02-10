<template>
  <q-item-section class="notification-bar" :class="notificationTypeClass">
    <p>{{ notification.message }}</p>
  </q-item-section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    notification: {
      type: Object,
      required: true
    }
  },
  data() {
    return { timeout: null };
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
  },
  mounted() {
    this.timeout = setTimeout(() => this.remove(this.notification), 2500);
  },
  computed: {
    notificationTypeClass() {
      if (this.notification.type == "success")
        return `-text-${this.notification.type} text-positive`;
      else return `-text-${this.notification.type} text-primary`;
    }
  },
  methods: mapActions("notification", ["remove"])
};
</script>

<style lang="scss" scoped>
.notification-bar {
  margin: 2em 2em;
  font-weight: bold;
  text-align: center;
}
</style>

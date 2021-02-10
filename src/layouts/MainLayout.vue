<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated v-if="$route.name !== 'Orera'">
      <q-toolbar>
        <q-btn
          v-if="showBackArrow"
          icon="arrow_back_ios"
          flat
          dense
          v-go-back.single
        />
        <q-toolbar-title class="absolute-center">
          {{ title }}
        </q-toolbar-title>
        <div class="dialog absolute-right" v-if="showModalDialog">
          <q-btn
            @click="sliders = true"
            icon="more_vert"
            dense
            flat
            color="black"
          >
            <q-dialog v-model="sliders">
              <q-card class="card q-ma-md">
                <q-item dense>
                  <q-btn
                    @click="goVideoRoom"
                    class="absolute-left"
                    icon="videocam"
                    no-caps
                    flat
                    dense
                    label="Video"
                  />
                </q-item>
                <q-item dense>
                  <q-btn
                    @click="logoutUser"
                    to="/"
                    class="absolute-left"
                    icon="account_circle"
                    no-caps
                    flat
                    dense
                    label="Logout"
                  />
                </q-item>
              </q-card>
            </q-dialog>
          </q-btn>
        </div>
        <q-btn
          v-if="isLogged"
          @click="logoutUser"
          to="/"
          class="absolute-right q-pr-sm"
          icon="account_circle"
          no-caps
          flat
          dense
          label="Logout"
        />
      </q-toolbar>
    </q-header>
    <q-page-container
      class="row wrap justify-center items-center content-center"
    >
      <router-view />
      <home v-if="$route.name === 'Orera'" />
    </q-page-container>
  </q-layout>
</template>

<script>
import Home from "../components/Home";
import { mapState, mapActions } from "vuex";
import mixinUserDetails from "../mixins/mixin-user-details";
export default {
  mixins: [mixinUserDetails],
  data() {
    return {
      isLogin: false,
      carousel: false,
      showModal: false,
      backArrow: false,
      card: false,
      sliders: false
    };
  },
  components: {
    Home
  },
  computed: {
    ...mapState("user", ["userDetails"]),
    title() {
      let pathName = this.$route.name;
      let currentPath = this.$route.fullPath;
      if (currentPath.includes("/room")) return this.otherUserDetails.name;
      if (pathName == "Chat") return this.otherUserDetails.name;
      return pathName;
    },
    isLogged() {
      let pathName = this.$route.name;
      if (pathName === "Room" || pathName === "Contacts")
        return (this.isLogin = true);
    },
    showBackArrow() {
      let currentPath = this.$route.fullPath;
      if (currentPath.includes("/chat") || currentPath.includes("/room"))
        return (this.backArrow = true);
    },
    showModalDialog() {
      let pathName = this.$route.name;
      if (pathName === "Chat") return (this.showModal = true);
    }
  },
  methods: {
    ...mapActions("user", ["logoutUser", "goVideoRoom"])
  }
};
</script>

<style lang="scss">
.q-dialog__inner {
  margin-top: 35px;
  .card {
    position: absolute;
    top: 0;
    right: 0;
    height: 65px;
    width: 95px;
  }
}
.dialog {
  margin: 8px;
}
</style>

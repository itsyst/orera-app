<template>
  <q-page class="flex q-pa-md full-width justify-center">
    <q-card class="no-box-shadow">
      <q-tab-panel name="register">
        <register v-if="$route.path == '/auth/register'" />
      </q-tab-panel>
      <q-tab-panel name="login">
        <login v-if="$route.path == '/auth/login'" />
      </q-tab-panel>
    </q-card>
  </q-page>
</template>

<script>
import Login from "components/Login.vue";
import Register from "components/Register.vue";

export default {
  components: {
    Register,
    Login
  }
};
</script>
<style lang="scss" scoped>
.q-page {
  padding: 2rem 2rem;
  @media (max-width: $breakpoint-xs-max) {
    width: 100%;
  }
}
.q-card {
  width: 70vh;
  height: 450px;
  @media (max-width: $breakpoint-xs-max) {
    width: 100%;
  }
}
</style>

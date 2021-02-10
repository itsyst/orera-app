<template>
  <q-page>
    <q-btn flat round dense unelevated v-go-back="'/'">
      <q-icon name="reply" size="32px" class="q-mb-md" q-nohoverable />
    </q-btn>
    <q-form v-if="forgotPassword" @submit="simulateProgress">
      <q-input
        outlined
        type="email"
        v-model="formData.email"
        class="q-mb-md"
        label="Email"
      />
      <q-input
        outlined
        type="password"
        v-model="formData.password"
        class="q-mb-md"
        label="Password"
      />
      <div class="button">
        <q-btn
          :loading="loading1"
          class="full-width"
          color="primary"
          type="submit"
          label="Next"
        />
      </div>
      <p class="text q-pt-md q-mr-md text-right" @click="getNewPassword">
        Forgot Password?
      </p>
    </q-form>
    <q-form
      v-if="!forgotPassword"
      class="verification-form column justify-center items-center q-mt-xl"
      @submit="resetPassword"
    >
      <p class="text text-center q-pb-lg">
        Please enter you email address and check your inbox for the
        instructions.
      </p>
      <q-input
        outlined
        type="email"
        v-model="resetEmail"
        class="full-width q-ma-md"
        label="Email"
      />
      <q-btn
        :loading="loading1"
        class="full-width"
        color="primary"
        type="submit"
        label="Reset Password"
        icon-right="vpn_key"
      />
    </q-form>
  </q-page>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      formData: {
        email: "",
        password: ""
      },
      resetEmail: "",
      loading1: false,
      forgotPassword: true
    };
  },
  methods: {
    ...mapActions("user", ["loginUser", "recoverPassword"]),
    submitForm() {
      if (this.formData) {
        return this.loginUser(this.formData);
      }
    },
    getNewPassword() {
      this.forgotPassword = false;
    },
    resetPassword() {
      if (this.resetEmail != "") {
        this.recoverPassword(this.resetEmail);
      }
    },
    simulateProgress() {
      this.loading1 = true;
      this.submitForm();
      setTimeout(() => {
        this.loading1 = false;
      }, 2200);
    }
  }
};
</script>
<style lang="scss" scoped>
.q-btn {
  height: 54px;
}
.text {
  cursor: pointer;
  color: $primary;
}
</style>

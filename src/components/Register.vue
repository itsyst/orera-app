<template>
  <q-page>
    <q-btn flat round dense unelevated v-go-back="'/'">
      <q-icon name="reply" size="32px" class="q-mb-md" />
    </q-btn>
    <q-form @submit="submitForm">
      <q-input
        outlined
        type="text"
        v-model="formData.name"
        class="q-mb-md"
        label="Name"
      />
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
        :error="!isValid"
      >
        <template v-slot:error>
          Please use minimum 6 characters.
        </template></q-input
      >
      <div class="button">
        <q-btn
          :loading="loading1"
          class="full-width q-mb-md"
          color="primary"
          type="submit"
          label="Next"
          @click="simulateProgress"
        />
      </div>
      <p v-if="error" class="text text-center text-negative">
        {{ error }}
      </p>
    </q-form>
  </q-page>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        password: ""
      },
      error: "",
      loading1: false
    };
  },
  computed: {
    isValid() {
      return this.formData.password.length >= 6;
    },
    emailValidation() {
      return this.formData.email === "";
    },
    nameValidation() {
      return this.formData.name === "";
    }
  },
  methods: {
    ...mapActions("user", ["registerUser", "sendVerification"]),
    submitForm() {
      if (this.isValid && !this.emailValidation && !this.nameValidation) {
        this.registerUser(this.formData);
      } else {
        this.error = "Please fill all required fields!";
        setTimeout(() => {
          this.error = "";
        }, 2000);
      }
    },
    verifyEmail() {
      this.sendVerification();
    },
    resetForm(data) {
      data.name = "";
      data.email = "";
      data.password = "******";
    },
    simulateProgress() {
      this.loading1 = true;
      setTimeout(() => {
        this.sendVerification();
        this.loading1 = false;
        this.resetForm(this.formData);
      }, 2500);
    },
    contactUs() {
      this.$router.push("/contact-us");
    }
  }
};
</script>
<style lang="scss" scoped>
.button {
  .q-btn {
    height: 48px;
  }
}
.q-item__section {
  margin-top: 2rem;
}
.text {
  cursor: pointer;
}
</style>

<template>
  <q-page class="full-width q-pa-lg bg-white">
    <q-btn flat round dense unelevated v-go-back="'/'">
      <q-icon name="reply" size="32px" class="q-mb-md" q-nohoverable />
    </q-btn>
    <q-form v-if="shouldVerify" @submit="simulateProgress">
      <q-input
        outlined
        type="email"
        v-model="requestForm.email"
        class="q-mb-md"
        label="E-mail address to contact you *"
      />
      <q-input
        outlined
        type="password"
        v-model="requestForm.name"
        class="q-mb-md"
        label="Full name *"
      />
      <q-input
        v-model="requestForm.textareaModel"
        outlined
        clearable
        type="textarea"
        class="q-mb-md"
        label="Please describe in details *"
        hint="Please enter the details and Orera team will answer you as soon as possible."
      />
      <div class="button">
        <q-btn
          :loading="loading1"
          class="float-left"
          color="primary"
          type="submit"
          label="Submit"
        />
      </div>
      <p v-if="error" class="text text-center text-negative">
        {{ error }}
      </p>
    </q-form>
    <q-item-section
      v-if="!shouldVerify"
      class="verification-form row justify-center q-mt-xl"
    >
      <p class="text-center q-pb-xl">
        Your request has been successfully submitted and is being processed by
        the Orerateam, we'll get back to you as soon as possible.
      </p>
    </q-item-section>
    <q-footer class=" column justify-center text-center q-pt-md">
      <q-separator inset class="q-mb-md" />
      <div class="social q-ma-xs">
        <q-btn
          type="a"
          href="https://www.facebook.com/"
          target="_blank"
          flat
          round
          dense
        >
          <q-icon name="fab fa-facebook q-pa-xs" />
        </q-btn>
        <q-btn
          type="a"
          href="https://twitter.com/"
          target="_blank"
          flat
          round
          dense
        >
          <q-icon name="fab fa-twitter q-pa-xs"
        /></q-btn>
        <q-btn
          type="a"
          href="https://www.instagram.com/"
          target="_blank"
          flat
          round
          dense
        >
          <q-icon name="fab fa-instagram q-pa-xs"
        /></q-btn>
        <q-btn
          type="a"
          href="https://www.snapchat.com/"
          target="_blank"
          flat
          round
          dense
        >
          <q-icon name="fab fa-snapchat q-pa-xs"
        /></q-btn>

        <p class="copyright">© {{ new Date().getFullYear() }} Orera</p>
      </div>
    </q-footer>
  </q-page>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      requestForm: {
        name: "",
        email: "",
        textareaModel: ""
      },
      error: "",
      loading1: false,
      shouldVerify: true
    };
  },
  computed: {
    isValid() {
      return this.requestForm.textareaModel.length >= 10;
    },
    emailValidation() {
      return this.requestForm.email === "";
    },
    nameValidation() {
      return this.requestForm.name === "";
    }
  },
  methods: {
    ...mapActions("user", ["sendRequset"]),
    submitForm() {
      if (this.isValid && !this.emailValidation && !this.nameValidation) {
        this.sendRequset(this.requestForm);
        this.shouldVerify = false;
      } else {
        this.error = "Please fill all required fields!";
        setTimeout(() => {
          // we're done, we reset loading state
          this.error = "";
        }, 1800);
      }
    },
    simulateProgress() {
      // we set loading1 state
      this.loading1 = true;
      this.submitForm();
      // simulate a delay
      setTimeout(() => {
        // we're done, we reset loading state
        this.loading1 = false;
      }, 2200);
    }
  }
};
</script>
<style lang="scss" scoped>
.q-form {
  width: 70vw;
  margin: 0 auto;
}
.q-footer {
  margin: 10px auto 0;
  background-color: white;
  color: $primary;
}
.text {
  cursor: pointer;
  color: $primary;
}
.text {
  cursor: pointer;
}
</style>

<template>
  <q-page class="fit">
      <div class="row justify-center items-center ">
        <img
          src="../assets/desktop-orera.png"
          class="desktop absolute-left col-6 q-pa-xl desktop-only orientation-landscape"
        />
        <img
          src="../assets/logo.png"
          class="logo"
        />
        <img
          src="../assets/mobile-orera.png"
          class="mobile col absolute-right q-pa-xl desktop-only orientation-landscape		"
        />
      </div>
      <q-item>
        <q-item-section class="container column items-center q-pa-lg z-top ">
          <p class="text-bold text-center">
            Curious? Just ask! try it for free.
          </p>
          <q-btn
            to="/auth/register"
            color="primary"
            type="submit"
            class="q-mb-md"
          >
            Sign up
          </q-btn>
          <q-btn to="/auth/login" color="grey" type="submit">
            Sign in
          </q-btn>
        </q-item-section>
        <div
          class="platforms row justify-center items-center absolute-center desktop-only  orientation-landscape	"
        >
          <img src="../assets/app-store.png" class="apple col-4 q-pa-md" />
          <img src="../assets/google-app.png" class="android col-4 q-pa-md" />
          <img src="../assets/electron.png" class="electron col-4 q-pa-md" />
        </div>
      </q-item>
    <q-footer class=" column justify-center text-center q-pt-md">
      <div class="row justify-center">
        <q-item-section
          avatar
          v-for="image in images"
          :key="image.id"
          class="items-center"
        >
          <q-avatar>
            <img :src="image.src" />
          </q-avatar>
        </q-item-section>
      </div>
      <q-item-section>
        <small class="q-mt-md row justify-center">
          <p class="text q-pt-md q-mr-md text-right" @click="aboutOrera">
            About Orera
          </p>
          <p class="text q-pt-md q-mr-md text-right" @click="getTermsOfUse">
            Terms of use
          </p>
          <p class="text q-pt-md q-mr-md text-right" @click="getPrivacyPolicy">
            Privacy policy
          </p>
          <p class="text q-pt-md q-mr-md text-right" @click="getCookiesPolicy">
            Cookies policy
          </p>
          <p class="text q-pt-md q-mr-md text-right" @click="contactUs">
            Contact us
          </p>
        </small>
      </q-item-section>
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
export default {
  data() {
    return {
      images: [
        {
          id: 1,
          src: "https://cdn.quasar.dev/img/avatar6.jpg"
        },
        {
          id: 2,
          src: "https://cdn.quasar.dev/img/avatar5.jpg"
        },
        {
          id: 3,
          src: "https://cdn.quasar.dev/img/avatar4.jpg"
        },
        {
          id: 4,
          src: "https://cdn.quasar.dev/img/avatar2.jpg"
        },
        {
          id: 5,
          src: "https://cdn.quasar.dev/img/avatar1.jpg"
        }
      ]
    };
  },
  methods: {
    aboutOrera() {
      this.$router.push("about-orera");
    },
    getTermsOfUse() {
      this.$router.push("terms-of-use");
    },
    getPrivacyPolicy() {
      this.$router.push("privacy-policy");
    },
    getCookiesPolicy() {
      this.$router.push("cookies-policy");
    },
    contactUs() {
      this.$router.push("contact-us");
    }
  }
};
</script>

<style lang="scss" scoped>
.q-item__section--side {
  padding-right: 0;
}
.q-page{
  overflow: hidden;
  @media (max-height: $breakpoint-xs-max) {
    overflow:inherit;
  }
}
.mobile,
.desktop {
  height: 70vh;
  margin: 0 0.3rem;
}
.logo {
  margin: auto;
  height: 30vh;

  @media (max-width: $breakpoint-md-max) {
    height: 30vh;
  }

  @media (max-width: $breakpoint-xs-max) {
      height: 25vh;
  }
}
.container {
  margin-top: -2rem;
}
.platforms {
  top: 38vh;

  @media (max-height: $breakpoint-xs-max) and (orientation : landscape){
    display: none;
  }
}
.q-footer {
  margin: 10px auto 0;
  background-color: white;
  color: $primary;

  @media (max-height: $breakpoint-xs-max) and (orientation : landscape){
    position: absolute;
    bottom: auto;
    top: 70vh;
  }
}
.text {
  cursor: pointer;
  color: $primary;
}
</style>

<template>
  <q-page class="full-width q-pa-lg bg-white">
    <q-btn flat round dense unelevated v-go-back="'/'">
      <q-icon name="reply" size="32px" class="q-mb-md" />
    </q-btn>
    <q-item-section class="q-pa-xl bg-white">
      <div>
        <h6>1. What are cookies?</h6>
        <p>
          Cookies are small text files placed on your computer or device as you
          browse the Internet. Cookies can be used to collect, store and share
          bits of information about your activities across websites, including
          on Orera.
        </p>
        <p>
          They also allow us to remember things about your visit to Orera, such
          as your preferred language and other choices/settings and generally
          make the site easier for you to use. Orera uses both session cookies
          and persistent cookies. A session cookie is used to identify a
          particular visit to our site.
        </p>
        <p class="q-pb-md">
          These cookies expire after a short time or when you close your web
          browser after using our services. We use these cookies to identify you
          during a single browsing session, such as when you log into Orera. A
          persistent cookie will remain on your devices for a set period of time
          specified in the cookie. We use these cookies where we need to
          identify you over a longer period of time.
        </p>
      </div>
      <div>
        <h6>2. Why does Orera use cookies and similar technologies?</h6>
        <p>
          Orera uses cookies and similar technologies,to deliver and improve our
          services in various ways. We use cookies for the following purposes:
          <br />
        </p>
        <p>
          <strong class="q-mt-md">Authentication and security:</strong><br />
          To log you into Orera; To protect your security; and To help us detect
          and fight spam, abuse, and other activities that violate Orera’s Terms
          of Use.These technologies help authenticate your access to Orera and
          prevent unauthorized parties from accessing your account.
        </p>
        <p class="q-pb-md">
          <strong class="q-mt-md">Analytics and research:</strong><br />
          To help us better understand how people use our services, we work with
          Google Analytics. To find out more about their cookies and the privacy
          choices they offer, please visit the following link:
          <a class="text-red " href="https://policies.google.com/privacy?hl=en"
            >Google Analytics</a
          >.
        </p>
      </div>
      <div>
        <h6>3.How can I contact Orera if I have a question about cookies?</h6>
        <p>
          If you have any questions about our use of cookies, please click here.
          <a class="text-red " @click="contact">click here</a>
        </p>
      </div>
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
export default {
  data() {
    return {};
  },
  methods: {
    contact() {
      this.$router.replace("contact-us");
    }
  }
};
</script>
<style lang="scss" scoped>
.q-item__section {
  width: 88vw;
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
</style>

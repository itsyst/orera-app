<template>
  <q-page class="full-width q-pa-lg bg-white">
    <q-btn flat round dense unelevated v-go-back="'/'">
      <q-icon name="reply" size="32px" class="q-mb-md" />
    </q-btn>
    <q-item-section class="q-pa-xl bg-white">
      <div>
        <h6>1.What are these Terms of Use?</h6>
        <p class="q-pb-md">
          These terms are part of the legal documents to access and use of
          Orera, if you this application through the website or through the
          mobile.
        </p>
        <h6>2.What if I don’t accept these terms of use?</h6>
        <p class="q-pb-md">
          If you don’t accept these terms of use, you must stop using or
          accessing this application.
        </p>
        <h6>3.Who can use Orera?</h6>
        <p class="q-pb-md">
          The purpose of creating this application is to make it easier for
          students to communicate together and share knowledge as well as help
          each other to understand difficult exercises and tasks.
        </p>
        <h6>4.Do I need to register to use this application</h6>
        <p class="q-pb-md">
          To use Orera chat you have to be registred, You will provide us with
          your name, e-mail address, and password. You agree to provide truthy
          information. If you provide us with fake information, we have the
          right to suspend or delete your account.
        </p>
        <h6>5.What I am allowed to post on Orera?</h6>
        <p class="q-pb-md">
          It's totally prohibited to post or send anything racist and
          discriminative or illegal.
        </p>
        <h6>6.Can I deactivate my account?</h6>
        <p class="q-pb-md">
          If you choose to terminate you account you may just send us an
          email.Your account and the whole of your profile within 6 months will
          be terminated.
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

<script></script>
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

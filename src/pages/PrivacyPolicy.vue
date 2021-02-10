<template>
  <q-page class="full-width q-pa-lg bg-white">
    <q-btn flat round dense unelevated v-go-back="'/'">
      <q-icon name="reply" size="32px" class="q-mb-md" />
    </q-btn>
    <q-item-section class="q-pa-xl bg-white">
      <div>
        <h6>1. Agreeing to our rules and policies</h6>
        <p class="q-pb-md">
          When you use Orera chat, you are agreeing to our rules and policies,
          You should not use Orera if you do not agree with our Privacy Policy.
        </p>
        <h6>2. What data we collect from you?</h6>
        <p class="q-pb-md">
          When you register to use Orera chat or when you submit a request, you
          have to expleciitly write you name, email and password. this
          information you provide will be accesible from us to retrieve your
          password or update you account.
        </p>
        <h6>3. Do you collect data about my location?</h6>
        <p class="q-pb-md">
          Yes we may collect some information about your IP address and we use
          this information to customize our apllication.
        </p>
        <h6>4. Can I get my data from you?</h6>
        <p class="q-pb-md">
          You are the owner of you data, you can just submit a request to Orera
          team and we will send you a zipped file of you data within 24h. Same
          applies if you wont to distroy you data.
        </p>
        <h6>5. What are analytics?</h6>
        <p>
          Analytics is a helping tool to better understand how your use our
          application, we may use third-party web analytics on our application,
          such as Google Analytics.This service is kind of technology that
          collects data automatically about your device. o prevent Google
          Analytics from collecting or using your information, you may install
          the Google
          <a class="text-red" href="https://tools.google.com/dlpage/gaoptout/"
            target="_blank">analytics opt-out browser Add-on</a
          >.
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

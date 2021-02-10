<template>
  <q-page class="full-width q-pa-lg bg-white">
    <q-btn flat round dense unelevated v-go-back="'/'">
      <q-icon name="reply" size="32px" class="q-mb-md" />
    </q-btn>
    <q-item-section class="q-pa-xl bg-white">
      <div>
        <p>
          Orera is created by a group of students to help you better communicate
          with other students and share knowledge.
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
    return {
    };
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

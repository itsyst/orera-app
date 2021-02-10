<template>
  <q-page class="contacts full-width row justify-center">
    <q-list separator>
      <q-item
        v-for="(user, key) in getUsers"
        :key="key"
        :to="'/chat/' + key"
        clickable
        v-ripple
      >
        <q-item-section avatar>
          <q-avatar>
            <img :src="user.image" />
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ user.name }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon
            name="chat_bubble"
            :color="user.isActive ? 'teal-10' : 'grey-4'"
          />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { mapGetters} from "vuex";
export default {
  computed: {
    ...mapGetters("user", ["getUsers"])
  }
};
</script>
<style lang="scss" scoped>
.contacts {
  background: white;
  padding: 3rem;
}
.q-list {
  width: 80vw;
}
</style>

export default {
  computed: {
    otherUserDetails() {
      let details = this.$store.state.user.users[this.$route.params.otherUserId];
      if (details) {
        return details
      }
      return {}
    }
  }
}

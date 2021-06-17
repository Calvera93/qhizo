<template>
  <q-page class="flex">
    <q-list class="full-width q-ma-md">
      <q-item v-for="user in contacts" :key="user.id" class="q-ma-sm" clickable v-ripple to="/chat">
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white">{{ user.name.charAt(0) }}</q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ user.name }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="fiber_manual_record" :color="user.online ? 'green':'grey-6'" />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      contacts: [
        {
          id: 1,
          name: "Ruddy Jedrzej",
          online:false

        },
        {
          id: 2,
          name: "Mallorie Alessandrini",
          online:true

        },
        {
          id: 3,
          name: "Elisabetta Wicklen",
          online:false

        },
        {
          id: 4,
          name: "Seka Fawdrey",
          online:true
        }
      ]
    };
  }
};
</script>

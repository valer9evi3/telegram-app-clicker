<template>
  <div class="text-content">
    <h1>Your Friends</h1>

    <div class="center">
      <button class="referal" @click="copy">{{ referralText }}</button>
    </div>

    <h3 v-if="friends.length === 0">No friends yet</h3>

    <ul class="list">
      <li class="list-item" v-for="friend in friends" :key="friend.id">
        {{ friend.name }}
        <span class="list-btn done">50</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useTelegram } from '@/services/telegram';
import { useAppStore } from '@/stores/app';
import { computed, ref } from 'vue';

const { user } = useTelegram();
const appStore = useAppStore();
const referralText = ref('Your referral');

const friends = computed(() =>
  Object.keys(appStore.user.friends).map((id) => ({
    id,
    name: appUser.friends[id],
  }))
);

function copy() {
  navigator.clipboard.writeText(
    'https://t.me/testTelegramAppClicker_bot?start=' + user?.id
  );
  referralText.value = 'Copied!';
}
</script>

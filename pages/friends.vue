<script lang="ts" setup>
// id is discord UserID
const friends = ref([
  { id: '923313823195205645', url: 'www.deatg.com/' },
  { id: '1262793452236570667', url: 'cute.fm' },
  { id: '156320970448175104', url: 'git.io/sr229' },
  { id: '683830555674279994', url: 'github.com/atvaster' },
  { id: '1043599230247374869', url: 'puppy.f53.dev' },
  { id: '331576593342529537', url: 'github.com/Obscure2020' },
  { id: '721351466828300350', url: 'github.com/Ran-Mewo' },
  { id: '131802833199693825', url: 'greyw0lv.github.io' },
  { id: '176384198570016768', url: 'github.com/mistrk7' },
  { id: '909088839769944114', url: 'github.com/rhysdh540' },
])
onMounted(() => {
  let currentIndex = friends.value.length
  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--;
    [friends.value[currentIndex], friends.value[randomIndex]] = [friends.value[randomIndex], friends.value[currentIndex]]
  }
})

const avatarProxy = 'https://dp.nea.moe/avatar/'
</script>

<template>
  <div class="col gap2 centerChildren">
    <h1>Friends</h1>
    <ul class="friend_list wrap centerChildren">
      <li v-for="friend in friends" :key="friend.id" class="interactive">
        <NuxtLink :to="`https://${friend.url}`">
          <img :src="`${avatarProxy}${friend.id}.png`">
        </NuxtLink>
      </li>
    </ul>
    <p class="dim small">
      dm me on discord or
      <NuxtLink to="https://github.com/CodeF53/personal-site/blob/main/pages/friends.vue">
        open a PR
      </NuxtLink>
      to get added
    </p>
  </div>
</template>

<style>
.friend_list {
  max-width: min(40rem, var(--content-width));
  list-style-type: none;
  padding: 0;
  img {
    width: 4rem;
    height: 4rem;
    border-radius: 1rem;
  }
}
</style>

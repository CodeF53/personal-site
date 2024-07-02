<script lang="ts" setup>
const friends = [
  { id: '397230646231040002', url: 'https://shoritsu.xyz/' },
  { id: '1012800881474949221', url: 'https://viggy.moe/' },
  { id: '545581357812678656', url: 'https://megu.dev' },
  { id: '923313823195205645', url: 'https://www.deatg.com/' },
  { id: '929208515883569182', url: 'https://krstlskll69.github.io/' },
  { id: '334833943838720000', url: 'https://elh.gay/' },
  { id: '946388882436546640', url: 'https://wjuton.dev/' },
  { id: '381494697073573899', url: 'https://elissa.moe/' },
  { id: '343383572805058560', url: 'https://vendicated.dev/' },
  { id: '597158211459612675', url: 'https://dehtrashpanda.neocities.org/' },
  { id: '396571938081865741', url: 'https://ashley0143.xyz/?pw=f35_website' },
  { id: '455435762981273630', url: 'https://rozbrajacz.futbol' },
  { id: '821472922140803112', url: 'https://lunish.nl?utm_medium=friends' },
  { id: '899449746526183465', url: 'https://zaynedrift.com' },
  { id: '1089177218976075817', url: 'https://authenyo.xyz' },
  { id: '1215758862444007465', url: 'https://tiramisu.gay' },
  { id: '477497542205243392', url: 'https://alphexo.dev/' },
  // { id: '734079736615141426', url: 'https://catboys.zip/' },
]
const avatarProxy = 'https://dp.nea.moe/avatar/'
</script>

<template>
  <div class="col gap2 centerChildren">
    <h1>Friends</h1>
    <ul class="friend_list wrap centerChildren">
      <li v-for="friend in friends" :key="friend.id" class="interactive">
        <NuxtLink :to="friend.url">
          <img :src="`${avatarProxy}${friend.id}.png`">
        </NuxtLink>
      </li>
    </ul>
    <p class="dim small">
      DM me on discord to get added
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

<script lang="ts" setup>
type State = 'unchecked' | 'pending' | 'fail' | 'success'
const { onSuccess } = defineProps<{ onSuccess: () => void }>()

const state = ref<State>('unchecked')

const rand = (min: number, max: number) => (Math.random() * (max - min + 1)) + min

function startConfirmation() {
  if (state.value !== 'unchecked' && state.value !== 'fail')
    return
  state.value = 'pending'
  setTimeout(confirm, rand(2000, 5000)) // => 2-5 seconds to "confirm"
}
function confirm() {
  if (Math.random() < 0.8)
    return state.value = 'fail'
  state.value = 'success'
  setTimeout(onSuccess, 2500)
}
</script>

<template>
  <!-- This is SO fucking dumb, the icons are not built into the generated site, so it takes a couple secs to pop up -->
  <!-- by having the spinner in the dom ahead of time, the spinner doesn't take time to load, so people realize the captcha is fake later -->
  <Icon class="iconPreload" name="svg-spinners:ring-resize" />
  <Icon class="iconPreload" name="material-symbols:check" />

  <div id="notAnAsshole" class="row spaceBetween" :state @click="startConfirmation">
    <div class="confirmationArea row centerChildren">
      <div v-if="state === 'unchecked' || state === 'fail'" class="checkbox statusIcon" />
      <Icon v-if="state === 'pending'" class="spinner statusIcon" name="svg-spinners:ring-resize" />
      <Icon v-if="state === 'success'" class="success statusIcon" name="material-symbols:check" />

      <span v-if="state === 'fail'">
        Verification failed. Try again
      </span>
      <span v-else>
        I'm not a robot
      </span>
    </div>

    <div class="branding col alignCenter">
      <img class="captchaIcon" src="https://www.gstatic.com/recaptcha/api2/logo_48.png">
      <span class="brandName">reCAPTCHA</span>
      <span class="terms">Privacy - Terms</span>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

.iconPreload { display: none !important; }
#notAnAsshole {
  font-family: Roboto,helvetica,arial,sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings: "wdth" 100;

  width: 301px;
  height: 75px;
  border: 1px solid #d3d3d3;
  background: #f9f9f9;
  color: #000;
  color-scheme: light;
  border-radius: 3px;
  box-shadow: 0 0 4px 1px rgba(0,0,0,.08);

  cursor: pointer;
  &[state="pending"], &[state="success"] { cursor: default; }

  padding: 10px;
  padding-left: 0px;

  .confirmationArea {
    font-size: 14px;
  }
  .statusIcon {
    margin: 0 12px 2px 12px;
    height: 28px;
    width: 28px;
  }
  .spinner { color: #4d90fe; }
  .success { color: #039e56; }
  .checkbox {
    border-radius: 2px;
    background-color: #fff;
    border: 2px solid #444746;
  }

  .branding {
    color: #555;
    font-size: 10px;
    line-height: 10px;
    text-align: center;
  }
  .brandName { margin-top: 5px; }
  .terms { font-size: 8px }
  .captchaIcon {
    height: 32px;
    width: 32px;
    margin: 0 13px 0 13px;
  }
}
</style>

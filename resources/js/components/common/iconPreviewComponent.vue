<template>
    <div class="gjs-pn-buttons top_preview">
        <span class="gjs-pn-btn" @click="changeView('desktop')"><img src="/images/computer.svg" /></span>
        <span class="gjs-pn-btn" @click="changeView('tablet')"><img src="/images/ipad.svg" /></span>
        <span class="gjs-pn-btn" @click="changeView('mobile')"><img src="/images/smart-phone.svg" /></span>
    </div>
</template>

<script>
export default {
  props: ['divId' , 'typeData', 'innerIndex', 'mainIndex']
}
</script>

<template>
    <div class="row mb-3">
      <div class="col-md-8 themed-grid-col">
        <div class="pb-3">
          .col-md-8
        </div>
        <div class="row">
          <div class="col-md-6 themed-grid-col">.col-md-6</div>
          <div class="col-md-6 themed-grid-col"><tchat-card /></div>
        </div>
      </div>
      <div class="col-md-4 themed-grid-col">.col-md-4</div>
    </div>
</template>
<script>
import TchatCard from './TchatCard.vue'
export default {
    name: 'DashboardLayout',
    components: {
        TchatCard
    }
}
</script>
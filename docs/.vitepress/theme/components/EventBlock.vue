<script setup lang="ts">
defineProps<{
  id?: string | number
}>()
</script>

<template>
  <div class="c3-event">
    <div class="c3-event-row">
      <div class="c3-event-number">{{ id || '' }}</div>
      <div class="c3-event-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.c3-event {
  margin-bottom: 12px;
}

.c3-event:last-child {
  margin-bottom: 0;
}

.c3-event-row {
  display: flex;
  min-height: 36px;
}

.c3-event-number {
  width: 32px;
  min-width: 32px;
  background: rgba(20, 20, 35, 0.9);
  color: #7f8c8d;
  font-size: 12px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 12px;
  border-radius: 8px 0 0 8px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-right: none;
  user-select: none;
  font-weight: 500;
}

.c3-event-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
</style>

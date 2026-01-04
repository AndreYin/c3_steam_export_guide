<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="c3-event-sheet">
    <div class="c3-sheet-header">
      <div class="c3-header-icon">
        <span class="c3-icon">📋</span>
      </div>
      <span class="c3-sheet-title">{{ title || 'Event Sheet' }}</span>
    </div>
    <div class="c3-sheet-body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.c3-event-sheet {
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 16px;
  overflow: hidden;
  margin: 20px 0;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-family: 'Segoe UI', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 14px;
}

.c3-sheet-header {
  display: flex;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  gap: 12px;
}

.c3-header-icon {
  background: linear-gradient(135deg, #3498db, #2ecc71);
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.c3-icon {
  font-size: 18px;
}

.c3-sheet-title {
  color: white;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.5px;
  flex: 1;
}

.c3-sheet-body {
  padding: 15px;
}
</style>

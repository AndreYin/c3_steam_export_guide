<template>
  <div class="c3-condition">
    <div class="c3-condition-label">Condition</div>
    <div class="c3-condition-text">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.c3-condition {
  background-color: rgba(50, 40, 20, 0.6);
  border-left: 4px solid #f39c12;
  border-radius: 0 8px 8px 0;
  padding: 12px 15px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-left: 4px solid #f39c12;
}

.c3-condition-label {
  color: #95a5a6;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 4px;
  font-weight: 500;
}

.c3-condition-text {
  color: #e0e0e0;
  font-size: 14px;
  line-height: 1.5;
  font-family: 'Courier New', 'Consolas', monospace;
}
</style>

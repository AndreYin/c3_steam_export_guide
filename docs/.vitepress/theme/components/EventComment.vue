<template>
  <div class="c3-comment">
    <div class="c3-comment-icon">💡</div>
    <div class="c3-comment-text">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.c3-comment {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  background-color: rgba(41, 128, 185, 0.15);
  border-radius: 8px;
  padding: 12px 15px;
  margin-left: 30px;
  margin-top: 8px;
  border-left: 4px solid #3498db;
}

.c3-comment-icon {
  font-size: 14px;
  flex-shrink: 0;
}

.c3-comment-text {
  color: #b0d4e8;
  font-size: 13px;
  font-style: italic;
  line-height: 1.5;
}
</style>

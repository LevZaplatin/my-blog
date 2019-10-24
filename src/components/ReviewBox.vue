<template>
  <div class="review-box">
    <div class="review-wrapper">
      <p class="review-name"><a href="#">Владимир</a></p>
      <p class="review-description">Отличный программист, все ништяк было :)</p>
      <p class="review-name"><a href="#">Владимир</a></p>
      <p class="review-description">Отличный программист, все ништяк было :)</p>
      <p class="review-name"><a href="#">Владимир</a></p>
      <p class="review-description">Отличный программист, все ништяк было :)</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReviewBox',
};
</script>

<style scoped>
  .review-box {
    width: 296px;
    height: 265px;
    background: url(/static/i/bgotziv.png) top right no-repeat;
    overflow: hidden;
    margin-bottom: 20px;
  }

  .review-wrapper {
    padding: 79px 20px 0px 39px;
  }

  .review-description {
    font-size: 11px;
    color: #4c4c4c;
    margin-bottom: 6px;
  }
</style>

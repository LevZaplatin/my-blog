<template>
  <div class="friend-box">
    <div class="friend-wrapper">
      <p class="friend-name"><a href="#">Виталик</a></p>
      <p class="friend-description">Вместе пили</p>
      <p class="friend-name"><a href="#">Ariel.ru</a></p>
      <p class="friend-description">Дружу с порошком</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FriendBox',
};
</script>

<style scoped>
  .friend-box {
    width: 296px;
    height: 259px;
    background: url(/static/i/bgfriends.png) top right no-repeat;
    overflow: hidden;
  }

  .friend-wrapper {
    padding: 79px 20px 0px 39px;
  }

  .friend-description {
    font-size: 11px;
    color: #4c4c4c;
    margin-bottom: 6px;
  }
</style>

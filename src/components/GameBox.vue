<template>
  <div class="gameList withJS" style="padding-left:4px;">
    <span style="font-size: 18px; margin-bottom: 10px; display:block;"><a
      href="#">Games:)</a></span>
    <table width="559px" style="padding-left:10px;">
      <tr>
        <td><a href="#">Battle City</a></td>
        <td><a href="#">Exerion</a></td>
        <td><a href="#">Super Mario</a></td>
        <td><a href="#">BomberMan</a></td>
        <td><a href="#">Galaxian</a></td>
      </tr>
      <tr>
        <td><a href="#">Chip'n'Dale</a></td>
        <td><a href="#">Chip'n'Dale 2</a></td>
        <td><a href="#">Duck Tales</a></td>
        <td><a href="#">Duck Tales 2</a></td>
        <td><a href="#">Bugs Bunny</a></td>
      </tr>
      <tr>
        <td><a href="#">Contra</a></td>
        <td><a href="#">Battletoads</a></td>
        <td><a href="#">Darkwing Duck</a></td>
        <td><a href="#">Felix the Cat</a></td>
        <td><a href="#">Jungle Book</a></td>
      </tr>
      <tr>
        <td><a href="#">Dig Dug</a></td>
        <td><a href="#">Little Mermaid</a></td>
        <td><a href="#">Magic Jewelry</a></td>
        <td><a href="#">Mappy</a></td>
        <td><a href="#">Pac-Man</a></td>
      </tr>
      <tr>
        <td><a href="#">Prince of Persia</a></td>
        <td><a href="#">Popeye</a></td>
        <td><a href="#">Pinball</a></td>
        <td><a href="#">RoboCop</a></td>
        <td><a href="#">Smurfs</a></td>
      </tr>
      <tr>
        <td><a href="#">Tiny Toon</a></td>
        <td><a href="#">TeleSpin</a></td>
        <td><a href="#">Tom and Jerry</a></td>
        <td><a href="#">Wrecking Crew</a></td>
        <td><a href="#">Nats and Milk</a></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'GameBox',
};
</script>

<style scoped>
  .gameList {
    position: relative;
    top: -40px;
  }

  .gameList a {
    border-bottom: 1px #950000 dashed;
    text-decoration: none;
    color: #950000;
  }

  .gameList a:hover {
    border-bottom: 1px #950000 solid;
  }

  .withJS {
    visibility: hidden;
    display: none;
  }
</style>

<template>
  <div>
    <table class="content-table">
      <tr valign="top" class="left-column-tr">
        <td class="left-column">
          <game-box></game-box>
          <terminal-box></terminal-box>
          <router-view></router-view>
        </td>
        <td class="sidebar-cell">
          <!-- календарь -->
          <calendar-box></calendar-box>
          <!-- разделы -->
          <category-box></category-box>
          <!-- теги -->
          <tag-box></tag-box>
          <!-- проекты -->
          <project-box></project-box>
          <!-- разработки -->
          <dev-box></dev-box>
          <!-- отзывы -->
          <review-box></review-box>
          <!-- друзья -->
          <friend-box></friend-box>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import CalendarBox from '@/components/CalendarBox';
import CategoryBox from '@/components/CategoryBox';
import TerminalBox from '@/components/TerminalBox';
import ProjectBox from '@/components/ProjectBox';
import FriendBox from '@/components/FriendBox';
import ReviewBox from '@/components/ReviewBox';
import GameBox from '@/components/GameBox';
import TagBox from '@/components/TagBox';
import DevBox from '@/components/DevBox';

export default {
  name: 'Main',
  components: {
    ReviewBox,
    FriendBox,
    DevBox,
    ProjectBox,
    CalendarBox,
    TagBox,
    CategoryBox,
    GameBox,
    TerminalBox,
  },
};
</script>

<style scoped>
  .sidebar-cell {
    width: 312px;
    padding-left: 90px;
  }

  .content-table {
    width: 100%;
  }

  .left-column-tr {
    height: 32px;
  }

  .left-column {
    padding: 40px 0px 0px 33px;
    width: 559px;
  }
</style>

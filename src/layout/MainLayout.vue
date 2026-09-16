<script setup>
import { ref } from 'vue'
import { House, InfoFilled } from '@element-plus/icons-vue'

const isCollapse = ref(false)
const toggleSidebar = () => {
  isCollapse.value = !isCollapse.value
}
</script>

<template>
  <el-container class="layout-container">
    <el-aside :width="isCollapse ? '64px' : '200px'" class="sidebar">
      
      <!-- App Title Area -->
      <div class="app-title-area">
        <span v-if="!isCollapse">My App</span>
        <span v-else class="app-title-collapsed">M</span>
      </div>

      <el-menu 
        :default-active="$route.path" 
        router
        :collapse="isCollapse"
        class="sidebar-menu"
      >
        <el-menu-item index="/">
          <el-icon><House /></el-icon>
          <template #title>Home</template>
        </el-menu-item>
        <el-menu-item index="/about">
          <el-icon><InfoFilled /></el-icon>
          <template #title>About</template>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header class="header">
        <div class="toggle-btn" @click="toggleSidebar">
          ☰
        </div>
        
        <el-dropdown>
          <span class="user-dropdown">
            Admin 
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Profile</el-dropdown-item>
              <el-dropdown-item>Settings</el-dropdown-item>
              <el-dropdown-item divided>Logout</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-header>

      <el-main class="main-content">
        <!-- This is where Home and About will render -->
        <RouterView />
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.layout-container {
  height: 100vh;
}

.sidebar {
  background-color: #f5f7fa;
  border-right: 1px solid #e6e6e6;
  transition: width 0.3s;
  display: flex;
  flex-direction: column;
}

.app-title-area {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;
  color: #409EFF;
  border-bottom: 1px solid #e6e6e6;
  overflow: hidden;
  white-space: nowrap;
  flex-shrink: 0;
}

.app-title-collapsed {
  font-size: 24px;
}

.sidebar-menu {
  border-right: none;
  flex-grow: 1;
}

.header {
  text-align: right;
  background-color: #fff;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.toggle-btn {
  cursor: pointer;
  font-size: 20px;
}

.user-dropdown {
  cursor: pointer;
  display: flex;
  align-items: center;
}

.main-content {
  background-color: #f0f2f5;
  padding: 20px;
}
</style>

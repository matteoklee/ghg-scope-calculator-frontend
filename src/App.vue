<script setup>
import AppFooter from '@/components/navigation/AppFooter.vue'
import AppHeader from '@/components/navigation/AppHeader.vue'
import AppSidebar from '@/components/navigation/AppSidebar.vue'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar/index.js'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <SidebarProvider>
    <AppSidebar v-if="route.meta?.hasSidebar" />
    <main :class="{ 'with-sidebar': route.meta?.hasSidebar }">
      <SidebarTrigger v-if="route.meta?.hasSidebar" />
      <router-view v-slot="{ Component }">
        <template v-if="Component">
          <AppHeader />
          <Component :is="Component" />
          <AppFooter />
        </template>
      </router-view>
    </main>
  </SidebarProvider>
</template>

<style scoped>
</style>

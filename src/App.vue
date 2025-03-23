<script setup>
import AppFooter from '@/components/navigation/AppFooter.vue';
import AppHeader from '@/components/navigation/AppHeader.vue';
import AppSidebar from '@/components/navigation/AppSidebar.vue';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar/index.js';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<!--
<template>
  <SidebarProvider>
    <div class="flex min-h-screen w-full ">
      <AppSidebar v-if="route.meta?.hasSidebar" class="" />
      <main class="flex flex-col flex-grow min-h-screen relative">
        <SidebarTrigger v-if="route.meta?.hasSidebar" class="" />
        <router-view v-slot="{ Component }">
          <template v-if="Component">
            <AppHeader />
            <div class="flex-grow w-full p-4">
              <Component class="w-full" :is="Component" />
            </div>
            <AppFooter class="mt-auto" />
          </template>
        </router-view>
      </main>
    </div>
  </SidebarProvider>
</template>
-->
<template>
  <SidebarProvider>
    <AppSidebar v-if="route.meta?.hasSidebar" />
    <main class="w-full" :class="{ 'with-sidebar': route.meta?.hasSidebar }">
      <SidebarTrigger
        v-if="route.meta?.hasSidebar"
        class="absolute left-50 top-2.5 z-20 p-4 shadow-lg border bg-gray-50"
      />
      <div class="flex flex-col min-h-screen w-full">
        <router-view v-slot="{ Component }">
          <template v-if="Component">
            <AppHeader v-if="route.meta?.hasHeader" />
            <div class="flex-grow w-full">
              <Component class="" :is="Component" />
            </div>
            <AppFooter v-if="route.meta?.hasFooter" />
          </template>
        </router-view>
      </div>
    </main>
  </SidebarProvider>
</template>

<!--
<template>
  <SidebarProvider>
    <div class="flex min-h-screen w-full relative">
      <AppSidebar v-if="route.meta?.hasSidebar" class="peer transition-all duration-300 w-64" />

      <SidebarTrigger
        v-if="route.meta?.hasSidebar"
        class="absolute top-4 z-50 transition-all duration-300 peer-[.w-64]:left-64 peer-[.w-16]:left-16"
      />

      <main class="flex flex-col flex-grow min-h-screen">
        <router-view v-slot="{ Component }">
          <template v-if="Component">
            <AppHeader />
            <div class="flex-grow w-full p-4">
              <Component class="w-full" :is="Component" />
            </div>
            <AppFooter class="mt-auto" />
          </template>
        </router-view>
      </main>
    </div>
  </SidebarProvider>
</template>
-->

<!--
<template>
  <SidebarProvider>
    <AppSidebar v-if="route.meta?.hasSidebar" />
    <main class="w-full" :class="{ 'with-sidebar': route.meta?.hasSidebar }">
      <SidebarTrigger v-if="route.meta?.hasSidebar" />
      <router-view v-slot="{ Component }">
        <template v-if="Component">
          <AppHeader />
          <Component class="w-full" :is="Component" />
          <AppFooter class="" />
        </template>
      </router-view>
    </main>
  </SidebarProvider>
</template>
-->

<style scoped></style>

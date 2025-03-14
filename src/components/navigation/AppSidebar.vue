<script>
import { Calendar, Home, Inbox, Search, Settings } from 'lucide-vue-next'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem
} from '@/components/ui/sidebar/index.js'

export default {
  name: 'AppSidebar',
  components: { SidebarMenuButton, SidebarMenuItem, SidebarMenu, SidebarGroupContent, SidebarGroupLabel, SidebarGroup, SidebarContent, Sidebar },
  data() {
    return {
      items: [
        {
          title: "Home",
          url: "/",
          icon: Home,
        },
        {
          title: "About",
          url: "/about",
          icon: Inbox,
        },
        {
          title: "Calendar",
          url: "/",
          icon: Calendar,
        },
        {
          title: "Search",
          url: "/",
          icon: Search,
        },
        {
          title: "Settings",
          url: "/",
          icon: Settings,
        },
      ]
    }
  },
}
</script>

<template>
  <Sidebar>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Application</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem v-for="item in items" :key="item.title">
              <SidebarMenuButton asChild>
                <router-link :to="item.url">
                  <component :is="item.icon" />
                  <span>{{item.title}}</span>
                </router-link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
</template>

<style scoped>

</style>

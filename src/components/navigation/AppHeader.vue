<script>
import { Button } from '@/components/ui/button/index.js'
import { User, Settings, LogOut } from 'lucide-vue-next'
import {
  DropdownMenu,
  DropdownMenuContent, DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu/index.js'
import { useRoute } from 'vue-router'

export default {
name: "AppHeader",
  components: { DropdownMenuItem, DropdownMenuContent, DropdownMenuTrigger, DropdownMenu, Button, User, Settings, LogOut },
  setup() {
    const route = useRoute()
    return {
      route
    }
  },
  data() {
    return {
      isAuthenticated: true,
      userName: "admin",
      links: [
        { name: 'Startseite', path: '/' },
        { name: 'Datenerfassung', path: '/collect' },
        { name: 'Ergebnisse', path: '/results' },
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'About', path: '/about' },
      ]
    }
  },
  methods: {
    logout() {
      this.isAuthenticated = false;
      console.log('logout');
    },
    login() {
      this.isAuthenticated = true;
      console.log('login');
    },
    isActive(path) {
      return this.route.path === path;
    }
  },
  computed: {
  }
}
</script>

<template>
  <nav class="bg-white border-b border-gray-200 px-4 w-full z-10">
    <div class="flex flex-wrap justify-between items-center ml-6">
      <div class="flex items-center">
        <span class="self-center text-xl font-semibold whitespace-nowrap"></span>
      </div>

      <div class="flex items-center lg:order-2">
        <Button variant="ghost" size="icon" class="mr-2">
          <Settings class="h-5 w-5" />
        </Button>

        <DropdownMenu v-if="isAuthenticated">
          <DropdownMenuTrigger as="div">
            <Button variant="ghost" class="flex items-center space-x-2">
              <User class="w-5 h-5" />
              <span>{{ userName }}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" class="w-48">
            <DropdownMenuItem @click="logout" class="cursor-pointer">
              <LogOut class="mr-2 h-4 w-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <RouterLink v-else to="">
          <Button @click="login">Login</Button>
        </RouterLink>
      </div>

      <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
        <ul class="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0">
          <li v-for="link in links" :key="link.name">
            <RouterLink
              :to="link.path"
              class="block px-2 text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out relative py-3"
              :class="{
                'font-medium border-b-4 border-green-500': isActive(link.path),
                'border-b-2 border-transparent': !isActive(link.path)
              }"
            >
              {{ link.name }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>

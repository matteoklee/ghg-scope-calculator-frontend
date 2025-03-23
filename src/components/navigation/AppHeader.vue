<script>
import { Button } from '@/components/ui/button/index.js';
import { User, Settings, LogOut, Moon, Sun } from 'lucide-vue-next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu/index.js';
import { useRoute } from 'vue-router';

export default {
  name: 'AppHeader',
  components: {
    DropdownMenuItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
    DropdownMenu,
    Button,
    User,
    Settings,
    LogOut,
    Moon,
    Sun,
  },
  setup() {
    const route = useRoute();
    return {
      route,
    };
  },
  data() {
    return {
      isDarkMode: false,
      isAuthenticated: true,
      userName: 'admin',
      links: [
        { name: 'Startseite', path: '/' },
        { name: 'Datenerfassung', path: '/collect' },
        { name: 'Ergebnisse', path: '/results' },
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'About', path: '/about' },
      ],
    };
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
      return this.route.path === path || (path !== '/' && this.route.path.startsWith(path));
    },
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
      this.applyTheme();
    },
    applyTheme() {
      if (this.isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    },
  },
  mounted() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.isDarkMode = true;
    }
    this.applyTheme();
  },
};
</script>

<template>
  <nav class="border-b border-gray-200 px-4 w-full z-10">
    <div class="flex flex-wrap justify-between items-center ml-6">
      <div class="flex items-center">
        <span class="self-center text-xl font-semibold whitespace-nowrap"></span>
      </div>

      <div class="flex items-center lg:order-2">
        <Button @click="toggleTheme()" variant="ghost" size="icon" class="mr-2">
          <Sun v-if="!isDarkMode" class="h-5 w-5" />
          <Moon v-else class="h-5 w-5" />
        </Button>

        <Button variant="ghost" size="icon" class="mr-2">
          <Settings class="h-5 w-5" />
        </Button>

        <DropdownMenu v-if="isAuthenticated" class="">
          <DropdownMenuTrigger as="div">
            <Button variant="outline" class="flex items-center">
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
        <ul class="flex flex-col mt-4 lg:flex-row lg:space-x-4 lg:mt-0">
          <li v-for="link in links" :key="link.name">
            <RouterLink
              :to="link.path"
              class="block px-2 hover:text-primary relative py-3"
              :class="{
                'font-medium border-b-4 border-primary text-primary': isActive(link.path),
                'border-b-2 border-transparent text-gray-900': !isActive(link.path),
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

<style scoped></style>

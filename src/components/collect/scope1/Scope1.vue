<script>
import { Button } from '@/components/ui/button/index.js';
import {
  Users,
  ChevronRight,
  ChevronDown,
  Factory,
  Flame,
  Car,
  Wind,
  Plug,
  Zap,
  ThermometerSun,
  ThermometerSnowflake,
  Truck,
} from 'lucide-vue-next';
import {
  SidebarGroup,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar/index.js';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible/index.js';
import { useRoute } from 'vue-router';

export default {
  name: 'Scope1',
  components: {
    CollapsibleContent,
    CollapsibleTrigger,
    SidebarGroup,
    Collapsible,
    SidebarMenuButton,
    SidebarMenuSubItem,
    ChevronDown,
    SidebarMenuItem,
    SidebarMenuSub,
    Button,
    Users,
    ChevronRight,
  },
  setup() {
    const route = useRoute();
    return {
      route,
    };
  },
  data() {
    return {
      openState: true,
      scopeItems: {
        label: 'Scope 1: Direkte Emissionen',
        title: 'Scope 1',
        icon: Factory,
        path: '/collect/scope-1',
        items: [
          {
            title: 'Stationäre Anlagen (z.B. Heizungsanlagen)',
            path: '/collect/scope-1/stationary-equipment',
            icon: Flame,
          },
          {
            title: 'Mobile Anlagen (z.B. Firmenfahrzeuge)',
            path: '/collect/scope-1/mobile-equipment',
            icon: Car,
          },
          {
            title: 'Prozessemissionen',
            path: '/collect/scope-1/process-emissions',
            icon: Factory,
          },
          {
            title: 'Flüchtige Emissionen',
            path: '/collect/scope-1/fugitive-emissions',
            icon: Wind,
          },
        ],
      },
    };
  },
  methods: {
    toggleOpen() {
      this.openState = !this.openState;
    },
  },
};
</script>

<template>
  <div class="m-12">
    <div class="">
      <h1 class="text-4xl mb-6">Scope 1</h1>
      <p class="text-lg text-gray-700 text-justify mb-4">
        Direkte Emissionen aus eigenen oder kontrollierten Quellen.
      </p>
    </div>

    <div class="w-full my-2">
      <Collapsible :open="openState" @update:open="toggleOpen" class="">
        <CollapsibleTrigger asChild>
          <button class="w-full justify-start inline-flex items-center py-4">
            <ChevronDown v-if="openState" class="h-5 w-5 flex-shrink-0 mr-2" />
            <ChevronRight v-else class="h-5 w-5 flex-shrink-0 mr-2" />
            <span class="text-md font-bold text-black">{{ scopeItems.title }}</span>
          </button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div
            v-for="(item, itemIndex) in scopeItems.items"
            :key="itemIndex"
            class="flex flex-row justify-between items-center w-full shadow-md px-8 py-4 rounded-md text-black border my-2.5"
          >
            <div class="flex items-center">
              <component class="mr-2 h-5 w-5 flex-shrink-0" :is="item.icon" />
              <span class="block w-full truncate text-sm">
                {{ item.title }}
              </span>
            </div>
            <div>
              <router-link :to="item.path" class="inline-flex items-center">
                <span class="font-bold">Daten eingeben</span>
                <ChevronRight class="ml-2 w-5 h-5" />
              </router-link>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  </div>
</template>

<style scoped></style>

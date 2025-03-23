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
  CollapsibleTrigger
} from '@/components/ui/collapsible/index.js';
import { useRoute } from 'vue-router';

export default {
  name: 'ScopeView',
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
      openStates: [true, false, false],
      scopeItems: [
        {
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
        {
          label: 'Scope 2: Indirekte Emissionen aus Energiebezug',
          title: 'Scope 2',
          icon: Plug,
          path: '/collect/scope-2',
          items: [
            {
              title: 'Strom',
              path: '/collect/scope-2/electricity',
              icon: Zap,
            },
            {
              title: 'Dampf',
              path: '/collect/scope-2/steam',
              icon: ThermometerSun,
            },
            {
              title: 'Heizung (Fernwärme)',
              path: '/collect/scope-2/heating',
              icon: ThermometerSun,
            },
            {
              title: 'Kühlung',
              path: '/collect/scope-2/cooling',
              icon: ThermometerSnowflake,
            },
          ],
        },
        {
          label: 'Scope 3: Sonstige indirekte Emissionen',
          title: 'Scope 3',
          icon: Truck,
          path: '/collect/scope-3',
          items: [
            {
              title: 'Eingekaufte Waren und Dienstleistungen',
              path: '/collect/scope-3/purchased-goods',
            },
            { title: 'Kapitalgüter', path: '/collect/scope-3/capital-goods' },
            {
              title: 'Brennstoff- und energiebezogene Aktivitäten',
              path: '/collect/scope-3/fuel-energy',
            },
            {
              title: 'Vorgelagerter Transport und Distribution',
              path: '/collect/scope-3/upstream-transport',
            },
            { title: 'Abfall aus Betriebsabläufen', path: '/collect/scope-3/waste' },
            { title: 'Geschäftsreisen', path: '/collect/scope-3/business-travel' },
            { title: 'Pendeln der Mitarbeiter', path: '/collect/scope-3/commuting' },
            {
              title: 'Vorgelagerte geleaste Anlagen',
              path: '/collect/scope-3/upstream-leased-assets',
            },
            {
              title: 'Nachgelagerter Transport und Distribution',
              path: '/collect/scope-3/downstream-transport',
            },
            {
              title: 'Verarbeitung verkaufter Produkte',
              path: '/collect/scope-3/processing-sold-products',
            },
            { title: 'Nutzung verkaufter Produkte', path: '/collect/scope-3/use-sold-products' },
            {
              title: 'Entsorgung verkaufter Produkte',
              path: '/collect/scope-3/end-of-life-products',
            },
            {
              title: 'Nachgelagerte geleaste Anlagen',
              path: '/collect/scope-3/downstream-leased-assets',
            },
            { title: 'Franchises', path: '/collect/scope-3/franchises' },
            { title: 'Investitionen', path: '/collect/scope-3/investments' },
          ],
        },
      ],
    };
  },
  methods: {
    toggleOpen(index) {
      this.openStates[index] = !this.openStates[index];
    },
  },
};
</script>

<template>
  <div class="m-12">
    <!--
    <Button
      variant=""
      size="lg"
      class="text-md bg-white text-primary border-primary border hover:text-white"
    >
      Zurück
    </Button>
    -->
    <div class="">
      <h1 class="text-4xl mb-6">Collect and Update Data.</h1>
      <p class="text-lg text-gray-700 text-justify mb-4">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      </p>
    </div>

    <div class="w-full shadow-lg px-8 py-4 rounded-md text-black border my-4">
      <div class="flex flex-row justify-between items-center">
        <div class="inline-flex items-center">
          <Users class="mr-2 w-5 h-5"></Users>
          <span>Organisational Data</span>
        </div>
        <div>
          <router-link to="/" class="inline-flex items-center">
            <span class="font-bold">Open Data</span>
            <ChevronRight class="ml-2 w-5 h-5" />
          </router-link>
        </div>
      </div>
    </div>

    <div class="w-full my-2" v-for="(scope, index) in scopeItems" :key="index">
      <Collapsible :open="openStates[index]" @update:open="toggleOpen(index)" class="">
        <CollapsibleTrigger asChild>
          <button class="w-full justify-start inline-flex items-center py-4">
            <ChevronDown v-if="openStates[index]" class="h-5 w-5 flex-shrink-0 mr-2" />
            <ChevronRight v-else class="h-5 w-5 flex-shrink-0 mr-2" />
            <span class="text-md font-bold text-black">{{ scope.title }}</span>
          </button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div v-for="(item, itemIndex) in scope.items" :key="itemIndex"
               class="flex flex-row justify-between items-center w-full shadow-md px-8 py-4 rounded-md text-black border my-2.5">
            <div class="flex items-center">
              <component class="mr-2 h-5 w-5 flex-shrink-0" :is="item.icon" />
              <router-link :to="item.path" class="block w-full truncate text-sm">
                {{ item.title }}
              </router-link>
            </div>
            <div>
              <router-link to="/" class="inline-flex items-center">
                <span class="font-bold">Open Data</span>
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

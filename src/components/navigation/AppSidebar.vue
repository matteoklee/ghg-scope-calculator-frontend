<script>
import {
  Folder,
  ChevronDown,
  ChevronRight,
  Users,
  Factory,
  Plug,
  Truck,
  SquarePen,
  ChartBar,
  Files,
  List,
  Home,
  ShieldCheck,
  Info,
  Calculator,
  Flame,
  Car,
  Wind,
  Zap,
  ThermometerSnowflake,
  ThermometerSun,
  Grip,
  Copyright,
} from 'lucide-vue-next';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarSeparator,
} from '@/components/ui/sidebar/index.js';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible/index.js';

import { useRoute } from 'vue-router';

export default {
  name: 'AppSidebar',
  components: {
    SidebarFooter,
    SidebarHeader,
    SidebarSeparator,
    CollapsibleContent,
    CollapsibleTrigger,
    Collapsible,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenu,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarGroup,
    SidebarContent,
    Sidebar,
    Folder,
    ChevronDown,
    ChevronRight,
    Users,
    Factory,
    Plug,
    Truck,
    SquarePen,
    ChartBar,
    Files,
    List,
    Home,
    ShieldCheck,
    Info,
    Calculator,
    Flame,
    Car,
    Wind,
    Zap,
    ThermometerSnowflake,
    ThermometerSun,
    Grip,
    Copyright,
    SidebarMenuSubItem,
    SidebarMenuSub,
  },
  setup() {
    const route = useRoute();
    return {
      route,
    };
  },
  data() {
    return {
      openStates: [true, true, false],
      homeItems: [
        { label: 'Datenerfassung', title: 'Datenerfassung', icon: SquarePen, path: '/collect' },
        { label: 'Ergebnisse', title: 'Ergebnisse', icon: List, path: '/results' },
        { label: 'Dashboard', title: 'Dashboard', icon: ChartBar, path: '/dashboard' },
      ],
      resultItems: [
        { label: 'Neue Berechnung', title: 'Neue Berechnung', icon: SquarePen, path: '/collect' },
        {
          label: 'Berechnungsverlauf',
          title: 'Berechnungsverlauf',
          icon: ChartBar,
          path: '/results/history',
        },
        { label: 'Nachweise', title: 'Nachweise', icon: Files, path: '/results/evidence' },
      ],
      dashboardItems: [
        { label: 'Statistiken', title: 'Statistiken', icon: ChartBar, path: '/dashboard/stats' },
        { label: 'Nachweise', title: 'Nachweise', icon: Files, path: '/dashboard/evidence' },
        {
          label: 'Zertifizierungen',
          title: 'Zertifizierungen',
          icon: ShieldCheck,
          path: '/dashboard/certs',
        },
      ],
      scopeItems: [
        {
          label: 'Organisatorische Daten',
          title: 'Organisatorische Daten',
          icon: Users,
          path: '/collect/orga',
        },
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
  computed: {
    navItems() {
      if (this.route.path.startsWith('/collect')) {
        return this.scopeItems;
      } else if (this.route.path.startsWith('/dashboard')) {
        return this.dashboardItems;
      } else if (this.route.path.startsWith('/results')) {
        return this.resultItems;
      } else {
        return this.homeItems;
      }
    },
  },
};
</script>

<template>
  <Sidebar variant="floating" side="left" collapsible="icon">
    <!-- offcanvas -->

    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton class="py-8">
            <router-link to="/" class="flex items-center">
              <Calculator class="mr-2 h-6 w-6 flex-shrink-0" />
              <div class="flex flex-col items-start justify-start text-left truncate">
                <p class="text-xl text-primary font-semibold">CO2e Rechner</p>
                <p>nach GHG Protokoll</p>
              </div>
            </router-link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>

    <SidebarSeparator class="" />
    <SidebarContent>
      <!--
      <SidebarGroupLabel class="text-md font-medium text-black mx-2">
        <router-link to="/" class="inline-flex items-center">
          <Grip class="mr-4 h-5 w-5" />
          <span>Überblick</span>
        </router-link>
      </SidebarGroupLabel>
      -->

      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton class="px-3 py-5">
                <router-link to="/" class="flex items-center">
                  <Grip class="mr-2 h-4 w-4 flex-shrink-0" />
                  <span class="font-medium truncate text-sm text-black">Überblick</span>
                </router-link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>

      <!--
      <SidebarGroupLabel class="text-lg font-medium text-black uppercase justify-center">
        {{ route.meta?.label }}
      </SidebarGroupLabel>
      -->

      <SidebarSeparator class="" />
      <SidebarGroup v-for="(scope, index) in navItems" :key="index" class="">
        <!--
        <SidebarGroupLabel class="px-3 py-2 text-sm font-medium text-gray-500">
          {{ scope.label }}
        </SidebarGroupLabel>
        -->
        <SidebarGroupContent>
          <SidebarMenu>
            <div v-if="!scope.items">
              <SidebarMenuItem>
                <SidebarMenuButton asChild class="hover:bg-gray-200 px-3 py-5">
                  <router-link :to="scope.path" class="flex items-center">
                    <component class="mr-2 h-4 w-4 flex-shrink-0" :is="scope.icon" />
                    <span class="truncate text-sm font-medium text-black">{{ scope.title }}</span>
                  </router-link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </div>
            <div v-else>
              <Collapsible :open="openStates[index]" @update:open="toggleOpen(index)" class="">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton class="w-full justify-start px-3 py-5 hover:bg-gray-200">
                      <ChevronDown v-if="openStates[index]" class="h-4 w-4 flex-shrink-0" />
                      <ChevronRight v-else class="h-4 w-4 flex-shrink-0" />
                      <div class="flex items-center">
                        <component class="mr-2 h-4 w-4 flex-shrink-0" :is="scope.icon" />
                        <span class="truncate text-sm font-medium text-black">{{
                          scope.title
                        }}</span>
                      </div>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem v-for="(item, itemIndex) in scope.items" :key="itemIndex">
                        <div
                          class="flex items-center p-2 rounded-md transition-all duration-100"
                          :class="{
                            'text-black font-bold border border-primary': route.path === item.path,
                            'hover:bg-gray-200': route.path !== item.path,
                          }"
                        >
                          <component class="mr-2 h-4 w-4 flex-shrink-0" :is="item.icon" />
                          <router-link :to="item.path" class="block w-full truncate text-sm">
                            {{ item.title }}
                          </router-link>
                        </div>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            </div>
          </SidebarMenu>
        </SidebarGroupContent>
        <!-- <SidebarSeparator v-if="index < scopeItems.length - 1" class="my-2" /> -->
      </SidebarGroup>
    </SidebarContent>
    <SidebarSeparator />

    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton class="">
            <router-link to="/" class="flex items-center">
              <Copyright class="mr-2 h-4 w-4 flex-shrink-0" />
              <span class="text-sm">K&S Software GbR</span>
            </router-link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  </Sidebar>
</template>

<style scoped></style>

<script>
export default {
name: "AppHeader"
}
</script>

<template>
  <nav class="bg-white shadow-md p-4 flex justify-between items-center">
    <!-- Logo / Brand -->
    <div class="text-xl font-bold">Meine App</div>

    <!-- Mittige Navigation Links -->
    <div class="flex space-x-6">
      <RouterLink to="/" class="nav-link">Home</RouterLink>
      <RouterLink to="/about" class="nav-link">About</RouterLink>
      <RouterLink to="/datenerfassung" class="nav-link">Datenerfassung</RouterLink>
      <RouterLink to="/ergebnisse" class="nav-link">Ergebnisse</RouterLink>
      <RouterLink to="/dashboard" class="nav-link">Dashboard</RouterLink>
      <RouterLink to="/nachweise" class="nav-link">Nachweise</RouterLink>
    </div>

    <!-- Rechte Icons -->
    <div class="flex items-center space-x-4">
      <!-- Einstellungen Icon -->
      <button class="p-2 rounded-full hover:bg-gray-100">
        <Settings class="w-6 h-6" />
      </button>

      <!-- Benutzer Dropdown oder Login -->
      <Dropdown v-if="isAuthenticated">
        <DropdownTrigger>
          <button class="flex items-center space-x-2">
            <User class="w-6 h-6" />
            <span>{{ userName }}</span>
          </button>
        </DropdownTrigger>
        <DropdownContent>
          <DropdownItem @click="logout">Logout</DropdownItem>
        </DropdownContent>
      </Dropdown>

      <RouterLink v-else to="/login" class="btn-primary">Login</RouterLink>
    </div>
  </nav>
</template>

<style scoped>

</style>

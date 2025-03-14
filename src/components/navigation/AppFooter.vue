<script>
export default {
  name: 'AppFooter',
};
</script>

<template>
  <footer class="border-t py-4 px-8">
    <div class="container mx-auto flex flex-col md:flex-row items-center justify-between">
      <!-- Copyright -->
      <span class="text-sm text-gray-400">
        © 2025 <a href="/" class="hover:underline text-gray-600">Emissionen-Berechnen.de</a>. Alle
        Rechte vorbehalten.
      </span>

      <!-- Links -->
      <ul class="flex flex-wrap items-center mt-4 md:mt-0 space-x-6 text-sm text-gray-400">
        <li>
          <a href="#" class="hover:text-white">Über uns</a>
        </li>
        <li>
          <a href="#" class="hover:text-white">Datenschutz</a>
        </li>
        <li>
          <a href="#" class="hover:text-white">Kontakt</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style scoped></style>

<template>
  <div class="flex justify-center size-full items-center bg-gray-950">
    <div class="w-2/3 h-2/3 grid grid-cols-3 grid-rows-1 gap-4 place-items-center">
      <a
        v-for="elem of ['SponsorBlockViewer']"
        class="w-64 h-64 bg-sky-950 rounded-xl hover:bg-sky-800 text-sky-200 text-2xl"
        :href="'https://FlorianZahn.github.io./' + elem"
      >
        {{ elem }}
      </a>
    </div>
  </div>
</template>

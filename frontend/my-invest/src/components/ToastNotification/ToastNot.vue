<template>
  <div id="toast-success" class="flex items-center w-full max-w-xs p-4 mb-4 
    text-gray-500 bg-white
    rounded-lg shadow-sm
    dark:text-gray-400 dark:bg-gray-800
    border-solid border-1 border-gray-500
    ">
    <div class="
    inline-flex items-center justify-center rounded-lg
    shrink-0 w-8 h-8 
    text-green-500 bg-green-100 
    dark:bg-green-800
    dark:text-green-200
    ">
      <span class="material-symbols-outlined">
        check_circle
      </span>
    </div>
    <div class="ms-3 text-sm font-normal">Conta criada com sucesso</div>
    <button type="button" class="
    ms-auto -mx-1.5 -my-1.5 p-1.5 h-8 w-8
    bg-white text-gray-400
    dark:text-gray-500 dark:bg-gray-800
    inline-flex items-center justify-center
    hover:text-gray-900 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-700
    focus:ring-2 focus:ring-gray-300
    rounded-lg"
    data-dismiss-target="#toast-success"
    aria-label="Close"
    >
      <span class="material-symbols-outlined">
        close
      </span>
    </button>
  </div>
</template>
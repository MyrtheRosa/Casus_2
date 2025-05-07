<!-- Navbar, sticky bovenaan het scherm -->
<style scoped>

nav {
  transition: background-color 0.2s ease-in-out;
 
}

.bg-antraciet {
  background-color: rgba(44, 44, 44, 1);
  
}

.bg-transparent {
  background-color: rgba(45, 45, 45, 0.5);
}

#hero {
  transition: height 0.2s ease-in-out;
}


main {
  padding-top: 14rem;
}
</style>


 <template>
<nav class="sticky top-0 z-1000 flex items-center justify-between p-10 lg:px-8 text-white bg-transparent">
<div class="flex lg:flex-1">
    <a href="#" class="-m-1.5 p-1.5">
    <span class="sr-only">Your Company</span>
    <img class="h-8 w-auto"
        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="">
    </a>
</div>
<div class="hidden lg:flex lg:gap-x-12 cursor-pointer">
    <a href="#" class="menu-item text-xl font-semibold">Home</a>
    <a href="#" class="menu-item text-xl font-semibold">Diensten</a>
    <a href="#" class="menu-item text-xl font-semibold">Contact</a>
</div>
<div class="hidden lg:flex lg:flex-1 lg:justify-end">
    <a href="#" class="menu-item text-lg font-semibold">Log in <span aria-hidden="true">&rarr;</span></a>
</div>
</nav>
</template>
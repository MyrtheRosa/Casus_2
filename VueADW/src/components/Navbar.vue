<!-- Navbar, sticky bovenaan het scherm -->
<style scoped>

nav {
  transition: background-color 0.2s ease-in-out;
 
}

.bg-antraciet {
  background-color: rgba(44, 44, 44, 1);
  
}

.bg-transparent {
  background-color: rgba(44, 44, 44, 0.9);
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
    <a href="/" class="-m-1.5 p-1.5">
    <span class="sr-only">Your Company</span>
    <img class="h-22 w-auto"
        src="/images/adwLogo.png" alt="">
    </a>
</div>
<div class="hidden lg:flex lg:gap-x-12 cursor-pointer">
    <a href="/" class="menu-item text-xl font-semibold">Home</a>
    <a href="#" class="menu-item text-xl font-semibold">Diensten</a>
    <a href="ContactPage" class="menu-item text-xl font-semibold">Contact</a>
</div>
</nav>
</template>
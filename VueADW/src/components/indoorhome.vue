<template>
  <div class="card group">
    <div
      class="rectangle indoor relative overflow-hidden h-[40vh] lg:h-[62vh]"
      :style="{
        backgroundImage: 'url(https://cdn.hoog.design/2023/01/25001806/VSB-Wellness-Luxe-poolhouse-met-complete-thuis-wellness-07.jpg)',
      }"
    >
      <!-- Gradient overlay (luxurious gold) -->
      <div class="absolute inset-0 bg-gradient-to-b from-yellow-300/25 via-yellow-500/40 to-yellow-700/60 pointer-events-none mix-blend-multiply"></div>

      <!-- Soft glow / ambient shimmer -->
      <div
        class="absolute -top-10 -left-20 w-40 h-40 bg-white/20 rounded-full blur-3xl animate-slide pointer-events-none"
      ></div>

      <!-- Label in center -->
      <span
        class="label text-center text-white font-extrabold text-3xl lg:text-4xl z-10 drop-shadow-[0_3px_6px_rgba(0,0,0,0.4)] tracking-wide"
      >
        INDOOR
      </span>
    </div>

    <!-- Button -->
    <button class="btn">
      Indoor Services
    </button>
  </div>
</template>

<script setup>
// Geen script nodig
</script>

<style scoped>
@keyframes slide {
  0% { transform: translateX(-50%) translateY(0) rotate(25deg); }
  50% { transform: translateX(50%) translateY(10%) rotate(25deg); }
  100% { transform: translateX(-50%) translateY(0) rotate(25deg); }
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 350px;
  padding: 20px;
}

.rectangle {
  width: 100%;
  aspect-ratio: 3/4;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  background-size: cover;
  background-position: center;
}

.rectangle.indoor {
  border: 3px solid #FFD700; /* Gold border */
}

.group:hover .rectangle {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0,0,0,0.25);
}

.label {
  z-index: 10;
  text-transform: uppercase;
  /* Elegant warm golden glow */
  text-shadow: 
    0 0 10px rgba(255, 215, 0, 0.6),
    0 0 20px rgba(255, 215, 0, 0.8);
}

.btn {
  margin-top: 16px;
  padding: 12px 24px;
  border-radius: 12px;
  background: linear-gradient(to right, #FACC15, #EAB308);
  color: white;
  font-weight: 600;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.25);
}
</style>

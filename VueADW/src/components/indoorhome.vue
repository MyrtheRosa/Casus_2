
<template>
  <div class="card">
    <div class="rectangle" :style="{ backgroundImage: 'url(urlhierx2yayay)' }">
      <span class="label">Indoor</span>
    </div>
    <button class="btn">Indoor Services</button>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
}

.rectangle {
  width: 300px;
  height: 80vh;
  background-color:  #2a3b2a;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  position: relative;
}

.label {
  color: rgb(255, 233, 233);
  font-size: 32px;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
}

.btn {
  padding: 12px 24px;
  border: none;
  background-color: #000;
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #333;
}
</style>


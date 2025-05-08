<template>
    <div>
      <h1>Inbox</h1>
      <p>This is the inbox page.</p>
    </div>
  </template>
  
  <script>
  fetch('http://localhost:8000/api/contacts')
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.error('Error:', error)
  })

  export default {
    name: 'inbox' 
  }
  </script>
  
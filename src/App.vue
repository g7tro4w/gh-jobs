<template>
  <div id="app">
    <header>
      <h1>GitHub Jobs</h1>
      <h2>Find your dream job here!</h2>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<style>
  body{
    font-family: 'Roboto Condensed', sans-serif;
    text-rendering: optimizeLegibility;
  }
  #app {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    --white-color: #FFF;
    --black-color: #000;
    --default-state-color: #00a9fd;
    --danger-state-color: #F44336;
    --success-state-color: #4CAF50;
    --dark-state-color: #24292e;
    /* --default-state-color: #00a9fd;
    --default-state-color: #00a9fd;
    --default-state-color: #00a9fd; */
  }
  header {
    width: 100%;
    height: 100px;
    flex: 0 0;
    text-align: center;
  }
  main {
    width: 80%;
    flex: 1 0;
  }

  header h2 {
    color: #555;
  }
</style>

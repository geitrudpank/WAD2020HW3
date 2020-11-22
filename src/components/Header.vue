<template>
  <header>
    <nav>
      <div class="logo-container">
          <router-link to="home"><img src="../assets/logo.png" alt="postIt"></router-link>
      </div>
      <div class="search-container">
        <input type="text" name="search">
        <button type="button">Search</button>
      </div>

      <div class="avatar-container">
        <div class="avatar" id="avatar" style="padding: 0" @click="toggle = !toggle">
          <img class="avatar" v-bind:src="myValue.avatar">
        </div>
        <div class="dropdown" sytle="float:right" v-show="toggle">
          <div class="dropdown-content">
            <p id="user-name">{{ myValue.firstname }} {{ myValue.lastname }}</p>
            <p id="user-email">{{ myValue.email }}</p>
            <span class="separator"></span>
            <span>
              <router-link to="browse">Browse</router-link>
            </span>
            <span class="separator"></span>
            <span>
              <router-link to="login">Log Out</router-link>
            </span>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "User",
  computed: {
    myValue() {
      return this.$store.state.user;
    }
  },
  created() {
    this.$store.dispatch('loadUser');
  },
  data() {
    return {
      toggle: false
    }
  }
};

</script>

<style scoped>
* {
  font-family: 'Roboto Slab', serif;
  outline: none;
}
a {
  color: #40c4ff;
}

button {
  padding: 8px 16px;
  margin: 4px 0;
  color: #ffffff;
  background-color: #01579b;
  border: none;
  border-radius: 4px;
}

button:hover {
  box-shadow: 0 0 5px rgba(38, 50, 56, 0.7);
  cursor: pointer;
}

header {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
}

header:hover {
  box-shadow: 0 -20px 30px #4d4d4d;
}

nav {
  display: flex;
  background-color: #ffffff;
  align-items: center;
}

nav div {
  height: 30px;
  flex-grow: 4;
  padding: 10px;
}

nav div img {
  height: 100%;
  width: 30px;
  margin-left: 15px;
  border-radius: 100%;
  object-fit: cover;
  object-position: top center;
}

nav div.search-container > input {
  box-sizing: border-box;
  height: 30px;
  width: 80%;
  margin: 0;
  padding: 5px;
  border: 1px solid #e0e0e0;
}

nav div.search-container > button {
  height: 30px;
  width: 20%;
  margin: 0;
  padding: 5px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

nav div.avatar-container {
  margin-right: 15px;
  text-align: right;
}



.dropdown {
  position: relative;
  display: inline-block;
}


.dropdown-content {
  display: block;
  position: absolute;
  right: 0;
  background-color: white;
  color: black;
  min-width: 200px;
  height: auto;
  z-index: 1;
}

.dropdown-content p {
  color: black;
  display: block;
  text-align: left;
  padding: 0px 0px 0px 10px;
  margin-top: -5px;
  margin-left: -10px;

}

.dropdown-content a {
  color: #0277bd;
  display: block;
  text-align: left;
  margin: 0 -10px;
  padding: 10px 0px 10px 10px;
  border-top: 1px solid;
  border-color: #8a8a8a transparent transparent transparent;
}

.column {
  float: left;
  width: 45%;
  border: 1px solid rgb(228, 221, 221);
  height: 200px;
  margin: 10px;
  text-align: center;
  font-weight: 700;
}

.avatar-container:active .dropdown-content {
  display: block;
}
</style>
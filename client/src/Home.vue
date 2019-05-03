<template>
  <div>
    <ul class="list-unstyled">
  <li class="media" v-for="message in messages" :key="message._id">
    <img :src="message.imageURL" class="mr-3" :alt="message.subject">
    <div class="media-body">
      <h4 class="mt-0 mb-1">{{message.username}}</h4>
      <h5 class="mt-0 mb-1">{{message.subject}}</h5>
      {{message.message}} 
      <br />
      <small>{{message.created}}</small>
    </div>
  </li>
</ul>
   
  </div>
</template>

<script>
const API_URL = 'http://localhost:1234/messages';
export default {
  name: 'home',
  data: () => ({
    messages: []
  }),
  mounted() {
    fetch(API_URL).then(response => response.json()).then(result =>{
      console.log(result);
      console.log("API URL Copnsole");
      this.messages = result;
    })
  },
}
</script>

<style>

</style>

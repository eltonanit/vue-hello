
const {createApp} = Vue;

createApp({
    data(){
        return {
            hello: "Hello World",
            img: "https://www.mansarda.it/wp-content/uploads/2015/05/68893A2D-624C-4C9B-A597-01BA819012F4.jpg"
        }
    }
}).mount('#app')
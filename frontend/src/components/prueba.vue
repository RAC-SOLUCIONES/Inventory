<template>
<html>
    <head> 

    </head>
    <body>
        <h2>{{ message }}</h2>
        <button @click="updateMessage">prueba</button>
    </body>
</html>
</template>

<script>
export default{
    props:['initialMessage'],
    data(){
        return{
                message: this.initialMessage
        };
    },
    methods:{
        updateMessage(){
            this.message="prueba satisfactoria";
        }
    }
};


</script>
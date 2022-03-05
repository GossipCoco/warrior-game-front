<template>
    <div>
        Info sur le personnage
    </div>
</template>
<script>
export default{
    name: 'CharacterDetails',
    data(){
        return{
            character: {},
            url: ''
        }
    },
    mounted(){
        this.url = this.$route
        console.log(this.url)
    }
}
</script>
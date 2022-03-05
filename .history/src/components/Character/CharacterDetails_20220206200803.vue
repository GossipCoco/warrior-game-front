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
    created(){
        this.url = this.$route.params
        console.log(this.url)
    }
}
</script>
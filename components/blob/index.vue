<template>
    <div class="blob-wrap">
        <div id="blob"></div>
        <div id="blur"></div>
    </div>
</template>


<script>
export default {
    mounted() {

    
        const blob = document.getElementById("blob");

        window.onpointermove = event => { 
            const { clientX, clientY } = event;
        
        blob.animate({
            left: `${clientX}px`,
            top: `${clientY}px`
        }, { duration: 3000, fill: "forwards" });
        }
    }
}

</script>

<style src="~/components/blob/__blob.css" lang="css"></style>
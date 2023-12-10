<template>
    <div class="footer">
        <div class="footer__container center-wrap flex --just-space --align-center py-24">
            <div class="footer__side --copy">
                <div class="footer__side-copyright p --m">© 2023 Natalee.Romanova</div>
                <div @click="$store.dispatch('popup', 'policy')" class="footer__side-policy p --m link --color-white">Политика конфидениальности</div>
            </div>
            <div class="footer__side --callback"></div>
        </div>
    </div>
</template>


<script>
export default {
    
}
</script>

<style src="~/components/footer/__footer.css" lang="css"></style>
<template>
    <div class="page page-home">
        <Hello/>
        <About/>
        <Products/>
        <Questions/>
        <Contacts/>
    </div>
</template>

<script>

export default {
        head() {
        return {
            title: 'NATALEE ROMANOVA - перманентный маякияж в Крыму',
            meta: [
                {
                    hid: 'og:title',
                    name: 'og:title',
                    content: 'NATALEE ROMANOVA - перманентный маякияж в Крыму',
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Инновационные техники перманентного макияжа бровей, губ и век. Удаление некачественного татуажа. Обучение.',
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: 'Инновационные техники перманентного макияжа бровей, губ и век. Удаление некачественного татуажа. Обучение.',
                },
            ],
        }
    },
   methods: {}
}
</script>


<style>
    .page-home {
        padding-top: 9rem;
    }
</style>

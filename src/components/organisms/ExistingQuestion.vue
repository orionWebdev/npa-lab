<template>
    <div class="flex flex-col items-center">
        <div class="flex flex-row justify-center">
            <AtomHeadline :text="'Vorhandene Aussagen'" class="text-3xl text-green mt-20 mb-5"></AtomHeadline>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6 px-4">
            <div v-for="item in items" :key="item.id">
                <FormCard :title="item.title" :id="item.id" :correct="item.correct" :category="item.category"></FormCard>
            </div>
        </div>
    </div>
</template>

<script>
import FormCard from '../molecules/FormCard.vue';
import Items from '../../data.json'
import AtomHeadline from '../atoms/AtomHeadline.vue';

export default {
    name: 'ExistingQuestion',
    components: {
        FormCard,
        AtomHeadline
    },
    data() {
        return {
            items: Items
        }
    }
}

</script>
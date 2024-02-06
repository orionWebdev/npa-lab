<template>
  <div class="row">
    <div class="form-header flex flex-col items-center">
      <AtomHeadline :is="1" :text="headline"></AtomHeadline>
      <span class="font-bold pt-2 text-white">{{ category }}</span>
    </div>
  </div>
</template>

<script>
import AtomHeadline from '@/components/atoms/AtomHeadline.vue'

export default {
  name: 'FormHeader',
  components: {
    AtomHeadline
  },
  data() {
    return {
      headline: 'Eingabeformular',
      category: '(Kategorie)'
    }
  }
  // mounted() {
  //     this.fetchCategory();
  // },
  // methods: {
  //     fetchCategory() {
  //         fetch(API_URL)
  //             .then((response) => response.json())
  //             .then((data) => {
  //                 this.category = data.category;
  //             })
  //             .catch((error) => {
  //                 console.error("Error fetching category:", error);
  //             });
  //     },
  // },
}
</script>

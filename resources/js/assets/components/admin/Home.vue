<template>
    <div>
        This is Home Page
    </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
    created() {
        this.testStore();
    },
    computed: {
        ...mapGetters({
            test: 'test/GET_TEST_STATE'
        })
        // getter done
    },
    methods: {
        async testStore() {
            await this.$store.dispatch('test/TEST_ACTION')
                .then(res => {
                    console.log(res);
                })
                .catch(() => {
                    console.log(2);
                });
        }
        //actions done
    }
}
</script>

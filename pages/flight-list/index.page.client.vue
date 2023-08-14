<template>
    <div>

        <strong>
            SPA 
        </strong>

        <br>

        TEST
        TEST

        TEST
        TEST
        TEST
        TEST
        TEST
        TEST
        TEST
        TEST

        TEST
        TESTTESTTEST

        TEST
        TESTTEST

        TEST
        TESTTEST
        TEST

        TEST
        TEST
        TEST
        TEST
    </div>

    <button @click="count++">
        Click
    </button>

    {{ count }}
</template>

<script lang="ts" setup>
import {ref} from 'vue';

const count = ref(0);

</script>
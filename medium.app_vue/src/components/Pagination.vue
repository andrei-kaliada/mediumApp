<template>
    <div>
        <ul class="pagination">
            <li
            class="page-item"
            v-for="(page,index) in pages"
            :key="index"
            :class="{ active: page === currentPage}"
            >
                <router-link
                class="page-link"
                
                 :to="{path:url, query:{page:page}}">
                    {{page}}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import {range} from '@/helpers/utils';
    export default {
        name:"McvPagination",
        props:{
            total:{
                type:Number,
                required:true 
            },
            limit:{
                type:Number,
                required:true
            },
            currentPage:{
                type:Number,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        },
        computed:{
            pages(){
                const pageCount = Math.ceil(this.total / this.limit);
              return  range(1,pageCount)
               
            }
        }
    }
</script>

<style>

</style>
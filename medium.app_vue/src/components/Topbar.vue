<template>
    <nav class="navbar navbar-light">
        <div class="container">
            <router-link
            :to="{name:'GlobalFeed'}"
            class="navbar-brand"
            >
                Medium Clone
            </router-link>
            <ul
            class="nav navbar-nav pull-xs-right"
            >
                <li class="nav-item">
                     <router-link
                     class="nav-link"
                    :to="{name:'GlobalFeed'}"
                    exact
                    active-class="active"
                    >
                        Home
                    </router-link>
                </li>
                <template 
                v-if="isLoggedIn">
                    <li class="nav-item">
                     <router-link
                      class="nav-link"
                    :to="{name:'createArticle'}"
                    active-class="active"
                    exact
                    >
                    <i class="ion-compose"></i>
                         &nbsp;New Article
                    </router-link>
                </li>
                <li class="nav-item">
                     <router-link
                      class="nav-link"
                    :to="{name:'settings'}"
                    active-class="active"
                    exact
                    >
                    <i class="ion-gear-a"></i>
                         &nbsp;Settings
                    </router-link>
                </li>
                <li class="nav-item">
                     <router-link
                      class="nav-link"
                    :to="{name:'userProfile',params:{
                        slug:currentUser.username
                    }}"
                    active-class="active"
                    exact
                    >
                    <img 
                    class="user-pic"
                    :src="currentUser.image || require('@/assets/defaultUser.png')" 
                    alt="icon">
                         {{currentUser.username}}
                    </router-link>
                </li>
                </template>
                <template
                v-if="isAnonymous"
                >
                    <li class="nav-item">
                        <router-link
                        class="nav-link"
                        :to="{name:'login'}"
                        active-class="active"
                        exact
                        >
                            Sign in
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link
                        class="nav-link"
                        :to="{name:'register'}"
                        active-class="active"
                        exact
                        >
                            Sign up
                        </router-link>
                    </li>
                </template>
                 
            </ul>
        </div>
    </nav>

</template>

<script>
import {mapState, mapGetters} from 'vuex';
import {getterTypes} from '@/store/modules/auth';
export default{
    name: 'McvTopbar',

    computed:{
        ...mapState({
            // isLoggedIn: state => state.auth.isLoggedIn,
            // currentUser:state => state.auth.currentUser
        }),

        ...mapGetters({
            currentUser:getterTypes.currentUser,
            isLoggedIn:getterTypes.isLoggedIn,
            isAnonymous:getterTypes.isAnonymous,
        })
        // currentUser(){
        //     return this.$store.getters[getterTypes.currentUser]
        // },
        // isLoggedIn(){
        //     return this.$store.getters[getterTypes.isLoggedIn]
        // },
        // isAnonymous(){
        //     return this.$store.getters[getterTypes.isAnonymous]
        // }
    }
}
</script>

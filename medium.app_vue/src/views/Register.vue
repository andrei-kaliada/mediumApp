<template>
    <div class="auth-page">
        <div class="conteinr page">
            <div class="row">
                <div class="col-md-6 offset-md-3 col-xs-12">
                    <h1 class="text-xs-center">Sign Up</h1>
                    <p class="text-xs-center">
                        <router-link :to="{name: 'login'}">Need an account?</router-link>
                    </p>
                    VALIDATION ERRORS
                    <form @sumbit.prevent="onSubmit">
                        <fieldset class="form-group">
                            <input 
                            type="text" 
                            class="form-contol form-control-lg" 
                            placeholder="Username" 
                            />
                            <input 
                            type="text" 
                            class="form-contol form-control-lg" 
                            placeholder="Email"
                            />
                            <input 
                            type="text" 
                            class="form-contol form-control-lg" 
                            placeholder="Password" 
                            />
                            <button class="btn btn-lg btn-primary pull-xs-right">Sign Up</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name:'McvRegister'
}
</script>
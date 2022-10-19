<template>
    <div class="container">
        <header class="jumbotron">
            <h3>{{content}}</h3>
        </header>
    </div>
</template>

<script>
import UserService from '../services/user.service';
import EventBus from '../common/EventBus';

export default {
    name: 'WarehouseView',
    data() {
        return {
            content: ''
        };
    },
    mounted() {
        UserService.getItems().then(response => {
            this.content = response.data;
        },
            error => {
                this.content = (error.response && error.response.data) || error.message || error.toString();

                if(error.response && error.response.status === 403){
                    EventBus.dispatch("logout");
                }
            }
        );
    }
};
</script>
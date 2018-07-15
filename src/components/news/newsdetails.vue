<template>
    <div class="mb">
        <head-nav title="新闻详情"></head-nav>
        <div class="con ">
            <h2 class="title" v-text="newsDetails.title"></h2>
            <span class="time" v-text="newsDetails.time"></span>
            <span class="source">{{newsDetails.source}}</span>

            <img :src="newsDetails.picUrl" alt="" class="pic">
            <div class="content" v-html="newsDetails.content"></div>
            <p class="editor">
                <span>{{newsDetails.reporter}}</span>
                <span>责任编辑: {{newsDetails.editor}}</span>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                newsDetails:{}
            }
        },
        created(){
            {
                let id = this.$route.query.id
                let title = this.$route.query.title
                this.$ajax.get(this.dataURL('vue.php',title,id))
                    .then((res)=>{
                        //console.log(res.data)
                        this.newsDetails = res.data
                    })
            }
        }
    }
</script>

<style scoped lang="less">
    @rem:750/10rem;
    .mb{
        margin-bottom: 130/@rem;
    }
    .con{
        padding: 0 40/@rem;
        h2{
            text-align: left;
        }
        .title{
            font-size: 40/@rem;
            color: #3f4146;
        }
        .source{
            font-size: 24/@rem;
        }
        .time{
            font-size: 20/@rem;
        }
        .pic{
            display: block;
            margin: auto;
            width: 670/@rem;
        }
        .content{
            font-size: 32/@rem;
            text-align: left;
            text-indent: 2em;
        }
        .editor{
            display: flex;
            justify-content: space-between;
            color: #9d9ea3;
            font-size: 22/@rem;
        }

    }
</style>

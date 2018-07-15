<template>
    <div class="mb">
        <head-nav title="图片详情"></head-nav>
        <div class="photoImgs">
            <img class="preview-img" height="300" :key="index"  v-for="(item,index) in picList"  :src="item.picUrl"  @click="$preview.open(index,picList)" v-lazy="item.picUrl"  />
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                picList:[]
            }
        },
        created(){
            let title = this.$route.query.title
            let id = this.$route.query.id
            this.$ajax.get( this.dataURL('vue.php',title,id) )
                .then((res)=>{
                    res.data.forEach((item,index)=>{
                        item.src = item.picUrl
                        item.w = 300
                        item.h = 200

                    })
                    this.picList = res.data
                })
        },
        methods:{

        }
    }
</script>

<style lang="less">
    @rem:750/10rem;
    .mb{
        margin-bottom: 130/@rem;
    }
    .photoImgs{
        padding:40/@rem 40/@rem 0;
        background: white;
        position: relative;
        img{
            display: block;
            width: 670/@rem;
            margin-bottom: 30/@rem;
            object-fit:cover;
        }
    }
</style>

<template>
    <div class="mb map" id="map">

    </div>
</template>

<script>
    import AMap from 'AMap'
    export default {
        data() {
            return {
                address:{},
            }
        },
        mounted(){
            var geolocation;
            var arr = [];
            var map = new AMap.Map('map',{
                resizeEnable: true,
                zoom: 17,
            });

            let self = this;
            let marker = new AMap.Marker({
                position: map.getCenter()
            });
            marker.setMap(map);

            function fn(){
                marker.setTitle(self.address.address);

                marker.setLabel({
                    offset: new AMap.Pixel(-55, -36),
                    content: self.address.address
                });
            }

            //解析定位结果
            let onComplete = (data) => {
                this.$set(this.address,'address',data.formattedAddress); // 重要
                fn();
            }
            map.plugin('AMap.Geolocation', function() {
                geolocation = new AMap.Geolocation({
                    enableHighAccuracy: true,
                    timeout: 10000,
                    zoomToAccuracy: true,
                });
                geolocation.getCurrentPosition();
                AMap.event.addListener(geolocation, 'complete', onComplete);//返回定位信息
                AMap.event.addListener(geolocation, 'error', onError);      //返回定位出错信息
            });


            function onError(data) {
            }
        }
    }
</script>

<style scoped lang="less">
    @rem:750/10rem;
    .mb{
        margin-bottom: 130/@rem;
    }
    .map{
        height: 100%;
    }
    .amap-marker-label{
        padding: 10px 20px !important;
        background-color: rgba(255,255,255,0.2) !important;
    }
</style>

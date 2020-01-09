<template>
    <el-tabs v-model="activeName" v-show="isSingleMode">
        <el-tab-pane name="powerControl">
            <span slot="label">
                <i class="fa fa-power-off m-r-5" aria-hidden="true"></i>
                Switch
            </span>
            <el-col :md="6" :sm="12">
                <div class="info-box">
                    <div class="info-box-icon bg-SaddleBrown">
                        <svg t="1577947373271" class="icon m-t-15 pointer" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4134"
                         width="42" height="42" @click="shutDown()">
                        <path d="M512 382.892006a63.815334 63.815334 0 0 0 63.815334-63.815334V63.815334a63.815334 63.815334 0 0 0-127.630668 0v255.261338a63.815334 63.815334 0 0 0 63.815334 63.815334z" p-id="4135" :fill="shutdownIconColor"></path>
                        <path d="M809.889981 244.412731a63.815334 63.815334 0 0 0-85.257287 94.893402A312.567508 312.567508 0 0 1 831.076672 574.338009 319.076672 319.076672 0 0 1 192.923328 574.338009a312.567508 312.567508 0 0 1 106.443978-235.031876A63.815334 63.815334 0 0 0 214.110019 244.412731a446.707341 446.707341 0 1 0 595.779962 0z" p-id="4136" :fill="shutdownIconColor"></path>
                        </svg>
                        <!-- <p class="info-box-icon-title">shutdown</p> -->
                    </div>
                    <el-button type="primary" size="small" @click="shutDown()">Shutdown</el-button>
                </div>   
            </el-col>

            <el-col :md="6" :sm="12">
                <div class="info-box">
                    <div class="info-box-icon bg-yellow">
                        <svg t="1577952813879" class="icon  m-t-15 pointer" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9825"
                         width="45" height="45"  @click="reboot()">
                        <path d="M810.666667 341.333333l-170.666667 170.666667h128c0 141.226667-114.773333 256-256 256a250.453333 250.453333 0 0 1-119.466667-29.866667l-62.293333 62.293334A338.346667 338.346667 0 0 0 512 853.333333c188.586667 0 341.333333-152.746667 341.333333-341.333333h128l-170.666666-170.666667zM256 512c0-141.226667 114.773333-256 256-256 43.093333 0 84.053333 10.666667 119.466667 29.866667l62.293333-62.293334A338.346667 338.346667 0 0 0 512 170.666667c-188.586667 0-341.333333 152.746667-341.333333 341.333333H42.666667l170.666666 170.666667 170.666667-170.666667H256z" :fill="rebootIconColor" p-id="9826"></path>
                        </svg>

                        <!-- <p class="info-box-icon-title">reboot</p>  -->
                    </div>
                    <el-button type="primary" size="small" @click="reboot()">Reboot</el-button>
                </div>  
            </el-col>
            
        </el-tab-pane>
        <el-tab-pane name="timerPowerControl">
            <span slot="label">
                <svg t="1577949421083" class="icon m-r-5" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6968" width="13" height="13">
                <path d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m0 938.678C277.339 938.678 85.322 746.66 85.322 512S277.34 85.322 512 85.322 938.678 277.34 938.678 512 746.66 938.678 512 938.678z" p-id="6969" :fill="timerSwitchIcon"></path>
                <path d="M717.262 445.935H547.378V239.484c0-24.774-16.979-41.29-42.447-41.29-25.5 0-42.48 16.516-42.48 41.29v247.742c0 16.516 12.751 33.032 25.468 37.161 4.262 4.13 12.75 4.13 17.012 4.13h212.331c25.501 0 42.48-16.517 42.48-41.291s-16.979-41.29-42.48-41.29z" p-id="6970" :fill="timerSwitchIcon"></path>
                </svg>
                Timer Switch
            </span>
            <el-col :md="12" :sm="24">
                <div class="rectangle-box">
                    <div class="info-box-icon">
                        <svg t="1578389568714" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8628" width="36" height="36">
                        <path d="M512 1003.52C241.664 1003.52 20.48 782.336 20.48 512 20.48 292.864 167.936 98.304 378.88 38.912c10.24-2.048 22.528 4.096 24.576 14.336 2.048 10.24-4.096 22.528-14.336 24.576C196.608 133.12 61.44 311.296 61.44 512c0 247.808 202.752 450.56 450.56 450.56s450.56-202.752 450.56-450.56c0-192.512-122.88-364.544-303.104-428.032-10.24-4.096-16.384-14.336-12.288-26.624 4.096-10.24 16.384-16.384 26.624-12.288C870.4 114.688 1003.52 301.056 1003.52 512c0 270.336-221.184 491.52-491.52 491.52z" p-id="8629" :fill="timerShutdownIconColor"></path>
                        <path d="M493.568 63.488h40.96v40.96h-40.96zM493.568 161.792h40.96v159.744h-40.96z" p-id="8630" :fill="timerShutdownIconColor"></path>
                        <path d="M378.88 446.464c24.576 26.624 36.864 63.488 36.864 108.544 0 45.056-12.288 79.872-36.864 108.544-26.624 28.672-61.44 43.008-104.448 43.008-45.056 0-79.872-14.336-104.448-43.008-24.576-28.672-36.864-63.488-36.864-108.544 0-45.056 12.288-79.872 36.864-108.544 24.576-28.672 61.44-43.008 104.448-43.008 43.008 0 79.872 14.336 104.448 43.008z m-178.176 28.672c-16.384 20.48-24.576 47.104-24.576 81.92 0 34.816 8.192 61.44 24.576 81.92 16.384 20.48 40.96 30.72 71.68 30.72s55.296-10.24 71.68-30.72c16.384-20.48 24.576-47.104 24.576-81.92 0-34.816-8.192-63.488-24.576-81.92-16.384-20.48-40.96-30.72-71.68-30.72s-53.248 8.192-71.68 30.72zM659.456 409.6v38.912h-153.6V532.48h145.408v38.912h-145.408v131.072h-45.056V409.6h198.656zM897.024 409.6v38.912h-153.6V532.48h145.408v38.912h-145.408v131.072h-45.056V409.6h198.656z" p-id="8631" :fill="timerShutdownIconColor"></path>
                        </svg>
                        <el-time-picker
                        arrow-control
                        v-model="shutdownTime"
                        :picker-options="{
                            selectableRange: '00:00:00 - 23:59:59'
                        }"
                        placeholder="Please set shutdown time"
                        size="small">
                        </el-time-picker>
                        <el-button type="primary" size="small" @click="timerShutDown()">Shutdown</el-button>
                    </div>
                    
                </div> 
            </el-col>
            <el-col :md="12" :sm="24">
                <div class="rectangle-box">
                    <div class="info-box-icon">
                        <svg t="1578389685377" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9383" width="36" height="36"><path d="M512 1003.52C241.664 1003.52 20.48 782.336 20.48 512 20.48 292.864 167.936 98.304 378.88 38.912c10.24-2.048 22.528 4.096 24.576 14.336 2.048 10.24-4.096 22.528-14.336 24.576C196.608 133.12 61.44 311.296 61.44 512c0 247.808 202.752 450.56 450.56 450.56s450.56-202.752 450.56-450.56c0-192.512-122.88-364.544-303.104-428.032-10.24-4.096-16.384-14.336-12.288-26.624 4.096-10.24 16.384-16.384 26.624-12.288C870.4 114.688 1003.52 301.056 1003.52 512c0 270.336-221.184 491.52-491.52 491.52z" p-id="9384" :fill="timerBootIconColor"></path>
                        <path d="M493.568 63.488h40.96v40.96h-40.96zM493.568 161.792h40.96v159.744h-40.96z" p-id="9385" :fill="timerBootIconColor"></path>
                        <path d="M466.944 446.464c24.576 26.624 36.864 63.488 36.864 108.544 0 45.056-12.288 79.872-36.864 108.544-26.624 28.672-61.44 43.008-104.448 43.008-45.056 0-79.872-14.336-104.448-43.008-24.576-28.672-36.864-63.488-36.864-108.544 0-45.056 12.288-79.872 36.864-108.544 24.576-28.672 61.44-43.008 104.448-43.008 45.056 0 79.872 14.336 104.448 43.008z m-176.128 28.672c-16.384 20.48-24.576 47.104-24.576 81.92 0 34.816 8.192 61.44 24.576 81.92 16.384 20.48 40.96 30.72 71.68 30.72s55.296-10.24 71.68-30.72c16.384-20.48 24.576-47.104 24.576-81.92 0-34.816-8.192-63.488-24.576-81.92-16.384-20.48-40.96-30.72-71.68-30.72s-55.296 8.192-71.68 30.72zM593.92 409.6l149.504 217.088h2.048V409.6h45.056v292.864h-43.008l-151.552-219.136H593.92v219.136h-45.056V409.6H593.92z" p-id="9386" :fill="timerBootIconColor"></path>
                        </svg>

                        <el-time-picker
                        arrow-control
                        v-model="bootTime"
                        :picker-options="{
                            selectableRange: '00:00:00 - 23:59:59'
                        }"
                        placeholder="Please set boot time"
                        size="small">
                        </el-time-picker>
                        <el-button type="primary" size="small" @click="timerBoot()">Boot</el-button>
                    </div>
                </div>   
            </el-col>
            
        </el-tab-pane>
    </el-tabs>
</template>
<script>

    import handleResponse from '@/components/restfulapi/handleResponse'
    import {getSolutionAppValueApi, setSolutionAppValueApi} from '@/components/restfulapi/solutionAppApi';

    import cardTemp from "../../../common/cardTemp"

    export default{
        name: 'singleTimerSwitch',
        data(){
            return {
                activeName: "powerControl",
                //solution app info
                getTarget: "/40007/0/27600",
                setTarget: "/40007/0/27601",
                
                //solution app pkg name
                pkgname: "com.advantech.poweronoff",
                funcIds: {
                    setShutdown: "set_shutdown",
                    setReboot: "set_reboot",
                    setTimerShutdown: "set_timer_shutdown",
                    setTimerBoot: "set_timer_boot",
                },

                timer: null,
                shutdownTime: "",
                bootTime: "",

                //icon color
                rebootIconColor:"#fff",
                shutdownIconColor: "#fff",
                timerShutdownIconColor: "#8B4513",
                timerBootIconColor: "#F0AD4E"


            }
        },
        props: {
            selectedAgentId: {
                type: String,
                default: ""
            },
            isSingleMode: {
                type: Boolean,
                default: true
            },
            //selectedAgent is offline
            isOffline: {
                type: Boolean,
                default: false
            }
        },
        components: {
 	        cardTemp
        },
        methods:{
            initData(){
                this.shutdownTime =  "";
                this.bootTime = "";
            },

            transferTime(value){
                let time = new Date(value);
                let hour = time.getHours()<10? "0"+time.getHours(): time.getHours();
                let minute = time.getMinutes()<10? "0"+time.getMinutes(): time.getMinutes();
                let seconds = time.getSeconds()<10? "0"+time.getSeconds(): time.getSeconds(); 
                return hour+":"+minute+":"+seconds;
            },

            setSolutionAppValue(data, funcId){
                if(this.selectedAgentId == ""){
                    console.error("selectAgentId is empty");
                    return;
                }

                setSolutionAppValueApi(this.selectedAgentId, this.setTarget, data).then((obj) => {

                    handleResponse(obj, (res) => {

                        if(res.status === "CHANGED"){
                            this.$swal("", "Success", "success")
                        }else{
                            _g.handleError(res); 
                        }
                        
                    })
                })
            },

            reboot(){
                if(!this.selectedAgentId){
                    this.$swal("", "Please select device","info");
                    return;
                }
                let data = {
                    appname: this.pkgname,
                    funcid: this.funcIds.setReboot,
                    param: ""
                }
                this.setSolutionAppValue(data, this.funcIds.setReboot);
            },

            shutDown(){
                if(!this.selectedAgentId){
                    this.$swal("", "Please select device","info");
                    return;
                }
                let data = {
                    appname: this.pkgname,
                    funcid: this.funcIds.setShutdown,
                    param: ""
                }
                this.setSolutionAppValue(data, this.funcIds.setShutdown);
            },

            timerShutDown(){
                if(!this.selectedAgentId){
                    this.$swal("", "Please select device","info");
                    return;
                }
                if(!this.shutdownTime){
                    this.$swal("", "Please set the shutdown time", 'info');
                    return;
                }
                let time = this.transferTime(this.shutdownTime);
                let data = {
                    appname: this.pkgname,
                    funcid: this.funcIds.setTimerShutdown,
                    param: time
                }
                this.setSolutionAppValue(data, this.funcIds.setTimerShutdown);
            },

            timerBoot(){
                if(!this.selectedAgentId){
                    this.$swal("", "Please select device","info");
                    return;
                }
                if(!this.bootTime){
                    this.$swal("", "Please set the boot time", 'info');
                    return;
                }
                let time = this.transferTime(this.bootTime);
                let data = {
                    appname: this.pkgname,
                    funcid: this.funcIds.setTimerBoot,
                    param: time
                }
                this.setSolutionAppValue(data, this.funcIds.setTimerBoot);
            }
            
        },

        watch: {
            isSingleMode(val){
                if(val){
                    this.initData();
                }
            },
            selectedAgentId(val){
                if(this.isSingleMode) {
                    this.initData();
                }
            },
           
        },
        computed: {

            timerSwitchIcon(){
                if(this.activeName == "timerPowerControl"){
                    return "#409EFF"
                }else{
                    return "#303133"
                }
            }

        }
    }
</script>

<style lang="scss" scoped>

    .info-box {
        display: block;
        min-height: 180px;
        background: #fff;
        width: 100%;
        border-radius: 3px;
        margin: 15px 0px 15px 0px;;
        text-align: center;
        .info-box-icon {
            border-radius: 50%;
            display: block;
            /* float: left; */
            height: 80px;
            width: 80px;
            
            line-height: 40px;
            font-size: 45px;
            /* background: rgba(0, 0, 0, 0.2); */
            margin-top: 15px;
            margin: 1rem auto;

            .info-box-icon-title{
                color:#fff;
                font-size:15px;
                margin-bottom: 20px;
            }

        }
    
    }
    


    .rectangle-box{
        min-height: 120px;
        background: #fff;
        width: 100%;
        border-radius: 3px;
        margin: 15px 0px 15px 0px;;
        text-align: center;
        .info-box-icon {
            border-radius: 5px;
            display: block;
            width: 85%;
            /* float: left; */
            
            font-size: 45px;
            /* background: rgba(0, 0, 0, 0.2); */
            margin-top: 15px;
            margin: 0.6rem auto;
        
            .icon{
                position: relative;
                top:15px;
            }
        }
    }
</style>

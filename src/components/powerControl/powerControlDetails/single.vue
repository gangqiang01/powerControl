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
            <el-col :md="18" :sm="22" :offset="2">
                <div class="switch">
                    <span>Automatic Power On And Off:</span>
                    <el-switch
                    v-model="isAutomatic"
                    inactive-color="#aaaaaa"
                    @change="switchAutomatic()">
                    </el-switch>
                </div>
                <div class="rectangle-box">
                    <div class="info-box-icon">
                        <span>
                            Set Boot Time:
                        </span>
                        <el-time-picker
                        arrow-control
                        v-model="bootTime"
                        :picker-options="{
                            selectableRange: '00:00:00 - 23:59:59'
                        }"
                        placeholder="Please set boot time"
                        size="small"
                        :disabled="!isAutomatic">
                        </el-time-picker>
                       
                    </div>
                    <div class="info-box-icon">
                        <span>
                            Set Shutdown Time:
                        </span>
                        <el-time-picker
                        arrow-control
                        v-model="shutdownTime"
                        :picker-options="{
                            selectableRange: '00:00:00 - 23:59:59'
                        }"
                        placeholder="Please set shutdown time"
                        size="small"
                        :disabled="!isAutomatic">
                        </el-time-picker>

                        <!-- <el-button type="primary" size="small" @click="timerShutDown()">{{shutdownAction}}</el-button> -->
                    </div>
                   
                    <el-button  type="primary" class="btnAction" size="small" @click="timerPowerOnOff()" :disabled="!isAutomatic">{{powerAction}}</el-button>
                        
                </div> 
            </el-col>
            
        </el-tab-pane>
    </el-tabs>
</template>
<script>

    import handleResponse from '@/components/restfulapi/handleResponse'
    import {getSolutionAppValueApi, setSolutionAppValueApi} from '@/components/restfulapi/solutionAppApi';
    import {setDeviceStatus, getDeviceStatus} from "../../restfulapi/deviceStatusApi"
    import {appControl} from "../../../assets/js/lwm2mMap"

    import cardTemp from "../../../common/cardTemp"
    import { months } from 'moment';

    export default{
        name: 'singleTimerSwitch',
        data(){
            return {
                activeName: "powerControl",
                //solution app info
                getTarget: "/40007/0/27600",
                setTarget: "/40007/0/27601",
                
                //solution app pkg name
                pkgname: "com.adv.poweronoff",
                funcIds: {
                    setShutdown: "set_shutdown",
                    setReboot: "set_reboot",
                    setPoweronoffTime: "set_poweronoff_time",
                    getPoweronoffStatus: "get_poweronoff_status",
                    closePoweronoff: "close_poweronoff",
                    openPoweronoff: "open_poweronoff"
                },

                timer: null,
                shutdownTime: "",
                bootTime: "",

                //icon color
                rebootIconColor:"#fff",
                shutdownIconColor: "#fff",
                timerShutdownIconColor: "#8B4513",
                timerBootIconColor: "#F0AD4E",

                powerAction: "Set",
                isAutomatic: false


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
                this.powerAction = "Set";
                this.isAutomatic = false;
            },
            //Mon Jan 13 2020 14:32:57 GMT+0800 (CST) to 14:42:57
            transferTime(value){
                let time = new Date(value);
                let hour = time.getHours()<10? "0"+time.getHours(): time.getHours();
                let minute = time.getMinutes()<10? "0"+time.getMinutes(): time.getMinutes();
                let seconds = time.getSeconds()<10? "0"+time.getSeconds(): time.getSeconds(); 
                return hour+":"+minute+":"+seconds;
            },
            //  14.42:57 to Mon Jan 13 2020 14:32:57 GMT+0800 (CST)
            transToStandardTime(val){
                if(!val){
                    return "";
                }
                let time=new Date;
                let y = time.getFullYear(); 
                let m = time.getMonth(); 
                let d = time.getDate(); 
                let hArray = val.split(":");
                let h = hArray[0];
                let s = hArray[1];
                return new Date(y, m, d, h, s);
            },

            getSolutionAppStatus(funcid){
                if(this.selectedAgentId == ""){
                    console.error("selectAgentId is empty");
                    return;
                }

                let data= {
                    appname: this.pkgname,
                    funcid: funcid,
                    param: ""
                }
                getSolutionAppValueApi(this.selectedAgentId, this.getTarget, data).then((obj) => {
                    handleResponse(obj, (res) => {

                        if(res.status === "CONTENT"){
                            let powerControlObj = JSON.parse(res.content.value);
                            if(powerControlObj.errcode == 0){
                                 switch(funcid){
                                    case this.funcIds.getPoweronoffStatus:
                                        let stime = powerControlObj.data.poweroff_time;
                                        let btime = powerControlObj.data.poweron_time;
                                        if(stime&& btime){
                                            this.shutdownTime = this.transToStandardTime(stime);
                                            this.bootTime = this.transToStandardTime(btime);
                                            this.powerAction = "Reset";
                                        }
                                        let isAuto = powerControlObj.data.auto_power;
                                        this.isAutomatic = isAuto== "true"? true: false;
                                        

                                        break;
                                        
                                    default:
                                        console.error("funcId not support");
                                }
                            }else{
                                console.error("[getSolutionAppValueApi]"+this.funcIds+"#errcode:"+powerControlObj.errcode);
                            }
                           
                        }
                        
                    })
                })
            },


            setSolutionAppValue(data, funcId){
                if(this.selectedAgentId == ""){
                    console.error("selectAgentId is empty");
                    return;
                }

                setSolutionAppValueApi(this.selectedAgentId, this.setTarget, data).then((obj) => {
                    handleResponse(obj, (res) => {
                        if(res.status === "CHANGED"){
                            switch(funcId){
                                case this.funcIds.setShutdown:
                                    this.$swal("", "Success", "success")
                                break;
                                case this.funcIds.setReboot:
                                    this.$swal("", "Success", "success")
                                break;
                                case this.funcIds.openPoweronoff:
                                    this.$swal("", "Success", "success").then(() => {
                                        this.getSolutionAppStatus(this.funcIds.getPoweronoffStatus);
                                    })
                                break;
                                case this.funcIds.closePoweronoff:
                                     this.$swal("", "Success", "success")
                                break;
                                case this.funcIds.timerPowerOnOff:
                                     this.$swal("", "Success", "success")
                                break;
                                default:
                                    console.error("funcId not support")
                                
                            }
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

            switchAutomatic(){
                if(!this.selectedAgentId){
                    this.$swal("", "Please select device","info").then(() => {
                        this.isAutomatic= this.isAutomatic == true? false: true;
                    });
                    return;
                }
                
                if(this.isAutomatic){
                    let data = {
                        appname: this.pkgname,
                        funcid: this.funcIds.openPoweronoff,
                        param: ""
                    }
                    this.setSolutionAppValue(data, this.funcIds.openPoweronoff);
                    
                }else{
                    let data = {
                        appname: this.pkgname,
                        funcid: this.funcIds.closePoweronoff,
                        param: ""
                    }
                    this.setSolutionAppValue(data, this.funcIds.closePoweronoff);
                }
                
            },

            timerPowerOnOff(){
                if(!this.selectedAgentId){
                    this.$swal("", "Please select device","info");
                    return;
                }
                if(!this.shutdownTime){
                    this.$swal("", "Please set the shutdown time", 'info');
                    return;
                }
                if(!this.bootTime){
                    this.$swal("", "Please set the boot time", 'info');
                    return;
                }
                let btime = this.transferTime(this.bootTime);
                let stime = this.transferTime(this.shutdownTime);
                let data = {
                    appname: this.pkgname,
                    funcid: this.funcIds.setPoweronoffTime,
                    param: stime+","+btime
                }
                this.setSolutionAppValue(data, this.funcIds.setTimerBoot);
            },

            startSolutionApp(){
                if(this.selectedAgentId == ""){
                    console.error("selectAgentId is empty");
                    return;
                }
                this.contentLoading = true;
                setDeviceStatus(this.selectedAgentId, appControl.startApp, this.pkgname).then((obj) => {
                    this.contentLoading = false;
                    handleResponse(obj, (res) => {
                        if(res.status === "CHANGED"){
                            this.$swal("", "Success", "success").then(() => {
                                this.refreshStatus();
                            })
                            
                        }else{
                            this.$emit("isRunSuccess", false)
                            _g.handleError(res);
                        }
                    })
                })
            },

            stopSolutionApp(){
                if(this.selectedAgentId == ""){
                    console.error("selectAgentId is empty");
                    return;
                }
                this.contentLoading = true;
                setDeviceStatus(this.selectedAgentId, appControl.stopApp, this.pkgname).then((obj) => {
                    this.contentLoading = false;
                    handleResponse(obj, (res) => {
                        if(res.status === "CHANGED"){
                            this.$swal("", "Success", "success").then(() => {
                                this.initData();
                            })
                        }else{
                            this.$emit("isRunSuccess", true)
                            _g.handleError(res);
                        }
                        
                    })
                })
            },
            
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
                    this.getSolutionAppStatus(this.funcIds.getPoweronoffStatus);
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
        text-align: left;
        .btnAction{
            margin: 15px 170px;
            
        }
        .info-box-icon {
            border-radius: 5px;
            display: block;
            margin-top: 25px;
            /* float: left; */
            span{
                display: inline-block;
                font-size: 14px;
                color: #606266;
                text-align: right;
                vertical-align: middle;
                margin-right: 5px;
                width: 230px;
                text-align: right;
            }
        
            .icon{
                position: relative;
                top:15px;
            }
        }
    }

    .switch{
        margin-top: 10px;
        margin-bottom: 20px;
        span{
            display: inline-block;
            color: #606266;
            margin-top: 10px;
            margin-right: 5rem;
            font-size: 14px;
            width: 230px;
            text-align: right;
            vertical-align: middle;
            
        }
    }
</style>

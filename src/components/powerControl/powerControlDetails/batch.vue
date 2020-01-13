<template>
    <div v-show="!isSingleMode" class="SwitchStatusContent" v-loading="fullLoading">
        <el-tabs v-model="activeName" @tab-click="handleClick">
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
                             width="45" height="45" @click="reboot()">
                            <path d="M810.666667 341.333333l-170.666667 170.666667h128c0 141.226667-114.773333 256-256 256a250.453333 250.453333 0 0 1-119.466667-29.866667l-62.293333 62.293334A338.346667 338.346667 0 0 0 512 853.333333c188.586667 0 341.333333-152.746667 341.333333-341.333333h128l-170.666666-170.666667zM256 512c0-141.226667 114.773333-256 256-256 43.093333 0 84.053333 10.666667 119.466667 29.866667l62.293333-62.293334A338.346667 338.346667 0 0 0 512 170.666667c-188.586667 0-341.333333 152.746667-341.333333 341.333333H42.666667l170.666666 170.666667 170.666667-170.666667H256z" :fill="rebootIconColor" p-id="9826"></path>
                            </svg>
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
                             <span class="powerControl_label">
                                Set Shutdown Time:
                            </span>
                            <el-time-picker
                            arrow-control
                            v-model="shutdownTime"
                            :picker-options="{
                                selectableRange: '00:00:00 - 23:59:59'
                            }"
                            placeholder="Please set time"
                            size="small">
                            </el-time-picker>
                            <el-button type="primary" size="small" @click="timerShutDown()">{{shutdownAction}}</el-button>
                        </div>
                        
                    </div> 
                </el-col>
                <el-col :md="12" :sm="24">
                    <div class="rectangle-box">
                        <div class="info-box-icon">
                            <span class="powerControl_label">
                                Set Boot Time:
                            </span>

                            <el-time-picker
                            arrow-control
                            v-model="bootTime"
                            :picker-options="{
                                selectableRange: '00:00:00 - 23:59:59'
                            }"
                            placeholder="Please set time"
                            size="small">
                            </el-time-picker>
                            <el-button type="primary" size="small" @click="timerBoot()">{{bootAction}}</el-button>
                        </div>
                    </div>   
                </el-col>
                
            </el-tab-pane>
            <el-tab-pane name="operationStatusHistory">
                <span slot="label">
                    <i class="fa fa-history m-r-5" aria-hidden="true"></i>
                    Power Control History
                </span>
                <operation-history
                :statusType="pkgname"
                ref="operationHistory"
                @getStatusCount="getBatchSwitchStatusCount"
                @isFinished="isSwitchFinished"
                :groupname="groupname"
                >
                </operation-history>
            </el-tab-pane>
        </el-tabs>
        <el-dialog :visible.sync="dialogTasknameVisible" @close="initPowInfo()">
            <div slot="title" class="dialog-title">
                <i class="fa fa-hand-pointer-o m-r-10" ></i>
                Batch Switch
            </div>
            <el-form :model="toperationForm" :rules="rules" ref="toperationForm">
                <el-form-item label="Task name:" label-width="230px" prop="taskname">
                    <el-input v-model.trim="toperationForm.taskname" autocomplete="off" class="w-350" placeholder="Please input task name"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogTasknameVisible = false">Cancel</el-button>
                <el-button type="primary" @click="batchSwitch()">Confirm</el-button>
            </div>
        </el-dialog>
        <div class="appStatusCount" v-show="isShowOverview">
            <span>Taskname: {{local_taskname}}</span>
            <span>Total: {{total}}</span>
            <span>Running:  {{running}}</span>
            <span>Success: {{success}}</span>
            <span>Failed: {{failed}}</span>
        </div>

    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/colors.scss";
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
            span{
                font-size: 14px;
                color: #606266;
                text-align: right;
                vertical-align: middle;
                margin-right: 5px;
            }
            /* background: rgba(0, 0, 0, 0.2); */
            margin-top: 15px;
            margin: 0.6rem auto;
        
            .icon{
                position: relative;
                top:15px;
            }
        }
    }

    .SwitchStatusContent{
        position: relative;
        .appStatusCount{
            position: absolute;
            top: 10px;
            right: 6px;
            span{
                font-weight: 500;
                font-size: 11px;
                &:nth-child(1){
                    color: $primary-color;
                }
                &:nth-child(2){
                    border-left: 2px solid #ddd;
                    padding-left: 3px; 
                    color: $info-color;
                }
                &:nth-child(3){
                    color: $warn-color;
                }
                &:nth-child(4){
                    color: $success-color;
                }
                &:nth-child(5){
                    color: $darkgray-color;
                }
            }
            
        }
    }
</style>

<script>
    import handleResponse from '@/components/restfulapi/handleResponse'
    import {
        getSolutionAppValueApi,
        setSolutionAppValueApi,
        reSetSolutionAppValue,
        batchSetSolutionAppValue
    } from "@/components/restfulapi/solutionAppApi";
    import {getSolutionAppStatusOverviewApi} from "@/components/restfulapi/solutionAppStatusApi"
    import operationHistory from "./operationHistory";
    import {setLocal, getLocal, getSession, checkSession, setSession} from "../../../assets/js/storage"

    export default{
        name: 'batchPowerControl',
        data(){
            let validateTaskname = (rule,value,callback)=>{
                let reg=new RegExp(/^(?![._-])[a-zA-Z0-9\.\-_]{3,12}$/);
                if(!reg.test(value)){
                    return callback(new Error ('Must begin with letter/number,contain line/underline/dot/letter/number length 3~12'))
                }else{callback()};
            };
            return {
                dialogTasknameVisible: false,
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
                toperationForm:{
                    taskname: '',
                },
                rules:{
                    taskname: {required: true, validator: validateTaskname, trigger: 'blur'}
                },
                
                funcId: "",
                setTime: "",

                shutdownTime: "",
                bootTime: "",

                timer: null,

                // count show
                isShowOverview: false,
                local_taskname: '',
                success: 0,
                running: 0,
                failed: 0,

                rebootIconColor:"#fff",
                shutdownIconColor: "#fff",
                timerShutdownIconColor: "#8B4513",
                timerBootIconColor: "#F0AD4E",

                fullLoading: false,
                shutdownAction: "Set",
                bootAction: "Set"
 
            }
        },

        props:{
            selectedAgentsData: {
                type: Array,
                default: []
            },
            groupname: {
                type: String,
                default: ""
            }, 
            isSingleMode: {
                type: Boolean,
                default: true
            }
        },

        components: {
            operationHistory
        },

        methods:{
            
            //batch operation
            batchSetSolutionAppValue(funcId, value){

                this.$refs.toperationForm.validate((valid) => {
                    if(valid) {
                        let taskname = this.toperationForm.taskname;

                        let  powData = {
                            taskname: taskname,
                            pkgname: this.pkgname,
                            funcId: funcId,
                            value: value,
                            groupname: this.groupname
                        }

                        this.dialogTasknameVisible = false;
                        this.fullLoading = true;
                        batchSetSolutionAppValue(this.setTarget, powData).then((data) => {
                            this.fullLoading = false;
                            handleResponse(data, (res) => {
                                if(res.status == "CHANGED"){
                                    setLocal("local_power_tname", taskname);
                                    this.activeName = "operationStatusHistory";
                                    this.$refs.operationHistory.intervalGetSolutionAppStatusHistory();
                                }else{
                                    _g.handleError(res);
                                }
                            })
                            
                        })            
                    }
                })
                          
            },


            initPowInfo(){
                this.toperationForm.taskname = "";
                this.setTime = "";
                this.funcId = "";
            },

            getBatchSwitchStatusCount(){
                let local_taskname = getLocal("local_power_tname");
                if(!local_taskname){
                    console.error("getBatchSwitchStatusCount:localStorage(local_power_tname) is null")
                    this.isShowOverview = false;
                    return;
                }
                getSolutionAppStatusOverviewApi(local_taskname, this.pkgname).then((data) => {
                    handleResponse((data), (res) => {
                        if(res){
                            this.local_taskname = local_taskname;
                            this.running = res.running;
                            this.failed = res.fail;
                            this.success = res.success;
                            if(this.total > 0 &&  this.activeName === "operationStatusHistory"){
                                this.isShowOverview = true;
                            }else{
                                this.isShowOverview = false;
                            }
                        }
                    })
                })
            },
            
            initData(){
                this.shutdownTime =  "";
                this.bootTime = "";
            },

            handleClick(tab){
                if(tab.name === "operationStatusHistory"){
                    this.getBatchSwitchStatusCount();
                }else{
                    this.isShowOverview = false;
                }
            },

            isPowerControlFinished(){
                this.getServerStatus();
            },
            
            transferTime(value){
                let time = new Date(value);
                let hour = time.getHours()<10? "0"+time.getHours(): time.getHours();
                let minute = time.getMinutes()<10? "0"+time.getMinutes(): time.getMinutes();
                let seconds = time.getSeconds()<10? "0"+time.getSeconds(): time.getSeconds(); 
                return hour+":"+minute+":"+seconds;
            },

            reboot(){
                if(this.selectedAgentsData.length === 0){
                    this.$swal("", "All devices are offline","info");
                    return;
                }
                this.funcId = this.funcIds.setReboot;
                this.dialogTasknameVisible = true;
            },

            shutDown(){
                if(this.selectedAgentsData.length === 0){
                    this.$swal("", "All devices are offline","info");
                    return;
                }
                this.funcId = this.funcIds.setShutdown;
                this.dialogTasknameVisible = true;
            },

            timerShutDown(){
                if(this.selectedAgentsData.length === 0){
                    this.$swal("", "All devices are offline","info");
                    return;
                }
                if(!this.shutdownTime){
                    this.$swal("", "Please set the shutdown time", 'info');
                    return;
                }
                let time = this.transferTime(this.shutdownTime);
                this.setTime = time;
                this.funcId = this.funcIds.setTimerShutdown;
                this.dialogTasknameVisible = true;
            },

            timerBoot(){
                if(this.selectedAgentsData.length === 0){
                    this.$swal("", "All devices are offline","info");
                    return;
                }
                if(!this.bootTime){
                    this.$swal("", "Please set the boot time", 'info');
                    return;
                }
                let time = this.transferTime(this.bootTime);
                this.setTime = time;
                this.funcId = this.funcIds.setTimerBoot
                this.dialogTasknameVisible = true;
            },

            batchSwitch(){
                if(this.selectedAgentsData.length === 0){
                    this.$swal("", "All devices are offline","info");
                    return;
                }
                if(!this.funcId){
                    this.$swal("", "Please refresh page", 'info');
                    return;
                }
                this.batchSetSolutionAppValue(this.funcId, this.setTime)
            },

            isSwitchFinished(){
                this.initData();
            }
            
        },
       

       
        watch: {
            isSingleMode(val){
                if(!val){
                    this.initData();
                }
            },
            groupname(val){
                if(!this.isSingleMode&& val){
                    this.initData();
                }
            }
        },

        computed: {
            total(){
                return  this.success+ this.running+ this.failed;
            },

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


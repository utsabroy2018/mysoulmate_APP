"use strict";(self.webpackChunkhoroscope=self.webpackChunkhoroscope||[]).push([[796],{1796:(y,g,r)=>{r.r(g),r.d(g,{Otp_loginModule:()=>x});var d=r(6895),l=r(4006),t=r(4650),f=r(2498),h=r(2761),m=r(191),v=r(5543),u=r(4144),p=r(9549),_=r(2440);const O=["ngOtpInput"];function T(o,c){if(1&o&&(t.TgZ(0,"div",26)(1,"div",27),t._uU(2),t.qZA()()),2&o){const e=t.oxw();t.xp6(2),t.hij(" ",null==e.afterLoginMsg?null:e.afterLoginMsg.msg," ")}}function M(o,c){if(1&o){const e=t.EpF();t.TgZ(0,"ng-otp-input",38,39),t.NdJ("onInputChange",function(i){t.CHM(e);const n=t.oxw(2);return t.KtG(n.onOtpChange(i))}),t.qZA()}if(2&o){const e=t.oxw(2);t.Q6J("config",e.config)}}function S(o,c){if(1&o){const e=t.EpF();t.TgZ(0,"div",28)(1,"label",29)(2,"div",30)(3,"p",31),t._uU(4,"Enter verification code"),t.qZA(),t.YNc(5,M,2,1,"ng-otp-input",32),t.qZA()(),t.TgZ(6,"label",33)(7,"button",10),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.resendOTP())}),t._UZ(8,"i",34),t._uU(9," Resend OTP"),t.qZA(),t.TgZ(10,"span"),t._uU(11),t.qZA()(),t.TgZ(12,"div",35)(13,"span"),t._uU(14," Your Otp has Expired"),t.qZA()(),t.TgZ(15,"div",36)(16,"input",37),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.login_Fn())}),t.qZA()()()}if(2&o){const e=t.oxw();t.xp6(5),t.Q6J("ngIf",e.showOtpComponent),t.xp6(6),t.Oqu(e.display_new),t.xp6(1),t.Q6J("hidden",e.showExpairMsg),t.xp6(4),t.Q6J("disabled",!e.otpFormGroup.valid||!e.verifyBtnActive)}}let b=(()=>{class o{constructor(e,s,i,n){this.service=e,this.router=s,this.msgService=i,this.sds=n,this.withoutLogin_headerShow=!0,this.afterLogin_headerShow=!0,this.signUpMsg=!0,this.hide_Send_OTP=!1,this.afterSendOTP_Click=!0,this.deActiveUser_Msg_Show=!0,this.showOtpMainBox=!0,this.showExpairMsg=!0,this.generateOTP_btn=!0,this.showOtpComponent=!0,this.config={allowNumbersOnly:!1,length:4,isPasswordInput:!1,disableAutoFocus:!1,placeholder:"",inputStyles:{width:"40px",height:"35px"}},this.getLocalSecrectUrl=this.sds.getLocalSecrectData(),this.otpFormGroup=new l.cw({otp_phone:new l.NI("",[l.kI.required,l.kI.minLength(10),l.kI.pattern("^((\\+91-?)|0)?[0-9]{10}$")])}),this.isLogin=this.service.login(),this.isLogin?(this.afterLogin_headerShow=!1,this.withoutLogin_headerShow=!0):(this.afterLogin_headerShow=!0,this.withoutLogin_headerShow=!1)}ngOnInit(){}timer_new(e){clearInterval(this.timerInt);let s=60*e,i="0",n=60;const a=e<10?"0":"";this.timerInt=setInterval(()=>{s--,0!=n?n--:n=59,i=n<10?"0"+n:n,this.display_new=`${a}${Math.floor(s/60)}:${i}`,"00:00"==this.display_new?(this.showExpairMsg=!1,clearInterval(this.timerInt)):this.showExpairMsg=!0},1e3)}resendOTP(){this.generateOTP(),this.timer_new(5)}onOtpChange(e){this.otp=e,4==this.otp.length?this.getOTP==this.otp?this.verifyBtnActive=!0:(this.verifyBtnActive=!1,this.msgService.errorMsg("OTP_NOT_MAT")):this.verifyBtnActive=!1}generateOTP(){this.service.global_service(1,"/user/login_otp",{data:btoa(JSON.stringify(this.otpFormGroup.controls.otp_phone.value))}).subscribe(e=>{this.getOPTResponse=e,1===this.getOPTResponse.suc&&(this.getOTP=this.sds.decrypt(this.getOPTResponse.otp)),2===this.getOPTResponse.suc&&this.msgService.errorMsg("MWRNG_MOB")})}sendOTP_login(e){this.signUpMsg=!0,this.deActiveUser_Msg_Show=!0,this.mobileNumber=this.otpFormGroup.controls.otp_phone.value.length,this.service.global_service(1,"/user/login_otp",{data:btoa(JSON.stringify(this.otpFormGroup.controls.otp_phone.value))}).subscribe(s=>{this.afterLoginMsg=s,1===this.afterLoginMsg.suc&&(this.deActiveUser_Msg_Show=!0,this.getOTP=this.sds.decrypt(this.afterLoginMsg.otp),10==this.mobileNumber&&this.otpFormGroup.valid?(this.afterSendOTP_Click=!1,this.hide_Send_OTP=!0,this.signUpMsg=!0,this.deActiveUser_Msg_Show=!0,this.generateOTP_btn=!1,this.showOtpMainBox=!0,this.timer_new(5)):(this.generateOTP_btn=!0,clearInterval(this.timerInt))),0===this.afterLoginMsg.suc&&(this.deActiveUser_Msg_Show=!1,this.signUpMsg=!0,this.deActiveUser_Msg=this.afterLoginMsg.msg),2===this.afterLoginMsg.suc&&(this.deActiveUser_Msg_Show=!0,this.signUpMsg=!1,this.deActiveUser_Msg=this.afterLoginMsg.msg)})}editeMobileNum(){this.afterSendOTP_Click=!0,this.hide_Send_OTP=!1}login_Fn(){this.loginDataStore={user_id:this.otpFormGroup.controls.otp_phone.value},this.getOTP==this.otp?this.service.global_service(1,"/user/get_login_data",{data:btoa(JSON.stringify(this.loginDataStore))}).subscribe(e=>{if(this.login_Data_respons=e,this.login_Data_respons.suc>0){const{plan_id:s,pay_name:i,id:n,user_email:a,user_id:C,user_name:N,profile_code:L}=this.login_Data_respons.user_data[0];this.sds.setLocalSecrectData({login_success:1,plan_id:s,pay_name:i,id:n,user_email:a,user_id:C,user_name:N,profile_code:L,profile_flag:this.login_Data_respons.user_data[0].profile_verify_flag?this.login_Data_respons.user_data[0].profile_verify_flag:"N"}),this.router.navigate(["/user/profile_list"])}else localStorage.setItem("login_success","0")}):this.msgService.errorMsg("OTP_NOT_MAT")}nameShort(){return this.otpFormGroup.controls.otp_phone.value.slice(0,4)+"XXXXXX"}static#t=this.\u0275fac=function(s){return new(s||o)(t.Y36(f.D),t.Y36(h.F0),t.Y36(m.e),t.Y36(v.U))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-otp_login"]],viewQuery:function(s,i){if(1&s&&t.Gf(O,5),2&s){let n;t.iGM(n=t.CRH())&&(i.ngOtpInput=n.first)}},decls:44,vars:10,consts:[[1,"innerMain_wraper"],[1,"otp_wrapper"],[1,"col-sm-12"],[1,"white_block","white_blockOTP"],[1,"row"],[1,"title_sec_main"],[1,"innerDefaultPage"],[1,"iLaWub",3,"hidden"],[1,"otpMsg"],[1,"editOtp"],[3,"click"],[3,"hidden"],[1,"otpField_Main"],["class","deActiveUser_Msg_otp",4,"ngIf"],[1,"otpField_Main_sub",3,"formGroup","hidden"],[1,"otpField_Sub_field"],[1,"field_outer_label","field_outer_label_OTP"],[1,"example-full-width"],["matInput","","type","tel","formControlName","otp_phone","minlength","10","maxlength","10"],[1,"validation_OTP",3,"hidden"],["routerLink","/home"],["type","button","value","Send OTP",3,"disabled","click"],["class","otpMain",4,"ngIf"],[1,"footer_bottomSec"],["routerLink","/home",1,"login_link_bot"],["aria-hidden","true",1,"fa","fa-home"],[1,"deActiveUser_Msg_otp"],[1,"deActiveUser_Msg_otp_Sub"],[1,"otpMain"],[1,"otp"],[1,"field_outer_label","field_outer_labelOTPLogin"],[1,"a-o-i"],[3,"config","onInputChange",4,"ngIf"],[1,"resendOtp"],["aria-hidden","true",1,"fa","fa-refresh"],[1,"otpExpair",3,"hidden"],[1,"loginwithOTP"],["type","submit","value","Login",1,"otpLoginBtn",3,"disabled","click"],[3,"config","onInputChange"],["ngOtpInput",""]],template:function(s,i){1&s&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",2)(6,"div",5)(7,"h2"),t._uU(8,"Login with OTP "),t.qZA()(),t.TgZ(9,"div",6)(10,"div",7)(11,"div",8),t._uU(12),t.qZA(),t.TgZ(13,"div",9)(14,"a",10),t.NdJ("click",function(){return i.editeMobileNum()}),t._uU(15,"Edit"),t.qZA()()(),t.TgZ(16,"h3",11),t._uU(17,"Enter Mobile No."),t.qZA(),t.TgZ(18,"h4",11),t._uU(19,"We will send you an OTP to login"),t.qZA(),t.TgZ(20,"div",12),t.YNc(21,T,3,1,"div",13),t.TgZ(22,"div",14)(23,"div",15)(24,"div",16)(25,"mat-form-field",17)(26,"mat-label"),t._uU(27,"Mobile No."),t.qZA(),t._UZ(28,"input",18),t.qZA(),t.TgZ(29,"div",19)(30,"p")(31,"span"),t._uU(32,"This Mobile no. is not registered with us"),t.qZA()(),t.TgZ(33,"p"),t._uU(34,"New to mysoulmate.co.in? "),t.TgZ(35,"a",20),t._uU(36,"Sign Up Free"),t.qZA()()()()(),t.TgZ(37,"input",21),t.NdJ("click",function(a){return i.sendOTP_login(a)}),t.qZA()(),t.YNc(38,S,17,4,"div",22),t.qZA()()()()()()(),t.TgZ(39,"div",23)(40,"a",24),t._UZ(41,"i",25),t.TgZ(42,"span"),t._uU(43,"Home"),t.qZA()()()()),2&s&&(t.xp6(10),t.Q6J("hidden",i.afterSendOTP_Click),t.xp6(2),t.hij("OTP has been sent to ",i.nameShort(),""),t.xp6(4),t.Q6J("hidden",i.hide_Send_OTP),t.xp6(2),t.Q6J("hidden",i.hide_Send_OTP),t.xp6(3),t.Q6J("ngIf",!i.deActiveUser_Msg_Show),t.xp6(1),t.Q6J("formGroup",i.otpFormGroup)("hidden",i.hide_Send_OTP),t.xp6(7),t.Q6J("hidden",i.signUpMsg),t.xp6(8),t.Q6J("disabled",!i.otpFormGroup.valid),t.xp6(1),t.Q6J("ngIf",!i.afterSendOTP_Click))},dependencies:[d.O5,l.Fj,l.JJ,l.JL,l.wO,l.nD,l.sg,l.u,u.Nt,p.KE,p.hX,_.df,h.rH]})}return o})();var w=r(4385),P=r(1948),Z=r(6709),A=r(7392);const U=[{path:"",component:b}];let x=(()=>{class o{static#t=this.\u0275fac=function(s){return new(s||o)};static#e=this.\u0275mod=t.oAB({type:o});static#i=this.\u0275inj=t.cJS({imports:[d.ez,l.u5,l.UX,u.c,w.LD,p.lN,P.Fk,Z.p9,A.Ps,_.Xz,h.Bz.forChild(U)]})}return o})()}}]);
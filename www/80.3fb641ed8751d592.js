"use strict";(self.webpackChunkhoroscope=self.webpackChunkhoroscope||[]).push([[80],{2853:(j,g,r)=>{r.r(g),r.d(g,{HomeModule:()=>G});var h=r(6895),s=r(4006),e=r(4650),A=r(2498),u=r(2761),b=r(191),U=r(5543),m=r(3353),f=r(4144),c=r(9549),v=r(7392),w=r(4238),Z=r(2440),T=r(4859);const O=["ngOtpInput"];function C(n,l){1&n&&(e.TgZ(0,"div",2)(1,"div",3),e._UZ(2,"img",4)(3,"div"),e.qZA()())}function y(n,l){1&n&&(e.TgZ(0,"div",54),e._uU(1," Please write Name (Only alphabets & Min 6 letter) "),e.qZA())}function P(n,l){1&n&&(e.TgZ(0,"div",54),e._uU(1," Phone number Required(Min 10 digit) "),e.qZA())}function S(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"ng-otp-input",64,65),e.NdJ("onInputChange",function(o){e.CHM(t);const a=e.oxw(4);return e.KtG(a.onOtpChange(o))}),e.qZA()}if(2&n){const t=e.oxw(4);e.Q6J("config",t.config)}}function M(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"div",55)(1,"div",56)(2,"label",57)(3,"div",39)(4,"p",58),e._uU(5,"Enter verification code"),e.qZA(),e.YNc(6,S,2,1,"ng-otp-input",59),e.qZA()(),e.TgZ(7,"label",60)(8,"button",36),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(3);return e.KtG(o.resendOTP())}),e._UZ(9,"i",61),e._uU(10," Resend OTP"),e.qZA(),e.TgZ(11,"span"),e._uU(12),e.qZA()(),e.TgZ(13,"div",62)(14,"span"),e._uU(15," Your Otp has Expired"),e.qZA()()(),e.TgZ(16,"label",32)(17,"input",63),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(3);return e.KtG(o.get_form_data_home())}),e.qZA()()()}if(2&n){const t=e.oxw(3);e.Q6J("hidden",t.afterSendOTP_Click),e.xp6(6),e.Q6J("ngIf",t.showOtpComponent),e.xp6(6),e.Oqu(t.display_new),e.xp6(1),e.Q6J("hidden",t.showExpairMsg),e.xp6(4),e.Q6J("disabled",!t.form_user_phone_send.valid||!t.verifyBtnActive)}}const d=function(){return["/terms-condition"]},p=function(){return["/privacypolicy"]},x=function(){return["/aboutus"]};function k(n,l){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",31)(2,"div",32)(3,"div",33)(4,"div",34),e._uU(5),e.qZA(),e.TgZ(6,"div",35)(7,"a",36),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(2);return e.KtG(o.editeMobileNum())}),e._uU(8,"Edit"),e.qZA()()()(),e.TgZ(9,"div",37)(10,"label",38)(11,"div",39)(12,"mat-form-field",40)(13,"mat-label"),e._uU(14,"Name as in Aadhaar or Pan"),e.qZA(),e._UZ(15,"input",41),e.qZA(),e.YNc(16,y,2,0,"div",42),e.qZA()(),e.TgZ(17,"label",38)(18,"div",43)(19,"mat-form-field",40)(20,"mat-label"),e._uU(21,"Phone"),e.qZA(),e._UZ(22,"input",44),e.qZA(),e.YNc(23,P,2,0,"div",42),e.qZA()(),e.TgZ(24,"div",45)(25,"input",46),e.NdJ("click",function(o){e.CHM(t);const a=e.oxw(2);return e.KtG(a.enterPress_login(o))}),e.qZA()()(),e.YNc(26,M,18,5,"div",47),e.TgZ(27,"div",48),e._uU(28,"By clicking on 'Continue', you confirm that you accept the "),e.TgZ(29,"a",49),e._uU(30,"Terms of Condition"),e.qZA(),e._uU(31," and "),e.TgZ(32,"a",49),e._uU(33,"Privacy Policy"),e.qZA()(),e.TgZ(34,"label",50),e._uU(35,"Already a member? "),e.TgZ(36,"a",51),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(2);return e.KtG(o.alreadyMember_Res())}),e._uU(37,"Login"),e.qZA()(),e.TgZ(38,"label",52)(39,"a",53),e._uU(40,"About Us"),e.qZA(),e._uU(41," | "),e.TgZ(42,"a",53),e._uU(43,"Terms Of Condition"),e.qZA(),e._uU(44," | "),e.TgZ(45,"a",53),e._uU(46,"Privacy Policy"),e.qZA()()(),e.BQk()}if(2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("formGroup",t.form_user_phone_send),e.xp6(2),e.Q6J("hidden",t.afterSendOTP_Click),e.xp6(2),e.hij("OTP has been sent to ",t.nameShort(),""),e.xp6(4),e.Q6J("hidden",t.hide_Send_OTP),e.xp6(7),e.Q6J("ngIf",!(null!=t.form_user_phone_send.controls.home_user&&t.form_user_phone_send.controls.home_user.valid)&&((null==t.form_user_phone_send.controls.home_user?null:t.form_user_phone_send.controls.home_user.dirty)||(null==t.form_user_phone_send.controls.home_user?null:t.form_user_phone_send.controls.home_user.touched))),e.xp6(7),e.Q6J("ngIf",!(null!=t.form_user_phone_send.controls.home_phone&&t.form_user_phone_send.controls.home_phone.valid)&&((null==t.form_user_phone_send.controls.home_phone?null:t.form_user_phone_send.controls.home_phone.dirty)||(null==t.form_user_phone_send.controls.home_phone?null:t.form_user_phone_send.controls.home_phone.touched))),e.xp6(2),e.Q6J("disabled",!t.form_user_phone_send.valid),e.xp6(1),e.Q6J("ngIf",t.form_user_phone_send.valid&&!t.generateOTP_btn),e.xp6(3),e.Q6J("routerLink",e.DdM(13,d)),e.xp6(3),e.Q6J("routerLink",e.DdM(14,p)),e.xp6(7),e.Q6J("routerLink",e.DdM(15,x)),e.xp6(3),e.Q6J("routerLink",e.DdM(16,d)),e.xp6(3),e.Q6J("routerLink",e.DdM(17,p))}}function I(n,l){1&n&&(e.TgZ(0,"div",54),e._uU(1," Please enter your phone number "),e.qZA())}function q(n,l){1&n&&(e.TgZ(0,"div",54),e._uU(1," Please enter your phone number "),e.qZA())}function N(n,l){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",66)(2,"div",67)(3,"h5",68),e._uU(4,"Login"),e.qZA(),e.TgZ(5,"div",69)(6,"div",70)(7,"div",39)(8,"mat-form-field")(9,"mat-label"),e._uU(10,"Phone Number"),e.qZA(),e._UZ(11,"input",71),e.qZA(),e.YNc(12,I,2,0,"div",42),e.qZA()(),e.TgZ(13,"div",70)(14,"div",39)(15,"mat-form-field")(16,"mat-label"),e._uU(17,"Password"),e.qZA(),e.TgZ(18,"input",72),e.NdJ("keyup",function(o){e.CHM(t);const a=e.oxw(2);return e.KtG(a.enterPress_login(o))}),e.qZA(),e.TgZ(19,"button",73),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(2);return e.KtG(o.hide=!o.hide)}),e.TgZ(20,"mat-icon"),e._uU(21),e.qZA()()(),e.YNc(22,q,2,0,"div",42),e.qZA()(),e.TgZ(23,"div",74)(24,"span",75),e._uU(25),e.qZA()(),e.TgZ(26,"div",76)(27,"div",77)(28,"input",78),e.NdJ("change",function(o){e.CHM(t);const a=e.oxw(2);return e.KtG(a.KeepmeLog(o))}),e.qZA(),e.TgZ(29,"label",79),e._uU(30,"Keep me logged in"),e.qZA()(),e._UZ(31,"div",80),e.qZA()(),e.TgZ(32,"div",81)(33,"div",82)(34,"input",83),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(2);return e.KtG(o.loginFunc())}),e.qZA()(),e.TgZ(35,"div",84)(36,"span",85),e._uU(37,"OR"),e.qZA()(),e.TgZ(38,"div",82)(39,"a",86),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(2);return e.KtG(o.leftNavFn("/otp-login"))}),e._uU(40,"Login with OTP"),e.qZA()(),e.TgZ(41,"label",50),e._uU(42,"Do not have an account? "),e.TgZ(43,"a",51),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(2);return e.KtG(o.newMember())}),e._uU(44,"Sign Up"),e.qZA()(),e.TgZ(45,"label",52)(46,"a",53),e._uU(47,"About Us"),e.qZA(),e._uU(48," | "),e.TgZ(49,"a",53),e._uU(50,"Terms Of Condition"),e.qZA(),e._uU(51," | "),e.TgZ(52,"a",53),e._uU(53,"Privacy Policy"),e.qZA()()()()(),e.BQk()}if(2&n){const t=e.oxw(2);e.xp6(2),e.Q6J("formGroup",t.loginForm),e.xp6(10),e.Q6J("ngIf",!(null!=t.loginForm.controls.login_field&&t.loginForm.controls.login_field.valid)&&((null==t.loginForm.controls.login_field?null:t.loginForm.controls.login_field.dirty)||(null==t.loginForm.controls.login_field?null:t.loginForm.controls.login_field.touched))),e.xp6(6),e.Q6J("type",t.hide?"password":"text"),e.xp6(1),e.uIk("aria-label","Hide password")("aria-pressed",t.hide),e.xp6(2),e.Oqu(t.hide?"visibility_off":"visibility"),e.xp6(1),e.Q6J("ngIf",!(null!=t.loginForm.controls.password_field&&t.loginForm.controls.password_field.valid)&&((null==t.loginForm.controls.password_field?null:t.loginForm.controls.password_field.dirty)||(null==t.loginForm.controls.password_field?null:t.loginForm.controls.password_field.touched))),e.xp6(1),e.Q6J("hidden",t.deActiveUser_Msg_Show),e.xp6(2),e.Oqu(null==t.login_Data_respons?null:t.login_Data_respons.msg),e.xp6(9),e.Q6J("disabled",t.loginForm.invalid),e.xp6(12),e.Q6J("routerLink",e.DdM(13,x)),e.xp6(3),e.Q6J("routerLink",e.DdM(14,d)),e.xp6(3),e.Q6J("routerLink",e.DdM(15,p))}}function F(n,l){if(1&n&&(e.TgZ(0,"div",5),e._UZ(1,"app-Before_login_header_N_Home"),e.TgZ(2,"div",6)(3,"div",7),e._uU(4," \xa0 "),e.qZA(),e.TgZ(5,"div",8)(6,"h1")(7,"span"),e._uU(8,"Find Some One Here"),e.qZA(),e.TgZ(9,"strong"),e._uU(10,"Who Understands You Best"),e.qZA()(),e.YNc(11,k,47,18,"ng-container",9),e.YNc(12,N,54,16,"ng-container",9),e.qZA()()(),e.TgZ(13,"div",10)(14,"div",11)(15,"div",12)(16,"h2"),e._uU(17,"Experience Personalized Matrimonial Service at "),e.TgZ(18,"span"),e._uU(19,"My Soul Mate"),e.qZA()()(),e.TgZ(20,"div",13)(21,"div",14)(22,"div",15),e._UZ(23,"img",16),e.qZA(),e.TgZ(24,"h3"),e._uU(25,"Precise Compatibility Matching: "),e.qZA(),e.TgZ(26,"p"),e._uU(27,"You can find a partner whose numerology and astrological profiles align with yours."),e.qZA()()(),e.TgZ(28,"div",13)(29,"div",14)(30,"div",15),e._UZ(31,"img",17),e.qZA(),e.TgZ(32,"h3"),e._uU(33,"Personalized Cosmic Insights:"),e.qZA(),e.TgZ(34,"p"),e._uU(35,"Gain a better understanding of yourself and your partner through numerology and astrology insights."),e.qZA()()(),e.TgZ(36,"div",13)(37,"div",14)(38,"div",15),e._UZ(39,"img",18),e.qZA(),e.TgZ(40,"h3"),e._uU(41,"Strict Privacy Protection:"),e.qZA(),e.TgZ(42,"p"),e._uU(43,"Your data is kept safe and confidential, allowing you to explore your potential matches with peace of mind."),e.qZA()()()()(),e.TgZ(44,"div",19)(45,"div",12)(46,"h2")(47,"span"),e._uU(48,"Steps to "),e.qZA(),e._uU(49," Find Your "),e.TgZ(50,"span",20),e._uU(51," Forever"),e.qZA()()(),e.TgZ(52,"div",21)(53,"div",22)(54,"h2"),e._uU(55,"Step 1"),e.qZA(),e.TgZ(56,"h3"),e._uU(57,"Register Free:"),e.qZA(),e.TgZ(58,"p"),e._uU(59," Register for free with your name and authorized phone number "),e.qZA(),e._UZ(60,"img",23),e.qZA(),e.TgZ(61,"div",24),e._UZ(62,"img",25),e.qZA()(),e.TgZ(63,"div",21)(64,"div",26),e._UZ(65,"img",27),e.qZA(),e.TgZ(66,"div",28)(67,"h2"),e._uU(68,"Step 2"),e.qZA(),e.TgZ(69,"h3"),e._uU(70,"Discover Your Rashi Chart: "),e.qZA(),e.TgZ(71,"p"),e._uU(72," Discover Your Rashi charts to get a perfect match "),e.qZA(),e._UZ(73,"img",29),e.qZA()(),e.TgZ(74,"div",21)(75,"div",22)(76,"h2"),e._uU(77,"Step 3"),e.qZA(),e.TgZ(78,"h3"),e._uU(79,"Explore Profiles: "),e.qZA(),e.TgZ(80,"p"),e._uU(81," Discover profiles as per your preference."),e.qZA(),e._UZ(82,"img",23),e.qZA(),e.TgZ(83,"div",24),e._UZ(84,"img",30),e.qZA()()()),2&n){const t=e.oxw();e.xp6(11),e.Q6J("ngIf",t.responsiveShowRegistra),e.xp6(1),e.Q6J("ngIf",!t.responsiveShowRegistra)}}let H=(()=>{class n{constructor(t,i,o,a,_){this.service=t,this.router=i,this.msgService=o,this.sds=a,this.platform=_,this.showOtpComponent=!0,this.generateOTP_btn=!0,this.hide_Send_OTP=!1,this.afterSendOTP_Click=!0,this.showOtpMainBox=!0,this.showExpairMsg=!0,this.tiSeconds=0,this.tiTextSec="",this.tiStatSec=0,this.hide=!0,this.deActiveUser_Msg_Show=!0,this.responsiveShowRegistra=!0,this.config={allowNumbersOnly:!0,length:4,isPasswordInput:!1,disableAutoFocus:!1,placeholder:"",inputStyles:{width:"50px",height:"35px"}},this.currentPlatform="",this.inProgressShort=!0,this.getLocalSecrectUrl=this.sds.getLocalSecrectData(),this.loginForm=new s.cw({login_field:new s.NI("",[s.kI.required,s.kI.minLength(10)]),password_field:new s.NI("",[s.kI.required])}),this.form_user_phone_send=new s.cw({home_user:new s.NI("",[s.kI.required,s.kI.minLength(6),s.kI.pattern(/^[a-zA-Z\s]*$/)]),home_phone:new s.NI("",[s.kI.required,s.kI.minLength(10),s.kI.pattern("^((\\+91-?)|0)?[0-9]{10}$")])}),this.isLogin=this.service.login(),this.router.navigate(this.isLogin?["/profile_list"]:["/home"])}ngOnInit(){this.getLocalSecrectUrl?.data?.id&&this.router.navigate(["/profile_list"]),"Y"===this.sds.getLocalSecrectData()?.data?.isActive?this.router.navigate(["/profile_list"]):this.router.navigate(["/home"]),this.loginDataStore={user_id:this.loginForm.controls.login_field.value,password:this.loginForm.controls.password_field.value},setTimeout(()=>{this.inProgressShort=!1},3e3)}loginFunc(){this.loginDataStore={user_id:this.loginForm.controls.login_field.value,password:this.loginForm.controls.password_field.value},this.deActiveUser_Msg_Show=!0,this.service.global_service(1,"/user/login",{data:btoa(JSON.stringify(this.loginDataStore))}).subscribe(t=>{if(this.login_Data_respons=t,1===this.login_Data_respons.suc){const{plan_id:i,pay_name:o,id:a,user_email:_,user_id:K,user_name:X,profile_code:z}=this.login_Data_respons.user_data[0];this.sds.setLocalSecrectData({login_success:1,plan_id:i,pay_name:o,id:a,user_email:_,user_id:K,user_name:X,profile_code:z,profile_flag:this.login_Data_respons.user_data[0].profile_verify_flag?this.login_Data_respons.user_data[0].profile_verify_flag:"N"}),this.service.afterLogShowBack.next("0"),this.router.navigate(["/profile_list"]),this.currentUser={login_success:this.getLocalSecrectUrl?.data.login_success,id:this.getLocalSecrectUrl?.data.id,user_id:this.getLocalSecrectUrl?.data.user_id,user_name:this.getLocalSecrectUrl?.data.user_name},this.deActiveUser_Msg_Show=!0}0===this.login_Data_respons.suc&&(this.deActiveUser_Msg_Show=!1,this.sds.setLocalSecrectData({login_success:"0"})),2===this.login_Data_respons.suc&&(this.deActiveUser_Msg_Show=!1,this.sds.setLocalSecrectData({login_success:"0"}))})}KeepmeLog(t){1==t.target.checked&&this.sds.setLocalSecrectData({isActive:"Y"}),0==t.target.checked&&this.sds.setLocalSecrectData({isActive:"N"})}leftNavFn(t){this.router.navigate([t])}alreadyMember_Res(){this.responsiveShowRegistra=!1}newMember(){this.responsiveShowRegistra=!0}checkPlatform(){this.platform.FIREFOX?this.currentPlatform="FIREFOX":this.platform.isBrowser?this.currentPlatform="isBrowser":this.platform.EDGE?this.currentPlatform="EDGE":this.platform.IOS?this.currentPlatform="IOS":this.platform.ANDROID&&(this.currentPlatform="ANDROID")}timer_new(t){clearInterval(this.timerInt);let i=60*t,o="0",a=60;const _=t<10?"0":"";this.timerInt=setInterval(()=>{i--,0!=a?a--:a=59,o=a<10?"0"+a:a,this.display_new=`${_}${Math.floor(i/60)}:${o}`,"00:00"==this.display_new?(this.showExpairMsg=!1,clearInterval(this.timerInt)):this.showExpairMsg=!0},1e3)}resendOTP(){this.ngOtpInput.setValue(""),this.generateOTP(),this.timer_new(5)}onOtpChange(t){this.otp=t,4==this.otp.length?this.getOTP==this.otp?this.verifyBtnActive=!0:(this.verifyBtnActive=!1,this.msgService.errorMsg("OTP_NOT_MAT")):this.verifyBtnActive=!1}generateOTP(){this.service.global_service(1,"/profile/send_otp",{phone_no:this.form_user_phone_send.controls.home_phone.value}).subscribe(t=>{this.getOPTResponse=t,1===this.getOPTResponse.suc&&(this.getOTP=this.sds.decrypt(this.getOPTResponse.otp)),2===this.getOPTResponse.suc&&this.msgService.errorMsg("MWRNG_MOB")})}onConfigChange(){this.showOtpComponent=!1,this.otp=null,setTimeout(()=>{this.showOtpComponent=!0},0)}get_form_data_home(){this.store_home_user_phone={home_user:this.form_user_phone_send.controls.home_user.value.trim(),home_phone:this.form_user_phone_send.controls.home_phone.value},this.service.userName_PhoneSend.next(this.store_home_user_phone),this.getOTP==this.otp?this.router.navigate(["registration"]):this.msgService.errorMsg("OTP_NOT_MAT")}enterPress_login(t){this.mobileNumber=this.form_user_phone_send.controls.home_phone.value.length,10==this.mobileNumber&&this.form_user_phone_send.valid&&this.form_user_phone_send.controls.home_user.value.trim().length>6?this.service.global_service(0,"/profile/check_mobile_no",`phone_no=${this.form_user_phone_send.controls.home_phone.value}`).subscribe(i=>{this.validMobileNum_Response=i,2===this.validMobileNum_Response.suc?(this.msgService.errorMsg("PH_EX"),this.generateOTP_btn=!0,this.showOtpMainBox=!1,this.afterSendOTP_Click=!0,clearInterval(this.timerInt)):1===this.validMobileNum_Response.suc?(this.generateOTP_btn=!1,this.showOtpMainBox=!0,this.hide_Send_OTP=!0,this.afterSendOTP_Click=!1,this.generateOTP(),this.timer_new(5)):(this.generateOTP_btn=!0,this.showOtpMainBox=!1,clearInterval(this.timerInt))}):(this.generateOTP_btn=!0,clearInterval(this.timerInt))}editeMobileNum(){this.afterSendOTP_Click=!0,this.hide_Send_OTP=!1}nameShort(){return this.form_user_phone_send.controls.home_phone.value.slice(0,4)+"XXXXXX"}static#e=this.\u0275fac=function(i){return new(i||n)(e.Y36(A.D),e.Y36(u.F0),e.Y36(b.e),e.Y36(U.U),e.Y36(m.t4))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-home"]],viewQuery:function(i,o){if(1&i&&e.Gf(O,5),2&i){let a;e.iGM(a=e.CRH())&&(o.ngOtpInput=a.first)}},decls:3,vars:2,consts:[["class","appLoader_outer",4,"ngIf","ngIfElse"],["mySelf",""],[1,"appLoader_outer"],[1,"loaderLogoApp"],["src","assets/images/logo_new.png","alt","",1,"forMobile"],[1,"headerSec"],[1,"wrapper","wrapper_custom"],[1,"headerSec_leftImg"],[1,"headerSec_rightForm"],[4,"ngIf"],[1,"wrapper"],[1,"threeBoxWelcome"],[1,"col-sm-12"],[1,"col-sm-4","float-left"],[1,"matrimoni_box"],[1,"icon_sec"],["src","assets/images/icon_box_a.png","alt","",1,"box_icon"],["src","assets/images/icon_box_b.png","alt","",1,"box_icon"],["src","assets/images/icon_box_c.png","alt","",1,"box_icon"],[1,"stepSection"],[1,"red"],[1,"stepRow"],[1,"col-sm-6","float-left","stepRow_left","paddingTop"],["src","assets/images/arrow_new.png","alt","",1,"arow"],[1,"col-sm-6","float-left","stepRow_right"],["src","assets/images/step_a.png","alt",""],[1,"col-sm-6","float-left","stepRow_left"],["src","assets/images/step_b.png","alt",""],[1,"col-sm-6","float-left","stepRow_right","paddingTop"],["src","assets/images/arrow_new_r.png","alt","",1,"arow"],["src","assets/images/step_c.png","alt",""],[1,"headerForm",3,"formGroup"],[1,"full"],[1,"registration_edit_phon",3,"hidden"],[1,"otpMsg"],[1,"editOtp"],[3,"click"],[1,"registration_user_phone",3,"hidden"],[1,"half"],[1,"field_outer_label"],[1,"example-full-width"],["matInput","","formControlName","home_user"],["class","validation_div",4,"ngIf"],[1,"field_outer_label","field_outer_label_home"],["matInput","","type","tel","formControlName","home_phone","minlength","10","maxlength","10"],[1,"enterOTP_Btn"],["type","button","value","Continue",3,"disabled","click"],["class","registration_OTP_area",3,"hidden",4,"ngIf"],[1,"terms_text","full","responsiveNotShow"],["target","_blank",3,"routerLink"],[1,"alreadyMember"],[1,"link",3,"click"],[1,"homeBotLink"],[1,"link",3,"routerLink"],[1,"validation_div"],[1,"registration_OTP_area",3,"hidden"],[1,"otpMain","otpMain_registration"],[1,"otp"],[1,"a-o-i"],[3,"config","onInputChange",4,"ngIf"],[1,"resendOtp"],["aria-hidden","true",1,"fa","fa-refresh"],[1,"otpExpair",3,"hidden"],["type","submit","value","Continue",3,"disabled","click"],[3,"config","onInputChange"],["ngOtpInput",""],[1,"modal_content_cus","modal_content_cusRespon"],[1,"loginMainFrame","headerForm",3,"formGroup"],[1,"responsiveTitleLogin"],[1,"modal-body","bodyCus"],[1,"form-group"],["matInput","","type","tel","aria-describedby","emailHelp","formControlName","login_field"],["matInput","","type","password","formControlName","password_field",3,"type","keyup"],["mat-icon-button","","matSuffix","",3,"click"],[1,"errorMsg_login",3,"hidden"],[1,"text-danger"],[1,"form-check","form-group","form_check_cus"],[1,"checkBoxDiv"],["type","checkbox","id","exampleCheck1",1,"form-check-input","mt-3",3,"change"],["for","exampleCheck1",1,"form-check-label","mt-3"],[1,"forgetPassDiv"],[1,"modalFooter_cus_Login"],[1,"modalFooter_cus_Login_Full"],["type","button","value","Login",3,"disabled","click"],[1,"Login_orSeparator__2UWgX"],[1,"Login_txtOrSeparator__1DL4d"],[1,"otp_Login",3,"click"]],template:function(i,o){if(1&i&&(e.YNc(0,C,4,0,"div",0),e.YNc(1,F,85,2,"ng-template",null,1,e.W1O)),2&i){const a=e.MAs(2);e.Q6J("ngIf",o.inProgressShort)("ngIfElse",a)}},dependencies:[h.O5,s.Fj,s.JJ,s.JL,s.wO,s.nD,s.sg,s.u,f.Nt,c.KE,c.hX,c.R9,v.Hw,w.j,Z.df,T.RK,u.rH],styles:[".modal-backdrop.show[_ngcontent-%COMP%], .profList_link_bot[_ngcontent-%COMP%], .wish_link_bot[_ngcontent-%COMP%], .dash_link_bot[_ngcontent-%COMP%]{display:none}@media only screen and (max-width:767px){body[_ngcontent-%COMP%]{background:rgb(188,28,77);background:linear-gradient(0deg,rgba(188,28,77,1) 0%,rgba(250,51,84,1) 100%);background-attachment:fixed}}"]})}return n})();var L=r(2570),J=r(4385),D=r(1948),R=r(6709),Q=r(8398),B=r(4850),E=r(266);const Y=[{path:"",component:H}];let G=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275mod=e.oAB({type:n});static#o=this.\u0275inj=e.cJS({imports:[h.ez,s.u5,s.UX,f.c,J.LD,c.lN,D.Fk,R.p9,v.Ps,L.t,Z.Xz,m.ud,Q.QG,T.ot,B.t,E.AV,u.Bz.forChild(Y)]})}return n})()}}]);
"use strict";(self.webpackChunkhoroscope=self.webpackChunkhoroscope||[]).push([[570],{4238:(Z,f,i)=>{i.d(f,{j:()=>O});var t=i(4006),e=i(4650),h=i(2498),c=i(2761),p=i(191),u=i(5543),v=i(6895),E=i(4144),d=i(9549),P=i(7392),D=i(4859);const T=["closebutton"];function A(l,n){1&l&&(e.TgZ(0,"div",45),e._uU(1," Please enter your phone number "),e.qZA())}function M(l,n){1&l&&(e.TgZ(0,"div",45),e._uU(1," Please enter your phone number "),e.qZA())}function m(l,n){1&l&&(e.TgZ(0,"div",46)(1,"div",47),e._uU(2,"Link has been sent to your registered email-id! "),e.qZA()())}function U(l,n){1&l&&(e.TgZ(0,"div",46)(1,"div",47),e._uU(2,"Link has not been sent to your registered email-id! "),e.qZA()())}function L(l,n){1&l&&(e.TgZ(0,"div",48)(1,"p")(2,"span"),e._uU(3,"This email-id is not registered with us"),e.qZA()()())}function r(l,n){1&l&&(e.TgZ(0,"div",45),e._uU(1," Email is not valid "),e.qZA())}let O=(()=>{class l{constructor(a,s,o,_){this.service=a,this.router=s,this.msgService=o,this.sds=_,this.emailIsNotExists=!1,this.linkSent=!1,this.linkNotSent=!1,this.hidebtn=!1,this.hide=!0,this.loginFormShoHid=!1,this.forgetPassFormShoHid=!0,this.bodyElement=document.body,this.deActiveUser_Msg_Show=!0,this.loginForm=new t.cw({login_field:new t.NI("",[t.kI.required,t.kI.minLength(10)]),password_field:new t.NI("",[t.kI.required])}),this.forgetPass=new t.cw({reg_email:new t.NI("",[t.kI.email,t.kI.required])}),this.getLocalSecrectUrl=this.sds.getLocalSecrectData()}ngOnInit(){}leftNavFn(a){this.router.navigate([a]),this.closebutton.nativeElement.click()}loginFunc(){this.loginDataStore={user_id:this.loginForm.controls.login_field.value,password:this.loginForm.controls.password_field.value},this.deActiveUser_Msg_Show=!0,this.service.global_service(1,"/user/login",{data:btoa(JSON.stringify(this.loginDataStore))}).subscribe(a=>{if(this.login_Data_respons=a,1===this.login_Data_respons.suc){const{plan_id:s,pay_name:o,id:_,user_email:g,user_id:N,user_name:C,profile_code:S}=this.login_Data_respons.user_data[0];this.sds.setLocalSecrectData({login_success:1,plan_id:s,pay_name:o,id:_,user_email:g,user_id:N,user_name:C,profile_code:S,profile_flag:this.login_Data_respons.user_data[0].profile_verify_flag?this.login_Data_respons.user_data[0].profile_verify_flag:"N"}),this.closebutton.nativeElement.click(),this.router.navigate(["/profile_list"]),this.currentUser={login_success:this.getLocalSecrectUrl?.data.login_success,id:this.getLocalSecrectUrl?.data.id,user_id:this.getLocalSecrectUrl?.data.user_id,user_name:this.getLocalSecrectUrl?.data.user_name},this.closebutton.nativeElement.click(),this.deActiveUser_Msg_Show=!0}0===this.login_Data_respons.suc&&(this.deActiveUser_Msg_Show=!1,this.sds.setLocalSecrectData({login_success:"0"})),2===this.login_Data_respons.suc&&(this.deActiveUser_Msg_Show=!1,this.sds.setLocalSecrectData({login_success:"0"}))})}logout_Fnc(){localStorage.clear(),this.router.navigate(["home"])}forgetPassFn(){this.forgetPassData={email_id:this.forgetPass.controls.reg_email.value},this.service.global_service(0,"/profile/check_email",`email_id=${this.forgetPass.controls.reg_email.value}`).subscribe(a=>{console.log(a,"email"),2==a.suc?this.service.global_service(1,"/profile/forget_email",this.forgetPassData).subscribe(s=>{console.log(s),1==s.suc?(this.hidebtn=!0,this.linkSent=!0,this.linkNotSent=!1):(this.linkSent=!1,this.linkNotSent=!0)}):1==a.suc?this.emailIsNotExists=!0:this.linkSent=!1})}showForgetPassForm(){this.loginFormShoHid=!0,this.forgetPassFormShoHid=!1}showLoginForm(){this.loginFormShoHid=!1,this.forgetPassFormShoHid=!0}KeepmeLog(a){1==a.target.checked&&this.sds.setLocalSecrectData({isActive:"Y"}),0==a.target.checked&&this.sds.setLocalSecrectData({isActive:"N"})}enterPress_login(a){13===a.keyCode&&(this.loginFunc(),0!=this.login_Data_respons.suc?this.router.navigate(["/user_dashboard"]):(this.errorMsgLog="Your email-id or password is incorrect!",this.sds.setLocalSecrectData({login_success:"0"})))}static#e=this.\u0275fac=function(s){return new(s||l)(e.Y36(h.D),e.Y36(c.F0),e.Y36(p.e),e.Y36(u.U))};static#o=this.\u0275cmp=e.Xpm({type:l,selectors:[["app-Before_login_header_N_Home"]],viewQuery:function(s,o){if(1&s&&e.Gf(T,5),2&s){let _;e.iGM(_=e.CRH())&&(o.closebutton=_.first)}},decls:86,vars:17,consts:[[1,"header_top"],[1,"wrapper","header_topSub"],[1,"logoSec"],["routerLink","/home"],["src","assets/images/logo_new.png","alt","",1,"forDesktop"],["src","assets/images/logo_new.png","alt","",1,"forMobile"],[1,"topNavSec","topNavSec_beforLog"],[1,"beforeLogin"],["data-toggle","modal","data-target","#exampleModal",3,"click"],["id","exampleModal","tabindex","-1","role","dialog","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],["role","document",1,"modal-dialog","modal_dialog_login"],[1,"modal-content","modal_content_cus",3,"hidden"],[1,"modal-header"],["type","button","data-dismiss","modal","aria-label","Close",1,"close"],["closebutton",""],["aria-hidden","true"],[1,"loginMainFrame",3,"formGroup"],[1,"modal-body","bodyCus"],[1,"form-group"],[1,"field_outer_label"],["matInput","","type","tel","aria-describedby","emailHelp","formControlName","login_field"],["class","validation_div",4,"ngIf"],["matInput","","type","password","formControlName","password_field",3,"type","keyup"],["mat-icon-button","","matSuffix","",3,"click"],[1,"errorMsg_login",3,"hidden"],[1,"text-danger"],[1,"form-check","form-group","form_check_cus"],[1,"checkBoxDiv"],["type","checkbox","id","exampleCheck1",1,"form-check-input","mt-3",3,"change"],["for","exampleCheck1",1,"form-check-label","mt-3"],[1,"forgetPassDiv"],[1,"modalFooter_cus_Login"],[1,"modalFooter_cus_Login_Full"],["type","button","value","Login",3,"disabled","click"],[1,"Login_orSeparator__2UWgX"],[1,"Login_txtOrSeparator__1DL4d"],[1,"otp_Login",3,"click"],[1,"modal-content","modal_content_cus","forget_pass",3,"hidden"],["class","iLaWub",4,"ngIf"],["matInput","","type","email","formControlName","reg_email"],["class","validation_OTP",4,"ngIf"],[1,"modalFooter_cus"],[1,"modalFooter_cus_left","forget_login"],[3,"click"],[1,"modalFooter_cus_right","forget_login"],[1,"validation_div"],[1,"iLaWub"],[1,"otpMsg"],[1,"validation_OTP"]],template:function(s,o){1&s&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"a",3),e._UZ(4,"img",4)(5,"img",5),e.qZA()(),e.TgZ(6,"div",6)(7,"ul",7)(8,"li")(9,"span"),e._uU(10,"Already a member?"),e.qZA(),e.TgZ(11,"a",8),e.NdJ("click",function(){return o.logout_Fnc()}),e._uU(12,"Login"),e.qZA()()()()()(),e.TgZ(13,"div",9)(14,"div",10)(15,"div",11)(16,"div",12)(17,"h5"),e._uU(18,"Login"),e.qZA(),e.TgZ(19,"button",13,14)(21,"span",15),e._uU(22,"\xd7"),e.qZA()()(),e.TgZ(23,"div",16)(24,"div",17)(25,"div",18)(26,"div",19)(27,"mat-form-field")(28,"mat-label"),e._uU(29,"Phone Number"),e.qZA(),e._UZ(30,"input",20),e.qZA(),e.YNc(31,A,2,0,"div",21),e.qZA()(),e.TgZ(32,"div",18)(33,"div",19)(34,"mat-form-field")(35,"mat-label"),e._uU(36,"Password"),e.qZA(),e.TgZ(37,"input",22),e.NdJ("keyup",function(g){return o.enterPress_login(g)}),e.qZA(),e.TgZ(38,"button",23),e.NdJ("click",function(){return o.hide=!o.hide}),e.TgZ(39,"mat-icon"),e._uU(40),e.qZA()()(),e.YNc(41,M,2,0,"div",21),e.qZA()(),e.TgZ(42,"div",24)(43,"span",25),e._uU(44),e.qZA()(),e.TgZ(45,"div",26)(46,"div",27)(47,"input",28),e.NdJ("change",function(g){return o.KeepmeLog(g)}),e.qZA(),e.TgZ(48,"label",29),e._uU(49,"Keep me logged in"),e.qZA()(),e._UZ(50,"div",30),e.qZA()(),e.TgZ(51,"div",31)(52,"div",32)(53,"input",33),e.NdJ("click",function(){return o.loginFunc()}),e.qZA()(),e.TgZ(54,"div",34)(55,"span",35),e._uU(56,"OR"),e.qZA()(),e.TgZ(57,"div",32)(58,"a",36),e.NdJ("click",function(){return o.leftNavFn("/otp-login")}),e._uU(59,"Login with OTP"),e.qZA()()()()(),e.TgZ(60,"div",37)(61,"div",12)(62,"h5"),e._uU(63,"Forget Password"),e.qZA(),e.TgZ(64,"button",13)(65,"span",15),e._uU(66,"\xd7"),e.qZA()()(),e.TgZ(67,"div",16)(68,"div",17)(69,"div",18)(70,"div",19),e.YNc(71,m,3,0,"div",38),e.YNc(72,U,3,0,"div",38),e.TgZ(73,"mat-form-field")(74,"mat-label"),e._uU(75,"Enter your registered email-id"),e.qZA(),e._UZ(76,"input",39),e.qZA(),e.YNc(77,L,4,0,"div",40),e.YNc(78,r,2,0,"div",21),e.qZA()()(),e.TgZ(79,"div",41)(80,"div",42)(81,"a",43),e.NdJ("click",function(){return o.forgetPassFn()}),e._uU(82,"Submit"),e.qZA()(),e.TgZ(83,"div",44)(84,"a",43),e.NdJ("click",function(){return o.showLoginForm()}),e._uU(85,"Login"),e.qZA()()()()()()()),2&s&&(e.xp6(15),e.Q6J("hidden",o.loginFormShoHid),e.xp6(8),e.Q6J("formGroup",o.loginForm),e.xp6(8),e.Q6J("ngIf",!(null!=o.loginForm.controls.login_field&&o.loginForm.controls.login_field.valid)&&((null==o.loginForm.controls.login_field?null:o.loginForm.controls.login_field.dirty)||(null==o.loginForm.controls.login_field?null:o.loginForm.controls.login_field.touched))),e.xp6(6),e.Q6J("type",o.hide?"password":"text"),e.xp6(1),e.uIk("aria-label","Hide password")("aria-pressed",o.hide),e.xp6(2),e.Oqu(o.hide?"visibility_off":"visibility"),e.xp6(1),e.Q6J("ngIf",!(null!=o.loginForm.controls.password_field&&o.loginForm.controls.password_field.valid)&&((null==o.loginForm.controls.password_field?null:o.loginForm.controls.password_field.dirty)||(null==o.loginForm.controls.password_field?null:o.loginForm.controls.password_field.touched))),e.xp6(1),e.Q6J("hidden",o.deActiveUser_Msg_Show),e.xp6(2),e.Oqu(null==o.login_Data_respons?null:o.login_Data_respons.msg),e.xp6(9),e.Q6J("disabled",o.loginForm.invalid),e.xp6(7),e.Q6J("hidden",o.forgetPassFormShoHid),e.xp6(7),e.Q6J("formGroup",o.forgetPass),e.xp6(4),e.Q6J("ngIf",o.linkSent),e.xp6(1),e.Q6J("ngIf",o.linkNotSent),e.xp6(5),e.Q6J("ngIf",o.emailIsNotExists),e.xp6(1),e.Q6J("ngIf",!(null!=o.forgetPass.controls.reg_email&&o.forgetPass.controls.reg_email.valid)&&((null==o.forgetPass.controls.reg_email?null:o.forgetPass.controls.reg_email.dirty)||(null==o.forgetPass.controls.reg_email?null:o.forgetPass.controls.reg_email.touched))))},dependencies:[v.O5,t.Fj,t.JJ,t.JL,t.sg,t.u,E.Nt,d.KE,d.hX,d.R9,P.Hw,D.RK,c.rH]})}return l})()},2570:(Z,f,i)=>{i.d(f,{t:()=>L});var t=i(6895),e=i(4238),h=i(4850),c=i(266),p=i(2761),u=i(4006),v=i(4385),E=i(9549),d=i(4144),P=i(1948),D=i(6709),T=i(8398),A=i(7392),M=i(4859),m=i(4650);const U=[{path:"header_BeforeLogin",component:e.j}];let L=(()=>{class r{static#e=this.\u0275fac=function(n){return new(n||r)};static#o=this.\u0275mod=m.oAB({type:r});static#i=this.\u0275inj=m.cJS({imports:[t.ez,t.ez,u.u5,u.UX,d.c,v.LD,E.lN,P.Fk,D.p9,T.QG,A.Ps,M.ot,c.AV,h.t,p.Bz.forChild(U)]})}return r})()}}]);
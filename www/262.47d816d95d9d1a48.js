"use strict";(self.webpackChunkhoroscope=self.webpackChunkhoroscope||[]).push([[262],{4118:(A,l,s)=>{s.r(l),s.d(l,{ChangePasswordModule:()=>F});var c=s(6895),a=s(4006),t=s(4650),m=s(2498),d=s(2761),f=s(5543),r=s(9549),p=s(4144),h=s(7392),u=s(4859);function w(o,g){1&o&&(t.TgZ(0,"div",5),t._UZ(1,"img",6),t.TgZ(2,"p"),t._uU(3," Link has been expired..!"),t.qZA(),t.TgZ(4,"p"),t._uU(5,'To reset your password,return to the login page and select "forget your password" to send a new email.'),t.qZA()())}function v(o,g){if(1&o&&(t.ynx(0),t._uU(1),t.BQk()),2&o){const e=t.oxw(2);t.xp6(1),t.hij(" ",e.errorPass," ")}}function _(o,g){if(1&o){const e=t.EpF();t.TgZ(0,"div",7)(1,"div",1)(2,"div",8)(3,"h2"),t._uU(4,"Forget Password "),t.qZA()(),t.TgZ(5,"div",9)(6,"div",10)(7,"form",11)(8,"div",12)(9,"div",13)(10,"div",14)(11,"mat-form-field")(12,"mat-label"),t._uU(13,"Enter New Password"),t.qZA(),t.TgZ(14,"input",15),t.NdJ("keyup",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.validatePasswordMatch())}),t.qZA(),t.TgZ(15,"button",16),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.hide_new=!i.hide_new)}),t.TgZ(16,"mat-icon"),t._uU(17),t.qZA()()()()(),t.TgZ(18,"div",13)(19,"div",14)(20,"mat-form-field")(21,"mat-label"),t._uU(22,"Confirm Password"),t.qZA(),t.TgZ(23,"input",17),t.NdJ("keyup",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.validatePasswordMatch())}),t.qZA(),t.TgZ(24,"button",16),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.hide_con=!i.hide_con)}),t.TgZ(25,"mat-icon"),t._uU(26),t.qZA()()(),t.TgZ(27,"small",18),t.YNc(28,v,2,1,"ng-container",19),t.qZA()()(),t.TgZ(29,"input",20),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.submit())}),t.qZA()()()()()()()}if(2&o){const e=t.oxw();t.xp6(7),t.Q6J("formGroup",e.passwordForm),t.xp6(7),t.Q6J("type",e.hide_new?"password":"text"),t.xp6(1),t.uIk("aria-label","Hide password")("aria-pressed",e.hide_new),t.xp6(2),t.Oqu(e.hide_new?"visibility_off":"visibility"),t.xp6(6),t.Q6J("type",e.hide_con?"password":"text"),t.xp6(1),t.uIk("aria-label","Hide password")("aria-pressed",e.hide_con),t.xp6(2),t.Oqu(e.hide_con?"visibility_off":"visibility"),t.xp6(2),t.Q6J("ngIf",e.errorPass),t.xp6(1),t.Q6J("disabled",e.passwordForm.invalid||e.isButtonDisabled)}}let x=(()=>{class o{constructor(e,n,i,k){this.service=e,this.router=n,this.route=i,this.sds=k,this.withoutLogin_headerShow=!1,this.afterLogin_headerShow=!0,this.isButtonDisabled=!1,this.linkExpired=!1,this.hide_old=!0,this.hide_new=!0,this.hide_con=!0,this.passwordForm=new a.cw({new_pass_1:new a.NI("",[a.kI.required]),new_pass:new a.NI("",[a.kI.required])}),this.profile_UserIdGet=this.sds.decrypt(this.route.snapshot.paramMap.get("email_Id")),this.isLogin=this.service.login(),this.isLogin?(this.afterLogin_headerShow=!1,this.withoutLogin_headerShow=!0):(this.afterLogin_headerShow=!0,this.withoutLogin_headerShow=!1)}ngOnInit(){this.currentDate=new Date,console.log(this.currentDate,"currentDate");const e=this.currentDate.getTime()-864e5;this.twentyFourHoursAgo=new Date(e),console.log(this.twentyFourHoursAgo,"twentyFourHoursAgo"),this.twentyFourHoursAgo<this.currentDate?(this.linkExpired=!0,console.log("Link has been expired","currentDate")):console.log("twentyFourHoursAgo")}submit(){this.passData={email_id:this.profile_UserIdGet,pass:this.passwordForm.controls.new_pass_1.value},console.log(this.passData),this.service.global_service(1,"/profile/update_forget_pass",{data:btoa(JSON.stringify(this.passData))}).subscribe(e=>{console.log(e)})}validatePasswordMatch(){const e=this.passwordForm.get("new_pass_1")?.value,n=this.passwordForm.get("new_pass")?.value;e===n?(this.passwordForm.setErrors(null),this.errorPass="",this.isButtonDisabled=!1):(this.errorPass="*Confirm password should be same as new password",this.isButtonDisabled=!0)}static#t=this.\u0275fac=function(n){return new(n||o)(t.Y36(m.D),t.Y36(d.F0),t.Y36(d.gz),t.Y36(f.U))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-change-password"]],decls:5,vars:2,consts:[[1,"otp_wrapper"],[1,"col-sm-12"],[1,"white_block_forget","white_blockOTP"],["class","expired",4,"ngIf"],["class","row",4,"ngIf"],[1,"expired"],["src","assets/images/expired.png","alt",""],[1,"row"],[1,"title_sec_main"],[1,"innerDefaultPage"],[1,"otpField_Main"],["autocomplete","off",3,"formGroup"],[1,"otpField_Main_sub"],[1,"otpField_Sub_field"],[1,"field_outer_label","field_outer_label_OTP"],["matInput","","formControlName","new_pass_1",3,"type","keyup"],["mat-icon-button","","matSuffix","",3,"click"],["matInput","","formControlName","new_pass",3,"type","keyup"],[1,"text-danger"],[4,"ngIf"],["type","button","value","Submit",3,"disabled","click"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t.YNc(3,w,6,0,"div",3),t.YNc(4,_,30,11,"div",4),t.qZA()()()),2&n&&(t.xp6(3),t.Q6J("ngIf",!i.linkExpired),t.xp6(1),t.Q6J("ngIf",i.linkExpired))},dependencies:[c.O5,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,r.KE,r.hX,r.R9,p.Nt,h.Hw,u.RK],styles:[".white_block_forget[_ngcontent-%COMP%]{background:#fff;border-radius:20px;box-shadow:0 0 18px 2px #cecece;padding:45px 20px;display:inline-block;width:100%;margin-bottom:40px;margin-top:40px}.expired[_ngcontent-%COMP%]{height:30vh;display:flex;align-items:center;color:red;font-size:16px;flex-direction:column;align-content:stretch;font-weight:bolder}.expired[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:50px;width:50px}"]})}return o})();var C=s(4385),y=s(1948),P=s(6709),b=s(4850),T=s(9873);const Z=[{path:"",component:x,data:{pageName:"changePass"}}];let F=(()=>{class o{static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275mod=t.oAB({type:o});static#s=this.\u0275inj=t.cJS({imports:[c.ez,a.u5,a.UX,C.LD,r.lN,p.c,y.Fk,P.p9,h.Ps,b.t,u.ot,T.W,d.Bz.forChild(Z)]})}return o})()}}]);
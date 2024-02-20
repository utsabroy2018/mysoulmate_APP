"use strict";(self.webpackChunkhoroscope=self.webpackChunkhoroscope||[]).push([[148],{1148:(G,g,o)=>{o.r(g),o.d(g,{Id_verificationModule:()=>E});var d=o(6895),r=o(4006),e=o(4650),m=o(2498),v=o(191),p=o(2761),y=o(5543),b=o(4160),x=o(1582),h=o(4144),f=o(9549),u=o(4385),T=o(3238),_=o(2440),C=o(5105);const I=["ngOtpInput"];function Z(i,l){1&i&&(e.ynx(0),e.TgZ(1,"h2"),e._UZ(2,"img",34),e._uU(3,"Your Profile is Pending ID Verification"),e.qZA(),e.BQk())}function O(i,l){1&i&&(e.ynx(0),e.TgZ(1,"h2"),e._UZ(2,"img",34),e._uU(3,"Your Profile is Verified "),e._UZ(4,"img",35),e.qZA(),e.BQk())}function A(i,l){1&i&&(e.TgZ(0,"div",36),e._uU(1,"The name against the entered Aadhaar number does not match with your profile name"),e.qZA())}function P(i,l){1&i&&(e.TgZ(0,"div",36),e._uU(1,"The name against the entered Pan number does not match with your profile name"),e.qZA())}function N(i,l){if(1&i&&(e.TgZ(0,"mat-option",37),e._uU(1),e.qZA()),2&i){const t=l.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.doc_type," ")}}function M(i,l){1&i&&(e.TgZ(0,"div",38),e._uU(1,"*Document type required "),e.qZA())}function S(i,l){1&i&&(e.TgZ(0,"div",38),e._uU(1,"*Please enter the number of your aadhar "),e.qZA())}function U(i,l){1&i&&(e.TgZ(0,"div"),e._uU(1," Please enter a valid numeric value. "),e.qZA())}function F(i,l){if(1&i&&(e.ynx(0),e.TgZ(1,"mat-form-field",16)(2,"mat-label"),e._uU(3,"Aadhar card number:"),e.qZA(),e._UZ(4,"input",39),e.qZA(),e.YNc(5,S,2,0,"div",20),e.YNc(6,U,2,0,"div",9),e.BQk()),2&i){const t=e.oxw();e.xp6(5),e.Q6J("ngIf",(null==t.f.aadharNumber.errors?null:t.f.aadharNumber.errors.required)&&(t.f.aadharNumber.dirty||t.f.aadharNumber.touched)),e.xp6(1),e.Q6J("ngIf",null==t.f.aadharNumber.errors?null:t.f.aadharNumber.errors.pattern)}}function w(i,l){1&i&&(e.TgZ(0,"div",38),e._uU(1,"*Please enter the number of your pan "),e.qZA())}function k(i,l){1&i&&(e.TgZ(0,"div",38),e._uU(1," Invalid PAN Number. "),e.qZA())}function D(i,l){if(1&i&&(e.ynx(0),e.TgZ(1,"mat-form-field",40)(2,"mat-label"),e._uU(3,"Pan card number:"),e.qZA(),e._UZ(4,"input",41),e.qZA(),e.YNc(5,w,2,0,"div",20),e.YNc(6,k,2,0,"div",20),e.BQk()),2&i){const t=e.oxw();e.xp6(5),e.Q6J("ngIf",(null==t.f.panNumber.errors?null:t.f.panNumber.errors.required)&&(t.f.panNumber.dirty||t.f.panNumber.touched)),e.xp6(1),e.Q6J("ngIf",t.docTypeSelect.get("panNumber").hasError("pattern"))}}function V(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"ng-otp-input",49,50),e.NdJ("onInputChange",function(n){e.CHM(t);const s=e.oxw(2);return e.KtG(s.onOtpChange(n))}),e.qZA()}if(2&i){const t=e.oxw(2);e.Q6J("config",t.config)}}function L(i,l){if(1&i&&(e.TgZ(0,"div",42)(1,"label",43)(2,"div",11)(3,"p",44),e._uU(4,"Enter verification code"),e.qZA(),e.YNc(5,V,2,1,"ng-otp-input",45),e.qZA()(),e._UZ(6,"label",46)(7,"div",47),e.TgZ(8,"div",48)(9,"span"),e._uU(10," Your Otp has Expired"),e.qZA()()()),2&i){const t=e.oxw();e.xp6(5),e.Q6J("ngIf",t.showOtpComponent),e.xp6(3),e.Q6J("hidden",t.showExpairMsg)}}let J=(()=>{class i{constructor(t,a,n,s,c){this.service=t,this.msgService=a,this.router=n,this.formBuilder=s,this.sds=c,this.showExpairMsg=!0,this.generateOTP_btn=!1,this.showOtpComponent=!0,this.config={allowNumbersOnly:!1,length:6,isPasswordInput:!1,disableAutoFocus:!1,placeholder:"",inputStyles:{width:"40px",height:"35px"}},this.showAadharInput=!1,this.showPanInput=!1,this.verifyBtn=!1,this.hide_verification=!1,this.selectedFile=null,this.selectedFilePassport=null,this.isDisable_1=!0,this.isDisable_2=!0,this.getLocalSecrectUrl=this.sds.getLocalSecrectData(),this.user_country=this.getLocalSecrectUrl.data.user_country,this.Out_Of_India=!1,this.citizenship_India=!1,this.otpFieldActive=!1,this.otpControl=new r.NI(""),this.adhaarAlert=!1,this.pannAlert=!1}ngOnInit(){this.doc_type_list(),this.localstorageDT={id:this.getLocalSecrectUrl.data.id,user_name:this.getLocalSecrectUrl.data.user_name,profile_flag:this.getLocalSecrectUrl.data.profile_flag},this.docTypeSelect=this.formBuilder.group({doc_type:["",{validators:"India"==this.user_country?[r.kI.required]:null}],aadharNumber:[""],panNumber:[""],otp_input:[""],user_id:[this.getLocalSecrectUrl.data.id],user:[this.getLocalSecrectUrl.data.user_name]})}ngAfterContentChecked(){this.verifyBtn="Y"==this.getLocalSecrectUrl.data.profile_flag}ngAfterViewInit(){this.docTypeSelect.controls.doc_type.valueChanges.subscribe(t=>{1==t?(this.docTypeSelect.controls.aadharNumber.setValidators([r.kI.required,r.kI.minLength(12),r.kI.maxLength(12)]),this.docTypeSelect.controls.panNumber.removeValidators([r.kI.required])):2==t&&(this.docTypeSelect.controls.panNumber.setValidators([r.kI.required,r.kI.pattern(/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}$/),r.kI.minLength(10),r.kI.maxLength(10)]),this.docTypeSelect.controls.aadharNumber.removeValidators([r.kI.required])),this.docTypeSelect.controls.panNumber.updateValueAndValidity(),this.docTypeSelect.controls.aadharNumber.updateValueAndValidity()})}panValidator(t){return t.value&&!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(t.value)?{invalidPan:!0}:null}onDocumentTypeChange(t){this.kyc_flag=null;const a=t.value;this.showAadharInput=!1,this.showPanInput=!1,1===a?(this.showAadharInput=!0,this.kyc_flag="A"):2===a&&(this.showPanInput=!0,this.kyc_flag="P")}get f(){return this.docTypeSelect.controls}doc_type_list(){this.service.global_service(0,"/kyc/doc_list",null).subscribe(t=>{this.responseData=t,this.responseData=this.responseData.suc>0&&atob(this.responseData.msg),this.list=JSON.parse(this.responseData)})}onSubmit(t){this.adhaarAlert=!1,this.pannAlert=!1,"A"==this.kyc_flag&&(this.otpFieldActive?this.service.global_service(1,"/kyc/aadhar_okyc_verify",{data:btoa(JSON.stringify(this.aadharVerify))}).subscribe(a=>{this.getVerifyResponse=a,this.aadharName=this.getVerifyResponse.msg.name,this.getVerifyResponse.suc>0?this.localstorageDT.user_name.trim().toLowerCase()==this.aadharName.toLowerCase()?(this.adhaarAlert=!1,this.aadharKycFlag={field_kyc_type:"A",user_name:this.localstorageDT.user_name,user_id:this.localstorageDT.id},this.service.global_service(1,"/kyc/update_kyc_flag",this.aadharKycFlag).subscribe(n=>{this.getFlagResponse=n,this.getFlagResponse.suc>0?(this.msgService.successMsg("VS"),this.generateOTP_btn=!1,this.sds.setLocalSecrectData({profile_flag:"Y"})):this.sds.setLocalSecrectData({profile_flag:"N"})})):(this.adhaarAlert=!0,this.sds.setLocalSecrectData({profile_flag:"N"})):0==this.getVerifyResponse.suc&&this.msgService.errorMsg("OTP_NOT_MAT")}):(this.aadharOTP={aadhaar:this.docTypeSelect.controls.aadharNumber.value},this.service.global_service(1,"/kyc/aadhar_okyc_send_otp",{data:btoa(JSON.stringify(this.aadharOTP))}).subscribe(a=>{this.getOPTResponse=a,this.getOPTResponse.suc>0?(this.generateOTP_btn=!0,this.ref_id=this.getOPTResponse.msg.ref_id,this.otpFieldActive=!0,this.kyc_flag="A"):0==this.getOPTResponse.suc&&(this.otpFieldActive=!1,this.msgService.errorMsg("INV_AADHAAR"))}))),"P"==this.kyc_flag&&(this.panVerify={pan:this.docTypeSelect.controls.panNumber.value},this.service.global_service(1,"/kyc/pan_okyc_verify",{data:btoa(JSON.stringify(this.panVerify))}).subscribe(a=>{this.getPanVerifyResponse=a,this.panName=this.getPanVerifyResponse.msg.registered_name,"VALID"==this.getPanVerifyResponse.msg.pan_status?this.localstorageDT.user_name.toLowerCase()==this.panName.toLowerCase()?(this.pannAlert=!1,this.panKycFlag={field_kyc_type:"P",user_name:this.localstorageDT.user_name,user_id:this.localstorageDT.id},this.service.global_service(1,"/kyc/update_kyc_flag",this.panKycFlag).subscribe(n=>{this.getFlagResponse=n,this.getFlagResponse.suc>0?(this.msgService.successMsg("VS"),this.sds.setLocalSecrectData({profile_flag:"Y"})):this.sds.setLocalSecrectData({profile_flag:"N"})})):(this.pannAlert=!0,this.sds.setLocalSecrectData({profile_flag:"N"})):"INVALID"==this.getPanVerifyResponse.msg.pan_status&&alert(this.getPanVerifyResponse.msg.message)}))}getFieldValue(t){this.docType_id=t.source._value}resendOTP(){this.ngOtpInput.setValue(""),this.timer_new(5)}timer_new(t){clearInterval(this.timerInt);let a=60*t,n="0",s=60;const c=t<10?"0":"";this.timerInt=setInterval(()=>{a--,0!=s?s--:s=59,n=s<10?"0"+s:s,this.display_new=`${c}${Math.floor(a/60)}:${n}`,"00:00"==this.display_new?(this.showExpairMsg=!1,clearInterval(this.timerInt)):this.showExpairMsg=!0},1e3)}onOtpChange(t){this.otp=t,this.aadharVerify={otp:t,ref_id:this.ref_id}}onclickcheck(t){this.generateOTP_btn=!1}static#e=this.\u0275fac=function(a){return new(a||i)(e.Y36(m.D),e.Y36(v.e),e.Y36(p.F0),e.Y36(r.qu),e.Y36(y.U))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-id_verification"]],viewQuery:function(a,n){if(1&a&&e.Gf(I,5),2&a){let s;e.iGM(s=e.CRH())&&(n.ngOtpInput=s.first)}},decls:52,vars:11,consts:[[1,"forDesktopHeader_login"],[1,"forResponsiveHeader_login"],[1,"innerMain_wraper","idVerify_wraper"],[1,"wrapper"],[1,"col-sm-3","float-left","portfolio_left"],[1,"col-sm-9","float-left","portfolio_right"],[1,"portfolio_right_sub"],[1,"portfolio_form_fill"],[1,"title_sec"],[4,"ngIf"],[1,"id_verify_main"],[1,"field_outer_label"],["class","alert alert-danger",4,"ngIf"],[1,"idVery_form",3,"formGroup","ngSubmit"],[1,"form-group","setting_custome","row","mt-2"],[1,"col-sm-6","dropdownCont"],[1,"example-full-width"],["formControlName","doc_type",3,"selectionChange"],["value",""],[3,"value",4,"ngFor","ngForOf"],["class","noteSection text-left",4,"ngIf"],[1,"form-group","setting_custome","row"],[1,"otpField_verify"],[1,"row"],["class","otpMain otpMain_registration",4,"ngIf"],[1,"portfolio_edit_Form_btn","mt-0"],["type","submit",3,"disabled"],[1,"footer_bottomSec"],["routerLink","/profile_list",1,"profList_link_bot"],["aria-hidden","true",1,"fa","fa-users"],["routerLink","/wishlist",1,"wish_link_bot"],["aria-hidden","true",1,"fa","fa-heart"],["routerLink","/user_dashboard",1,"dash_link_bot"],["aria-hidden","true",1,"fa","fa-tachometer"],["src","assets/images/id_verify_white.png","alt",""],["src","assets/images/verifi_icon.png","alt",""],[1,"alert","alert-danger"],[3,"value"],[1,"noteSection","text-left"],["matInput","","type","text","formControlName","aadharNumber","maxlength","12","minlength","12"],[1,"example-full-width-pan"],["matInput","","formControlName","panNumber"],[1,"otpMain","otpMain_registration"],[1,"otp"],[1,"title"],[3,"config","onInputChange",4,"ngIf"],[1,"resendOtp"],[1,"field_outer_label","verifyBtn"],[1,"otpExpair",3,"hidden"],[3,"config","onInputChange"],["ngOtpInput",""]],template:function(a,n){1&a&&(e.TgZ(0,"div",0),e._UZ(1,"app-after_login_header_Global"),e.qZA(),e.TgZ(2,"div",1),e._UZ(3,"app-headerResponsive"),e.qZA(),e.TgZ(4,"div",2)(5,"div",3)(6,"div",4),e._UZ(7,"app-leftBar_after_login"),e.qZA(),e.TgZ(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8),e.YNc(12,Z,4,0,"ng-container",9),e.YNc(13,O,5,0,"ng-container",9),e.qZA(),e.TgZ(14,"div",10)(15,"div",11),e.YNc(16,A,2,0,"div",12),e.YNc(17,P,2,0,"div",12),e.TgZ(18,"form",13),e.NdJ("ngSubmit",function(c){return n.onSubmit(c)}),e.TgZ(19,"div",14)(20,"div",15)(21,"mat-form-field",16)(22,"mat-label"),e._uU(23,"Select Document Type"),e.qZA(),e.TgZ(24,"mat-select",17),e.NdJ("selectionChange",function(c){return n.onDocumentTypeChange(c)}),e.TgZ(25,"mat-option",18),e._uU(26,"Select"),e.qZA(),e.YNc(27,N,2,2,"mat-option",19),e.qZA()(),e.YNc(28,M,2,0,"div",20),e.qZA()(),e.TgZ(29,"div",21)(30,"div",15),e.YNc(31,F,7,2,"ng-container",9),e.YNc(32,D,7,2,"ng-container",9),e.qZA()(),e.TgZ(33,"div",22)(34,"div",23),e.YNc(35,L,11,2,"div",24),e.qZA()(),e.TgZ(36,"div",25)(37,"button",26),e._uU(38,"Submit"),e.qZA()()()()()()()()()(),e.TgZ(39,"div",27)(40,"a",28),e._UZ(41,"i",29),e.TgZ(42,"span"),e._uU(43,"Matches"),e.qZA()(),e.TgZ(44,"a",30),e._UZ(45,"i",31),e.TgZ(46,"span"),e._uU(47,"My Wishlist"),e.qZA()(),e.TgZ(48,"a",32),e._UZ(49,"i",33),e.TgZ(50,"span"),e._uU(51,"Dashboard"),e.qZA()()()),2&a&&(e.xp6(12),e.Q6J("ngIf",!n.verifyBtn),e.xp6(1),e.Q6J("ngIf",n.verifyBtn),e.xp6(3),e.Q6J("ngIf",n.adhaarAlert),e.xp6(1),e.Q6J("ngIf",n.pannAlert),e.xp6(1),e.Q6J("formGroup",n.docTypeSelect),e.xp6(9),e.Q6J("ngForOf",n.list),e.xp6(1),e.Q6J("ngIf",(null==n.f.doc_type.errors?null:n.f.doc_type.errors.required)&&(n.f.doc_type.dirty||n.f.doc_type.touched)),e.xp6(3),e.Q6J("ngIf",1==n.f.doc_type.value),e.xp6(1),e.Q6J("ngIf",2==n.f.doc_type.value),e.xp6(3),e.Q6J("ngIf",n.generateOTP_btn),e.xp6(2),e.Q6J("disabled",n.docTypeSelect.invalid))},dependencies:[d.sg,d.O5,b.q,x.b,p.rH,r._Y,r.Fj,r.JJ,r.JL,r.wO,r.nD,r.sg,r.u,h.Nt,f.KE,f.hX,u.gD,T.ey,_.df,C.A],styles:[".otpField_verify[_ngcontent-%COMP%]{width:70%;margin:0}.otpField_verify[_ngcontent-%COMP%]   p.title[_ngcontent-%COMP%]{color:#0d2048!important;font-size:16px!important;margin:0 0 6px!important;padding:0;font-weight:900}.otpField_verify[_ngcontent-%COMP%]   .otpMain[_ngcontent-%COMP%]   .verifyBtn[_ngcontent-%COMP%]{padding:0 15px;display:inline-flex;width:100%;margin-bottom:17px}.otpField_verify[_ngcontent-%COMP%]   button.verifyEmailBtn[_ngcontent-%COMP%]{border:none;background:linear-gradient(90deg,rgba(37,105,218,1) 0%,rgba(36,177,184,1) 100%);border-radius:50px;font-size:16px;color:#fff;padding:7px 40px;font-family:Cabin,sans-serif;cursor:pointer;line-height:18px;margin-top:6px}.otpField_verify[_ngcontent-%COMP%]   .otpMain[_ngcontent-%COMP%]{width:100%;display:inline-block;position:relative;background:#f2f1f1;border-radius:15px;padding-top:10px;margin-top:10px!important}.otpField_verify[_ngcontent-%COMP%]   .otp[_ngcontent-%COMP%]{padding:0 15px;float:left;width:51%;box-sizing:border-box}.otpField_verify[_ngcontent-%COMP%]   .otp[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;text-align:left}.otpField_verify[_ngcontent-%COMP%]   .timer[_ngcontent-%COMP%]{padding:0 15px;float:left;width:25%;box-sizing:border-box}.otpField_verify[_ngcontent-%COMP%]   .resendOtp[_ngcontent-%COMP%]{padding:36px 15px 0;float:left;width:49%;box-sizing:border-box;align-items:center;display:flex}.otpField_verify[_ngcontent-%COMP%]   .resendOtp[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:10px}.otpField_verify[_ngcontent-%COMP%]   .resendOtp[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;background:#bf5e23;border-radius:3px;margin-right:6px;font-size:14px;color:#fff;padding:4px 11px;font-family:Cabin,sans-serif;cursor:pointer;line-height:20px}.otpField_verify[_ngcontent-%COMP%]   .resendOtp[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{background:#b8754c}.otpField_verify[_ngcontent-%COMP%]   .otpExpair[_ngcontent-%COMP%]{padding:0 15px;width:100%;box-sizing:border-box;margin-bottom:5px;display:inline-block;left:0;bottom:-23px}.otpField_verify[_ngcontent-%COMP%]   .otpExpair[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:100%;display:block;box-sizing:border-box;margin-bottom:0;color:#d9162a;font-size:13px;text-align:center;font-weight:700;background:#ffcacf;line-height:22px;border-radius:5px}.example-full-width-pan[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{text-transform:uppercase}"]})}return i})();var Y=o(4857),Q=o(1948),R=o(6709),q=o(8874),B=o(9873);const z=[{path:"",component:J}];let E=(()=>{class i{static#e=this.\u0275fac=function(a){return new(a||i)};static#t=this.\u0275mod=e.oAB({type:i});static#i=this.\u0275inj=e.cJS({imports:[d.ez,Y.G,q.I,p.Bz.forChild(z),r.u5,r.UX,h.c,u.LD,f.lN,Q.Fk,R.p9,_.Xz,B.W]})}return i})()}}]);
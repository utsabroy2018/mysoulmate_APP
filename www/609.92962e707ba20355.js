"use strict";(self.webpackChunkhoroscope=self.webpackChunkhoroscope||[]).push([[609],{9609:(S,u,a)=>{a.r(u),a.d(u,{PaymentdetailsModule:()=>B});var s=a(6895),i=a(4006),t=a(4650),h=a(2498),m=a(2761),y=a(191),v=a(1481),f=a(5543),p=a(4144),c=a(9549);let b=(()=>{class o{constructor(e,n,l,r,d,g,D,Y){this.service=e,this.router=n,this.route=l,this.msgService=r,this.datePipe=d,this._sanitizer=g,this.sds=D,this.location=Y,this.redirectURL="http://localhost:4200/ccavResponseHandler",this.cancelURL="http://localhost:4200/ccavResponseHandler",this.currency="INR",this.language="EN",this.shipingForm_Show=!0,this.checkBoxOnchangeValue=!1,this.accessCode="AVWF05KL38AI00FWIA",this.payUrl=!1,this.paymentEncodedResponse=!1,this.paymentForm=new i.cw({billingName:new i.NI("",[i.kI.required]),billingCity:new i.NI("",[i.kI.required]),billingState:new i.NI("",[i.kI.required]),billingAddress:new i.NI("",[i.kI.required]),billingZip:new i.NI("",[i.kI.required,i.kI.pattern(/^-?(0|[1-9]\d*)?$/)]),billingCountry:new i.NI("",[i.kI.required]),billingTel:new i.NI("",[i.kI.required,i.kI.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),billingEmail:new i.NI("",[i.kI.required,i.kI.email])}),this.getLocalSecrectUrl=this.sds.getLocalSecrectData()}ngOnInit(){this.localstorageDT={id:this.getLocalSecrectUrl.data.id,profile_id:this.getLocalSecrectUrl.data.profile_code,user_name:this.getLocalSecrectUrl.data.user_name},this.orderIdMain=atob(this.route.snapshot.paramMap.get("id"));const e=this.orderIdMain.split("&");this.compulsoryInformation={merchantId:2985958,orderId:"",financialYea:this.financialYea,currency:this.currency,planName:e[2],amount:e[1],redirectURL:this.redirectURL,language:this.language,packageId:e[0],packagePeriod:e[3]},this.loadPaymentData(),this.getCurrentFinancialYear()}goBack(){this.location.back()}getCurrentFinancialYear(){var e=new Date;return this.financialYea=e.getMonth()+1<=3?e.getFullYear()-1+""+e.getFullYear():e.getFullYear()+""+(e.getFullYear()+1),this.financialYea}loadPaymentData(){this.paymentForm.patchValue({})}submit_subcriptionData(){this.sendBillingData={merchant_id:2985958,order_id:this.compulsoryInformation.orderId,financial_yr:this.financialYea,currency:this.compulsoryInformation.currency,amount:this.compulsoryInformation.amount,redirect_url:encodeURIComponent("https://api.mysoulmate.co.in/payRes"),cancel_url:encodeURIComponent("https://api.mysoulmate.co.in/payRes"),language:this.compulsoryInformation.language,billing_name:this.paymentForm.controls.billingName.value,billing_address:this.paymentForm.controls.billingAddress.value,billing_city:this.paymentForm.controls.billingCity.value,billing_state:this.paymentForm.controls.billingState.value,billing_zip:this.paymentForm.controls.billingZip.value,billing_country:this.paymentForm.controls.billingCountry.value,billing_tel:this.paymentForm.controls.billingTel.value,billing_email:this.paymentForm.controls.billingEmail.value,delivery_name:this.paymentForm.controls.billingName.value,delivery_address:this.paymentForm.controls.billingAddress.value,delivery_city:this.paymentForm.controls.billingCity.value,delivery_state:this.paymentForm.controls.billingState.value,delivery_zip:this.paymentForm.controls.billingZip.value,delivery_country:this.paymentForm.controls.billingCountry.value,delivery_tel:this.paymentForm.controls.billingTel.value,merchant_param1:"",merchant_param2:"",merchant_param3:"",merchant_param4:"",merchant_param5:"",promo_code:"",customer_identifier:this.localstorageDT.id,user_id:this.localstorageDT.id,user:this.localstorageDT.user_name,pack_id:this.compulsoryInformation.packageId},this.paymentEncodedResponse=!0,this.sendBillingData=JSON.stringify(this.sendBillingData),window.location.href=`https://api.mysoulmate.co.in/PayReq?data=${btoa(this.sendBillingData)}`}static#t=this.\u0275fac=function(n){return new(n||o)(t.Y36(h.D),t.Y36(m.F0),t.Y36(m.gz),t.Y36(y.e),t.Y36(s.uU),t.Y36(v.H7),t.Y36(f.U),t.Y36(s.Ye))};static#i=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-paymentdetails"]],decls:92,vars:9,consts:[[1,"col-sm-12","float-left","portfolio_right"],[1,"sectionTitle_Res","mb-3"],[1,"backBtn",3,"click"],["src","assets/images/turn-back.png","alt",""],[1,"portfolio_right_sub"],[1,"portfolio_form_fill"],[1,"title_sec"],["src","assets/images/paymentHistory.png","alt",""],[1,"paymentListMainForm"],[1,"paymentListMainFormSub"],[1,"paymentdetailsForm",3,"formGroup"],[1,""],[1,"form-group","paymentDetail_row"],[1,"col-sm-4"],[1,"field_outer_label"],[1,"example-full-width"],["matInput","",3,"value","readonly"],[1,"form-group","paymentDetail_row","paymentDetail_row_Title"],[1,"col-sm-12"],[1,"col-sm-3"],["value","","matInput","","formControlName","billingName"],["value","","matInput","","formControlName","billingCity"],["value","","matInput","","formControlName","billingState"],["matInput","","formControlName","billingAddress"],["value","","matInput","","formControlName","billingZip"],["value","","matInput","","formControlName","billingCountry"],["value","","matInput","","formControlName","billingTel"],["value","","matInput","","formControlName","billingEmail"],[1,"portfolio_edit_Form_btn"],["type","button",3,"disabled","click"]],template:function(n,l){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"button",2),t.NdJ("click",function(){return l.goBack()}),t._UZ(3,"img",3),t._uU(4," Back"),t.qZA()(),t.TgZ(5,"div",4)(6,"div",5)(7,"div",6)(8,"h2"),t._UZ(9,"img",7),t._uU(10,"Payment Details"),t.qZA()(),t.TgZ(11,"div",8)(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"div",13)(17,"div",14)(18,"mat-form-field",15)(19,"mat-label"),t._uU(20,"Subscription Plan"),t.qZA(),t._UZ(21,"input",16),t.qZA()()(),t.TgZ(22,"div",13)(23,"div",14)(24,"mat-form-field",15)(25,"mat-label"),t._uU(26,"Currency"),t.qZA(),t._UZ(27,"input",16),t.qZA()()(),t.TgZ(28,"div",13)(29,"div",14)(30,"mat-form-field",15)(31,"mat-label"),t._uU(32,"Amount"),t.qZA(),t._UZ(33,"input",16),t.qZA()()()(),t.TgZ(34,"div",17)(35,"div",18)(36,"h2"),t._uU(37,"Billing Information"),t.qZA()()(),t.TgZ(38,"div",12)(39,"div",19)(40,"div",14)(41,"mat-form-field",15)(42,"mat-label"),t._uU(43,"Billing Name"),t.qZA(),t._UZ(44,"input",20),t.qZA()()(),t.TgZ(45,"div",19)(46,"div",14)(47,"mat-form-field",15)(48,"mat-label"),t._uU(49,"Billing City"),t.qZA(),t._UZ(50,"input",21),t.qZA()()(),t.TgZ(51,"div",19)(52,"div",14)(53,"mat-form-field",15)(54,"mat-label"),t._uU(55,"Billing State"),t.qZA(),t._UZ(56,"input",22),t.qZA()()()(),t.TgZ(57,"div",12)(58,"div",18)(59,"div",14)(60,"mat-form-field",15)(61,"mat-label"),t._uU(62,"Billing Address"),t.qZA(),t._UZ(63,"textarea",23),t.qZA()()()(),t.TgZ(64,"div",12)(65,"div",19)(66,"div",14)(67,"mat-form-field",15)(68,"mat-label"),t._uU(69,"Billing Zip"),t.qZA(),t._UZ(70,"input",24),t.qZA()()(),t.TgZ(71,"div",19)(72,"div",14)(73,"mat-form-field",15)(74,"mat-label"),t._uU(75,"Billing Country"),t.qZA(),t._UZ(76,"input",25),t.qZA()()(),t.TgZ(77,"div",19)(78,"div",14)(79,"mat-form-field",15)(80,"mat-label"),t._uU(81,"Billing Tel"),t.qZA(),t._UZ(82,"input",26),t.qZA()()(),t.TgZ(83,"div",19)(84,"div",14)(85,"mat-form-field",15)(86,"mat-label"),t._uU(87,"Billing Email"),t.qZA(),t._UZ(88,"input",27),t.qZA()()()()(),t.TgZ(89,"div",28)(90,"button",29),t.NdJ("click",function(){return l.submit_subcriptionData()}),t._uU(91," Submit "),t.qZA()()()()()()()()),2&n&&(t.xp6(13),t.Q6J("formGroup",l.paymentForm),t.xp6(8),t.hYB("value","",null==l.compulsoryInformation?null:l.compulsoryInformation.planName," - (",null==l.compulsoryInformation?null:l.compulsoryInformation.packagePeriod," Months)"),t.Q6J("readonly",!0),t.xp6(6),t.s9C("value",null==l.compulsoryInformation?null:l.compulsoryInformation.currency),t.Q6J("readonly",!0),t.xp6(6),t.s9C("value",null==l.compulsoryInformation?null:l.compulsoryInformation.amount),t.Q6J("readonly",!0),t.xp6(57),t.Q6J("disabled",!l.paymentForm.valid))},dependencies:[i.Fj,i.JJ,i.JL,i.sg,i.u,p.Nt,c.KE,c.hX]})}return o})();var Z=a(4826),I=a(4385),U=a(1948),A=a(6709),F=a(7392),C=a(9602),N=a(3238),T=a(9873);const k=[{path:"",component:b,data:{pageName:"paymentDetails"}}];let B=(()=>{class o{static#t=this.\u0275fac=function(n){return new(n||o)};static#i=this.\u0275mod=t.oAB({type:o});static#a=this.\u0275inj=t.cJS({imports:[s.ez,m.Bz.forChild(k),Z.bB,i.u5,i.UX,p.c,I.LD,c.lN,U.Fk,A.p9,F.Ps,C.FA,N.XK,T.W]})}return o})()}}]);
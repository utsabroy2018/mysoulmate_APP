"use strict";(self.webpackChunkhoroscope=self.webpackChunkhoroscope||[]).push([[107],{8107:(J,g,o)=>{o.r(g),o.d(g,{Upload_photoModule:()=>w});var h=o(6895),f=o(2340),t=o(4650),m=o(2498),p=o(2761),u=o(191),_=o(1481),v=o(5543),b=o(4160),U=o(1582),y=o(5105);function Z(l,n){if(1&l){const e=t.EpF();t.ynx(0),t.TgZ(1,"button",26),t.NdJ("click",function(){t.CHM(e);const i=t.MAs(6);return t.KtG(i.click())}),t._UZ(2,"i",27),t._uU(3," Choose Photo"),t.qZA(),t.TgZ(4,"input",28,29),t.NdJ("change",function(i){t.CHM(e);const a=t.oxw();return t.KtG(a.onMultyplPhotSele(i))}),t.qZA(),t.BQk()}if(2&l){const e=t.oxw();t.xp6(1),t.Q6J("disabled",e.listOfFiles.length>=5)}}function D(l,n){1&l&&(t.ynx(0),t.TgZ(1,"button",30),t._UZ(2,"i",27),t._uU(3," Choose Photo"),t.qZA(),t.BQk()),2&l&&(t.xp6(1),t.Q6J("disabled",!0))}function I(l,n){1&l&&(t.TgZ(0,"div",31),t._uU(1," You have Chose more than 5 Images "),t.qZA())}function T(l,n){if(1&l){const e=t.EpF();t.TgZ(0,"div",15)(1,"div",32),t._UZ(2,"img",33),t.TgZ(3,"button",34),t.NdJ("click",function(){const i=t.CHM(e),a=i.index,r=i.$implicit,c=t.oxw();return t.KtG(c.removeMultyImg(a,r.id,r.index>=0?r.index:-1))}),t._UZ(4,"i",35),t.qZA()()()}if(2&l){const e=n.$implicit;t.xp6(2),t.Q6J("src",e.filePath,t.LSH)}}function F(l,n){1&l&&(t.TgZ(0,"p"),t._uU(1,"Loading....."),t.qZA())}let S=(()=>{class l{constructor(e,s,i,a,r){this.service=e,this.router=s,this.msgService=i,this.sanitizer=a,this.sds=r,this.fileList=[],this.listOfFiles=[],this.isLoading=!1,this.fileList_single=[],this.listOfFiles_single=[],this.isLoading_single=!1,this.isDisabled=!0,this.isShow=!0,this.submit_isDisabled=!0,this.upload_isDisabled=!1,this.name="Angular",this.transform={},this.isSave=!1,this.contain_within_aspect_ratio=!0,this.cropround=!1,this.getLocalSecrectUrl=this.sds.getLocalSecrectData()}ngOnInit(){this.localstorageDT={id:this.getLocalSecrectUrl.data.id,user_name:this.getLocalSecrectUrl.data.user_name},this.imageBaseUrl=f.N.api_url+"/uploads/",this.getGalleryPhoto(),this.get_Single_Photo()}onMultyplPhotSele(e){this.upload_isDisabled=!1,this.isLoading=!0,this.isShow=!0,e.target.files.length>0&&e.target.files.length<=5&&(this.isDisabled=!1),e.target.files.length>5&&(this.isShow=!1);for(var s=0;s<=e.target.files.length-1;s++){var i=e.target.files[s];("image/png"==i.type||"image/jpeg"==i.type)&&(this.fileList.push(i),this.listOfFiles.push({id:0,filePath:this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(i)),index:s})),this.listOfFiles.length>=0&&this.listOfFiles.length<=5?(this.submit_isDisabled=!1,this.upload_isDisabled=!0):(this.submit_isDisabled=!0,this.upload_isDisabled=!1)}this.isLoading=!1,this.uploadMUltyImg()}removeMultyImg(e,s,i){confirm("Do you want to delete permantly?")?s>0?this.service.global_service(0,"/kyc/single_pic_delete",`id=${s}`).subscribe(a=>{this.imgDelResp=a,this.imgDelResp.suc>0&&this.listOfFiles.splice(e,1)}):(this.listOfFiles.splice(e,1),i>=0&&this.fileList.splice(i,1),this.listOfFiles.length<=5&&(this.submit_isDisabled=!1),this.listOfFiles.length<1&&(this.submit_isDisabled=!0)):alert("please choose your photo")}getGalleryPhoto(){this.service.global_service(0,"/kyc/get_profile_pic",`user_id=${this.localstorageDT.id}`).subscribe(e=>{var s;if(s=(s=e).suc>0&&atob(s.msg),this.lodedGalleryImg=JSON.parse(s),this.lodedGalleryImg.length>0){this.listOfFiles.length=0;for(let i of this.lodedGalleryImg)this.listOfFiles.push({id:i.id,filePath:this.imageBaseUrl+i.file_path})}})}uploadMUltyImg(){this.formData=new FormData;for(let e of this.fileList)this.formData.append("prof_img",e);this.formData.append("user_id",this.localstorageDT.id),this.formData.append("user",this.localstorageDT.user_name),this.formData.append("edite_Flag","1"),this.listOfFiles.length>0&&this.listOfFiles.length<=5&&(this.isDisabled=!1,this.service.global_service(1,"/kyc/profile_pic",this.formData).subscribe(e=>{this.responGallery=e,this.responGallery.suc>0?(this.fileList=[],this.isDisabled=!0,this.getGalleryPhoto()):this.msgService.successMsg("EU")}))}on_Single_PhotSele(e){var s=e.target.files[0];this.listOfFiles_single.length=0,this.listOfFiles_single.push({id:0,filePath:this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(s))});const i=new FormData;i.append("profile_img",s),i.append("user_id",this.localstorageDT.id),i.append("user",this.localstorageDT.user_name),i.append("edite_Flag","1"),this.service.global_service(1,"/profile/upload_profile_pic",i).subscribe(a=>{this.responGallery_single=a,this.responGallery_single.suc>0&&(this.msgService.successMsg("SU"),this.get_Single_Photo())})}get_Single_Photo(){this.service.global_service(0,"/profile/profile_pic",`user_id=${this.localstorageDT.id}`).subscribe(e=>{var s;s=(s=e).suc>0&&atob(s.msg),this.loded_single_img=JSON.parse(s),this.listOfFiles_single.length=0;for(let i of this.loded_single_img)this.listOfFiles_single.push({id:i.id,filePath:this.imageBaseUrl+i.file_path})})}open_crop_modal(){this.el=document.getElementById("id01"),this.el.style.display="block"}zoomOut(){this.scale-=.1,this.transform={...this.transform,scale:this.scale}}zoomIn(){this.scale+=.1,this.transform={...this.transform,scale:this.scale}}imageLoaded(){this.showCropper=!0,this.modal=!1,this.hide=!1,this.valu=!1}imageCropped(e){this.croppedImage=e.base64,"tab4"==this.show_tab&&(this.preview_for_section=this.croppedImage)}cropperReady(e){}loadImageFailed(){}close_modal_on_crop(){this.modal_close_oncrop=document.getElementById("id01"),this.modal_close_oncrop.style.display="none"}saveCroppedImg(){this.valu=!0,this.img_cover=this.croppedImage;const s=this.img_name,i=this.dataURItoBlob(this.croppedImage),a=new File([i],s,{type:"image/png"});this.img_cover=a,this.el.style.display="none";const r=new FormData;r.append("profile_img",this.img_cover),r.append("user_id",this.localstorageDT.id),r.append("user",this.localstorageDT.user_name),r.append("edite_Flag","1"),this.service.global_service(1,"/profile/upload_profile_pic",r).subscribe(c=>{this.responGallery_single=c,this.responGallery_single.suc>0&&(this.msgService.successMsg("SU"),this.get_Single_Photo())})}dataURItoBlob(e){var s=atob(e.toString().split(",")[1]);const i=[];for(var a=0;a<s.length;a++)i.push(s.charCodeAt(a));return new Blob([new Uint8Array(i)],{type:"image/png"})}section_img_upload(e){this.cropround=!1,this.aspect_ratio="3/2",this.contain_within_aspect_ratio=!1,this.crop_height=500,this.crop_min_height=200,this.crop_width=600,this.crop_min_width=180,window.URL||window,new Image,this.profileImgName=e.target.files[0].name,this.img_name=this.profileImgName,this.profileImgName=e,this.img_cover=this.profileImgName,this.logo_file1=document.getElementById("logo_crop"),this.logo_file1.click()}static#t=this.\u0275fac=function(s){return new(s||l)(t.Y36(m.D),t.Y36(p.F0),t.Y36(u.e),t.Y36(_.H7),t.Y36(v.U))};static#e=this.\u0275cmp=t.Xpm({type:l,selectors:[["app-upload_photo"]],decls:40,vars:5,consts:[[1,"forDesktopHeader_login"],[1,"forResponsiveHeader_login"],[1,"innerMain_wraper"],[1,"wrapper"],[1,"col-sm-3","float-left","portfolio_left"],[1,"col-sm-9","float-left","portfolio_right"],[1,"portfolio_right_sub"],[1,"portfolio_form_fill"],[1,"title_sec"],["src","assets/images/uploadPhoto_white.png","alt",""],[1,"id_verify_main"],[1,"form-group","row"],[1,"col-sm-9"],[1,"field_outer_label"],[4,"ngIf"],[1,"col-sm-3"],[1,"form-group","row","mb-0","galleryPhoto"],["class","uploadNotice",4,"ngIf"],["class","col-sm-3",4,"ngFor","ngForOf"],[1,"footer_bottomSec"],["routerLink","/profile_list",1,"profList_link_bot"],["aria-hidden","true",1,"fa","fa-users"],["routerLink","/wishlist",1,"wish_link_bot"],["aria-hidden","true",1,"fa","fa-heart"],["routerLink","/user_dashboard",1,"dash_link_bot"],["aria-hidden","true",1,"fa","fa-tachometer"],[1,"uploadImgGal",3,"disabled","click"],[1,"fa","fa-upload"],["type","file",2,"display","none",3,"change"],["attachments","","fileInput",""],[1,"uploadImgGal",3,"disabled"],[1,"uploadNotice"],[1,"galaryImg"],["alt","","srcset","",3,"src"],["mat-icon-button","",1,"removeImg",3,"click"],["aria-hidden","true",1,"fa","fa-times-circle"]],template:function(s,i){1&s&&(t.TgZ(0,"div",0),t._UZ(1,"app-after_login_header_Global"),t.qZA(),t.TgZ(2,"div",1),t._UZ(3,"app-headerResponsive"),t.qZA(),t.TgZ(4,"div",2)(5,"div",3)(6,"div",4),t._UZ(7,"app-leftBar_after_login"),t.qZA(),t.TgZ(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"h2"),t._UZ(13,"img",9),t._uU(14,"Add Maximum 5 Photos. Each Images Size Max 5 mb. Accepted Format jpg, jpeg, png "),t.qZA()(),t.TgZ(15,"div",10)(16,"div",11)(17,"div",12)(18,"div",13),t.YNc(19,Z,7,1,"ng-container",14),t.YNc(20,D,4,1,"ng-container",14),t.qZA()(),t.TgZ(21,"div",15),t._UZ(22,"div",13),t.qZA()(),t.TgZ(23,"div",16),t.YNc(24,I,2,0,"div",17),t.YNc(25,T,5,1,"div",18),t.qZA(),t.YNc(26,F,2,0,"p",14),t.qZA()()()()()(),t.TgZ(27,"div",19)(28,"a",20),t._UZ(29,"i",21),t.TgZ(30,"span"),t._uU(31,"Matches"),t.qZA()(),t.TgZ(32,"a",22),t._UZ(33,"i",23),t.TgZ(34,"span"),t._uU(35,"My Wishlist"),t.qZA()(),t.TgZ(36,"a",24),t._UZ(37,"i",25),t.TgZ(38,"span"),t._uU(39,"Dashboard"),t.qZA()()()),2&s&&(t.xp6(19),t.Q6J("ngIf",i.listOfFiles.length<5),t.xp6(1),t.Q6J("ngIf",i.listOfFiles.length>=5),t.xp6(4),t.Q6J("ngIf",i.fileList.length>5||i.listOfFiles.length>5),t.xp6(1),t.Q6J("ngForOf",i.listOfFiles),t.xp6(1),t.Q6J("ngIf",i.isLoading))},dependencies:[h.sg,h.O5,b.q,U.b,p.rH,y.A]})}return l})();var L=o(4857),d=o(4006),O=o(4385),A=o(9549),C=o(4144),x=o(1948),G=o(6709),P=o(7392),M=o(8398),N=o(8874),R=o(9873);const B=[{path:"",component:S}];let w=(()=>{class l{static#t=this.\u0275fac=function(s){return new(s||l)};static#e=this.\u0275mod=t.oAB({type:l});static#i=this.\u0275inj=t.cJS({imports:[h.ez,L.G,N.I,p.Bz.forChild(B),d.u5,R.W,d.UX,C.c,O.LD,A.lN,x.Fk,G.p9,P.Ps,M.QG]})}return l})()}}]);
import{m as a}from"./alpinejs-830b7ebb-v4.1.3.js";import{t as f}from"./wysiwyg-7a946b6a-v4.1.3.js";import{E as g}from"./Errors-2af62d8a-v4.1.3.js";import{n as p}from"./NProgress-195f2ba2-v4.1.3.js";import"./tinymce-de5c0b61-v4.1.3.js";import"./blueimp-md5-133dffcb-v4.1.3.js";import"./vue-54e7c309-v4.1.3.js";import"./nprogress-c3d60e2c-v4.1.3.js";window.Alpine=a;let s,m;a.data("postCreate",()=>({formSubmitting:!1,formSubmissionType:null,form:{meta:{},featured_image:{},publish_status:"published",blog_category_id:""},errors:new g,init(){p(),s=this.initTinyMce(),m=this.initTagsSelectize()},initTinyMce(){return f({setup:e=>{e.on("change",()=>{e.save(),e.getElement().dispatchEvent(new Event("input")),this.errors.clear("description")})}})},initTagsSelectize(){return $(".selectize").selectize({plugins:["remove_button"],onChange:e=>{this.form.tags=e}})},focusDescriptionField(){s.get("description").focus()},addFeaturedImage(){new MediaPicker({type:"image"}).on("select",({id:i,path:t})=>{this.form.featured_image={id:+i,path:t}})},removeFeaturedImage(){this.form.featured_image={}},focusFirstErrorField(e){const i=Object.keys(this.errors.errors),t=[...e].find(o=>i.includes(o.name));if(t.classList.contains("wysiwyg")){s.get(t.getAttribute("name")).focus();return}t.focus()},resetForm(){this.errors.reset(),this.form={meta:{},featured_image:{},publish_status:"published",blog_category_id:""},s.get("description").setContent(""),m[0].selectize.clear()},handleSubmit({submissionType:e}){this.formSubmitting=!0,this.formSubmissionType=e;const{title:i,description:t,meta:o,featured_image:n,publish_status:u,blog_category_id:l,tags:c}=this.form;$.ajax({type:"POST",url:route("admin.blog_posts.store",{...(e==="save_and_edit"||e==="save_and_exit")&&{exit_flash:!0}}),data:{title:i,description:t,meta:o,publish_status:u,blog_category_id:l,tags:c,files:{featured_image:n.id?[n.id]:[]}},dataType:"json",success:({message:r,blog_post_id:d})=>{if(this.formSubmissionType==="save_and_edit"){location.href=route("admin.blog_posts.edit",d);return}if(this.formSubmissionType==="save_and_exit"){location.href=route("admin.blog_posts.index");return}success(r),this.resetForm(),this.$refs.form.elements[0].focus()}}).catch(({responseJSON:r})=>{this.errors.record(r.errors),this.focusFirstErrorField(this.$refs.form.elements),error(r.message)}).always(()=>{this.formSubmitting=!1,this.formSubmissionType=null})}}));a.start();

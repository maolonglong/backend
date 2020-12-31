(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44574649"],{"087a":function(e,t,a){},"53d4":function(e,t,a){"use strict";a("087a")},"70ad":function(e,t,a){"use strict";a.d(t,"d",(function(){return l})),a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return r})),a.d(t,"e",(function(){return s})),a.d(t,"f",(function(){return u}));var i=a("b775");function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(i["a"])({url:"/building",method:"GET",params:e})}function o(){return Object(i["a"])({url:"/building",method:"GET",params:{all:!0}})}function n(e){var t=e.id;return Object(i["a"])({url:"/building/detail",method:"GET",params:{id:t}})}function r(e){return Object(i["a"])({url:"/building",method:"POST",data:e})}function s(e){var t=e.id;return Object(i["a"])({url:"/building",method:"DELETE",data:{id:t}})}function u(e){return Object(i["a"])({url:"/building",method:"PUT",data:e})}},cde9:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"building"}},[a("Crud",{attrs:{options:e.crudOptions}})],1)},l=[],o=a("e7f1"),n=a("70ad"),r={name:"Building",components:{Crud:o["a"]},data:function(){return{crudOptions:{getList:n["d"],columns:[{prop:"id",label:"#",pk:!0},{prop:"aliasName",label:"楼宇"},{prop:"department",label:"单位"},{prop:"fullName",label:"命名"}],add:n["a"],remove:n["e"],update:n["f"],enableDetails:!0,getDetails:n["c"],detailsColumns:[{prop:"currentFreeClassrooms",label:"空闲教室数"},{prop:"totalNumberOfClassrooms",label:"教室总数"},{prop:"freeCapacity",label:"剩余容量（人）"},{prop:"totalCapacity",label:"总容量（人）"}]}}}},s=r,u=a("2877"),d=Object(u["a"])(s,i,l,!1,null,"014356a7",null);t["default"]=d.exports},e7f1:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"crud"},[a("div",{attrs:{id:"crud-header"}},[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.handleAdd}},[e._v(" 添加 ")]),a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"输入关键字搜索","prefix-icon":"el-icon-search"},on:{change:function(t){return e.reload()}},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}})],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"",size:"small",stripe:""}},[e._l(e.options.columns,(function(t,i){return["boolean"===t.type?a("el-table-column",{key:i,attrs:{label:t.label},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:t.row.status?"success":"danger"}},[e._v(" "+e._s(t.row.status?"YES":"NO")+" ")])]}}],null,!0)}):a("el-table-column",{key:i,attrs:{label:t.label,prop:t.prop}})]})),a("el-table-column",{attrs:{fixed:"right",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.options.enableDetails?a("el-button",{attrs:{size:"small"},on:{click:function(a){return e.handleDetails(t.row)}}},[e._v(" 详细 ")]):e._e(),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(a){return e.handleEdit(t.row)}}},[e._v(" 编辑 ")]),a("el-popconfirm",{staticStyle:{"margin-left":"9px"},attrs:{title:"确定删除吗？"},on:{confirm:function(a){return e.handleDelete(t.row)}}},[a("el-button",{attrs:{slot:"reference",size:"small",type:"danger"},slot:"reference"},[e._v("删除")])],1)]}}])})],2),a("div",{staticClass:"pagination-wrapper"},[a("el-pagination",{staticStyle:{"margin-top":"10px"},attrs:{"page-size":e.pageSize,"current-page":e.pageNum,total:e.total,background:"",layout:"sizes, prev, pager, next, jumper, ->, total"},on:{"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"update:currentPage":function(t){e.pageNum=t},"update:current-page":function(t){e.pageNum=t},"current-change":e.reload,"size-change":function(t){return e.reload()}}})],1),a("el-dialog",{attrs:{title:e.dialogTitle,visible:e.addDialogVisible,width:"30%"},on:{"update:visible":function(t){e.addDialogVisible=t}}},[a("el-form",{attrs:{model:e.form}},[e._l(e.options.columns,(function(t,i){return[t.pk||"number"!==t.type?t.pk||"boolean"!==t.type?!t.pk&&t.ref?a("el-form-item",{key:i,attrs:{label:t.label}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form[t.ref.key],callback:function(a){e.$set(e.form,t.ref.key,a)},expression:"form[col.ref.key]"}},e._l(t.ref.select,(function(e,i){return a("el-option",{key:i,attrs:{label:e[t.ref.label],value:e.id}})})),1)],1):t.pk?e._e():a("el-form-item",{key:i,attrs:{label:t.label}},[a("el-input",{model:{value:e.form[t.prop],callback:function(a){e.$set(e.form,t.prop,a)},expression:"form[col.prop]"}})],1):a("el-form-item",{key:i,attrs:{label:t.label}},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.form[t.prop],callback:function(a){e.$set(e.form,t.prop,a)},expression:"form[col.prop]"}})],1):a("el-form-item",{key:i,attrs:{label:t.label}},[a("el-input",{attrs:{type:"number"},model:{value:e.form[t.prop],callback:function(a){e.$set(e.form,t.prop,e._n(a))},expression:"form[col.prop]"}})],1)]}))],2),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.addDialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.commit}},[e._v("确 定")])],1)],1),e.options.enableDetails?a("el-dialog",{attrs:{visible:e.detailsDialogVisible,title:"详细信息",width:"30%"},on:{"update:visible":function(t){e.detailsDialogVisible=t}}},[a("div",e._l(e.options.detailsColumns,(function(t,i){return a("p",{key:i},[a("strong",[e._v(e._s(t.label)+"：")]),e._v(e._s(e.detailsData[t.prop])+" ")])})),0),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.detailsDialogVisible=!1}}},[e._v("关 闭")])],1)]):e._e()],1)},l=[],o=a("5530"),n={name:"Crud",props:["options"],data:function(){return{dialogTitle:"",loading:!1,detailsDialogVisible:!1,addDialogVisible:!1,detailsData:{},tableData:[],form:{},total:0,pageNum:1,pageSize:10,keyword:""}},methods:{handleEdit:function(e){var t=Object(o["a"])({},e);t.status=1===t.status,this.form=t,this.dialogTitle="编辑",this.addDialogVisible=!0},handleDelete:function(e){var t=this;this.options.remove({id:e.id}).then((function(e){var a=e.message;t.$message.success(a),t.reload()}))},handleDetails:function(e){var t=this;this.options.getDetails({id:e.id}).then((function(e){t.detailsData=e.data,t.detailsDialogVisible=!0}))},handleAdd:function(){this.form={},this.dialogTitle="添加",this.addDialogVisible=!0},commit:function(){var e=this;this.form.id?this.options.update(this.form).then((function(t){var a=t.message;e.$message.success(a),e.reload(),e.addDialogVisible=!1})):this.options.add(this.form).then((function(t){var a=t.message;e.$message.success(a),e.reload(),e.addDialogVisible=!1}))},reload:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.pageNum=t,this.loading=!0,this.options.getList({pageNum:t,pageSize:this.pageSize,keyword:this.keyword}).then((function(t){e.loading=!1;var a=t.data,i=a.list,l=a.total;e.tableData=i,e.total=l}))}},mounted:function(){this.reload()}},r=n,s=(a("53d4"),a("2877")),u=Object(s["a"])(r,i,l,!1,null,"3457e129",null);t["a"]=u.exports}}]);
//# sourceMappingURL=chunk-44574649.872296b3.js.map
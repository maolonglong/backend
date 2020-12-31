(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b8fe6f16"],{"087a":function(t,e,a){},"53d4":function(t,e,a){"use strict";a("087a")},"70ad":function(t,e,a){"use strict";a.d(e,"d",(function(){return i})),a.d(e,"b",(function(){return l})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return r})),a.d(e,"e",(function(){return s})),a.d(e,"f",(function(){return u}));var o=a("b775");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(o["a"])({url:"/building",method:"GET",params:t})}function l(){return Object(o["a"])({url:"/building",method:"GET",params:{all:!0}})}function n(t){var e=t.id;return Object(o["a"])({url:"/building/detail",method:"GET",params:{id:e}})}function r(t){return Object(o["a"])({url:"/building",method:"POST",data:t})}function s(t){var e=t.id;return Object(o["a"])({url:"/building",method:"DELETE",data:{id:e}})}function u(t){return Object(o["a"])({url:"/building",method:"PUT",data:t})}},"78aa":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"classroom"}},[a("Crud",{attrs:{options:t.crudOptions}})],1)},i=[],l=a("e7f1"),n=a("b775");function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["a"])({url:"/classroom",method:"GET",params:t})}function s(t){return Object(n["a"])({url:"/classroom",method:"POST",data:t})}function u(t){var e=t.id;return Object(n["a"])({url:"/classroom",method:"DELETE",data:{id:e}})}function c(t){return Object(n["a"])({url:"/classroom",method:"PUT",data:t})}var d=a("70ad"),p={name:"Classroom",components:{Crud:l["a"]},data:function(){return{crudOptions:{getList:r,add:s,remove:u,update:c,columns:[{prop:"id",label:"#",pk:!0},{prop:"name",label:"名称"},{prop:"capacity",label:"可容纳人数",type:"number"},{prop:"status",label:"空闲",type:"boolean"},{prop:"buildingName",label:"所属教学楼",ref:{select:[],key:"buildingId",label:"fullName"}}]}}},mounted:function(){var t=this;Object(d["b"])().then((function(e){t.crudOptions.columns[4].ref.select=e.data}))}},f=p,m=a("2877"),b=Object(m["a"])(f,o,i,!1,null,"a37fe1e8",null);e["default"]=b.exports},e7f1:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"crud"},[a("div",{attrs:{id:"crud-header"}},[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.handleAdd}},[t._v(" 添加 ")]),a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"输入关键字搜索","prefix-icon":"el-icon-search"},on:{change:function(e){return t.reload()}},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"",size:"small",stripe:""}},[t._l(t.options.columns,(function(e,o){return["boolean"===e.type?a("el-table-column",{key:o,attrs:{label:e.label},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{type:e.row.status?"success":"danger"}},[t._v(" "+t._s(e.row.status?"YES":"NO")+" ")])]}}],null,!0)}):a("el-table-column",{key:o,attrs:{label:e.label,prop:e.prop}})]})),a("el-table-column",{attrs:{fixed:"right",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.options.enableDetails?a("el-button",{attrs:{size:"small"},on:{click:function(a){return t.handleDetails(e.row)}}},[t._v(" 详细 ")]):t._e(),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(a){return t.handleEdit(e.row)}}},[t._v(" 编辑 ")]),a("el-popconfirm",{staticStyle:{"margin-left":"9px"},attrs:{title:"确定删除吗？"},on:{confirm:function(a){return t.handleDelete(e.row)}}},[a("el-button",{attrs:{slot:"reference",size:"small",type:"danger"},slot:"reference"},[t._v("删除")])],1)]}}])})],2),a("div",{staticClass:"pagination-wrapper"},[a("el-pagination",{staticStyle:{"margin-top":"10px"},attrs:{"page-size":t.pageSize,"current-page":t.pageNum,total:t.total,background:"",layout:"sizes, prev, pager, next, jumper, ->, total"},on:{"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"update:currentPage":function(e){t.pageNum=e},"update:current-page":function(e){t.pageNum=e},"current-change":t.reload,"size-change":function(e){return t.reload()}}})],1),a("el-dialog",{attrs:{title:t.dialogTitle,visible:t.addDialogVisible,width:"30%"},on:{"update:visible":function(e){t.addDialogVisible=e}}},[a("el-form",{attrs:{model:t.form}},[t._l(t.options.columns,(function(e,o){return[e.pk||"number"!==e.type?e.pk||"boolean"!==e.type?!e.pk&&e.ref?a("el-form-item",{key:o,attrs:{label:e.label}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form[e.ref.key],callback:function(a){t.$set(t.form,e.ref.key,a)},expression:"form[col.ref.key]"}},t._l(e.ref.select,(function(t,o){return a("el-option",{key:o,attrs:{label:t[e.ref.label],value:t.id}})})),1)],1):e.pk?t._e():a("el-form-item",{key:o,attrs:{label:e.label}},[a("el-input",{model:{value:t.form[e.prop],callback:function(a){t.$set(t.form,e.prop,a)},expression:"form[col.prop]"}})],1):a("el-form-item",{key:o,attrs:{label:e.label}},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.form[e.prop],callback:function(a){t.$set(t.form,e.prop,a)},expression:"form[col.prop]"}})],1):a("el-form-item",{key:o,attrs:{label:e.label}},[a("el-input",{attrs:{type:"number"},model:{value:t.form[e.prop],callback:function(a){t.$set(t.form,e.prop,t._n(a))},expression:"form[col.prop]"}})],1)]}))],2),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.addDialogVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.commit}},[t._v("确 定")])],1)],1),t.options.enableDetails?a("el-dialog",{attrs:{visible:t.detailsDialogVisible,title:"详细信息",width:"30%"},on:{"update:visible":function(e){t.detailsDialogVisible=e}}},[a("div",t._l(t.options.detailsColumns,(function(e,o){return a("p",{key:o},[a("strong",[t._v(t._s(e.label)+"：")]),t._v(t._s(t.detailsData[e.prop])+" ")])})),0),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.detailsDialogVisible=!1}}},[t._v("关 闭")])],1)]):t._e()],1)},i=[],l=a("5530"),n={name:"Crud",props:["options"],data:function(){return{dialogTitle:"",loading:!1,detailsDialogVisible:!1,addDialogVisible:!1,detailsData:{},tableData:[],form:{},total:0,pageNum:1,pageSize:10,keyword:""}},methods:{handleEdit:function(t){var e=Object(l["a"])({},t);e.status=1===e.status,this.form=e,this.dialogTitle="编辑",this.addDialogVisible=!0},handleDelete:function(t){var e=this;this.options.remove({id:t.id}).then((function(t){var a=t.message;e.$message.success(a),e.reload()}))},handleDetails:function(t){var e=this;this.options.getDetails({id:t.id}).then((function(t){e.detailsData=t.data,e.detailsDialogVisible=!0}))},handleAdd:function(){this.form={},this.dialogTitle="添加",this.addDialogVisible=!0},commit:function(){var t=this;this.form.id?this.options.update(this.form).then((function(e){var a=e.message;t.$message.success(a),t.reload(),t.addDialogVisible=!1})):this.options.add(this.form).then((function(e){var a=e.message;t.$message.success(a),t.reload(),t.addDialogVisible=!1}))},reload:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.pageNum=e,this.loading=!0,this.options.getList({pageNum:e,pageSize:this.pageSize,keyword:this.keyword}).then((function(e){t.loading=!1;var a=e.data,o=a.list,i=a.total;t.tableData=o,t.total=i}))}},mounted:function(){this.reload()}},r=n,s=(a("53d4"),a("2877")),u=Object(s["a"])(r,o,i,!1,null,"3457e129",null);e["a"]=u.exports}}]);
//# sourceMappingURL=chunk-b8fe6f16.41b323c3.js.map
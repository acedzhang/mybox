require.config({
  baseUrl:'/public/assets',
  paths:{
  jquery:'jquery/jquery',
  cookie:'jquery-cookie/jquery.cookie',
  template:'artTemplate/template-web',
   bootstrap : 'bootstrap/js/bootstrap.min',
   util:'../js/util',
   language : 'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
  common:'../js/common',
  login:'../js/login',
  teacherlist:'../js/teacher-list',
  teacheradd:'../js/teacher-add'

},
shim: {
    bootstrap:{
      deps:['jquery']
    }
}
});

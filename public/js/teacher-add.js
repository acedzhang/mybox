
define(['jquery','template','util'],function($,template,util){
    var tcId =util.qs('tc_id');
  
    if(tcId){
    <!-- 编辑操作 -->
    $.ajax({
    type:'get',
    url:'/api/teacher/edit',
    data:{tc_id:tcId},
    dataType:'json',
    success:function(data){
     <!-- console.log(data); -->
  data.result.operate='编辑讲师';
 var html =template('teacherTpl',data.result);
 $('#teacherInfo').html(html);
  <!-- 处理表单提交 -->
  submitForm('/api/teacher/update');
}
  });
  }else{

  var html =template('teacherTpl',{operate:'添加讲师'});
 $('#teacherInfo').html(html);
 submitForm('/api/teacher/add');
}

<!-- 实现表单提交 -->
function submitForm(url){

  $('#teacherBtn').click(function(){
  console.log($('#teacherForm').serialize());
  <!-- location.href = '/teacher/list'; -->
  $.ajax({
  type:'post',
  url:url,
  data:$('#teacherForm').serialize(), 
  dataType:'json',
  success : function(data){
            if(data.code == 200){
              location.href = '/teacher/list';
            }
          }
})
})
}
});
 

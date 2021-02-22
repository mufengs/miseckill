window.onload=function(){
  /*mifanst_header input hover */
  $('.search').mouseenter(
    function(){
      $(this).addClass('showhover')
      $('.submit_btn').addClass('showhover')
    })
  $('.search').mouseleave(
    function () {
      $(this).removeClass('showhover')
      $('.submit_btn').removeClass('showhover')
    },
  )
  $('.search').focusin(function(){
  //  $(this).unbind('mouseenter').unbind('mouseleave')  
    $(this).addClass('showfocus')
    $('.submit_btn').addClass('showfocus')
    $('#slidedown').removeClass('shutoff')
  })
  $('.search').focusout(function () {
    $(this).removeClass('showfocus')
    $('.submit_btn').removeClass('showfocus')
    $('#slidedown').addClass('shutoff')
  }) 
  /*slip the menu and show the secondLists, using javascript native*/
 /* let firstList=document.querySelectorAll('.firstList')
  let childList = document.querySelectorAll('#header_childLists>div')
  for(let i=0; i<firstList.length; i++){
    firstList[i].onmouseover = function () {
      for (let j = 0; j <childList.length; j++){
        childList[j].className = 'childLists childLists_none'
      }
      childList[i].className ='childLists'
    }
    firstList[i].onmouseout= function () {
     childList[i].className = 'childLists childLists_none'
    }
  }*/
  /*slip the menu and show the secondLists, using javascript native , using jQuery*/
  $('.firstList').focusin(
    function(){
      $('#header_childLists>div').each(function(){
        $(this).addClass('childLists_none')
      })
      let index=$(this).index()-1
     // console.log(index)
      $('#header_childLists>div')[index].className = 'childLists '
    }
  )
  $('.firstList').focusout(
    function () {
      let index = $(this).index() - 1
      // console.log(index)
      $('#header_childLists>div')[index].className = 'childLists childLists_none'
    }
  )
 /*fixed the seckillTab , using javascript native
  window.onscroll=function(){
    let topInstance = document.documentElement.scrollTop
    let seckillTab = document.getElementById('seckillTab')
    if (topInstance >= 260) {
      seckillTab.style.position='fixed'
      seckillTab.style.top = '0'
      seckillTab.style.zIndex = '99'
      seckillTab.style.left='19px'
    }else{
      seckillTab.style.position='static'
    }
  }
  */
  /*fixed the seckillTab , using jQuery and css */
   $(window).scroll(function(){
     let topIns=$(this).scrollTop()
     if(topIns>=260){
       $('#seckillTab').addClass('sticky')
     }else{
       $('#seckillTab').removeClass('sticky')
     }
   })
  /*seckills_tabs active*/
  let tabsLists = document.getElementById('tabsLists')
  let tabItem=tabsLists.getElementsByTagName('li')
  let seckilltab = document.getElementById('seckills')
  let tabActive=seckilltab.getElementsByTagName('ul')
  for( let i=0; i<tabItem.length; i++){
    tabItem[i].onclick=function(){
      for (let j = 0; j < tabItem.length; j++) {
        tabItem[j].className = ''
        tabActive[j].className='clearfix'
      }
      this.className='showred_item'
      tabActive[i].className ='clearfix seckill_active'
    }
  }
}
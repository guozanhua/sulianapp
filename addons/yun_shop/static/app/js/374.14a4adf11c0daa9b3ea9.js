webpackJsonp([374],{"13uZ":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("Pexp"),o=(i("Tg7E"),i("dzCT")),r={data:function(){return{toi:this.fun.getKeyByI(),topStatus:"",bottomStatus:"",getAllLoaded:!1,selected:0,last_status:0,loading:!1,allLoaded:!1,goload:!1,isLoadMore:!0,action:"",orderList:[],waitPayList:[],waitSendList:[],waitReceiveList:[],waitCompleteList:[],waitRefund:[],alreadyComplete:[],order_ids:[],checkList:[],isMultiplePay:!1,page:1,total_page:0,detailUrl:"orderdetail",orderType:"onlineCar"}},methods:{swichTabTItem:function(){this.initData(),this.getOrderList(this.selected)},handleTopChange:function(t){this.topStatus=t},handleBottomChange:function(t){this.allLoaded=!1,this.bottomStatus=t},initData:function(){this.page=1,this.goload=!0,this.total_page=0,this.loading=!0,this.allLoaded=!1,this.isLoadMore=!0},loadTop:function(){this.initData(),this.getOrderList(this.selected),this.$refs.loadmore.onTopLoaded()},loadBottom:function(){this.isLoadMore?(console.log("加载更多"),this.getMoreData(this.page,this.selected),this.$refs.loadmore.onBottomLoaded()):console.log("没有更多数据")},getOrderList:function(t){this.orderType="onlineCar",this.detailUrl="orderdetail",this.action=0==t?"plugin.net-car.frontend.order-list.index":1==t?"plugin.net-car.frontend.order-list.wait-pay":2==t?"plugin.net-car.frontend.order-list.loan-review":3==t?"plugin.net-car.frontend.order-list.loan":4==t?"plugin.net-car.frontend.order-list.pick-car":5==t?"plugin.net-car.frontend.order-list.license-number":"plugin.net-car.frontend.order-list.completed",this.getNetData(this.action,t)},toDetail:function(t){console.log(t),this.$router.push(this.fun.getUrl("orderdetail",{order_id:t.id,isDetail:!0,orderType:"onlineCar"}))},cofirmOrderAction:function(t){0==this.selected?this.getOrderList(this.selected):"pay"==t?this.getOrderList(this.selected):this.waitReceiveList.splice(this.waitReceiveList.indexOf(t),1)},toMultiplePay:function(){this.$router.push(this.fun.getUrl("orderpay",{status:2,order_ids:encodeURI(this.order_ids)})),this.$refs.mychild.setCheckList(),this.isMultiplePay=!1},multiplePayAction:function(t){this.order_ids=t,t.length>0?this.isMultiplePay=!0:this.isMultiplePay=!1},getNetData:function(t,e){var i=this;$http.get(t,{page:1},"正在获取订单...").then(function(t){if(1==t.result){console.log(e);var a=t.data;i.total_page=a.total,0==e?i.orderList=a.data:1==e?i.waitPayList=a.data:2==e?i.waitSendList=a.data:3==e?i.waitReceiveList=a.data:4==e?i.waitCompleteList=a.data:5==e?i.waitRefund=a.data:i.alreadyComplete=a.data}}).catch(function(t){console.log(t)})},getMoreData:function(t,e){var i=this;if(this.page!=this.total_page)return this.page>=this.total_page?(i.loading=!0,void(i.allLoaded=!0)):(this.page=this.page+1,void $http.get(this.action,{page:this.page,i:this.fun.getKeyByI(),type:this.fun.getTyep()},"正在获取更多订单...").then(function(t){if(1!=t.result)return i.page=i.page-1,i.loading=!0,i.allLoaded=!0,void(i.isLoadMore=!1);var a=t.data;i.loading=!1,i.allLoaded=!1,0==e?i.orderList=i.orderList.concat(a.data):1==e?i.waitPayList=i.waitPayList.concat(a.data):2==e?i.waitSendList=i.waitSendList.concat(a.data):3==e?i.waitReceiveList=i.waitReceiveList.concat(a.data):4==e?i.waitCompleteList=i.waitCompleteList.concat(a.data):4==e?i.waitRefund=i.waitRefund.concat(a.data):i.alreadyComplete=i.alreadyComplete.concat(a.data)},function(t){}))}},computed:{},created:function(){this.last_status=this.selected},mounted:function(){this.toi=this.fun.getKeyByI()},activated:function(){console.log("opp+++++=====",this.$route.params),this.toi=this.fun.getKeyByI(),console.log("ccccc::",this.$route.params),this.orderType="onlineCar",this.detailUrl="orderdetail",this.selected=this.$route.params.status,this.initData(),this.getOrderList(this.selected)},components:{cTitle:a.a,cOrderList:o.a}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"payment"}},[i("c-title",{attrs:{hide:!1,text:"网约车订单"}}),t._v(" "),i("div",{staticStyle:{height:"40px"}}),t._v(" "),i("div",{staticStyle:{height:"2.75rem"}}),t._v(" "),i("mt-navbar",{staticStyle:{"z-index":"98",height:"2.75rem","line-height":"2.75rem"},attrs:{fixed:""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[i("mt-tab-item",{attrs:{id:"0"},nativeOn:{click:function(e){return t.swichTabTItem(e)}}},[t._v("全部")]),t._v(" "),i("mt-tab-item",{attrs:{id:"1"},nativeOn:{click:function(e){return t.swichTabTItem(e)}}},[t._v(" 待支付")]),t._v(" "),i("mt-tab-item",{attrs:{id:"2"},nativeOn:{click:function(e){return t.swichTabTItem(e)}}},[t._v("待审核")]),t._v(" "),i("mt-tab-item",{attrs:{id:"3"},nativeOn:{click:function(e){return t.swichTabTItem(e)}}},[t._v(" 贷款中")]),t._v(" "),i("mt-tab-item",{attrs:{id:"4"},nativeOn:{click:function(e){return t.swichTabTItem(e)}}},[t._v("待提车")]),t._v(" "),i("mt-tab-item",{attrs:{id:"5"},nativeOn:{click:function(e){return t.swichTabTItem(e)}}},[t._v("待审牌")]),t._v(" "),i("mt-tab-item",{attrs:{id:"6"},nativeOn:{click:function(e){return t.swichTabTItem(e)}}},[t._v(" 已完成")])],1),t._v(" "),t.goload?i("mt-loadmore",{ref:"loadmore",attrs:{"top-method":t.loadTop,topDistance:5,"bottom-method":t.loadBottom,"bottom-all-loaded":t.allLoaded,bottomPullText:"",bottomDropText:"上拉加载...",bottomLoadingText:"",autoFill:!0,id:"olis"}},[i("mt-tab-container",{model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[i("mt-tab-container-item",{attrs:{id:"0"}},[i("cOrderList",{staticClass:"osll",attrs:{datasource:t.orderList,orderType:t.orderType,detailUrl:t.detailUrl,status:0},on:{ConfrimOrderNotification:t.cofirmOrderAction,ToDetailNotification:t.toDetail}})],1),t._v(" "),i("mt-tab-container-item",{attrs:{id:"1"}},[i("cOrderList",{ref:"mychild",staticClass:"osll",attrs:{datasource:t.waitPayList,orderType:t.orderType,detailUrl:t.detailUrl,status:1},on:{ConfrimOrderNotification:t.cofirmOrderAction,ToDetailNotification:t.toDetail,MultiplePayNotification:t.multiplePayAction}})],1),t._v(" "),i("mt-tab-container-item",{attrs:{id:"2"}},[i("cOrderList",{staticClass:"osll",attrs:{datasource:t.waitSendList,orderType:t.orderType,detailUrl:t.detailUrl,status:2},on:{ConfrimOrderNotification:t.cofirmOrderAction,ToDetailNotification:t.toDetail}})],1),t._v(" "),i("mt-tab-container-item",{attrs:{id:"3"}},[i("cOrderList",{staticClass:"osll",attrs:{datasource:t.waitReceiveList,orderType:t.orderType,detailUrl:t.detailUrl,status:3},on:{ConfrimOrderNotification:t.cofirmOrderAction,ToDetailNotification:t.toDetail}})],1),t._v(" "),i("mt-tab-container-item",{attrs:{id:"4"}},[i("cOrderList",{staticClass:"osll",attrs:{datasource:t.waitCompleteList,orderType:t.orderType,detailUrl:t.detailUrl,status:4},on:{ConfrimOrderNotification:t.cofirmOrderAction,ToDetailNotification:t.toDetail}})],1),t._v(" "),i("mt-tab-container-item",{attrs:{id:"5"}},[i("cOrderList",{staticClass:"osll",attrs:{datasource:t.waitRefund,orderType:t.orderType,detailUrl:t.detailUrl,status:5},on:{ConfrimOrderNotification:t.cofirmOrderAction,ToDetailNotification:t.toDetail}})],1),t._v(" "),i("mt-tab-container-item",{attrs:{id:"6"}},[i("cOrderList",{staticClass:"osll",attrs:{datasource:t.alreadyComplete,orderType:t.orderType,detailUrl:t.detailUrl,status:6},on:{ConfrimOrderNotification:t.cofirmOrderAction,ToDetailNotification:t.toDetail}})],1)],1)],1):t._e(),t._v(" "),t.isMultiplePay?i("div",{staticClass:"contes"},[i("button",{on:{click:t.toMultiplePay}},[t._v("合并支付")])]):t._e()],1)},staticRenderFns:[]};var s=i("VU/8")(r,n,!1,function(t){i("2NjN")},"data-v-5e52c9ea",null);e.default=s.exports},"2NjN":function(t,e,i){var a=i("gVwe");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("rjj0")("593318e6",a,!0,{})},gVwe:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"\n.osll[data-v-5e52c9ea] {\n  min-height: 100vh;\n}\n.contes[data-v-5e52c9ea] {\n  z-index: 98;\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 2.8125rem;\n  background: #fff;\n  line-height: 2.8125rem;\n  border-top: #e2e2e2 solid 0.0625rem;\n  text-align: right;\n}\n.contes button[data-v-5e52c9ea] {\n    border: solid 0.0625rem #f15353;\n    background: #f15353;\n    border-radius: 0.1875rem;\n    margin-right: 0.875rem;\n    color: #fff;\n    padding: 0.25rem 0.625rem;\n}\n.loadNomore img[data-v-5e52c9ea] {\n  width: 20%;\n}\n#payment .mint-navbar.is-fixed[data-v-5e52c9ea] {\n  top: 40px;\n}\n",""])}});
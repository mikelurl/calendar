(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{jcJX:function(t,n,e){"use strict";e.r(n),e.d(n,"AccountModule",(function(){return p}));var o=e("ofXK"),r=e("tyNb"),c=e("fXoL"),s=e("qXBG"),u=e("3WFG"),a=e("/t3+"),b=e("bTqV");const l=[{path:"",component:(()=>{class t{constructor(t,n,e){this._authS=t,this._routerS=n,this._calS=e}ngOnInit(){}logout(){this._authS.logout(),this._routerS.navigate(["start"])}deleteAllEvents(){this._calS.deleteAllEvents()}}return t.\u0275fac=function(n){return new(n||t)(c.Mb(s.a),c.Mb(r.b),c.Mb(u.a))},t.\u0275cmp=c.Gb({type:t,selectors:[["app-me"]],decls:9,vars:0,consts:[["color","primary"],[1,"content"],["mat-stroked-button","",3,"click"]],template:function(t,n){1&t&&(c.Rb(0,"mat-toolbar",0),c.rc(1," Account\n"),c.Qb(),c.Rb(2,"div",1),c.Rb(3,"button",2),c.Zb("click",(function(){return n.logout()})),c.rc(4,"Logout"),c.Qb(),c.Nb(5,"br"),c.Nb(6,"br"),c.Rb(7,"button",2),c.Zb("click",(function(){return n.deleteAllEvents()})),c.rc(8,"Delete all events"),c.Qb(),c.Qb())},directives:[a.a,b.a],styles:[".content[_ngcontent-%COMP%]{padding:10px}"]}),t})(),pathMatch:"full"}];let i=(()=>{class t{}return t.\u0275mod=c.Kb({type:t}),t.\u0275inj=c.Jb({factory:function(n){return new(n||t)},imports:[[r.e.forChild(l)],r.e]}),t})(),p=(()=>{class t{}return t.\u0275mod=c.Kb({type:t}),t.\u0275inj=c.Jb({factory:function(n){return new(n||t)},providers:[s.a,u.a],imports:[[o.b,a.b,b.b,i]]}),t})()}}]);
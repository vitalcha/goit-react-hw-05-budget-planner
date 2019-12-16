(this["webpackJsonpgoit-react-hw-05-budget-planner"]=this["webpackJsonpgoit-react-hw-05-budget-planner"]||[]).push([[0],{27:function(e,n,t){e.exports=t(47)},46:function(e,n,t){},47:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(6),o=t.n(u),l=t(3),i=t(8),c={BUDGET_ADD:"BUDGET_ADD",BUDGET_NOTE_ADD:"BUDGET_NOTE_ADD",BUDGET_NOTE_DELETE:"BUDGET_NOTE_DELETE"},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case c.BUDGET_ADD:return n.payload.ourBudget;default:return e}},p=t(25),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;switch(n.type){case c.BUDGET_NOTE_ADD:return[n.payload.expenseObg].concat(Object(p.a)(e));case c.BUDGET_NOTE_DELETE:return e.filter((function(e){return e.id!==n.payload.id}));default:return e}},m=Object(i.b)({ourBudget:s,expensesArray:d}),b=Object(i.c)(m,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),f=t(1),E=t(2),g=t(10),v=t(11),x=t(13),h=t(12),y=t(14);function O(){var e=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 16px;\n  width: 100%;\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]);return O=function(){return e},e}var D=E.a.form(O()),_=function(e){var n=e.onSubmit,t=void 0===n?function(){return null}:n,a=e.children;return r.a.createElement(D,{onSubmit:t},a)};function j(){var e=Object(f.a)(["\n  display: inline-block;\n  font-size: 20px;\n  color: #171718;\n  cursor: pointer;\n  ","\n"]);return j=function(){return e},e}var T=E.a.label(j(),(function(e){return e.customStyles})),S=function(e){var n=e.children,t=e.customStyles;return r.a.createElement(T,{customStyles:t},n)};function w(){var e=Object(f.a)(["\n  color: #171718;\n  font: inherit;\n  font-size: 1.2rem;\n  padding: 16px;\n  border-radius: 4px;\n  border: 1px solid #bdbdbd;\n  width: 100%;\n  outline: 0;\n\n  &:focus {\n    border: 1px solid #2b32b2;\n  }\n"]);return w=function(){return e},e}var B=E.a.input(w()),C=function(e){var n=e.type,t=void 0===n?" text":n,a=e.value,u=void 0===a?"":a,o=e.onChange,l=void 0===o?function(){return null}:o,i=e.name,c=void 0===i?"":i;return r.a.createElement(B,{type:t,value:u,onChange:l,name:c})};function N(){var e=Object(f.a)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  background-color: #3f51b5;\n  border: 0;\n  outline: 0;\n  padding: 8px 24px;\n  border-radius: 4px;\n  cursor: pointer;\n  box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.05);\n  font: inherit;\n  text-transform: uppercase;\n  user-select: none;\n\n  transition: background-color 200ms ease-in-out;\n\n  &:hover {\n    box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.15);\n    background-color: #303f9f;\n  }\n"]);return N=function(){return e},e}var A=E.a.button(N()),U=function(e){var n=e.type,t=void 0===n?"button":n,a=e.label,u=void 0===a?"":a,o=e.onClick,l=void 0===o?function(){return null}:o;return r.a.createElement(A,{type:t,onClick:l},u)},k=function(e){function n(){var e,t;Object(g.a)(this,n);for(var a=arguments.length,r=new Array(a),u=0;u<a;u++)r[u]=arguments[u];return(t=Object(x.a)(this,(e=Object(h.a)(n)).call.apply(e,[this].concat(r)))).state={budgetValue:0},t.handleChange=function(e){t.setState({budgetValue:e.target.value})},t.handleSubmit=function(e){var n=t.props.onSave;e.preventDefault();var a=t.state.budgetValue;n(Number(a)),t.setState({budgetValue:0})},t}return Object(y.a)(n,e),Object(v.a)(n,[{key:"render",value:function(){var e=this.state.budgetValue;return r.a.createElement(_,{onSubmit:this.handleSubmit},r.a.createElement(S,{customStyles:"\n  margin-bottom: 16px;\n"},"Enter your total budget",r.a.createElement(C,{type:"number",value:e,onChange:this.handleChange})),r.a.createElement(U,{label:"Save",type:"submit"}))}}]),n}(a.Component),G=Object(l.b)(null,(function(e){return{onSave:function(n){return e(function(e){return{type:c.BUDGET_ADD,payload:{ourBudget:e}}}(n))}}}))(k),V=t(23),L=t(24),P=t.n(L),z=function(e){function n(){var e,t;Object(g.a)(this,n);for(var a=arguments.length,r=new Array(a),u=0;u<a;u++)r[u]=arguments[u];return(t=Object(x.a)(this,(e=Object(h.a)(n)).call.apply(e,[this].concat(r)))).state={name:"",amount:0},t.handleChange=function(e){t.setState(Object(V.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){var n=t.state,a=n.name,r=n.amount,u=t.props.addBudgetNote;e.preventDefault(),u({name:a,amount:Number(r),id:P.a.generate()}),t.setState({name:"",amount:0})},t}return Object(y.a)(n,e),Object(v.a)(n,[{key:"render",value:function(){var e=this.state,n=e.name,t=e.amount;return r.a.createElement(_,{onSubmit:this.handleSubmit},r.a.createElement(S,{customStyles:"\n  margin-bottom: 16px;\n"},"Enter expense name",r.a.createElement(C,{type:"text",name:"name",value:n,onChange:this.handleChange})),r.a.createElement(S,{customStyles:"\n  margin-bottom: 16px;\n"},"Enter expense amount",r.a.createElement(C,{type:"number",name:"amount",value:t,onChange:this.handleChange})),r.a.createElement(U,{label:"Add",type:"submit"}))}}]),n}(a.Component),R=Object(l.b)(null,(function(e){return{addBudgetNote:function(n){return e(function(e){return{type:c.BUDGET_NOTE_ADD,payload:{expenseObg:e}}}(n))}}}))(z);function X(){var e=Object(f.a)(["\n  border-collapse: collapse;\n  text-align: center;\n  width: 100%;\n\n  tr {\n    border-bottom: 1px solid #212121;\n  }\n\n  td,\n  th {\n    padding-top: 8px;\n    padding-bottom: 8px;\n  }\n"]);return X=function(){return e},e}var I=E.a.table(X()),F=Object(l.b)((function(e){return{expenses:e.expensesArray}}),(function(e){return{onRemove:function(n){return e({type:c.BUDGET_NOTE_DELETE,payload:{id:n}})}}}))((function(e){var n=e.expenses,t=e.onRemove;return r.a.createElement(I,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Expense name"),r.a.createElement("th",null,"Expense amount"),r.a.createElement("th",null))),r.a.createElement("tbody",null,n.map((function(e){var n=e.id,a=e.name,u=e.amount;return r.a.createElement("tr",{key:n},r.a.createElement("td",null,a),r.a.createElement("td",null,u),r.a.createElement("td",null,r.a.createElement(U,{label:"Delete",onClick:function(){return t(n)}})))}))))})),J=function(e){return e.ourBudget},$=function(e){return e.expensesArray.reduce((function(e,n){return e+n.amount}),0)},q=function(e){return J(e)-$(e)};function H(){var e=Object(f.a)(["\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 48px;\n"]);return H=function(){return e},e}function K(){var e=Object(f.a)(["\n  margin-top: 0;\n  margin-bottom: 8px;\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 24px;\n"]);return K=function(){return e},e}function M(){var e=Object(f.a)(["\n  text-align: center;\n  padding: 8px 24px;\n  color: ",";\n  user-select: none;\n"]);return M=function(){return e},e}var Q=E.a.div(M(),(function(e){return e.isPositive?"#388E3C":"#D32F2F"})),W=E.a.p(K()),Y=E.a.p(H()),Z=function(e){var n=e.label,t=e.value,a=e.isPositive;return r.a.createElement(Q,{isPositive:a},r.a.createElement(W,null,n),r.a.createElement(Y,null,t,"\xa0$"))};function ee(){var e=Object(f.a)(["\n  display: inline-flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return ee=function(){return e},e}var ne=E.a.section(ee()),te=Object(l.b)((function(e){return{budget:J(e),expenses:$(e),balance:q(e)}}),null)((function(e){var n=e.budget,t=e.expenses,a=e.balance;return r.a.createElement(ne,null,r.a.createElement(Z,{label:"Budget",value:n,isPositive:!0}),r.a.createElement(Z,{label:"Expenses",value:t,isPositive:a<=0}),r.a.createElement(Z,{label:"Balance",value:a,isPositive:a>=0}))}));function ae(){var e=Object(f.a)(["\n  display: grid;\n  grid-template-columns: 340px 1fr;\n  align-items: flex-start;\n  grid-gap: 24px;\n  max-width: 960px;\n  padding-left: 16px;\n  padding-right: 16px;\n  margin-left: auto;\n  margin-right: auto;\n"]);return ae=function(){return e},e}var re=E.a.div(ae()),ue=Object(l.b)((function(e){return{expenses:e.expensesArray}}),null)((function(e){var n=e.expenses;return r.a.createElement(re,null,r.a.createElement(G,null),r.a.createElement(te,null),r.a.createElement(R,null),n.length>0&&r.a.createElement(F,null))}));t(46);o.a.render(r.a.createElement(l.a,{store:b},r.a.createElement(ue,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.b4f9ee5b.chunk.js.map
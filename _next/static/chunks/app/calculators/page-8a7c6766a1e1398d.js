(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[504],{3014:(e,t,a)=>{Promise.resolve().then(a.bind(a,7715))},6486:(e,t,a)=>{"use strict";a.d(t,{cn:()=>l});var r=a(2596),s=a(9688);function l(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,s.QP)((0,r.$)(t))}},7715:(e,t,a)=>{"use strict";a.d(t,{default:()=>v});var r=a(5155),s=a(2115),l=a(9582),i=function(e){return e[e.Sedentary=1.2]="Sedentary",e[e.LightlyActive=1.375]="LightlyActive",e[e.ModeratelyActive=1.55]="ModeratelyActive",e[e.VeryActive=1.725]="VeryActive",e[e.ExtremelyActive=1.9]="ExtremelyActive",e}({}),d=function(e){return e.Underweight="Underweight",e.Normal="Normal",e.Overweight="Overweight",e.Obese="Obese",e.SeverelyObese="Severely Obese",e}({});let n=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"kg",a=arguments.length>2?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"cm",s="in"===r?.0254*a:a/100;return("lb"===t?.45359237*e:e)/(s*s)},c=e=>e<18.5?"Underweight":e>=18.5&&e<25?"Normal":e>=25&&e<30?"Overweight":e>=30&&e<35?"Obese":"Severely Obese",o=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"kg",a=arguments.length>2?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"cm",s=arguments.length>4?arguments[4]:void 0,l=arguments.length>5?arguments[5]:void 0,i=10*("lb"===t?.45359237*e:e)+6.25*("in"===r?2.54*a:a)-5*s;return"male"===l?i+5:i-161},m=(e,t)=>Math.round(e*t),x=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:30,r=Math.min(Math.max(t,10),50),s=Math.min(Math.max(a,10),50),l=Math.round(r/100*e/4),i=Math.round(s/100*e/9);return{protein:l,carbs:Math.round((100-r-s)/100*e/4),fat:i}},g=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cm",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"kg",r="in"===t?.0254*e:e/100,s=18.5*r*r,l=24.9*r*r;return"lb"===a&&(s*=2.20462,l*=2.20462),{min:Math.round(10*s)/10,max:Math.round(10*l)/10}},h=function(e,t,a){let r,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0,l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"cm",i=arguments.length>5?arguments[5]:void 0,d="cm"===l?.393701:1,n=e*d,c=t*d,o=a*d;if("male"===i)r=86.01*Math.log10(n-c)-70.041*Math.log10(o)+36.76;else{if(void 0===s)throw Error("Hip measurement is required for female body fat calculation");r=163.205*Math.log10(n+s*d-c)-97.684*Math.log10(o)-104.912}return Math.max(Math.min(r,50),2)};var u=a(6486);let y=e=>{let{className:t}=e,[a,l]=(0,s.useState)(70),[i,o]=(0,s.useState)(170),[m,x]=(0,s.useState)("kg"),[h,y]=(0,s.useState)("cm"),[b,j]=(0,s.useState)(null),[f,k]=(0,s.useState)(null),[p,v]=(0,s.useState)(null);return(0,s.useEffect)(()=>{if(a>0&&i>0){let e=n(a,m,i,h);j(e),k(c(e)),v(g(i,h,m))}else j(null),k(null),v(null)},[a,i,m,h]),(0,r.jsxs)("div",{className:(0,u.cn)("p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md",t),children:[(0,r.jsx)("h2",{className:"text-xl font-bold mb-4 text-gray-900 dark:text-white",children:"BMI Calculator"}),(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)("label",{htmlFor:"weight",className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Weight"}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("input",{id:"weight",type:"number",value:a,onChange:e=>{let t=parseFloat(e.target.value);l(isNaN(t)?0:t)},className:"flex-1 rounded-l-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-lime-500 focus:ring-lime-500",min:"1",step:"0.1",required:!0}),(0,r.jsx)("button",{type:"button",onClick:()=>{"kg"===m?(x("lb"),l(Math.round(22.0462*a)/10)):(x("kg"),l(Math.round(a/2.20462*10)/10))},className:"inline-flex items-center rounded-r-md border border-l-0 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-600 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-500 focus:outline-none",children:m})]})]}),(0,r.jsxs)("div",{className:"mb-6",children:[(0,r.jsx)("label",{htmlFor:"height",className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Height"}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("input",{id:"height",type:"number",value:i,onChange:e=>{let t=parseFloat(e.target.value);o(isNaN(t)?0:t)},className:"flex-1 rounded-l-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-lime-500 focus:ring-lime-500",min:"1",step:"0.1",required:!0}),(0,r.jsx)("button",{type:"button",onClick:()=>{"cm"===h?(y("in"),o(Math.round(.393701*i*10)/10)):(y("cm"),o(Math.round(i/.393701*10)/10))},className:"inline-flex items-center rounded-r-md border border-l-0 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-600 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-500 focus:outline-none",children:h})]})]}),null!==b&&(0,r.jsxs)("div",{className:"mt-6 space-y-4",children:[(0,r.jsx)("div",{className:"p-4 rounded-md bg-gray-50 dark:bg-gray-700",children:(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsx)("span",{className:"text-sm font-medium text-gray-500 dark:text-gray-400",children:"Your BMI"}),(0,r.jsx)("span",{className:"text-xl font-bold text-gray-900 dark:text-white",children:b.toFixed(1)})]})}),(0,r.jsx)("div",{className:"p-4 rounded-md bg-gray-50 dark:bg-gray-700",children:(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsx)("span",{className:"text-sm font-medium text-gray-500 dark:text-gray-400",children:"Category"}),(0,r.jsx)("span",{className:"px-2 py-1 rounded text-sm font-medium ".concat((e=>{if(!e)return"bg-gray-200 text-gray-700";switch(e){case d.Underweight:return"bg-blue-500 text-white";case d.Normal:return"bg-green-500 text-white";case d.Overweight:return"bg-yellow-500 text-white";case d.Obese:case d.SeverelyObese:return"bg-red-500 text-white";default:return"bg-gray-200 text-gray-700"}})(f)),children:f})]})}),p&&(0,r.jsx)("div",{className:"p-4 rounded-md bg-gray-50 dark:bg-gray-700",children:(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsx)("span",{className:"text-sm font-medium text-gray-500 dark:text-gray-400",children:"Ideal Weight Range"}),(0,r.jsxs)("span",{className:"text-sm font-bold text-gray-900 dark:text-white",children:[p.min.toFixed(1)," - ",p.max.toFixed(1)," ",m]})]})})]}),(0,r.jsxs)("div",{className:"mt-8",children:[(0,r.jsx)("h3",{className:"text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"BMI Categories"}),(0,r.jsxs)("div",{className:"flex h-4 overflow-hidden rounded-full",children:[(0,r.jsx)("div",{className:"flex-1 bg-blue-500",title:"Underweight"}),(0,r.jsx)("div",{className:"flex-1 bg-green-500",title:"Normal"}),(0,r.jsx)("div",{className:"flex-1 bg-yellow-500",title:"Overweight"}),(0,r.jsx)("div",{className:"flex-1 bg-red-500",title:"Obese"})]}),(0,r.jsxs)("div",{className:"flex justify-between text-xs mt-1 text-gray-600 dark:text-gray-400",children:[(0,r.jsx)("span",{children:"<18.5"}),(0,r.jsx)("span",{children:"18.5-24.9"}),(0,r.jsx)("span",{children:"25-29.9"}),(0,r.jsx)("span",{children:">30"})]})]}),(0,r.jsx)("p",{className:"mt-4 text-xs text-gray-500 dark:text-gray-400",children:"BMI is a measure of body fat based on height and weight. It can be used to indicate whether you are underweight, normal weight, overweight, or obese. However, BMI does not directly measure body fat and may not be accurate for athletes or older people."})]})},b=e=>{let{className:t}=e,[a,l]=(0,s.useState)(70),[d,n]=(0,s.useState)(170),[c,g]=(0,s.useState)(30),[h,y]=(0,s.useState)("male"),[b,j]=(0,s.useState)(i.ModeratelyActive),[f,k]=(0,s.useState)("maintain"),[p,v]=(0,s.useState)(!1),[N,w]=(0,s.useState)(30),[M,C]=(0,s.useState)(30),[F,S]=(0,s.useState)(null),[A,O]=(0,s.useState)(null),[E,B]=(0,s.useState)(null);(0,s.useEffect)(()=>{if(a>0&&d>0&&c>0){let e=o(a,"kg",d,"cm",c,h);S(e);let t=1;"lose"===f&&(t=.8),"gain"===f&&(t=1.15);let r=m(e,b)*t;O(r),B(x(r,p?N:30,p?M:30))}else S(null),O(null),B(null)},[a,d,c,h,b,f,p,N,M]);let I=e=>t=>{let a=parseFloat(t.target.value);e(isNaN(a)?0:a)},q=e=>{switch(e){case i.Sedentary:return"Sedentary (little or no exercise)";case i.LightlyActive:return"Lightly active (light exercise 1-3 days/week)";case i.ModeratelyActive:return"Moderately active (moderate exercise 3-5 days/week)";case i.VeryActive:return"Active (hard exercise 6-7 days/week)";case i.ExtremelyActive:return"Very active (very hard exercise & physical job)";default:return"Unknown"}};return(0,r.jsxs)("div",{className:(0,u.cn)("p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md",t),children:[(0,r.jsx)("h2",{className:"text-xl font-bold mb-4 text-gray-900 dark:text-white",children:"Calorie & Macro Calculator"}),(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"weight",className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Weight (kg)"}),(0,r.jsx)("input",{id:"weight",type:"number",value:a,onChange:I(l),className:"w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-lime-500 focus:ring-lime-500",min:"1",step:"0.1",required:!0})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"height",className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Height (cm)"}),(0,r.jsx)("input",{id:"height",type:"number",value:d,onChange:I(n),className:"w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-lime-500 focus:ring-lime-500",min:"1",step:"0.1",required:!0})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"age",className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Age"}),(0,r.jsx)("input",{id:"age",type:"number",value:c,onChange:I(g),className:"w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-lime-500 focus:ring-lime-500",min:"1",max:"120",required:!0})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Gender"}),(0,r.jsxs)("div",{className:"flex space-x-4",children:[(0,r.jsxs)("label",{className:"inline-flex items-center",children:[(0,r.jsx)("input",{type:"radio",className:"form-radio text-lime-600 focus:ring-lime-500",checked:"male"===h,onChange:()=>y("male")}),(0,r.jsx)("span",{className:"ml-2 text-gray-700 dark:text-gray-300",children:"Male"})]}),(0,r.jsxs)("label",{className:"inline-flex items-center",children:[(0,r.jsx)("input",{type:"radio",className:"form-radio text-lime-600 focus:ring-lime-500",checked:"female"===h,onChange:()=>y("female")}),(0,r.jsx)("span",{className:"ml-2 text-gray-700 dark:text-gray-300",children:"Female"})]})]})]})]}),(0,r.jsxs)("div",{className:"mb-6",children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Activity Level"}),(0,r.jsx)("select",{value:b,onChange:e=>j(parseInt(e.target.value,10)),className:"w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-lime-500 focus:ring-lime-500",children:Object.values(i).filter(e=>"number"==typeof e).map(e=>(0,r.jsx)("option",{value:e,children:q(e)},e))})]}),(0,r.jsxs)("div",{className:"mb-6",children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Goal"}),(0,r.jsxs)("div",{className:"grid grid-cols-3 gap-2",children:[(0,r.jsx)("button",{type:"button",onClick:()=>k("lose"),className:(0,u.cn)("py-2 px-4 rounded-md text-sm font-medium","lose"===f?"bg-lime-500 text-white":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"),children:"Lose Weight"}),(0,r.jsx)("button",{type:"button",onClick:()=>k("maintain"),className:(0,u.cn)("py-2 px-4 rounded-md text-sm font-medium","maintain"===f?"bg-lime-500 text-white":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"),children:"Maintain"}),(0,r.jsx)("button",{type:"button",onClick:()=>k("gain"),className:(0,u.cn)("py-2 px-4 rounded-md text-sm font-medium","gain"===f?"bg-lime-500 text-white":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"),children:"Gain Weight"})]})]}),(0,r.jsxs)("div",{className:"mb-6",children:[(0,r.jsxs)("div",{className:"flex items-center mb-2",children:[(0,r.jsx)("input",{id:"custom-macros",type:"checkbox",checked:p,onChange:()=>v(!p),className:"h-4 w-4 text-lime-600 focus:ring-lime-500 border-gray-300 rounded"}),(0,r.jsx)("label",{htmlFor:"custom-macros",className:"ml-2 block text-sm font-medium text-gray-700 dark:text-gray-300",children:"Customize Macronutrient Percentages"})]}),p&&(0,r.jsxs)("div",{className:"pl-6 grid grid-cols-1 md:grid-cols-2 gap-4 mt-2",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"protein",className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Protein (%)"}),(0,r.jsx)("input",{id:"protein",type:"number",value:N,onChange:e=>{w(Math.min(Math.max(parseInt(e.target.value)||0,0),100-M))},className:"w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-lime-500 focus:ring-lime-500",min:"10",max:"80",required:!0})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"fat",className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Fat (%)"}),(0,r.jsx)("input",{id:"fat",type:"number",value:M,onChange:e=>{C(Math.min(Math.max(parseInt(e.target.value)||0,0),100-N))},className:"w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-lime-500 focus:ring-lime-500",min:"10",max:"80",required:!0})]}),(0,r.jsxs)("div",{className:"md:col-span-2",children:[(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsxs)("span",{className:"text-sm font-medium text-gray-500 dark:text-gray-400",children:["Carbs: ",100-N-M,"%"]}),(0,r.jsxs)("span",{className:"text-xs text-gray-500 dark:text-gray-400",children:["Total: ",N+M+(100-N-M),"%"]})]}),(0,r.jsxs)("div",{className:"mt-1 flex h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700",children:[(0,r.jsx)("div",{className:"bg-lime-500",style:{width:"".concat(N,"%")},title:"Protein"}),(0,r.jsx)("div",{className:"bg-yellow-500",style:{width:"".concat(M,"%")},title:"Fat"}),(0,r.jsx)("div",{className:"bg-blue-500",style:{width:"".concat(100-N-M,"%")},title:"Carbs"})]})]})]})]}),null!==F&&null!==A&&null!==E&&(0,r.jsxs)("div",{className:"mt-6 space-y-6",children:[(0,r.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,r.jsxs)("div",{className:"p-4 rounded-md bg-gray-50 dark:bg-gray-700 text-center",children:[(0,r.jsx)("span",{className:"block text-sm font-medium text-gray-500 dark:text-gray-400",children:"BMR"}),(0,r.jsxs)("span",{className:"block text-xl font-bold text-gray-900 dark:text-white",children:[Math.round(F)," kcal"]}),(0,r.jsx)("span",{className:"text-xs text-gray-500 dark:text-gray-400",children:"Basal Metabolic Rate"})]}),(0,r.jsxs)("div",{className:"p-4 rounded-md bg-gray-50 dark:bg-gray-700 text-center",children:[(0,r.jsx)("span",{className:"block text-sm font-medium text-gray-500 dark:text-gray-400",children:"Daily Calories"}),(0,r.jsxs)("span",{className:"block text-xl font-bold text-gray-900 dark:text-white",children:[Math.round(A)," kcal"]}),(0,r.jsx)("span",{className:"text-xs text-gray-500 dark:text-gray-400",children:"lose"===f?"To lose weight":"gain"===f?"To gain weight":"To maintain weight"})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"Macronutrient Breakdown"}),(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsxs)("div",{className:"flex h-4 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700",children:[(0,r.jsx)("div",{className:"bg-lime-500",style:{width:"".concat(4*E.protein/A*100,"%")},title:"Protein"}),(0,r.jsx)("div",{className:"bg-yellow-500",style:{width:"".concat(9*E.fat/A*100,"%")},title:"Fat"}),(0,r.jsx)("div",{className:"bg-blue-500",style:{width:"".concat(4*E.carbs/A*100,"%")},title:"Carbs"})]}),(0,r.jsxs)("div",{className:"grid grid-cols-3 gap-4",children:[(0,r.jsxs)("div",{className:"p-3 rounded-md bg-gray-50 dark:bg-gray-700 text-center",children:[(0,r.jsx)("div",{className:"w-3 h-3 bg-lime-500 rounded-full mx-auto mb-1"}),(0,r.jsx)("span",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300",children:"Protein"}),(0,r.jsxs)("span",{className:"block text-lg font-bold text-gray-900 dark:text-white",children:[Math.round(E.protein),"g"]}),(0,r.jsxs)("span",{className:"text-xs text-gray-500 dark:text-gray-400",children:[Math.round(4*E.protein)," kcal"]})]}),(0,r.jsxs)("div",{className:"p-3 rounded-md bg-gray-50 dark:bg-gray-700 text-center",children:[(0,r.jsx)("div",{className:"w-3 h-3 bg-blue-500 rounded-full mx-auto mb-1"}),(0,r.jsx)("span",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300",children:"Carbs"}),(0,r.jsxs)("span",{className:"block text-lg font-bold text-gray-900 dark:text-white",children:[Math.round(E.carbs),"g"]}),(0,r.jsxs)("span",{className:"text-xs text-gray-500 dark:text-gray-400",children:[Math.round(4*E.carbs)," kcal"]})]}),(0,r.jsxs)("div",{className:"p-3 rounded-md bg-gray-50 dark:bg-gray-700 text-center",children:[(0,r.jsx)("div",{className:"w-3 h-3 bg-yellow-500 rounded-full mx-auto mb-1"}),(0,r.jsx)("span",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300",children:"Fat"}),(0,r.jsxs)("span",{className:"block text-lg font-bold text-gray-900 dark:text-white",children:[Math.round(E.fat),"g"]}),(0,r.jsxs)("span",{className:"text-xs text-gray-500 dark:text-gray-400",children:[Math.round(9*E.fat)," kcal"]})]})]})]})]})]}),(0,r.jsx)("p",{className:"mt-8 text-xs text-gray-500 dark:text-gray-400",children:"This calculator uses the Mifflin-St Jeor Equation to estimate your basal metabolic rate (BMR) and then applies an activity multiplier to determine your total daily energy expenditure. For weight loss, a 20% calorie deficit is applied, and for weight gain, a 15% calorie surplus is applied."})]})},j=e=>{let{className:t}=e,[a,l]=(0,s.useState)(80),[i,d]=(0,s.useState)(36),[n,c]=(0,s.useState)(90),[o,m]=(0,s.useState)(170),[x,g]=(0,s.useState)("male"),[y,b]=(0,s.useState)("cm"),[j,f]=(0,s.useState)(null),[k,p]=(0,s.useState)(null);(0,s.useEffect)(()=>{if(a>0&&i>0&&o>0&&("male"===x||"female"===x&&n>0))try{let e=h(a,i,o,"female"===x?n:void 0,y,x);f(e),p(null)}catch(e){p(e instanceof Error?e.message:"An error occurred"),f(null)}else f(null),p(null)},[a,i,n,o,x,y]);let v=e=>t=>{let a=parseFloat(t.target.value);e(isNaN(a)?0:a)},N=(e,t)=>"male"===t?e<6?{category:"Essential Fat",color:"text-blue-500"}:e<14?{category:"Athletic",color:"text-green-500"}:e<18?{category:"Fitness",color:"text-lime-500"}:e<25?{category:"Average",color:"text-yellow-500"}:{category:"Obese",color:"text-red-500"}:e<16?{category:"Essential Fat",color:"text-blue-500"}:e<21?{category:"Athletic",color:"text-green-500"}:e<25?{category:"Fitness",color:"text-lime-500"}:e<32?{category:"Average",color:"text-yellow-500"}:{category:"Obese",color:"text-red-500"};return(0,r.jsxs)("div",{className:(0,u.cn)("p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md",t),children:[(0,r.jsx)("h2",{className:"text-xl font-bold mb-4 text-gray-900 dark:text-white",children:"Body Fat Calculator"}),(0,r.jsx)("p",{className:"text-sm text-gray-500 dark:text-gray-400 mb-6",children:"Uses the U.S. Navy Method to estimate body fat percentage"}),(0,r.jsx)("div",{className:"mb-6",children:(0,r.jsxs)("div",{className:"flex items-center justify-end",children:[(0,r.jsx)("span",{className:"text-sm text-gray-500 dark:text-gray-400 mr-2",children:"Units:"}),(0,r.jsx)("button",{type:"button",onClick:()=>{"cm"===y?(l(Math.round(.393701*a*10)/10),d(Math.round(.393701*i*10)/10),c(Math.round(.393701*n*10)/10),m(Math.round(.393701*o*10)/10),b("in")):(l(Math.round(a/.393701*10)/10),d(Math.round(i/.393701*10)/10),c(Math.round(n/.393701*10)/10),m(Math.round(o/.393701*10)/10),b("cm"))},className:"px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium",children:"cm"===y?"Centimeters":"Inches"})]})}),(0,r.jsxs)("div",{className:"mb-6",children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Gender"}),(0,r.jsxs)("div",{className:"flex space-x-4",children:[(0,r.jsxs)("label",{className:"inline-flex items-center",children:[(0,r.jsx)("input",{type:"radio",className:"form-radio text-lime-600 focus:ring-lime-500",checked:"male"===x,onChange:()=>g("male")}),(0,r.jsx)("span",{className:"ml-2 text-gray-700 dark:text-gray-300",children:"Male"})]}),(0,r.jsxs)("label",{className:"inline-flex items-center",children:[(0,r.jsx)("input",{type:"radio",className:"form-radio text-lime-600 focus:ring-lime-500",checked:"female"===x,onChange:()=>g("female")}),(0,r.jsx)("span",{className:"ml-2 text-gray-700 dark:text-gray-300",children:"Female"})]})]})]}),(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[(0,r.jsxs)("div",{children:[(0,r.jsxs)("label",{htmlFor:"height",className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:["Height (",y,")"]}),(0,r.jsx)("input",{id:"height",type:"number",value:o,onChange:v(m),className:"w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-lime-500 focus:ring-lime-500",min:"1",step:"0.1",required:!0})]}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("label",{htmlFor:"neck",className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:["Neck Circumference (",y,")"]}),(0,r.jsx)("input",{id:"neck",type:"number",value:i,onChange:v(d),className:"w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-lime-500 focus:ring-lime-500",min:"1",step:"0.1",required:!0})]}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("label",{htmlFor:"waist",className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:["Waist Circumference (",y,")"]}),(0,r.jsx)("input",{id:"waist",type:"number",value:a,onChange:v(l),className:"w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-lime-500 focus:ring-lime-500",min:"1",step:"0.1",required:!0})]}),"female"===x&&(0,r.jsxs)("div",{children:[(0,r.jsxs)("label",{htmlFor:"hip",className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:["Hip Circumference (",y,")"]}),(0,r.jsx)("input",{id:"hip",type:"number",value:n,onChange:v(c),className:"w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-lime-500 focus:ring-lime-500",min:"1",step:"0.1",required:!0})]})]}),(0,r.jsxs)("div",{className:"mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-md",children:[(0,r.jsx)("h3",{className:"text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Measurement Guide"}),(0,r.jsxs)("ul",{className:"text-xs text-gray-500 dark:text-gray-400 space-y-1",children:[(0,r.jsxs)("li",{children:["• ",(0,r.jsx)("strong",{children:"Neck:"})," Measure around the middle of your neck, below the Adam's apple."]}),(0,r.jsxs)("li",{children:["• ",(0,r.jsx)("strong",{children:"Waist:"})," Measure at the narrowest point, usually around the belly button."]}),"female"===x&&(0,r.jsxs)("li",{children:["• ",(0,r.jsx)("strong",{children:"Hip:"})," Measure at the widest point around your buttocks."]}),(0,r.jsxs)("li",{children:["• ",(0,r.jsx)("strong",{children:"Measurements:"})," Stand straight with feet together. Keep the tape measure snug but not tight."]})]})]}),null!==j&&(0,r.jsxs)("div",{className:"mt-6",children:[(0,r.jsx)("div",{className:"p-4 rounded-md bg-gray-50 dark:bg-gray-700",children:(0,r.jsxs)("div",{className:"text-center",children:[(0,r.jsx)("span",{className:"block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1",children:"Your Body Fat Percentage"}),(0,r.jsxs)("span",{className:"block text-3xl font-bold text-gray-900 dark:text-white",children:[j.toFixed(1),"%"]}),(()=>{let{category:e,color:t}=N(j,x);return(0,r.jsx)("span",{className:"text-sm font-medium ".concat(t),children:e})})()]})}),(0,r.jsxs)("div",{className:"mt-6",children:[(0,r.jsxs)("h3",{className:"text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:["Body Fat Categories for ","male"===x?"Men":"Women"]}),(0,r.jsx)("div",{className:"flex h-4 overflow-hidden rounded-full",children:"male"===x?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"w-[10%] bg-blue-500",title:"Essential Fat (2-5%)"}),(0,r.jsx)("div",{className:"w-[15%] bg-green-500",title:"Athletic (6-13%)"}),(0,r.jsx)("div",{className:"w-[10%] bg-lime-500",title:"Fitness (14-17%)"}),(0,r.jsx)("div",{className:"w-[15%] bg-yellow-500",title:"Average (18-24%)"}),(0,r.jsx)("div",{className:"w-[50%] bg-red-500",title:"Obese (25%+)"})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"w-[15%] bg-blue-500",title:"Essential Fat (10-15%)"}),(0,r.jsx)("div",{className:"w-[10%] bg-green-500",title:"Athletic (16-20%)"}),(0,r.jsx)("div",{className:"w-[10%] bg-lime-500",title:"Fitness (21-24%)"}),(0,r.jsx)("div",{className:"w-[15%] bg-yellow-500",title:"Average (25-31%)"}),(0,r.jsx)("div",{className:"w-[50%] bg-red-500",title:"Obese (32%+)"})]})}),(0,r.jsx)("div",{className:"flex justify-between text-xs mt-1 text-gray-600 dark:text-gray-400",children:"male"===x?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{children:"2-5%"}),(0,r.jsx)("span",{children:"6-13%"}),(0,r.jsx)("span",{children:"14-17%"}),(0,r.jsx)("span",{children:"18-24%"}),(0,r.jsx)("span",{children:"25%+"})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{children:"10-15%"}),(0,r.jsx)("span",{children:"16-20%"}),(0,r.jsx)("span",{children:"21-24%"}),(0,r.jsx)("span",{children:"25-31%"}),(0,r.jsx)("span",{children:"32%+"})]})})]})]}),k&&(0,r.jsx)("div",{className:"mt-4 p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 rounded-md text-sm",children:k}),(0,r.jsx)("p",{className:"mt-8 text-xs text-gray-500 dark:text-gray-400",children:"The U.S. Navy Method is a circumference-based method to estimate body fat percentage. It's less accurate than methods like DEXA scans or hydrostatic weighing, but provides a reasonable estimate for most individuals. For best results, take measurements in the morning before eating or drinking."})]})};var f=a(7859);let k=e=>{let{name:t,active:a,onClick:s,description:i,icon:d}=e;return(0,r.jsxs)(l.P.button,{whileHover:{y:-2},whileTap:{scale:.98},onClick:s,className:"".concat(a?"bg-gradient-to-r from-lime-500 to-green-600 text-white":"bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"," px-4 py-3 rounded-lg transition-all duration-300 flex-1 flex flex-col items-center shadow-md"),children:[d&&(0,r.jsx)("div",{className:"text-xl mb-1",children:d}),(0,r.jsx)("span",{className:"font-medium",children:t}),(0,r.jsx)("span",{className:"text-xs opacity-80",children:i})]})},p=e=>{let{active:t,children:a}=e;return(0,r.jsx)("div",{className:"".concat(t?"block":"hidden"),children:(0,r.jsx)(l.P.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:a})})},v=()=>{let[e,t]=(0,s.useState)("bmi");return(0,r.jsx)("div",{className:"container mx-auto px-4 py-12",children:(0,r.jsxs)(l.P.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},className:"max-w-5xl mx-auto",children:[(0,r.jsx)("h1",{className:"text-3xl font-bold text-gray-900 dark:text-white mb-2",children:"Fitness Calculators"}),(0,r.jsx)("p",{className:"text-gray-600 dark:text-gray-400 mb-8",children:"Use these tools to track your fitness progress and set realistic goals for your journey."}),(0,r.jsxs)("div",{className:"flex flex-wrap gap-2 mb-8",children:[(0,r.jsx)(k,{name:"BMI Calculator",active:"bmi"===e,onClick:()=>t("bmi"),description:"Calculate your Body Mass Index",icon:(0,r.jsx)(f.a4y,{})}),(0,r.jsx)(k,{name:"Calorie Calculator",active:"calorie"===e,onClick:()=>t("calorie"),description:"Find your daily calorie needs",icon:(0,r.jsx)(f.ANd,{})}),(0,r.jsx)(k,{name:"Body Fat Calculator",active:"bodyfat"===e,onClick:()=>t("bodyfat"),description:"Estimate your body fat percentage",icon:(0,r.jsx)(f.d_n,{})})]}),(0,r.jsxs)("div",{className:"bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg",children:[(0,r.jsx)(p,{active:"bmi"===e,children:(0,r.jsx)(y,{})}),(0,r.jsx)(p,{active:"calorie"===e,children:(0,r.jsx)(b,{})}),(0,r.jsx)(p,{active:"bodyfat"===e,children:(0,r.jsx)(j,{})})]}),(0,r.jsxs)("div",{className:"mt-12 bg-gray-50 dark:bg-gray-900 p-6 rounded-xl",children:[(0,r.jsx)("h2",{className:"text-xl font-bold text-gray-900 dark:text-white mb-4",children:"About Our Fitness Calculators"}),(0,r.jsx)("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"Our calculators provide approximate values based on widely accepted formulas in the fitness industry. Results may vary based on individual factors not accounted for in these calculations."}),(0,r.jsx)("p",{className:"text-gray-600 dark:text-gray-400",children:"For personalized advice, consult with a healthcare professional or certified fitness expert."})]})]})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[873,407,277,441,684,358],()=>t(3014)),_N_E=e.O()}]);
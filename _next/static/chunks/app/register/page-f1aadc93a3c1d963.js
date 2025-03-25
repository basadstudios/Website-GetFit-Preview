(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[454],{2972:(e,r,t)=>{"use strict";t.d(r,{default:()=>c});var a=t(5155),s=t(2115),o=t(9661),d=t(2353),l=t(6874),i=t.n(l),n=t(351);let c=e=>{let{onClose:r}=e,[t,l]=(0,s.useState)(""),[c,m]=(0,s.useState)(""),[x,u]=(0,s.useState)(""),[h,y]=(0,s.useState)(""),[p,g]=(0,s.useState)(!1),[b,f]=(0,s.useState)(!1),[v,w]=(0,s.useState)({}),{register:k,isLoading:j,error:N,clearError:P}=(0,o.h)(),{showToast:C}=(0,d.d)();(0,s.useEffect)(()=>{N&&(N.toLowerCase().includes("email")?w(e=>({...e,email:N})):N.toLowerCase().includes("password")?w(e=>({...e,password:N})):N.toLowerCase().includes("name")?w(e=>({...e,name:N})):C({type:"error",title:"Registration Error",message:N,duration:5e3}))},[N,C]);let S=()=>{let e={};return t.trim()||(e.name="Name is required"),c.trim()?/\S+@\S+\.\S+/.test(c)||(e.email="Please enter a valid email address"):e.email="Email is required",x?x.length<6&&(e.password="Password must be at least 6 characters"):e.password="Password is required",h?x!==h&&(e.confirmPassword="Passwords do not match"):e.confirmPassword="Please confirm your password",w(e),0===Object.keys(e).length},E=async e=>{if(e.preventDefault(),P(),w({}),S())try{await k(t,c,x),C({type:"success",title:"Registration successful!",message:"Your account has been created successfully.",duration:5e3}),r&&r()}catch(e){}};return(0,a.jsxs)("div",{className:"w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl",children:[(0,a.jsx)("h2",{className:"text-2xl font-bold text-center text-gray-900 dark:text-white mb-6",children:"Create Your Account"}),(0,a.jsx)("form",{onSubmit:E,children:(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Full Name"}),(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:(0,a.jsx)(n.JXP,{className:"text-gray-400"})}),(0,a.jsx)("input",{id:"name",type:"text",value:t,onChange:e=>{l(e.target.value),v.name&&w(e=>({...e,name:void 0}))},className:"block w-full pl-10 pr-3 py-2.5 border ".concat(v.name?"border-red-500 dark:border-red-500":"border-gray-300 dark:border-gray-600"," rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"),placeholder:"John Doe"})]}),v.name&&(0,a.jsx)("p",{className:"mt-1 text-sm text-red-600 dark:text-red-400",children:v.name})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"register-email",className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Email"}),(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:(0,a.jsx)(n.pHD,{className:"text-gray-400"})}),(0,a.jsx)("input",{id:"register-email",type:"email",value:c,onChange:e=>{m(e.target.value),v.email&&w(e=>({...e,email:void 0}))},className:"block w-full pl-10 pr-3 py-2.5 border ".concat(v.email?"border-red-500 dark:border-red-500":"border-gray-300 dark:border-gray-600"," rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"),placeholder:"your@email.com"})]}),v.email&&(0,a.jsx)("p",{className:"mt-1 text-sm text-red-600 dark:text-red-400",children:v.email})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"register-password",className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Password"}),(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:(0,a.jsx)(n.F5$,{className:"text-gray-400"})}),(0,a.jsx)("input",{id:"register-password",type:p?"text":"password",value:x,onChange:e=>{u(e.target.value),v.password&&w(e=>({...e,password:void 0}))},className:"block w-full pl-10 pr-10 py-2.5 border ".concat(v.password?"border-red-500 dark:border-red-500":"border-gray-300 dark:border-gray-600"," rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"),placeholder:"********"}),(0,a.jsx)("button",{type:"button",className:"absolute inset-y-0 right-0 pr-3 flex items-center",onClick:()=>g(!p),children:p?(0,a.jsx)(n._NO,{className:"text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"}):(0,a.jsx)(n.Vap,{className:"text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"})})]}),v.password&&(0,a.jsx)("p",{className:"mt-1 text-sm text-red-600 dark:text-red-400",children:v.password})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"confirm-password",className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Confirm Password"}),(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:(0,a.jsx)(n.F5$,{className:"text-gray-400"})}),(0,a.jsx)("input",{id:"confirm-password",type:b?"text":"password",value:h,onChange:e=>{y(e.target.value),v.confirmPassword&&w(e=>({...e,confirmPassword:void 0}))},className:"block w-full pl-10 pr-10 py-2.5 border ".concat(v.confirmPassword?"border-red-500 dark:border-red-500":"border-gray-300 dark:border-gray-600"," rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"),placeholder:"********"}),(0,a.jsx)("button",{type:"button",className:"absolute inset-y-0 right-0 pr-3 flex items-center",onClick:()=>f(!b),children:b?(0,a.jsx)(n._NO,{className:"text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"}):(0,a.jsx)(n.Vap,{className:"text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"})})]}),v.confirmPassword&&(0,a.jsx)("p",{className:"mt-1 text-sm text-red-600 dark:text-red-400",children:v.confirmPassword})]}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("input",{id:"terms",name:"terms",type:"checkbox",required:!0,className:"h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"}),(0,a.jsxs)("label",{htmlFor:"terms",className:"ml-2 block text-sm text-gray-700 dark:text-gray-300",children:["I agree to the"," ",(0,a.jsx)(i(),{href:"/terms",className:"font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300",children:"Terms"})," ","and"," ",(0,a.jsx)(i(),{href:"/privacy",className:"font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300",children:"Privacy Policy"})]})]}),(0,a.jsx)("button",{type:"submit",disabled:j,className:"w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",children:j?"Creating account...":"Create Account"})]})}),(0,a.jsx)("div",{className:"mt-6 text-center",children:(0,a.jsxs)("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Already have an account?"," ",(0,a.jsx)(i(),{href:"/login",className:"font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300",children:"Sign in"})]})})]})}},3796:(e,r,t)=>{Promise.resolve().then(t.bind(t,2972)),Promise.resolve().then(t.bind(t,6327))},9661:(e,r,t)=>{"use strict";t.d(r,{h:()=>o});var a=t(2115),s=t(7547);let o=()=>{let e=(0,a.useContext)(s.c);if(!e)throw Error("useAuth must be used within an AuthProvider");return e}}},e=>{var r=r=>e(e.s=r);e.O(0,[844,873,407,303,464,327,411,441,684,358],()=>r(3796)),_N_E=e.O()}]);
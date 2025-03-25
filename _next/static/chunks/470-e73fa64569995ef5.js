"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[470],{2470:(e,r,a)=>{a.d(r,{default:()=>c});var t=a(5155),s=a(2115),i=a(9661),l=a(2353),d=a(6874),o=a.n(d),m=a(351);let n={email:"admin@getfit.com",password:"admin123",userData:{_id:"demo-admin",name:"Admin User",email:"admin@getfit.com",role:"admin",avatar:"https://randomuser.me/api/portraits/women/68.jpg",membershipLevel:"elite",createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()}},c=e=>{let{onClose:r}=e,[a,d]=(0,s.useState)({email:"",password:"",rememberMe:!0}),[c,u]=(0,s.useState)(!1),[x,h]=(0,s.useState)({}),{login:p,isLoading:g,error:b,clearError:y}=(0,i.h)(),{showToast:w}=(0,l.d)(),[f,v]=(0,s.useState)(!1);(0,s.useEffect)(()=>{b&&(b.toLowerCase().includes("email")?h(e=>({...e,email:b})):b.toLowerCase().includes("password")?h(e=>({...e,password:b})):b.toLowerCase().includes("invalid credentials")||b.toLowerCase().includes("invalid login")?w({type:"error",title:"Login Failed",message:"Invalid email or password. Please try again.",duration:5e3}):w({type:"error",title:"Login Error",message:b,duration:5e3}))},[b,w]);let j=()=>{let e={};return a.email.trim()?/\S+@\S+\.\S+/.test(a.email)||(e.email="Please enter a valid email address"):e.email="Email is required",a.password||(e.password="Password is required"),h(e),0===Object.keys(e).length},k=async e=>{if(e.preventDefault(),y(),h({}),j())try{if(a.email===n.email&&a.password===n.password){let e="demo-token-"+Math.random().toString(36).substring(2);localStorage.setItem("token",e),localStorage.setItem("user",JSON.stringify({id:n.userData._id,name:n.userData.name,email:n.userData.email,role:n.userData.role,avatar:n.userData.avatar,membershipLevel:n.userData.membershipLevel})),w({type:"success",title:"Demo Login Successful!",message:"You are now logged in as a demo admin user.",duration:3e3}),setTimeout(()=>{window.location.href="/dashboard"},1e3);return}await p(a.email,a.password,a.rememberMe),w({type:"success",title:"Login successful!",message:"Welcome back to GetFit.",duration:3e3}),r&&r()}catch(e){}};return(0,t.jsxs)("div",{className:"w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl",children:[(0,t.jsx)("h2",{className:"text-2xl font-bold text-center text-gray-900 dark:text-white mb-6",children:"Welcome Back"}),(0,t.jsx)("div",{className:"mb-6 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800",children:(0,t.jsxs)("div",{className:"flex items-start",children:[(0,t.jsx)("div",{className:"flex-shrink-0",children:(0,t.jsx)(m.S8s,{className:"h-5 w-5 text-blue-600 dark:text-blue-400"})}),(0,t.jsxs)("div",{className:"ml-3",children:[(0,t.jsx)("h3",{className:"text-sm font-medium text-blue-800 dark:text-blue-300",children:"Demo Account Available"}),(0,t.jsxs)("div",{className:"mt-1 text-sm text-blue-700 dark:text-blue-400",children:[(0,t.jsx)("p",{children:"Use our demo admin account to explore all features:"}),(0,t.jsxs)("p",{className:"mt-1",children:[(0,t.jsx)("strong",{children:"Email:"})," ",n.email]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{children:"Password:"})," ",n.password]}),(0,t.jsx)("button",{onClick:()=>{d({email:n.email,password:n.password,rememberMe:!0}),v(!0)},className:"mt-2 text-xs font-medium px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors",children:"Fill Demo Credentials"})]})]})]})}),(0,t.jsx)("form",{onSubmit:k,children:(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Email"}),(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:(0,t.jsx)(m.pHD,{className:"text-gray-400"})}),(0,t.jsx)("input",{id:"email",type:"email",value:a.email,onChange:e=>{d(r=>({...r,email:e.target.value})),x.email&&h(e=>({...e,email:void 0})),v(e.target.value===n.email)},className:"block w-full pl-10 pr-3 py-2.5 border ".concat(x.email?"border-red-500 dark:border-red-500":"border-gray-300 dark:border-gray-600"," rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"),placeholder:"your@email.com"})]}),x.email&&(0,t.jsx)("p",{className:"mt-1 text-sm text-red-600 dark:text-red-400",children:x.email})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Password"}),(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:(0,t.jsx)(m.F5$,{className:"text-gray-400"})}),(0,t.jsx)("input",{id:"password",type:c?"text":"password",value:a.password,onChange:e=>{d(r=>({...r,password:e.target.value})),x.password&&h(e=>({...e,password:void 0})),a.email===n.email&&v(e.target.value===n.password)},className:"block w-full pl-10 pr-10 py-2.5 border ".concat(x.password?"border-red-500 dark:border-red-500":"border-gray-300 dark:border-gray-600"," rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"),placeholder:"********"}),(0,t.jsx)("button",{type:"button",className:"absolute inset-y-0 right-0 pr-3 flex items-center",onClick:()=>u(!c),children:c?(0,t.jsx)(m._NO,{className:"text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"}):(0,t.jsx)(m.Vap,{className:"text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"})})]}),x.password&&(0,t.jsx)("p",{className:"mt-1 text-sm text-red-600 dark:text-red-400",children:x.password})]}),(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)("input",{id:"remember-me",name:"remember-me",type:"checkbox",checked:a.rememberMe,onChange:e=>d(r=>({...r,rememberMe:e.target.checked})),className:"h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"}),(0,t.jsx)("label",{htmlFor:"remember-me",className:"ml-2 block text-sm text-gray-700 dark:text-gray-300",children:"Remember me"})]}),(0,t.jsx)("div",{className:"text-sm",children:(0,t.jsx)(o(),{href:"/forgot-password",className:"font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300",children:"Forgot your password?"})})]}),(0,t.jsx)("button",{type:"submit",disabled:g,className:"w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white ".concat(f?"bg-green-600 hover:bg-green-700":"bg-primary-600 hover:bg-primary-700"," focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"),children:g?"Signing in...":f?"Sign in with Demo Account":"Sign in"})]})}),(0,t.jsx)("div",{className:"mt-6 text-center",children:(0,t.jsxs)("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Don't have an account?"," ",(0,t.jsx)(o(),{href:"/register",className:"font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300",children:"Create an account"})]})})]})}},9661:(e,r,a)=>{a.d(r,{h:()=>i});var t=a(2115),s=a(7547);let i=()=>{let e=(0,t.useContext)(s.c);if(!e)throw Error("useAuth must be used within an AuthProvider");return e}}}]);
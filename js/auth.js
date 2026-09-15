/* Local-only demo authentication. Production apps must authenticate server-side. */
const Auth = (() => {
  const KEY='marriage-register-session-v1';
  const credentials={username:'Jihadul',password:'jihad1234'}; // Change credentials here.
  return { user:()=>localStorage.getItem(KEY), login:(u,p)=>{if(u===credentials.username&&p===credentials.password){localStorage.setItem(KEY,u);return true;}return false;}, logout:()=>localStorage.removeItem(KEY) };
})();

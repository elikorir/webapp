"use strict";(self.webpackChunkelement_web=self.webpackChunkelement_web||[]).push([[2959],{"./src/async-components/views/dialogs/security/ExportE2eKeysDialog.tsx":(e,t,s)=>{s.r(t),s.d(t,{default:()=>u});var r=s("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),n=s("./node_modules/file-saver/dist/FileSaver.min.js"),o=s.n(n),a=s("./node_modules/react/index.js"),i=s("./node_modules/matrix-js-sdk/src/logger.ts"),l=s("./src/languageHandler.tsx"),c=s("./src/utils/MegolmExportEncryption.ts"),p=s("./src/components/views/dialogs/BaseDialog.tsx"),d=s("./src/components/views/auth/PassphraseField.tsx"),h=s("./src/components/views/auth/PassphraseConfirmField.tsx"),m=function(e){return e.Edit="edit",e.Exporting="exporting",e}(m||{});class u extends a.Component{constructor(e){super(e),(0,r.A)(this,"fieldPassword",null),(0,r.A)(this,"fieldPasswordConfirm",null),(0,r.A)(this,"unmounted",!1),(0,r.A)(this,"onPassphraseFormSubmit",(async e=>{if(e.preventDefault(),!await this.verifyFieldsBeforeSubmit())return;if(this.unmounted)return;const t=this.state.passphrase1;this.startExport(t)})),(0,r.A)(this,"onCancelClick",(e=>(e.preventDefault(),this.props.onFinished(!1),!1))),(0,r.A)(this,"onPassphraseChange",((e,t)=>{this.setState({[t]:e.target.value})})),this.state={phase:m.Edit,errStr:null,passphrase1:"",passphrase2:""}}componentWillUnmount(){this.unmounted=!0}async verifyFieldsBeforeSubmit(){const e=[this.fieldPassword,this.fieldPasswordConfirm],t=[];for(const s of e){if(!s)continue;await s.validate({allowEmpty:!1})||t.push(s)}return 0===t.length||(t[0].focus(),t[0].validate({allowEmpty:!1,focused:!0}),!1)}startExport(e){Promise.resolve().then((()=>this.props.matrixClient.getCrypto().exportRoomKeysAsJson())).then((t=>c.L(t,e))).then((e=>{const t=new Blob([e],{type:"text/plain;charset=us-ascii"});o().saveAs(t,"element-keys.txt"),this.props.onFinished(!0)})).catch((e=>{if(i.v.error("Error exporting e2e keys:",e),this.unmounted)return;const t=e.friendlyText||(0,l._t)("error|unknown");this.setState({errStr:t,phase:m.Edit})})),this.setState({errStr:null,phase:m.Exporting})}render(){const e=this.state.phase===m.Exporting;return a.createElement(p.A,{className:"mx_exportE2eKeysDialog",onFinished:this.props.onFinished,title:(0,l._t)("settings|key_export_import|export_title")},a.createElement("form",{onSubmit:this.onPassphraseFormSubmit},a.createElement("div",{className:"mx_Dialog_content"},a.createElement("p",null,(0,l._t)("settings|key_export_import|export_description_1")),a.createElement("p",null,(0,l._t)("settings|key_export_import|export_description_2")),a.createElement("div",{className:"error"},this.state.errStr),a.createElement("div",{className:"mx_E2eKeysDialog_inputTable"},a.createElement("div",{className:"mx_E2eKeysDialog_inputRow"},a.createElement(d.A,{minScore:3,label:(0,l.AO)("settings|key_export_import|enter_passphrase"),labelEnterPassword:(0,l.AO)("settings|key_export_import|enter_passphrase"),labelStrongPassword:(0,l.AO)("settings|key_export_import|phrase_strong_enough"),labelAllowedButUnsafe:(0,l.AO)("settings|key_export_import|phrase_strong_enough"),value:this.state.passphrase1,onChange:e=>this.onPassphraseChange(e,"passphrase1"),autoFocus:!0,size:64,type:"password",disabled:e,autoComplete:"new-password",fieldRef:e=>this.fieldPassword=e})),a.createElement("div",{className:"mx_E2eKeysDialog_inputRow"},a.createElement(h.A,{password:this.state.passphrase1,label:(0,l.AO)("settings|key_export_import|confirm_passphrase"),labelRequired:(0,l.AO)("settings|key_export_import|phrase_cannot_be_empty"),labelInvalid:(0,l.AO)("settings|key_export_import|phrase_must_match"),value:this.state.passphrase2,onChange:e=>this.onPassphraseChange(e,"passphrase2"),size:64,type:"password",disabled:e,autoComplete:"new-password",fieldRef:e=>this.fieldPasswordConfirm=e})))),a.createElement("div",{className:"mx_Dialog_buttons"},a.createElement("input",{className:"mx_Dialog_primary",type:"submit",value:(0,l._t)("action|export"),disabled:e}),a.createElement("button",{onClick:this.onCancelClick,disabled:e},(0,l._t)("action|cancel")))))}}},"./src/utils/MegolmExportEncryption.ts":(e,t,s)=>{s.d(t,{L:()=>p,c:()=>c});var r=s("./node_modules/matrix-js-sdk/src/logger.ts"),n=s("./src/languageHandler.tsx"),o=s("./src/SdkConfig.ts");const a=window.crypto.subtle;function i(e,t){return{message:e,friendlyText:t}}function l(){return(0,n._t)("encryption|export_unsupported")}async function c(e,t){const s=function(e){const t=(new TextDecoder).decode(new Uint8Array(e));let s=0;for(;;){const e=t.indexOf("\n",s);if(e<0)throw new Error("Header line not found");const r=t.slice(s,e).trim();if(s=e+1,r===h)break}const r=s;for(;;){const e=t.indexOf("\n",s);if(t.slice(s,e<0?void 0:e).trim()===m)break;if(e<0)throw new Error("Trailer line not found");s=e+1}const n=s;return function(e){const t=window.atob(e),s=new Uint8Array(t.length);for(let e=0;e<t.length;e++)s[e]=t.charCodeAt(e);return s}(t.slice(r,n))}(e),r=o.Ay.get().brand;if(s.length<1)throw i("Invalid file: too short",(0,n._t)("encryption|import_invalid_keyfile",{brand:r}));if(1!==s[0])throw i("Unsupported version",(0,n._t)("encryption|import_invalid_keyfile",{brand:r}));const c=s.length-69;if(c<0)throw i("Invalid file: too short",(0,n._t)("encryption|import_invalid_keyfile",{brand:r}));const p=s.subarray(1,17),u=s.subarray(17,33),y=s[33]<<24|s[34]<<16|s[35]<<8|s[36],f=s.subarray(37,37+c),w=s.subarray(-32),[_,g]=await d(p,y,t),x=s.subarray(0,-32);let b,E;try{b=await a.verify({name:"HMAC"},g,w,x)}catch(e){throw i("subtleCrypto.verify failed: "+e,l())}if(!b)throw i("hmac mismatch",(0,n._t)("encryption|import_invalid_passphrase"));try{E=await a.decrypt({name:"AES-CTR",counter:u,length:64},_,f)}catch(e){throw i("subtleCrypto.decrypt failed: "+e,l())}return(new TextDecoder).decode(new Uint8Array(E))}async function p(e,t,s){const r=(s=s||{}).kdf_rounds||5e5,n=new Uint8Array(16);window.crypto.getRandomValues(n);const o=new Uint8Array(16);window.crypto.getRandomValues(o),o[8]&=127;const[c,p]=await d(n,r,t),y=(new TextEncoder).encode(e);let f;try{f=await a.encrypt({name:"AES-CTR",counter:o,length:64},c,y)}catch(e){throw i("subtleCrypto.encrypt failed: "+e,l())}const w=new Uint8Array(f),_=1+n.length+o.length+4+w.length+32,g=new Uint8Array(_);let x=0;g[x++]=1,g.set(n,x),x+=n.length,g.set(o,x),x+=o.length,g[x++]=r>>24,g[x++]=r>>16&255,g[x++]=r>>8&255,g[x++]=255&r,g.set(w,x),x+=w.length;const b=g.subarray(0,x);let E;try{E=await a.sign({name:"HMAC"},p,b)}catch(e){throw i("subtleCrypto.sign failed: "+e,l())}const A=new Uint8Array(E);return g.set(A,x),function(e){const t=96,s=Math.ceil(e.length/t),r=new Array(s+3);r[0]=h;let n,o=0;for(n=1;n<=s;n++)r[n]=u(e.subarray(o,o+t)),o+=t;return r[n++]=m,r[n]="",(new TextEncoder).encode(r.join("\n")).buffer}(g)}async function d(e,t,s){const n=new Date;let o,c;try{o=await a.importKey("raw",(new TextEncoder).encode(s),{name:"PBKDF2"},!1,["deriveBits"])}catch(e){throw i("subtleCrypto.importKey failed: "+e,l())}try{c=await a.deriveBits({name:"PBKDF2",salt:e,iterations:t,hash:"SHA-512"},o,512)}catch(e){throw i("subtleCrypto.deriveBits failed: "+e,l())}const p=new Date;r.v.log("E2e import/export: deriveKeys took "+(p.getTime()-n.getTime())+"ms");const d=c.slice(0,32),h=c.slice(32),m=a.importKey("raw",d,{name:"AES-CTR"},!1,["encrypt","decrypt"]).catch((e=>{throw i("subtleCrypto.importKey failed for AES key: "+e,l())})),u=a.importKey("raw",h,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign","verify"]).catch((e=>{throw i("subtleCrypto.importKey failed for HMAC key: "+e,l())}));return Promise.all([m,u])}const h="-----BEGIN MEGOLM SESSION DATA-----",m="-----END MEGOLM SESSION DATA-----";function u(e){const t=String.fromCharCode.apply(null,Array.from(e));return window.btoa(t)}}}]);
//# sourceMappingURL=2959.js.map
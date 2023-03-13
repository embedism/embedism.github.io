!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).SecureDfu=e()}}(function(){return function o(s,a,c){function h(t,e){if(!a[t]){if(!s[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(u)return u(t,!0);var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}var i=a[t]={exports:{}};s[t][0].call(i.exports,function(e){return h(s[t][1][e]||e)},i,i.exports,o,s,a,c)}return a[t].exports}for(var u="function"==typeof require&&require,e=0;e<c.length;e++)h(c[e]);return h}({1:[function(e,t,n){"use strict";var r,i=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(n,"__esModule",{value:!0});var o,s=e("events"),a=(o=s.EventEmitter,i(c,o),c.prototype.addEventListener=function(e,t){return o.prototype.addListener.call(this,e,t)},c.prototype.removeEventListener=function(e,t){return o.prototype.removeListener.call(this,e,t)},c.prototype.dispatchEvent=function(e,t){return o.prototype.emit.call(this,e,t)},c);function c(){return null!==o&&o.apply(this,arguments)||this}n.EventDispatcher=a},{events:4}],2:[function(e,t,n){"use strict";var r,i=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),a=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e};Object.defineProperty(n,"__esModule",{value:!0});var o,s=e("./dispatcher"),c="8ec90001-f315-4f60-9fb8-838830daea50",h="8ec90002-f315-4f60-9fb8-838830daea50",u=!0,f={BUTTON_COMMAND:[1],CREATE_COMMAND:[1,1],CREATE_DATA:[1,2],RECEIPT_NOTIFICATIONS:[2],CACULATE_CHECKSUM:[3],EXECUTE:[4],SELECT_COMMAND:[6,1],SELECT_DATA:[6,2],RESPONSE:[96,32]},l={0:"Invalid opcode",1:"Operation successful",2:"Opcode not supported",3:"Missing or invalid parameter value",4:"Not enough memory for the data object",5:"Data object does not match the firmware and hardware requirements, the signature is wrong, or parsing the command failed",7:"Not a valid object type for a Create request",8:"The state of the DFU process does not allow this operation",10:"Operation failed",11:"Extended error"},p={0:"No extended error code has been set. This error indicates an implementation problem",1:"Invalid error code. This error code should never be used outside of development",2:"The format of the command was incorrect",3:"The command was successfully parsed, but it is not supported or unknown",4:"The init command is invalid. The init packet either has an invalid update type or it is missing required fields for the update type",5:"The firmware version is too low. For an application, the version must be greater than the current application. For a bootloader, it must be greater than or equal to the current version",6:"The hardware version of the device does not match the required hardware version for the update",7:"The array of supported SoftDevices for the update does not contain the FWID of the current SoftDevice",8:"The init packet does not contain a signature",9:"The hash type that is specified by the init packet is not supported by the DFU bootloader",10:"The hash of the firmware image cannot be calculated",11:"The type of the signature is unknown or not supported by the DFU bootloader",12:"The hash of the received firmware image does not match the hash in the init packet",13:"The available space on the device is insufficient to hold the firmware"},d=(o=s.EventDispatcher,i(v,o),v.prototype.log=function(e){this.dispatchEvent(v.EVENT_LOG,{message:e})},v.prototype.progress=function(e){this.dispatchEvent(v.EVENT_PROGRESS,{object:"unknown",totalBytes:0,currentBytes:e})},v.prototype.connect=function(e){var t=this;return e.addEventListener("gattserverdisconnected",function(){t.notifyFns={},t.controlChar=null,t.packetChar=null}),this.gattConnect(e).then(function(e){if(t.log("found "+e.length+" characteristic(s)"),t.packetChar=e.find(function(e){return e.uuid===h}),!t.packetChar)throw new Error("Unable to find packet characteristic");if(t.log("found packet characteristic"),t.controlChar=e.find(function(e){return e.uuid===c}),!t.controlChar)throw new Error("Unable to find control characteristic");if(t.log("found control characteristic"),!t.controlChar.properties.notify&&!t.controlChar.properties.indicate)throw new Error("Control characteristic does not allow notifications");return t.controlChar.startNotifications()}).then(function(){return t.controlChar.addEventListener("characteristicvaluechanged",t.handleNotification.bind(t)),t.log("enabled control notifications"),e})},v.prototype.gattConnect=function(e,t){var n=this;return void 0===t&&(t=v.SERVICE_UUID),Promise.resolve().then(function(){return e.gatt.connected?e.gatt:e.gatt.connect()}).then(function(e){return n.log("connected to gatt server"),e.getPrimaryService(t).catch(function(){throw new Error("Unable to find DFU service")})}).then(function(e){return n.log("found DFU service"),e.getCharacteristics()})},v.prototype.handleNotification=function(e){var t=e.target.value;if(f.RESPONSE.indexOf(t.getUint8(0))<0)throw new Error("Unrecognised control characteristic response notification");var n=t.getUint8(1);if(this.notifyFns[n]){var r=t.getUint8(2),i=null;if(1===r){var o=new DataView(t.buffer,3);this.notifyFns[n].resolve(o)}else if(11===r){var s=t.getUint8(3);i="Error: "+p[s]}else i="Error: "+l[r];i&&(this.log("notify: "+i),this.notifyFns[n].reject(i)),delete this.notifyFns[n]}},v.prototype.sendOperation=function(o,s,a){var c=this;return new Promise(function(e,t){var n=s.length;a&&(n+=a.byteLength);var r=new Uint8Array(n);if(r.set(s),a){var i=new Uint8Array(a);r.set(i,s.length)}c.notifyFns[s[0]]={resolve:e,reject:t},o.writeValue(r)})},v.prototype.sendControl=function(e,n){var r=this;return new Promise(function(t){r.sendOperation(r.controlChar,e,n).then(function(e){setTimeout(function(){return t(e)},r.delay)})})},v.prototype.transferInit=function(e){return this.transfer(e,"init",f.SELECT_COMMAND,f.CREATE_COMMAND)},v.prototype.transferFirmware=function(e){return this.transfer(e,"firmware",f.SELECT_DATA,f.CREATE_DATA)},v.prototype.transfer=function(i,o,e,s){var a=this;return this.sendControl(e).then(function(e){var t=e.getUint32(0,u),n=e.getUint32(4,u),r=e.getInt32(8,u);if("init"!==o||n!==i.byteLength||!a.checkCrc(i,r))return a.progress=function(e){a.dispatchEvent(v.EVENT_PROGRESS,{object:o,totalBytes:i.byteLength,currentBytes:e})},a.progress(0),a.transferObject(i,s,t,n);a.log("init packet already available, skipping transfer")})},v.prototype.transferObject=function(i,e,t,o){var s=this,n=o-o%t,r=Math.min(n+t,i.byteLength),a=new DataView(new ArrayBuffer(4));return a.setUint32(0,r-n,u),this.sendControl(e,a.buffer).then(function(){var e=i.slice(n,r);return s.transferData(e,n)}).then(function(){return s.sendControl(f.CACULATE_CHECKSUM)}).then(function(e){var t=e.getInt32(4,u),n=e.getUint32(0,u),r=i.slice(0,n);if(s.checkCrc(r,t))return s.log("written "+n+" bytes"),o=n,s.sendControl(f.EXECUTE);s.log("object failed to validate")}).then(function(){if(r<i.byteLength)return s.transferObject(i,e,t,o);s.log("transfer complete")})},v.prototype.transferData=function(e,t,n){var r=this;n=n||0;var i=Math.min(n+20,e.byteLength),o=e.slice(n,i);return this.packetChar.writeValue(o).then(function(){return r.delayPromise(r.delay)}).then(function(){if(r.progress(t+i),i<e.byteLength)return r.transferData(e,t,i)})},v.prototype.checkCrc=function(e,t){return this.crc32?t===this.crc32(new Uint8Array(e)):(this.log("crc32 not found, skipping CRC check"),!0)},v.prototype.delayPromise=function(t){return new Promise(function(e){setTimeout(e,t)})},v.prototype.requestDevice=function(t,e,n){var r=this;void 0===n&&(n=this.DEFAULT_UUIDS),n=a({},this.DEFAULT_UUIDS,n),t||e||(e=[{services:[n.service]}]);var i={optionalServices:[n.service]};return e?i.filters=e:i.acceptAllDevices=!0,this.bluetooth.requestDevice(i).then(function(e){return t?r.setDfuMode(e,n):e})},v.prototype.setDfuMode=function(i,o){var s=this;return void 0===o&&(o=this.DEFAULT_UUIDS),o=a({},this.DEFAULT_UUIDS,o),this.gattConnect(i,o.service).then(function(e){s.log("found "+e.length+" characteristic(s)");var t=e.find(function(e){return e.uuid===o.control}),n=e.find(function(e){return e.uuid===o.packet});if(t&&n)return i;var r=e.find(function(e){return e.uuid===o.button});if(!r)throw new Error("Unsupported device");if(s.log("found buttonless characteristic"),!r.properties.notify&&!r.properties.indicate)throw new Error("Buttonless characteristic does not allow notifications");return new Promise(function(e,t){function n(){this.notifyFns={},e(null)}r.startNotifications().then(function(){return s.log("enabled buttonless notifications"),i.addEventListener("gattserverdisconnected",n.bind(s)),r.addEventListener("characteristicvaluechanged",s.handleNotification.bind(s)),s.sendOperation(r,f.BUTTON_COMMAND)}).then(function(){s.log("sent DFU mode"),n()})})})},v.prototype.update=function(n,r,i){var o=this;return new Promise(function(e,t){return n?r?i?void o.connect(n).then(function(){return o.log("transferring init"),o.transferInit(r)}).then(function(){return o.log("transferring firmware"),o.transferFirmware(i)}).then(function(){o.log("complete, disconnecting..."),n.addEventListener("gattserverdisconnected",function(){o.log("disconnected"),e(n)})}).catch(function(e){return t(e)}):t("Firmware not specified"):t("Init not specified"):t("Device not specified")})},v.SERVICE_UUID=65113,v.EVENT_LOG="log",v.EVENT_PROGRESS="progress",v);function v(e,t,n){void 0===n&&(n=0);var r=o.call(this)||this;return r.crc32=e,r.bluetooth=t,r.delay=n,r.DEFAULT_UUIDS={service:v.SERVICE_UUID,button:"8ec90003-f315-4f60-9fb8-838830daea50",control:c,packet:h},r.notifyFns={},r.controlChar=null,r.packetChar=null,!r.bluetooth&&window&&window.navigator&&window.navigator.bluetooth&&(r.bluetooth=navigator.bluetooth),r}n.SecureDfu=d},{"./dispatcher":1}],3:[function(e,t,n){"use strict";var r=e("./secure-dfu");t.exports=r.SecureDfu},{"./secure-dfu":2}],4:[function(e,t,n){function r(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function c(e){return"function"==typeof e}function h(e){return"object"==typeof e&&null!==e}function u(e){return void 0===e}((t.exports=r).EventEmitter=r).prototype._events=void 0,r.prototype._maxListeners=void 0,r.defaultMaxListeners=10,r.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},r.prototype.emit=function(e){var t,n,r,i,o,s;if(this._events||(this._events={}),"error"===e&&(!this._events.error||h(this._events.error)&&!this._events.error.length)){if((t=arguments[1])instanceof Error)throw t;var a=new Error('Uncaught, unspecified "error" event. ('+t+")");throw a.context=t,a}if(u(n=this._events[e]))return!1;if(c(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:i=Array.prototype.slice.call(arguments,1),n.apply(this,i)}else if(h(n))for(i=Array.prototype.slice.call(arguments,1),r=(s=n.slice()).length,o=0;o<r;o++)s[o].apply(this,i);return!0},r.prototype.on=r.prototype.addListener=function(e,t){var n;if(!c(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,c(t.listener)?t.listener:t),this._events[e]?h(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,h(this._events[e])&&!this._events[e].warned&&(n=u(this._maxListeners)?r.defaultMaxListeners:this._maxListeners)&&0<n&&this._events[e].length>n&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace()),this},r.prototype.once=function(e,t){if(!c(t))throw TypeError("listener must be a function");var n=!1;function r(){this.removeListener(e,r),n||(n=!0,t.apply(this,arguments))}return r.listener=t,this.on(e,r),this},r.prototype.removeListener=function(e,t){var n,r,i,o;if(!c(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(i=(n=this._events[e]).length,r=-1,n===t||c(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(h(n)){for(o=i;0<o--;)if(n[o]===t||n[o].listener&&n[o].listener===t){r=o;break}if(r<0)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(r,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},r.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(c(n=this._events[e]))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},r.prototype.listeners=function(e){return this._events&&this._events[e]?c(this._events[e])?[this._events[e]]:this._events[e].slice():[]},r.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(c(t))return 1;if(t)return t.length}return 0},r.listenerCount=function(e,t){return e.listenerCount(t)}},{}]},{},[3])(3)});
//# sourceMappingURL=secure-dfu.js.map
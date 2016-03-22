// Compiled by ClojureScript 1.8.34 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args7424 = [];
var len__6282__auto___7430 = arguments.length;
var i__6283__auto___7431 = (0);
while(true){
if((i__6283__auto___7431 < len__6282__auto___7430)){
args7424.push((arguments[i__6283__auto___7431]));

var G__7432 = (i__6283__auto___7431 + (1));
i__6283__auto___7431 = G__7432;
continue;
} else {
}
break;
}

var G__7426 = args7424.length;
switch (G__7426) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7424.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async7427 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7427 = (function (f,blockable,meta7428){
this.f = f;
this.blockable = blockable;
this.meta7428 = meta7428;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async7427.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7429,meta7428__$1){
var self__ = this;
var _7429__$1 = this;
return (new cljs.core.async.t_cljs$core$async7427(self__.f,self__.blockable,meta7428__$1));
});

cljs.core.async.t_cljs$core$async7427.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7429){
var self__ = this;
var _7429__$1 = this;
return self__.meta7428;
});

cljs.core.async.t_cljs$core$async7427.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async7427.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async7427.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async7427.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async7427.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta7428","meta7428",989400034,null)], null);
});

cljs.core.async.t_cljs$core$async7427.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7427.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7427";

cljs.core.async.t_cljs$core$async7427.cljs$lang$ctorPrWriter = (function (this__5819__auto__,writer__5820__auto__,opt__5821__auto__){
return cljs.core._write.call(null,writer__5820__auto__,"cljs.core.async/t_cljs$core$async7427");
});

cljs.core.async.__GT_t_cljs$core$async7427 = (function cljs$core$async$__GT_t_cljs$core$async7427(f__$1,blockable__$1,meta7428){
return (new cljs.core.async.t_cljs$core$async7427(f__$1,blockable__$1,meta7428));
});

}

return (new cljs.core.async.t_cljs$core$async7427(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args7436 = [];
var len__6282__auto___7439 = arguments.length;
var i__6283__auto___7440 = (0);
while(true){
if((i__6283__auto___7440 < len__6282__auto___7439)){
args7436.push((arguments[i__6283__auto___7440]));

var G__7441 = (i__6283__auto___7440 + (1));
i__6283__auto___7440 = G__7441;
continue;
} else {
}
break;
}

var G__7438 = args7436.length;
switch (G__7438) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7436.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args7443 = [];
var len__6282__auto___7446 = arguments.length;
var i__6283__auto___7447 = (0);
while(true){
if((i__6283__auto___7447 < len__6282__auto___7446)){
args7443.push((arguments[i__6283__auto___7447]));

var G__7448 = (i__6283__auto___7447 + (1));
i__6283__auto___7447 = G__7448;
continue;
} else {
}
break;
}

var G__7445 = args7443.length;
switch (G__7445) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7443.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args7450 = [];
var len__6282__auto___7453 = arguments.length;
var i__6283__auto___7454 = (0);
while(true){
if((i__6283__auto___7454 < len__6282__auto___7453)){
args7450.push((arguments[i__6283__auto___7454]));

var G__7455 = (i__6283__auto___7454 + (1));
i__6283__auto___7454 = G__7455;
continue;
} else {
}
break;
}

var G__7452 = args7450.length;
switch (G__7452) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7450.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_7457 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_7457);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_7457,ret){
return (function (){
return fn1.call(null,val_7457);
});})(val_7457,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args7458 = [];
var len__6282__auto___7461 = arguments.length;
var i__6283__auto___7462 = (0);
while(true){
if((i__6283__auto___7462 < len__6282__auto___7461)){
args7458.push((arguments[i__6283__auto___7462]));

var G__7463 = (i__6283__auto___7462 + (1));
i__6283__auto___7462 = G__7463;
continue;
} else {
}
break;
}

var G__7460 = args7458.length;
switch (G__7460) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7458.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__6127__auto___7465 = n;
var x_7466 = (0);
while(true){
if((x_7466 < n__6127__auto___7465)){
(a[x_7466] = (0));

var G__7467 = (x_7466 + (1));
x_7466 = G__7467;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__7468 = (i + (1));
i = G__7468;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async7472 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7472 = (function (alt_flag,flag,meta7473){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta7473 = meta7473;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async7472.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_7474,meta7473__$1){
var self__ = this;
var _7474__$1 = this;
return (new cljs.core.async.t_cljs$core$async7472(self__.alt_flag,self__.flag,meta7473__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async7472.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_7474){
var self__ = this;
var _7474__$1 = this;
return self__.meta7473;
});})(flag))
;

cljs.core.async.t_cljs$core$async7472.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async7472.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async7472.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async7472.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async7472.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta7473","meta7473",1931302798,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async7472.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7472.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7472";

cljs.core.async.t_cljs$core$async7472.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5819__auto__,writer__5820__auto__,opt__5821__auto__){
return cljs.core._write.call(null,writer__5820__auto__,"cljs.core.async/t_cljs$core$async7472");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async7472 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async7472(alt_flag__$1,flag__$1,meta7473){
return (new cljs.core.async.t_cljs$core$async7472(alt_flag__$1,flag__$1,meta7473));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async7472(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async7478 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7478 = (function (alt_handler,flag,cb,meta7479){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta7479 = meta7479;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async7478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7480,meta7479__$1){
var self__ = this;
var _7480__$1 = this;
return (new cljs.core.async.t_cljs$core$async7478(self__.alt_handler,self__.flag,self__.cb,meta7479__$1));
});

cljs.core.async.t_cljs$core$async7478.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7480){
var self__ = this;
var _7480__$1 = this;
return self__.meta7479;
});

cljs.core.async.t_cljs$core$async7478.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async7478.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async7478.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async7478.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async7478.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta7479","meta7479",814589490,null)], null);
});

cljs.core.async.t_cljs$core$async7478.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7478.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7478";

cljs.core.async.t_cljs$core$async7478.cljs$lang$ctorPrWriter = (function (this__5819__auto__,writer__5820__auto__,opt__5821__auto__){
return cljs.core._write.call(null,writer__5820__auto__,"cljs.core.async/t_cljs$core$async7478");
});

cljs.core.async.__GT_t_cljs$core$async7478 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async7478(alt_handler__$1,flag__$1,cb__$1,meta7479){
return (new cljs.core.async.t_cljs$core$async7478(alt_handler__$1,flag__$1,cb__$1,meta7479));
});

}

return (new cljs.core.async.t_cljs$core$async7478(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__7481_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7481_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__7482_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7482_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__5213__auto__ = wport;
if(cljs.core.truth_(or__5213__auto__)){
return or__5213__auto__;
} else {
return port;
}
})()], null));
} else {
var G__7483 = (i + (1));
i = G__7483;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5213__auto__ = ret;
if(cljs.core.truth_(or__5213__auto__)){
return or__5213__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__5201__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__5201__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__5201__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__6289__auto__ = [];
var len__6282__auto___7489 = arguments.length;
var i__6283__auto___7490 = (0);
while(true){
if((i__6283__auto___7490 < len__6282__auto___7489)){
args__6289__auto__.push((arguments[i__6283__auto___7490]));

var G__7491 = (i__6283__auto___7490 + (1));
i__6283__auto___7490 = G__7491;
continue;
} else {
}
break;
}

var argseq__6290__auto__ = ((((1) < args__6289__auto__.length))?(new cljs.core.IndexedSeq(args__6289__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6290__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__7486){
var map__7487 = p__7486;
var map__7487__$1 = ((((!((map__7487 == null)))?((((map__7487.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7487.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7487):map__7487);
var opts = map__7487__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq7484){
var G__7485 = cljs.core.first.call(null,seq7484);
var seq7484__$1 = cljs.core.next.call(null,seq7484);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7485,seq7484__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args7492 = [];
var len__6282__auto___7542 = arguments.length;
var i__6283__auto___7543 = (0);
while(true){
if((i__6283__auto___7543 < len__6282__auto___7542)){
args7492.push((arguments[i__6283__auto___7543]));

var G__7544 = (i__6283__auto___7543 + (1));
i__6283__auto___7543 = G__7544;
continue;
} else {
}
break;
}

var G__7494 = args7492.length;
switch (G__7494) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7492.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__7379__auto___7546 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7379__auto___7546){
return (function (){
var f__7380__auto__ = (function (){var switch__7267__auto__ = ((function (c__7379__auto___7546){
return (function (state_7518){
var state_val_7519 = (state_7518[(1)]);
if((state_val_7519 === (7))){
var inst_7514 = (state_7518[(2)]);
var state_7518__$1 = state_7518;
var statearr_7520_7547 = state_7518__$1;
(statearr_7520_7547[(2)] = inst_7514);

(statearr_7520_7547[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7519 === (1))){
var state_7518__$1 = state_7518;
var statearr_7521_7548 = state_7518__$1;
(statearr_7521_7548[(2)] = null);

(statearr_7521_7548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7519 === (4))){
var inst_7497 = (state_7518[(7)]);
var inst_7497__$1 = (state_7518[(2)]);
var inst_7498 = (inst_7497__$1 == null);
var state_7518__$1 = (function (){var statearr_7522 = state_7518;
(statearr_7522[(7)] = inst_7497__$1);

return statearr_7522;
})();
if(cljs.core.truth_(inst_7498)){
var statearr_7523_7549 = state_7518__$1;
(statearr_7523_7549[(1)] = (5));

} else {
var statearr_7524_7550 = state_7518__$1;
(statearr_7524_7550[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7519 === (13))){
var state_7518__$1 = state_7518;
var statearr_7525_7551 = state_7518__$1;
(statearr_7525_7551[(2)] = null);

(statearr_7525_7551[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7519 === (6))){
var inst_7497 = (state_7518[(7)]);
var state_7518__$1 = state_7518;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7518__$1,(11),to,inst_7497);
} else {
if((state_val_7519 === (3))){
var inst_7516 = (state_7518[(2)]);
var state_7518__$1 = state_7518;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7518__$1,inst_7516);
} else {
if((state_val_7519 === (12))){
var state_7518__$1 = state_7518;
var statearr_7526_7552 = state_7518__$1;
(statearr_7526_7552[(2)] = null);

(statearr_7526_7552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7519 === (2))){
var state_7518__$1 = state_7518;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7518__$1,(4),from);
} else {
if((state_val_7519 === (11))){
var inst_7507 = (state_7518[(2)]);
var state_7518__$1 = state_7518;
if(cljs.core.truth_(inst_7507)){
var statearr_7527_7553 = state_7518__$1;
(statearr_7527_7553[(1)] = (12));

} else {
var statearr_7528_7554 = state_7518__$1;
(statearr_7528_7554[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7519 === (9))){
var state_7518__$1 = state_7518;
var statearr_7529_7555 = state_7518__$1;
(statearr_7529_7555[(2)] = null);

(statearr_7529_7555[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7519 === (5))){
var state_7518__$1 = state_7518;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7530_7556 = state_7518__$1;
(statearr_7530_7556[(1)] = (8));

} else {
var statearr_7531_7557 = state_7518__$1;
(statearr_7531_7557[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7519 === (14))){
var inst_7512 = (state_7518[(2)]);
var state_7518__$1 = state_7518;
var statearr_7532_7558 = state_7518__$1;
(statearr_7532_7558[(2)] = inst_7512);

(statearr_7532_7558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7519 === (10))){
var inst_7504 = (state_7518[(2)]);
var state_7518__$1 = state_7518;
var statearr_7533_7559 = state_7518__$1;
(statearr_7533_7559[(2)] = inst_7504);

(statearr_7533_7559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7519 === (8))){
var inst_7501 = cljs.core.async.close_BANG_.call(null,to);
var state_7518__$1 = state_7518;
var statearr_7534_7560 = state_7518__$1;
(statearr_7534_7560[(2)] = inst_7501);

(statearr_7534_7560[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7379__auto___7546))
;
return ((function (switch__7267__auto__,c__7379__auto___7546){
return (function() {
var cljs$core$async$state_machine__7268__auto__ = null;
var cljs$core$async$state_machine__7268__auto____0 = (function (){
var statearr_7538 = [null,null,null,null,null,null,null,null];
(statearr_7538[(0)] = cljs$core$async$state_machine__7268__auto__);

(statearr_7538[(1)] = (1));

return statearr_7538;
});
var cljs$core$async$state_machine__7268__auto____1 = (function (state_7518){
while(true){
var ret_value__7269__auto__ = (function (){try{while(true){
var result__7270__auto__ = switch__7267__auto__.call(null,state_7518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7270__auto__;
}
break;
}
}catch (e7539){if((e7539 instanceof Object)){
var ex__7271__auto__ = e7539;
var statearr_7540_7561 = state_7518;
(statearr_7540_7561[(5)] = ex__7271__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7562 = state_7518;
state_7518 = G__7562;
continue;
} else {
return ret_value__7269__auto__;
}
break;
}
});
cljs$core$async$state_machine__7268__auto__ = function(state_7518){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7268__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7268__auto____1.call(this,state_7518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7268__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7268__auto____0;
cljs$core$async$state_machine__7268__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7268__auto____1;
return cljs$core$async$state_machine__7268__auto__;
})()
;})(switch__7267__auto__,c__7379__auto___7546))
})();
var state__7381__auto__ = (function (){var statearr_7541 = f__7380__auto__.call(null);
(statearr_7541[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7379__auto___7546);

return statearr_7541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7381__auto__);
});})(c__7379__auto___7546))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__7746){
var vec__7747 = p__7746;
var v = cljs.core.nth.call(null,vec__7747,(0),null);
var p = cljs.core.nth.call(null,vec__7747,(1),null);
var job = vec__7747;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7379__auto___7929 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7379__auto___7929,res,vec__7747,v,p,job,jobs,results){
return (function (){
var f__7380__auto__ = (function (){var switch__7267__auto__ = ((function (c__7379__auto___7929,res,vec__7747,v,p,job,jobs,results){
return (function (state_7752){
var state_val_7753 = (state_7752[(1)]);
if((state_val_7753 === (1))){
var state_7752__$1 = state_7752;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7752__$1,(2),res,v);
} else {
if((state_val_7753 === (2))){
var inst_7749 = (state_7752[(2)]);
var inst_7750 = cljs.core.async.close_BANG_.call(null,res);
var state_7752__$1 = (function (){var statearr_7754 = state_7752;
(statearr_7754[(7)] = inst_7749);

return statearr_7754;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7752__$1,inst_7750);
} else {
return null;
}
}
});})(c__7379__auto___7929,res,vec__7747,v,p,job,jobs,results))
;
return ((function (switch__7267__auto__,c__7379__auto___7929,res,vec__7747,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7268__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7268__auto____0 = (function (){
var statearr_7758 = [null,null,null,null,null,null,null,null];
(statearr_7758[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7268__auto__);

(statearr_7758[(1)] = (1));

return statearr_7758;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7268__auto____1 = (function (state_7752){
while(true){
var ret_value__7269__auto__ = (function (){try{while(true){
var result__7270__auto__ = switch__7267__auto__.call(null,state_7752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7270__auto__;
}
break;
}
}catch (e7759){if((e7759 instanceof Object)){
var ex__7271__auto__ = e7759;
var statearr_7760_7930 = state_7752;
(statearr_7760_7930[(5)] = ex__7271__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7759;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7931 = state_7752;
state_7752 = G__7931;
continue;
} else {
return ret_value__7269__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7268__auto__ = function(state_7752){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7268__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7268__auto____1.call(this,state_7752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7268__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7268__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7268__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7268__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7268__auto__;
})()
;})(switch__7267__auto__,c__7379__auto___7929,res,vec__7747,v,p,job,jobs,results))
})();
var state__7381__auto__ = (function (){var statearr_7761 = f__7380__auto__.call(null);
(statearr_7761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7379__auto___7929);

return statearr_7761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7381__auto__);
});})(c__7379__auto___7929,res,vec__7747,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__7762){
var vec__7763 = p__7762;
var v = cljs.core.nth.call(null,vec__7763,(0),null);
var p = cljs.core.nth.call(null,vec__7763,(1),null);
var job = vec__7763;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__6127__auto___7932 = n;
var __7933 = (0);
while(true){
if((__7933 < n__6127__auto___7932)){
var G__7764_7934 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__7764_7934) {
case "compute":
var c__7379__auto___7936 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__7933,c__7379__auto___7936,G__7764_7934,n__6127__auto___7932,jobs,results,process,async){
return (function (){
var f__7380__auto__ = (function (){var switch__7267__auto__ = ((function (__7933,c__7379__auto___7936,G__7764_7934,n__6127__auto___7932,jobs,results,process,async){
return (function (state_7777){
var state_val_7778 = (state_7777[(1)]);
if((state_val_7778 === (1))){
var state_7777__$1 = state_7777;
var statearr_7779_7937 = state_7777__$1;
(statearr_7779_7937[(2)] = null);

(statearr_7779_7937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7778 === (2))){
var state_7777__$1 = state_7777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7777__$1,(4),jobs);
} else {
if((state_val_7778 === (3))){
var inst_7775 = (state_7777[(2)]);
var state_7777__$1 = state_7777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7777__$1,inst_7775);
} else {
if((state_val_7778 === (4))){
var inst_7767 = (state_7777[(2)]);
var inst_7768 = process.call(null,inst_7767);
var state_7777__$1 = state_7777;
if(cljs.core.truth_(inst_7768)){
var statearr_7780_7938 = state_7777__$1;
(statearr_7780_7938[(1)] = (5));

} else {
var statearr_7781_7939 = state_7777__$1;
(statearr_7781_7939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7778 === (5))){
var state_7777__$1 = state_7777;
var statearr_7782_7940 = state_7777__$1;
(statearr_7782_7940[(2)] = null);

(statearr_7782_7940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7778 === (6))){
var state_7777__$1 = state_7777;
var statearr_7783_7941 = state_7777__$1;
(statearr_7783_7941[(2)] = null);

(statearr_7783_7941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7778 === (7))){
var inst_7773 = (state_7777[(2)]);
var state_7777__$1 = state_7777;
var statearr_7784_7942 = state_7777__$1;
(statearr_7784_7942[(2)] = inst_7773);

(statearr_7784_7942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__7933,c__7379__auto___7936,G__7764_7934,n__6127__auto___7932,jobs,results,process,async))
;
return ((function (__7933,switch__7267__auto__,c__7379__auto___7936,G__7764_7934,n__6127__auto___7932,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7268__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7268__auto____0 = (function (){
var statearr_7788 = [null,null,null,null,null,null,null];
(statearr_7788[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7268__auto__);

(statearr_7788[(1)] = (1));

return statearr_7788;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7268__auto____1 = (function (state_7777){
while(true){
var ret_value__7269__auto__ = (function (){try{while(true){
var result__7270__auto__ = switch__7267__auto__.call(null,state_7777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7270__auto__;
}
break;
}
}catch (e7789){if((e7789 instanceof Object)){
var ex__7271__auto__ = e7789;
var statearr_7790_7943 = state_7777;
(statearr_7790_7943[(5)] = ex__7271__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7944 = state_7777;
state_7777 = G__7944;
continue;
} else {
return ret_value__7269__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7268__auto__ = function(state_7777){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7268__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7268__auto____1.call(this,state_7777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7268__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7268__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7268__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7268__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7268__auto__;
})()
;})(__7933,switch__7267__auto__,c__7379__auto___7936,G__7764_7934,n__6127__auto___7932,jobs,results,process,async))
})();
var state__7381__auto__ = (function (){var statearr_7791 = f__7380__auto__.call(null);
(statearr_7791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7379__auto___7936);

return statearr_7791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7381__auto__);
});})(__7933,c__7379__auto___7936,G__7764_7934,n__6127__auto___7932,jobs,results,process,async))
);


break;
case "async":
var c__7379__auto___7945 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__7933,c__7379__auto___7945,G__7764_7934,n__6127__auto___7932,jobs,results,process,async){
return (function (){
var f__7380__auto__ = (function (){var switch__7267__auto__ = ((function (__7933,c__7379__auto___7945,G__7764_7934,n__6127__auto___7932,jobs,results,process,async){
return (function (state_7804){
var state_val_7805 = (state_7804[(1)]);
if((state_val_7805 === (1))){
var state_7804__$1 = state_7804;
var statearr_7806_7946 = state_7804__$1;
(statearr_7806_7946[(2)] = null);

(statearr_7806_7946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7805 === (2))){
var state_7804__$1 = state_7804;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7804__$1,(4),jobs);
} else {
if((state_val_7805 === (3))){
var inst_7802 = (state_7804[(2)]);
var state_7804__$1 = state_7804;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7804__$1,inst_7802);
} else {
if((state_val_7805 === (4))){
var inst_7794 = (state_7804[(2)]);
var inst_7795 = async.call(null,inst_7794);
var state_7804__$1 = state_7804;
if(cljs.core.truth_(inst_7795)){
var statearr_7807_7947 = state_7804__$1;
(statearr_7807_7947[(1)] = (5));

} else {
var statearr_7808_7948 = state_7804__$1;
(statearr_7808_7948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7805 === (5))){
var state_7804__$1 = state_7804;
var statearr_7809_7949 = state_7804__$1;
(statearr_7809_7949[(2)] = null);

(statearr_7809_7949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7805 === (6))){
var state_7804__$1 = state_7804;
var statearr_7810_7950 = state_7804__$1;
(statearr_7810_7950[(2)] = null);

(statearr_7810_7950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7805 === (7))){
var inst_7800 = (state_7804[(2)]);
var state_7804__$1 = state_7804;
var statearr_7811_7951 = state_7804__$1;
(statearr_7811_7951[(2)] = inst_7800);

(statearr_7811_7951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__7933,c__7379__auto___7945,G__7764_7934,n__6127__auto___7932,jobs,results,process,async))
;
return ((function (__7933,switch__7267__auto__,c__7379__auto___7945,G__7764_7934,n__6127__auto___7932,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7268__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7268__auto____0 = (function (){
var statearr_7815 = [null,null,null,null,null,null,null];
(statearr_7815[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7268__auto__);

(statearr_7815[(1)] = (1));

return statearr_7815;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7268__auto____1 = (function (state_7804){
while(true){
var ret_value__7269__auto__ = (function (){try{while(true){
var result__7270__auto__ = switch__7267__auto__.call(null,state_7804);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7270__auto__;
}
break;
}
}catch (e7816){if((e7816 instanceof Object)){
var ex__7271__auto__ = e7816;
var statearr_7817_7952 = state_7804;
(statearr_7817_7952[(5)] = ex__7271__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7816;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7953 = state_7804;
state_7804 = G__7953;
continue;
} else {
return ret_value__7269__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7268__auto__ = function(state_7804){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7268__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7268__auto____1.call(this,state_7804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7268__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7268__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7268__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7268__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7268__auto__;
})()
;})(__7933,switch__7267__auto__,c__7379__auto___7945,G__7764_7934,n__6127__auto___7932,jobs,results,process,async))
})();
var state__7381__auto__ = (function (){var statearr_7818 = f__7380__auto__.call(null);
(statearr_7818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7379__auto___7945);

return statearr_7818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7381__auto__);
});})(__7933,c__7379__auto___7945,G__7764_7934,n__6127__auto___7932,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__7954 = (__7933 + (1));
__7933 = G__7954;
continue;
} else {
}
break;
}

var c__7379__auto___7955 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7379__auto___7955,jobs,results,process,async){
return (function (){
var f__7380__auto__ = (function (){var switch__7267__auto__ = ((function (c__7379__auto___7955,jobs,results,process,async){
return (function (state_7840){
var state_val_7841 = (state_7840[(1)]);
if((state_val_7841 === (1))){
var state_7840__$1 = state_7840;
var statearr_7842_7956 = state_7840__$1;
(statearr_7842_7956[(2)] = null);

(statearr_7842_7956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7841 === (2))){
var state_7840__$1 = state_7840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7840__$1,(4),from);
} else {
if((state_val_7841 === (3))){
var inst_7838 = (state_7840[(2)]);
var state_7840__$1 = state_7840;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7840__$1,inst_7838);
} else {
if((state_val_7841 === (4))){
var inst_7821 = (state_7840[(7)]);
var inst_7821__$1 = (state_7840[(2)]);
var inst_7822 = (inst_7821__$1 == null);
var state_7840__$1 = (function (){var statearr_7843 = state_7840;
(statearr_7843[(7)] = inst_7821__$1);

return statearr_7843;
})();
if(cljs.core.truth_(inst_7822)){
var statearr_7844_7957 = state_7840__$1;
(statearr_7844_7957[(1)] = (5));

} else {
var statearr_7845_7958 = state_7840__$1;
(statearr_7845_7958[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7841 === (5))){
var inst_7824 = cljs.core.async.close_BANG_.call(null,jobs);
var state_7840__$1 = state_7840;
var statearr_7846_7959 = state_7840__$1;
(statearr_7846_7959[(2)] = inst_7824);

(statearr_7846_7959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7841 === (6))){
var inst_7826 = (state_7840[(8)]);
var inst_7821 = (state_7840[(7)]);
var inst_7826__$1 = cljs.core.async.chan.call(null,(1));
var inst_7827 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7828 = [inst_7821,inst_7826__$1];
var inst_7829 = (new cljs.core.PersistentVector(null,2,(5),inst_7827,inst_7828,null));
var state_7840__$1 = (function (){var statearr_7847 = state_7840;
(statearr_7847[(8)] = inst_7826__$1);

return statearr_7847;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7840__$1,(8),jobs,inst_7829);
} else {
if((state_val_7841 === (7))){
var inst_7836 = (state_7840[(2)]);
var state_7840__$1 = state_7840;
var statearr_7848_7960 = state_7840__$1;
(statearr_7848_7960[(2)] = inst_7836);

(statearr_7848_7960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7841 === (8))){
var inst_7826 = (state_7840[(8)]);
var inst_7831 = (state_7840[(2)]);
var state_7840__$1 = (function (){var statearr_7849 = state_7840;
(statearr_7849[(9)] = inst_7831);

return statearr_7849;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7840__$1,(9),results,inst_7826);
} else {
if((state_val_7841 === (9))){
var inst_7833 = (state_7840[(2)]);
var state_7840__$1 = (function (){var statearr_7850 = state_7840;
(statearr_7850[(10)] = inst_7833);

return statearr_7850;
})();
var statearr_7851_7961 = state_7840__$1;
(statearr_7851_7961[(2)] = null);

(statearr_7851_7961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__7379__auto___7955,jobs,results,process,async))
;
return ((function (switch__7267__auto__,c__7379__auto___7955,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7268__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7268__auto____0 = (function (){
var statearr_7855 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_7855[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7268__auto__);

(statearr_7855[(1)] = (1));

return statearr_7855;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7268__auto____1 = (function (state_7840){
while(true){
var ret_value__7269__auto__ = (function (){try{while(true){
var result__7270__auto__ = switch__7267__auto__.call(null,state_7840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7270__auto__;
}
break;
}
}catch (e7856){if((e7856 instanceof Object)){
var ex__7271__auto__ = e7856;
var statearr_7857_7962 = state_7840;
(statearr_7857_7962[(5)] = ex__7271__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7963 = state_7840;
state_7840 = G__7963;
continue;
} else {
return ret_value__7269__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7268__auto__ = function(state_7840){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7268__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7268__auto____1.call(this,state_7840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7268__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7268__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7268__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7268__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7268__auto__;
})()
;})(switch__7267__auto__,c__7379__auto___7955,jobs,results,process,async))
})();
var state__7381__auto__ = (function (){var statearr_7858 = f__7380__auto__.call(null);
(statearr_7858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7379__auto___7955);

return statearr_7858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7381__auto__);
});})(c__7379__auto___7955,jobs,results,process,async))
);


var c__7379__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7379__auto__,jobs,results,process,async){
return (function (){
var f__7380__auto__ = (function (){var switch__7267__auto__ = ((function (c__7379__auto__,jobs,results,process,async){
return (function (state_7896){
var state_val_7897 = (state_7896[(1)]);
if((state_val_7897 === (7))){
var inst_7892 = (state_7896[(2)]);
var state_7896__$1 = state_7896;
var statearr_7898_7964 = state_7896__$1;
(statearr_7898_7964[(2)] = inst_7892);

(statearr_7898_7964[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7897 === (20))){
var state_7896__$1 = state_7896;
var statearr_7899_7965 = state_7896__$1;
(statearr_7899_7965[(2)] = null);

(statearr_7899_7965[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7897 === (1))){
var state_7896__$1 = state_7896;
var statearr_7900_7966 = state_7896__$1;
(statearr_7900_7966[(2)] = null);

(statearr_7900_7966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7897 === (4))){
var inst_7861 = (state_7896[(7)]);
var inst_7861__$1 = (state_7896[(2)]);
var inst_7862 = (inst_7861__$1 == null);
var state_7896__$1 = (function (){var statearr_7901 = state_7896;
(statearr_7901[(7)] = inst_7861__$1);

return statearr_7901;
})();
if(cljs.core.truth_(inst_7862)){
var statearr_7902_7967 = state_7896__$1;
(statearr_7902_7967[(1)] = (5));

} else {
var statearr_7903_7968 = state_7896__$1;
(statearr_7903_7968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7897 === (15))){
var inst_7874 = (state_7896[(8)]);
var state_7896__$1 = state_7896;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7896__$1,(18),to,inst_7874);
} else {
if((state_val_7897 === (21))){
var inst_7887 = (state_7896[(2)]);
var state_7896__$1 = state_7896;
var statearr_7904_7969 = state_7896__$1;
(statearr_7904_7969[(2)] = inst_7887);

(statearr_7904_7969[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7897 === (13))){
var inst_7889 = (state_7896[(2)]);
var state_7896__$1 = (function (){var statearr_7905 = state_7896;
(statearr_7905[(9)] = inst_7889);

return statearr_7905;
})();
var statearr_7906_7970 = state_7896__$1;
(statearr_7906_7970[(2)] = null);

(statearr_7906_7970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7897 === (6))){
var inst_7861 = (state_7896[(7)]);
var state_7896__$1 = state_7896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7896__$1,(11),inst_7861);
} else {
if((state_val_7897 === (17))){
var inst_7882 = (state_7896[(2)]);
var state_7896__$1 = state_7896;
if(cljs.core.truth_(inst_7882)){
var statearr_7907_7971 = state_7896__$1;
(statearr_7907_7971[(1)] = (19));

} else {
var statearr_7908_7972 = state_7896__$1;
(statearr_7908_7972[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7897 === (3))){
var inst_7894 = (state_7896[(2)]);
var state_7896__$1 = state_7896;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7896__$1,inst_7894);
} else {
if((state_val_7897 === (12))){
var inst_7871 = (state_7896[(10)]);
var state_7896__$1 = state_7896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7896__$1,(14),inst_7871);
} else {
if((state_val_7897 === (2))){
var state_7896__$1 = state_7896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7896__$1,(4),results);
} else {
if((state_val_7897 === (19))){
var state_7896__$1 = state_7896;
var statearr_7909_7973 = state_7896__$1;
(statearr_7909_7973[(2)] = null);

(statearr_7909_7973[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7897 === (11))){
var inst_7871 = (state_7896[(2)]);
var state_7896__$1 = (function (){var statearr_7910 = state_7896;
(statearr_7910[(10)] = inst_7871);

return statearr_7910;
})();
var statearr_7911_7974 = state_7896__$1;
(statearr_7911_7974[(2)] = null);

(statearr_7911_7974[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7897 === (9))){
var state_7896__$1 = state_7896;
var statearr_7912_7975 = state_7896__$1;
(statearr_7912_7975[(2)] = null);

(statearr_7912_7975[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7897 === (5))){
var state_7896__$1 = state_7896;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7913_7976 = state_7896__$1;
(statearr_7913_7976[(1)] = (8));

} else {
var statearr_7914_7977 = state_7896__$1;
(statearr_7914_7977[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7897 === (14))){
var inst_7874 = (state_7896[(8)]);
var inst_7876 = (state_7896[(11)]);
var inst_7874__$1 = (state_7896[(2)]);
var inst_7875 = (inst_7874__$1 == null);
var inst_7876__$1 = cljs.core.not.call(null,inst_7875);
var state_7896__$1 = (function (){var statearr_7915 = state_7896;
(statearr_7915[(8)] = inst_7874__$1);

(statearr_7915[(11)] = inst_7876__$1);

return statearr_7915;
})();
if(inst_7876__$1){
var statearr_7916_7978 = state_7896__$1;
(statearr_7916_7978[(1)] = (15));

} else {
var statearr_7917_7979 = state_7896__$1;
(statearr_7917_7979[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7897 === (16))){
var inst_7876 = (state_7896[(11)]);
var state_7896__$1 = state_7896;
var statearr_7918_7980 = state_7896__$1;
(statearr_7918_7980[(2)] = inst_7876);

(statearr_7918_7980[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7897 === (10))){
var inst_7868 = (state_7896[(2)]);
var state_7896__$1 = state_7896;
var statearr_7919_7981 = state_7896__$1;
(statearr_7919_7981[(2)] = inst_7868);

(statearr_7919_7981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7897 === (18))){
var inst_7879 = (state_7896[(2)]);
var state_7896__$1 = state_7896;
var statearr_7920_7982 = state_7896__$1;
(statearr_7920_7982[(2)] = inst_7879);

(statearr_7920_7982[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7897 === (8))){
var inst_7865 = cljs.core.async.close_BANG_.call(null,to);
var state_7896__$1 = state_7896;
var statearr_7921_7983 = state_7896__$1;
(statearr_7921_7983[(2)] = inst_7865);

(statearr_7921_7983[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7379__auto__,jobs,results,process,async))
;
return ((function (switch__7267__auto__,c__7379__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7268__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7268__auto____0 = (function (){
var statearr_7925 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7925[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7268__auto__);

(statearr_7925[(1)] = (1));

return statearr_7925;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7268__auto____1 = (function (state_7896){
while(true){
var ret_value__7269__auto__ = (function (){try{while(true){
var result__7270__auto__ = switch__7267__auto__.call(null,state_7896);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7270__auto__;
}
break;
}
}catch (e7926){if((e7926 instanceof Object)){
var ex__7271__auto__ = e7926;
var statearr_7927_7984 = state_7896;
(statearr_7927_7984[(5)] = ex__7271__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7985 = state_7896;
state_7896 = G__7985;
continue;
} else {
return ret_value__7269__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7268__auto__ = function(state_7896){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7268__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7268__auto____1.call(this,state_7896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7268__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7268__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7268__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7268__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7268__auto__;
})()
;})(switch__7267__auto__,c__7379__auto__,jobs,results,process,async))
})();
var state__7381__auto__ = (function (){var statearr_7928 = f__7380__auto__.call(null);
(statearr_7928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7379__auto__);

return statearr_7928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7381__auto__);
});})(c__7379__auto__,jobs,results,process,async))
);

return c__7379__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args7986 = [];
var len__6282__auto___7989 = arguments.length;
var i__6283__auto___7990 = (0);
while(true){
if((i__6283__auto___7990 < len__6282__auto___7989)){
args7986.push((arguments[i__6283__auto___7990]));

var G__7991 = (i__6283__auto___7990 + (1));
i__6283__auto___7990 = G__7991;
continue;
} else {
}
break;
}

var G__7988 = args7986.length;
switch (G__7988) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7986.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args7993 = [];
var len__6282__auto___7996 = arguments.length;
var i__6283__auto___7997 = (0);
while(true){
if((i__6283__auto___7997 < len__6282__auto___7996)){
args7993.push((arguments[i__6283__auto___7997]));

var G__7998 = (i__6283__auto___7997 + (1));
i__6283__auto___7997 = G__7998;
continue;
} else {
}
break;
}

var G__7995 = args7993.length;
switch (G__7995) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7993.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args8000 = [];
var len__6282__auto___8053 = arguments.length;
var i__6283__auto___8054 = (0);
while(true){
if((i__6283__auto___8054 < len__6282__auto___8053)){
args8000.push((arguments[i__6283__auto___8054]));

var G__8055 = (i__6283__auto___8054 + (1));
i__6283__auto___8054 = G__8055;
continue;
} else {
}
break;
}

var G__8002 = args8000.length;
switch (G__8002) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8000.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__7379__auto___8057 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7379__auto___8057,tc,fc){
return (function (){
var f__7380__auto__ = (function (){var switch__7267__auto__ = ((function (c__7379__auto___8057,tc,fc){
return (function (state_8028){
var state_val_8029 = (state_8028[(1)]);
if((state_val_8029 === (7))){
var inst_8024 = (state_8028[(2)]);
var state_8028__$1 = state_8028;
var statearr_8030_8058 = state_8028__$1;
(statearr_8030_8058[(2)] = inst_8024);

(statearr_8030_8058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8029 === (1))){
var state_8028__$1 = state_8028;
var statearr_8031_8059 = state_8028__$1;
(statearr_8031_8059[(2)] = null);

(statearr_8031_8059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8029 === (4))){
var inst_8005 = (state_8028[(7)]);
var inst_8005__$1 = (state_8028[(2)]);
var inst_8006 = (inst_8005__$1 == null);
var state_8028__$1 = (function (){var statearr_8032 = state_8028;
(statearr_8032[(7)] = inst_8005__$1);

return statearr_8032;
})();
if(cljs.core.truth_(inst_8006)){
var statearr_8033_8060 = state_8028__$1;
(statearr_8033_8060[(1)] = (5));

} else {
var statearr_8034_8061 = state_8028__$1;
(statearr_8034_8061[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8029 === (13))){
var state_8028__$1 = state_8028;
var statearr_8035_8062 = state_8028__$1;
(statearr_8035_8062[(2)] = null);

(statearr_8035_8062[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8029 === (6))){
var inst_8005 = (state_8028[(7)]);
var inst_8011 = p.call(null,inst_8005);
var state_8028__$1 = state_8028;
if(cljs.core.truth_(inst_8011)){
var statearr_8036_8063 = state_8028__$1;
(statearr_8036_8063[(1)] = (9));

} else {
var statearr_8037_8064 = state_8028__$1;
(statearr_8037_8064[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8029 === (3))){
var inst_8026 = (state_8028[(2)]);
var state_8028__$1 = state_8028;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8028__$1,inst_8026);
} else {
if((state_val_8029 === (12))){
var state_8028__$1 = state_8028;
var statearr_8038_8065 = state_8028__$1;
(statearr_8038_8065[(2)] = null);

(statearr_8038_8065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8029 === (2))){
var state_8028__$1 = state_8028;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8028__$1,(4),ch);
} else {
if((state_val_8029 === (11))){
var inst_8005 = (state_8028[(7)]);
var inst_8015 = (state_8028[(2)]);
var state_8028__$1 = state_8028;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8028__$1,(8),inst_8015,inst_8005);
} else {
if((state_val_8029 === (9))){
var state_8028__$1 = state_8028;
var statearr_8039_8066 = state_8028__$1;
(statearr_8039_8066[(2)] = tc);

(statearr_8039_8066[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8029 === (5))){
var inst_8008 = cljs.core.async.close_BANG_.call(null,tc);
var inst_8009 = cljs.core.async.close_BANG_.call(null,fc);
var state_8028__$1 = (function (){var statearr_8040 = state_8028;
(statearr_8040[(8)] = inst_8008);

return statearr_8040;
})();
var statearr_8041_8067 = state_8028__$1;
(statearr_8041_8067[(2)] = inst_8009);

(statearr_8041_8067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8029 === (14))){
var inst_8022 = (state_8028[(2)]);
var state_8028__$1 = state_8028;
var statearr_8042_8068 = state_8028__$1;
(statearr_8042_8068[(2)] = inst_8022);

(statearr_8042_8068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8029 === (10))){
var state_8028__$1 = state_8028;
var statearr_8043_8069 = state_8028__$1;
(statearr_8043_8069[(2)] = fc);

(statearr_8043_8069[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8029 === (8))){
var inst_8017 = (state_8028[(2)]);
var state_8028__$1 = state_8028;
if(cljs.core.truth_(inst_8017)){
var statearr_8044_8070 = state_8028__$1;
(statearr_8044_8070[(1)] = (12));

} else {
var statearr_8045_8071 = state_8028__$1;
(statearr_8045_8071[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7379__auto___8057,tc,fc))
;
return ((function (switch__7267__auto__,c__7379__auto___8057,tc,fc){
return (function() {
var cljs$core$async$state_machine__7268__auto__ = null;
var cljs$core$async$state_machine__7268__auto____0 = (function (){
var statearr_8049 = [null,null,null,null,null,null,null,null,null];
(statearr_8049[(0)] = cljs$core$async$state_machine__7268__auto__);

(statearr_8049[(1)] = (1));

return statearr_8049;
});
var cljs$core$async$state_machine__7268__auto____1 = (function (state_8028){
while(true){
var ret_value__7269__auto__ = (function (){try{while(true){
var result__7270__auto__ = switch__7267__auto__.call(null,state_8028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7270__auto__;
}
break;
}
}catch (e8050){if((e8050 instanceof Object)){
var ex__7271__auto__ = e8050;
var statearr_8051_8072 = state_8028;
(statearr_8051_8072[(5)] = ex__7271__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8028);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8050;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8073 = state_8028;
state_8028 = G__8073;
continue;
} else {
return ret_value__7269__auto__;
}
break;
}
});
cljs$core$async$state_machine__7268__auto__ = function(state_8028){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7268__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7268__auto____1.call(this,state_8028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7268__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7268__auto____0;
cljs$core$async$state_machine__7268__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7268__auto____1;
return cljs$core$async$state_machine__7268__auto__;
})()
;})(switch__7267__auto__,c__7379__auto___8057,tc,fc))
})();
var state__7381__auto__ = (function (){var statearr_8052 = f__7380__auto__.call(null);
(statearr_8052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7379__auto___8057);

return statearr_8052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7381__auto__);
});})(c__7379__auto___8057,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__7379__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7379__auto__){
return (function (){
var f__7380__auto__ = (function (){var switch__7267__auto__ = ((function (c__7379__auto__){
return (function (state_8137){
var state_val_8138 = (state_8137[(1)]);
if((state_val_8138 === (7))){
var inst_8133 = (state_8137[(2)]);
var state_8137__$1 = state_8137;
var statearr_8139_8160 = state_8137__$1;
(statearr_8139_8160[(2)] = inst_8133);

(statearr_8139_8160[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8138 === (1))){
var inst_8117 = init;
var state_8137__$1 = (function (){var statearr_8140 = state_8137;
(statearr_8140[(7)] = inst_8117);

return statearr_8140;
})();
var statearr_8141_8161 = state_8137__$1;
(statearr_8141_8161[(2)] = null);

(statearr_8141_8161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8138 === (4))){
var inst_8120 = (state_8137[(8)]);
var inst_8120__$1 = (state_8137[(2)]);
var inst_8121 = (inst_8120__$1 == null);
var state_8137__$1 = (function (){var statearr_8142 = state_8137;
(statearr_8142[(8)] = inst_8120__$1);

return statearr_8142;
})();
if(cljs.core.truth_(inst_8121)){
var statearr_8143_8162 = state_8137__$1;
(statearr_8143_8162[(1)] = (5));

} else {
var statearr_8144_8163 = state_8137__$1;
(statearr_8144_8163[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8138 === (6))){
var inst_8117 = (state_8137[(7)]);
var inst_8124 = (state_8137[(9)]);
var inst_8120 = (state_8137[(8)]);
var inst_8124__$1 = f.call(null,inst_8117,inst_8120);
var inst_8125 = cljs.core.reduced_QMARK_.call(null,inst_8124__$1);
var state_8137__$1 = (function (){var statearr_8145 = state_8137;
(statearr_8145[(9)] = inst_8124__$1);

return statearr_8145;
})();
if(inst_8125){
var statearr_8146_8164 = state_8137__$1;
(statearr_8146_8164[(1)] = (8));

} else {
var statearr_8147_8165 = state_8137__$1;
(statearr_8147_8165[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8138 === (3))){
var inst_8135 = (state_8137[(2)]);
var state_8137__$1 = state_8137;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8137__$1,inst_8135);
} else {
if((state_val_8138 === (2))){
var state_8137__$1 = state_8137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8137__$1,(4),ch);
} else {
if((state_val_8138 === (9))){
var inst_8124 = (state_8137[(9)]);
var inst_8117 = inst_8124;
var state_8137__$1 = (function (){var statearr_8148 = state_8137;
(statearr_8148[(7)] = inst_8117);

return statearr_8148;
})();
var statearr_8149_8166 = state_8137__$1;
(statearr_8149_8166[(2)] = null);

(statearr_8149_8166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8138 === (5))){
var inst_8117 = (state_8137[(7)]);
var state_8137__$1 = state_8137;
var statearr_8150_8167 = state_8137__$1;
(statearr_8150_8167[(2)] = inst_8117);

(statearr_8150_8167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8138 === (10))){
var inst_8131 = (state_8137[(2)]);
var state_8137__$1 = state_8137;
var statearr_8151_8168 = state_8137__$1;
(statearr_8151_8168[(2)] = inst_8131);

(statearr_8151_8168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8138 === (8))){
var inst_8124 = (state_8137[(9)]);
var inst_8127 = cljs.core.deref.call(null,inst_8124);
var state_8137__$1 = state_8137;
var statearr_8152_8169 = state_8137__$1;
(statearr_8152_8169[(2)] = inst_8127);

(statearr_8152_8169[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__7379__auto__))
;
return ((function (switch__7267__auto__,c__7379__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__7268__auto__ = null;
var cljs$core$async$reduce_$_state_machine__7268__auto____0 = (function (){
var statearr_8156 = [null,null,null,null,null,null,null,null,null,null];
(statearr_8156[(0)] = cljs$core$async$reduce_$_state_machine__7268__auto__);

(statearr_8156[(1)] = (1));

return statearr_8156;
});
var cljs$core$async$reduce_$_state_machine__7268__auto____1 = (function (state_8137){
while(true){
var ret_value__7269__auto__ = (function (){try{while(true){
var result__7270__auto__ = switch__7267__auto__.call(null,state_8137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7270__auto__;
}
break;
}
}catch (e8157){if((e8157 instanceof Object)){
var ex__7271__auto__ = e8157;
var statearr_8158_8170 = state_8137;
(statearr_8158_8170[(5)] = ex__7271__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8157;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8171 = state_8137;
state_8137 = G__8171;
continue;
} else {
return ret_value__7269__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__7268__auto__ = function(state_8137){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__7268__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__7268__auto____1.call(this,state_8137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__7268__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__7268__auto____0;
cljs$core$async$reduce_$_state_machine__7268__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__7268__auto____1;
return cljs$core$async$reduce_$_state_machine__7268__auto__;
})()
;})(switch__7267__auto__,c__7379__auto__))
})();
var state__7381__auto__ = (function (){var statearr_8159 = f__7380__auto__.call(null);
(statearr_8159[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7379__auto__);

return statearr_8159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7381__auto__);
});})(c__7379__auto__))
);

return c__7379__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args8172 = [];
var len__6282__auto___8224 = arguments.length;
var i__6283__auto___8225 = (0);
while(true){
if((i__6283__auto___8225 < len__6282__auto___8224)){
args8172.push((arguments[i__6283__auto___8225]));

var G__8226 = (i__6283__auto___8225 + (1));
i__6283__auto___8225 = G__8226;
continue;
} else {
}
break;
}

var G__8174 = args8172.length;
switch (G__8174) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8172.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__7379__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7379__auto__){
return (function (){
var f__7380__auto__ = (function (){var switch__7267__auto__ = ((function (c__7379__auto__){
return (function (state_8199){
var state_val_8200 = (state_8199[(1)]);
if((state_val_8200 === (7))){
var inst_8181 = (state_8199[(2)]);
var state_8199__$1 = state_8199;
var statearr_8201_8228 = state_8199__$1;
(statearr_8201_8228[(2)] = inst_8181);

(statearr_8201_8228[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8200 === (1))){
var inst_8175 = cljs.core.seq.call(null,coll);
var inst_8176 = inst_8175;
var state_8199__$1 = (function (){var statearr_8202 = state_8199;
(statearr_8202[(7)] = inst_8176);

return statearr_8202;
})();
var statearr_8203_8229 = state_8199__$1;
(statearr_8203_8229[(2)] = null);

(statearr_8203_8229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8200 === (4))){
var inst_8176 = (state_8199[(7)]);
var inst_8179 = cljs.core.first.call(null,inst_8176);
var state_8199__$1 = state_8199;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8199__$1,(7),ch,inst_8179);
} else {
if((state_val_8200 === (13))){
var inst_8193 = (state_8199[(2)]);
var state_8199__$1 = state_8199;
var statearr_8204_8230 = state_8199__$1;
(statearr_8204_8230[(2)] = inst_8193);

(statearr_8204_8230[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8200 === (6))){
var inst_8184 = (state_8199[(2)]);
var state_8199__$1 = state_8199;
if(cljs.core.truth_(inst_8184)){
var statearr_8205_8231 = state_8199__$1;
(statearr_8205_8231[(1)] = (8));

} else {
var statearr_8206_8232 = state_8199__$1;
(statearr_8206_8232[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8200 === (3))){
var inst_8197 = (state_8199[(2)]);
var state_8199__$1 = state_8199;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8199__$1,inst_8197);
} else {
if((state_val_8200 === (12))){
var state_8199__$1 = state_8199;
var statearr_8207_8233 = state_8199__$1;
(statearr_8207_8233[(2)] = null);

(statearr_8207_8233[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8200 === (2))){
var inst_8176 = (state_8199[(7)]);
var state_8199__$1 = state_8199;
if(cljs.core.truth_(inst_8176)){
var statearr_8208_8234 = state_8199__$1;
(statearr_8208_8234[(1)] = (4));

} else {
var statearr_8209_8235 = state_8199__$1;
(statearr_8209_8235[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8200 === (11))){
var inst_8190 = cljs.core.async.close_BANG_.call(null,ch);
var state_8199__$1 = state_8199;
var statearr_8210_8236 = state_8199__$1;
(statearr_8210_8236[(2)] = inst_8190);

(statearr_8210_8236[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8200 === (9))){
var state_8199__$1 = state_8199;
if(cljs.core.truth_(close_QMARK_)){
var statearr_8211_8237 = state_8199__$1;
(statearr_8211_8237[(1)] = (11));

} else {
var statearr_8212_8238 = state_8199__$1;
(statearr_8212_8238[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8200 === (5))){
var inst_8176 = (state_8199[(7)]);
var state_8199__$1 = state_8199;
var statearr_8213_8239 = state_8199__$1;
(statearr_8213_8239[(2)] = inst_8176);

(statearr_8213_8239[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8200 === (10))){
var inst_8195 = (state_8199[(2)]);
var state_8199__$1 = state_8199;
var statearr_8214_8240 = state_8199__$1;
(statearr_8214_8240[(2)] = inst_8195);

(statearr_8214_8240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8200 === (8))){
var inst_8176 = (state_8199[(7)]);
var inst_8186 = cljs.core.next.call(null,inst_8176);
var inst_8176__$1 = inst_8186;
var state_8199__$1 = (function (){var statearr_8215 = state_8199;
(statearr_8215[(7)] = inst_8176__$1);

return statearr_8215;
})();
var statearr_8216_8241 = state_8199__$1;
(statearr_8216_8241[(2)] = null);

(statearr_8216_8241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7379__auto__))
;
return ((function (switch__7267__auto__,c__7379__auto__){
return (function() {
var cljs$core$async$state_machine__7268__auto__ = null;
var cljs$core$async$state_machine__7268__auto____0 = (function (){
var statearr_8220 = [null,null,null,null,null,null,null,null];
(statearr_8220[(0)] = cljs$core$async$state_machine__7268__auto__);

(statearr_8220[(1)] = (1));

return statearr_8220;
});
var cljs$core$async$state_machine__7268__auto____1 = (function (state_8199){
while(true){
var ret_value__7269__auto__ = (function (){try{while(true){
var result__7270__auto__ = switch__7267__auto__.call(null,state_8199);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7270__auto__;
}
break;
}
}catch (e8221){if((e8221 instanceof Object)){
var ex__7271__auto__ = e8221;
var statearr_8222_8242 = state_8199;
(statearr_8222_8242[(5)] = ex__7271__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8221;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8243 = state_8199;
state_8199 = G__8243;
continue;
} else {
return ret_value__7269__auto__;
}
break;
}
});
cljs$core$async$state_machine__7268__auto__ = function(state_8199){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7268__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7268__auto____1.call(this,state_8199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7268__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7268__auto____0;
cljs$core$async$state_machine__7268__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7268__auto____1;
return cljs$core$async$state_machine__7268__auto__;
})()
;})(switch__7267__auto__,c__7379__auto__))
})();
var state__7381__auto__ = (function (){var statearr_8223 = f__7380__auto__.call(null);
(statearr_8223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7379__auto__);

return statearr_8223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7381__auto__);
});})(c__7379__auto__))
);

return c__7379__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__5876__auto__ = (((_ == null))?null:_);
var m__5877__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5876__auto__)]);
if(!((m__5877__auto__ == null))){
return m__5877__auto__.call(null,_);
} else {
var m__5877__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5877__auto____$1 == null))){
return m__5877__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__5876__auto__ = (((m == null))?null:m);
var m__5877__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5876__auto__)]);
if(!((m__5877__auto__ == null))){
return m__5877__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5877__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5877__auto____$1 == null))){
return m__5877__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__5876__auto__ = (((m == null))?null:m);
var m__5877__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5876__auto__)]);
if(!((m__5877__auto__ == null))){
return m__5877__auto__.call(null,m,ch);
} else {
var m__5877__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5877__auto____$1 == null))){
return m__5877__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__5876__auto__ = (((m == null))?null:m);
var m__5877__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5876__auto__)]);
if(!((m__5877__auto__ == null))){
return m__5877__auto__.call(null,m);
} else {
var m__5877__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5877__auto____$1 == null))){
return m__5877__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async8465 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8465 = (function (mult,ch,cs,meta8466){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta8466 = meta8466;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_8467,meta8466__$1){
var self__ = this;
var _8467__$1 = this;
return (new cljs.core.async.t_cljs$core$async8465(self__.mult,self__.ch,self__.cs,meta8466__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async8465.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_8467){
var self__ = this;
var _8467__$1 = this;
return self__.meta8466;
});})(cs))
;

cljs.core.async.t_cljs$core$async8465.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async8465.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async8465.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async8465.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8465.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8465.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8465.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta8466","meta8466",766220148,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async8465.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8465.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8465";

cljs.core.async.t_cljs$core$async8465.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5819__auto__,writer__5820__auto__,opt__5821__auto__){
return cljs.core._write.call(null,writer__5820__auto__,"cljs.core.async/t_cljs$core$async8465");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async8465 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async8465(mult__$1,ch__$1,cs__$1,meta8466){
return (new cljs.core.async.t_cljs$core$async8465(mult__$1,ch__$1,cs__$1,meta8466));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async8465(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__7379__auto___8686 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7379__auto___8686,cs,m,dchan,dctr,done){
return (function (){
var f__7380__auto__ = (function (){var switch__7267__auto__ = ((function (c__7379__auto___8686,cs,m,dchan,dctr,done){
return (function (state_8598){
var state_val_8599 = (state_8598[(1)]);
if((state_val_8599 === (7))){
var inst_8594 = (state_8598[(2)]);
var state_8598__$1 = state_8598;
var statearr_8600_8687 = state_8598__$1;
(statearr_8600_8687[(2)] = inst_8594);

(statearr_8600_8687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8599 === (20))){
var inst_8499 = (state_8598[(7)]);
var inst_8509 = cljs.core.first.call(null,inst_8499);
var inst_8510 = cljs.core.nth.call(null,inst_8509,(0),null);
var inst_8511 = cljs.core.nth.call(null,inst_8509,(1),null);
var state_8598__$1 = (function (){var statearr_8601 = state_8598;
(statearr_8601[(8)] = inst_8510);

return statearr_8601;
})();
if(cljs.core.truth_(inst_8511)){
var statearr_8602_8688 = state_8598__$1;
(statearr_8602_8688[(1)] = (22));

} else {
var statearr_8603_8689 = state_8598__$1;
(statearr_8603_8689[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8599 === (27))){
var inst_8470 = (state_8598[(9)]);
var inst_8539 = (state_8598[(10)]);
var inst_8541 = (state_8598[(11)]);
var inst_8546 = (state_8598[(12)]);
var inst_8546__$1 = cljs.core._nth.call(null,inst_8539,inst_8541);
var inst_8547 = cljs.core.async.put_BANG_.call(null,inst_8546__$1,inst_8470,done);
var state_8598__$1 = (function (){var statearr_8604 = state_8598;
(statearr_8604[(12)] = inst_8546__$1);

return statearr_8604;
})();
if(cljs.core.truth_(inst_8547)){
var statearr_8605_8690 = state_8598__$1;
(statearr_8605_8690[(1)] = (30));

} else {
var statearr_8606_8691 = state_8598__$1;
(statearr_8606_8691[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8599 === (1))){
var state_8598__$1 = state_8598;
var statearr_8607_8692 = state_8598__$1;
(statearr_8607_8692[(2)] = null);

(statearr_8607_8692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8599 === (24))){
var inst_8499 = (state_8598[(7)]);
var inst_8516 = (state_8598[(2)]);
var inst_8517 = cljs.core.next.call(null,inst_8499);
var inst_8479 = inst_8517;
var inst_8480 = null;
var inst_8481 = (0);
var inst_8482 = (0);
var state_8598__$1 = (function (){var statearr_8608 = state_8598;
(statearr_8608[(13)] = inst_8516);

(statearr_8608[(14)] = inst_8482);

(statearr_8608[(15)] = inst_8481);

(statearr_8608[(16)] = inst_8479);

(statearr_8608[(17)] = inst_8480);

return statearr_8608;
})();
var statearr_8609_8693 = state_8598__$1;
(statearr_8609_8693[(2)] = null);

(statearr_8609_8693[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8599 === (39))){
var state_8598__$1 = state_8598;
var statearr_8613_8694 = state_8598__$1;
(statearr_8613_8694[(2)] = null);

(statearr_8613_8694[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8599 === (4))){
var inst_8470 = (state_8598[(9)]);
var inst_8470__$1 = (state_8598[(2)]);
var inst_8471 = (inst_8470__$1 == null);
var state_8598__$1 = (function (){var statearr_8614 = state_8598;
(statearr_8614[(9)] = inst_8470__$1);

return statearr_8614;
})();
if(cljs.core.truth_(inst_8471)){
var statearr_8615_8695 = state_8598__$1;
(statearr_8615_8695[(1)] = (5));

} else {
var statearr_8616_8696 = state_8598__$1;
(statearr_8616_8696[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8599 === (15))){
var inst_8482 = (state_8598[(14)]);
var inst_8481 = (state_8598[(15)]);
var inst_8479 = (state_8598[(16)]);
var inst_8480 = (state_8598[(17)]);
var inst_8495 = (state_8598[(2)]);
var inst_8496 = (inst_8482 + (1));
var tmp8610 = inst_8481;
var tmp8611 = inst_8479;
var tmp8612 = inst_8480;
var inst_8479__$1 = tmp8611;
var inst_8480__$1 = tmp8612;
var inst_8481__$1 = tmp8610;
var inst_8482__$1 = inst_8496;
var state_8598__$1 = (function (){var statearr_8617 = state_8598;
(statearr_8617[(14)] = inst_8482__$1);

(statearr_8617[(18)] = inst_8495);

(statearr_8617[(15)] = inst_8481__$1);

(statearr_8617[(16)] = inst_8479__$1);

(statearr_8617[(17)] = inst_8480__$1);

return statearr_8617;
})();
var statearr_8618_8697 = state_8598__$1;
(statearr_8618_8697[(2)] = null);

(statearr_8618_8697[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8599 === (21))){
var inst_8520 = (state_8598[(2)]);
var state_8598__$1 = state_8598;
var statearr_8622_8698 = state_8598__$1;
(statearr_8622_8698[(2)] = inst_8520);

(statearr_8622_8698[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8599 === (31))){
var inst_8546 = (state_8598[(12)]);
var inst_8550 = done.call(null,null);
var inst_8551 = cljs.core.async.untap_STAR_.call(null,m,inst_8546);
var state_8598__$1 = (function (){var statearr_8623 = state_8598;
(statearr_8623[(19)] = inst_8550);

return statearr_8623;
})();
var statearr_8624_8699 = state_8598__$1;
(statearr_8624_8699[(2)] = inst_8551);

(statearr_8624_8699[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8599 === (32))){
var inst_8539 = (state_8598[(10)]);
var inst_8540 = (state_8598[(20)]);
var inst_8541 = (state_8598[(11)]);
var inst_8538 = (state_8598[(21)]);
var inst_8553 = (state_8598[(2)]);
var inst_8554 = (inst_8541 + (1));
var tmp8619 = inst_8539;
var tmp8620 = inst_8540;
var tmp8621 = inst_8538;
var inst_8538__$1 = tmp8621;
var inst_8539__$1 = tmp8619;
var inst_8540__$1 = tmp8620;
var inst_8541__$1 = inst_8554;
var state_8598__$1 = (function (){var statearr_8625 = state_8598;
(statearr_8625[(10)] = inst_8539__$1);

(statearr_8625[(20)] = inst_8540__$1);

(statearr_8625[(11)] = inst_8541__$1);

(statearr_8625[(21)] = inst_8538__$1);

(statearr_8625[(22)] = inst_8553);

return statearr_8625;
})();
var statearr_8626_8700 = state_8598__$1;
(statearr_8626_8700[(2)] = null);

(statearr_8626_8700[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8599 === (40))){
var inst_8566 = (state_8598[(23)]);
var inst_8570 = done.call(null,null);
var inst_8571 = cljs.core.async.untap_STAR_.call(null,m,inst_8566);
var state_8598__$1 = (function (){var statearr_8627 = state_8598;
(statearr_8627[(24)] = inst_8570);

return statearr_8627;
})();
var statearr_8628_8701 = state_8598__$1;
(statearr_8628_8701[(2)] = inst_8571);

(statearr_8628_8701[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8599 === (33))){
var inst_8557 = (state_8598[(25)]);
var inst_8559 = cljs.core.chunked_seq_QMARK_.call(null,inst_8557);
var state_8598__$1 = state_8598;
if(inst_8559){
var statearr_8629_8702 = state_8598__$1;
(statearr_8629_8702[(1)] = (36));

} else {
var statearr_8630_8703 = state_8598__$1;
(statearr_8630_8703[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8599 === (13))){
var inst_8489 = (state_8598[(26)]);
var inst_8492 = cljs.core.async.close_BANG_.call(null,inst_8489);
var state_8598__$1 = state_8598;
var statearr_8631_8704 = state_8598__$1;
(statearr_8631_8704[(2)] = inst_8492);

(statearr_8631_8704[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8599 === (22))){
var inst_8510 = (state_8598[(8)]);
var inst_8513 = cljs.core.async.close_BANG_.call(null,inst_8510);
var state_8598__$1 = state_8598;
var statearr_8632_8705 = state_8598__$1;
(statearr_8632_8705[(2)] = inst_8513);

(statearr_8632_8705[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8599 === (36))){
var inst_8557 = (state_8598[(25)]);
var inst_8561 = cljs.core.chunk_first.call(null,inst_8557);
var inst_8562 = cljs.core.chunk_rest.call(null,inst_8557);
var inst_8563 = cljs.core.count.call(null,inst_8561);
var inst_8538 = inst_8562;
var inst_8539 = inst_8561;
var inst_8540 = inst_8563;
var inst_8541 = (0);
var state_8598__$1 = (function (){var statearr_8633 = state_8598;
(statearr_8633[(10)] = inst_8539);

(statearr_8633[(20)] = inst_8540);

(statearr_8633[(11)] = inst_8541);

(statearr_8633[(21)] = inst_8538);

return statearr_8633;
})();
var statearr_8634_8706 = state_8598__$1;
(statearr_8634_8706[(2)] = null);

(statearr_8634_8706[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8599 === (41))){
var inst_8557 = (state_8598[(25)]);
var inst_8573 = (state_8598[(2)]);
var inst_8574 = cljs.core.next.call(null,inst_8557);
var inst_8538 = inst_8574;
var inst_8539 = null;
var inst_8540 = (0);
var inst_8541 = (0);
var state_8598__$1 = (function (){var statearr_8635 = state_8598;
(statearr_8635[(10)] = inst_8539);

(statearr_8635[(27)] = inst_8573);

(statearr_8635[(20)] = inst_8540);

(statearr_8635[(11)] = inst_8541);

(statearr_8635[(21)] = inst_8538);

return statearr_8635;
})();
var statearr_8636_8707 = state_8598__$1;
(statearr_8636_8707[(2)] = null);

(statearr_8636_8707[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8599 === (43))){
var state_8598__$1 = state_8598;
var statearr_8637_8708 = state_8598__$1;
(statearr_8637_8708[(2)] = null);

(statearr_8637_8708[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8599 === (29))){
var inst_8582 = (state_8598[(2)]);
var state_8598__$1 = state_8598;
var statearr_8638_8709 = state_8598__$1;
(statearr_8638_8709[(2)] = inst_8582);

(statearr_8638_8709[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8599 === (44))){
var inst_8591 = (state_8598[(2)]);
var state_8598__$1 = (function (){var statearr_8639 = state_8598;
(statearr_8639[(28)] = inst_8591);

return statearr_8639;
})();
var statearr_8640_8710 = state_8598__$1;
(statearr_8640_8710[(2)] = null);

(statearr_8640_8710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8599 === (6))){
var inst_8530 = (state_8598[(29)]);
var inst_8529 = cljs.core.deref.call(null,cs);
var inst_8530__$1 = cljs.core.keys.call(null,inst_8529);
var inst_8531 = cljs.core.count.call(null,inst_8530__$1);
var inst_8532 = cljs.core.reset_BANG_.call(null,dctr,inst_8531);
var inst_8537 = cljs.core.seq.call(null,inst_8530__$1);
var inst_8538 = inst_8537;
var inst_8539 = null;
var inst_8540 = (0);
var inst_8541 = (0);
var state_8598__$1 = (function (){var statearr_8641 = state_8598;
(statearr_8641[(10)] = inst_8539);

(statearr_8641[(29)] = inst_8530__$1);

(statearr_8641[(20)] = inst_8540);

(statearr_8641[(11)] = inst_8541);

(statearr_8641[(30)] = inst_8532);

(statearr_8641[(21)] = inst_8538);

return statearr_8641;
})();
var statearr_8642_8711 = state_8598__$1;
(statearr_8642_8711[(2)] = null);

(statearr_8642_8711[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8599 === (28))){
var inst_8557 = (state_8598[(25)]);
var inst_8538 = (state_8598[(21)]);
var inst_8557__$1 = cljs.core.seq.call(null,inst_8538);
var state_8598__$1 = (function (){var statearr_8643 = state_8598;
(statearr_8643[(25)] = inst_8557__$1);

return statearr_8643;
})();
if(inst_8557__$1){
var statearr_8644_8712 = state_8598__$1;
(statearr_8644_8712[(1)] = (33));

} else {
var statearr_8645_8713 = state_8598__$1;
(statearr_8645_8713[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8599 === (25))){
var inst_8540 = (state_8598[(20)]);
var inst_8541 = (state_8598[(11)]);
var inst_8543 = (inst_8541 < inst_8540);
var inst_8544 = inst_8543;
var state_8598__$1 = state_8598;
if(cljs.core.truth_(inst_8544)){
var statearr_8646_8714 = state_8598__$1;
(statearr_8646_8714[(1)] = (27));

} else {
var statearr_8647_8715 = state_8598__$1;
(statearr_8647_8715[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8599 === (34))){
var state_8598__$1 = state_8598;
var statearr_8648_8716 = state_8598__$1;
(statearr_8648_8716[(2)] = null);

(statearr_8648_8716[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8599 === (17))){
var state_8598__$1 = state_8598;
var statearr_8649_8717 = state_8598__$1;
(statearr_8649_8717[(2)] = null);

(statearr_8649_8717[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8599 === (3))){
var inst_8596 = (state_8598[(2)]);
var state_8598__$1 = state_8598;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8598__$1,inst_8596);
} else {
if((state_val_8599 === (12))){
var inst_8525 = (state_8598[(2)]);
var state_8598__$1 = state_8598;
var statearr_8650_8718 = state_8598__$1;
(statearr_8650_8718[(2)] = inst_8525);

(statearr_8650_8718[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8599 === (2))){
var state_8598__$1 = state_8598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8598__$1,(4),ch);
} else {
if((state_val_8599 === (23))){
var state_8598__$1 = state_8598;
var statearr_8651_8719 = state_8598__$1;
(statearr_8651_8719[(2)] = null);

(statearr_8651_8719[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8599 === (35))){
var inst_8580 = (state_8598[(2)]);
var state_8598__$1 = state_8598;
var statearr_8652_8720 = state_8598__$1;
(statearr_8652_8720[(2)] = inst_8580);

(statearr_8652_8720[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8599 === (19))){
var inst_8499 = (state_8598[(7)]);
var inst_8503 = cljs.core.chunk_first.call(null,inst_8499);
var inst_8504 = cljs.core.chunk_rest.call(null,inst_8499);
var inst_8505 = cljs.core.count.call(null,inst_8503);
var inst_8479 = inst_8504;
var inst_8480 = inst_8503;
var inst_8481 = inst_8505;
var inst_8482 = (0);
var state_8598__$1 = (function (){var statearr_8653 = state_8598;
(statearr_8653[(14)] = inst_8482);

(statearr_8653[(15)] = inst_8481);

(statearr_8653[(16)] = inst_8479);

(statearr_8653[(17)] = inst_8480);

return statearr_8653;
})();
var statearr_8654_8721 = state_8598__$1;
(statearr_8654_8721[(2)] = null);

(statearr_8654_8721[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8599 === (11))){
var inst_8499 = (state_8598[(7)]);
var inst_8479 = (state_8598[(16)]);
var inst_8499__$1 = cljs.core.seq.call(null,inst_8479);
var state_8598__$1 = (function (){var statearr_8655 = state_8598;
(statearr_8655[(7)] = inst_8499__$1);

return statearr_8655;
})();
if(inst_8499__$1){
var statearr_8656_8722 = state_8598__$1;
(statearr_8656_8722[(1)] = (16));

} else {
var statearr_8657_8723 = state_8598__$1;
(statearr_8657_8723[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8599 === (9))){
var inst_8527 = (state_8598[(2)]);
var state_8598__$1 = state_8598;
var statearr_8658_8724 = state_8598__$1;
(statearr_8658_8724[(2)] = inst_8527);

(statearr_8658_8724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8599 === (5))){
var inst_8477 = cljs.core.deref.call(null,cs);
var inst_8478 = cljs.core.seq.call(null,inst_8477);
var inst_8479 = inst_8478;
var inst_8480 = null;
var inst_8481 = (0);
var inst_8482 = (0);
var state_8598__$1 = (function (){var statearr_8659 = state_8598;
(statearr_8659[(14)] = inst_8482);

(statearr_8659[(15)] = inst_8481);

(statearr_8659[(16)] = inst_8479);

(statearr_8659[(17)] = inst_8480);

return statearr_8659;
})();
var statearr_8660_8725 = state_8598__$1;
(statearr_8660_8725[(2)] = null);

(statearr_8660_8725[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8599 === (14))){
var state_8598__$1 = state_8598;
var statearr_8661_8726 = state_8598__$1;
(statearr_8661_8726[(2)] = null);

(statearr_8661_8726[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8599 === (45))){
var inst_8588 = (state_8598[(2)]);
var state_8598__$1 = state_8598;
var statearr_8662_8727 = state_8598__$1;
(statearr_8662_8727[(2)] = inst_8588);

(statearr_8662_8727[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8599 === (26))){
var inst_8530 = (state_8598[(29)]);
var inst_8584 = (state_8598[(2)]);
var inst_8585 = cljs.core.seq.call(null,inst_8530);
var state_8598__$1 = (function (){var statearr_8663 = state_8598;
(statearr_8663[(31)] = inst_8584);

return statearr_8663;
})();
if(inst_8585){
var statearr_8664_8728 = state_8598__$1;
(statearr_8664_8728[(1)] = (42));

} else {
var statearr_8665_8729 = state_8598__$1;
(statearr_8665_8729[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8599 === (16))){
var inst_8499 = (state_8598[(7)]);
var inst_8501 = cljs.core.chunked_seq_QMARK_.call(null,inst_8499);
var state_8598__$1 = state_8598;
if(inst_8501){
var statearr_8666_8730 = state_8598__$1;
(statearr_8666_8730[(1)] = (19));

} else {
var statearr_8667_8731 = state_8598__$1;
(statearr_8667_8731[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8599 === (38))){
var inst_8577 = (state_8598[(2)]);
var state_8598__$1 = state_8598;
var statearr_8668_8732 = state_8598__$1;
(statearr_8668_8732[(2)] = inst_8577);

(statearr_8668_8732[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8599 === (30))){
var state_8598__$1 = state_8598;
var statearr_8669_8733 = state_8598__$1;
(statearr_8669_8733[(2)] = null);

(statearr_8669_8733[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8599 === (10))){
var inst_8482 = (state_8598[(14)]);
var inst_8480 = (state_8598[(17)]);
var inst_8488 = cljs.core._nth.call(null,inst_8480,inst_8482);
var inst_8489 = cljs.core.nth.call(null,inst_8488,(0),null);
var inst_8490 = cljs.core.nth.call(null,inst_8488,(1),null);
var state_8598__$1 = (function (){var statearr_8670 = state_8598;
(statearr_8670[(26)] = inst_8489);

return statearr_8670;
})();
if(cljs.core.truth_(inst_8490)){
var statearr_8671_8734 = state_8598__$1;
(statearr_8671_8734[(1)] = (13));

} else {
var statearr_8672_8735 = state_8598__$1;
(statearr_8672_8735[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8599 === (18))){
var inst_8523 = (state_8598[(2)]);
var state_8598__$1 = state_8598;
var statearr_8673_8736 = state_8598__$1;
(statearr_8673_8736[(2)] = inst_8523);

(statearr_8673_8736[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8599 === (42))){
var state_8598__$1 = state_8598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8598__$1,(45),dchan);
} else {
if((state_val_8599 === (37))){
var inst_8470 = (state_8598[(9)]);
var inst_8557 = (state_8598[(25)]);
var inst_8566 = (state_8598[(23)]);
var inst_8566__$1 = cljs.core.first.call(null,inst_8557);
var inst_8567 = cljs.core.async.put_BANG_.call(null,inst_8566__$1,inst_8470,done);
var state_8598__$1 = (function (){var statearr_8674 = state_8598;
(statearr_8674[(23)] = inst_8566__$1);

return statearr_8674;
})();
if(cljs.core.truth_(inst_8567)){
var statearr_8675_8737 = state_8598__$1;
(statearr_8675_8737[(1)] = (39));

} else {
var statearr_8676_8738 = state_8598__$1;
(statearr_8676_8738[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8599 === (8))){
var inst_8482 = (state_8598[(14)]);
var inst_8481 = (state_8598[(15)]);
var inst_8484 = (inst_8482 < inst_8481);
var inst_8485 = inst_8484;
var state_8598__$1 = state_8598;
if(cljs.core.truth_(inst_8485)){
var statearr_8677_8739 = state_8598__$1;
(statearr_8677_8739[(1)] = (10));

} else {
var statearr_8678_8740 = state_8598__$1;
(statearr_8678_8740[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7379__auto___8686,cs,m,dchan,dctr,done))
;
return ((function (switch__7267__auto__,c__7379__auto___8686,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__7268__auto__ = null;
var cljs$core$async$mult_$_state_machine__7268__auto____0 = (function (){
var statearr_8682 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8682[(0)] = cljs$core$async$mult_$_state_machine__7268__auto__);

(statearr_8682[(1)] = (1));

return statearr_8682;
});
var cljs$core$async$mult_$_state_machine__7268__auto____1 = (function (state_8598){
while(true){
var ret_value__7269__auto__ = (function (){try{while(true){
var result__7270__auto__ = switch__7267__auto__.call(null,state_8598);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7270__auto__;
}
break;
}
}catch (e8683){if((e8683 instanceof Object)){
var ex__7271__auto__ = e8683;
var statearr_8684_8741 = state_8598;
(statearr_8684_8741[(5)] = ex__7271__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8742 = state_8598;
state_8598 = G__8742;
continue;
} else {
return ret_value__7269__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__7268__auto__ = function(state_8598){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__7268__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__7268__auto____1.call(this,state_8598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__7268__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__7268__auto____0;
cljs$core$async$mult_$_state_machine__7268__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__7268__auto____1;
return cljs$core$async$mult_$_state_machine__7268__auto__;
})()
;})(switch__7267__auto__,c__7379__auto___8686,cs,m,dchan,dctr,done))
})();
var state__7381__auto__ = (function (){var statearr_8685 = f__7380__auto__.call(null);
(statearr_8685[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7379__auto___8686);

return statearr_8685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7381__auto__);
});})(c__7379__auto___8686,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args8743 = [];
var len__6282__auto___8746 = arguments.length;
var i__6283__auto___8747 = (0);
while(true){
if((i__6283__auto___8747 < len__6282__auto___8746)){
args8743.push((arguments[i__6283__auto___8747]));

var G__8748 = (i__6283__auto___8747 + (1));
i__6283__auto___8747 = G__8748;
continue;
} else {
}
break;
}

var G__8745 = args8743.length;
switch (G__8745) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8743.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__5876__auto__ = (((m == null))?null:m);
var m__5877__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5876__auto__)]);
if(!((m__5877__auto__ == null))){
return m__5877__auto__.call(null,m,ch);
} else {
var m__5877__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5877__auto____$1 == null))){
return m__5877__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__5876__auto__ = (((m == null))?null:m);
var m__5877__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5876__auto__)]);
if(!((m__5877__auto__ == null))){
return m__5877__auto__.call(null,m,ch);
} else {
var m__5877__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5877__auto____$1 == null))){
return m__5877__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__5876__auto__ = (((m == null))?null:m);
var m__5877__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5876__auto__)]);
if(!((m__5877__auto__ == null))){
return m__5877__auto__.call(null,m);
} else {
var m__5877__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5877__auto____$1 == null))){
return m__5877__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__5876__auto__ = (((m == null))?null:m);
var m__5877__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5876__auto__)]);
if(!((m__5877__auto__ == null))){
return m__5877__auto__.call(null,m,state_map);
} else {
var m__5877__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5877__auto____$1 == null))){
return m__5877__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__5876__auto__ = (((m == null))?null:m);
var m__5877__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5876__auto__)]);
if(!((m__5877__auto__ == null))){
return m__5877__auto__.call(null,m,mode);
} else {
var m__5877__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5877__auto____$1 == null))){
return m__5877__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__6289__auto__ = [];
var len__6282__auto___8760 = arguments.length;
var i__6283__auto___8761 = (0);
while(true){
if((i__6283__auto___8761 < len__6282__auto___8760)){
args__6289__auto__.push((arguments[i__6283__auto___8761]));

var G__8762 = (i__6283__auto___8761 + (1));
i__6283__auto___8761 = G__8762;
continue;
} else {
}
break;
}

var argseq__6290__auto__ = ((((3) < args__6289__auto__.length))?(new cljs.core.IndexedSeq(args__6289__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6290__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__8754){
var map__8755 = p__8754;
var map__8755__$1 = ((((!((map__8755 == null)))?((((map__8755.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8755.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8755):map__8755);
var opts = map__8755__$1;
var statearr_8757_8763 = state;
(statearr_8757_8763[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__8755,map__8755__$1,opts){
return (function (val){
var statearr_8758_8764 = state;
(statearr_8758_8764[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__8755,map__8755__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_8759_8765 = state;
(statearr_8759_8765[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq8750){
var G__8751 = cljs.core.first.call(null,seq8750);
var seq8750__$1 = cljs.core.next.call(null,seq8750);
var G__8752 = cljs.core.first.call(null,seq8750__$1);
var seq8750__$2 = cljs.core.next.call(null,seq8750__$1);
var G__8753 = cljs.core.first.call(null,seq8750__$2);
var seq8750__$3 = cljs.core.next.call(null,seq8750__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8751,G__8752,G__8753,seq8750__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async8929 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8929 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta8930){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta8930 = meta8930;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8929.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_8931,meta8930__$1){
var self__ = this;
var _8931__$1 = this;
return (new cljs.core.async.t_cljs$core$async8929(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta8930__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8929.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_8931){
var self__ = this;
var _8931__$1 = this;
return self__.meta8930;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8929.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async8929.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8929.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async8929.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8929.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8929.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8929.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8929.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8929.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta8930","meta8930",1132239213,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8929.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8929.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8929";

cljs.core.async.t_cljs$core$async8929.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5819__auto__,writer__5820__auto__,opt__5821__auto__){
return cljs.core._write.call(null,writer__5820__auto__,"cljs.core.async/t_cljs$core$async8929");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async8929 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async8929(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta8930){
return (new cljs.core.async.t_cljs$core$async8929(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta8930));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async8929(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7379__auto___9092 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7379__auto___9092,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7380__auto__ = (function (){var switch__7267__auto__ = ((function (c__7379__auto___9092,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_9029){
var state_val_9030 = (state_9029[(1)]);
if((state_val_9030 === (7))){
var inst_8947 = (state_9029[(2)]);
var state_9029__$1 = state_9029;
var statearr_9031_9093 = state_9029__$1;
(statearr_9031_9093[(2)] = inst_8947);

(statearr_9031_9093[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9030 === (20))){
var inst_8959 = (state_9029[(7)]);
var state_9029__$1 = state_9029;
var statearr_9032_9094 = state_9029__$1;
(statearr_9032_9094[(2)] = inst_8959);

(statearr_9032_9094[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9030 === (27))){
var state_9029__$1 = state_9029;
var statearr_9033_9095 = state_9029__$1;
(statearr_9033_9095[(2)] = null);

(statearr_9033_9095[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9030 === (1))){
var inst_8935 = (state_9029[(8)]);
var inst_8935__$1 = calc_state.call(null);
var inst_8937 = (inst_8935__$1 == null);
var inst_8938 = cljs.core.not.call(null,inst_8937);
var state_9029__$1 = (function (){var statearr_9034 = state_9029;
(statearr_9034[(8)] = inst_8935__$1);

return statearr_9034;
})();
if(inst_8938){
var statearr_9035_9096 = state_9029__$1;
(statearr_9035_9096[(1)] = (2));

} else {
var statearr_9036_9097 = state_9029__$1;
(statearr_9036_9097[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9030 === (24))){
var inst_8982 = (state_9029[(9)]);
var inst_8989 = (state_9029[(10)]);
var inst_9003 = (state_9029[(11)]);
var inst_9003__$1 = inst_8982.call(null,inst_8989);
var state_9029__$1 = (function (){var statearr_9037 = state_9029;
(statearr_9037[(11)] = inst_9003__$1);

return statearr_9037;
})();
if(cljs.core.truth_(inst_9003__$1)){
var statearr_9038_9098 = state_9029__$1;
(statearr_9038_9098[(1)] = (29));

} else {
var statearr_9039_9099 = state_9029__$1;
(statearr_9039_9099[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9030 === (4))){
var inst_8950 = (state_9029[(2)]);
var state_9029__$1 = state_9029;
if(cljs.core.truth_(inst_8950)){
var statearr_9040_9100 = state_9029__$1;
(statearr_9040_9100[(1)] = (8));

} else {
var statearr_9041_9101 = state_9029__$1;
(statearr_9041_9101[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9030 === (15))){
var inst_8976 = (state_9029[(2)]);
var state_9029__$1 = state_9029;
if(cljs.core.truth_(inst_8976)){
var statearr_9042_9102 = state_9029__$1;
(statearr_9042_9102[(1)] = (19));

} else {
var statearr_9043_9103 = state_9029__$1;
(statearr_9043_9103[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9030 === (21))){
var inst_8981 = (state_9029[(12)]);
var inst_8981__$1 = (state_9029[(2)]);
var inst_8982 = cljs.core.get.call(null,inst_8981__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_8983 = cljs.core.get.call(null,inst_8981__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_8984 = cljs.core.get.call(null,inst_8981__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_9029__$1 = (function (){var statearr_9044 = state_9029;
(statearr_9044[(9)] = inst_8982);

(statearr_9044[(13)] = inst_8983);

(statearr_9044[(12)] = inst_8981__$1);

return statearr_9044;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_9029__$1,(22),inst_8984);
} else {
if((state_val_9030 === (31))){
var inst_9011 = (state_9029[(2)]);
var state_9029__$1 = state_9029;
if(cljs.core.truth_(inst_9011)){
var statearr_9045_9104 = state_9029__$1;
(statearr_9045_9104[(1)] = (32));

} else {
var statearr_9046_9105 = state_9029__$1;
(statearr_9046_9105[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9030 === (32))){
var inst_8988 = (state_9029[(14)]);
var state_9029__$1 = state_9029;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9029__$1,(35),out,inst_8988);
} else {
if((state_val_9030 === (33))){
var inst_8981 = (state_9029[(12)]);
var inst_8959 = inst_8981;
var state_9029__$1 = (function (){var statearr_9047 = state_9029;
(statearr_9047[(7)] = inst_8959);

return statearr_9047;
})();
var statearr_9048_9106 = state_9029__$1;
(statearr_9048_9106[(2)] = null);

(statearr_9048_9106[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9030 === (13))){
var inst_8959 = (state_9029[(7)]);
var inst_8966 = inst_8959.cljs$lang$protocol_mask$partition0$;
var inst_8967 = (inst_8966 & (64));
var inst_8968 = inst_8959.cljs$core$ISeq$;
var inst_8969 = (inst_8967) || (inst_8968);
var state_9029__$1 = state_9029;
if(cljs.core.truth_(inst_8969)){
var statearr_9049_9107 = state_9029__$1;
(statearr_9049_9107[(1)] = (16));

} else {
var statearr_9050_9108 = state_9029__$1;
(statearr_9050_9108[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9030 === (22))){
var inst_8989 = (state_9029[(10)]);
var inst_8988 = (state_9029[(14)]);
var inst_8987 = (state_9029[(2)]);
var inst_8988__$1 = cljs.core.nth.call(null,inst_8987,(0),null);
var inst_8989__$1 = cljs.core.nth.call(null,inst_8987,(1),null);
var inst_8990 = (inst_8988__$1 == null);
var inst_8991 = cljs.core._EQ_.call(null,inst_8989__$1,change);
var inst_8992 = (inst_8990) || (inst_8991);
var state_9029__$1 = (function (){var statearr_9051 = state_9029;
(statearr_9051[(10)] = inst_8989__$1);

(statearr_9051[(14)] = inst_8988__$1);

return statearr_9051;
})();
if(cljs.core.truth_(inst_8992)){
var statearr_9052_9109 = state_9029__$1;
(statearr_9052_9109[(1)] = (23));

} else {
var statearr_9053_9110 = state_9029__$1;
(statearr_9053_9110[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9030 === (36))){
var inst_8981 = (state_9029[(12)]);
var inst_8959 = inst_8981;
var state_9029__$1 = (function (){var statearr_9054 = state_9029;
(statearr_9054[(7)] = inst_8959);

return statearr_9054;
})();
var statearr_9055_9111 = state_9029__$1;
(statearr_9055_9111[(2)] = null);

(statearr_9055_9111[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9030 === (29))){
var inst_9003 = (state_9029[(11)]);
var state_9029__$1 = state_9029;
var statearr_9056_9112 = state_9029__$1;
(statearr_9056_9112[(2)] = inst_9003);

(statearr_9056_9112[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9030 === (6))){
var state_9029__$1 = state_9029;
var statearr_9057_9113 = state_9029__$1;
(statearr_9057_9113[(2)] = false);

(statearr_9057_9113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9030 === (28))){
var inst_8999 = (state_9029[(2)]);
var inst_9000 = calc_state.call(null);
var inst_8959 = inst_9000;
var state_9029__$1 = (function (){var statearr_9058 = state_9029;
(statearr_9058[(15)] = inst_8999);

(statearr_9058[(7)] = inst_8959);

return statearr_9058;
})();
var statearr_9059_9114 = state_9029__$1;
(statearr_9059_9114[(2)] = null);

(statearr_9059_9114[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9030 === (25))){
var inst_9025 = (state_9029[(2)]);
var state_9029__$1 = state_9029;
var statearr_9060_9115 = state_9029__$1;
(statearr_9060_9115[(2)] = inst_9025);

(statearr_9060_9115[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9030 === (34))){
var inst_9023 = (state_9029[(2)]);
var state_9029__$1 = state_9029;
var statearr_9061_9116 = state_9029__$1;
(statearr_9061_9116[(2)] = inst_9023);

(statearr_9061_9116[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9030 === (17))){
var state_9029__$1 = state_9029;
var statearr_9062_9117 = state_9029__$1;
(statearr_9062_9117[(2)] = false);

(statearr_9062_9117[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9030 === (3))){
var state_9029__$1 = state_9029;
var statearr_9063_9118 = state_9029__$1;
(statearr_9063_9118[(2)] = false);

(statearr_9063_9118[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9030 === (12))){
var inst_9027 = (state_9029[(2)]);
var state_9029__$1 = state_9029;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9029__$1,inst_9027);
} else {
if((state_val_9030 === (2))){
var inst_8935 = (state_9029[(8)]);
var inst_8940 = inst_8935.cljs$lang$protocol_mask$partition0$;
var inst_8941 = (inst_8940 & (64));
var inst_8942 = inst_8935.cljs$core$ISeq$;
var inst_8943 = (inst_8941) || (inst_8942);
var state_9029__$1 = state_9029;
if(cljs.core.truth_(inst_8943)){
var statearr_9064_9119 = state_9029__$1;
(statearr_9064_9119[(1)] = (5));

} else {
var statearr_9065_9120 = state_9029__$1;
(statearr_9065_9120[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9030 === (23))){
var inst_8988 = (state_9029[(14)]);
var inst_8994 = (inst_8988 == null);
var state_9029__$1 = state_9029;
if(cljs.core.truth_(inst_8994)){
var statearr_9066_9121 = state_9029__$1;
(statearr_9066_9121[(1)] = (26));

} else {
var statearr_9067_9122 = state_9029__$1;
(statearr_9067_9122[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9030 === (35))){
var inst_9014 = (state_9029[(2)]);
var state_9029__$1 = state_9029;
if(cljs.core.truth_(inst_9014)){
var statearr_9068_9123 = state_9029__$1;
(statearr_9068_9123[(1)] = (36));

} else {
var statearr_9069_9124 = state_9029__$1;
(statearr_9069_9124[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9030 === (19))){
var inst_8959 = (state_9029[(7)]);
var inst_8978 = cljs.core.apply.call(null,cljs.core.hash_map,inst_8959);
var state_9029__$1 = state_9029;
var statearr_9070_9125 = state_9029__$1;
(statearr_9070_9125[(2)] = inst_8978);

(statearr_9070_9125[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9030 === (11))){
var inst_8959 = (state_9029[(7)]);
var inst_8963 = (inst_8959 == null);
var inst_8964 = cljs.core.not.call(null,inst_8963);
var state_9029__$1 = state_9029;
if(inst_8964){
var statearr_9071_9126 = state_9029__$1;
(statearr_9071_9126[(1)] = (13));

} else {
var statearr_9072_9127 = state_9029__$1;
(statearr_9072_9127[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9030 === (9))){
var inst_8935 = (state_9029[(8)]);
var state_9029__$1 = state_9029;
var statearr_9073_9128 = state_9029__$1;
(statearr_9073_9128[(2)] = inst_8935);

(statearr_9073_9128[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9030 === (5))){
var state_9029__$1 = state_9029;
var statearr_9074_9129 = state_9029__$1;
(statearr_9074_9129[(2)] = true);

(statearr_9074_9129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9030 === (14))){
var state_9029__$1 = state_9029;
var statearr_9075_9130 = state_9029__$1;
(statearr_9075_9130[(2)] = false);

(statearr_9075_9130[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9030 === (26))){
var inst_8989 = (state_9029[(10)]);
var inst_8996 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_8989);
var state_9029__$1 = state_9029;
var statearr_9076_9131 = state_9029__$1;
(statearr_9076_9131[(2)] = inst_8996);

(statearr_9076_9131[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9030 === (16))){
var state_9029__$1 = state_9029;
var statearr_9077_9132 = state_9029__$1;
(statearr_9077_9132[(2)] = true);

(statearr_9077_9132[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9030 === (38))){
var inst_9019 = (state_9029[(2)]);
var state_9029__$1 = state_9029;
var statearr_9078_9133 = state_9029__$1;
(statearr_9078_9133[(2)] = inst_9019);

(statearr_9078_9133[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9030 === (30))){
var inst_8982 = (state_9029[(9)]);
var inst_8989 = (state_9029[(10)]);
var inst_8983 = (state_9029[(13)]);
var inst_9006 = cljs.core.empty_QMARK_.call(null,inst_8982);
var inst_9007 = inst_8983.call(null,inst_8989);
var inst_9008 = cljs.core.not.call(null,inst_9007);
var inst_9009 = (inst_9006) && (inst_9008);
var state_9029__$1 = state_9029;
var statearr_9079_9134 = state_9029__$1;
(statearr_9079_9134[(2)] = inst_9009);

(statearr_9079_9134[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9030 === (10))){
var inst_8935 = (state_9029[(8)]);
var inst_8955 = (state_9029[(2)]);
var inst_8956 = cljs.core.get.call(null,inst_8955,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_8957 = cljs.core.get.call(null,inst_8955,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_8958 = cljs.core.get.call(null,inst_8955,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_8959 = inst_8935;
var state_9029__$1 = (function (){var statearr_9080 = state_9029;
(statearr_9080[(16)] = inst_8956);

(statearr_9080[(17)] = inst_8957);

(statearr_9080[(18)] = inst_8958);

(statearr_9080[(7)] = inst_8959);

return statearr_9080;
})();
var statearr_9081_9135 = state_9029__$1;
(statearr_9081_9135[(2)] = null);

(statearr_9081_9135[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9030 === (18))){
var inst_8973 = (state_9029[(2)]);
var state_9029__$1 = state_9029;
var statearr_9082_9136 = state_9029__$1;
(statearr_9082_9136[(2)] = inst_8973);

(statearr_9082_9136[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9030 === (37))){
var state_9029__$1 = state_9029;
var statearr_9083_9137 = state_9029__$1;
(statearr_9083_9137[(2)] = null);

(statearr_9083_9137[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9030 === (8))){
var inst_8935 = (state_9029[(8)]);
var inst_8952 = cljs.core.apply.call(null,cljs.core.hash_map,inst_8935);
var state_9029__$1 = state_9029;
var statearr_9084_9138 = state_9029__$1;
(statearr_9084_9138[(2)] = inst_8952);

(statearr_9084_9138[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7379__auto___9092,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7267__auto__,c__7379__auto___9092,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__7268__auto__ = null;
var cljs$core$async$mix_$_state_machine__7268__auto____0 = (function (){
var statearr_9088 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9088[(0)] = cljs$core$async$mix_$_state_machine__7268__auto__);

(statearr_9088[(1)] = (1));

return statearr_9088;
});
var cljs$core$async$mix_$_state_machine__7268__auto____1 = (function (state_9029){
while(true){
var ret_value__7269__auto__ = (function (){try{while(true){
var result__7270__auto__ = switch__7267__auto__.call(null,state_9029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7270__auto__;
}
break;
}
}catch (e9089){if((e9089 instanceof Object)){
var ex__7271__auto__ = e9089;
var statearr_9090_9139 = state_9029;
(statearr_9090_9139[(5)] = ex__7271__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9089;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9140 = state_9029;
state_9029 = G__9140;
continue;
} else {
return ret_value__7269__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__7268__auto__ = function(state_9029){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__7268__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__7268__auto____1.call(this,state_9029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__7268__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__7268__auto____0;
cljs$core$async$mix_$_state_machine__7268__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__7268__auto____1;
return cljs$core$async$mix_$_state_machine__7268__auto__;
})()
;})(switch__7267__auto__,c__7379__auto___9092,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7381__auto__ = (function (){var statearr_9091 = f__7380__auto__.call(null);
(statearr_9091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7379__auto___9092);

return statearr_9091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7381__auto__);
});})(c__7379__auto___9092,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__5876__auto__ = (((p == null))?null:p);
var m__5877__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5876__auto__)]);
if(!((m__5877__auto__ == null))){
return m__5877__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5877__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5877__auto____$1 == null))){
return m__5877__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__5876__auto__ = (((p == null))?null:p);
var m__5877__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5876__auto__)]);
if(!((m__5877__auto__ == null))){
return m__5877__auto__.call(null,p,v,ch);
} else {
var m__5877__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5877__auto____$1 == null))){
return m__5877__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args9141 = [];
var len__6282__auto___9144 = arguments.length;
var i__6283__auto___9145 = (0);
while(true){
if((i__6283__auto___9145 < len__6282__auto___9144)){
args9141.push((arguments[i__6283__auto___9145]));

var G__9146 = (i__6283__auto___9145 + (1));
i__6283__auto___9145 = G__9146;
continue;
} else {
}
break;
}

var G__9143 = args9141.length;
switch (G__9143) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9141.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5876__auto__ = (((p == null))?null:p);
var m__5877__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5876__auto__)]);
if(!((m__5877__auto__ == null))){
return m__5877__auto__.call(null,p);
} else {
var m__5877__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5877__auto____$1 == null))){
return m__5877__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__5876__auto__ = (((p == null))?null:p);
var m__5877__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5876__auto__)]);
if(!((m__5877__auto__ == null))){
return m__5877__auto__.call(null,p,v);
} else {
var m__5877__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5877__auto____$1 == null))){
return m__5877__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args9149 = [];
var len__6282__auto___9274 = arguments.length;
var i__6283__auto___9275 = (0);
while(true){
if((i__6283__auto___9275 < len__6282__auto___9274)){
args9149.push((arguments[i__6283__auto___9275]));

var G__9276 = (i__6283__auto___9275 + (1));
i__6283__auto___9275 = G__9276;
continue;
} else {
}
break;
}

var G__9151 = args9149.length;
switch (G__9151) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9149.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__5213__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__5213__auto__)){
return or__5213__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__5213__auto__,mults){
return (function (p1__9148_SHARP_){
if(cljs.core.truth_(p1__9148_SHARP_.call(null,topic))){
return p1__9148_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__9148_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__5213__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async9152 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9152 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta9153){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta9153 = meta9153;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9152.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_9154,meta9153__$1){
var self__ = this;
var _9154__$1 = this;
return (new cljs.core.async.t_cljs$core$async9152(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta9153__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9152.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_9154){
var self__ = this;
var _9154__$1 = this;
return self__.meta9153;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9152.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async9152.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9152.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async9152.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9152.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9152.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9152.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9152.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta9153","meta9153",-1097127648,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9152.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9152.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9152";

cljs.core.async.t_cljs$core$async9152.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5819__auto__,writer__5820__auto__,opt__5821__auto__){
return cljs.core._write.call(null,writer__5820__auto__,"cljs.core.async/t_cljs$core$async9152");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async9152 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async9152(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta9153){
return (new cljs.core.async.t_cljs$core$async9152(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta9153));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async9152(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7379__auto___9278 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7379__auto___9278,mults,ensure_mult,p){
return (function (){
var f__7380__auto__ = (function (){var switch__7267__auto__ = ((function (c__7379__auto___9278,mults,ensure_mult,p){
return (function (state_9226){
var state_val_9227 = (state_9226[(1)]);
if((state_val_9227 === (7))){
var inst_9222 = (state_9226[(2)]);
var state_9226__$1 = state_9226;
var statearr_9228_9279 = state_9226__$1;
(statearr_9228_9279[(2)] = inst_9222);

(statearr_9228_9279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9227 === (20))){
var state_9226__$1 = state_9226;
var statearr_9229_9280 = state_9226__$1;
(statearr_9229_9280[(2)] = null);

(statearr_9229_9280[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9227 === (1))){
var state_9226__$1 = state_9226;
var statearr_9230_9281 = state_9226__$1;
(statearr_9230_9281[(2)] = null);

(statearr_9230_9281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9227 === (24))){
var inst_9205 = (state_9226[(7)]);
var inst_9214 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_9205);
var state_9226__$1 = state_9226;
var statearr_9231_9282 = state_9226__$1;
(statearr_9231_9282[(2)] = inst_9214);

(statearr_9231_9282[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9227 === (4))){
var inst_9157 = (state_9226[(8)]);
var inst_9157__$1 = (state_9226[(2)]);
var inst_9158 = (inst_9157__$1 == null);
var state_9226__$1 = (function (){var statearr_9232 = state_9226;
(statearr_9232[(8)] = inst_9157__$1);

return statearr_9232;
})();
if(cljs.core.truth_(inst_9158)){
var statearr_9233_9283 = state_9226__$1;
(statearr_9233_9283[(1)] = (5));

} else {
var statearr_9234_9284 = state_9226__$1;
(statearr_9234_9284[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9227 === (15))){
var inst_9199 = (state_9226[(2)]);
var state_9226__$1 = state_9226;
var statearr_9235_9285 = state_9226__$1;
(statearr_9235_9285[(2)] = inst_9199);

(statearr_9235_9285[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9227 === (21))){
var inst_9219 = (state_9226[(2)]);
var state_9226__$1 = (function (){var statearr_9236 = state_9226;
(statearr_9236[(9)] = inst_9219);

return statearr_9236;
})();
var statearr_9237_9286 = state_9226__$1;
(statearr_9237_9286[(2)] = null);

(statearr_9237_9286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9227 === (13))){
var inst_9181 = (state_9226[(10)]);
var inst_9183 = cljs.core.chunked_seq_QMARK_.call(null,inst_9181);
var state_9226__$1 = state_9226;
if(inst_9183){
var statearr_9238_9287 = state_9226__$1;
(statearr_9238_9287[(1)] = (16));

} else {
var statearr_9239_9288 = state_9226__$1;
(statearr_9239_9288[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9227 === (22))){
var inst_9211 = (state_9226[(2)]);
var state_9226__$1 = state_9226;
if(cljs.core.truth_(inst_9211)){
var statearr_9240_9289 = state_9226__$1;
(statearr_9240_9289[(1)] = (23));

} else {
var statearr_9241_9290 = state_9226__$1;
(statearr_9241_9290[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9227 === (6))){
var inst_9205 = (state_9226[(7)]);
var inst_9207 = (state_9226[(11)]);
var inst_9157 = (state_9226[(8)]);
var inst_9205__$1 = topic_fn.call(null,inst_9157);
var inst_9206 = cljs.core.deref.call(null,mults);
var inst_9207__$1 = cljs.core.get.call(null,inst_9206,inst_9205__$1);
var state_9226__$1 = (function (){var statearr_9242 = state_9226;
(statearr_9242[(7)] = inst_9205__$1);

(statearr_9242[(11)] = inst_9207__$1);

return statearr_9242;
})();
if(cljs.core.truth_(inst_9207__$1)){
var statearr_9243_9291 = state_9226__$1;
(statearr_9243_9291[(1)] = (19));

} else {
var statearr_9244_9292 = state_9226__$1;
(statearr_9244_9292[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9227 === (25))){
var inst_9216 = (state_9226[(2)]);
var state_9226__$1 = state_9226;
var statearr_9245_9293 = state_9226__$1;
(statearr_9245_9293[(2)] = inst_9216);

(statearr_9245_9293[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9227 === (17))){
var inst_9181 = (state_9226[(10)]);
var inst_9190 = cljs.core.first.call(null,inst_9181);
var inst_9191 = cljs.core.async.muxch_STAR_.call(null,inst_9190);
var inst_9192 = cljs.core.async.close_BANG_.call(null,inst_9191);
var inst_9193 = cljs.core.next.call(null,inst_9181);
var inst_9167 = inst_9193;
var inst_9168 = null;
var inst_9169 = (0);
var inst_9170 = (0);
var state_9226__$1 = (function (){var statearr_9246 = state_9226;
(statearr_9246[(12)] = inst_9192);

(statearr_9246[(13)] = inst_9169);

(statearr_9246[(14)] = inst_9167);

(statearr_9246[(15)] = inst_9168);

(statearr_9246[(16)] = inst_9170);

return statearr_9246;
})();
var statearr_9247_9294 = state_9226__$1;
(statearr_9247_9294[(2)] = null);

(statearr_9247_9294[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9227 === (3))){
var inst_9224 = (state_9226[(2)]);
var state_9226__$1 = state_9226;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9226__$1,inst_9224);
} else {
if((state_val_9227 === (12))){
var inst_9201 = (state_9226[(2)]);
var state_9226__$1 = state_9226;
var statearr_9248_9295 = state_9226__$1;
(statearr_9248_9295[(2)] = inst_9201);

(statearr_9248_9295[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9227 === (2))){
var state_9226__$1 = state_9226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9226__$1,(4),ch);
} else {
if((state_val_9227 === (23))){
var state_9226__$1 = state_9226;
var statearr_9249_9296 = state_9226__$1;
(statearr_9249_9296[(2)] = null);

(statearr_9249_9296[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9227 === (19))){
var inst_9207 = (state_9226[(11)]);
var inst_9157 = (state_9226[(8)]);
var inst_9209 = cljs.core.async.muxch_STAR_.call(null,inst_9207);
var state_9226__$1 = state_9226;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9226__$1,(22),inst_9209,inst_9157);
} else {
if((state_val_9227 === (11))){
var inst_9181 = (state_9226[(10)]);
var inst_9167 = (state_9226[(14)]);
var inst_9181__$1 = cljs.core.seq.call(null,inst_9167);
var state_9226__$1 = (function (){var statearr_9250 = state_9226;
(statearr_9250[(10)] = inst_9181__$1);

return statearr_9250;
})();
if(inst_9181__$1){
var statearr_9251_9297 = state_9226__$1;
(statearr_9251_9297[(1)] = (13));

} else {
var statearr_9252_9298 = state_9226__$1;
(statearr_9252_9298[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9227 === (9))){
var inst_9203 = (state_9226[(2)]);
var state_9226__$1 = state_9226;
var statearr_9253_9299 = state_9226__$1;
(statearr_9253_9299[(2)] = inst_9203);

(statearr_9253_9299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9227 === (5))){
var inst_9164 = cljs.core.deref.call(null,mults);
var inst_9165 = cljs.core.vals.call(null,inst_9164);
var inst_9166 = cljs.core.seq.call(null,inst_9165);
var inst_9167 = inst_9166;
var inst_9168 = null;
var inst_9169 = (0);
var inst_9170 = (0);
var state_9226__$1 = (function (){var statearr_9254 = state_9226;
(statearr_9254[(13)] = inst_9169);

(statearr_9254[(14)] = inst_9167);

(statearr_9254[(15)] = inst_9168);

(statearr_9254[(16)] = inst_9170);

return statearr_9254;
})();
var statearr_9255_9300 = state_9226__$1;
(statearr_9255_9300[(2)] = null);

(statearr_9255_9300[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9227 === (14))){
var state_9226__$1 = state_9226;
var statearr_9259_9301 = state_9226__$1;
(statearr_9259_9301[(2)] = null);

(statearr_9259_9301[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9227 === (16))){
var inst_9181 = (state_9226[(10)]);
var inst_9185 = cljs.core.chunk_first.call(null,inst_9181);
var inst_9186 = cljs.core.chunk_rest.call(null,inst_9181);
var inst_9187 = cljs.core.count.call(null,inst_9185);
var inst_9167 = inst_9186;
var inst_9168 = inst_9185;
var inst_9169 = inst_9187;
var inst_9170 = (0);
var state_9226__$1 = (function (){var statearr_9260 = state_9226;
(statearr_9260[(13)] = inst_9169);

(statearr_9260[(14)] = inst_9167);

(statearr_9260[(15)] = inst_9168);

(statearr_9260[(16)] = inst_9170);

return statearr_9260;
})();
var statearr_9261_9302 = state_9226__$1;
(statearr_9261_9302[(2)] = null);

(statearr_9261_9302[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9227 === (10))){
var inst_9169 = (state_9226[(13)]);
var inst_9167 = (state_9226[(14)]);
var inst_9168 = (state_9226[(15)]);
var inst_9170 = (state_9226[(16)]);
var inst_9175 = cljs.core._nth.call(null,inst_9168,inst_9170);
var inst_9176 = cljs.core.async.muxch_STAR_.call(null,inst_9175);
var inst_9177 = cljs.core.async.close_BANG_.call(null,inst_9176);
var inst_9178 = (inst_9170 + (1));
var tmp9256 = inst_9169;
var tmp9257 = inst_9167;
var tmp9258 = inst_9168;
var inst_9167__$1 = tmp9257;
var inst_9168__$1 = tmp9258;
var inst_9169__$1 = tmp9256;
var inst_9170__$1 = inst_9178;
var state_9226__$1 = (function (){var statearr_9262 = state_9226;
(statearr_9262[(13)] = inst_9169__$1);

(statearr_9262[(14)] = inst_9167__$1);

(statearr_9262[(15)] = inst_9168__$1);

(statearr_9262[(17)] = inst_9177);

(statearr_9262[(16)] = inst_9170__$1);

return statearr_9262;
})();
var statearr_9263_9303 = state_9226__$1;
(statearr_9263_9303[(2)] = null);

(statearr_9263_9303[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9227 === (18))){
var inst_9196 = (state_9226[(2)]);
var state_9226__$1 = state_9226;
var statearr_9264_9304 = state_9226__$1;
(statearr_9264_9304[(2)] = inst_9196);

(statearr_9264_9304[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9227 === (8))){
var inst_9169 = (state_9226[(13)]);
var inst_9170 = (state_9226[(16)]);
var inst_9172 = (inst_9170 < inst_9169);
var inst_9173 = inst_9172;
var state_9226__$1 = state_9226;
if(cljs.core.truth_(inst_9173)){
var statearr_9265_9305 = state_9226__$1;
(statearr_9265_9305[(1)] = (10));

} else {
var statearr_9266_9306 = state_9226__$1;
(statearr_9266_9306[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7379__auto___9278,mults,ensure_mult,p))
;
return ((function (switch__7267__auto__,c__7379__auto___9278,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__7268__auto__ = null;
var cljs$core$async$state_machine__7268__auto____0 = (function (){
var statearr_9270 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9270[(0)] = cljs$core$async$state_machine__7268__auto__);

(statearr_9270[(1)] = (1));

return statearr_9270;
});
var cljs$core$async$state_machine__7268__auto____1 = (function (state_9226){
while(true){
var ret_value__7269__auto__ = (function (){try{while(true){
var result__7270__auto__ = switch__7267__auto__.call(null,state_9226);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7270__auto__;
}
break;
}
}catch (e9271){if((e9271 instanceof Object)){
var ex__7271__auto__ = e9271;
var statearr_9272_9307 = state_9226;
(statearr_9272_9307[(5)] = ex__7271__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9271;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9308 = state_9226;
state_9226 = G__9308;
continue;
} else {
return ret_value__7269__auto__;
}
break;
}
});
cljs$core$async$state_machine__7268__auto__ = function(state_9226){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7268__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7268__auto____1.call(this,state_9226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7268__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7268__auto____0;
cljs$core$async$state_machine__7268__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7268__auto____1;
return cljs$core$async$state_machine__7268__auto__;
})()
;})(switch__7267__auto__,c__7379__auto___9278,mults,ensure_mult,p))
})();
var state__7381__auto__ = (function (){var statearr_9273 = f__7380__auto__.call(null);
(statearr_9273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7379__auto___9278);

return statearr_9273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7381__auto__);
});})(c__7379__auto___9278,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args9309 = [];
var len__6282__auto___9312 = arguments.length;
var i__6283__auto___9313 = (0);
while(true){
if((i__6283__auto___9313 < len__6282__auto___9312)){
args9309.push((arguments[i__6283__auto___9313]));

var G__9314 = (i__6283__auto___9313 + (1));
i__6283__auto___9313 = G__9314;
continue;
} else {
}
break;
}

var G__9311 = args9309.length;
switch (G__9311) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9309.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args9316 = [];
var len__6282__auto___9319 = arguments.length;
var i__6283__auto___9320 = (0);
while(true){
if((i__6283__auto___9320 < len__6282__auto___9319)){
args9316.push((arguments[i__6283__auto___9320]));

var G__9321 = (i__6283__auto___9320 + (1));
i__6283__auto___9320 = G__9321;
continue;
} else {
}
break;
}

var G__9318 = args9316.length;
switch (G__9318) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9316.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args9323 = [];
var len__6282__auto___9394 = arguments.length;
var i__6283__auto___9395 = (0);
while(true){
if((i__6283__auto___9395 < len__6282__auto___9394)){
args9323.push((arguments[i__6283__auto___9395]));

var G__9396 = (i__6283__auto___9395 + (1));
i__6283__auto___9395 = G__9396;
continue;
} else {
}
break;
}

var G__9325 = args9323.length;
switch (G__9325) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9323.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__7379__auto___9398 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7379__auto___9398,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7380__auto__ = (function (){var switch__7267__auto__ = ((function (c__7379__auto___9398,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_9364){
var state_val_9365 = (state_9364[(1)]);
if((state_val_9365 === (7))){
var state_9364__$1 = state_9364;
var statearr_9366_9399 = state_9364__$1;
(statearr_9366_9399[(2)] = null);

(statearr_9366_9399[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9365 === (1))){
var state_9364__$1 = state_9364;
var statearr_9367_9400 = state_9364__$1;
(statearr_9367_9400[(2)] = null);

(statearr_9367_9400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9365 === (4))){
var inst_9328 = (state_9364[(7)]);
var inst_9330 = (inst_9328 < cnt);
var state_9364__$1 = state_9364;
if(cljs.core.truth_(inst_9330)){
var statearr_9368_9401 = state_9364__$1;
(statearr_9368_9401[(1)] = (6));

} else {
var statearr_9369_9402 = state_9364__$1;
(statearr_9369_9402[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9365 === (15))){
var inst_9360 = (state_9364[(2)]);
var state_9364__$1 = state_9364;
var statearr_9370_9403 = state_9364__$1;
(statearr_9370_9403[(2)] = inst_9360);

(statearr_9370_9403[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9365 === (13))){
var inst_9353 = cljs.core.async.close_BANG_.call(null,out);
var state_9364__$1 = state_9364;
var statearr_9371_9404 = state_9364__$1;
(statearr_9371_9404[(2)] = inst_9353);

(statearr_9371_9404[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9365 === (6))){
var state_9364__$1 = state_9364;
var statearr_9372_9405 = state_9364__$1;
(statearr_9372_9405[(2)] = null);

(statearr_9372_9405[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9365 === (3))){
var inst_9362 = (state_9364[(2)]);
var state_9364__$1 = state_9364;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9364__$1,inst_9362);
} else {
if((state_val_9365 === (12))){
var inst_9350 = (state_9364[(8)]);
var inst_9350__$1 = (state_9364[(2)]);
var inst_9351 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_9350__$1);
var state_9364__$1 = (function (){var statearr_9373 = state_9364;
(statearr_9373[(8)] = inst_9350__$1);

return statearr_9373;
})();
if(cljs.core.truth_(inst_9351)){
var statearr_9374_9406 = state_9364__$1;
(statearr_9374_9406[(1)] = (13));

} else {
var statearr_9375_9407 = state_9364__$1;
(statearr_9375_9407[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9365 === (2))){
var inst_9327 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_9328 = (0);
var state_9364__$1 = (function (){var statearr_9376 = state_9364;
(statearr_9376[(7)] = inst_9328);

(statearr_9376[(9)] = inst_9327);

return statearr_9376;
})();
var statearr_9377_9408 = state_9364__$1;
(statearr_9377_9408[(2)] = null);

(statearr_9377_9408[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9365 === (11))){
var inst_9328 = (state_9364[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_9364,(10),Object,null,(9));
var inst_9337 = chs__$1.call(null,inst_9328);
var inst_9338 = done.call(null,inst_9328);
var inst_9339 = cljs.core.async.take_BANG_.call(null,inst_9337,inst_9338);
var state_9364__$1 = state_9364;
var statearr_9378_9409 = state_9364__$1;
(statearr_9378_9409[(2)] = inst_9339);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9364__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9365 === (9))){
var inst_9328 = (state_9364[(7)]);
var inst_9341 = (state_9364[(2)]);
var inst_9342 = (inst_9328 + (1));
var inst_9328__$1 = inst_9342;
var state_9364__$1 = (function (){var statearr_9379 = state_9364;
(statearr_9379[(7)] = inst_9328__$1);

(statearr_9379[(10)] = inst_9341);

return statearr_9379;
})();
var statearr_9380_9410 = state_9364__$1;
(statearr_9380_9410[(2)] = null);

(statearr_9380_9410[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9365 === (5))){
var inst_9348 = (state_9364[(2)]);
var state_9364__$1 = (function (){var statearr_9381 = state_9364;
(statearr_9381[(11)] = inst_9348);

return statearr_9381;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9364__$1,(12),dchan);
} else {
if((state_val_9365 === (14))){
var inst_9350 = (state_9364[(8)]);
var inst_9355 = cljs.core.apply.call(null,f,inst_9350);
var state_9364__$1 = state_9364;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9364__$1,(16),out,inst_9355);
} else {
if((state_val_9365 === (16))){
var inst_9357 = (state_9364[(2)]);
var state_9364__$1 = (function (){var statearr_9382 = state_9364;
(statearr_9382[(12)] = inst_9357);

return statearr_9382;
})();
var statearr_9383_9411 = state_9364__$1;
(statearr_9383_9411[(2)] = null);

(statearr_9383_9411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9365 === (10))){
var inst_9332 = (state_9364[(2)]);
var inst_9333 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_9364__$1 = (function (){var statearr_9384 = state_9364;
(statearr_9384[(13)] = inst_9332);

return statearr_9384;
})();
var statearr_9385_9412 = state_9364__$1;
(statearr_9385_9412[(2)] = inst_9333);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9364__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9365 === (8))){
var inst_9346 = (state_9364[(2)]);
var state_9364__$1 = state_9364;
var statearr_9386_9413 = state_9364__$1;
(statearr_9386_9413[(2)] = inst_9346);

(statearr_9386_9413[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7379__auto___9398,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7267__auto__,c__7379__auto___9398,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__7268__auto__ = null;
var cljs$core$async$state_machine__7268__auto____0 = (function (){
var statearr_9390 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9390[(0)] = cljs$core$async$state_machine__7268__auto__);

(statearr_9390[(1)] = (1));

return statearr_9390;
});
var cljs$core$async$state_machine__7268__auto____1 = (function (state_9364){
while(true){
var ret_value__7269__auto__ = (function (){try{while(true){
var result__7270__auto__ = switch__7267__auto__.call(null,state_9364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7270__auto__;
}
break;
}
}catch (e9391){if((e9391 instanceof Object)){
var ex__7271__auto__ = e9391;
var statearr_9392_9414 = state_9364;
(statearr_9392_9414[(5)] = ex__7271__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9391;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9415 = state_9364;
state_9364 = G__9415;
continue;
} else {
return ret_value__7269__auto__;
}
break;
}
});
cljs$core$async$state_machine__7268__auto__ = function(state_9364){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7268__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7268__auto____1.call(this,state_9364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7268__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7268__auto____0;
cljs$core$async$state_machine__7268__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7268__auto____1;
return cljs$core$async$state_machine__7268__auto__;
})()
;})(switch__7267__auto__,c__7379__auto___9398,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7381__auto__ = (function (){var statearr_9393 = f__7380__auto__.call(null);
(statearr_9393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7379__auto___9398);

return statearr_9393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7381__auto__);
});})(c__7379__auto___9398,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args9417 = [];
var len__6282__auto___9473 = arguments.length;
var i__6283__auto___9474 = (0);
while(true){
if((i__6283__auto___9474 < len__6282__auto___9473)){
args9417.push((arguments[i__6283__auto___9474]));

var G__9475 = (i__6283__auto___9474 + (1));
i__6283__auto___9474 = G__9475;
continue;
} else {
}
break;
}

var G__9419 = args9417.length;
switch (G__9419) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9417.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7379__auto___9477 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7379__auto___9477,out){
return (function (){
var f__7380__auto__ = (function (){var switch__7267__auto__ = ((function (c__7379__auto___9477,out){
return (function (state_9449){
var state_val_9450 = (state_9449[(1)]);
if((state_val_9450 === (7))){
var inst_9429 = (state_9449[(7)]);
var inst_9428 = (state_9449[(8)]);
var inst_9428__$1 = (state_9449[(2)]);
var inst_9429__$1 = cljs.core.nth.call(null,inst_9428__$1,(0),null);
var inst_9430 = cljs.core.nth.call(null,inst_9428__$1,(1),null);
var inst_9431 = (inst_9429__$1 == null);
var state_9449__$1 = (function (){var statearr_9451 = state_9449;
(statearr_9451[(7)] = inst_9429__$1);

(statearr_9451[(9)] = inst_9430);

(statearr_9451[(8)] = inst_9428__$1);

return statearr_9451;
})();
if(cljs.core.truth_(inst_9431)){
var statearr_9452_9478 = state_9449__$1;
(statearr_9452_9478[(1)] = (8));

} else {
var statearr_9453_9479 = state_9449__$1;
(statearr_9453_9479[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9450 === (1))){
var inst_9420 = cljs.core.vec.call(null,chs);
var inst_9421 = inst_9420;
var state_9449__$1 = (function (){var statearr_9454 = state_9449;
(statearr_9454[(10)] = inst_9421);

return statearr_9454;
})();
var statearr_9455_9480 = state_9449__$1;
(statearr_9455_9480[(2)] = null);

(statearr_9455_9480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9450 === (4))){
var inst_9421 = (state_9449[(10)]);
var state_9449__$1 = state_9449;
return cljs.core.async.ioc_alts_BANG_.call(null,state_9449__$1,(7),inst_9421);
} else {
if((state_val_9450 === (6))){
var inst_9445 = (state_9449[(2)]);
var state_9449__$1 = state_9449;
var statearr_9456_9481 = state_9449__$1;
(statearr_9456_9481[(2)] = inst_9445);

(statearr_9456_9481[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9450 === (3))){
var inst_9447 = (state_9449[(2)]);
var state_9449__$1 = state_9449;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9449__$1,inst_9447);
} else {
if((state_val_9450 === (2))){
var inst_9421 = (state_9449[(10)]);
var inst_9423 = cljs.core.count.call(null,inst_9421);
var inst_9424 = (inst_9423 > (0));
var state_9449__$1 = state_9449;
if(cljs.core.truth_(inst_9424)){
var statearr_9458_9482 = state_9449__$1;
(statearr_9458_9482[(1)] = (4));

} else {
var statearr_9459_9483 = state_9449__$1;
(statearr_9459_9483[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9450 === (11))){
var inst_9421 = (state_9449[(10)]);
var inst_9438 = (state_9449[(2)]);
var tmp9457 = inst_9421;
var inst_9421__$1 = tmp9457;
var state_9449__$1 = (function (){var statearr_9460 = state_9449;
(statearr_9460[(10)] = inst_9421__$1);

(statearr_9460[(11)] = inst_9438);

return statearr_9460;
})();
var statearr_9461_9484 = state_9449__$1;
(statearr_9461_9484[(2)] = null);

(statearr_9461_9484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9450 === (9))){
var inst_9429 = (state_9449[(7)]);
var state_9449__$1 = state_9449;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9449__$1,(11),out,inst_9429);
} else {
if((state_val_9450 === (5))){
var inst_9443 = cljs.core.async.close_BANG_.call(null,out);
var state_9449__$1 = state_9449;
var statearr_9462_9485 = state_9449__$1;
(statearr_9462_9485[(2)] = inst_9443);

(statearr_9462_9485[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9450 === (10))){
var inst_9441 = (state_9449[(2)]);
var state_9449__$1 = state_9449;
var statearr_9463_9486 = state_9449__$1;
(statearr_9463_9486[(2)] = inst_9441);

(statearr_9463_9486[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9450 === (8))){
var inst_9429 = (state_9449[(7)]);
var inst_9421 = (state_9449[(10)]);
var inst_9430 = (state_9449[(9)]);
var inst_9428 = (state_9449[(8)]);
var inst_9433 = (function (){var cs = inst_9421;
var vec__9426 = inst_9428;
var v = inst_9429;
var c = inst_9430;
return ((function (cs,vec__9426,v,c,inst_9429,inst_9421,inst_9430,inst_9428,state_val_9450,c__7379__auto___9477,out){
return (function (p1__9416_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__9416_SHARP_);
});
;})(cs,vec__9426,v,c,inst_9429,inst_9421,inst_9430,inst_9428,state_val_9450,c__7379__auto___9477,out))
})();
var inst_9434 = cljs.core.filterv.call(null,inst_9433,inst_9421);
var inst_9421__$1 = inst_9434;
var state_9449__$1 = (function (){var statearr_9464 = state_9449;
(statearr_9464[(10)] = inst_9421__$1);

return statearr_9464;
})();
var statearr_9465_9487 = state_9449__$1;
(statearr_9465_9487[(2)] = null);

(statearr_9465_9487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7379__auto___9477,out))
;
return ((function (switch__7267__auto__,c__7379__auto___9477,out){
return (function() {
var cljs$core$async$state_machine__7268__auto__ = null;
var cljs$core$async$state_machine__7268__auto____0 = (function (){
var statearr_9469 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9469[(0)] = cljs$core$async$state_machine__7268__auto__);

(statearr_9469[(1)] = (1));

return statearr_9469;
});
var cljs$core$async$state_machine__7268__auto____1 = (function (state_9449){
while(true){
var ret_value__7269__auto__ = (function (){try{while(true){
var result__7270__auto__ = switch__7267__auto__.call(null,state_9449);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7270__auto__;
}
break;
}
}catch (e9470){if((e9470 instanceof Object)){
var ex__7271__auto__ = e9470;
var statearr_9471_9488 = state_9449;
(statearr_9471_9488[(5)] = ex__7271__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9449);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9489 = state_9449;
state_9449 = G__9489;
continue;
} else {
return ret_value__7269__auto__;
}
break;
}
});
cljs$core$async$state_machine__7268__auto__ = function(state_9449){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7268__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7268__auto____1.call(this,state_9449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7268__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7268__auto____0;
cljs$core$async$state_machine__7268__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7268__auto____1;
return cljs$core$async$state_machine__7268__auto__;
})()
;})(switch__7267__auto__,c__7379__auto___9477,out))
})();
var state__7381__auto__ = (function (){var statearr_9472 = f__7380__auto__.call(null);
(statearr_9472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7379__auto___9477);

return statearr_9472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7381__auto__);
});})(c__7379__auto___9477,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args9490 = [];
var len__6282__auto___9539 = arguments.length;
var i__6283__auto___9540 = (0);
while(true){
if((i__6283__auto___9540 < len__6282__auto___9539)){
args9490.push((arguments[i__6283__auto___9540]));

var G__9541 = (i__6283__auto___9540 + (1));
i__6283__auto___9540 = G__9541;
continue;
} else {
}
break;
}

var G__9492 = args9490.length;
switch (G__9492) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9490.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7379__auto___9543 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7379__auto___9543,out){
return (function (){
var f__7380__auto__ = (function (){var switch__7267__auto__ = ((function (c__7379__auto___9543,out){
return (function (state_9516){
var state_val_9517 = (state_9516[(1)]);
if((state_val_9517 === (7))){
var inst_9498 = (state_9516[(7)]);
var inst_9498__$1 = (state_9516[(2)]);
var inst_9499 = (inst_9498__$1 == null);
var inst_9500 = cljs.core.not.call(null,inst_9499);
var state_9516__$1 = (function (){var statearr_9518 = state_9516;
(statearr_9518[(7)] = inst_9498__$1);

return statearr_9518;
})();
if(inst_9500){
var statearr_9519_9544 = state_9516__$1;
(statearr_9519_9544[(1)] = (8));

} else {
var statearr_9520_9545 = state_9516__$1;
(statearr_9520_9545[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9517 === (1))){
var inst_9493 = (0);
var state_9516__$1 = (function (){var statearr_9521 = state_9516;
(statearr_9521[(8)] = inst_9493);

return statearr_9521;
})();
var statearr_9522_9546 = state_9516__$1;
(statearr_9522_9546[(2)] = null);

(statearr_9522_9546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9517 === (4))){
var state_9516__$1 = state_9516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9516__$1,(7),ch);
} else {
if((state_val_9517 === (6))){
var inst_9511 = (state_9516[(2)]);
var state_9516__$1 = state_9516;
var statearr_9523_9547 = state_9516__$1;
(statearr_9523_9547[(2)] = inst_9511);

(statearr_9523_9547[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9517 === (3))){
var inst_9513 = (state_9516[(2)]);
var inst_9514 = cljs.core.async.close_BANG_.call(null,out);
var state_9516__$1 = (function (){var statearr_9524 = state_9516;
(statearr_9524[(9)] = inst_9513);

return statearr_9524;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9516__$1,inst_9514);
} else {
if((state_val_9517 === (2))){
var inst_9493 = (state_9516[(8)]);
var inst_9495 = (inst_9493 < n);
var state_9516__$1 = state_9516;
if(cljs.core.truth_(inst_9495)){
var statearr_9525_9548 = state_9516__$1;
(statearr_9525_9548[(1)] = (4));

} else {
var statearr_9526_9549 = state_9516__$1;
(statearr_9526_9549[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9517 === (11))){
var inst_9493 = (state_9516[(8)]);
var inst_9503 = (state_9516[(2)]);
var inst_9504 = (inst_9493 + (1));
var inst_9493__$1 = inst_9504;
var state_9516__$1 = (function (){var statearr_9527 = state_9516;
(statearr_9527[(10)] = inst_9503);

(statearr_9527[(8)] = inst_9493__$1);

return statearr_9527;
})();
var statearr_9528_9550 = state_9516__$1;
(statearr_9528_9550[(2)] = null);

(statearr_9528_9550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9517 === (9))){
var state_9516__$1 = state_9516;
var statearr_9529_9551 = state_9516__$1;
(statearr_9529_9551[(2)] = null);

(statearr_9529_9551[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9517 === (5))){
var state_9516__$1 = state_9516;
var statearr_9530_9552 = state_9516__$1;
(statearr_9530_9552[(2)] = null);

(statearr_9530_9552[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9517 === (10))){
var inst_9508 = (state_9516[(2)]);
var state_9516__$1 = state_9516;
var statearr_9531_9553 = state_9516__$1;
(statearr_9531_9553[(2)] = inst_9508);

(statearr_9531_9553[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9517 === (8))){
var inst_9498 = (state_9516[(7)]);
var state_9516__$1 = state_9516;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9516__$1,(11),out,inst_9498);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7379__auto___9543,out))
;
return ((function (switch__7267__auto__,c__7379__auto___9543,out){
return (function() {
var cljs$core$async$state_machine__7268__auto__ = null;
var cljs$core$async$state_machine__7268__auto____0 = (function (){
var statearr_9535 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9535[(0)] = cljs$core$async$state_machine__7268__auto__);

(statearr_9535[(1)] = (1));

return statearr_9535;
});
var cljs$core$async$state_machine__7268__auto____1 = (function (state_9516){
while(true){
var ret_value__7269__auto__ = (function (){try{while(true){
var result__7270__auto__ = switch__7267__auto__.call(null,state_9516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7270__auto__;
}
break;
}
}catch (e9536){if((e9536 instanceof Object)){
var ex__7271__auto__ = e9536;
var statearr_9537_9554 = state_9516;
(statearr_9537_9554[(5)] = ex__7271__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9536;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9555 = state_9516;
state_9516 = G__9555;
continue;
} else {
return ret_value__7269__auto__;
}
break;
}
});
cljs$core$async$state_machine__7268__auto__ = function(state_9516){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7268__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7268__auto____1.call(this,state_9516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7268__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7268__auto____0;
cljs$core$async$state_machine__7268__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7268__auto____1;
return cljs$core$async$state_machine__7268__auto__;
})()
;})(switch__7267__auto__,c__7379__auto___9543,out))
})();
var state__7381__auto__ = (function (){var statearr_9538 = f__7380__auto__.call(null);
(statearr_9538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7379__auto___9543);

return statearr_9538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7381__auto__);
});})(c__7379__auto___9543,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async9563 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9563 = (function (map_LT_,f,ch,meta9564){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta9564 = meta9564;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9565,meta9564__$1){
var self__ = this;
var _9565__$1 = this;
return (new cljs.core.async.t_cljs$core$async9563(self__.map_LT_,self__.f,self__.ch,meta9564__$1));
});

cljs.core.async.t_cljs$core$async9563.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9565){
var self__ = this;
var _9565__$1 = this;
return self__.meta9564;
});

cljs.core.async.t_cljs$core$async9563.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async9563.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9563.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9563.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async9563.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async9566 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9566 = (function (map_LT_,f,ch,meta9564,_,fn1,meta9567){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta9564 = meta9564;
this._ = _;
this.fn1 = fn1;
this.meta9567 = meta9567;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_9568,meta9567__$1){
var self__ = this;
var _9568__$1 = this;
return (new cljs.core.async.t_cljs$core$async9566(self__.map_LT_,self__.f,self__.ch,self__.meta9564,self__._,self__.fn1,meta9567__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async9566.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_9568){
var self__ = this;
var _9568__$1 = this;
return self__.meta9567;
});})(___$1))
;

cljs.core.async.t_cljs$core$async9566.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async9566.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async9566.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async9566.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__9556_SHARP_){
return f1.call(null,(((p1__9556_SHARP_ == null))?null:self__.f.call(null,p1__9556_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async9566.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9564","meta9564",2087283657,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async9563","cljs.core.async/t_cljs$core$async9563",-1192674908,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta9567","meta9567",-494659592,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async9566.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9566.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9566";

cljs.core.async.t_cljs$core$async9566.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5819__auto__,writer__5820__auto__,opt__5821__auto__){
return cljs.core._write.call(null,writer__5820__auto__,"cljs.core.async/t_cljs$core$async9566");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async9566 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async9566(map_LT___$1,f__$1,ch__$1,meta9564__$1,___$2,fn1__$1,meta9567){
return (new cljs.core.async.t_cljs$core$async9566(map_LT___$1,f__$1,ch__$1,meta9564__$1,___$2,fn1__$1,meta9567));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async9566(self__.map_LT_,self__.f,self__.ch,self__.meta9564,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5201__auto__ = ret;
if(cljs.core.truth_(and__5201__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__5201__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async9563.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async9563.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async9563.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9564","meta9564",2087283657,null)], null);
});

cljs.core.async.t_cljs$core$async9563.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9563.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9563";

cljs.core.async.t_cljs$core$async9563.cljs$lang$ctorPrWriter = (function (this__5819__auto__,writer__5820__auto__,opt__5821__auto__){
return cljs.core._write.call(null,writer__5820__auto__,"cljs.core.async/t_cljs$core$async9563");
});

cljs.core.async.__GT_t_cljs$core$async9563 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async9563(map_LT___$1,f__$1,ch__$1,meta9564){
return (new cljs.core.async.t_cljs$core$async9563(map_LT___$1,f__$1,ch__$1,meta9564));
});

}

return (new cljs.core.async.t_cljs$core$async9563(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async9572 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9572 = (function (map_GT_,f,ch,meta9573){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta9573 = meta9573;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9574,meta9573__$1){
var self__ = this;
var _9574__$1 = this;
return (new cljs.core.async.t_cljs$core$async9572(self__.map_GT_,self__.f,self__.ch,meta9573__$1));
});

cljs.core.async.t_cljs$core$async9572.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9574){
var self__ = this;
var _9574__$1 = this;
return self__.meta9573;
});

cljs.core.async.t_cljs$core$async9572.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async9572.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9572.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async9572.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async9572.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async9572.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async9572.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9573","meta9573",-458433055,null)], null);
});

cljs.core.async.t_cljs$core$async9572.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9572.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9572";

cljs.core.async.t_cljs$core$async9572.cljs$lang$ctorPrWriter = (function (this__5819__auto__,writer__5820__auto__,opt__5821__auto__){
return cljs.core._write.call(null,writer__5820__auto__,"cljs.core.async/t_cljs$core$async9572");
});

cljs.core.async.__GT_t_cljs$core$async9572 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async9572(map_GT___$1,f__$1,ch__$1,meta9573){
return (new cljs.core.async.t_cljs$core$async9572(map_GT___$1,f__$1,ch__$1,meta9573));
});

}

return (new cljs.core.async.t_cljs$core$async9572(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async9578 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9578 = (function (filter_GT_,p,ch,meta9579){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta9579 = meta9579;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9578.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9580,meta9579__$1){
var self__ = this;
var _9580__$1 = this;
return (new cljs.core.async.t_cljs$core$async9578(self__.filter_GT_,self__.p,self__.ch,meta9579__$1));
});

cljs.core.async.t_cljs$core$async9578.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9580){
var self__ = this;
var _9580__$1 = this;
return self__.meta9579;
});

cljs.core.async.t_cljs$core$async9578.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async9578.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9578.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9578.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async9578.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async9578.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async9578.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async9578.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9579","meta9579",-2025525641,null)], null);
});

cljs.core.async.t_cljs$core$async9578.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9578.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9578";

cljs.core.async.t_cljs$core$async9578.cljs$lang$ctorPrWriter = (function (this__5819__auto__,writer__5820__auto__,opt__5821__auto__){
return cljs.core._write.call(null,writer__5820__auto__,"cljs.core.async/t_cljs$core$async9578");
});

cljs.core.async.__GT_t_cljs$core$async9578 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async9578(filter_GT___$1,p__$1,ch__$1,meta9579){
return (new cljs.core.async.t_cljs$core$async9578(filter_GT___$1,p__$1,ch__$1,meta9579));
});

}

return (new cljs.core.async.t_cljs$core$async9578(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args9581 = [];
var len__6282__auto___9625 = arguments.length;
var i__6283__auto___9626 = (0);
while(true){
if((i__6283__auto___9626 < len__6282__auto___9625)){
args9581.push((arguments[i__6283__auto___9626]));

var G__9627 = (i__6283__auto___9626 + (1));
i__6283__auto___9626 = G__9627;
continue;
} else {
}
break;
}

var G__9583 = args9581.length;
switch (G__9583) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9581.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7379__auto___9629 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7379__auto___9629,out){
return (function (){
var f__7380__auto__ = (function (){var switch__7267__auto__ = ((function (c__7379__auto___9629,out){
return (function (state_9604){
var state_val_9605 = (state_9604[(1)]);
if((state_val_9605 === (7))){
var inst_9600 = (state_9604[(2)]);
var state_9604__$1 = state_9604;
var statearr_9606_9630 = state_9604__$1;
(statearr_9606_9630[(2)] = inst_9600);

(statearr_9606_9630[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9605 === (1))){
var state_9604__$1 = state_9604;
var statearr_9607_9631 = state_9604__$1;
(statearr_9607_9631[(2)] = null);

(statearr_9607_9631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9605 === (4))){
var inst_9586 = (state_9604[(7)]);
var inst_9586__$1 = (state_9604[(2)]);
var inst_9587 = (inst_9586__$1 == null);
var state_9604__$1 = (function (){var statearr_9608 = state_9604;
(statearr_9608[(7)] = inst_9586__$1);

return statearr_9608;
})();
if(cljs.core.truth_(inst_9587)){
var statearr_9609_9632 = state_9604__$1;
(statearr_9609_9632[(1)] = (5));

} else {
var statearr_9610_9633 = state_9604__$1;
(statearr_9610_9633[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9605 === (6))){
var inst_9586 = (state_9604[(7)]);
var inst_9591 = p.call(null,inst_9586);
var state_9604__$1 = state_9604;
if(cljs.core.truth_(inst_9591)){
var statearr_9611_9634 = state_9604__$1;
(statearr_9611_9634[(1)] = (8));

} else {
var statearr_9612_9635 = state_9604__$1;
(statearr_9612_9635[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9605 === (3))){
var inst_9602 = (state_9604[(2)]);
var state_9604__$1 = state_9604;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9604__$1,inst_9602);
} else {
if((state_val_9605 === (2))){
var state_9604__$1 = state_9604;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9604__$1,(4),ch);
} else {
if((state_val_9605 === (11))){
var inst_9594 = (state_9604[(2)]);
var state_9604__$1 = state_9604;
var statearr_9613_9636 = state_9604__$1;
(statearr_9613_9636[(2)] = inst_9594);

(statearr_9613_9636[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9605 === (9))){
var state_9604__$1 = state_9604;
var statearr_9614_9637 = state_9604__$1;
(statearr_9614_9637[(2)] = null);

(statearr_9614_9637[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9605 === (5))){
var inst_9589 = cljs.core.async.close_BANG_.call(null,out);
var state_9604__$1 = state_9604;
var statearr_9615_9638 = state_9604__$1;
(statearr_9615_9638[(2)] = inst_9589);

(statearr_9615_9638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9605 === (10))){
var inst_9597 = (state_9604[(2)]);
var state_9604__$1 = (function (){var statearr_9616 = state_9604;
(statearr_9616[(8)] = inst_9597);

return statearr_9616;
})();
var statearr_9617_9639 = state_9604__$1;
(statearr_9617_9639[(2)] = null);

(statearr_9617_9639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9605 === (8))){
var inst_9586 = (state_9604[(7)]);
var state_9604__$1 = state_9604;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9604__$1,(11),out,inst_9586);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7379__auto___9629,out))
;
return ((function (switch__7267__auto__,c__7379__auto___9629,out){
return (function() {
var cljs$core$async$state_machine__7268__auto__ = null;
var cljs$core$async$state_machine__7268__auto____0 = (function (){
var statearr_9621 = [null,null,null,null,null,null,null,null,null];
(statearr_9621[(0)] = cljs$core$async$state_machine__7268__auto__);

(statearr_9621[(1)] = (1));

return statearr_9621;
});
var cljs$core$async$state_machine__7268__auto____1 = (function (state_9604){
while(true){
var ret_value__7269__auto__ = (function (){try{while(true){
var result__7270__auto__ = switch__7267__auto__.call(null,state_9604);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7270__auto__;
}
break;
}
}catch (e9622){if((e9622 instanceof Object)){
var ex__7271__auto__ = e9622;
var statearr_9623_9640 = state_9604;
(statearr_9623_9640[(5)] = ex__7271__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9622;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9641 = state_9604;
state_9604 = G__9641;
continue;
} else {
return ret_value__7269__auto__;
}
break;
}
});
cljs$core$async$state_machine__7268__auto__ = function(state_9604){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7268__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7268__auto____1.call(this,state_9604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7268__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7268__auto____0;
cljs$core$async$state_machine__7268__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7268__auto____1;
return cljs$core$async$state_machine__7268__auto__;
})()
;})(switch__7267__auto__,c__7379__auto___9629,out))
})();
var state__7381__auto__ = (function (){var statearr_9624 = f__7380__auto__.call(null);
(statearr_9624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7379__auto___9629);

return statearr_9624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7381__auto__);
});})(c__7379__auto___9629,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args9642 = [];
var len__6282__auto___9645 = arguments.length;
var i__6283__auto___9646 = (0);
while(true){
if((i__6283__auto___9646 < len__6282__auto___9645)){
args9642.push((arguments[i__6283__auto___9646]));

var G__9647 = (i__6283__auto___9646 + (1));
i__6283__auto___9646 = G__9647;
continue;
} else {
}
break;
}

var G__9644 = args9642.length;
switch (G__9644) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9642.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__7379__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7379__auto__){
return (function (){
var f__7380__auto__ = (function (){var switch__7267__auto__ = ((function (c__7379__auto__){
return (function (state_9814){
var state_val_9815 = (state_9814[(1)]);
if((state_val_9815 === (7))){
var inst_9810 = (state_9814[(2)]);
var state_9814__$1 = state_9814;
var statearr_9816_9857 = state_9814__$1;
(statearr_9816_9857[(2)] = inst_9810);

(statearr_9816_9857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9815 === (20))){
var inst_9780 = (state_9814[(7)]);
var inst_9791 = (state_9814[(2)]);
var inst_9792 = cljs.core.next.call(null,inst_9780);
var inst_9766 = inst_9792;
var inst_9767 = null;
var inst_9768 = (0);
var inst_9769 = (0);
var state_9814__$1 = (function (){var statearr_9817 = state_9814;
(statearr_9817[(8)] = inst_9767);

(statearr_9817[(9)] = inst_9766);

(statearr_9817[(10)] = inst_9769);

(statearr_9817[(11)] = inst_9768);

(statearr_9817[(12)] = inst_9791);

return statearr_9817;
})();
var statearr_9818_9858 = state_9814__$1;
(statearr_9818_9858[(2)] = null);

(statearr_9818_9858[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9815 === (1))){
var state_9814__$1 = state_9814;
var statearr_9819_9859 = state_9814__$1;
(statearr_9819_9859[(2)] = null);

(statearr_9819_9859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9815 === (4))){
var inst_9755 = (state_9814[(13)]);
var inst_9755__$1 = (state_9814[(2)]);
var inst_9756 = (inst_9755__$1 == null);
var state_9814__$1 = (function (){var statearr_9820 = state_9814;
(statearr_9820[(13)] = inst_9755__$1);

return statearr_9820;
})();
if(cljs.core.truth_(inst_9756)){
var statearr_9821_9860 = state_9814__$1;
(statearr_9821_9860[(1)] = (5));

} else {
var statearr_9822_9861 = state_9814__$1;
(statearr_9822_9861[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9815 === (15))){
var state_9814__$1 = state_9814;
var statearr_9826_9862 = state_9814__$1;
(statearr_9826_9862[(2)] = null);

(statearr_9826_9862[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9815 === (21))){
var state_9814__$1 = state_9814;
var statearr_9827_9863 = state_9814__$1;
(statearr_9827_9863[(2)] = null);

(statearr_9827_9863[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9815 === (13))){
var inst_9767 = (state_9814[(8)]);
var inst_9766 = (state_9814[(9)]);
var inst_9769 = (state_9814[(10)]);
var inst_9768 = (state_9814[(11)]);
var inst_9776 = (state_9814[(2)]);
var inst_9777 = (inst_9769 + (1));
var tmp9823 = inst_9767;
var tmp9824 = inst_9766;
var tmp9825 = inst_9768;
var inst_9766__$1 = tmp9824;
var inst_9767__$1 = tmp9823;
var inst_9768__$1 = tmp9825;
var inst_9769__$1 = inst_9777;
var state_9814__$1 = (function (){var statearr_9828 = state_9814;
(statearr_9828[(14)] = inst_9776);

(statearr_9828[(8)] = inst_9767__$1);

(statearr_9828[(9)] = inst_9766__$1);

(statearr_9828[(10)] = inst_9769__$1);

(statearr_9828[(11)] = inst_9768__$1);

return statearr_9828;
})();
var statearr_9829_9864 = state_9814__$1;
(statearr_9829_9864[(2)] = null);

(statearr_9829_9864[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9815 === (22))){
var state_9814__$1 = state_9814;
var statearr_9830_9865 = state_9814__$1;
(statearr_9830_9865[(2)] = null);

(statearr_9830_9865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9815 === (6))){
var inst_9755 = (state_9814[(13)]);
var inst_9764 = f.call(null,inst_9755);
var inst_9765 = cljs.core.seq.call(null,inst_9764);
var inst_9766 = inst_9765;
var inst_9767 = null;
var inst_9768 = (0);
var inst_9769 = (0);
var state_9814__$1 = (function (){var statearr_9831 = state_9814;
(statearr_9831[(8)] = inst_9767);

(statearr_9831[(9)] = inst_9766);

(statearr_9831[(10)] = inst_9769);

(statearr_9831[(11)] = inst_9768);

return statearr_9831;
})();
var statearr_9832_9866 = state_9814__$1;
(statearr_9832_9866[(2)] = null);

(statearr_9832_9866[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9815 === (17))){
var inst_9780 = (state_9814[(7)]);
var inst_9784 = cljs.core.chunk_first.call(null,inst_9780);
var inst_9785 = cljs.core.chunk_rest.call(null,inst_9780);
var inst_9786 = cljs.core.count.call(null,inst_9784);
var inst_9766 = inst_9785;
var inst_9767 = inst_9784;
var inst_9768 = inst_9786;
var inst_9769 = (0);
var state_9814__$1 = (function (){var statearr_9833 = state_9814;
(statearr_9833[(8)] = inst_9767);

(statearr_9833[(9)] = inst_9766);

(statearr_9833[(10)] = inst_9769);

(statearr_9833[(11)] = inst_9768);

return statearr_9833;
})();
var statearr_9834_9867 = state_9814__$1;
(statearr_9834_9867[(2)] = null);

(statearr_9834_9867[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9815 === (3))){
var inst_9812 = (state_9814[(2)]);
var state_9814__$1 = state_9814;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9814__$1,inst_9812);
} else {
if((state_val_9815 === (12))){
var inst_9800 = (state_9814[(2)]);
var state_9814__$1 = state_9814;
var statearr_9835_9868 = state_9814__$1;
(statearr_9835_9868[(2)] = inst_9800);

(statearr_9835_9868[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9815 === (2))){
var state_9814__$1 = state_9814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9814__$1,(4),in$);
} else {
if((state_val_9815 === (23))){
var inst_9808 = (state_9814[(2)]);
var state_9814__$1 = state_9814;
var statearr_9836_9869 = state_9814__$1;
(statearr_9836_9869[(2)] = inst_9808);

(statearr_9836_9869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9815 === (19))){
var inst_9795 = (state_9814[(2)]);
var state_9814__$1 = state_9814;
var statearr_9837_9870 = state_9814__$1;
(statearr_9837_9870[(2)] = inst_9795);

(statearr_9837_9870[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9815 === (11))){
var inst_9766 = (state_9814[(9)]);
var inst_9780 = (state_9814[(7)]);
var inst_9780__$1 = cljs.core.seq.call(null,inst_9766);
var state_9814__$1 = (function (){var statearr_9838 = state_9814;
(statearr_9838[(7)] = inst_9780__$1);

return statearr_9838;
})();
if(inst_9780__$1){
var statearr_9839_9871 = state_9814__$1;
(statearr_9839_9871[(1)] = (14));

} else {
var statearr_9840_9872 = state_9814__$1;
(statearr_9840_9872[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9815 === (9))){
var inst_9802 = (state_9814[(2)]);
var inst_9803 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_9814__$1 = (function (){var statearr_9841 = state_9814;
(statearr_9841[(15)] = inst_9802);

return statearr_9841;
})();
if(cljs.core.truth_(inst_9803)){
var statearr_9842_9873 = state_9814__$1;
(statearr_9842_9873[(1)] = (21));

} else {
var statearr_9843_9874 = state_9814__$1;
(statearr_9843_9874[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9815 === (5))){
var inst_9758 = cljs.core.async.close_BANG_.call(null,out);
var state_9814__$1 = state_9814;
var statearr_9844_9875 = state_9814__$1;
(statearr_9844_9875[(2)] = inst_9758);

(statearr_9844_9875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9815 === (14))){
var inst_9780 = (state_9814[(7)]);
var inst_9782 = cljs.core.chunked_seq_QMARK_.call(null,inst_9780);
var state_9814__$1 = state_9814;
if(inst_9782){
var statearr_9845_9876 = state_9814__$1;
(statearr_9845_9876[(1)] = (17));

} else {
var statearr_9846_9877 = state_9814__$1;
(statearr_9846_9877[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9815 === (16))){
var inst_9798 = (state_9814[(2)]);
var state_9814__$1 = state_9814;
var statearr_9847_9878 = state_9814__$1;
(statearr_9847_9878[(2)] = inst_9798);

(statearr_9847_9878[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9815 === (10))){
var inst_9767 = (state_9814[(8)]);
var inst_9769 = (state_9814[(10)]);
var inst_9774 = cljs.core._nth.call(null,inst_9767,inst_9769);
var state_9814__$1 = state_9814;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9814__$1,(13),out,inst_9774);
} else {
if((state_val_9815 === (18))){
var inst_9780 = (state_9814[(7)]);
var inst_9789 = cljs.core.first.call(null,inst_9780);
var state_9814__$1 = state_9814;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9814__$1,(20),out,inst_9789);
} else {
if((state_val_9815 === (8))){
var inst_9769 = (state_9814[(10)]);
var inst_9768 = (state_9814[(11)]);
var inst_9771 = (inst_9769 < inst_9768);
var inst_9772 = inst_9771;
var state_9814__$1 = state_9814;
if(cljs.core.truth_(inst_9772)){
var statearr_9848_9879 = state_9814__$1;
(statearr_9848_9879[(1)] = (10));

} else {
var statearr_9849_9880 = state_9814__$1;
(statearr_9849_9880[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7379__auto__))
;
return ((function (switch__7267__auto__,c__7379__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__7268__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__7268__auto____0 = (function (){
var statearr_9853 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9853[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__7268__auto__);

(statearr_9853[(1)] = (1));

return statearr_9853;
});
var cljs$core$async$mapcat_STAR__$_state_machine__7268__auto____1 = (function (state_9814){
while(true){
var ret_value__7269__auto__ = (function (){try{while(true){
var result__7270__auto__ = switch__7267__auto__.call(null,state_9814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7270__auto__;
}
break;
}
}catch (e9854){if((e9854 instanceof Object)){
var ex__7271__auto__ = e9854;
var statearr_9855_9881 = state_9814;
(statearr_9855_9881[(5)] = ex__7271__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9854;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9882 = state_9814;
state_9814 = G__9882;
continue;
} else {
return ret_value__7269__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__7268__auto__ = function(state_9814){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__7268__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__7268__auto____1.call(this,state_9814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__7268__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__7268__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__7268__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__7268__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__7268__auto__;
})()
;})(switch__7267__auto__,c__7379__auto__))
})();
var state__7381__auto__ = (function (){var statearr_9856 = f__7380__auto__.call(null);
(statearr_9856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7379__auto__);

return statearr_9856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7381__auto__);
});})(c__7379__auto__))
);

return c__7379__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args9883 = [];
var len__6282__auto___9886 = arguments.length;
var i__6283__auto___9887 = (0);
while(true){
if((i__6283__auto___9887 < len__6282__auto___9886)){
args9883.push((arguments[i__6283__auto___9887]));

var G__9888 = (i__6283__auto___9887 + (1));
i__6283__auto___9887 = G__9888;
continue;
} else {
}
break;
}

var G__9885 = args9883.length;
switch (G__9885) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9883.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args9890 = [];
var len__6282__auto___9893 = arguments.length;
var i__6283__auto___9894 = (0);
while(true){
if((i__6283__auto___9894 < len__6282__auto___9893)){
args9890.push((arguments[i__6283__auto___9894]));

var G__9895 = (i__6283__auto___9894 + (1));
i__6283__auto___9894 = G__9895;
continue;
} else {
}
break;
}

var G__9892 = args9890.length;
switch (G__9892) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9890.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args9897 = [];
var len__6282__auto___9948 = arguments.length;
var i__6283__auto___9949 = (0);
while(true){
if((i__6283__auto___9949 < len__6282__auto___9948)){
args9897.push((arguments[i__6283__auto___9949]));

var G__9950 = (i__6283__auto___9949 + (1));
i__6283__auto___9949 = G__9950;
continue;
} else {
}
break;
}

var G__9899 = args9897.length;
switch (G__9899) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9897.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7379__auto___9952 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7379__auto___9952,out){
return (function (){
var f__7380__auto__ = (function (){var switch__7267__auto__ = ((function (c__7379__auto___9952,out){
return (function (state_9923){
var state_val_9924 = (state_9923[(1)]);
if((state_val_9924 === (7))){
var inst_9918 = (state_9923[(2)]);
var state_9923__$1 = state_9923;
var statearr_9925_9953 = state_9923__$1;
(statearr_9925_9953[(2)] = inst_9918);

(statearr_9925_9953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9924 === (1))){
var inst_9900 = null;
var state_9923__$1 = (function (){var statearr_9926 = state_9923;
(statearr_9926[(7)] = inst_9900);

return statearr_9926;
})();
var statearr_9927_9954 = state_9923__$1;
(statearr_9927_9954[(2)] = null);

(statearr_9927_9954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9924 === (4))){
var inst_9903 = (state_9923[(8)]);
var inst_9903__$1 = (state_9923[(2)]);
var inst_9904 = (inst_9903__$1 == null);
var inst_9905 = cljs.core.not.call(null,inst_9904);
var state_9923__$1 = (function (){var statearr_9928 = state_9923;
(statearr_9928[(8)] = inst_9903__$1);

return statearr_9928;
})();
if(inst_9905){
var statearr_9929_9955 = state_9923__$1;
(statearr_9929_9955[(1)] = (5));

} else {
var statearr_9930_9956 = state_9923__$1;
(statearr_9930_9956[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9924 === (6))){
var state_9923__$1 = state_9923;
var statearr_9931_9957 = state_9923__$1;
(statearr_9931_9957[(2)] = null);

(statearr_9931_9957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9924 === (3))){
var inst_9920 = (state_9923[(2)]);
var inst_9921 = cljs.core.async.close_BANG_.call(null,out);
var state_9923__$1 = (function (){var statearr_9932 = state_9923;
(statearr_9932[(9)] = inst_9920);

return statearr_9932;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9923__$1,inst_9921);
} else {
if((state_val_9924 === (2))){
var state_9923__$1 = state_9923;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9923__$1,(4),ch);
} else {
if((state_val_9924 === (11))){
var inst_9903 = (state_9923[(8)]);
var inst_9912 = (state_9923[(2)]);
var inst_9900 = inst_9903;
var state_9923__$1 = (function (){var statearr_9933 = state_9923;
(statearr_9933[(7)] = inst_9900);

(statearr_9933[(10)] = inst_9912);

return statearr_9933;
})();
var statearr_9934_9958 = state_9923__$1;
(statearr_9934_9958[(2)] = null);

(statearr_9934_9958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9924 === (9))){
var inst_9903 = (state_9923[(8)]);
var state_9923__$1 = state_9923;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9923__$1,(11),out,inst_9903);
} else {
if((state_val_9924 === (5))){
var inst_9900 = (state_9923[(7)]);
var inst_9903 = (state_9923[(8)]);
var inst_9907 = cljs.core._EQ_.call(null,inst_9903,inst_9900);
var state_9923__$1 = state_9923;
if(inst_9907){
var statearr_9936_9959 = state_9923__$1;
(statearr_9936_9959[(1)] = (8));

} else {
var statearr_9937_9960 = state_9923__$1;
(statearr_9937_9960[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9924 === (10))){
var inst_9915 = (state_9923[(2)]);
var state_9923__$1 = state_9923;
var statearr_9938_9961 = state_9923__$1;
(statearr_9938_9961[(2)] = inst_9915);

(statearr_9938_9961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9924 === (8))){
var inst_9900 = (state_9923[(7)]);
var tmp9935 = inst_9900;
var inst_9900__$1 = tmp9935;
var state_9923__$1 = (function (){var statearr_9939 = state_9923;
(statearr_9939[(7)] = inst_9900__$1);

return statearr_9939;
})();
var statearr_9940_9962 = state_9923__$1;
(statearr_9940_9962[(2)] = null);

(statearr_9940_9962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7379__auto___9952,out))
;
return ((function (switch__7267__auto__,c__7379__auto___9952,out){
return (function() {
var cljs$core$async$state_machine__7268__auto__ = null;
var cljs$core$async$state_machine__7268__auto____0 = (function (){
var statearr_9944 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9944[(0)] = cljs$core$async$state_machine__7268__auto__);

(statearr_9944[(1)] = (1));

return statearr_9944;
});
var cljs$core$async$state_machine__7268__auto____1 = (function (state_9923){
while(true){
var ret_value__7269__auto__ = (function (){try{while(true){
var result__7270__auto__ = switch__7267__auto__.call(null,state_9923);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7270__auto__;
}
break;
}
}catch (e9945){if((e9945 instanceof Object)){
var ex__7271__auto__ = e9945;
var statearr_9946_9963 = state_9923;
(statearr_9946_9963[(5)] = ex__7271__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9964 = state_9923;
state_9923 = G__9964;
continue;
} else {
return ret_value__7269__auto__;
}
break;
}
});
cljs$core$async$state_machine__7268__auto__ = function(state_9923){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7268__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7268__auto____1.call(this,state_9923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7268__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7268__auto____0;
cljs$core$async$state_machine__7268__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7268__auto____1;
return cljs$core$async$state_machine__7268__auto__;
})()
;})(switch__7267__auto__,c__7379__auto___9952,out))
})();
var state__7381__auto__ = (function (){var statearr_9947 = f__7380__auto__.call(null);
(statearr_9947[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7379__auto___9952);

return statearr_9947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7381__auto__);
});})(c__7379__auto___9952,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args9965 = [];
var len__6282__auto___10035 = arguments.length;
var i__6283__auto___10036 = (0);
while(true){
if((i__6283__auto___10036 < len__6282__auto___10035)){
args9965.push((arguments[i__6283__auto___10036]));

var G__10037 = (i__6283__auto___10036 + (1));
i__6283__auto___10036 = G__10037;
continue;
} else {
}
break;
}

var G__9967 = args9965.length;
switch (G__9967) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9965.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7379__auto___10039 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7379__auto___10039,out){
return (function (){
var f__7380__auto__ = (function (){var switch__7267__auto__ = ((function (c__7379__auto___10039,out){
return (function (state_10005){
var state_val_10006 = (state_10005[(1)]);
if((state_val_10006 === (7))){
var inst_10001 = (state_10005[(2)]);
var state_10005__$1 = state_10005;
var statearr_10007_10040 = state_10005__$1;
(statearr_10007_10040[(2)] = inst_10001);

(statearr_10007_10040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10006 === (1))){
var inst_9968 = (new Array(n));
var inst_9969 = inst_9968;
var inst_9970 = (0);
var state_10005__$1 = (function (){var statearr_10008 = state_10005;
(statearr_10008[(7)] = inst_9969);

(statearr_10008[(8)] = inst_9970);

return statearr_10008;
})();
var statearr_10009_10041 = state_10005__$1;
(statearr_10009_10041[(2)] = null);

(statearr_10009_10041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10006 === (4))){
var inst_9973 = (state_10005[(9)]);
var inst_9973__$1 = (state_10005[(2)]);
var inst_9974 = (inst_9973__$1 == null);
var inst_9975 = cljs.core.not.call(null,inst_9974);
var state_10005__$1 = (function (){var statearr_10010 = state_10005;
(statearr_10010[(9)] = inst_9973__$1);

return statearr_10010;
})();
if(inst_9975){
var statearr_10011_10042 = state_10005__$1;
(statearr_10011_10042[(1)] = (5));

} else {
var statearr_10012_10043 = state_10005__$1;
(statearr_10012_10043[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10006 === (15))){
var inst_9995 = (state_10005[(2)]);
var state_10005__$1 = state_10005;
var statearr_10013_10044 = state_10005__$1;
(statearr_10013_10044[(2)] = inst_9995);

(statearr_10013_10044[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10006 === (13))){
var state_10005__$1 = state_10005;
var statearr_10014_10045 = state_10005__$1;
(statearr_10014_10045[(2)] = null);

(statearr_10014_10045[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10006 === (6))){
var inst_9970 = (state_10005[(8)]);
var inst_9991 = (inst_9970 > (0));
var state_10005__$1 = state_10005;
if(cljs.core.truth_(inst_9991)){
var statearr_10015_10046 = state_10005__$1;
(statearr_10015_10046[(1)] = (12));

} else {
var statearr_10016_10047 = state_10005__$1;
(statearr_10016_10047[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10006 === (3))){
var inst_10003 = (state_10005[(2)]);
var state_10005__$1 = state_10005;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10005__$1,inst_10003);
} else {
if((state_val_10006 === (12))){
var inst_9969 = (state_10005[(7)]);
var inst_9993 = cljs.core.vec.call(null,inst_9969);
var state_10005__$1 = state_10005;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10005__$1,(15),out,inst_9993);
} else {
if((state_val_10006 === (2))){
var state_10005__$1 = state_10005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10005__$1,(4),ch);
} else {
if((state_val_10006 === (11))){
var inst_9985 = (state_10005[(2)]);
var inst_9986 = (new Array(n));
var inst_9969 = inst_9986;
var inst_9970 = (0);
var state_10005__$1 = (function (){var statearr_10017 = state_10005;
(statearr_10017[(7)] = inst_9969);

(statearr_10017[(10)] = inst_9985);

(statearr_10017[(8)] = inst_9970);

return statearr_10017;
})();
var statearr_10018_10048 = state_10005__$1;
(statearr_10018_10048[(2)] = null);

(statearr_10018_10048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10006 === (9))){
var inst_9969 = (state_10005[(7)]);
var inst_9983 = cljs.core.vec.call(null,inst_9969);
var state_10005__$1 = state_10005;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10005__$1,(11),out,inst_9983);
} else {
if((state_val_10006 === (5))){
var inst_9978 = (state_10005[(11)]);
var inst_9969 = (state_10005[(7)]);
var inst_9970 = (state_10005[(8)]);
var inst_9973 = (state_10005[(9)]);
var inst_9977 = (inst_9969[inst_9970] = inst_9973);
var inst_9978__$1 = (inst_9970 + (1));
var inst_9979 = (inst_9978__$1 < n);
var state_10005__$1 = (function (){var statearr_10019 = state_10005;
(statearr_10019[(11)] = inst_9978__$1);

(statearr_10019[(12)] = inst_9977);

return statearr_10019;
})();
if(cljs.core.truth_(inst_9979)){
var statearr_10020_10049 = state_10005__$1;
(statearr_10020_10049[(1)] = (8));

} else {
var statearr_10021_10050 = state_10005__$1;
(statearr_10021_10050[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10006 === (14))){
var inst_9998 = (state_10005[(2)]);
var inst_9999 = cljs.core.async.close_BANG_.call(null,out);
var state_10005__$1 = (function (){var statearr_10023 = state_10005;
(statearr_10023[(13)] = inst_9998);

return statearr_10023;
})();
var statearr_10024_10051 = state_10005__$1;
(statearr_10024_10051[(2)] = inst_9999);

(statearr_10024_10051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10006 === (10))){
var inst_9989 = (state_10005[(2)]);
var state_10005__$1 = state_10005;
var statearr_10025_10052 = state_10005__$1;
(statearr_10025_10052[(2)] = inst_9989);

(statearr_10025_10052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10006 === (8))){
var inst_9978 = (state_10005[(11)]);
var inst_9969 = (state_10005[(7)]);
var tmp10022 = inst_9969;
var inst_9969__$1 = tmp10022;
var inst_9970 = inst_9978;
var state_10005__$1 = (function (){var statearr_10026 = state_10005;
(statearr_10026[(7)] = inst_9969__$1);

(statearr_10026[(8)] = inst_9970);

return statearr_10026;
})();
var statearr_10027_10053 = state_10005__$1;
(statearr_10027_10053[(2)] = null);

(statearr_10027_10053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7379__auto___10039,out))
;
return ((function (switch__7267__auto__,c__7379__auto___10039,out){
return (function() {
var cljs$core$async$state_machine__7268__auto__ = null;
var cljs$core$async$state_machine__7268__auto____0 = (function (){
var statearr_10031 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10031[(0)] = cljs$core$async$state_machine__7268__auto__);

(statearr_10031[(1)] = (1));

return statearr_10031;
});
var cljs$core$async$state_machine__7268__auto____1 = (function (state_10005){
while(true){
var ret_value__7269__auto__ = (function (){try{while(true){
var result__7270__auto__ = switch__7267__auto__.call(null,state_10005);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7270__auto__;
}
break;
}
}catch (e10032){if((e10032 instanceof Object)){
var ex__7271__auto__ = e10032;
var statearr_10033_10054 = state_10005;
(statearr_10033_10054[(5)] = ex__7271__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10055 = state_10005;
state_10005 = G__10055;
continue;
} else {
return ret_value__7269__auto__;
}
break;
}
});
cljs$core$async$state_machine__7268__auto__ = function(state_10005){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7268__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7268__auto____1.call(this,state_10005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7268__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7268__auto____0;
cljs$core$async$state_machine__7268__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7268__auto____1;
return cljs$core$async$state_machine__7268__auto__;
})()
;})(switch__7267__auto__,c__7379__auto___10039,out))
})();
var state__7381__auto__ = (function (){var statearr_10034 = f__7380__auto__.call(null);
(statearr_10034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7379__auto___10039);

return statearr_10034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7381__auto__);
});})(c__7379__auto___10039,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args10056 = [];
var len__6282__auto___10130 = arguments.length;
var i__6283__auto___10131 = (0);
while(true){
if((i__6283__auto___10131 < len__6282__auto___10130)){
args10056.push((arguments[i__6283__auto___10131]));

var G__10132 = (i__6283__auto___10131 + (1));
i__6283__auto___10131 = G__10132;
continue;
} else {
}
break;
}

var G__10058 = args10056.length;
switch (G__10058) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10056.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7379__auto___10134 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7379__auto___10134,out){
return (function (){
var f__7380__auto__ = (function (){var switch__7267__auto__ = ((function (c__7379__auto___10134,out){
return (function (state_10100){
var state_val_10101 = (state_10100[(1)]);
if((state_val_10101 === (7))){
var inst_10096 = (state_10100[(2)]);
var state_10100__$1 = state_10100;
var statearr_10102_10135 = state_10100__$1;
(statearr_10102_10135[(2)] = inst_10096);

(statearr_10102_10135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10101 === (1))){
var inst_10059 = [];
var inst_10060 = inst_10059;
var inst_10061 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_10100__$1 = (function (){var statearr_10103 = state_10100;
(statearr_10103[(7)] = inst_10061);

(statearr_10103[(8)] = inst_10060);

return statearr_10103;
})();
var statearr_10104_10136 = state_10100__$1;
(statearr_10104_10136[(2)] = null);

(statearr_10104_10136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10101 === (4))){
var inst_10064 = (state_10100[(9)]);
var inst_10064__$1 = (state_10100[(2)]);
var inst_10065 = (inst_10064__$1 == null);
var inst_10066 = cljs.core.not.call(null,inst_10065);
var state_10100__$1 = (function (){var statearr_10105 = state_10100;
(statearr_10105[(9)] = inst_10064__$1);

return statearr_10105;
})();
if(inst_10066){
var statearr_10106_10137 = state_10100__$1;
(statearr_10106_10137[(1)] = (5));

} else {
var statearr_10107_10138 = state_10100__$1;
(statearr_10107_10138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10101 === (15))){
var inst_10090 = (state_10100[(2)]);
var state_10100__$1 = state_10100;
var statearr_10108_10139 = state_10100__$1;
(statearr_10108_10139[(2)] = inst_10090);

(statearr_10108_10139[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10101 === (13))){
var state_10100__$1 = state_10100;
var statearr_10109_10140 = state_10100__$1;
(statearr_10109_10140[(2)] = null);

(statearr_10109_10140[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10101 === (6))){
var inst_10060 = (state_10100[(8)]);
var inst_10085 = inst_10060.length;
var inst_10086 = (inst_10085 > (0));
var state_10100__$1 = state_10100;
if(cljs.core.truth_(inst_10086)){
var statearr_10110_10141 = state_10100__$1;
(statearr_10110_10141[(1)] = (12));

} else {
var statearr_10111_10142 = state_10100__$1;
(statearr_10111_10142[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10101 === (3))){
var inst_10098 = (state_10100[(2)]);
var state_10100__$1 = state_10100;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10100__$1,inst_10098);
} else {
if((state_val_10101 === (12))){
var inst_10060 = (state_10100[(8)]);
var inst_10088 = cljs.core.vec.call(null,inst_10060);
var state_10100__$1 = state_10100;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10100__$1,(15),out,inst_10088);
} else {
if((state_val_10101 === (2))){
var state_10100__$1 = state_10100;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10100__$1,(4),ch);
} else {
if((state_val_10101 === (11))){
var inst_10068 = (state_10100[(10)]);
var inst_10064 = (state_10100[(9)]);
var inst_10078 = (state_10100[(2)]);
var inst_10079 = [];
var inst_10080 = inst_10079.push(inst_10064);
var inst_10060 = inst_10079;
var inst_10061 = inst_10068;
var state_10100__$1 = (function (){var statearr_10112 = state_10100;
(statearr_10112[(7)] = inst_10061);

(statearr_10112[(8)] = inst_10060);

(statearr_10112[(11)] = inst_10078);

(statearr_10112[(12)] = inst_10080);

return statearr_10112;
})();
var statearr_10113_10143 = state_10100__$1;
(statearr_10113_10143[(2)] = null);

(statearr_10113_10143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10101 === (9))){
var inst_10060 = (state_10100[(8)]);
var inst_10076 = cljs.core.vec.call(null,inst_10060);
var state_10100__$1 = state_10100;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10100__$1,(11),out,inst_10076);
} else {
if((state_val_10101 === (5))){
var inst_10061 = (state_10100[(7)]);
var inst_10068 = (state_10100[(10)]);
var inst_10064 = (state_10100[(9)]);
var inst_10068__$1 = f.call(null,inst_10064);
var inst_10069 = cljs.core._EQ_.call(null,inst_10068__$1,inst_10061);
var inst_10070 = cljs.core.keyword_identical_QMARK_.call(null,inst_10061,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_10071 = (inst_10069) || (inst_10070);
var state_10100__$1 = (function (){var statearr_10114 = state_10100;
(statearr_10114[(10)] = inst_10068__$1);

return statearr_10114;
})();
if(cljs.core.truth_(inst_10071)){
var statearr_10115_10144 = state_10100__$1;
(statearr_10115_10144[(1)] = (8));

} else {
var statearr_10116_10145 = state_10100__$1;
(statearr_10116_10145[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10101 === (14))){
var inst_10093 = (state_10100[(2)]);
var inst_10094 = cljs.core.async.close_BANG_.call(null,out);
var state_10100__$1 = (function (){var statearr_10118 = state_10100;
(statearr_10118[(13)] = inst_10093);

return statearr_10118;
})();
var statearr_10119_10146 = state_10100__$1;
(statearr_10119_10146[(2)] = inst_10094);

(statearr_10119_10146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10101 === (10))){
var inst_10083 = (state_10100[(2)]);
var state_10100__$1 = state_10100;
var statearr_10120_10147 = state_10100__$1;
(statearr_10120_10147[(2)] = inst_10083);

(statearr_10120_10147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10101 === (8))){
var inst_10060 = (state_10100[(8)]);
var inst_10068 = (state_10100[(10)]);
var inst_10064 = (state_10100[(9)]);
var inst_10073 = inst_10060.push(inst_10064);
var tmp10117 = inst_10060;
var inst_10060__$1 = tmp10117;
var inst_10061 = inst_10068;
var state_10100__$1 = (function (){var statearr_10121 = state_10100;
(statearr_10121[(7)] = inst_10061);

(statearr_10121[(8)] = inst_10060__$1);

(statearr_10121[(14)] = inst_10073);

return statearr_10121;
})();
var statearr_10122_10148 = state_10100__$1;
(statearr_10122_10148[(2)] = null);

(statearr_10122_10148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7379__auto___10134,out))
;
return ((function (switch__7267__auto__,c__7379__auto___10134,out){
return (function() {
var cljs$core$async$state_machine__7268__auto__ = null;
var cljs$core$async$state_machine__7268__auto____0 = (function (){
var statearr_10126 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10126[(0)] = cljs$core$async$state_machine__7268__auto__);

(statearr_10126[(1)] = (1));

return statearr_10126;
});
var cljs$core$async$state_machine__7268__auto____1 = (function (state_10100){
while(true){
var ret_value__7269__auto__ = (function (){try{while(true){
var result__7270__auto__ = switch__7267__auto__.call(null,state_10100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7270__auto__;
}
break;
}
}catch (e10127){if((e10127 instanceof Object)){
var ex__7271__auto__ = e10127;
var statearr_10128_10149 = state_10100;
(statearr_10128_10149[(5)] = ex__7271__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10150 = state_10100;
state_10100 = G__10150;
continue;
} else {
return ret_value__7269__auto__;
}
break;
}
});
cljs$core$async$state_machine__7268__auto__ = function(state_10100){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7268__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7268__auto____1.call(this,state_10100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7268__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7268__auto____0;
cljs$core$async$state_machine__7268__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7268__auto____1;
return cljs$core$async$state_machine__7268__auto__;
})()
;})(switch__7267__auto__,c__7379__auto___10134,out))
})();
var state__7381__auto__ = (function (){var statearr_10129 = f__7380__auto__.call(null);
(statearr_10129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7379__auto___10134);

return statearr_10129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7381__auto__);
});})(c__7379__auto___10134,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map
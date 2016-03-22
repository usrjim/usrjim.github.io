// Compiled by ClojureScript 1.8.34 {}
goog.provide('sandbox.tim10k');
goog.require('cljs.core');
goog.require('cljs.core.async');
sandbox.tim10k.colors = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red","yellow","green","blue","black","orange"], null);
sandbox.tim10k.make_cell = (function sandbox$tim10k$make_cell(canvas,x,y){
var ctx = document.getElementById(canvas).getContext("2d");
var c__7237__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7237__auto__,ctx){
return (function (){
var f__7238__auto__ = (function (){var switch__7216__auto__ = ((function (c__7237__auto__,ctx){
return (function (state_7331){
var state_val_7332 = (state_7331[(1)]);
if((state_val_7332 === (1))){
var state_7331__$1 = state_7331;
var statearr_7333_7348 = state_7331__$1;
(statearr_7333_7348[(2)] = null);

(statearr_7333_7348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7332 === (2))){
var state_7331__$1 = state_7331;
var statearr_7334_7349 = state_7331__$1;
(statearr_7334_7349[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7332 === (3))){
var inst_7329 = (state_7331[(2)]);
var state_7331__$1 = state_7331;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7331__$1,inst_7329);
} else {
if((state_val_7332 === (4))){
var inst_7317 = cljs.core.rand_nth.call(null,sandbox.tim10k.colors);
var inst_7318 = ctx.fillStyle = inst_7317;
var inst_7319 = ctx.fillRect(x,y,(10),(10));
var inst_7320 = cljs.core.rand_int.call(null,(1000));
var inst_7321 = cljs.core.async.timeout.call(null,inst_7320);
var state_7331__$1 = (function (){var statearr_7336 = state_7331;
(statearr_7336[(7)] = inst_7319);

(statearr_7336[(8)] = inst_7318);

return statearr_7336;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7331__$1,(7),inst_7321);
} else {
if((state_val_7332 === (5))){
var state_7331__$1 = state_7331;
var statearr_7337_7350 = state_7331__$1;
(statearr_7337_7350[(2)] = null);

(statearr_7337_7350[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7332 === (6))){
var inst_7327 = (state_7331[(2)]);
var state_7331__$1 = state_7331;
var statearr_7338_7351 = state_7331__$1;
(statearr_7338_7351[(2)] = inst_7327);

(statearr_7338_7351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7332 === (7))){
var inst_7323 = (state_7331[(2)]);
var state_7331__$1 = (function (){var statearr_7339 = state_7331;
(statearr_7339[(9)] = inst_7323);

return statearr_7339;
})();
var statearr_7340_7352 = state_7331__$1;
(statearr_7340_7352[(2)] = null);

(statearr_7340_7352[(1)] = (2));


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
});})(c__7237__auto__,ctx))
;
return ((function (switch__7216__auto__,c__7237__auto__,ctx){
return (function() {
var sandbox$tim10k$make_cell_$_state_machine__7217__auto__ = null;
var sandbox$tim10k$make_cell_$_state_machine__7217__auto____0 = (function (){
var statearr_7344 = [null,null,null,null,null,null,null,null,null,null];
(statearr_7344[(0)] = sandbox$tim10k$make_cell_$_state_machine__7217__auto__);

(statearr_7344[(1)] = (1));

return statearr_7344;
});
var sandbox$tim10k$make_cell_$_state_machine__7217__auto____1 = (function (state_7331){
while(true){
var ret_value__7218__auto__ = (function (){try{while(true){
var result__7219__auto__ = switch__7216__auto__.call(null,state_7331);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7219__auto__;
}
break;
}
}catch (e7345){if((e7345 instanceof Object)){
var ex__7220__auto__ = e7345;
var statearr_7346_7353 = state_7331;
(statearr_7346_7353[(5)] = ex__7220__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7331);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7345;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7354 = state_7331;
state_7331 = G__7354;
continue;
} else {
return ret_value__7218__auto__;
}
break;
}
});
sandbox$tim10k$make_cell_$_state_machine__7217__auto__ = function(state_7331){
switch(arguments.length){
case 0:
return sandbox$tim10k$make_cell_$_state_machine__7217__auto____0.call(this);
case 1:
return sandbox$tim10k$make_cell_$_state_machine__7217__auto____1.call(this,state_7331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sandbox$tim10k$make_cell_$_state_machine__7217__auto__.cljs$core$IFn$_invoke$arity$0 = sandbox$tim10k$make_cell_$_state_machine__7217__auto____0;
sandbox$tim10k$make_cell_$_state_machine__7217__auto__.cljs$core$IFn$_invoke$arity$1 = sandbox$tim10k$make_cell_$_state_machine__7217__auto____1;
return sandbox$tim10k$make_cell_$_state_machine__7217__auto__;
})()
;})(switch__7216__auto__,c__7237__auto__,ctx))
})();
var state__7239__auto__ = (function (){var statearr_7347 = f__7238__auto__.call(null);
(statearr_7347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7237__auto__);

return statearr_7347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7239__auto__);
});})(c__7237__auto__,ctx))
);

return c__7237__auto__;
});
sandbox.tim10k.make_scene = (function sandbox$tim10k$make_scene(canvas,rows,cols){
var n__6127__auto__ = cols;
var x = (0);
while(true){
if((x < n__6127__auto__)){
var n__6127__auto___7355__$1 = rows;
var y_7356 = (0);
while(true){
if((y_7356 < n__6127__auto___7355__$1)){
sandbox.tim10k.make_cell.call(null,canvas,((10) * x),((10) * y_7356));

var G__7357 = (y_7356 + (1));
y_7356 = G__7357;
continue;
} else {
}
break;
}

var G__7358 = (x + (1));
x = G__7358;
continue;
} else {
return null;
}
break;
}
});
sandbox.tim10k.make_scene.call(null,"canvas",(100),(100));

//# sourceMappingURL=tim10k.js.map
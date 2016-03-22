(ns sandbox.tim10k
  (:require [cljs.core.async :refer [<! timeout]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

;;(enable-console-print!)
;;(println "Hello world!")

(def colors ["red" "yellow" "green" "blue" "black" "orange"])

(defn make-cell [canvas x y]
  (let [ctx (-> js/document
                (.getElementById canvas)
                (.getContext "2d"))]
    (go (while true
          (set! (.-fillStyle ctx) (rand-nth colors))
          (.fillRect ctx x y 10 10)
          (<! (timeout (rand-int 1000)))))))

(defn make-scene [canvas rows cols]
  (dotimes [x cols]
    (dotimes [y rows]
      (make-cell canvas (* 10 x) (* 10 y)))))

(make-scene "canvas" 100 100)

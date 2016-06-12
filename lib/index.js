"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    style: {
        root: {
            visibility: "hidden"
        },
        parent: {
            position: "absolute",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            overflow: "hidden",
            visibility: "hidden",
            zIndex: -1

        },
        child: {
            position: "absolute",
            left: 0,
            top: 0,
            transition: "0s"
        }
    },
    methods: {
        reset: function reset() {
            this.$els.expand.scrollLeft = 100000;
            this.$els.expand.scrollTop = 100000;
            this.$els.shrink.scrollLeft = 100000;
            this.$els.shrink.scrollTop = 100000;
        },
        onScroll: function onScroll() {
            this.$emit("resized");
            this.reset();
        }
    },
    attached: function attached() {
        this.reset();
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "<div class=resize-sensor :style=$options.style.root><div v-el:expand=\"\" :style=$options.style.parent @scroll=onScroll><div :style=\"[$options.style.child, { width: '100000px', height: '100000px' }]\"></div></div><div v-el:shrink=\"\" :style=$options.style.parent @scroll=onScroll><div :style=\"[$options.style.child, { width: '200%', height: '200%' }]\"></div></div></div>"

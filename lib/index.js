"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    data: function data() {
        return {
            style: {
                position: "absolute",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                overflow: "hidden",
                visibility: "hidden",
                zIndex: -1

            },
            childStyle: {
                position: "absolute",
                left: 0,
                top: 0,
                transition: "0s"
            }
        };
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
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "<div v-el:expand=\"\" class=resize-sensor :style=style @scroll=onScroll><div :style=\"[childStyle, { width: '100000px', height: '100000px' }]\"></div></div><div v-el:shrink=\"\" class=resize-sensor :style=style @scroll=onScroll><div :style=\"[childStyle, { width: '200%', height: '200%' }]\"></div></div>"
